# 💖 AmourChat - Private Real-Time Couple Chat

A production-ready real-time private chat application for couples. Share a single unique URL to join the same chat room instantly across any device (iPhone, Android, Tablet, Laptop, Desktop).

## ✨ Key Features

- **Single Shared URL**: Generates a unique room code (e.g. `amour-sweet-8921`) in the URL (`#room=...`). Opening the URL on any device connects both users to the exact same room.
- **Real-Time Synchronized Messaging**: Powered by Firebase Realtime Database for sub-second text delivery, typing indicators, and real-time emoji reactions.
- **Permanent Cloud Storage**: Messages remain stored securely in the cloud across browser restarts and device reloads.
- **One-Click Share & QR Code**: Copy link button with toast feedback and built-in QR Code generator for quick phone camera scanning.
- **Save Chat History**: Download complete conversation transcripts in `.txt` format or `.json` dataset format.
- **Clear Chat**: Secure two-step confirmation dialog to clear conversation for both users.
- **Romantic & Responsive UI**: Glassmorphic aesthetic, floating background hearts, dark/light mode toggle, and sound notifications.

---

## 🚀 How to Run Locally

1. Open PowerShell or Terminal in `C:\Users\sai47\.gemini\antigravity\scratch\duo-chat-app`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser. Copy the URL with `#room=...` and open it in a second tab or incognito window to test real-time two-way chatting!

---

## 🌐 Free One-Click Deployment Online

### Deploy on Vercel (Recommended)
1. Push this folder to your GitHub repository.
2. Go to [Vercel.com](https://vercel.com) and click **Add New Project**.
3. Select your repository. Vercel automatically detects Vite.
4. Click **Deploy**. You will get a live shareable URL (e.g., `https://amour-chat.vercel.app`)!

### Deploy on Netlify
1. Drag and drop the `dist/` folder (after running `npm run build`) into Netlify Drop, or connect your GitHub repository.

---

## 🔒 Security Rules (Firebase Console)
Copy the contents of `database.rules.json` into your Firebase Realtime Database Security Rules tab to enforce room isolation and validation.
