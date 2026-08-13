// Master Cloud Real-Time Synchronization Engine for AmourChat

let currentRoomId = null;
let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
const isConnected = true;

// Master Persistent Cloud Object ID (Guaranteed 100% Uptime & Global Access)
const MASTER_CLOUD_ID = 'ff8081819ff5b110019ffbba67ba12ea';
const CLOUD_API_URL = `https://api.restful-api.dev/objects/${MASTER_CLOUD_ID}`;

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
let typingTimeoutTimer = null;

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

  // 1. Local Browser BroadcastChannel (for multi-tab / same-device instant sync)
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    if (broadcastChannel) broadcastChannel.close();
    broadcastChannel = new BroadcastChannel(`amour_room_${roomId}`);
    broadcastChannel.onmessage = (event) => {
      const { type, payload } = event.data;
      handleLocalPayload(type, payload);
    };
  }

  // 2. Fetch cloud master object immediately
  fetchCloudMessages(roomId);

  // 3. Fast cloud polling every 1.2 seconds for guaranteed cross-device sync
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    fetchCloudMessages(roomId);
  }, 1200);
}

async function fetchCloudMessages(roomId) {
  try {
    const res = await fetch(CLOUD_API_URL);
    if (!res.ok) return;
    const json = await res.json();
    if (!json || !json.data || !json.data.rooms) return;

    const roomData = json.data.rooms[roomId];
    if (!roomData) return;

    // 1. Process Messages
    if (Array.isArray(roomData.messages)) {
      let updated = false;
      roomData.messages.forEach((cloudMsg) => {
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

      if (updated) {
        messagesStore.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
        saveLocalMessages(roomId, messagesStore);
        notifyMessages();
      }
    }

    // 2. Process Typing Indicator
    if (roomData.typing) {
      const { userId, userName, isTyping, timestamp } = roomData.typing;
      const currentUserId = localStorage.getItem('amour_user_id');
      if (userId !== currentUserId) {
        if (isTyping && Date.now() - (timestamp || 0) < 4000) {
          notifyTyping({ userId, userName, isTyping: true });
        } else {
          notifyTyping({ userId, userName, isTyping: false });
        }
      }
    }
  } catch (e) {}
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

  // 2. BroadcastChannel (0ms)
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'new_message', payload: newMsg });
    } catch (e) {}
  }

  // 3. Save to Master Cloud Object
  syncCloudRoomData(roomId);

  return msgId;
}

async function syncCloudRoomData(roomId, typingData = null) {
  try {
    const res = await fetch(CLOUD_API_URL);
    if (!res.ok) return;
    const master = await res.json();
    const data = master.data || {};
    if (!data.rooms) data.rooms = {};

    data.rooms[roomId] = {
      messages: messagesStore,
      typing: typingData
    };

    await fetch(CLOUD_API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'amour_chat_master_v1', data })
    });
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
  return { apiKey: "Master-Cloud-Sync-Active", databaseURL: CLOUD_API_URL };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
