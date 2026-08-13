// Helper utilities for AmourChat

const ROMANTIC_ADJECTIVES = ['forever', 'sweet', 'bliss', 'angel', 'honey', 'heart', 'darling', 'amour', 'velvet', 'serenade'];
const ROMANTIC_NOUNS = ['love', 'soul', 'haven', 'nest', 'pulse', 'flame', 'embrace', 'whisper', 'spark', 'bond'];

/**
 * Generate a unique romantic room ID
 */
export function generateRoomId() {
  const adj = ROMANTIC_ADJECTIVES[Math.floor(Math.random() * ROMANTIC_ADJECTIVES.length)];
  const noun = ROMANTIC_NOUNS[Math.floor(Math.random() * ROMANTIC_NOUNS.length)];
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${adj}-${noun}-${randomNum}`;
}

/**
 * Extract room ID from URL hash (#room=xxx) or query string (?room=xxx)
 */
export function getRoomIdFromUrl() {
  const hash = window.location.hash;
  if (hash.includes('room=')) {
    const match = hash.match(/room=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) return match[1];
  }
  
  const searchParams = new URLSearchParams(window.location.search);
  const queryRoom = searchParams.get('room');
  if (queryRoom) return queryRoom;

  return null;
}

/**
 * Update browser URL with room ID without reloading
 */
export function updateRoomUrl(roomId) {
  const newUrl = `${window.location.origin}${window.location.pathname}#room=${roomId}`;
  window.history.replaceState(null, '', newUrl);
}

/**
 * Generate shareable URL (converts localhost to local LAN IP or public domain so phone/partner can access)
 */
export function getShareableRoomUrl(roomId) {
  let origin = window.location.origin;
  
  // If running locally on localhost, replace with network IP 192.168.0.122 for phone compatibility
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    origin = `http://192.168.0.122:${window.location.port || '3000'}`;
  }

  return `${origin}${window.location.pathname}#room=${roomId}`;
}

/**
 * Format timestamp into human friendly text
 */
export function formatTimestamp(timestamp) {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const now = new Date();
  
  const isToday = date.toDateString() === now.toDateString();
  const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  if (isToday) {
    return timeStr;
  }
  
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday ${timeStr}`;
  }
  
  return `${date.toLocaleDateString([], { month: 'short', day: 'numeric' })} ${timeStr}`;
}

/**
 * Export messages to a text file download
 */
export function exportChatAsTxt(messages, roomId) {
  if (!messages || messages.length === 0) return;
  
  let content = `=====================================\n`;
  content += ` AMOUR CHAT TRANSCRIPT - Room: ${roomId}\n`;
  content += ` Exported on: ${new Date().toLocaleString()}\n`;
  content += `=====================================\n\n`;
  
  messages.forEach(msg => {
    const time = new Date(msg.timestamp).toLocaleString();
    content += `[${time}] ${msg.senderName}: ${msg.text}\n`;
  });
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `AmourChat_${roomId}_${new Date().toISOString().slice(0, 10)}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Export messages to a JSON file download
 */
export function exportChatAsJson(messages, roomId) {
  if (!messages || messages.length === 0) return;
  
  const exportData = {
    roomId,
    exportedAt: new Date().toISOString(),
    totalMessages: messages.length,
    messages: messages.map(m => ({
      id: m.id,
      senderName: m.senderName,
      senderId: m.senderId,
      text: m.text,
      timestamp: m.timestamp,
      reactions: m.reactions || {}
    }))
  };
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `AmourChat_${roomId}_${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

/**
 * Synthesize a soft romantic chime using Web Audio API
 */
export function playNotificationSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1318.51, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1567.98, ctx.currentTime + 0.15);
    
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.4);
  } catch (e) {}
}
