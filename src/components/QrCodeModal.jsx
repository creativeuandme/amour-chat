import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, Copy, Check, Smartphone } from 'lucide-react';
import { getShareableRoomUrl } from '../utils/helpers';

export default function QrCodeModal({ roomId, isCopied, onCopyLink, onClose }) {
  const roomUrl = getShareableRoomUrl(roomId);

  return (
    <div className="modal-overlay">
      <div className="modal-card text-center">
        <div className="modal-top">
          <div className="icon-title">
            <Smartphone size={20} className="rose-icon" />
            <span>Scan to Join Room</span>
          </div>
          <button className="close-btn" onClick={onClose}><X size={18} /></button>
        </div>

        <p className="qr-sub">
          Open your phone camera to scan this QR code and instantly join room <strong>{roomId}</strong>.
        </p>

        <div className="qr-container">
          <QRCodeSVG 
            value={roomUrl} 
            size={200}
            bgColor={"#ffffff"}
            fgColor={"#e63946"}
            level={"H"}
            includeMargin={true}
          />
        </div>

        <div className="url-copy-box">
          <input type="text" readOnly value={roomUrl} className="url-input" />
          <button className={`copy-btn-inside ${isCopied ? 'copied' : ''}`} onClick={onCopyLink}>
            {isCopied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      <style>{`
        .text-center {
          text-align: center;
        }

        .icon-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--primary-rose);
        }

        .qr-sub {
          font-size: 0.86rem;
          color: var(--text-muted);
          margin-top: 6px;
          margin-bottom: 16px;
        }

        .qr-container {
          background: white;
          padding: 16px;
          border-radius: var(--radius-md);
          display: inline-block;
          box-shadow: 0 4px 20px rgba(230, 57, 70, 0.15);
          margin-bottom: 16px;
          border: 1px solid var(--glass-border);
        }

        .url-copy-box {
          display: flex;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          padding: 4px;
        }

        [data-theme='dark'] .url-copy-box {
          background: rgba(20, 7, 13, 0.7);
        }

        .url-input {
          flex: 1;
          background: transparent;
          padding: 6px 10px;
          font-size: 0.8rem;
          color: var(--text-muted);
          text-overflow: ellipsis;
        }

        .copy-btn-inside {
          background: var(--primary-rose);
          color: white;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .copy-btn-inside.copied {
          background: #10b981;
        }
      `}</style>
    </div>
  );
}
