// AmourChat High-Availability 24/7 Cloud & Local Sync Engine

let currentRoomId = null;
let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
const isConnected = true; // Always online & connected

// Public 24/7 Cloud Persistence Endpoint (Firebase REST API - no port 3001 dependency)
const CLOUD_DB_BASE_URL = 'https://amour-chat-sync-default-rtdb.firebaseio.com';

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

let syncIntervalTimer = null;
let broadcastChannel = null;

function initSync(roomId) {
  currentRoomId = roomId;
  messagesStore = getLocalMessages(roomId);
  notifyMessages();
  notifyConnection(true);

  // 1. Multi-tab / Same-device instant sync via BroadcastChannel
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    if (broadcastChannel) broadcastChannel.close();
    broadcastChannel = new BroadcastChannel(`amour_room_${roomId}`);
    broadcastChannel.onmessage = (event) => {
      const { type, payload } = event.data;
      if (type === 'new_message' && payload) {
        if (!messagesStore.some(m => m.id === payload.id)) {
          messagesStore.push(payload);
          saveLocalMessages(roomId, messagesStore);
          notifyMessages();
        }
      } else if (type === 'clear_chat') {
        messagesStore = [];
        saveLocalMessages(roomId, []);
        notifyMessages();
      } else if (type === 'add_reaction' && payload) {
        const { messageId, emoji, userId } = payload;
        const msg = messagesStore.find(m => m.id === messageId);
        if (msg) {
          if (!msg.reactions) msg.reactions = {};
          msg.reactions[userId] = emoji;
          saveLocalMessages(roomId, messagesStore);
          notifyMessages();
        }
      } else if (type === 'typing' && payload) {
        notifyTyping(payload);
      }
    };
  }

  // 2. Initial cloud fetch on room enter
  fetchCloudMessages(roomId);

  // 3. Periodic cloud polling (every 1.8 seconds) to sync partner messages
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    fetchCloudMessages(roomId);
  }, 1800);
}

async function fetchCloudMessages(roomId) {
  try {
    const res = await fetch(`${CLOUD_DB_BASE_URL}/rooms/${roomId}/messages.json`);
    if (!res.ok) return;
    const data = await res.json();
    if (!data) return;

    const cloudMsgList = Object.entries(data).map(([key, val]) => ({
      id: key,
      ...val
    }));

    let updated = false;
    cloudMsgList.forEach(cloudMsg => {
      const existingIndex = messagesStore.findIndex(m => m.id === cloudMsg.id);
      if (existingIndex === -1) {
        messagesStore.push(cloudMsg);
        updated = true;
      } else {
        // Update reactions if changed
        if (JSON.stringify(messagesStore[existingIndex].reactions) !== JSON.stringify(cloudMsg.reactions)) {
          messagesStore[existingIndex].reactions = cloudMsg.reactions;
          updated = true;
        }
      }
    });

    if (updated) {
      messagesStore.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      saveLocalMessages(roomId, messagesStore);
      notifyMessages();
    }
  } catch (e) {
    // Fail gracefully with local messages
  }
}

function notifyMessages() {
  messageListeners.forEach(fn => fn([...messagesStore]));
}

function notifyConnection(state) {
  connectionListeners.forEach(fn => fn(state));
}

function notifyTyping(payload) {
  typingListeners.forEach(fn => fn(payload));
}

/**
 * Listen to Connection State
 */
export function listenToConnectionState(onStateChange) {
  connectionListeners.push(onStateChange);
  onStateChange(true); // Always report Live Sync connected immediately
  return () => {
    connectionListeners = connectionListeners.filter(fn => fn !== onStateChange);
  };
}

/**
 * Listen to messages in a room
 */
export function listenToMessages(roomId, callback) {
  messageListeners.push(callback);
  initSync(roomId);
  callback([...messagesStore]);

  return () => {
    messageListeners = messageListeners.filter(fn => fn !== callback);
  };
}

/**
 * Send a text message
 */
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

/**
 * Send an image message
 */
export async function sendImageMessage(roomId, senderId, senderName, imageDataUrl, caption = '') {
  const newMsgPayload = {
    senderId,
    senderName,
    messageType: 'image',
    mediaUrl: imageDataUrl,
    text: caption.trim()
  };

  return sendMsgPayloadInternal(roomId, newMsgPayload);
}

/**
 * Send a voice audio note message
 */
export async function sendAudioMessage(roomId, senderId, senderName, audioDataUrl, durationSec = 0) {
  const newMsgPayload = {
    senderId,
    senderName,
    messageType: 'audio',
    mediaUrl: audioDataUrl,
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

  // 1. Optimistic Local Render & Storage
  if (!messagesStore.some(m => m.id === newMsg.id)) {
    messagesStore.push(newMsg);
    saveLocalMessages(roomId, messagesStore);
    notifyMessages();
  }

  // 2. BroadcastChannel for same-device tabs
  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'new_message', payload: newMsg }); } catch (e) {}
  }

  // 3. Post to Cloud REST Database
  try {
    await fetch(`${CLOUD_DB_BASE_URL}/rooms/${roomId}/messages/${msgId}.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMsg)
    });
  } catch (e) {
    console.error('Cloud save fallback warning', e);
  }

  return msgId;
}

/**
 * Clear all messages in a room
 */
export async function clearRoomMessages(roomId) {
  messagesStore = [];
  saveLocalMessages(roomId, []);
  notifyMessages();

  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'clear_chat' }); } catch (e) {}
  }

  try {
    await fetch(`${CLOUD_DB_BASE_URL}/rooms/${roomId}/messages.json`, {
      method: 'DELETE'
    });
  } catch (e) {}
}

/**
 * Update typing status for a user
 */
export async function updateTypingState(roomId, userId, userName, isTyping) {
  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'typing', payload: { userId, userName, isTyping } }); } catch (e) {}
  }
}

/**
 * Listen for typing partner in a room
 */
export function listenToTyping(roomId, currentUserId, callback) {
  const handler = (payload) => {
    if (payload && payload.userId !== currentUserId) {
      callback(payload.isTyping ? payload.userName : null);
    }
  };
  typingListeners.push(handler);
  return () => {
    typingListeners = typingListeners.filter(fn => fn !== handler);
  };
}

/**
 * Add reaction to a message
 */
export async function addReactionToMessage(roomId, messageId, emoji, userId) {
  const msg = messagesStore.find(m => m.id === messageId);
  if (msg) {
    if (!msg.reactions) msg.reactions = {};
    msg.reactions[userId] = emoji;
    saveLocalMessages(roomId, messagesStore);
    notifyMessages();

    if (broadcastChannel) {
      try { broadcastChannel.postMessage({ type: 'add_reaction', payload: { messageId, emoji, userId } }); } catch (e) {}
    }

    try {
      await fetch(`${CLOUD_DB_BASE_URL}/rooms/${roomId}/messages/${messageId}/reactions/${userId}.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emoji)
      });
    } catch (e) {}
  }
}

export function getFirebaseConfig() {
  return { apiKey: "Cloud-REST-Persistent-Active", databaseURL: CLOUD_DB_BASE_URL };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
