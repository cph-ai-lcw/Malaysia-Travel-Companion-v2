import { MEMBERS, ROOMS } from "../../data/index.js";
import { getLanguage } from "../core/i18n.js";
import { getMemberById } from "../core/member-store.js";

const esc = (value = "") => String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");

export function roomsPage() {
  const zh = getLanguage() === "zh-TW";
  const renderHotel = (hotelId, title, icon) => {
    const list = ROOMS.filter((room) => room.hotelId === hotelId);
    return `
      <div class="section-title">
        <h2>${icon} ${title}</h2>
        <span>${list.length} ${zh ? "間分房" : "phòng"}</span>
      </div>
      <section class="room-grid">
        ${list.map((room) => `
          <article class="card room-roster-card">
            <div class="room-roster-head">
              <strong>${room.actualRoomNumber || room.assignmentCode}</strong>
              <span class="status-chip">${esc(zh ? room.roomTypeZh : room.roomTypeVi)}</span>
            </div>
            <div class="room-member-list">
              ${room.memberIds.map((id) => {
                const member = getMemberById(id);
                return member ? `<span>${esc(member.nameZh)}<small>${esc(member.nameEn)}</small></span>` : "";
              }).join("")}
            </div>
          </article>
        `).join("")}
      </section>
    `;
  };

  return `
    <header class="page-header">
      <h1>${zh ? "房間分配" : "Phân phòng"}</h1>
      <p>${zh
        ? "目前顯示分房識別碼；飯店正式房號於入住取得後更新。"
        : "Hiện hiển thị mã phân phòng; số phòng chính thức sẽ cập nhật khi nhận phòng."}
      </p>
    </header>
    ${renderHotel("lexis", zh ? "大紅花渡假村" : "Lexis Hibiscus", "🌺")}
    ${renderHotel("sunway", zh ? "雙威偉樂酒店" : "Sunway Velocity", "🏨")}
  `;
}
