import React, { useState, useRef, useEffect } from 'react';
import { Send, Smile, Image, Mic, Square, X, Trash2 } from 'lucide-react';

const QUICK_EMOJIS = ['❤️', '💖', '😘', '💋', '✨', '🌹', '🥰', '😍', '💕', '🔥'];

export default function MessageInput({
  onSendMessage,
  onSendImage,
  onSendAudio,
  onTyping
}) {
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const fileInputRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recordingTimerRef = useRef(null);
  const typingTimeoutRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [text]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    onTyping(true);
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      onTyping(false);
    }, 2000);
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
    onTyping(false);
    setShowEmojiPicker(false);
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  // Image Upload Handler
  const handleImageSelect = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        // Compress image using canvas
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
        onSendImage(compressedDataUrl, text.trim());
        setText('');
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  // Voice Recording Handlers
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const reader = new FileReader();
        reader.onloadend = () => {
          onSendAudio(reader.result, recordingTime);
        };
        reader.readAsDataURL(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setRecordingTime(0);

      recordingTimerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (err) {
      alert('Microphone access is required to record voice notes.');
    }
  };

  const stopAndSendRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      clearInterval(recordingTimerRef.current);
      setIsRecording(false);
    }
  };

  const cancelRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.onstop = null;
      mediaRecorderRef.current.stop();
      if (mediaRecorderRef.current.stream) {
        mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      }
      clearInterval(recordingTimerRef.current);
      setIsRecording(false);
      setRecordingTime(0);
    }
  };

  const formatSecs = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
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

      {/* Hidden Image File Input */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageSelect}
      />

      {isRecording ? (
        /* Voice Recording Active UI */
        <div className="recording-row">
          <div className="recording-indicator">
            <span className="red-pulse-dot"></span>
            <span className="rec-text">Recording Voice Note...</span>
            <span className="rec-timer">{formatSecs(recordingTime)}</span>
          </div>

          <div className="rec-actions">
            <button className="rec-btn cancel" onClick={cancelRecording} title="Cancel Recording">
              <Trash2 size={18} />
            </button>
            <button className="rec-btn send" onClick={stopAndSendRecording} title="Send Voice Note">
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        /* Standard Input Row */
        <div className="input-row">
          <button
            className={`emoji-toggle-btn ${showEmojiPicker ? 'active' : ''}`}
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            title="Quick Emojis"
          >
            <Smile size={20} />
          </button>

          <button
            className="media-btn"
            onClick={() => fileInputRef.current && fileInputRef.current.click()}
            title="Attach Photo"
          >
            <Image size={20} />
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
            className="media-btn mic-btn"
            onClick={startRecording}
            title="Record Voice Note"
          >
            <Mic size={20} />
          </button>

          <button
            className={`send-msg-btn ${text.trim() ? 'active' : ''}`}
            onClick={handleSend}
            disabled={!text.trim()}
            title="Send Message"
          >
            <Send size={18} />
          </button>
        </div>
      )}

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

        .emoji-toggle-btn, .media-btn {
          color: var(--text-muted);
          padding: 6px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emoji-toggle-btn:hover, .emoji-toggle-btn.active, .media-btn:hover {
          color: var(--primary-rose);
        }

        .mic-btn:hover {
          color: #e63946;
          background: rgba(230, 57, 70, 0.1);
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

        /* Voice Recording UI */
        .recording-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(230, 57, 70, 0.1);
          border: 1px solid var(--primary-rose);
          border-radius: var(--radius-lg);
          padding: 10px 16px;
          animation: popIn 0.2s ease;
        }

        .recording-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .red-pulse-dot {
          width: 10px;
          height: 10px;
          background: #ef4444;
          border-radius: 50%;
          animation: recPulse 1.2s infinite;
        }

        @keyframes recPulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }

        .rec-text {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--primary-rose);
        }

        .rec-timer {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-main);
          font-mono: true;
        }

        .rec-actions {
          display: flex;
          gap: 10px;
        }

        .rec-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rec-btn.cancel {
          background: rgba(0, 0, 0, 0.08);
          color: var(--text-muted);
        }

        .rec-btn.cancel:hover {
          background: #ef4444;
          color: white;
        }

        .rec-btn.send {
          background: var(--primary-rose);
          color: white;
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.35);
        }

        .rec-btn.send:hover {
          background: var(--primary-rose-hover);
          transform: scale(1.05);
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
