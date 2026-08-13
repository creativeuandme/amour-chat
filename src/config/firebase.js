// Global Public Real-Time Cloud Sync Engine (Powered by PieSocket & LocalStorage)

let socket = null;
let currentRoomId = null;
let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = false;

// Free public WebSocket API Key for instant cross-device real-time sync
const PIESOCKET_API_KEY = 'VCXvic32ipGOHXC4wWqqYTGAY4UdRIWUAQqaNzQM';

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

function initCloudWebSocket(roomId) {
  if (currentRoomId === roomId && socket && socket.readyState === WebSocket.OPEN) {
    return;
  }

  currentRoomId = roomId;
  messagesStore = getLocalMessages(roomId);
  notifyMessages();

  if (socket) {
    try { socket.close(); } catch (e) {}
  }

  // Connect to PieSocket global real-time cloud server
  const wsUrl = `wss://free.piesocket.com/v3/${roomId}?api_key=${PIESOCKET_API_KEY}&notify_self=1`;

  try {
    socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      console.log('⚡ Connected to Global Cloud Realtime Channel for room:', roomId);
      isConnected = true;
      notifyConnection(true);

      // Broadcast history request so partner can sync if missing messages
      socket.send(JSON.stringify({
        type: 'request_sync',
        roomId
      }));
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const { type, payload } = data;

        switch (type) {
          case 'new_message': {
            if (payload && !messagesStore.some(m => m.id === payload.id)) {
              messagesStore.push(payload);
              saveLocalMessages(roomId, messagesStore);
              notifyMessages();
            }
            break;
          }
          case 'request_sync': {
            // Share local messages with newly connected partner
            if (messagesStore.length > 0) {
              socket.send(JSON.stringify({
                type: 'sync_history',
                roomId,
                payload: messagesStore
              }));
            }
            break;
          }
          case 'sync_history': {
            if (Array.isArray(payload)) {
              let updated = false;
              payload.forEach(msg => {
                if (!messagesStore.some(m => m.id === msg.id)) {
                  messagesStore.push(msg);
                  updated = true;
                }
              });
              if (updated) {
                messagesStore.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
                saveLocalMessages(roomId, messagesStore);
                notifyMessages();
              }
            }
            break;
          }
          case 'clear_chat': {
            messagesStore = [];
            saveLocalMessages(roomId, []);
            notifyMessages();
            break;
          }
          case 'add_reaction': {
            if (payload) {
              const { messageId, emoji, userId } = payload;
              const msg = messagesStore.find(m => m.id === messageId);
              if (msg) {
                if (!msg.reactions) msg.reactions = {};
                msg.reactions[userId] = emoji;
                saveLocalMessages(roomId, messagesStore);
                notifyMessages();
              }
            }
            break;
          }
          case 'typing': {
            if (payload) {
              notifyTyping(payload);
            }
            break;
          }
        }
      } catch (e) {
        console.error('Error parsing cloud WebSocket message', e);
      }
    };

    socket.onclose = () => {
      isConnected = false;
      notifyConnection(false);
      // Auto reconnect after 2s
      setTimeout(() => {
        if (currentRoomId === roomId) initCloudWebSocket(roomId);
      }, 2000);
    };

    socket.onerror = (err) => {
      console.warn('Cloud WebSocket error:', err);
    };
  } catch (e) {
    console.error('Failed to create PieSocket Cloud WebSocket', e);
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
  onStateChange(isConnected);
  return () => {
    connectionListeners = connectionListeners.filter(fn => fn !== onStateChange);
  };
}

/**
 * Listen to messages in a room
 */
export function listenToMessages(roomId, callback) {
  messageListeners.push(callback);
  initCloudWebSocket(roomId);
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

function sendMsgPayloadInternal(roomId, payload) {
  const newMsg = {
    id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    ...payload,
    timestamp: Date.now(),
    reactions: {}
  };

  if (!messagesStore.some(m => m.id === newMsg.id)) {
    messagesStore.push(newMsg);
    saveLocalMessages(roomId, messagesStore);
    notifyMessages();
  }

  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: 'new_message',
      roomId,
      payload: newMsg
    }));
  }

  return newMsg.id;
}

/**
 * Clear all messages in a room
 */
export async function clearRoomMessages(roomId) {
  messagesStore = [];
  saveLocalMessages(roomId, []);
  notifyMessages();

  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: 'clear_chat',
      roomId
    }));
  }
}

/**
 * Update typing status for a user
 */
export async function updateTypingState(roomId, userId, userName, isTyping) {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: 'typing',
      roomId,
      payload: { userId, userName, isTyping }
    }));
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
  }

  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: 'add_reaction',
      roomId,
      payload: { messageId, emoji, userId }
    }));
  }
}

export function getFirebaseConfig() {
  return { apiKey: "PieSocket-Global-Cloud-WSS", databaseURL: "wss://free.piesocket.com" };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
