# Milestone 4 Pro — Sprint 4-4 QR 報到

## 完成項目
- 新增 `#/qr-checkin` QR 報到管理頁。
- 每位團員使用唯一 QR 編號 `AMT-MY26-{memberId}`。
- 支援 BarcodeDetector 相機掃描（需 HTTPS、相機權限與相容瀏覽器）。
- 支援姓名、團員編號與 QR 編號手動報到。
- 支援團員 QR Code 預覽。
- 自動保存報到時間、來源與狀態。
- 防止同一團員重複新增有效報到紀錄。
- 可取消報到，並保留取消歷程。
- 報到資料寫入 `amt-m4-pro-data-v1.checkinRecords`。
- 預留 Firebase 多裝置同步。
