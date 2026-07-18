# Milestone 4 Pro — Sprint 4-5 領隊模式

## 完成項目
- 首次使用建立 4～8 位數 PIN
- SHA-256 雜湊後儲存 PIN，不保存明碼
- 使用 sessionStorage 管理登入狀態
- 閒置逾時自動登出（預設 30 分鐘，可調整）
- 連續 5 次 PIN 錯誤後鎖定 5 分鐘
- 公告管理、點名管理、QR 報到路由權限保護
- 領隊模式登出
- 領隊 PIN 與逾時設定
- 備份、還原與資料重建僅在領隊登入後顯示

## 注意
目前為單一裝置的本機 PIN 保護。此功能不是雲端帳號驗證；後續 Firebase 階段應改用 Firebase Authentication。
