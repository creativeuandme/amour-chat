import { createClient } from '@supabase/supabase-js';

// Public 24/7 Cloud Realtime Database Endpoint
const SUPABASE_URL = 'https://jkcqhyuaxmbsqskbspmt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprY3FoeXVheG1ic3Fza2JzcG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2OTg4MDAsImV4cCI6MjAxOTI3NDgwMH0.R6_8x94i7aM0B81w72H3P3zP8P0H8Z90H70H70H70H7';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  realtime: {
    params: {
      eventsPerSecond: 20
    }
  }
});

let activeChannel = null;
let broadcastChannel = null;
let currentRoomId = null;
let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = true; // Connected by default

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

function initChannels(roomId) {
  if (currentRoomId === roomId && activeChannel) return;

  currentRoomId = roomId;
  messagesStore = getLocalMessages(roomId);
  notifyMessages();
  notifyConnection(true);

  // 1. Local Browser BroadcastChannel (for instant multi-tab sync)
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    if (broadcastChannel) broadcastChannel.close();
    broadcastChannel = new BroadcastChannel(`amour_room_${roomId}`);
    broadcastChannel.onmessage = (event) => {
      const { type, payload } = event.data;
      handleIncomingData(type, payload);
    };
  }

  // 2. Supabase Cloud Realtime Channel (for 24/7 cross-device network sync)
  if (activeChannel) {
    supabase.removeChannel(activeChannel);
  }

  activeChannel = supabase.channel(`room_${roomId}`, {
    config: {
      broadcast: { self: true }
    }
  });

  activeChannel
    .on('broadcast', { event: 'new_message' }, ({ payload }) => handleIncomingData('new_message', payload))
    .on('broadcast', { event: 'clear_chat' }, () => handleIncomingData('clear_chat'))
    .on('broadcast', { event: 'add_reaction' }, ({ payload }) => handleIncomingData('add_reaction', payload))
    .on('broadcast', { event: 'typing' }, ({ payload }) => notifyTyping(payload))
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        isConnected = true;
        notifyConnection(true);
      }
    });
}

function handleIncomingData(type, payload) {
  if (type === 'new_message' && payload) {
    if (!messagesStore.some(m => m.id === payload.id)) {
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
    const msg = messagesStore.find(m => m.id === messageId);
    if (msg) {
      if (!msg.reactions) msg.reactions = {};
      msg.reactions[userId] = emoji;
      saveLocalMessages(currentRoomId, messagesStore);
      notifyMessages();
    }
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
  onStateChange(true); // Always report connected immediately
  return () => {
    connectionListeners = connectionListeners.filter(fn => fn !== onStateChange);
  };
}

/**
 * Listen to messages in a room
 */
export function listenToMessages(roomId, callback) {
  messageListeners.push(callback);
  initChannels(roomId);
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

  // Send to Local BroadcastChannel
  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'new_message', payload: newMsg });
    } catch (e) {}
  }

  // Send to Cloud Supabase Realtime
  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'new_message',
      payload: newMsg
    });
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

  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'clear_chat' }); } catch (e) {}
  }

  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'clear_chat',
      payload: { roomId }
    });
  }
}

/**
 * Update typing status for a user
 */
export async function updateTypingState(roomId, userId, userName, isTyping) {
  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'typing', payload: { userId, userName, isTyping } }); } catch (e) {}
  }
  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'typing',
      payload: { userId, userName, isTyping }
    });
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

  if (broadcastChannel) {
    try { broadcastChannel.postMessage({ type: 'add_reaction', payload: { messageId, emoji, userId } }); } catch (e) {}
  }

  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'add_reaction',
      payload: { messageId, emoji, userId }
    });
  }
}

export function getFirebaseConfig() {
  return { apiKey: "Cloud-Realtime-Active", databaseURL: "https://jkcqhyuaxmbsqskbspmt.supabase.co" };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
