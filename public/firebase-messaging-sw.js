// Firebase Cloud Messaging Service Worker for AmourChat

importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBc12trS-bPUSlnTXVnLo0pwrxnrAaYaEE",
  authDomain: "chat-e751a.firebaseapp.com",
  databaseURL: "https://chat-e751a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-e751a",
  storageBucket: "chat-e751a.firebasestorage.app",
  messagingSenderId: "648075806315",
  appId: "1:648075806315:web:7c8c3033d349871823d32e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[SW Background Message Received]', payload);

  const title = payload.notification?.title || '💖 AmourChat Message';
  const options = {
    body: payload.notification?.body || '💖 You have a new private message',
    icon: '/favicon.svg',
    badge: '/favicon.svg',
    data: {
      url: payload.data?.url || '/'
    }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          if ('navigate' in client && targetUrl) {
            client.navigate(targetUrl);
          }
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
