import { MEMBERS, ROOMS } from "../../data/index.js";
import { getLanguage, t } from "../core/i18n.js";

export function leaderPage() {
  const zh = getLanguage() === "zh-TW";
  const lexisCount = ROOMS.filter((room) => room.hotelId === "lexis").length;
  const sunwayCount = ROOMS.filter((room) => room.hotelId === "sunway").length;

  return `
    <header class="page-header">
      <h1>${t("leader")}</h1>
      <p>${zh ? "Milestone 2-1 團員、房間與機位總覽" : "Tổng quan thành viên, phòng và ghế Milestone 2-1"}</p>
    </header>

    <section class="grid-3 leader-stats">
      <article class="mini-card"><div class="emoji">👥</div><strong>${MEMBERS.length}</strong><small>${zh ? "團員" : "Thành viên"}</small></article>
      <article class="mini-card"><div class="emoji">🌺</div><strong>${lexisCount}</strong><small>${zh ? "大紅花分房" : "Phòng Lexis"}</small></article>
      <article class="mini-card"><div class="emoji">🏨</div><strong>${sunwayCount}</strong><small>${zh ? "雙威分房" : "Phòng Sunway"}</small></article>
    </section>

    <div class="section-title"><h2>${zh ? "快速管理" : "Quản lý nhanh"}</h2></div>
    <section class="card">
      <button class="menu-row" data-navigate="members" type="button">
        <span><strong>👥 ${zh ? "團員查詢" : "Tìm thành viên"}</strong><small>${zh ? "姓名、機位與分房代碼" : "Tên, ghế và mã phòng"}</small></span><span>›</span>
      </button>
      <button class="menu-row" data-navigate="rooms" type="button">
        <span><strong>🛏 ${zh ? "全部房間" : "Tất cả phòng"}</strong><small>${zh ? "大紅花與雙威分房名單" : "Danh sách phòng Lexis và Sunway"}</small></span><span>›</span>
      </button>
      <button class="menu-row" data-navigate="seats" type="button">
        <span><strong>✈ ${zh ? "全部機位" : "Tất cả ghế"}</strong><small>${zh ? "去回程座位排序" : "Ghế chiều đi và về"}</small></span><span>›</span>
      </button>
    </section>

    <p class="privacy-note">
      ${zh
        ? "本頁未公開身分證、生日或護照資料。點名與任務功能將於 Milestone 3 加入。"
        : "Trang này không công khai thông tin ID hoặc hộ chiếu. Điểm danh và nhiệm vụ sẽ được thêm ở Milestone 3."}
    </p>
  `;
}
