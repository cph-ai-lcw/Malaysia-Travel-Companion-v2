# 中翻越自動翻譯：首次設定

此設定只需由管理者完成一次。完成後，領隊日常只輸入中文，系統會自動帶出越南文。

## 一、部署翻譯 Worker

1. 安裝 Node.js 18 以上版本。
2. 開啟終端機，進入 `cloudflare-worker` 資料夾。
3. 執行 `npm install`。
4. 執行 `npx wrangler login`，在瀏覽器登入 Cloudflare。
5. 執行 `npm run deploy`。
6. 複製畫面顯示的 `https://...workers.dev` 網址。

若正式網站不是 `https://cph-ai-lcw.github.io`，請先修改 `cloudflare-worker/wrangler.jsonc` 內的 `ALLOWED_ORIGIN`。

## 二、在領隊管理中心啟用

1. 開啟網站並登入「領隊管理」。
2. 進入「智慧公告」。
3. 將 Worker 網址貼入「Cloudflare 翻譯 Worker 網址」，按「儲存網址」。
4. 輸入中文標題與內容，按「自動翻譯越南文」。
5. 確認越南文後，發布中越雙語公告。

## 三、產生提醒圖卡

1. 選擇「明日提醒」等公告模板。
2. 填寫行李時間、樓層、Morning Call、天氣及穿著提醒。
3. 按「更新圖卡」預覽。
4. 按「下載 PNG」保存，或按「分享圖卡」傳送到支援分享功能的 App。

圖卡由瀏覽器本機產生，不需要翻譯 Worker，也不會把旅客資料上傳到外部服務。

## 注意事項

- 自動翻譯仍建議由領隊快速確認人名、飯店名、集合地點與時間。
- Worker 網址會保存在目前瀏覽器；換手機或清除網站資料後需重新貼上。
- GitHub Pages 只能放靜態網站，翻譯 Worker 必須另外部署到 Cloudflare Workers。
