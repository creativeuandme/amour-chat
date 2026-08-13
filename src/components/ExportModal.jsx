import React from 'react';
import { Download, FileText, Code, X } from 'lucide-react';
import { exportChatAsTxt, exportChatAsJson } from '../utils/helpers';

export default function ExportModal({ messages, roomId, onClose }) {
  const handleExportTxt = () => {
    exportChatAsTxt(messages, roomId);
    onClose();
  };

  const handleExportJson = () => {
    exportChatAsJson(messages, roomId);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-top">
          <h3>Save Chat History</h3>
          <button className="close-btn" onClick={onClose}><X size={18} /></button>
        </div>

        <p className="modal-subtitle">
          Export your complete conversation with timestamps and messages.
        </p>

        <div className="stats-box">
          <div className="stat-item">
            <span className="stat-num">{messages.length}</span>
            <span className="stat-lbl">Messages</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">{roomId}</span>
            <span className="stat-lbl">Room Code</span>
          </div>
        </div>

        <div className="export-options">
          <button className="export-btn" onClick={handleExportTxt}>
            <div className="export-icon-box txt">
              <FileText size={22} />
            </div>
            <div className="export-text">
              <span className="export-title">Text Transcript (.txt)</span>
              <span className="export-desc">Human readable chat log formatted for easy reading.</span>
            </div>
          </button>

          <button className="export-btn" onClick={handleExportJson}>
            <div className="export-icon-box json">
              <Code size={22} />
            </div>
            <div className="export-text">
              <span className="export-title">Structured Data (.json)</span>
              <span className="export-desc">Raw message dataset containing reactions and IDs.</span>
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .modal-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .modal-top h3 {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          color: var(--primary-rose);
        }

        .close-btn {
          color: var(--text-muted);
          padding: 4px;
          border-radius: 50%;
        }

        .close-btn:hover {
          color: var(--text-main);
          background: rgba(0,0,0,0.05);
        }

        .modal-subtitle {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .stats-box {
          display: flex;
          gap: 12px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: var(--radius-md);
          padding: 12px 16px;
          margin-bottom: 18px;
        }

        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .stat-num {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--primary-rose);
        }

        .stat-lbl {
          font-size: 0.76rem;
          color: var(--text-muted);
        }

        .export-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .export-btn {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          padding: 14px;
          text-align: left;
        }

        [data-theme='dark'] .export-btn {
          background: rgba(20, 7, 13, 0.6);
        }

        .export-btn:hover {
          border-color: var(--primary-rose);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(230, 57, 70, 0.15);
        }

        .export-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .export-icon-box.txt {
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
        }

        .export-icon-box.json {
          background: rgba(59, 130, 246, 0.15);
          color: #3b82f6;
        }

        .export-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .export-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-main);
        }

        .export-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
