import React, { useState } from 'react';
import { 
  Heart, 
  Copy, 
  Check, 
  QrCode, 
  Download, 
  Trash2, 
  Moon, 
  Sun, 
  Wifi, 
  WifiOff, 
  Settings, 
  User,
  ArrowRight
} from 'lucide-react';

export default function Header({
  roomId,
  nickname,
  isConnected,
  isCopied,
  onCopyLink,
  onOpenQr,
  onOpenExport,
  onOpenClear,
  onOpenSettings,
  theme,
  onToggleTheme,
  onChangeNickname,
  onJoinRoom
}) {
  const [isEditingRoom, setIsEditingRoom] = useState(false);
  const [roomInput, setRoomInput] = useState('');

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (roomInput.trim()) {
      onJoinRoom(roomInput.trim());
      setIsEditingRoom(false);
      setRoomInput('');
    }
  };

  return (
    <header className="chat-header">
      {/* Left: App Logo & Interactive Room Switcher */}
      <div className="header-left">
        <div className="brand-badge">
          <Heart className="brand-icon" size={22} fill="#E63946" />
          <span className="brand-name">AmourChat</span>
        </div>

        {isEditingRoom ? (
          <form className="room-edit-form" onSubmit={handleJoinSubmit}>
            <input
              type="text"
              className="room-input-field"
              placeholder="Enter Room Code..."
              value={roomInput}
              onChange={(e) => setRoomInput(e.target.value)}
              autoFocus
            />
            <button type="submit" className="room-join-btn" title="Join Room">
              <ArrowRight size={14} />
              <span>Join</span>
            </button>
            <button type="button" className="room-cancel-btn" onClick={() => setIsEditingRoom(false)}>
              Cancel
            </button>
          </form>
        ) : (
          <div className="room-pill">
            <span className="room-label">Room:</span>
            <span
              className="room-code clickable"
              onClick={() => {
                setRoomInput(roomId);
                setIsEditingRoom(true);
              }}
              title="Click to Change / Join Room"
            >
              {roomId} ✏️
            </span>
            <button 
              className={`copy-link-btn ${isCopied ? 'copied' : ''}`}
              onClick={onCopyLink}
              title="Copy Private Room URL"
            >
              {isCopied ? <Check size={14} /> : <Copy size={14} />}
              <span>{isCopied ? 'Copied!' : 'Share Link'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Right: Actions & Status */}
      <div className="header-right">
        {/* Connection Status Badge */}
        <div className={`status-badge ${isConnected ? 'online' : 'offline'}`} title={isConnected ? 'Connected to Real-time Cloud Database' : 'Disconnected / Reconnecting'}>
          {isConnected ? (
            <>
              <span className="status-dot green-pulse"></span>
              <Wifi size={14} />
              <span className="status-text hide-mobile">Live Sync</span>
            </>
          ) : (
            <>
              <span className="status-dot red-pulse"></span>
              <WifiOff size={14} />
              <span className="status-text hide-mobile">Connecting...</span>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <button className="icon-btn" onClick={onOpenQr} title="Show QR Code for phone scan">
          <QrCode size={18} />
        </button>

        <button className="icon-btn" onClick={onOpenExport} title="Save & Export Chat History">
          <Download size={18} />
        </button>

        <button className="icon-btn danger" onClick={onOpenClear} title="Clear Conversation">
          <Trash2 size={18} />
        </button>

        <button className="icon-btn" onClick={onToggleTheme} title="Toggle Dark/Light Mode">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button className="icon-btn" onClick={onOpenSettings} title="Settings">
          <Settings size={18} />
        </button>

        {/* Nickname Chip */}
        <button className="user-chip" onClick={onChangeNickname} title="Click to edit your nickname">
          <User size={14} />
          <span className="user-name">{nickname}</span>
        </button>
      </div>

      <style>{`
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--glass-border);
          z-index: 10;
          gap: 12px;
          flex-wrap: wrap;
        }

        [data-theme='dark'] .chat-header {
          background: rgba(26, 9, 16, 0.6);
        }

        .header-left, .header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--primary-rose);
        }

        .brand-icon {
          animation: pulseHeart 2s infinite ease-in-out;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .room-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(230, 57, 70, 0.08);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(230, 57, 70, 0.2);
          font-size: 0.82rem;
        }

        .room-label {
          color: var(--text-muted);
        }

        .room-code {
          font-weight: 600;
          color: var(--primary-rose);
        }

        .room-code.clickable {
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .room-edit-form {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .room-input-field {
          padding: 4px 10px;
          border-radius: var(--radius-full);
          border: 1px solid var(--primary-rose);
          font-size: 0.82rem;
          background: var(--glass-bg);
          color: var(--text-main);
          width: 150px;
        }

        .room-join-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--primary-rose);
          color: white;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .room-cancel-btn {
          font-size: 0.76rem;
          color: var(--text-muted);
          background: transparent;
        }

        .copy-link-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--primary-rose);
          color: white;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
          margin-left: 4px;
        }

        .copy-link-btn:hover {
          background: var(--primary-rose-hover);
          transform: translateY(-1px);
        }

        .copy-link-btn.copied {
          background: #10b981;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 600;
        }

        .status-badge.online {
          background: rgba(16, 185, 129, 0.12);
          color: var(--online-green);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .status-badge.offline {
          background: rgba(239, 68, 68, 0.12);
          color: var(--offline-red);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .green-pulse {
          background: var(--online-green);
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulseDot 1.6s infinite;
        }

        .red-pulse {
          background: var(--offline-red);
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .icon-btn {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.6);
          color: var(--text-main);
          border: 1px solid var(--glass-border);
        }

        [data-theme='dark'] .icon-btn {
          background: rgba(45, 18, 30, 0.8);
        }

        .icon-btn:hover {
          background: var(--primary-rose);
          color: white;
          transform: translateY(-1px);
        }

        .icon-btn.danger:hover {
          background: #ef4444;
        }

        .user-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(230, 57, 70, 0.12);
          color: var(--text-main);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          border: 1px solid var(--glass-border);
        }

        .user-chip:hover {
          background: rgba(230, 57, 70, 0.22);
        }

        @media (max-width: 640px) {
          .hide-mobile {
            display: none;
          }
          .chat-header {
            padding: 10px 14px;
          }
          .room-code {
            max-width: 80px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      `}</style>
    </header>
  );
}
