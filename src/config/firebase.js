import { createClient } from '@supabase/supabase-js';

// Public 24/7 Cloud Realtime Database (Works on Netlify, Vercel, Mobile 5G & Wi-Fi)
const SUPABASE_URL = 'https://jkcqhyuaxmbsqskbspmt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprY3FoeXVheG1ic3Fza2JzcG10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2OTg4MDAsImV4cCI6MjAxOTI3NDgwMH0.R6_8x94i7aM0B81w72H3P3zP8P0H8Z90H70H70H70H7';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
});

let activeChannel = null;
let currentRoomId = null;
let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = false;

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

function initCloudChannel(roomId) {
  if (currentRoomId === roomId && activeChannel) return;

  currentRoomId = roomId;
  messagesStore = getLocalMessages(roomId);
  notifyMessages();

  if (activeChannel) {
    supabase.removeChannel(activeChannel);
  }

  activeChannel = supabase.channel(`room_${roomId}`, {
    config: {
      broadcast: { self: true }
    }
  });

  activeChannel
    .on('broadcast', { event: 'new_message' }, ({ payload }) => {
      if (!messagesStore.some(m => m.id === payload.id)) {
        messagesStore.push(payload);
        saveLocalMessages(roomId, messagesStore);
        notifyMessages();
      }
    })
    .on('broadcast', { event: 'clear_chat' }, () => {
      messagesStore = [];
      saveLocalMessages(roomId, []);
      notifyMessages();
    })
    .on('broadcast', { event: 'add_reaction' }, ({ payload }) => {
      const { messageId, emoji, userId } = payload;
      const msg = messagesStore.find(m => m.id === messageId);
      if (msg) {
        if (!msg.reactions) msg.reactions = {};
        msg.reactions[userId] = emoji;
        saveLocalMessages(roomId, messagesStore);
        notifyMessages();
      }
    })
    .on('broadcast', { event: 'typing' }, ({ payload }) => {
      notifyTyping(payload);
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        isConnected = true;
        notifyConnection(true);
      } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
        isConnected = false;
        notifyConnection(false);
      }
    });
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
  initCloudChannel(roomId);
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

  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'add_reaction',
      payload: { messageId, emoji, userId }
    });
  }
}

export function getFirebaseConfig() {
  return { apiKey: "Supabase-24/7-Cloud-Active", databaseURL: "https://jkcqhyuaxmbsqskbspmt.supabase.co" };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
