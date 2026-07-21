# 國能馬來西亞旅遊手帳 2026

## v6.2 Stable Cleanup

本版本以 `Malaysia-Travel-Companion-v2-main(38).zip` 為唯一基準，完成 Milestone 6-1 穩定化整理。

### 本次完成

- 保留正式網站實際使用的功能與資料。
- 移除未載入的舊版 Router、Pages、Components、重複 CSS 與 archive 文件。
- 統一網站、Manifest、資料庫與快取版本為 v6.2.0。
- 保留 v6201 的 `countdownPage` 啟動修正。
- 加入安全儲存層；瀏覽器封鎖 LocalStorage 時仍可先正常開啟。
- 加強首頁載入失敗提示與修復入口。
- 將舊 Service Worker 改為退役清理程式，避免舊 PWA 快取再次造成空白頁。
- 加入不依賴外部套件的發布前自動檢查。

### 發布前檢查

電腦有安裝 Node.js 時，可在本資料夾執行：

```bash
node tools/verify-release.mjs
```

看到 `VERIFY_OK` 才可上傳 GitHub。

### GitHub Desktop 更新

1. 解壓縮 ZIP。
2. 將本資料夾內的全部內容覆蓋 GitHub 專案根目錄。
3. GitHub Desktop Summary 輸入：`Milestone 6-1 v6.2 Stable Cleanup`。
4. Commit to main。
5. Push origin。
6. 等候 GitHub Pages 完成部署。

正式網址：

`https://cph-ai-lcw.github.io/Malaysia-Travel-Companion-v2/?v=6200-stable#/home`

### 注意

本階段暫不恢復離線 PWA 快取。先以穩定開啟為優先，待後續建立完整離線快取測試後再恢復。
