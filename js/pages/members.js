import { MEMBERS } from "../../data/index.js";
import { getLanguage } from "../core/i18n.js";
import { memberSummaryCard } from "../components/member-card.js";

export function membersPage() {
  const zh = getLanguage() === "zh-TW";

  return `
    <header class="page-header">
      <h1>${zh ? "團員查詢" : "Tìm thành viên"}</h1>
      <p>${zh
        ? `共 ${MEMBERS.length} 位團員，可使用中文、英文姓名、機位或分房代碼搜尋。`
        : `Tổng cộng ${MEMBERS.length} thành viên. Có thể tìm theo tên, ghế hoặc mã phòng.`}
      </p>
    </header>

    <section class="card search-panel">
      <label class="search-box">
        <span>⌕</span>
        <input id="memberSearchInput" type="search"
          placeholder="${zh ? "輸入姓名、機位或分房代碼" : "Nhập tên, ghế hoặc mã phòng"}"
          autocomplete="off">
      </label>
      <small id="memberResultCount">${MEMBERS.length} ${zh ? "筆資料" : "kết quả"}</small>
    </section>

    <section id="memberSearchResults" class="member-list">
      ${MEMBERS.map((member) => memberSummaryCard(member, { selectable: true, compact: true })).join("")}
    </section>
  `;
}
