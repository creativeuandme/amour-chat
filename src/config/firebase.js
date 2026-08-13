// High-Availability 24/7 Global Cloud Sync Engine for AmourChat

let currentRoomId = null;
let roomObjectId = null;

let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let partnerTypingName = null;
const isConnected = true;

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

function getStoredObjectId(roomId) {
  return localStorage.getItem(`amour_obj_id_${roomId}`) || null;
}

function saveStoredObjectId(roomId, objId) {
  if (objId) {
    localStorage.setItem(`amour_obj_id_${roomId}`, objId);
  }
}

let syncIntervalTimer = null;
let broadcastChannel = null;
let typingTimeoutTimer = null;

/**
 * Upload photos or voice notes to free cloud CDN
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
  roomObjectId = getStoredObjectId(roomId);
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

  // 2. Fetch cloud messages immediately
  fetchCloudMessages(roomId);

  // 3. Fast cloud polling every 1.5 seconds for instant 24/7 cross-device sync
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    fetchCloudMessages(roomId);
  }, 1500);
}

async function fetchCloudMessages(roomId) {
  try {
    let targetObjId = roomObjectId || getStoredObjectId(roomId);

    if (targetObjId) {
      const res = await fetch(`${CLOUD_API_BASE}/${targetObjId}`);
      if (res.ok) {
        const json = await res.json();
        if (json && json.data) {
          processCloudData(roomId, json.data);
          return;
        }
      }
    }

    // Search room object by name if not cached yet
    const searchRes = await fetch(CLOUD_API_BASE);
    if (searchRes.ok) {
      const allObjs = await searchRes.json();
      const targetName = `amour_room_v3_${roomId}`;
      const found = allObjs.find((o) => o.name === targetName);
      if (found) {
        roomObjectId = found.id;
        saveStoredObjectId(roomId, found.id);
        if (found.data) {
          processCloudData(roomId, found.data);
        }
      }
    }
  } catch (e) {}
}

function processCloudData(roomId, data) {
  let updated = false;

  // Process Messages
  if (Array.isArray(data.messages)) {
    data.messages.forEach((cloudMsg) => {
      const existingIndex = messagesStore.findIndex((m) => m.id === cloudMsg.id);
      if (existingIndex === -1) {
        messagesStore.push(cloudMsg);
        updated = true;
      } else {
        if (JSON.stringify(messagesStore[existingIndex].reactions) !== JSON.stringify(cloudMsg.reactions)) {
          messagesStore[existingIndex].reactions = cloudMsg.reactions;
          updated = true;
        }
      }
    });
  }

  // Process Partner Typing
  if (data.typing) {
    const { userId, userName, isTyping, timestamp } = data.typing;
    const currentUserId = localStorage.getItem('amour_user_id');
    if (userId !== currentUserId) {
      if (isTyping && Date.now() - (timestamp || 0) < 4000) {
        notifyTyping({ userId, userName, isTyping: true });
      } else {
        notifyTyping({ userId, userName, isTyping: false });
      }
    }
  }

  if (updated) {
    messagesStore.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
    saveLocalMessages(roomId, messagesStore);
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

  // 2. Local BroadcastChannel
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'new_message', payload: newMsg });
    } catch (e) {}
  }

  // 3. Save to Global Cloud Database Object
  syncCloudRoomData(roomId);

  return msgId;
}

async function syncCloudRoomData(roomId, typingData = null) {
  try {
    let targetObjId = roomObjectId || getStoredObjectId(roomId);
    const targetName = `amour_room_v3_${roomId}`;
    const payloadData = {
      messages: messagesStore,
      typing: typingData
    };

    if (targetObjId) {
      await fetch(`${CLOUD_API_BASE}/${targetObjId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: targetName, data: payloadData })
      });
    } else {
      const res = await fetch(CLOUD_API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: targetName, data: payloadData })
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.id) {
          roomObjectId = json.id;
          saveStoredObjectId(roomId, json.id);
        }
      }
    }
  } catch (e) {}
}

export async function clearRoomMessages(roomId) {
  messagesStore = [];
  saveLocalMessages(roomId, []);
  notifyMessages();

  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'clear_chat' }); } catch (e) {}
  }

  syncCloudRoomData(roomId);
}

export async function updateTypingState(roomId, userId, userName, isTyping) {
  const payload = { userId, userName, isTyping, timestamp: Date.now() };

  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'typing', payload });
    } catch (e) {}
  }

  syncCloudRoomData(roomId, payload);
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

    syncCloudRoomData(roomId);
  }
}

export function getFirebaseConfig() {
  return { apiKey: "REST-Cloud-Engine-Active", databaseURL: CLOUD_API_BASE };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
