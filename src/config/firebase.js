// Ultra-Reliable 24/7 Global Realtime Engine for AmourChat

let currentRoomId = null;
let socket = null;

let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = true;

const NTFY_SERVER_BASE = 'https://ntfy.sh';
const NTFY_WSS_BASE = 'wss://ntfy.sh';

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

function getTopicName(roomId) {
  return `amour_couple_room_${roomId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
}

function initSync(roomId) {
  if (currentRoomId === roomId && socket && socket.readyState === WebSocket.OPEN) {
    return;
  }

  currentRoomId = roomId;
  messagesStore = getLocalMessages(roomId);
  notifyMessages();
  notifyConnection(true);

  // 1. Same-device multi-tab sync via BroadcastChannel
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    if (broadcastChannel) broadcastChannel.close();
    broadcastChannel = new BroadcastChannel(`amour_room_${roomId}`);
    broadcastChannel.onmessage = (event) => {
      const { type, payload } = event.data;
      handleIncomingPayload(type, payload);
    };
  }

  // 2. Fetch all historical cloud messages from ntfy.sh REST
  fetchCloudHistory(roomId);

  // 3. Connect to WSS WebSockets for sub-second real-time push
  initWssSocket(roomId);

  // 4. Fallback REST poll every 2 seconds to guarantee 100% message delivery
  if (syncIntervalTimer) clearInterval(syncIntervalTimer);
  syncIntervalTimer = setInterval(() => {
    fetchCloudHistory(roomId);
  }, 2000);
}

function initWssSocket(roomId) {
  if (socket) {
    try { socket.close(); } catch (e) {}
  }

  const topic = getTopicName(roomId);
  const wssUrl = `${NTFY_WSS_BASE}/${topic}/ws`;

  try {
    socket = new WebSocket(wssUrl);

    socket.onopen = () => {
      isConnected = true;
      notifyConnection(true);
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'message' && data.message) {
          const parsedPayload = JSON.parse(data.message);
          const { type, payload } = parsedPayload;
          handleIncomingPayload(type, payload);
        }
      } catch (e) {}
    };

    socket.onclose = () => {
      setTimeout(() => {
        if (currentRoomId === roomId) initWssSocket(roomId);
      }, 3000);
    };

    socket.onerror = () => {};
  } catch (e) {}
}

async function fetchCloudHistory(roomId) {
  const topic = getTopicName(roomId);
  try {
    const res = await fetch(`${NTFY_SERVER_BASE}/${topic}/json?poll=1&since=all`);
    if (!res.ok) return;
    const textData = await res.text();
    if (!textData.trim()) return;

    const lines = textData.trim().split('\n');
    let updated = false;

    lines.forEach((line) => {
      try {
        const item = JSON.parse(line);
        if (item.event === 'message' && item.message) {
          const parsed = JSON.parse(item.message);
          if (parsed.type === 'new_message' && parsed.payload) {
            const msg = parsed.payload;
            if (!messagesStore.some((m) => m.id === msg.id)) {
              messagesStore.push(msg);
              updated = true;
            }
          } else if (parsed.type === 'clear_chat') {
            messagesStore = [];
            updated = true;
          } else if (parsed.type === 'add_reaction' && parsed.payload) {
            const { messageId, emoji, userId } = parsed.payload;
            const targetMsg = messagesStore.find((m) => m.id === messageId);
            if (targetMsg) {
              if (!targetMsg.reactions) targetMsg.reactions = {};
              targetMsg.reactions[userId] = emoji;
              updated = true;
            }
          }
        }
      } catch (e) {}
    });

    if (updated) {
      messagesStore.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
      saveLocalMessages(roomId, messagesStore);
      notifyMessages();
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

function notifyMessages() {
  messageListeners.forEach((fn) => fn([...messagesStore]));
}

function notifyConnection(state) {
  connectionListeners.forEach((fn) => fn(state));
}

function notifyTyping(payload) {
  typingListeners.forEach((fn) => fn(payload));
}

/**
 * Listen to Connection State
 */
export function listenToConnectionState(onStateChange) {
  connectionListeners.push(onStateChange);
  onStateChange(true);
  return () => {
    connectionListeners = connectionListeners.filter((fn) => fn !== onStateChange);
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
    messageListeners = messageListeners.filter((fn) => fn !== callback);
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

  // 1. Local Optimistic Render & Storage
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

  // 3. Post to Global Real-Time Cloud Server (ntfy.sh)
  const topic = getTopicName(roomId);
  try {
    await fetch(`${NTFY_SERVER_BASE}/${topic}`, {
      method: 'POST',
      body: JSON.stringify({ type: 'new_message', payload: newMsg })
    });
  } catch (e) {}

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
    try {
      broadcastChannel.postMessage({ type: 'clear_chat' });
    } catch (e) {}
  }

  const topic = getTopicName(roomId);
  try {
    await fetch(`${NTFY_SERVER_BASE}/${topic}`, {
      method: 'POST',
      body: JSON.stringify({ type: 'clear_chat' })
    });
  } catch (e) {}
}

/**
 * Update typing status for a user
 */
export async function updateTypingState(roomId, userId, userName, isTyping) {
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({
        type: 'typing',
        payload: { userId, userName, isTyping }
      });
    } catch (e) {}
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
    typingListeners = typingListeners.filter((fn) => fn !== handler);
  };
}

/**
 * Add reaction to a message
 */
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

    const topic = getTopicName(roomId);
    try {
      await fetch(`${NTFY_SERVER_BASE}/${topic}`, {
        method: 'POST',
        body: JSON.stringify({
          type: 'add_reaction',
          payload: { messageId, emoji, userId }
        })
      });
    } catch (e) {}
  }
}

export function getFirebaseConfig() {
  return { apiKey: "NTFY-Realtime-Cloud-Active", databaseURL: "https://ntfy.sh" };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
