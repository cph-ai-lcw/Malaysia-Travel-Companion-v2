import { t, getLanguage } from "../core/i18n.js";

export function morePage() {
  const zh = getLanguage() === "zh-TW";
  const rows = [
    ["members","👥",zh ? "團員查詢" : "Tìm thành viên",zh ? "姓名、機位或分房代碼搜尋" : "Tìm theo tên, ghế hoặc mã phòng"],
    ["rooms","🛏",zh ? "房間分配" : "Phân phòng",zh ? "大紅花與雙威分房名單" : "Danh sách phòng Lexis và Sunway"],
    ["seats","✈",zh ? "機位分配" : "Phân ghế",zh ? "去回程座位排序" : "Ghế chiều đi và chiều về"],
    ["settings","⚙",t("settings"),zh ? "語言、主題與版本" : "Ngôn ngữ, giao diện và phiên bản"],
    ["leader","🧭",t("leader"),zh ? "團員、房間與機位總覽" : "Tổng quan thành viên, phòng và ghế"],
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
