// Clean, Single Source of Truth Firebase Realtime Database Client

import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  push,
  onValue,
  off,
  set,
  remove,
  serverTimestamp
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

/**
 * Listen to Connection State
 */
export function listenToConnectionState(onStateChange) {
  const connectedRef = ref(db, '.info/connected');
  const unsubscribe = onValue(connectedRef, (snap) => {
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
  console.log("ROOM ID:", roomId);
  console.log("FIREBASE PATH:", messagesPath);

  const messagesRef = ref(db, messagesPath);

  const unsubscribe = onValue(
    messagesRef,
    (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        onMessagesUpdate([]);
        return;
      }

      const messages = Object.entries(data).map(([id, message]) => ({
        id,
        ...message
      }));

      // Sort chronologically by timestamp
      messages.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

      onMessagesUpdate(messages);
    },
    (error) => {
      console.error("Firebase Realtime Database Listener Error:", error);
    }
  );

  return () => {
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
  console.log("SENDING TO FIREBASE PATH:", messagesPath);

  const messagesRef = ref(db, messagesPath);

  const newMsg = {
    senderId,
    nickname,
    text: text.trim(),
    timestamp: Date.now(),
    reactions: {}
  };

  try {
    const newRef = await push(messagesRef, newMsg);
    return newRef.key;
  } catch (error) {
    console.error("Firebase Push Error:", error);
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
    console.error("Firebase Add Reaction Error:", error);
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
    console.error("Firebase Clear Room Error:", error);
  }
}

export function getFirebaseConfig() {
  return firebaseConfig;
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
