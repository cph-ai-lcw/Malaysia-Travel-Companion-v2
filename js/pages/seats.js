import { MEMBERS } from "../../data/index.js";
import { getLanguage } from "../core/i18n.js";

function seatParts(seat) {
  const match = String(seat).match(/^(\d+)([A-Z]+)$/i);
  return match ? [Number(match[1]), match[2].toUpperCase()] : [999, String(seat)];
}

function sortedMembers(key) {
  return [...MEMBERS].sort((a, b) => {
    const [rowA, colA] = seatParts(a[key]);
    const [rowB, colB] = seatParts(b[key]);
    return rowA - rowB || colA.localeCompare(colB);
  });
}

export function seatsPage() {
  const zh = getLanguage() === "zh-TW";
  const table = (key, title, flight) => `
    <section class="card seat-section">
      <div class="seat-title">
        <div><strong>${title}</strong><small>${flight}</small></div>
        <span class="status-chip">${MEMBERS.length} ${zh ? "人" : "người"}</span>
      </div>
      <div class="seat-grid">
        ${sortedMembers(key).map((member) => `
          <article class="seat-card">
            <strong>${member[key] || "—"}</strong>
            <span>${member.nameZh}</span>
            <small>${member.nameEn}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;

  return `
    <header class="page-header">
      <h1>${zh ? "機位分配" : "Phân ghế"}</h1>
      <p>${zh ? "依座位排數排序，方便登機前快速核對。" : "Sắp xếp theo số ghế để kiểm tra nhanh trước khi lên máy bay."}</p>
    </header>
    ${table("seatOutbound", zh ? "去程機位" : "Ghế chiều đi", "JX725 · TPE → KUL")}
    ${table("seatReturn", zh ? "回程機位" : "Ghế chiều về", "JX726 · KUL → TPE")}
  `;
}
