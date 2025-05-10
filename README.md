# 🧭 XPath Finder Chrome Extension

This Chrome extension allows you to **click any element** on a webpage and get its **full XPath**, starting from the root (`/html[1]/body[1]/...`). It's perfect for use with **Selenium** or other automation tools.

---

## ✨ Features

- ✅ Click on any element to capture its full XPath
- ✅ Toggle on/off from the popup UI
- ✅ Prevents accidental clicks when disabled
- ✅ Clean and accurate recursive XPath logic
- 🧪 Ready for Selenium and automation scripts

---

## 📦 Files Overview

```
my-extension/
├── manifest.json         # Extension config (Chrome manifest v3)
├── content.js            # Main logic to capture XPath
├── popup.html            # UI popup with toggle switch
├── popup.js              # Script for popup toggle behavior
└── icon.png              # Icon shown in toolbar
```

---

## 🚀 Installation (For Testing)

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right).
4. Click **Load unpacked** and select the `my-extension/` folder.
5. The extension icon will appear in your toolbar.

---

## 🧠 How It Works

- When XPath capture is **enabled**, clicking any element:
  - Prevents default behavior
  - Calculates XPath using a recursive algorithm
  - Shows the XPath in an alert (can be replaced with clipboard or other logic)

---

## 🔧 Future Improvements

- [ ] Copy XPath to clipboard
- [ ] Store multiple clicks with export (CSV/JSON)
- [ ] Right-click context menu
- [ ] Generate CSS selectors as an option

---

## 🧑‍💻 License

MIT — use it freely in your projects.

---

Made with ❤️ for automation lovers.
