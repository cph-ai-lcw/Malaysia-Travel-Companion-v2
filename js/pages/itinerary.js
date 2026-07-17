import { ITINERARY } from "../../data/index.js";
import { getLanguage, t } from "../core/i18n.js";

export function itineraryPage() {
  const zh = getLanguage() === "zh-TW";
  return `
    <header class="page-header">
      <h1>${t("itinerary")}</h1>
      <p>${zh ? "五日行程骨架已建立，詳細時間將於 Milestone 2 匯入。" : "Khung lịch trình 5 ngày đã được tạo; thời gian chi tiết sẽ được thêm ở Milestone 2."}</p>
    </header>
    <section class="card">
      ${ITINERARY.map((day) => `
        <div class="menu-row">
          <span>
            <strong>DAY ${day.day} · ${day.date}</strong>
            <small>${zh ? day.titleZh : day.titleVi}</small>
          </span>
          <span>›</span>
        </div>
      `).join("")}
    </section>
  `;
}
