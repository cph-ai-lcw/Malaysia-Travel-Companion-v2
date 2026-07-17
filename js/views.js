import {
  APP_CONFIG,
  VERSION,
  TRIP_CONFIG,
  ANNOUNCEMENTS,
  LEADER_CONFIG
} from "../data/index.js";

import { t, getLanguage } from "./i18n.js";
import { getTheme } from "./theme.js";

const zh = () => getLanguage() === "zh-TW";
const label = (zhText, viText) => zh() ? zhText : viText;

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

  return {
    main: "HOME",
    suffix: label("旅程已完成", "chuyến đi đã kết thúc")
  };
}

function quick(icon, route, text) {
  return `
    <button class="quick-link" data-navigate="${route}" type="button">
      <span>${icon}</span>
      <small>${text}</small>
    </button>
  `;
}

export function homeView() {
  const state = tripState();
  const announcement = ANNOUNCEMENTS[0];

  return `
    <section class="hero">
      <div class="hero-eyebrow">${APP_CONFIG.company}</div>
      <h1>${label("馬來西亞旅遊手帳", "Sổ tay du lịch Malaysia")}</h1>
      <p>
        ${TRIP_CONFIG.startDate.replaceAll("-", "/")}
        —
        ${TRIP_CONFIG.endDate.replaceAll("-", "/")}
      </p>

      <div class="hero-grid">
        <div class="hero-stat">
          <strong>${state.main}</strong>
          <small>${state.suffix}</small>
        </div>

        <div class="hero-stat">
          <strong>${TRIP_CONFIG.totalDays}</strong>
          <small>${label("天數", "ngày")}</small>
        </div>

        <div class="hero-stat">
          <strong>${TRIP_CONFIG.outboundFlight.number}</strong>
          <small>${label("去程航班", "chuyến đi")}</small>
        </div>
      </div>
    </section>

    <div class="section-title">
      <h2>${label("今日重點", "Thông tin hôm nay")}</h2>
      <span>Milestone 1-4</span>
    </div>

    <section class="grid-2">
      <article class="mini-card">
        <div class="emoji">🗓️</div>
        <strong>${t("todayItinerary")}</strong>
        <small>${t("noData")} · Milestone 2</small>
      </article>

      <article class="mini-card">
        <div class="emoji">📍</div>
        <strong>${t("nextMeeting")}</strong>
        <small>${t("noData")} · Milestone 2</small>
      </article>

      <article class="mini-card">
        <div class="emoji">🌦️</div>
        <strong>${t("weather")}</strong>
        <small>24–33°C · ${label("建議攜帶雨具", "Nên mang theo ô")}</small>
      </article>

      <article class="mini-card">
        <div class="emoji">📣</div>
        <strong>${t("announcements")}</strong>
        <small>
          ${
            announcement
              ? (zh() ? announcement.titleZh : announcement.titleVi)
              : t("noData")
          }
        </small>
      </article>
    </section>

    <div class="section-title">
      <h2>${label("快速功能", "Truy cập nhanh")}</h2>
    </div>

    <section class="quick-grid">
      ${quick("◎", "profile", label("我的資料", "Thông tin của tôi"))}
      ${quick("▤", "itinerary", t("itinerary"))}
      ${quick("✦", "guide", t("guide"))}
      ${quick("✓", "tools", label("打包清單", "Danh sách hành lý"))}
      ${quick("ⓘ", "more", label("旅行資訊", "Thông tin du lịch"))}
      ${quick("☎", "emergency", t("emergency"))}
      ${quick("RM", "tools", label("花費紀錄", "Chi tiêu"))}
      ${quick("★", "guide", label("我的收藏", "Yêu thích"))}
      ${quick("🧭", "leader", t("leader"))}
    </section>

    <div class="section-title">
      <h2>${label("領隊聯絡", "Liên hệ trưởng đoàn")}</h2>
    </div>

    <section class="card">
      <strong>${LEADER_CONFIG.name || label("待更新", "Chưa cập nhật")}</strong>
      <p style="margin:8px 0 0;color:var(--muted)">
        ${label(
          "聯絡資訊將於旅行社確認後更新",
          "Thông tin liên hệ sẽ được cập nhật sau khi xác nhận"
        )}
      </p>
    </section>
  `;
}

export function placeholderView(icon, titleKey, zhDescription, viDescription) {
  return `
    <header class="page-header">
      <h1>${t(titleKey)}</h1>
      <p>${label(zhDescription, viDescription)}</p>
    </header>

    <section class="placeholder">
      <div class="big">${icon}</div>
      <h2>${t("noData")}</h2>
      <p>${t("comingSoon")}</p>
    </section>
  `;
}

export function moreView() {
  const rows = [
    [
      "settings",
      "⚙",
      t("settings"),
      label("語言、主題與版本", "Ngôn ngữ, giao diện và phiên bản")
    ],
    [
      "leader",
      "🧭",
      t("leader"),
      label("點名、房間與任務", "Điểm danh, phòng và nhiệm vụ")
    ],
    [
      "emergency",
      "☎",
      t("emergency"),
      label("重要電話與求助", "Số điện thoại quan trọng")
    ]
  ];

  return `
    <header class="page-header">
      <h1>${t("more")}</h1>
      <p>${label(
        "更多旅行與系統功能",
        "Các chức năng du lịch và hệ thống khác"
      )}</p>
    </header>

    <section class="card">
      ${rows.map(([route, icon, title, description]) => `
        <button class="menu-row" data-navigate="${route}" type="button">
          <span>
            <strong>${icon} ${title}</strong>
            <small>${description}</small>
          </span>
          <span>›</span>
        </button>
      `).join("")}
    </section>
  `;
}

export function settingsView() {
  return `
    <header class="page-header">
      <h1>${t("settings")}</h1>
      <p>${label(
        "調整這台裝置上的使用偏好",
        "Điều chỉnh tùy chọn trên thiết bị này"
      )}</p>
    </header>

    <section class="card">
      <div class="setting-row">
        <div>
          <strong>${label("顯示語言", "Ngôn ngữ")}</strong>
          <small>${label(
            "繁體中文／越南文",
            "Tiếng Hoa phồn thể / Tiếng Việt"
          )}</small>
        </div>

        <select id="languageSelect" class="select">
          <option value="zh-TW" ${getLanguage() === "zh-TW" ? "selected" : ""}>
            繁體中文
          </option>
          <option value="vi" ${getLanguage() === "vi" ? "selected" : ""}>
            Tiếng Việt
          </option>
        </select>
      </div>

      <div class="setting-row">
        <div>
          <strong>${label("顯示主題", "Giao diện")}</strong>
          <small>${label("自動、亮色或深色", "Tự động, sáng hoặc tối")}</small>
        </div>

        <select id="themeSelect" class="select">
          <option value="auto" ${getTheme() === "auto" ? "selected" : ""}>
            ${label("自動", "Tự động")}
          </option>
          <option value="light" ${getTheme() === "light" ? "selected" : ""}>
            ${label("亮色", "Sáng")}
          </option>
          <option value="dark" ${getTheme() === "dark" ? "selected" : ""}>
            ${label("深色", "Tối")}
          </option>
        </select>
      </div>
    </section>

    <div class="section-title">
      <h2>${label("版本資訊", "Thông tin phiên bản")}</h2>
    </div>

    <section class="card">
      <div class="setting-row">
        <span>Version</span>
        <strong>${VERSION.version}</strong>
      </div>

      <div class="setting-row">
        <span>Milestone</span>
        <strong>${VERSION.milestone}</strong>
      </div>

      <div class="setting-row">
        <span>Build</span>
        <strong>${VERSION.build}</strong>
      </div>
    </section>
  `;
}
