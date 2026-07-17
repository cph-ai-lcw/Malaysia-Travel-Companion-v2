GitHub 更新方式
1. 將 index.html 覆蓋 Repository 根目錄的 index.html。
2. 若 Repository 中有 service-worker.js，使用本資料夾版本覆蓋。
3. 若 Repository 中有 sw.js，使用本資料夾版本覆蓋。
4. Commit 後，第一次開啟網站請做一次 Ctrl + Shift + R。
5. 新版會自動註銷舊 Service Worker 並清除舊快取；之後普通重新整理不會回到舊版。
6. 頁面頂端應顯示：MILESTONE 2-3 · CACHE FIX V3 · 2026.07.17
