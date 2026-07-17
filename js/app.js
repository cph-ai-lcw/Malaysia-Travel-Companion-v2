import { APP_CONFIG, VERSION } from "../data/index.js";
import { registerRoute, startRouter, navigate, renderRoute } from "./core/router.js";
import { getLanguage, setLanguage, toggleLanguage, translateStaticText } from "./core/i18n.js";
import { applyTheme, setTheme, cycleTheme } from "./core/theme.js";
import { storage } from "./core/storage.js";
import { initPWA } from "./core/pwa.js";
import { openSheet, closeSheet, showToast } from "./core/ui.js";

import { homePage } from "./pages/home.js";
import { itineraryPage } from "./pages/itinerary.js";
import { guidePage } from "./pages/guide.js";
import { toolsPage } from "./pages/tools.js";
import { profilePage } from "./pages/profile.js";
import { morePage } from "./pages/more.js";
import { settingsPage } from "./pages/settings.js";
import { leaderPage } from "./pages/leader.js";
import { emergencyPage } from "./pages/emergency.js";

function registerRoutes() {
  registerRoute("home", homePage);
  registerRoute("itinerary", itineraryPage);
  registerRoute("guide", guidePage);
  registerRoute("tools", toolsPage);
  registerRoute("profile", profilePage);
  registerRoute("more", morePage);
  registerRoute("settings", settingsPage);
  registerRoute("leader", leaderPage);
  registerRoute("emergency", emergencyPage);
}

function updateChrome() {
  const language = getLanguage();

  document.getElementById("brandTitle").textContent =
    language === "zh-TW" ? APP_CONFIG.appNameZh : APP_CONFIG.appName;

  document.getElementById("brandSubtitle").textContent =
    language === "zh-TW" ? APP_CONFIG.subtitle : APP_CONFIG.subtitleVi;

  document.getElementById("languageButton").textContent =
    language === "zh-TW" ? "中" : "VI";

  document.getElementById("sheetVersion").textContent =
    `${VERSION.version} · ${VERSION.milestone}`;

  translateStaticText();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const navigateButton = event.target.closest("[data-navigate]");
    if (navigateButton) {
      navigate(navigateButton.dataset.navigate);
      return;
    }

    const sheetButton = event.target.closest("[data-go]");
    if (sheetButton) {
      closeSheet();
      navigate(sheetButton.dataset.go);
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "languageSelect") setLanguage(event.target.value);
    if (event.target.id === "themeSelect") setTheme(event.target.value);
  });

  document.addEventListener("click", (event) => {
    if (event.target.id === "clearDataButton") {
      const message = getLanguage() === "zh-TW"
        ? "確定清除這台裝置上的 App 設定？"
        : "Xóa cài đặt ứng dụng trên thiết bị này?";

      if (confirm(message)) {
        storage.clear();
        location.reload();
      }
    }
  });

  document.getElementById("languageButton").addEventListener("click", toggleLanguage);
  document.getElementById("themeButton").addEventListener("click", cycleTheme);
  document.getElementById("menuButton").addEventListener("click", openSheet);
  document.getElementById("sheetBackdrop").addEventListener("click", closeSheet);

  window.addEventListener("app:languagechange", () => {
    updateChrome();
    renderRoute();
  });

  window.addEventListener("offline", () => {
    showToast(getLanguage() === "zh-TW" ? "目前為離線模式" : "Đang ở chế độ ngoại tuyến");
  });

  window.addEventListener("online", () => {
    showToast(getLanguage() === "zh-TW" ? "網路已恢復" : "Kết nối mạng đã được khôi phục");
  });
}

applyTheme();
registerRoutes();
bindEvents();
updateChrome();
startRouter();
initPWA();
