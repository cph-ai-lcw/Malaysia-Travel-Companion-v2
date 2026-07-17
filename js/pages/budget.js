import { DAILY_BUDGET, BUDGET_SETTINGS } from "../../data/index.js";
import { getLanguage } from "../core/i18n.js";
import { storage } from "../core/storage.js";

const tx = (zh, vi) => getLanguage() === "zh-TW" ? zh : vi;
const money = value => `RM ${Number(value).toLocaleString()}`;

function itemRow(item, optional = false) {
  const open = item.openEnded;
  const price = open
    ? tx("依個人購物預算", "Theo ngân sách mua sắm")
    : item.min === item.max ? money(item.min) : `${money(item.min)}–${item.max}`;
  return `<div class="budget-item">
    <span class="budget-item-icon">${item.icon}</span>
    <div><strong>${tx(item.nameZh,item.nameVi)}</strong>${item.noteZh ? `<small>${tx(item.noteZh,item.noteVi)}</small>` : ""}</div>
    <span class="budget-price ${optional ? "optional" : ""}">${price}</span>
  </div>`;
}

function dayCard(day) {
  return `<article class="budget-day-card" id="budget-day-${day.day}">
    <div class="budget-day-head">
      <div><span>DAY ${day.day} · ${day.date}</span><h2>${tx(day.titleZh,day.titleVi)}</h2></div>
      <div class="budget-range"><small>${tx("建議現金","Tiền mặt đề xuất")}</small><strong>${money(day.suggestedMin)}–${day.suggestedMax}</strong></div>
    </div>
    <details class="budget-included" open>
      <summary>🎁 ${tx("團費已包含","Đã bao gồm trong giá tour")}</summary>
      <div class="budget-chip-list">${(getLanguage()==="zh-TW"?day.includedZh:day.includedVi).map(x=>`<span>✓ ${x}</span>`).join("")}</div>
    </details>
    <section class="budget-block"><h3>💵 ${tx("基本可能支出","Chi phí cơ bản có thể phát sinh")}</h3>${day.required.map(x=>itemRow(x)).join("")}</section>
    ${day.optional.length ? `<details class="budget-optional"><summary>✨ ${tx("自費活動／彈性支出","Hoạt động tự chọn／chi phí linh hoạt")}</summary><div>${day.optional.map(x=>itemRow(x,true)).join("")}</div></details>` : ""}
  </article>`;
}

export function budgetPage() {
  const rate = Number(storage.get("budgetExchangeRate", BUDGET_SETTINGS.defaultExchangeRate));
  const totalMin = DAILY_BUDGET.reduce((s,d)=>s+d.suggestedMin,0);
  const totalMax = DAILY_BUDGET.reduce((s,d)=>s+d.suggestedMax,0);
  return `<div class="budget-shell">
    <header class="budget-hero">
      <span class="it-kicker">MILESTONE 2-4</span>
      <h1>${tx("每日費用資訊卡","Thẻ chi phí mỗi ngày")}</h1>
      <p>${tx("快速分辨團費已含、基本支出與自費活動，購物費用另計。","Phân biệt nhanh chi phí đã bao gồm, chi phí cơ bản và hoạt động tự chọn; mua sắm tính riêng.")}</p>
      <div class="budget-summary">
        <div><small>${tx("五日建議現金","Tiền mặt đề xuất 5 ngày")}</small><strong>${money(totalMin)}–${totalMax}</strong></div>
        <div><small>${tx("約合新台幣","Khoảng TWD")}</small><strong id="budgetTwdTotal">NT$${Math.round(totalMin*rate).toLocaleString()}–${Math.round(totalMax*rate).toLocaleString()}</strong></div>
      </div>
    </header>

    <section class="budget-rate-card">
      <div><strong>💱 ${tx("換算匯率","Tỷ giá quy đổi")}</strong><small>${tx("可自行修改，僅供預算估算","Có thể chỉnh sửa, chỉ để dự toán")}</small></div>
      <label>1 RM ≈ NT$ <input id="budgetRateInput" type="number" min="1" max="20" step="0.1" value="${rate}"></label>
    </section>

    <nav class="budget-day-nav">${DAILY_BUDGET.map(d=>`<a href="#budget-day-${d.day}"><strong>D${d.day}</strong><small>${d.date}</small></a>`).join("")}</nav>
    ${DAILY_BUDGET.map(dayCard).join("")}

    <section class="budget-notice">
      <strong>⚠️ ${tx("估算提醒","Lưu ý dự toán")}</strong>
      <p>${tx(BUDGET_SETTINGS.noteZh,BUDGET_SETTINGS.noteVi)}</p>
      <div class="budget-tips">
        <span>💳 ${tx("大型商場可刷卡","Trung tâm thương mại có thể dùng thẻ")}</span>
        <span>💵 ${tx("夜市與小店建議備現金","Nên chuẩn bị tiền mặt cho chợ đêm")}</span>
        <span>🛍️ ${tx("購物預算自行另加","Tự cộng thêm ngân sách mua sắm")}</span>
      </div>
    </section>
  </div>`;
}
