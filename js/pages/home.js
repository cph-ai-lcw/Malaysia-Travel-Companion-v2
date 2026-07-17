import {
  APP_CONFIG, TRIP_CONFIG, ANNOUNCEMENTS, LEADER_CONFIG, WEATHER_CONFIG
} from "../../data/index.js";
import { t, getLanguage } from "../core/i18n.js";
import { quickLink } from "../components/quick-link.js";
import { getSelectedMember, getRoomById } from "../core/member-store.js";
import { flightCard } from "../components/flight-card.js";

const zh = () => getLanguage() === "zh-TW";
const label = (a, b) => zh() ? a : b;

function tripState() {
  const now = new Date();
  const start = new Date(`${TRIP_CONFIG.startDate}T00:00:00`);
  const end = new Date(`${TRIP_CONFIG.endDate}T23:59:59`);

  if (now < start) {
    return {
      main: Math.max(Math.ceil((start - now) / 86400000), 0),
      suffix: label("天", "ngày")
    };
  }

  if (now <= end) {
    const day = Math.floor((now - start) / 86400000) + 1;
    return {
      main: `DAY ${Math.min(day, TRIP_CONFIG.totalDays)}`,
      suffix: label("旅途中", "đang du lịch")
    };
  }

  return { main: "HOME", suffix: label("旅程已完成", "đã hoàn thành") };
}

export function homePage() {
  const state = tripState();
  const notice = ANNOUNCEMENTS[0];
  const selectedMember = getSelectedMember();
  const lexisRoom = selectedMember ? getRoomById(selectedMember.roomAssignments?.lexis) : null;
  const sunwayRoom = selectedMember ? getRoomById(selectedMember.roomAssignments?.sunway) : null;

  return `
    <section class="hero">
      <div class="hero-eyebrow">${APP_CONFIG.company}</div>
      <h1>${label("馬來西亞旅遊手帳", "Sổ tay du lịch Malaysia")}</h1>
      <p>${TRIP_CONFIG.startDate.replaceAll("-","/")} — ${TRIP_CONFIG.endDate.replaceAll("-","/")}</p>

      <div class="hero-grid">
        <div class="hero-stat"><strong>${state.main}</strong><small>${state.suffix}</small></div>
        <div class="hero-stat"><strong>${TRIP_CONFIG.totalDays}</strong><small>${label("天數","ngày")}</small></div>
        <div class="hero-stat"><strong>${TRIP_CONFIG.outboundFlight.number}</strong><small>${label("去程航班","chuyến đi")}</small></div>
      </div>
    </section>

    <div class="section-title"><h2>${label("我的旅程資料","Thông tin chuyến đi của tôi")}</h2><span>Milestone 2-1</span></div>
    ${selectedMember ? `
      <section class="card home-member-card" data-navigate="profile">
        <div class="home-member-name">
          <div class="member-avatar">${selectedMember.nameZh.slice(0,1)}</div>
          <div><strong>${selectedMember.nameZh}</strong><small>${selectedMember.nameEn}</small></div>
          <span>›</span>
        </div>
        <div class="home-member-grid">
          <span><small>${label("去程","Chiều đi")}</small><strong>${selectedMember.seatOutbound || "—"}</strong></span>
          <span><small>${label("回程","Chiều về")}</small><strong>${selectedMember.seatReturn || "—"}</strong></span>
          <span><small>${label("大紅花","Lexis")}</small><strong>${lexisRoom?.assignmentCode || "—"}</strong></span>
          <span><small>${label("雙威","Sunway")}</small><strong>${sunwayRoom?.assignmentCode || "—"}</strong></span>
        </div>
      </section>
    ` : `
      <button class="card select-profile-cta" data-navigate="profile" type="button">
        <span class="member-avatar">＋</span>
        <span><strong>${label("選擇我的姓名","Chọn tên của tôi")}</strong><small>${label("查看個人房間、機位與餐食資訊","Xem phòng, ghế và thông tin bữa ăn")}</small></span>
        <span>›</span>
      </button>
    `}

    <div class="section-title"><h2>${label("今日重點","Thông tin hôm nay")}</h2><span>Milestone 2-1</span></div>

    <section class="grid-2">
      <article class="mini-card">
        <div class="emoji">🗓️</div><strong>${t("todayItinerary")}</strong>
        <small>${t("noData")} · Milestone 2</small>
      </article>
      <article class="mini-card">
        <div class="emoji">📍</div><strong>${t("nextMeeting")}</strong>
        <small>${t("noData")} · Milestone 2</small>
      </article>
      <article class="mini-card">
        <div class="emoji">🌦️</div><strong>${t("weather")}</strong>
        <small>${WEATHER_CONFIG.averageTemperature} · ${zh() ? WEATHER_CONFIG.reminderZh : WEATHER_CONFIG.reminderVi}</small>
      </article>
      <article class="mini-card">
        <div class="emoji">📣</div><strong>${t("announcements")}</strong>
        <small>${notice ? (zh() ? notice.titleZh : notice.titleVi) : t("noData")}</small>
      </article>
    </section>

    <div class="section-title"><h2>${t("quickAccess")}</h2></div>
    <section class="quick-grid">
      ${quickLink("◎","profile",label("我的資料","Thông tin của tôi"))}
      ${quickLink("▤","itinerary",t("itinerary"))}
      ${quickLink("✦","guide",t("guide"))}
      ${quickLink("✓","tools",label("打包清單","Danh sách hành lý"))}
      ${quickLink("ⓘ","more",label("旅行資訊","Thông tin du lịch"))}
      ${quickLink("☎","emergency",t("emergency"))}
      ${quickLink("RM","tools",label("花費紀錄","Chi tiêu"))}
      ${quickLink("★","guide",label("我的收藏","Yêu thích"))}
      ${quickLink("🧭","leader",t("leader"))}
    </section>

    <div class="section-title"><h2>${t("flights")}</h2></div>
    ${flightCard(TRIP_CONFIG.outboundFlight, label("去程","Chiều đi"))}
    ${flightCard(TRIP_CONFIG.returnFlight, label("回程","Chiều về"))}

    <div class="section-title"><h2>${t("leaderContact")}</h2></div>
    <section class="card">
      <strong>${LEADER_CONFIG.name || label("待更新","Chưa cập nhật")}</strong>
      <p style="margin:8px 0 0;color:var(--muted)">
        ${label("聯絡資訊將於旅行社確認後更新","Thông tin liên hệ sẽ được cập nhật sau khi xác nhận")}
      </p>
    </section>
  `;
}
