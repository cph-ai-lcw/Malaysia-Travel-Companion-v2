# Milestone 4 Pro · Sprint 4-6 Firebase

## 完成內容

- 新增 `#/firebase-admin` Firebase 管理頁。
- 支援 Firebase Web App 設定欄位。
- 支援 Anonymous Authentication 連線測試。
- 支援 Cloud Firestore 手動上傳與下載。
- 支援 Firestore `onSnapshot` 即時監聽。
- 本機資料變更可自動延遲上傳，避免連續大量寫入。
- 網路中斷時保留 localStorage，恢復連線後重新啟動同步。
- 雲端同步團員、房間、公告、點名場次、點名紀錄與 QR 報到紀錄。
- 領隊 PIN、PIN 錯誤次數及登入 session 不上傳雲端。

## Firestore 文件位置

`trips/amt-malaysia-2026/state/current`

## Firebase Console 必要設定

1. 建立 Firebase Web App 並取得 SDK config。
2. 建立 Cloud Firestore。
3. Authentication 啟用 Anonymous provider。
4. Firestore Rules 至少允許已驗證使用者讀寫：

```text
match /trips/{tripId}/state/{document} {
  allow read, write: if request.auth != null;
}
```

> 以上規則適合專案測試及內部封閉使用。正式公開使用前，應改用管理員帳號或 Custom Claims 區分領隊寫入權限與團員讀取權限。

## 首次使用順序

1. 以領隊 PIN 登入。
2. 開啟「4-6 Firebase」。
3. 填入 Firebase Web App 設定。
4. 儲存並測試連線。
5. 第一次請選擇「本機覆蓋雲端」。
6. 其他裝置設定相同 Firebase 專案後，可選擇「雲端覆蓋本機」。
