# 🎬 IDKMovie 🍿

**IDKMovie** is a playful, Windows‑only desktop app that helps you decide *what to watch* when your brain says **“idk”**.

It uses a fun **slot‑machine style “Surprise Me” animation**, smart filters, and local memory to avoid repeats — all wrapped in a clean, modern Electron UI.

No accounts. No tracking. Just movies.

---

## ✨ Features

🎰 **Slot‑Machine Surprise Me**  
Spin genre, rating, and year reels that lock in one‑by‑one before revealing your movie.

🧠 **Seen / Skip Memory**  
Mark movies as *Seen* or *Skipped* — IDKMovie remembers locally so you don’t get repeats.

⚙️ **Settings Panel**
- Minimum rating filter
- Exclude Horror (even when genre = All)
- Clear Seen/Skipped history

🎨 **Smart Genre Tags**
- Color‑coded genre pills
- Auto‑collapse ON small windows
- Subtle hover glow

🔒 **Privacy‑Friendly**
- No accounts
- No analytics
- No cloud sync
- All data stays on your PC

---

## 🖥️ Platform

- ✅ Windows 10 / 11
- ❌ macOS, Linux, Android (not planned, won't develop, you can check the web version of it below)

### [🎬IDKMovie Web Version🍿](https://bytebendr.github.io/idkmovie-webapp/)

---

## 🚀 Getting Started (Users)

1. Download the installer from **Releases**
2. Run the `.exe`
3. Launch **IDKMovie**
4. Press **Surprise Me**
5. Stop scrolling. Start watching.

---

## 🛠️ Getting Started (Developers)

### Requirements
- Node.js 18+
- npm

### Install & Run
```bash
npm install
npm start
```

### Build Windows Installer
```bash
npm run dist
```

The installer will be generated in the `dist/` folder.

---

## 📦 Tech Stack

- **Electron**
- **Vanilla HTML / CSS / JS**
- **YTS API** (movie data) **(provided with free usage by the generosity of the people over at YTS, no API keys needed)**
- **LocalStorage** (Seen / Skip memory)

---

## 📁 Project Structure

```
IDKMovie/
├─ assets/
│  └─ icon.ico
├─ index.html
├─ main.js
├─ preload.js (empty, but it's still here...idk why)
├─ package.json
└─ README.md
```

---

## 🧠 Philosophy

IDKMovie exists because:
> *Choosing a movie is harder than watching one.*

This app removes friction, choice paralysis, and endless scrolling — replacing it with a single button and a little bit of fun.

---

## 📜 License

MIT License  
You’re free to use, modify, and share.

---

## ❤️ Credits

Movie data powered by **YTS API**  
Made with care, caffeine, and questionable movie nights.

---

**IDKMovie**  
*When you don’t know what to watch.*
