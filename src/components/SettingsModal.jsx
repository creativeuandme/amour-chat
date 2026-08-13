import React, { useState } from 'react';
import { Settings, Volume2, VolumeX, Database, RotateCcw, X, Save } from 'lucide-react';
import { getFirebaseConfig, saveCustomFirebaseConfig, resetFirebaseConfig } from '../config/firebase';

export default function SettingsModal({ soundEnabled, onToggleSound, onClose }) {
  const currentConfig = getFirebaseConfig();
  const [apiKey, setApiKey] = useState(currentConfig.apiKey || '');
  const [databaseURL, setDatabaseURL] = useState(currentConfig.databaseURL || '');
  const [projectId, setProjectId] = useState(currentConfig.projectId || '');
  const [showAdvancedDb, setShowAdvancedDb] = useState(false);

  const handleSaveCustomConfig = (e) => {
    e.preventDefault();
    if (!apiKey || !databaseURL) return;
    
    saveCustomFirebaseConfig({
      apiKey,
      databaseURL,
      projectId,
      authDomain: `${projectId}.firebaseapp.com`,
      storageBucket: `${projectId}.appspot.com`
    });
  };

  const handleReset = () => {
    resetFirebaseConfig();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-top">
          <div className="icon-title">
            <Settings size={20} className="rose-icon" />
            <span>Preferences & Cloud Sync</span>
          </div>
          <button className="close-btn" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="settings-section">
          <label className="section-title">Sound Notifications</label>
          <div className="toggle-row">
            <div className="toggle-info">
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
              <span>Play chime on new message</span>
            </div>
            <button 
              className={`switch-btn ${soundEnabled ? 'on' : ''}`}
              onClick={onToggleSound}
            >
              <span className="switch-thumb"></span>
            </button>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header-row">
            <label className="section-title">Database Settings</label>
            <button 
              className="toggle-advanced-btn"
              onClick={() => setShowAdvancedDb(!showAdvancedDb)}
            >
              {showAdvancedDb ? 'Hide Details' : 'Configure Custom Firebase'}
            </button>
          </div>

          <div className="db-status-box">
            <Database size={16} className="text-rose" />
            <span>Active DB: <strong>{databaseURL ? databaseURL.replace('https://', '') : 'Default Firebase'}</strong></span>
          </div>

          {showAdvancedDb && (
            <form onSubmit={handleSaveCustomConfig} className="custom-db-form">
              <p className="db-help-text">
                By default, AmourChat uses our ready-to-use shared Realtime DB. You can optionally paste your own Firebase API Key & Database URL for total private control.
              </p>

              <div className="input-field">
                <label>Database URL</label>
                <input 
                  type="text" 
                  value={databaseURL} 
                  onChange={(e) => setDatabaseURL(e.target.value)} 
                  placeholder="https://your-app-default-rtdb.firebaseio.com"
                />
              </div>

              <div className="input-field">
                <label>API Key</label>
                <input 
                  type="text" 
                  value={apiKey} 
                  onChange={(e) => setApiKey(e.target.value)} 
                  placeholder="AIzaSy..."
                />
              </div>

              <div className="input-field">
                <label>Project ID</label>
                <input 
                  type="text" 
                  value={projectId} 
                  onChange={(e) => setProjectId(e.target.value)} 
                  placeholder="your-project-id"
                />
              </div>

              <div className="db-actions">
                <button type="button" className="reset-db-btn" onClick={handleReset}>
                  <RotateCcw size={14} />
                  <span>Reset to Default</span>
                </button>
                <button type="submit" className="save-db-btn">
                  <Save size={14} />
                  <span>Save Config</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .icon-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--primary-rose);
        }

        .settings-section {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--glass-border);
        }

        .section-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-main);
          display: block;
          margin-bottom: 8px;
        }

        .toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.5);
          padding: 10px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--glass-border);
        }

        [data-theme='dark'] .toggle-row {
          background: rgba(20, 7, 13, 0.5);
        }

        .toggle-info {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .switch-btn {
          width: 44px;
          height: 24px;
          background: var(--text-muted);
          border-radius: 12px;
          position: relative;
          transition: background 0.2s ease;
        }

        .switch-btn.on {
          background: var(--primary-rose);
        }

        .switch-thumb {
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.2s ease;
        }

        .switch-btn.on .switch-thumb {
          transform: translateX(20px);
        }

        .section-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .toggle-advanced-btn {
          font-size: 0.78rem;
          color: var(--primary-rose);
          font-weight: 600;
        }

        .db-status-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(230, 57, 70, 0.08);
          padding: 8px 12px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: var(--text-main);
        }

        .custom-db-form {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .db-help-text {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .input-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .input-field label {
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .input-field input {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-sm);
          padding: 8px 10px;
          font-size: 0.82rem;
          color: var(--text-main);
        }

        [data-theme='dark'] .input-field input {
          background: rgba(20, 7, 13, 0.8);
        }

        .db-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 6px;
        }

        .reset-db-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .save-db-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--primary-rose);
          color: white;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
}
