import React, { useState, useRef, useEffect } from 'react';
import { Send, Smile } from 'lucide-react';

const QUICK_EMOJIS = ['❤️', '💖', '😘', '💋', '✨', '🌹', '🥰', '😍', '💕', '🔥'];

export default function MessageInput({ onSendMessage }) {
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const textareaRef = useRef(null);

  // Auto resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (!text.trim()) return;
    onSendMessage(text);
    setText('');
    setShowEmojiPicker(false);
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const insertEmoji = (emoji) => {
    setText((prev) => prev + emoji);
    if (textareaRef.current) textareaRef.current.focus();
  };

  return (
    <div className="message-input-bar">
      {/* Quick Emoji Popover */}
      {showEmojiPicker && (
        <div className="emoji-quick-bar">
          {QUICK_EMOJIS.map((emoji) => (
            <button
              key={emoji}
              className="quick-emoji-btn"
              onClick={() => insertEmoji(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      )}

      {/* Standard Input Row */}
      <div className="input-row">
        <button
          className={`emoji-toggle-btn ${showEmojiPicker ? 'active' : ''}`}
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          title="Quick Emojis"
        >
          <Smile size={20} />
        </button>

        <textarea
          ref={textareaRef}
          className="chat-textarea"
          placeholder="Type a loving message..."
          rows={1}
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className={`send-msg-btn ${text.trim() ? 'active' : ''}`}
          onClick={handleSend}
          disabled={!text.trim()}
          title="Send Message"
        >
          <Send size={18} />
        </button>
      </div>

      <style>{`
        .message-input-bar {
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border-top: 1px solid var(--glass-border);
          position: relative;
          z-index: 10;
        }

        [data-theme='dark'] .message-input-bar {
          background: rgba(26, 9, 16, 0.6);
        }

        .emoji-quick-bar {
          display: flex;
          gap: 6px;
          padding: 8px 12px;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-full);
          margin-bottom: 10px;
          overflow-x: auto;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .quick-emoji-btn {
          font-size: 1.25rem;
          padding: 4px;
          border-radius: 50%;
          transition: transform 0.15s ease;
        }

        .quick-emoji-btn:hover {
          transform: scale(1.3);
        }

        .input-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          padding: 8px 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .emoji-toggle-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emoji-toggle-btn:hover, .emoji-toggle-btn.active {
          color: var(--primary-rose);
        }

        .chat-textarea {
          flex: 1;
          background: transparent;
          color: var(--text-main);
          font-size: 0.95rem;
          line-height: 1.4;
          resize: none;
          max-height: 120px;
          padding: 6px 0;
        }

        .send-msg-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--text-muted);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.5;
          transition: all 0.2s ease;
        }

        .send-msg-btn.active {
          background: var(--primary-rose);
          opacity: 1;
          box-shadow: 0 4px 15px rgba(230, 57, 70, 0.4);
          cursor: pointer;
        }

        .send-msg-btn.active:hover {
          transform: scale(1.06);
          background: var(--primary-rose-hover);
        }

        @media (max-width: 640px) {
          .message-input-bar {
            padding: 10px 12px;
          }
        }
      `}</style>
    </div>
  );
}
