import React, { useEffect, useRef, useState } from 'react';
import { formatTimestamp } from '../utils/helpers';
import { Heart, Smile, Share2, Play, Pause, Volume2, X } from 'lucide-react';

const REACTION_EMOJIS = ['❤️', '💖', '😘', '🔥', '👍', '🌹'];

export default function MessageList({
  messages,
  currentUserId,
  partnerTyping,
  onAddReaction,
  onCopyLink
}) {
  const scrollRef = useRef(null);
  const [activeReactionMsgId, setActiveReactionMsgId] = useState(null);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const audioRefs = useRef({});

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, partnerTyping]);

  const togglePlayAudio = (msgId) => {
    const audioEl = audioRefs.current[msgId];
    if (!audioEl) return;

    if (playingAudioId === msgId) {
      audioEl.pause();
      setPlayingAudioId(null);
    } else {
      // Pause any other playing audio
      if (playingAudioId && audioRefs.current[playingAudioId]) {
        audioRefs.current[playingAudioId].pause();
      }
      audioEl.play();
      setPlayingAudioId(msgId);
    }
  };

  return (
    <div className="message-list-container" ref={scrollRef}>
      {/* Fullscreen Image Preview Modal */}
      {previewImage && (
        <div className="modal-overlay" onClick={() => setPreviewImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-img-modal" onClick={() => setPreviewImage(null)}>
              <X size={20} />
            </button>
            <img src={previewImage} alt="Romantic memory" className="full-preview-img" />
          </div>
        </div>
      )}

      {messages.length === 0 ? (
        <div className="empty-chat-state">
          <div className="heart-icon-wrapper">
            <Heart size={48} className="floating-heart-big" fill="#E63946" color="#E63946" />
          </div>
          <h3>Your Private Romantic Space</h3>
          <p>This room is completely secret & real-time. Share photos, voice notes, and loving messages!</p>

          <button className="empty-share-btn" onClick={onCopyLink}>
            <Share2 size={16} />
            <span>Copy Room Link for Girlfriend</span>
          </button>
        </div>
      ) : (
        <div className="messages-feed">
          {messages.map((msg, index) => {
            const isMe = msg.senderId === currentUserId;
            const reactions = msg.reactions || {};
            const reactionCounts = Object.values(reactions).reduce((acc, emoji) => {
              acc[emoji] = (acc[emoji] || 0) + 1;
              return acc;
            }, {});

            const isAudio = msg.messageType === 'audio';
            const isImage = msg.messageType === 'image';

            return (
              <div
                key={msg.id || index}
                className={`message-bubble-wrapper ${isMe ? 'mine' : 'partner'}`}
              >
                {!isMe && <span className="sender-name-label">{msg.senderName}</span>}

                <div className="bubble-content-box">
                  {/* Image Attachment */}
                  {isImage && (
                    <div className="image-attachment-wrapper">
                      <img
                        src={msg.mediaUrl}
                        alt="Photo memory"
                        className="chat-photo-thumb"
                        onClick={() => setPreviewImage(msg.mediaUrl)}
                      />
                      {msg.text && <div className="bubble-text photo-caption">{msg.text}</div>}
                    </div>
                  )}

                  {/* Audio Voice Note */}
                  {isAudio && (
                    <div className="voice-note-player">
                      <button
                        className="play-audio-btn"
                        onClick={() => togglePlayAudio(msg.id)}
                      >
                        {playingAudioId === msg.id ? <Pause size={18} /> : <Play size={18} />}
                      </button>

                      <div className="audio-info">
                        <div className="audio-waveform-bars">
                          <span className={`bar ${playingAudioId === msg.id ? 'animating' : ''}`}></span>
                          <span className={`bar ${playingAudioId === msg.id ? 'animating' : ''}`}></span>
                          <span className={`bar ${playingAudioId === msg.id ? 'animating' : ''}`}></span>
                          <span className={`bar ${playingAudioId === msg.id ? 'animating' : ''}`}></span>
                          <span className={`bar ${playingAudioId === msg.id ? 'animating' : ''}`}></span>
                        </div>
                        <span className="voice-label">Voice Note ({msg.duration || 0}s)</span>
                      </div>

                      <audio
                        ref={(el) => (audioRefs.current[msg.id] = el)}
                        src={msg.mediaUrl}
                        onEnded={() => setPlayingAudioId(null)}
                      />
                    </div>
                  )}

                  {/* Standard Text */}
                  {!isImage && !isAudio && <div className="bubble-text">{msg.text}</div>}

                  <div className="bubble-footer">
                    <span className="timestamp">{formatTimestamp(msg.timestamp)}</span>
                  </div>

                  {/* Reaction Button Toggle */}
                  <button
                    className="reaction-picker-trigger"
                    onClick={() => setActiveReactionMsgId(activeReactionMsgId === msg.id ? null : msg.id)}
                    title="Add reaction"
                  >
                    <Smile size={14} />
                  </button>

                  {/* Popover Reaction Bar */}
                  {activeReactionMsgId === msg.id && (
                    <div className="reaction-popover">
                      {REACTION_EMOJIS.map((emoji) => (
                        <button
                          key={emoji}
                          className="reaction-emoji-btn"
                          onClick={() => {
                            onAddReaction(msg.id, emoji);
                            setActiveReactionMsgId(null);
                          }}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Displayed Reaction Pills */}
                {Object.keys(reactionCounts).length > 0 && (
                  <div className={`reactions-row ${isMe ? 'mine' : 'partner'}`}>
                    {Object.entries(reactionCounts).map(([emoji, count]) => (
                      <span key={emoji} className="reaction-pill">
                        {emoji} {count > 1 && <span className="count">{count}</span>}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Real-time Typing Indicator */}
      {partnerTyping && (
        <div className="typing-indicator-wrapper">
          <div className="typing-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <span className="typing-text">{partnerTyping} is typing...</span>
        </div>
      )}

      <style>{`
        .message-list-container {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }

        .close-img-modal {
          position: absolute;
          top: -36px;
          right: 0;
          color: white;
          background: rgba(0,0,0,0.5);
          border-radius: 50%;
          padding: 4px;
        }

        .full-preview-img {
          max-width: 100%;
          max-height: 85vh;
          border-radius: var(--radius-md);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .empty-chat-state {
          margin: auto;
          text-align: center;
          max-width: 360px;
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-lg);
          border: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        [data-theme='dark'] .empty-chat-state {
          background: rgba(36, 14, 24, 0.5);
        }

        .heart-icon-wrapper {
          width: 72px;
          height: 72px;
          background: rgba(230, 57, 70, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 6px;
        }

        .floating-heart-big {
          animation: floatSlow 3s ease-in-out infinite alternate;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }

        .empty-chat-state h3 {
          font-family: var(--font-heading);
          color: var(--primary-rose);
          font-size: 1.3rem;
          font-weight: 700;
        }

        .empty-chat-state p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .empty-share-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-rose);
          color: white;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.9rem;
          box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);
          margin-top: 6px;
        }

        .messages-feed {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .message-bubble-wrapper {
          display: flex;
          flex-direction: column;
          max-width: 75%;
          position: relative;
          animation: popInMsg 0.25s ease-out;
        }

        @keyframes popInMsg {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .message-bubble-wrapper.mine {
          align-self: flex-end;
          align-items: flex-end;
        }

        .message-bubble-wrapper.partner {
          align-self: flex-start;
          align-items: flex-start;
        }

        .sender-name-label {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 4px;
          margin-left: 10px;
        }

        .bubble-content-box {
          position: relative;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          word-break: break-word;
          white-space: pre-wrap;
          box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        }

        .message-bubble-wrapper.mine .bubble-content-box {
          background: var(--bubble-me-bg);
          color: var(--bubble-me-text);
          border-bottom-right-radius: 4px;
        }

        .message-bubble-wrapper.partner .bubble-content-box {
          background: var(--bubble-partner-bg);
          color: var(--bubble-partner-text);
          border: 1px solid var(--bubble-partner-border);
          border-bottom-left-radius: 4px;
        }

        .chat-photo-thumb {
          max-width: 240px;
          max-height: 240px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          object-fit: cover;
          display: block;
        }

        .photo-caption {
          margin-top: 6px;
        }

        /* Voice Note Player */
        .voice-note-player {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 0;
          min-width: 180px;
        }

        .play-audio-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: var(--primary-rose);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .message-bubble-wrapper.partner .play-audio-btn {
          background: var(--primary-rose);
          color: white;
        }

        .audio-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .audio-waveform-bars {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 16px;
        }

        .audio-waveform-bars .bar {
          width: 3px;
          height: 8px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 2px;
        }

        .message-bubble-wrapper.partner .audio-waveform-bars .bar {
          background: var(--primary-rose);
        }

        .audio-waveform-bars .bar.animating {
          animation: soundWave 0.8s infinite ease-in-out alternate;
        }

        .audio-waveform-bars .bar:nth-child(1) { animation-delay: 0.1s; }
        .audio-waveform-bars .bar:nth-child(2) { animation-delay: 0.3s; }
        .audio-waveform-bars .bar:nth-child(3) { animation-delay: 0.2s; }
        .audio-waveform-bars .bar:nth-child(4) { animation-delay: 0.4s; }

        @keyframes soundWave {
          0% { height: 4px; }
          100% { height: 16px; }
        }

        .voice-label {
          font-size: 0.76rem;
          opacity: 0.9;
        }

        .bubble-text {
          font-size: 0.96rem;
          line-height: 1.45;
        }

        .bubble-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 4px;
        }

        .timestamp {
          font-size: 0.7rem;
          opacity: 0.75;
        }

        .reaction-picker-trigger {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          transition: opacity 0.2s ease;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
        }

        .message-bubble-wrapper.mine .reaction-picker-trigger {
          left: -32px;
        }

        .message-bubble-wrapper.partner .reaction-picker-trigger {
          right: -32px;
        }

        .bubble-content-box:hover .reaction-picker-trigger,
        .message-bubble-wrapper:hover .reaction-picker-trigger {
          opacity: 1;
        }

        .reaction-popover {
          position: absolute;
          top: -38px;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          padding: 4px 8px;
          border-radius: var(--radius-full);
          display: flex;
          gap: 6px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          z-index: 20;
          animation: popIn 0.15s ease;
        }

        .message-bubble-wrapper.mine .reaction-popover { right: 0; }
        .message-bubble-wrapper.partner .reaction-popover { left: 0; }

        .reaction-emoji-btn {
          font-size: 1.1rem;
          transition: transform 0.15s ease;
        }

        .reaction-emoji-btn:hover { transform: scale(1.3); }

        .reactions-row {
          display: flex;
          gap: 4px;
          margin-top: 4px;
        }

        .reaction-pill {
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-full);
          padding: 2px 6px;
          font-size: 0.78rem;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .typing-indicator-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          padding: 6px 12px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: var(--radius-full);
          width: fit-content;
        }

        .typing-dots { display: flex; gap: 4px; }
        .typing-dots .dot {
          width: 6px;
          height: 6px;
          background: var(--primary-rose);
          border-radius: 50%;
          animation: typingBounce 1.4s infinite ease-in-out both;
        }
        .typing-dots .dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dots .dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes typingBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .typing-text {
          font-size: 0.8rem;
          color: var(--primary-rose);
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .message-bubble-wrapper { max-width: 86%; }
        }
      `}</style>
    </div>
  );
}
