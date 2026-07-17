import { getLanguage } from "../core/i18n.js";
import { getRoomById, getRoommates } from "../core/member-store.js";

const esc = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

export function memberSummaryCard(member, options = {}) {
  const zh = getLanguage() === "zh-TW";
  const compact = options.compact ?? false;

  const lexis = getRoomById(member.roomAssignments?.lexis);
  const sunway = getRoomById(member.roomAssignments?.sunway);

  return `
    <article class="member-card ${compact ? "compact" : ""}">
      <div class="member-avatar">${esc(member.nameZh.slice(0, 1))}</div>
      <div class="member-main">
        <strong>${esc(member.nameZh)}</strong>
        <small>${esc(member.nameEn)}</small>
        <div class="member-tags">
          <span>✈ ${esc(member.seatOutbound || "—")} / ${esc(member.seatReturn || "—")}</span>
          <span>🌺 ${esc(lexis?.assignmentCode || "—")}</span>
          <span>🏨 ${esc(sunway?.assignmentCode || "—")}</span>
        </div>
      </div>
      ${options.selectable ? `
        <button class="button primary" data-select-member="${esc(member.id)}" type="button">
          ${zh ? "選擇" : "Chọn"}
        </button>` : ""}
    </article>
  `;
}

export function roomDetailCard(member, hotelId, icon) {
  const zh = getLanguage() === "zh-TW";
  const room = getRoomById(member.roomAssignments?.[hotelId]);
  const roommates = getRoommates(member, hotelId);

  if (!room) return "";

  const roomLabel = room.actualRoomNumber
    ? room.actualRoomNumber
    : `${zh ? "分房代碼" : "Mã phân phòng"} ${room.assignmentCode}`;

  return `
    <article class="card room-detail-card">
      <div class="room-detail-head">
        <span class="room-icon">${icon}</span>
        <div>
          <small>${zh ? room.hotelZh : room.hotelVi}</small>
          <strong>${esc(roomLabel)}</strong>
        </div>
      </div>
      <div class="room-detail-grid">
        <div>
          <small>${zh ? "房型" : "Loại phòng"}</small>
          <strong>${esc(zh ? room.roomTypeZh : room.roomTypeVi)}</strong>
        </div>
        <div>
          <small>${zh ? "同房成員" : "Người cùng phòng"}</small>
          <strong>${roommates.length
            ? roommates.map((item) => esc(item.nameZh)).join("、")
            : (zh ? "無" : "Không")}
          </strong>
        </div>
      </div>
    </article>
  `;
}
