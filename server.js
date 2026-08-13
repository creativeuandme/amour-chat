import { WebSocketServer, WebSocket } from 'ws';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'rooms_data.json');

// Memory cache of room messages
let roomData = {};

// Load persisted messages from JSON file on startup
if (fs.existsSync(DATA_FILE)) {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    roomData = JSON.parse(raw);
    console.log('Loaded room history from disk.');
  } catch (e) {
    console.error('Failed to parse rooms_data.json', e);
  }
}

function saveData() {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(roomData, null, 2));
  } catch (e) {
    console.error('Failed to save rooms_data.json', e);
  }
}

const PORT = 3001;
const wss = new WebSocketServer({ port: PORT, host: '0.0.0.0' });

console.log(`🚀 AmourChat Real-Time Sync Server running on ws://0.0.0.0:${PORT}`);

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message.toString());
      const { type, roomId, payload } = data;

      if (!roomId) return;

      if (!roomData[roomId]) {
        roomData[roomId] = { messages: [] };
      }

      switch (type) {
        case 'join_room': {
          ws.send(JSON.stringify({
            type: 'history',
            roomId,
            payload: roomData[roomId].messages || []
          }));
          break;
        }

        case 'new_message': {
          const newMsg = {
            id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
            ...payload, // text, messageType: 'text'|'image'|'audio', mediaUrl, duration
            timestamp: Date.now(),
            reactions: {}
          };
          roomData[roomId].messages.push(newMsg);
          saveData();

          broadcastToRoom(roomId, {
            type: 'new_message',
            roomId,
            payload: newMsg
          });
          break;
        }

        case 'clear_chat': {
          roomData[roomId].messages = [];
          saveData();

          broadcastToRoom(roomId, {
            type: 'clear_chat',
            roomId
          });
          break;
        }

        case 'add_reaction': {
          const { messageId, emoji, userId } = payload;
          const msg = roomData[roomId].messages.find(m => m.id === messageId);
          if (msg) {
            if (!msg.reactions) msg.reactions = {};
            msg.reactions[userId] = emoji;
            saveData();

            broadcastToRoom(roomId, {
              type: 'add_reaction',
              roomId,
              payload: { messageId, emoji, userId }
            });
          }
          break;
        }

        case 'typing': {
          broadcastToRoom(roomId, {
            type: 'typing',
            roomId,
            payload
          }, ws);
          break;
        }
      }
    } catch (e) {
      console.error('Error handling WebSocket message', e);
    }
  });
});

function broadcastToRoom(roomId, data, senderWs = null) {
  const jsonStr = JSON.stringify(data);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client !== senderWs) {
      client.send(jsonStr);
    }
  });
}
