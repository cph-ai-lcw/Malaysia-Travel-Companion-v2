import { VERSION } from "../../data/index.js";
import { getLanguage, t } from "../core/i18n.js";
import { getTheme } from "../core/theme.js";

export function settingsPage() {
  const zh = getLanguage() === "zh-TW";

  return `
    <header class="page-header">
      <h1>${t("settings")}</h1>
      <p>${zh ? "調整這台裝置上的使用偏好" : "Điều chỉnh tùy chọn trên thiết bị này"}</p>
    </header>

    <section class="card">
      <div class="setting-row">
        <div><strong>${zh ? "顯示語言" : "Ngôn ngữ"}</strong><small>繁體中文／Tiếng Việt</small></div>
        <select id="languageSelect" class="select">
          <option value="zh-TW" ${getLanguage()==="zh-TW"?"selected":""}>繁體中文</option>
          <option value="vi" ${getLanguage()==="vi"?"selected":""}>Tiếng Việt</option>
        </select>
      </div>

      <div class="setting-row">
        <div><strong>${zh ? "顯示主題" : "Giao diện"}</strong><small>${zh ? "自動、亮色或深色" : "Tự động, sáng hoặc tối"}</small></div>
        <select id="themeSelect" class="select">
          <option value="auto" ${getTheme()==="auto"?"selected":""}>${zh ? "自動" : "Tự động"}</option>
          <option value="light" ${getTheme()==="light"?"selected":""}>${zh ? "亮色" : "Sáng"}</option>
          <option value="dark" ${getTheme()==="dark"?"selected":""}>${zh ? "深色" : "Tối"}</option>
        </select>
      </div>

      <div class="setting-row">
        <div><strong>${zh ? "清除本機設定" : "Xóa cài đặt cục bộ"}</strong><small>${zh ? "不會刪除 GitHub 上的資料" : "Không xóa dữ liệu trên GitHub"}</small></div>
        <button id="clearDataButton" class="button danger" type="button">${zh ? "清除" : "Xóa"}</button>
      </div>
    </section>

    <div class="section-title"><h2>${t("currentVersion")}</h2></div>
    <section class="card">
      <div class="setting-row"><span>Version</span><strong>${VERSION.version}</strong></div>
      <div class="setting-row"><span>Milestone</span><strong>${VERSION.milestone}</strong></div>
      <div class="setting-row"><span>Build</span><strong>${VERSION.build}</strong></div>
    </section>
  `;
}
