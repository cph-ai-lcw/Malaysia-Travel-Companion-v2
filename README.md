# 國能馬來西亞旅遊手帳 2026

## v6.3 Milestone 6-2｜團員版介面精簡與導覽整合

本版本以 `Malaysia-Travel-Companion-v2-main(39).zip` 的 v6.2 Stable 核心為基準，並參考 `GN-Malaysia-Travel-Handbook-2026-main(13).zip` 的明亮 App 視覺完成介面整合。

### 團員版 8 大入口

1. 首頁
2. 五日行程
3. 我的旅程
4. 打包清單
5. 記帳・匯率
6. 美食・購物
7. 旅遊資訊
8. LINE 群組

房間、機位、天氣、地圖、倒數、公告與度假村活動保留，並整合為次級工具。領隊中心仍保留原管理功能。

### 視覺整合

- 明亮藍／湖綠／珊瑚配色。
- 玻璃卡片、24px 圓角與柔和陰影。
- 浮在 Hero 圖片下方的 4 個高頻 Icon Tab。
- 手機底部固定 5 鍵膠囊導覽。
- 內建繁體中文與越南文字型。
- 整合正式 LINE 群組 QR Code。

### 發布前檢查

電腦有安裝 Node.js 時，可在本資料夾執行：

```bash
node tools/verify-release.mjs
```

看到 `VERIFY_OK` 才可上傳 GitHub。

### GitHub Desktop 更新

1. 解壓縮 ZIP。
2. 將本資料夾內的全部內容覆蓋 GitHub 專案根目錄。
3. GitHub Desktop Summary 輸入：`Milestone 6-2 v6.3 Participant Navigation`。
4. Commit to main。
5. Push origin。
6. 等候 GitHub Pages 完成部署。

正式網址：

`https://cph-ai-lcw.github.io/Malaysia-Travel-Companion-v2/?v=6300#/home`

### 注意

本階段暫不恢復離線 PWA 快取。先以穩定開啟為優先，待後續建立完整離線快取測試後再恢復。
