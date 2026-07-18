# Milestone 3-3｜即時通知中心

Release v3.3.0

## 已完成
- 新增 `#/notifications` 路由、首頁捷徑與底部導覽。
- 內建集合、交通、房務、餐食、緊急與一般通知分類。
- 未讀狀態與領隊自訂公告使用 localStorage 保存。
- 支援瀏覽器通知權限與新增公告後的裝置通知。
- 中／越雙語。

## 重要限制
目前為純前端 GitHub Pages PWA，沒有雲端資料庫、領隊帳號或 Push Server。領隊新增公告只會保存在當前裝置，無法同步到其他團員手機。要實現真正跨裝置即時推播，後續需串接 Firebase / Supabase 等後端與 Web Push。
