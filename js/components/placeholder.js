import { t, getLanguage } from "../core/i18n.js";

export function placeholder(icon, titleKey, zhText, viText) {
  const zh = getLanguage() === "zh-TW";
  return `
    <header class="page-header">
      <h1>${t(titleKey)}</h1>
      <p>${zh ? zhText : viText}</p>
    </header>
    <section class="placeholder">
      <div class="big">${icon}</div>
      <h2>${t("noData")}</h2>
      <p>${t("comingSoon")}</p>
    </section>
  `;
}
