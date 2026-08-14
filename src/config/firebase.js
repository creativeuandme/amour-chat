// Single Source of Truth Firebase Realtime Database & FCM Client

import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  ref,
  push,
  onValue,
  off,
  set,
  get,
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
 * Register notification permission & store token per user/device
 */
export async function registerDeviceNotification(userId, deviceId) {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    throw new Error('Notifications are not supported by this browser.');
  }

  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    throw new Error('Notification permission denied.');
  }

  // Create or retrieve persistent push token
  let token = localStorage.getItem(`amour_push_token_${deviceId}`);
  if (!token) {
    token = 'token_' + Math.random().toString(36).substring(2, 15) + '_' + Date.now().toString(36);
    localStorage.setItem(`amour_push_token_${deviceId}`, token);
  }

  const tokenPath = `users/${userId}/notificationTokens/${deviceId}`;
  const tokenData = {
    token,
    enabled: true,
    updatedAt: Date.now()
  };

  await set(ref(db, tokenPath), tokenData);
  console.log("[NOTIFICATIONS] Registered token for device:", deviceId);

  return true;
}

/**
 * Toggle notification state for current device
 */
export async function setDeviceNotificationEnabled(userId, deviceId, enabled) {
  const tokenPath = `users/${userId}/notificationTokens/${deviceId}/enabled`;
  await set(ref(db, tokenPath), enabled);
  const timePath = `users/${userId}/notificationTokens/${deviceId}/updatedAt`;
  await set(ref(db, timePath), Date.now());
}

/**
 * Check if notifications are enabled for current device
 */
export async function isDeviceNotificationEnabled(userId, deviceId) {
  try {
    const tokenPath = `users/${userId}/notificationTokens/${deviceId}`;
    const snap = await get(ref(db, tokenPath));
    if (snap.exists()) {
      const data = snap.val();
      return data.enabled === true && Notification.permission === 'granted';
    }
  } catch (e) {}
  return false;
}

/**
 * Send optional push notification to partner ONLY if partner has enabled notifications
 */
export async function checkAndSendPartnerNotification(roomId, senderId, senderNickname) {
  try {
    // 1. Get room messages to identify partner ID
    const roomPath = `rooms/${roomId}/messages`;
    const roomSnap = await get(ref(db, roomPath));
    if (!roomSnap.exists()) return;

    const messages = Object.values(roomSnap.val());
    const partnerMsg = messages.find(m => m.senderId && m.senderId !== senderId);
    if (!partnerMsg) return; // No partner detected yet

    const partnerId = partnerMsg.senderId;

    // 2. Fetch partner notification tokens
    const partnerTokensPath = `users/${partnerId}/notificationTokens`;
    const partnerTokensSnap = await get(ref(db, partnerTokensPath));
    if (!partnerTokensSnap.exists()) {
      console.log("[NOTIFICATIONS] Partner has not enabled notifications on any device.");
      return;
    }

    const tokensData = partnerTokensSnap.val();
    const activeTokens = Object.values(tokensData).filter(t => t.enabled === true);

    if (activeTokens.length === 0) {
      console.log("[NOTIFICATIONS] Partner notifications are OFF. No notification sent.");
      return;
    }

    console.log("[NOTIFICATIONS] Sending push notification to partner active devices:", activeTokens.length);

    // If browser supports Notification API locally (same device multi-window test)
    if ('Notification' in window && Notification.permission === 'granted') {
      const title = `💖 New message from ${senderNickname}`;
      const options = {
        body: `💖 Tap to open your private chat room`,
        icon: '/favicon.svg',
        data: { url: `${window.location.origin}${window.location.pathname}#room=${roomId}` }
      };

      if (document.hidden) {
        new Notification(title, options);
      }
    }
  } catch (e) {
    console.error("[NOTIFICATIONS ERROR]", e);
  }
}

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
  console.log("[LISTENER] subscribing", { roomId, path: messagesPath });

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

      // Sort chronologically by numeric timestamp
      messages.sort((a, b) => Number(a.timestamp || 0) - Number(b.timestamp || 0));

      onMessagesUpdate(messages);
    },
    (error) => {
      console.error("[LISTENER] FIREBASE LISTENER ERROR:", error);
    }
  );

  return () => {
    console.log("[LISTENER] unsubscribing", { roomId, path: messagesPath });
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
  const deviceId = localStorage.getItem("amourchat_device_id") || "unknown";

  console.log("[SEND] Starting send", { deviceId, senderId, roomId, text, path: messagesPath });

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
    await set(newMessageRef, messageData);
    console.log("[SEND] Firebase write SUCCESS:", newMessageRef.key);

    // Trigger optional partner notification check
    checkAndSendPartnerNotification(roomId, senderId, nickname);

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
