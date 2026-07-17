import { MEMBERS } from "../../data/index.js";
import { getLanguage, t } from "../core/i18n.js";
import { getSelectedMember } from "../core/member-store.js";
import { memberSummaryCard, roomDetailCard } from "../components/member-card.js";

export function profilePage() {
  const zh = getLanguage() === "zh-TW";
  const member = getSelectedMember();

  if (!member) {
    return `
      <header class="page-header">
        <h1>${t("profile")}</h1>
        <p>${zh ? "請先選擇自己的姓名，資料只會儲存在這台裝置。" : "Hãy chọn tên của bạn. Lựa chọn chỉ được lưu trên thiết bị này."}</p>
      </header>
      <section class="card">
        <label>
          <strong>${zh ? "選擇團員" : "Chọn thành viên"}</strong>
          <select id="memberSelect" class="select full-select">
            <option value="">${zh ? "請選擇姓名" : "Vui lòng chọn tên"}</option>
            ${MEMBERS.map((item) => `<option value="${item.id}">${item.nameZh} · ${item.nameEn}</option>`).join("")}
          </select>
        </label>
      </section>
      <div class="section-title"><h2>${zh ? "也可以使用團員查詢" : "Hoặc tìm thành viên"}</h2></div>
      <button class="button primary full-button" data-navigate="members" type="button">
        ${zh ? "開啟團員查詢" : "Mở tìm kiếm thành viên"}
      </button>
    `;
  }

  const allowances = member.mealAllowances ?? [];

  return `
    <header class="page-header profile-heading">
      <div>
        <h1>${member.nameZh}</h1>
        <p>${member.nameEn}</p>
      </div>
      <button id="changeMemberButton" class="button" type="button">${zh ? "更換" : "Đổi"}</button>
    </header>

    ${memberSummaryCard(member)}

    <div class="section-title"><h2>${zh ? "我的機位" : "Ghế của tôi"}</h2></div>
    <section class="grid-2">
      <article class="mini-card">
        <div class="emoji">🛫</div>
        <strong>${zh ? "去程" : "Chiều đi"} · ${member.seatOutbound || "—"}</strong>
        <small>JX725 · TPE → KUL</small>
      </article>
      <article class="mini-card">
        <div class="emoji">🛬</div>
        <strong>${zh ? "回程" : "Chiều về"} · ${member.seatReturn || "—"}</strong>
        <small>JX726 · KUL → TPE</small>
      </article>
    </section>

    <div class="section-title"><h2>${zh ? "我的房間" : "Phòng của tôi"}</h2></div>
    ${roomDetailCard(member, "lexis", "🌺")}
    ${roomDetailCard(member, "sunway", "🏨")}

    <div class="section-title"><h2>${zh ? "餐食自理補助" : "Trợ cấp bữa ăn tự túc"}</h2></div>
    <section class="card">
      ${allowances.length ? allowances.map((item) => `
        <div class="setting-row">
          <span>
            <strong>${item.date}</strong>
            <small>${item.meal === "lunch" ? (zh ? "午餐" : "Bữa trưa") : (zh ? "晚餐" : "Bữa tối")}</small>
          </span>
          <strong>RM ${item.amount}</strong>
        </div>
      `).join("") : `<p>${zh ? "無自理餐資料" : "Không có dữ liệu bữa ăn tự túc"}</p>`}
    </section>

    <p class="privacy-note">
      🔒 ${zh
        ? "為保護團員隱私，公開網站不包含身分證、生日、護照號碼與護照效期。"
        : "Để bảo vệ quyền riêng tư, trang công khai không chứa số ID, ngày sinh hoặc thông tin hộ chiếu."}
    </p>
  `;
}
