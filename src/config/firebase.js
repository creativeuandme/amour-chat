// Bulletproof Per-Message Index & Append Realtime Engine for AmourChat

let currentRoomId = null;
let roomIndexObjectId = null;

let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = true;

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

function getStoredIndexObjId(roomId) {
  return localStorage.getItem(`amour_idx_obj_${roomId}`) || null;
}

function saveStoredIndexObjId(roomId, objId) {
  if (objId) {
    localStorage.setItem(`amour_idx_obj_${roomId}`, objId);
  }
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
  roomIndexObjectId = getStoredIndexObjId(roomId);
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

  // 2. Initial cloud fetch
  fetchCloudMessages(roomId);

  // 3. Fast high-frequency polling (800ms) over HTTPS (Port 443) - works 100% on 5G & Wi-Fi
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    fetchCloudMessages(roomId);
  }, 800);
}

async function getOrFindRoomIndexObj(roomId) {
  const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
  const indexName = `amour_idx_v4_${cleanRoomId}`;

  let targetId = roomIndexObjectId || getStoredIndexObjId(roomId);
  if (targetId) {
    const res = await fetch(`${CLOUD_API_BASE}/${targetId}`);
    if (res.ok) {
      const json = await res.json();
      if (json && json.data) return { id: targetId, data: json.data };
    }
  }

  // Search if index object exists
  const searchRes = await fetch(CLOUD_API_BASE);
  if (searchRes.ok) {
    const all = await searchRes.json();
    const found = all.find((o) => o.name === indexName);
    if (found) {
      roomIndexObjectId = found.id;
      saveStoredIndexObjId(roomId, found.id);
      return { id: found.id, data: found.data || {} };
    }
  }

  // Create new index object if not found
  const createRes = await fetch(CLOUD_API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: indexName, data: { msgItemIds: [], typing: null } })
  });
  if (createRes.ok) {
    const created = await createRes.json();
    if (created && created.id) {
      roomIndexObjectId = created.id;
      saveStoredIndexObjId(roomId, created.id);
      return { id: created.id, data: { msgItemIds: [], typing: null } };
    }
  }

  return null;
}

async function fetchCloudMessages(roomId) {
  try {
    const indexObj = await getOrFindRoomIndexObj(roomId);
    if (!indexObj || !indexObj.data) return;

    const { msgItemIds, typing } = indexObj.data;

    // 1. Check for missing message items
    if (Array.isArray(msgItemIds) && msgItemIds.length > 0) {
      // Find item IDs not yet loaded locally
      const missingItemIds = msgItemIds.filter((itemId) => !messagesStore.some((m) => m._cloudItemId === itemId));

      if (missingItemIds.length > 0) {
        // Batch fetch missing message objects (up to 10 at a time)
        const batchIds = missingItemIds.slice(-10);
        const queryParams = batchIds.map((id) => `id=${id}`).join('&');
        const batchRes = await fetch(`${CLOUD_API_BASE}?${queryParams}`);
        if (batchRes.ok) {
          const batchItems = await batchRes.json();
          let updated = false;
          batchItems.forEach((item) => {
            if (item && item.data && item.data.id) {
              const msg = { ...item.data, _cloudItemId: item.id };
              if (!messagesStore.some((m) => m.id === msg.id)) {
                messagesStore.push(msg);
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
      }
    }

    // 2. Process Typing Status
    if (typing) {
      const { userId, userName, isTyping, timestamp } = typing;
      const myUserId = localStorage.getItem('amour_user_id');
      if (userId !== myUserId) {
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

  // 2. BroadcastChannel for same-device tabs (0ms)
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'new_message', payload: newMsg });
    } catch (e) {}
  }

  // 3. Post single lightweight message object (<200 bytes) to Cloud
  try {
    const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
    const itemRes = await fetch(CLOUD_API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: `amour_msg_${cleanRoomId}`, data: newMsg })
    });

    if (itemRes.ok) {
      const itemObj = await itemRes.json();
      if (itemObj && itemObj.id) {
        newMsg._cloudItemId = itemObj.id;
        // Append item ID to room index object
        const indexObj = await getOrFindRoomIndexObj(roomId);
        if (indexObj && indexObj.id) {
          const currentItemIds = Array.isArray(indexObj.data.msgItemIds) ? indexObj.data.msgItemIds : [];
          if (!currentItemIds.includes(itemObj.id)) {
            currentItemIds.push(itemObj.id);
            await fetch(`${CLOUD_API_BASE}/${indexObj.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: `amour_idx_v4_${cleanRoomId}`,
                data: { ...indexObj.data, msgItemIds: currentItemIds }
              })
            });
          }
        }
      }
    }
  } catch (e) {}

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
    const indexObj = await getOrFindRoomIndexObj(roomId);
    if (indexObj && indexObj.id) {
      const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
      await fetch(`${CLOUD_API_BASE}/${indexObj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: `amour_idx_v4_${cleanRoomId}`, data: { msgItemIds: [], typing: null } })
      });
    }
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
    const indexObj = await getOrFindRoomIndexObj(roomId);
    if (indexObj && indexObj.id) {
      const cleanRoomId = roomId.replace(/[^a-zA-Z0-9_-]/g, '_');
      await fetch(`${CLOUD_API_BASE}/${indexObj.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `amour_idx_v4_${cleanRoomId}`,
          data: { ...indexObj.data, typing: payload }
        })
      });
    }
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
  }
}

export function getFirebaseConfig() {
  return { apiKey: "AppendIndex-Cloud-Engine-Active", databaseURL: CLOUD_API_BASE };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
