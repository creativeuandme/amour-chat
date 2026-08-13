// Ultra-Fast Zero-Conflict WebRTC Host/Guest Engine for AmourChat

import { Peer } from 'peerjs';

let currentRoomId = null;
let peer = null;
let partnerConnection = null;

let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = false;

let syncIntervalTimer = null;
let broadcastChannel = null;
let typingTimeoutTimer = null;

const CLOUD_API_BASE = 'https://api.restful-api.dev/objects';

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
 * Free media uploader for photos & voice notes
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

function mergeMessageLists(listA, listB) {
  const mergedMap = new Map();

  (listA || []).forEach((m) => {
    if (m && m.id) mergedMap.set(m.id, { ...m });
  });

  (listB || []).forEach((m) => {
    if (m && m.id) {
      if (mergedMap.has(m.id)) {
        const existing = mergedMap.get(m.id);
        const combinedReactions = { ...(existing.reactions || {}), ...(m.reactions || {}) };
        mergedMap.set(m.id, { ...existing, ...m, reactions: combinedReactions });
      } else {
        mergedMap.set(m.id, { ...m });
      }
    }
  });

  return Array.from(mergedMap.values()).sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
}

function initSync(roomId) {
  currentRoomId = roomId;
  messagesStore = getLocalMessages(roomId);
  notifyMessages();

  // 1. Same-device multi-tab BroadcastChannel
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    if (broadcastChannel) broadcastChannel.close();
    broadcastChannel = new BroadcastChannel(`amour_room_${roomId}`);
    broadcastChannel.onmessage = (event) => {
      const { type, payload } = event.data;
      handleIncomingPayload(type, payload);
    };
  }

  // 2. Initialize WebRTC Host/Guest PeerJS Engine
  initPeerJsEngine(roomId);

  // 3. Fallback Cloud Poll (1000ms) for history persistence
  fetchCloudMessages(roomId);
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    fetchCloudMessages(roomId);
  }, 1000);
}

function initPeerJsEngine(roomId) {
  if (peer) {
    try { peer.destroy(); } catch (e) {}
  }

  const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const hostPeerId = `amour_${cleanRoomId}_host`;
  const guestPeerId = `amour_${cleanRoomId}_guest`;

  let currentRole = localStorage.getItem(`amour_role_${cleanRoomId}`) || 'host';
  let myPeerId = currentRole === 'host' ? hostPeerId : guestPeerId;
  let partnerPeerId = currentRole === 'host' ? guestPeerId : hostPeerId;

  try {
    peer = new Peer(myPeerId, { debug: 0 });

    peer.on('open', (id) => {
      isConnected = true;
      notifyConnection(true);

      // Continuously attempt WebRTC DataChannel connection to partner
      connectToPartner(partnerPeerId);
    });

    peer.on('connection', (conn) => {
      setupDataConnection(conn);
    });

    peer.on('error', (err) => {
      if (err.type === 'unavailable-id') {
        // Host ID is taken by partner -> switch role to guest!
        localStorage.setItem(`amour_role_${cleanRoomId}`, 'guest');
        setTimeout(() => {
          if (currentRoomId === roomId) initPeerJsEngine(roomId);
        }, 300);
      } else {
        setTimeout(() => {
          if (currentRoomId === roomId) initPeerJsEngine(roomId);
        }, 3000);
      }
    });
  } catch (e) {}
}

function connectToPartner(partnerPeerId) {
  if (!peer || peer.destroyed) return;
  try {
    const conn = peer.connect(partnerPeerId, { reliable: true });
    setupDataConnection(conn);
  } catch (e) {}
}

function setupDataConnection(conn) {
  partnerConnection = conn;

  conn.on('open', () => {
    isConnected = true;
    notifyConnection(true);

    // Sync message history with partner over WebRTC DataChannel
    if (messagesStore.length > 0) {
      conn.send({
        type: 'sync_history',
        payload: messagesStore
      });
    }
  });

  conn.on('data', (data) => {
    if (data && data.type) {
      if (data.type === 'sync_history' && Array.isArray(data.payload)) {
        const merged = mergeMessageLists(messagesStore, data.payload);
        if (JSON.stringify(merged) !== JSON.stringify(messagesStore)) {
          messagesStore = merged;
          saveLocalMessages(currentRoomId, messagesStore);
          notifyMessages();
        }
      } else {
        handleIncomingPayload(data.type, data.payload);
      }
    }
  });

  conn.on('close', () => {
    partnerConnection = null;
  });
}

async function fetchCloudMessages(roomId) {
  try {
    const roomKey = `amour_msgs_${roomId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
    const res = await fetch(CLOUD_API_BASE);
    if (!res.ok) return;
    const all = await res.json();
    const found = all.find((o) => o.name === roomKey);

    if (found && found.data) {
      if (Array.isArray(found.data.messages)) {
        const merged = mergeMessageLists(messagesStore, found.data.messages);
        if (JSON.stringify(merged) !== JSON.stringify(messagesStore)) {
          messagesStore = merged;
          saveLocalMessages(roomId, messagesStore);
          notifyMessages();
        }
      }

      if (found.data.typing) {
        const { userId, userName, isTyping, timestamp } = found.data.typing;
        const myUserId = localStorage.getItem('amour_user_id');
        if (userId !== myUserId) {
          if (isTyping && Date.now() - (timestamp || 0) < 4000) {
            notifyTyping({ userId, userName, isTyping: true });
          } else {
            notifyTyping({ userId, userName, isTyping: false });
          }
        }
      }
    }
  } catch (e) {}
}

async function syncCloudStorage(roomId, typingData = null) {
  try {
    const roomKey = `amour_msgs_${roomId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
    const res = await fetch(CLOUD_API_BASE);
    if (!res.ok) return;
    const all = await res.json();
    const found = all.find((o) => o.name === roomKey);

    const existingMsgs = found && found.data && Array.isArray(found.data.messages) ? found.data.messages : [];
    const merged = mergeMessageLists(messagesStore, existingMsgs);

    const payloadData = {
      messages: merged,
      typing: typingData
    };

    if (found) {
      await fetch(`${CLOUD_API_BASE}/${found.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: roomKey, data: payloadData })
      });
    } else {
      await fetch(CLOUD_API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: roomKey, data: payloadData })
      });
    }
  } catch (e) {}
}

function handleIncomingPayload(type, payload) {
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

function broadcastToPartner(type, payload) {
  // 1. Direct WebRTC DataChannel (<1ms)
  if (partnerConnection && partnerConnection.open) {
    try {
      partnerConnection.send({ type, payload });
    } catch (e) {}
  }

  // 2. Multi-tab BroadcastChannel
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type, payload });
    } catch (e) {}
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
  messageListeners.push(callback);
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

  // 1. Optimistic Local Render (<1ms)
  if (!messagesStore.some((m) => m.id === newMsg.id)) {
    messagesStore.push(newMsg);
    saveLocalMessages(roomId, messagesStore);
    notifyMessages();
  }

  // 2. Direct WebRTC DataChannel (<1ms)
  broadcastToPartner('new_message', newMsg);

  // 3. Cloud Storage Backup
  syncCloudStorage(roomId);

  return msgId;
}

export async function clearRoomMessages(roomId) {
  messagesStore = [];
  saveLocalMessages(roomId, []);
  notifyMessages();

  broadcastToPartner('clear_chat', null);
  syncCloudStorage(roomId);
}

export async function updateTypingState(roomId, userId, userName, isTyping) {
  const payload = { userId, userName, isTyping, timestamp: Date.now() };

  broadcastToPartner('typing', payload);
  syncCloudStorage(roomId, payload);
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

    broadcastToPartner('add_reaction', { messageId, emoji, userId });
    syncCloudStorage(roomId);
  }
}

export function getFirebaseConfig() {
  return { apiKey: "WebRTC-HostGuest-Engine-Active", databaseURL: CLOUD_API_BASE };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
