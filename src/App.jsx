import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

import Header from './components/Header';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import NicknameModal from './components/NicknameModal';
import ExportModal from './components/ExportModal';
import ClearConfirmModal from './components/ClearConfirmModal';
import QrCodeModal from './components/QrCodeModal';
import SettingsModal from './components/SettingsModal';

import {
  generateRoomId,
  getRoomIdFromUrl,
  updateRoomUrl,
  getShareableRoomUrl,
  playNotificationSound
} from './utils/helpers';

import {
  sendMessage,
  sendImageMessage,
  sendAudioMessage,
  listenToMessages,
  clearRoomMessages,
  updateTypingState,
  listenToTyping,
  addReactionToMessage,
  listenToConnectionState
} from './config/firebase';

export default function App() {
  // 1. Room ID Initialization
  const [roomId, setRoomId] = useState(() => {
    let id = getRoomIdFromUrl();
    if (!id) {
      id = generateRoomId();
      updateRoomUrl(id);
    }
    return id;
  });

  // 2. Current User State
  const [userId] = useState(() => {
    let savedId = localStorage.getItem('amour_user_id');
    if (!savedId) {
      savedId = 'user_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('amour_user_id', savedId);
    }
    return savedId;
  });

  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem(`amour_nickname_${roomId}`) || '';
  });

  const [showNicknameModal, setShowNicknameModal] = useState(!nickname);

  // 3. Application Data States
  const [messages, setMessages] = useState([]);
  const [partnerTyping, setPartnerTyping] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // 4. Preferences & Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('amour_theme') || 'light';
  });

  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('amour_sound') !== 'false';
  });

  // 5. Active Modal State
  const [activeModal, setActiveModal] = useState(null);

  const prevMsgCountRef = useRef(0);

  // Sync theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('amour_theme', theme);
  }, [theme]);

  // Update room URL & nickname
  useEffect(() => {
    updateRoomUrl(roomId);
    const savedNick = localStorage.getItem(`amour_nickname_${roomId}`);
    if (savedNick) {
      setNickname(savedNick);
      setShowNicknameModal(false);
    } else {
      setShowNicknameModal(true);
    }
  }, [roomId]);

  // Real-Time Subscriptions
  useEffect(() => {
    if (!roomId) return;

    const unsubConn = listenToConnectionState((connected) => {
      setIsConnected(connected);
    });

    const unsubMsgs = listenToMessages(roomId, (msgList) => {
      setMessages(msgList);

      if (
        msgList.length > prevMsgCountRef.current &&
        prevMsgCountRef.current > 0
      ) {
        const lastMsg = msgList[msgList.length - 1];
        if (lastMsg && lastMsg.senderId !== userId && soundEnabled) {
          playNotificationSound();
        }
      }
      prevMsgCountRef.current = msgList.length;
    });

    const unsubTyping = listenToTyping(roomId, userId, (typingUser) => {
      setPartnerTyping(typingUser);
    });

    return () => {
      if (typeof unsubConn === 'function') unsubConn();
      if (typeof unsubMsgs === 'function') unsubMsgs();
      if (typeof unsubTyping === 'function') unsubTyping();
    };
  }, [roomId, userId, soundEnabled]);

  // Handlers
  const handleSaveNickname = (newNick) => {
    setNickname(newNick);
    localStorage.setItem(`amour_nickname_${roomId}`, newNick);
    setShowNicknameModal(false);
    showToast(`Welcome, ${newNick}!`);
  };

  const handleSendMessage = async (text) => {
    if (!nickname) {
      setShowNicknameModal(true);
      return;
    }
    await sendMessage(roomId, userId, nickname, 'rose', text);
  };

  const handleSendImage = async (imageDataUrl, caption) => {
    if (!nickname) {
      setShowNicknameModal(true);
      return;
    }
    await sendImageMessage(roomId, userId, nickname, imageDataUrl, caption);
    showToast('Photo memory sent!');
  };

  const handleSendAudio = async (audioDataUrl, durationSec) => {
    if (!nickname) {
      setShowNicknameModal(true);
      return;
    }
    await sendAudioMessage(roomId, userId, nickname, audioDataUrl, durationSec);
    showToast('Voice note sent!');
  };

  const handleTyping = (isTyping) => {
    if (!nickname) return;
    updateTypingState(roomId, userId, nickname, isTyping);
  };

  const handleAddReaction = (messageId, emoji) => {
    addReactionToMessage(roomId, messageId, emoji, userId);
  };

  const handleConfirmClearChat = async () => {
    await clearRoomMessages(roomId);
    setActiveModal(null);
    showToast('Chat history cleared for both users.');
  };

  const handleCopyLink = () => {
    const fullUrl = getShareableRoomUrl(roomId);
    navigator.clipboard.writeText(fullUrl);
    setIsCopied(true);
    showToast('Private room URL copied to clipboard!');

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.2 },
      colors: ['#e63946', '#ff758f', '#ffb3c1']
    });

    setTimeout(() => setIsCopied(false), 2500);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleToggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('amour_sound', next ? 'true' : 'false');
      return next;
    });
  };

  return (
    <div className="chat-app-container">
      {/* Background Floating Hearts */}
      <div className="bg-sparkles">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="heart-particle"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 2.2}s`,
              fontSize: `${1 + (i % 3) * 0.5}rem`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="toast-banner">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <Header
        roomId={roomId}
        nickname={nickname || 'Guest'}
        isConnected={isConnected}
        isCopied={isCopied}
        onCopyLink={handleCopyLink}
        onOpenQr={() => setActiveModal('qr')}
        onOpenExport={() => setActiveModal('export')}
        onOpenClear={() => setActiveModal('clear')}
        onOpenSettings={() => setActiveModal('settings')}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onChangeNickname={() => setShowNicknameModal(true)}
      />

      {/* Main Chat Feed */}
      <MessageList
        messages={messages}
        currentUserId={userId}
        partnerTyping={partnerTyping}
        onAddReaction={handleAddReaction}
        onCopyLink={handleCopyLink}
      />

      {/* Bottom Message Input Bar */}
      <MessageInput
        onSendMessage={handleSendMessage}
        onSendImage={handleSendImage}
        onSendAudio={handleSendAudio}
        onTyping={handleTyping}
      />

      {/* Modals */}
      {showNicknameModal && (
        <NicknameModal
          initialNickname={nickname}
          onSave={handleSaveNickname}
        />
      )}

      {activeModal === 'export' && (
        <ExportModal
          messages={messages}
          roomId={roomId}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'clear' && (
        <ClearConfirmModal
          onConfirm={handleConfirmClearChat}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'qr' && (
        <QrCodeModal
          roomId={roomId}
          isCopied={isCopied}
          onCopyLink={handleCopyLink}
          onClose={() => setActiveModal(null)}
        />
      )}

      {activeModal === 'settings' && (
        <SettingsModal
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
