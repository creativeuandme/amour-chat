import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

export default function ClearConfirmModal({ onConfirm, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="warning-icon-circle">
          <AlertTriangle size={32} color="#ef4444" />
        </div>

        <h3 className="modal-title-danger">Clear Entire Conversation?</h3>
        
        <p className="modal-warning-text">
          This will permanently delete all messages in this room for <strong>both you and your girlfriend</strong>. This action cannot be undone.
        </p>

        <div className="modal-actions-row">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-delete-btn" onClick={onConfirm}>
            <Trash2 size={16} />
            <span>Yes, Clear Chat</span>
          </button>
        </div>
      </div>

      <style>{`
        .warning-icon-circle {
          width: 58px;
          height: 58px;
          background: rgba(239, 68, 68, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px auto;
        }

        .modal-title-danger {
          text-align: center;
          font-family: var(--font-heading);
          font-size: 1.35rem;
          color: #ef4444;
          margin-bottom: 8px;
        }

        .modal-warning-text {
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.45;
          margin-bottom: 20px;
        }

        .modal-actions-row {
          display: flex;
          gap: 10px;
        }

        .cancel-btn {
          flex: 1;
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid var(--glass-border);
          color: var(--text-main);
          padding: 10px;
          border-radius: var(--radius-md);
          font-weight: 600;
        }

        [data-theme='dark'] .cancel-btn {
          background: rgba(255, 255, 255, 0.08);
        }

        .confirm-delete-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #ef4444;
          color: white;
          padding: 10px;
          border-radius: var(--radius-md);
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.35);
        }

        .confirm-delete-btn:hover {
          background: #dc2626;
        }
      `}</style>
    </div>
  );
}
