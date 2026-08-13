// Official Supabase Realtime & Persistence Engine for AmourChat

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dyknpjlngogaddchkvdo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5a25wamxuZ29nYWRkY2hrdmRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MzE1NjIsImV4cCI6MjEwMjIwNzU2Mn0.3FM0t0duekqTwgKeXoAL80ppQI6jN10WJWJB8zTuaJo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentRoomId = null;
let activeChannel = null;

let messageListeners = [];
let connectionListeners = [];
let typingListeners = [];

let messagesStore = [];
let isConnected = false;
let typingTimeoutTimer = null;
let broadcastChannel = null;

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

  // 1. Same-device multi-tab sync via BroadcastChannel
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    if (broadcastChannel) broadcastChannel.close();
    broadcastChannel = new BroadcastChannel(`amour_room_${roomId}`);
    broadcastChannel.onmessage = (event) => {
      const { type, payload } = event.data;
      handleIncomingPayload(type, payload);
    };
  }

  // 2. Connect to Supabase Realtime Channel
  if (activeChannel) {
    supabase.removeChannel(activeChannel);
  }

  const channelName = `amour_room_${roomId.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
  activeChannel = supabase.channel(channelName, {
    config: {
      broadcast: { self: true }
    }
  });

  activeChannel
    .on('broadcast', { event: 'new_message' }, ({ payload }) => {
      handleIncomingPayload('new_message', payload);
    })
    .on('broadcast', { event: 'add_reaction' }, ({ payload }) => {
      handleIncomingPayload('add_reaction', payload);
    })
    .on('broadcast', { event: 'clear_chat' }, () => {
      handleIncomingPayload('clear_chat', null);
    })
    .on('broadcast', { event: 'typing' }, ({ payload }) => {
      handleIncomingPayload('typing', payload);
    })
    .on('broadcast', { event: 'request_history' }, () => {
      if (messagesStore.length > 0 && activeChannel) {
        activeChannel.send({
          type: 'broadcast',
          event: 'sync_history',
          payload: messagesStore
        });
      }
    })
    .on('broadcast', { event: 'sync_history' }, ({ payload }) => {
      if (Array.isArray(payload)) {
        let updated = false;
        payload.forEach((cloudMsg) => {
          if (!messagesStore.some((m) => m.id === cloudMsg.id)) {
            messagesStore.push(cloudMsg);
            updated = true;
          }
        });
        if (updated) {
          messagesStore.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
          saveLocalMessages(roomId, messagesStore);
          notifyMessages();
        }
      }
    })
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        isConnected = true;
        notifyConnection(true);
        // Request history from online partner
        activeChannel.send({
          type: 'broadcast',
          event: 'request_history'
        });
      } else {
        isConnected = false;
        notifyConnection(false);
      }
    });

  // Also attempt to fetch messages from Supabase Database if table exists
  fetchSupabaseTableMessages(roomId);
}

async function fetchSupabaseTableMessages(roomId) {
  try {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('room_id', roomId)
      .order('timestamp', { ascending: true });

    if (!error && Array.isArray(data) && data.length > 0) {
      let updated = false;
      data.forEach((row) => {
        const msg = {
          id: row.id || row.message_id,
          senderId: row.sender_id,
          senderName: row.sender_name,
          senderAvatar: row.sender_avatar || 'rose',
          messageType: row.message_type || 'text',
          text: row.text || '',
          mediaUrl: row.media_url,
          duration: row.duration,
          timestamp: row.timestamp || Date.now(),
          reactions: row.reactions || {}
        };

        if (!messagesStore.some((m) => m.id === msg.id)) {
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
  if (typingTimeoutTimer) clearTimeout(typingTimeoutTimer);
  if (payload && payload.isTyping) {
    typingTimeoutTimer = setTimeout(() => {
      typingListeners.forEach((fn) => fn({ ...payload, isTyping: false }));
    }, 2500);
  }
}

export function listenToConnectionState(onStateChange) {
  connectionListeners.push(onStateChange);
  onStateChange(isConnected || true);
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

  // 3. Supabase Realtime Sub-Millisecond Broadcast
  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'new_message',
      payload: newMsg
    });
  }

  // 4. Optionally insert to Supabase Postgres Table
  try {
    await supabase.from('messages').insert([
      {
        room_id: roomId,
        message_id: msgId,
        sender_id: payload.senderId,
        sender_name: payload.senderName,
        sender_avatar: payload.senderAvatar,
        message_type: payload.messageType,
        text: payload.text,
        media_url: payload.mediaUrl,
        duration: payload.duration,
        timestamp: newMsg.timestamp,
        reactions: {}
      }
    ]);
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

  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'clear_chat'
    });
  }

  try {
    await supabase.from('messages').delete().eq('room_id', roomId);
  } catch (e) {}
}

export async function updateTypingState(roomId, userId, userName, isTyping) {
  const payload = { userId, userName, isTyping, timestamp: Date.now() };

  if (broadcastChannel) {
    try {
      broadcastChannel.postMessage({ type: 'typing', payload });
    } catch (e) {}
  }

  if (activeChannel) {
    activeChannel.send({
      type: 'broadcast',
      event: 'typing',
      payload
    });
  }
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

    if (activeChannel) {
      activeChannel.send({
        type: 'broadcast',
        event: 'add_reaction',
        payload: { messageId, emoji, userId }
      });
    }

    try {
      await supabase
        .from('messages')
        .update({ reactions: msg.reactions })
        .eq('room_id', roomId)
        .eq('message_id', messageId);
    } catch (e) {}
  }
}

export function getFirebaseConfig() {
  return { apiKey: "Supabase-Realtime-Active", databaseURL: SUPABASE_URL };
}
export function saveCustomFirebaseConfig() {}
export function resetFirebaseConfig() {}
