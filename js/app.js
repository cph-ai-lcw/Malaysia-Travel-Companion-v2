import { APP_CONFIG, VERSION } from "../data/index.js";
import {
  registerRoute,
  startRouter,
  navigate,
  renderRoute
} from "./router.js";

import {
  translateStaticText,
  toggleLanguage,
  getLanguage,
  setLanguage
} from "./i18n.js";

import {
  applyTheme,
  cycleTheme,
  setTheme
} from "./theme.js";

import {
  homeView,
  placeholderView,
  moreView,
  settingsView
} from "./views.js";

function registerRoutes() {
  registerRoute("home", homeView);

  registerRoute("itinerary", () =>
    placeholderView(
      "🗓️",
      "itinerary",
      "五日完整行程將於 Milestone 2 匯入",
      "Lịch trình 5 ngày sẽ được thêm ở Milestone 2"
    )
  );

  registerRoute("guide", () =>
    placeholderView(
      "✦",
      "guide",
      "美食、購物與伴手禮攻略將於後續加入",
      "Ẩm thực, mua sắm và quà lưu niệm sẽ được bổ sung"
    )
  );

  registerRoute("tools", () =>
    placeholderView(
      "⌘",
      "tools",
      "打包、花費與相簿工具將於後續加入",
      "Hành lý, chi tiêu và album sẽ được bổ sung"
    )
  );

  registerRoute("profile", () =>
    placeholderView(
      "◎",
      "profile",
      "房間、機位與個人 QR 卡將於 Milestone 2 匯入",
      "Phòng, chỗ ngồi và mã QR sẽ được thêm ở Milestone 2"
    )
  );

  registerRoute("more", moreView);
  registerRoute("settings", settingsView);

  registerRoute("leader", () =>
    placeholderView(
      "🧭",
      "leader",
      "領隊點名、任務與查詢工具將於 Milestone 3 開放",
      "Công cụ trưởng đoàn sẽ mở ở Milestone 3"
    )
  );

  registerRoute("emergency", () =>
    placeholderView(
      "☎",
      "emergency",
      "緊急電話與求助內容將於 Milestone 3 完成",
      "Thông tin khẩn cấp sẽ hoàn tất ở Milestone 3"
    )
  );
}

function openSheet() {
  const sheet = document.getElementById("sideSheet");
  const backdrop = document.getElementById("sheetBackdrop");

  backdrop.hidden = false;
  requestAnimationFrame(() => sheet.classList.add("open"));
  sheet.setAttribute("aria-hidden", "false");
}

function closeSheet() {
  const sheet = document.getElementById("sideSheet");
  const backdrop = document.getElementById("sheetBackdrop");

  sheet.classList.remove("open");
  sheet.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    backdrop.hidden = true;
  }, 250);
}

function updateChrome() {
  const language = getLanguage();

  document.getElementById("brandTitle").textContent =
    language === "zh-TW"
      ? APP_CONFIG.appNameZh
      : APP_CONFIG.appName;

  document.getElementById("brandSubtitle").textContent =
    language === "zh-TW"
      ? APP_CONFIG.subtitle
      : APP_CONFIG.subtitleVi;

  document.getElementById("languageButton").textContent =
    language === "zh-TW" ? "中" : "VI";

  document.getElementById("sheetVersion").textContent =
    `${VERSION.version} · ${VERSION.milestone}`;

  translateStaticText();
}

function setupEvents() {
  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-navigate]");
    if (nav) {
      navigate(nav.dataset.navigate);
      return;
    }

    const go = event.target.closest("[data-go]");
    if (go) {
      closeSheet();
      navigate(go.dataset.go);
    }
  });

  document.getElementById("languageButton")
    .addEventListener("click", toggleLanguage);

  document.getElementById("themeButton")
    .addEventListener("click", cycleTheme);

  document.getElementById("menuButton")
    .addEventListener("click", openSheet);

  document.getElementById("sheetBackdrop")
    .addEventListener("click", closeSheet);

  document.addEventListener("change", (event) => {
    if (event.target.id === "languageSelect") {
      setLanguage(event.target.value);
    }

    if (event.target.id === "themeSelect") {
      setTheme(event.target.value);
    }
  });

  window.addEventListener("app:languagechange", () => {
    updateChrome();
    renderRoute();
  });
}

applyTheme();
registerRoutes();
setupEvents();
updateChrome();
startRouter();
