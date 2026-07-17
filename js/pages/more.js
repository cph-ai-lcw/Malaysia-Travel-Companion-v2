import { t, getLanguage } from "../core/i18n.js";

export function morePage() {
  const zh = getLanguage() === "zh-TW";
  const rows = [
    ["settings","⚙",t("settings"),zh ? "語言、主題與版本" : "Ngôn ngữ, giao diện và phiên bản"],
    ["leader","🧭",t("leader"),zh ? "點名、房間與任務" : "Điểm danh, phòng và nhiệm vụ"],
    ["emergency","☎",t("emergency"),zh ? "重要電話與求助" : "Số điện thoại quan trọng"]
  ];

  return `
    <header class="page-header">
      <h1>${t("more")}</h1>
      <p>${zh ? "更多旅行與系統功能" : "Các chức năng du lịch và hệ thống khác"}</p>
    </header>
    <section class="card">
      ${rows.map(([route,icon,title,desc]) => `
        <button class="menu-row" data-navigate="${route}" type="button">
          <span><strong>${icon} ${title}</strong><small>${desc}</small></span>
          <span>›</span>
        </button>
      `).join("")}
    </section>
  `;
}
