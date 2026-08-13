// Real-Time Sync Client for AmourChat

let socket = null;
let currentRoomId = null;
let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = false;

function getWsUrl() {
  const host = window.location.hostname;
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  return `${protocol}//${host}:3001`;
}

function initWebSocket(roomId) {
  if (socket && socket.readyState === WebSocket.OPEN && currentRoomId === roomId) {
    return;
  }

  currentRoomId = roomId;

  try {
    socket = new WebSocket(getWsUrl());

    socket.onopen = () => {
      isConnected = true;
      notifyConnection(true);

      socket.send(JSON.stringify({
        type: 'join_room',
        roomId
      }));
    };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        const { type, payload } = data;

        switch (type) {
          case 'history': {
            messagesStore = payload || [];
            notifyMessages();
            break;
          }
          case 'new_message': {
            if (!messagesStore.some(m => m.id === payload.id)) {
              messagesStore.push(payload);
              notifyMessages();
            }
            break;
          }
          case 'clear_chat': {
            messagesStore = [];
            notifyMessages();
            break;
          }
          case 'add_reaction': {
            const { messageId, emoji, userId } = payload;
            const msg = messagesStore.find(m => m.id === messageId);
            if (msg) {
              if (!msg.reactions) msg.reactions = {};
              msg.reactions[userId] = emoji;
              notifyMessages();
            }
            break;
          }
          case 'typing': {
            notifyTyping(payload);
            break;
          }
        }
      } catch (e) {
        console.error('WebSocket parse error', e);
      }
    };

    socket.onclose = () => {
      isConnected = false;
      notifyConnection(false);
      setTimeout(() => {
        if (currentRoomId === roomId) initWebSocket(roomId);
      }, 2000);
    };

    socket.onerror = () => {};
  } catch (e) {
    console.error('Failed to create WebSocket client', e);
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
  initWebSocket(roomId);
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
  const tempMsg = {
    id: 'temp_' + Date.now(),
    ...payload,
    timestamp: Date.now(),
    reactions: {}
  };
  messagesStore.push(tempMsg);
  notifyMessages();

  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify({
      type: 'new_message',
      roomId,
      payload
    }));
  }

  return tempMsg.id;
}

/**
 * Clear all messages in a room
 */
export async function clearRoomMessages(roomId) {
  messagesStore = [];
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
  return { apiKey: "WebSocket-Realtime-Server-Active", databaseURL: "ws://0.0.0.0:3001" };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
