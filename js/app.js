import { APP_CONFIG, VERSION } from "../data/index.js";
import { registerRoute, startRouter, navigate, renderRoute } from "./core/router.js";
import { getLanguage, setLanguage, toggleLanguage, translateStaticText } from "./core/i18n.js";
import { applyTheme, setTheme, cycleTheme } from "./core/theme.js";
import { storage } from "./core/storage.js";
import { setSelectedMemberId, searchMembers } from "./core/member-store.js";
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
import { membersPage } from "./pages/members.js";
import { roomsPage } from "./pages/rooms.js";
import { seatsPage } from "./pages/seats.js";
import { budgetPage } from "./pages/budget.js";
import { memberSummaryCard } from "./components/member-card.js";

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
  registerRoute("members", membersPage);
  registerRoute("rooms", roomsPage);
  registerRoute("seats", seatsPage);
  registerRoute("budget", budgetPage);
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
    const selectMemberButton = event.target.closest("[data-select-member]");
    if (selectMemberButton) {
      setSelectedMemberId(selectMemberButton.dataset.selectMember);
      showToast(getLanguage() === "zh-TW" ? "已更新我的資料" : "Đã cập nhật thông tin của tôi");
      navigate("profile");
      return;
    }

    const roomTab = event.target.closest("[data-room-tab]");
    if (roomTab) {
      document.querySelectorAll("[data-room-tab]").forEach((b) => b.classList.toggle("active", b === roomTab));
      const l = document.getElementById("roomListLexis"), s = document.getElementById("roomListSunway");
      const mode = roomTab.dataset.roomTab;
      if (l) l.hidden = mode === "sunway";
      if (s) s.hidden = mode === "lexis";
      return;
    }
    const seatTab = event.target.closest("[data-seat-tab]");
    if (seatTab) {
      document.querySelectorAll("[data-seat-tab]").forEach((b) => b.classList.toggle("active", b === seatTab));
      const o = document.getElementById("seatOutboundList"), r = document.getElementById("seatReturnList");
      if (o) o.hidden = seatTab.dataset.seatTab !== "outbound";
      if (r) r.hidden = seatTab.dataset.seatTab !== "return";
      return;
    }
    const navigateButton = event.target.closest("[data-navigate]");
    if (navigateButton) {
      navigate(navigateButton.dataset.navigate);
      return;
    }

    if (event.target.id === "changeMemberButton") {
      storage.remove("selectedMember");
      renderRoute();
      return;
    }

    const sheetButton = event.target.closest("[data-go]");
    if (sheetButton) {
      closeSheet();
      navigate(sheetButton.dataset.go);
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.id === "budgetRateInput") {
      const rate = Math.max(1, Math.min(20, Number(event.target.value) || 7.5));
      storage.set("budgetExchangeRate", rate);
      const totalMin = 90, totalMax = 480;
      const node = document.getElementById("budgetTwdTotal");
      if (node) node.textContent = `NT$${Math.round(totalMin * rate).toLocaleString()}–${Math.round(totalMax * rate).toLocaleString()}`;
    }
    if (event.target.id === "languageSelect") setLanguage(event.target.value);
    if (event.target.id === "themeSelect") setTheme(event.target.value);
    if (event.target.id === "memberSelect" && event.target.value) {
      setSelectedMemberId(event.target.value);
      renderRoute();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id !== "memberSearchInput") return;

    const results = searchMembers(event.target.value);
    const resultNode = document.getElementById("memberSearchResults");
    const countNode = document.getElementById("memberResultCount");

    if (resultNode) {
      resultNode.innerHTML = results.map((member) => `
        <article class="m2-member-row"><div class="member-avatar">${member.nameZh.slice(0,1)}</div>
        <div><strong>${member.nameZh}</strong><small>${member.nameEn}</small></div>
        <button class="button primary" data-select-member="${member.id}">${getLanguage()==="zh-TW"?"查看":"Xem"}</button></article>`).join("");
    }

    if (countNode) {
      countNode.textContent = `${results.length} ${getLanguage() === "zh-TW" ? "筆資料" : "kết quả"}`;
    }
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
