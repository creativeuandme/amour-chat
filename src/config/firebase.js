// Instrumented Single Source of Truth Firebase Realtime Database Client

import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  push,
  onValue,
  off,
  set,
  remove
} from 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBc12trS-bPUSlnTXVnLo0pwrxnrAaYaEE",
  authDomain: "chat-e751a.firebaseapp.com",
  databaseURL: "https://chat-e751a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-e751a",
  storageBucket: "chat-e751a.firebasestorage.app",
  messagingSenderId: "648075806315",
  appId: "1:648075806315:web:7c8c3033d349871823d32e"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

console.log("[FIREBASE] initialized");
console.log("[FIREBASE] databaseURL:", firebaseConfig.databaseURL);

/**
 * 12. Minimal Temporary Firebase Test
 */
export async function runFirebaseDiagnosticTest() {
  const testRef = ref(db, "debug/test");
  try {
    await set(testRef, {
      message: "Firebase test",
      timestamp: Date.now()
    });
    console.log("[TEST] Firebase write completed");
    onValue(testRef, (snapshot) => {
      console.log("[TEST] Firebase read:", snapshot.val());
    }, { onlyOnce: true });
  } catch (error) {
    console.error("[TEST] Firebase test write failed:", error);
  }
}

/**
 * Listen to Connection State
 */
export function listenToConnectionState(onStateChange) {
  const connectedRef = ref(db, '.info/connected');
  const unsubscribe = onValue(connectedRef, (snap) => {
    console.log("[FIREBASE CONNECTION] connected:", snap.val());
    onStateChange(snap.val() === true);
  });
  return () => unsubscribe();
}

/**
 * Listen to messages in a room
 * Path: rooms/{roomId}/messages
 */
export function listenToMessages(roomId, onMessagesUpdate) {
  if (!roomId) return () => {};

  const messagesPath = `rooms/${roomId}/messages`;
  console.log("[LISTENER] subscribing");
  console.log("[LISTENER] roomId:", roomId);
  console.log("[LISTENER] path:", messagesPath);

  const messagesRef = ref(db, messagesPath);

  const unsubscribe = onValue(
    messagesRef,
    (snapshot) => {
      console.log("[LISTENER] Firebase update received");
      console.log("[LISTENER] snapshot exists:", snapshot.exists());
      console.log("[LISTENER] raw data:", snapshot.val());

      const data = snapshot.val();
      if (!data) {
        onMessagesUpdate([]);
        return;
      }

      const messages = Object.entries(data).map(([id, message]) => ({
        id,
        ...message
      }));

      messages.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

      onMessagesUpdate(messages);
    },
    (error) => {
      console.error("[LISTENER] FIREBASE LISTENER ERROR:", error);
    }
  );

  return () => {
    console.log("[LISTENER] unsubscribing");
    console.log("[LISTENER] roomId:", roomId);
    console.log("[LISTENER] path:", messagesPath);
    off(messagesRef);
    unsubscribe();
  };
}

/**
 * Send a text message
 * Pushes to rooms/{roomId}/messages
 */
export async function sendMessage(roomId, senderId, nickname, text) {
  if (!roomId || !text.trim()) return;

  const messagesPath = `rooms/${roomId}/messages`;
  console.log("[SEND] Starting send");
  console.log("[SEND] roomId:", roomId);
  console.log("[SEND] message:", text);
  console.log("[SEND] path:", messagesPath);

  const messagesRef = ref(db, messagesPath);

  const messageData = {
    senderId,
    nickname,
    text: text.trim(),
    timestamp: Date.now(),
    reactions: {}
  };

  try {
    const newMessageRef = push(messagesRef);
    console.log("[SEND] generated key:", newMessageRef.key);
    await set(newMessageRef, messageData);
    console.log("[SEND] Firebase write SUCCESS");
    return newMessageRef.key;
  } catch (error) {
    console.error("[SEND] FIREBASE WRITE FAILED:", error);
    throw error;
  }
}

/**
 * Add reaction to a message
 */
export async function addReactionToMessage(roomId, messageId, emoji, userId) {
  if (!roomId || !messageId) return;

  const reactionPath = `rooms/${roomId}/messages/${messageId}/reactions/${userId}`;
  try {
    await set(ref(db, reactionPath), emoji);
  } catch (error) {
    console.error("[REACTION] FIREBASE WRITE FAILED:", error);
  }
}

/**
 * Clear all messages in a room
 */
export async function clearRoomMessages(roomId) {
  if (!roomId) return;

  const messagesPath = `rooms/${roomId}/messages`;
  try {
    await remove(ref(db, messagesPath));
  } catch (error) {
    console.error("[CLEAR] FIREBASE WRITE FAILED:", error);
  }
}

export function getFirebaseConfig() {
  return firebaseConfig;
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
