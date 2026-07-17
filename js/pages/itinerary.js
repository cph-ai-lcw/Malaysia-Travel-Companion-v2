import { ITINERARY } from "../../data/index.js";
import { getLanguage, t } from "../core/i18n.js";

const statusLabel = (status, zh) => {
  if (status === "included") return `<span class="it-badge included">🎁 ${zh ? "已包含" : "Đã bao gồm"}</span>`;
  if (status === "self") return `<span class="it-badge self">💳 ${zh ? "自理" : "Tự túc"}</span>`;
  return "";
};

function resortSection(guide, zh) {
  if (!guide) return "";
  const renderItems = (items) => items.map((item) => `
    <article class="resort-item">
      <div class="resort-icon">${item.icon}</div>
      <div class="resort-copy">
        <strong>${zh ? item.nameZh : item.nameVi}</strong>
        <small>${item.en ? `${item.en} · ` : ""}${item.price}</small>
        <p>${zh ? item.noteZh : item.noteVi}</p>
      </div>
      <span class="it-badge optional">${zh ? "自費" : "Tự phí"}</span>
    </article>`).join("");

  return `
    <section class="resort-guide">
      <div class="it-section-title">
        <div><span>🌺 RESORT GUIDE</span><h3>${zh ? "大紅花自費活動" : "Hoạt động tự chọn tại Lexis Hibiscus"}</h3></div>
        <span class="it-badge optional">${zh ? "現場自費" : "Tự phí tại chỗ"}</span>
      </div>
      <details open class="resort-group">
        <summary>🚤 ${zh ? "水上休閒特區" : "Hoạt động trên biển"}</summary>
        <div class="resort-list">${renderItems(guide.water)}</div>
      </details>
      <details class="resort-group">
        <summary>🚲 ${zh ? "陸上休閒" : "Hoạt động trên bờ"}</summary>
        <div class="resort-list">${renderItems(guide.land)}</div>
      </details>
      <details class="resort-group">
        <summary>🏨 ${zh ? "館內休閒與餐飲" : "Ẩm thực và thư giãn trong resort"}</summary>
        <div class="resort-list">${renderItems(guide.indoor)}</div>
      </details>
      <p class="resort-notice">⚠️ ${zh ? guide.noticeZh : guide.noticeVi}</p>
    </section>`;
}

function renderDay(day, zh) {
  const title = zh ? day.titleZh : day.titleVi;
  const summary = zh ? day.summaryZh : day.summaryVi;
  const weekday = zh ? day.weekdayZh : day.weekdayVi;
  const flight = day.flight ? `
    <div class="it-flight">
      <div><strong>${day.flight.from}</strong><small>${day.flight.depart}</small></div>
      <div class="it-flight-line"><span>✈️</span><b>${day.flight.no}</b></div>
      <div><strong>${day.flight.to}</strong><small>${day.flight.arrive}</small></div>
    </div>` : "";

  return `
    <article class="it-day" id="day-${day.day}">
      <header class="it-day-hero">
        <div class="it-day-number">DAY ${day.day}</div>
        <div class="it-date">${day.date} · ${weekday}</div>
        <h2>${title}</h2>
        <p>${summary}</p>
        ${flight}
      </header>

      <section class="it-timeline">
        ${day.events.map((event) => `
          <div class="it-event">
            <div class="it-event-time">${event.time}</div>
            <div class="it-event-marker">${event.icon}</div>
            <div class="it-event-body">
              <div class="it-event-heading"><h3>${zh ? event.titleZh : event.titleVi}</h3>${statusLabel(event.status, zh)}</div>
              <p>${zh ? event.detailZh : event.detailVi}</p>
            </div>
          </div>`).join("")}
      </section>

      ${resortSection(day.resortGuide, zh)}

      <section class="it-info-grid">
        <div class="it-card">
          <div class="it-section-title"><div><span>🍽️ MEALS</span><h3>${zh ? "今日餐食" : "Bữa ăn hôm nay"}</h3></div></div>
          ${day.meals.map((meal) => `
            <div class="it-meal-row">
              <div><strong>${zh ? meal.labelZh : meal.labelVi}</strong><small>${zh ? meal.valueZh : meal.valueVi}</small></div>
              ${statusLabel(meal.status, zh)}
            </div>`).join("")}
        </div>
        <div class="it-card hotel-card">
          <div class="it-section-title"><div><span>🏨 HOTEL</span><h3>${zh ? "今日住宿" : "Khách sạn hôm nay"}</h3></div></div>
          <p>${zh ? day.hotelZh : day.hotelVi}</p>
        </div>
      </section>
    </article>`;
}

export function itineraryPage() {
  const zh = getLanguage() === "zh-TW";
  return `
    <header class="page-header itinerary-header">
      <span class="it-kicker">MILESTONE 2-3 FINAL</span>
      <h1>${t("itinerary")}</h1>
      <p>${zh ? "2026/09/20–09/24 官方五日行程、餐食、住宿與大紅花自費活動。" : "Lịch trình chính thức 5 ngày, bữa ăn, khách sạn và hoạt động tự chọn tại Lexis Hibiscus。"}</p>
    </header>
    <nav class="it-day-nav" aria-label="Day navigation">
      ${ITINERARY.map((day) => `<a href="#day-${day.day}"><strong>D${day.day}</strong><small>${day.date.slice(5)}</small></a>`).join("")}
    </nav>
    <div class="itinerary-shell">
      ${ITINERARY.map((day) => renderDay(day, zh)).join("")}
    </div>`;
}
