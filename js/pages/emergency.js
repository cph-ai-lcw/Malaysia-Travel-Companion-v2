import { EMERGENCY_CONTACTS } from "../../data/index.js";
import { getLanguage, t } from "../core/i18n.js";

export function emergencyPage() {
  const zh = getLanguage() === "zh-TW";
  return `
    <header class="page-header">
      <h1>${t("emergency")}</h1>
      <p>${zh ? "目前先提供馬來西亞緊急服務電話。" : "Hiện cung cấp số khẩn cấp Malaysia."}</p>
    </header>
    <section class="card">
      ${EMERGENCY_CONTACTS.map((item) => `
        <div class="setting-row">
          <span>
            <strong>${zh ? item.nameZh : item.nameVi}</strong>
            <small>${zh ? item.noteZh : item.noteVi}</small>
          </span>
          <a class="button primary" href="tel:${item.phone}">${item.phone}</a>
        </div>
      `).join("")}
    </section>
  `;
}
