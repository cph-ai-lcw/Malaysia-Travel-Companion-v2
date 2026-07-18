# Milestone 5-1：專案結構整理與舊檔清理

完成日期：2026-07-18

## 完成內容

- 將正式 JavaScript 入口由 `js/release-v25.js` 統一為 `js/app.js`。
- 將正式 CSS 入口由 `css/release-v25.css` 統一為 `css/app.css`。
- 移除未被正式入口引用的舊版 `js/core`、`js/pages`、`js/components` 與重複頂層模組。
- 移除重複的舊版 `sw.js`，僅保留 `service-worker.js`。
- 移除未被正式執行圖引用的舊資料與設定模組。
- 將 Milestone 2～4 歷史文件移至 `docs/archive/`。
- 更新版本為 `5.1.0`，快取版本為 `mtc-release-v510-20260718`。
- 保留 Milestone 4 已完成的 Dashboard、公告、點名、QR、領隊模式與 Firebase 功能。

## 正式執行入口

- `index.html`
- `css/app.css`
- `js/app.js`
- `js/milestone4-pro-store.js`
- `js/firebase-sync.js`
- `js/qrcode-browser.js`
- `service-worker.js`
