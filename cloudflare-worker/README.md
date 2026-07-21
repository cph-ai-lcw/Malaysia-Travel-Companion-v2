# 中文→越南文翻譯 Worker

本Worker使用Cloudflare Workers AI的 `@cf/meta/m2m100-1.2b` 翻譯模型。Workers AI可在Cloudflare Free或Paid方案使用，實際免費額度與價格以Cloudflare最新公告為準。

## 部署

1. 建立或登入Cloudflare帳號。
2. 開啟終端機並進入本資料夾。
3. 執行 `npm install`。
4. 將 `wrangler.jsonc` 的 `ALLOWED_ORIGIN` 改為你的GitHub Pages來源，例如 `https://cph-ai-lcw.github.io`。
5. 執行 `npx wrangler login`。
6. 執行 `npm run deploy`。
7. 複製部署後的 `https://...workers.dev` 網址。
8. 在網站「領隊中心 → 公告」貼上網址並儲存。

不要把Cloudflare API Token寫入網站或GitHub檔案。Workers AI Binding會在Worker內部呼叫模型。
