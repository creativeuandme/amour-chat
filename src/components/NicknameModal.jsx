import React, { useState } from 'react';
import { Heart, Sparkles, UserCheck } from 'lucide-react';

export default function NicknameModal({ initialNickname, onSave }) {
  const [name, setName] = useState(initialNickname || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave(name.trim());
  };

  const handleQuickSelect = (preset) => {
    setName(preset);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <div className="heart-circle">
            <Heart size={28} fill="#E63946" color="#E63946" />
          </div>
          <h2>Welcome to AmourChat</h2>
          <p>Please enter your name or nickname so your partner knows who is messaging.</p>
        </div>

        <form onSubmit={handleSubmit} className="nickname-form">
          <div className="form-group">
            <label>Your Nickname</label>
            <input
              type="text"
              className="modal-input"
              placeholder="e.g. Romeo, Juliet, Sweetheart..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              maxLength={24}
            />
          </div>

          <div className="presets-row">
            <span className="presets-label">Ideas:</span>
            {['Sweetheart', 'My Love', 'Honey', 'Babe', 'Romeo', 'Juliet'].map((preset) => (
              <button
                key={preset}
                type="button"
                className="preset-chip"
                onClick={() => handleQuickSelect(preset)}
              >
                {preset}
              </button>
            ))}
          </div>

          <button type="submit" className="modal-primary-btn" disabled={!name.trim()}>
            <UserCheck size={18} />
            <span>Enter Chat Room</span>
          </button>
        </form>
      </div>

      <style>{`
        .modal-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .heart-circle {
          width: 56px;
          height: 56px;
          background: rgba(230, 57, 70, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
        }

        .modal-header h2 {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: var(--primary-rose);
          margin-bottom: 6px;
        }

        .modal-header p {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .nickname-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .modal-input {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          font-size: 1rem;
          color: var(--text-main);
        }

        [data-theme='dark'] .modal-input {
          background: rgba(20, 7, 13, 0.7);
        }

        .modal-input:focus {
          border-color: var(--primary-rose);
          box-shadow: 0 0 0 3px rgba(230, 57, 70, 0.2);
        }

        .presets-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
        }

        .presets-label {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .preset-chip {
          background: rgba(230, 57, 70, 0.08);
          border: 1px solid rgba(230, 57, 70, 0.2);
          border-radius: var(--radius-full);
          padding: 4px 10px;
          font-size: 0.78rem;
          color: var(--text-main);
        }

        .preset-chip:hover {
          background: var(--primary-rose);
          color: white;
        }

        .modal-primary-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--primary-rose);
          color: white;
          padding: 12px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 1rem;
          box-shadow: 0 4px 16px rgba(230, 57, 70, 0.35);
          margin-top: 4px;
        }

        .modal-primary-btn:hover {
          background: var(--primary-rose-hover);
          transform: translateY(-1px);
        }

        .modal-primary-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
    </div>
  );
}
