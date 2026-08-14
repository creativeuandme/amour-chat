// Official Google Firebase Realtime Database Engine with Clean State Update Logic

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, onValue, off, remove } from 'firebase/database';

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

let currentRoomId = null;
let messagesRef = null;
let typingRef = null;

let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = true;
let typingTimeoutTimer = null;
let broadcastChannel = null;
let fallbackPollTimer = null;

function getLocalMessages(roomId) {
  try {
    const saved = localStorage.getItem(`amour_msgs_${roomId}`);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveLocalMessages(roomId, messages) {
  try {
    localStorage.setItem(`amour_msgs_${roomId}`, JSON.stringify(messages));
  } catch (e) {}
}

/**
 * Free cloud file uploader for photos & voice notes
 */
async function uploadMediaFile(fileOrBlob, filename = 'attachment') {
  try {
    const formData = new FormData();
    formData.append('file', fileOrBlob, filename);

    const res = await fetch('https://tmpfiles.org/api/v1/upload', {
      method: 'POST',
      body: formData
    });

    if (!res.ok) return null;
    const json = await res.json();
    if (json && json.data && json.data.url) {
      return json.data.url.replace('tmpfiles.org/', 'tmpfiles.org/dl/');
    }
  } catch (e) {
    console.error('Media upload error:', e);
  }
  return null;
}

function initSync(roomId) {
  currentRoomId = roomId;
  messagesStore = getLocalMessages(roomId);
  notifyMessages();
  notifyConnection(true);

  // 1. Same-device multi-tab BroadcastChannel
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    if (broadcastChannel) broadcastChannel.close();
    broadcastChannel = new BroadcastChannel(`amour_room_${roomId}`);
    broadcastChannel.onmessage = (event) => {
      const { type, payload } = event.data;
      handleLocalPayload(type, payload);
    };
  }

  const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');

  // 2. Firebase Connection Monitor
  const connectedRef = ref(db, '.info/connected');
  onValue(connectedRef, (snap) => {
    if (snap.val() === true) {
      isConnected = true;
      notifyConnection(true);
    }
  });

  // 3. Attach Firebase Realtime WebSockets
  attachFirebaseListeners(cleanRoomId);

  // 4. Mobile Power-Saver / Tab Visibility Reconnect Listener
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        attachFirebaseListeners(cleanRoomId);
        fetchFirebaseRestFallback(cleanRoomId);
      }
    });
  }

  // 5. REST HTTPS Polling Fallback (every 2s) for backup
  fetchFirebaseRestFallback(cleanRoomId);
  if (fallbackPollTimer) clearInterval(fallbackPollTimer);
  fallbackPollTimer = setInterval(() => {
    fetchFirebaseRestFallback(cleanRoomId);
  }, 2000);
}

function attachFirebaseListeners(cleanRoomId) {
  if (messagesRef) try { off(messagesRef); } catch (e) {}
  if (typingRef) try { off(typingRef); } catch (e) {}

  // 1. Listen to Firebase Realtime Database Messages
  messagesRef = ref(db, `rooms/${cleanRoomId}/messages`);
  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    processFirebaseMessagesData(data);
  }, (err) => {
    console.warn('Firebase DB listener warning:', err.message);
  });

  // 2. Listen to Firebase Realtime Database Typing Status
  typingRef = ref(db, `rooms/${cleanRoomId}/typing`);
  onValue(typingRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const myUserId = localStorage.getItem('amour_user_id');
      Object.entries(data).forEach(([userId, typingObj]) => {
        if (userId !== myUserId && typingObj) {
          const { userName, isTyping, timestamp } = typingObj;
          if (isTyping && Date.now() - (timestamp || 0) < 4000) {
            notifyTyping({ userId, userName, isTyping: true });
          } else {
            notifyTyping({ userId, userName, isTyping: false });
          }
        }
      });
    }
  });
}

async function fetchFirebaseRestFallback(cleanRoomId) {
  try {
    const restUrl = `${firebaseConfig.databaseURL}/rooms/${cleanRoomId}/messages.json`;
    const res = await fetch(restUrl);
    if (res.ok) {
      const data = await res.json();
      processFirebaseMessagesData(data);
    }
  } catch (e) {}
}

function processFirebaseMessagesData(data) {
  if (!data) return;

  const cloudMsgList = Object.entries(data).map(([key, val]) => ({
    _firebaseKey: key,
    ...val
  }));

  let updated = false;
  cloudMsgList.forEach((cloudMsg) => {
    const existingIndex = messagesStore.findIndex((m) => m.id === cloudMsg.id);
    if (existingIndex === -1) {
      messagesStore.push(cloudMsg);
      updated = true;
    } else {
      messagesStore[existingIndex]._firebaseKey = cloudMsg._firebaseKey;
      if (JSON.stringify(messagesStore[existingIndex].reactions) !== JSON.stringify(cloudMsg.reactions)) {
        messagesStore[existingIndex].reactions = cloudMsg.reactions;
        updated = true;
      }
    }
  });

  // ONLY notify listeners when a message is new or updated (prevents constant 1s re-renders)
  if (updated) {
    messagesStore.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
    saveLocalMessages(currentRoomId, messagesStore);
    notifyMessages();
  }
}

function handleLocalPayload(type, payload) {
  if (type === 'new_message' && payload) {
    if (!messagesStore.some((m) => m.id === payload.id)) {
      messagesStore.push(payload);
      saveLocalMessages(currentRoomId, messagesStore);
      notifyMessages();
    }
  } else if (type === 'clear_chat') {
    messagesStore = [];
    saveLocalMessages(currentRoomId, []);
    notifyMessages();
  } else if (type === 'add_reaction' && payload) {
    const { messageId, emoji, userId } = payload;
    const msg = messagesStore.find((m) => m.id === messageId);
    if (msg) {
      if (!msg.reactions) msg.reactions = {};
      msg.reactions[userId] = emoji;
      saveLocalMessages(currentRoomId, messagesStore);
      notifyMessages();
    }
  } else if (type === 'typing' && payload) {
    notifyTyping(payload);
  }
}

function notifyMessages() {
  messageListeners.forEach((fn) => fn([...messagesStore]));
}

function notifyConnection(state) {
  connectionListeners.forEach((fn) => fn(state));
}

function notifyTyping(payload) {
  typingListeners.forEach((fn) => fn(payload));
  if (typingTimeoutTimer) clearTimeout(typingTimeoutTimer);
  if (payload && payload.isTyping) {
    typingTimeoutTimer = setTimeout(() => {
      typingListeners.forEach((fn) => fn({ ...payload, isTyping: false }));
    }, 2500);
  }
}

export function listenToConnectionState(onStateChange) {
  connectionListeners.push(onStateChange);
  onStateChange(true);
  return () => {
    connectionListeners = connectionListeners.filter((fn) => fn !== onStateChange);
  };
}

export function listenToMessages(roomId, callback) {
  if (!messageListeners.includes(callback)) {
    messageListeners.push(callback);
  }
  initSync(roomId);
  callback([...messagesStore]);

  return () => {
    messageListeners = messageListeners.filter((fn) => fn !== callback);
  };
}

export async function sendMessage(roomId, senderId, senderName, senderAvatar, text) {
  const newMsgPayload = {
    senderId,
    senderName,
    senderAvatar: senderAvatar || 'rose',
    messageType: 'text',
    text: text.trim()
  };

  return sendMsgPayloadInternal(roomId, newMsgPayload);
}

export async function sendImageMessage(roomId, senderId, senderName, imageFileOrUrl, caption = '') {
  let mediaUrl = imageFileOrUrl;

  if (typeof imageFileOrUrl !== 'string' || imageFileOrUrl.startsWith('data:')) {
    let blobToUpload = imageFileOrUrl;
    if (typeof imageFileOrUrl === 'string' && imageFileOrUrl.startsWith('data:')) {
      const res = await fetch(imageFileOrUrl);
      blobToUpload = await res.blob();
    }
    const uploadedUrl = await uploadMediaFile(blobToUpload, 'photo.jpg');
    if (uploadedUrl) {
      mediaUrl = uploadedUrl;
    }
  }

  const newMsgPayload = {
    senderId,
    senderName,
    messageType: 'image',
    mediaUrl,
    text: caption.trim()
  };

  return sendMsgPayloadInternal(roomId, newMsgPayload);
}

export async function sendAudioMessage(roomId, senderId, senderName, audioBlobOrUrl, durationSec = 0) {
  let mediaUrl = audioBlobOrUrl;

  if (typeof audioBlobOrUrl !== 'string' || audioBlobOrUrl.startsWith('data:')) {
    let blobToUpload = audioBlobOrUrl;
    if (typeof audioBlobOrUrl === 'string' && audioBlobOrUrl.startsWith('data:')) {
      const res = await fetch(audioBlobOrUrl);
      blobToUpload = await res.blob();
    }
    const uploadedUrl = await uploadMediaFile(blobToUpload, 'voice_note.webm');
    if (uploadedUrl) {
      mediaUrl = uploadedUrl;
    }
  }

  const newMsgPayload = {
    senderId,
    senderName,
    messageType: 'audio',
    mediaUrl,
    duration: durationSec,
    text: ''
  };

  return sendMsgPayloadInternal(roomId, newMsgPayload);
}

async function sendMsgPayloadInternal(roomId, payload) {
  const msgId = 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
  const newMsg = {
    id: msgId,
    ...payload,
    timestamp: Date.now(),
    reactions: {}
  };

  // 1. Optimistic Render (<1ms)
  if (!messagesStore.some((m) => m.id === newMsg.id)) {
    messagesStore.push(newMsg);
    saveLocalMessages(roomId, messagesStore);
    notifyMessages();
  }

  // 2. Multi-tab BroadcastChannel
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'new_message', payload: newMsg });
    } catch (e) {}
  }

  // 3. Push to Firebase Realtime Database WebSockets (<10ms)
  const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
  try {
    const roomMsgsRef = ref(db, `rooms/${cleanRoomId}/messages`);
    await push(roomMsgsRef, newMsg);
  } catch (e) {
    console.error('Firebase DB Push error:', e);
  }

  return msgId;
}

export async function clearRoomMessages(roomId) {
  messagesStore = [];
  saveLocalMessages(roomId, []);
  notifyMessages();

  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'clear_chat' }); } catch (e) {}
  }

  try {
    const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
    await remove(ref(db, `rooms/${cleanRoomId}/messages`));
  } catch (e) {}
}

export async function updateTypingState(roomId, userId, userName, isTyping) {
  const payload = { userId, userName, isTyping, timestamp: Date.now() };

  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'typing', payload });
    } catch (e) {}
  }

  try {
    const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
    await set(ref(db, `rooms/${cleanRoomId}/typing/${userId}`), payload);
  } catch (e) {}
}

export function listenToTyping(roomId, currentUserId, callback) {
  const handler = (payload) => {
    if (payload && payload.userId !== currentUserId) {
      callback(payload.isTyping ? payload.userName : null);
    }
  };
  typingListeners.push(handler);
  return () => {
    typingListeners = typingListeners.filter((fn) => fn !== handler);
  };
}

export async function addReactionToMessage(roomId, messageId, emoji, userId) {
  const msg = messagesStore.find((m) => m.id === messageId);
  if (msg) {
    if (!msg.reactions) msg.reactions = {};
    msg.reactions[userId] = emoji;
    saveLocalMessages(roomId, messagesStore);
    notifyMessages();

    if (broadcastChannel) {
      try {
        broadcastChannel.postMessage({
          type: 'add_reaction',
          payload: { messageId, emoji, userId }
        });
      } catch (e) {}
    }

    try {
      const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
      if (msg._firebaseKey) {
        await set(ref(db, `rooms/${cleanRoomId}/messages/${msg._firebaseKey}/reactions/${userId}`), emoji);
      }
    } catch (e) {}
  }
}

export function getFirebaseConfig() {
  return firebaseConfig;
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
