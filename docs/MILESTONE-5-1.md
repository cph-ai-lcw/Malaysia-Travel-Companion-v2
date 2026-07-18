# Milestone 5-1：專案結構整理與舊檔清理

完成日期：2026-07-18
狀態：正式完成

## 完成內容

- 正式 JavaScript 入口統一為 `js/app.js`。
- 正式 CSS 入口統一為 `css/app.css`。
- 移除未被正式入口引用的 `js/core`、`js/pages`、`js/components`。
- 移除重複頂層舊模組與 `js/release-v25.js`。
- 移除重複 CSS 與 `css/release-v25.css`。
- 移除舊版 `sw.js`，僅保留 `service-worker.js`。
- 移除舊版根目錄說明檔。
- 將 Milestone 2～4 歷史文件移至 `docs/archive/`。
- 保留 Dashboard、公告、點名、QR、領隊模式與 Firebase 功能。

## 正式執行入口

- `index.html`
- `css/app.css`
- `js/app.js`
- `js/milestone4-pro-store.js`
- `js/firebase-sync.js`
- `js/qrcode-browser.js`
- `service-worker.js`
