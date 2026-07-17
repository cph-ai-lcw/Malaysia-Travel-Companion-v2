import { APP_CONFIG, TRIP_CONFIG, ANNOUNCEMENTS, WEATHER_CONFIG } from "../../data/index.js";
import { getLanguage } from "../core/i18n.js";
import { getSelectedMember, getRoomById } from "../core/member-store.js";
const tx=(a,b)=>getLanguage()==="zh-TW"?a:b;
function countdown(){const d=Math.ceil((new Date(`${TRIP_CONFIG.startDate}T00:00:00`)-new Date())/86400000);return d>0?{v:d,l:tx("天後出發","ngày nữa")}:{v:"GO",l:tx("旅程進行中","đang đi")};}
export function homePage(){const c=countdown(),m=getSelectedMember(),l=m?getRoomById(m.roomAssignments?.lexis):null,s=m?getRoomById(m.roomAssignments?.sunway):null,n=ANNOUNCEMENTS[0];return`
<div class="m2-shell">
<section class="m2-hero"><div class="m2-hero-top"><div><div class="m2-eyebrow">${APP_CONFIG.company}</div><h1>${tx("馬來西亞旅遊手帳","Sổ tay Malaysia")}</h1><p>2026/09/20 — 09/24 · 5 DAYS</p></div><div class="m2-countdown"><strong>${c.v}</strong><small>${c.l}</small></div></div><div class="m2-flight-strip"><div><strong>TPE</strong><small>JX725 · 11:15</small></div><div>✈</div><div class="right"><strong>KUL</strong><small>${tx("去程","Chiều đi")} · 16:10</small></div></div></section>
${m?`<section class="m2-personal" data-navigate="profile"><div class="m2-personal-head"><div class="member-avatar">${m.nameZh.slice(0,1)}</div><div><strong>${m.nameZh}</strong><small>${m.nameEn}</small></div><span>›</span></div><div class="m2-personal-grid"><div class="m2-info-tile"><small>${tx("去程機位","Ghế đi")}</small><strong>${m.seatOutbound}</strong></div><div class="m2-info-tile"><small>${tx("回程機位","Ghế về")}</small><strong>${m.seatReturn}</strong></div><div class="m2-info-tile"><small>${tx("大紅花","Lexis")}</small><strong>${l?.assignmentCode||"—"}</strong></div><div class="m2-info-tile"><small>${tx("雙威","Sunway")}</small><strong>${s?.assignmentCode||"—"}</strong></div></div></section>`:`<button class="m2-personal" data-navigate="profile" type="button" style="width:100%;text-align:left;color:var(--text)"><div class="m2-personal-head"><div class="member-avatar">＋</div><div><strong>${tx("先選擇自己的姓名","Chọn tên của bạn")}</strong><small>${tx("查看房間、機位與餐食補助","Xem phòng, ghế và trợ cấp")}</small></div><span>›</span></div></button>`}
<div class="m2-section-head"><div><h2>${tx("旅程服務","Dịch vụ chuyến đi")}</h2><p>${tx("常用功能集中在這裡","Các chức năng thường dùng")}</p></div></div>
<section class="m2-main-grid">
<button class="m2-feature-card" data-navigate="members"><div class="m2-feature-icon">👥</div><strong>${tx("團員查詢","Tìm thành viên")}</strong><small>${tx("姓名、機位、分房快速查詢","Tìm tên, ghế và phòng")}</small></button>
<button class="m2-feature-card" data-navigate="rooms"><div class="m2-feature-icon">🛏</div><strong>${tx("房間分配","Phân phòng")}</strong><small>${tx("大紅花與雙威住宿名單","Danh sách hai khách sạn")}</small></button>
<button class="m2-feature-card" data-navigate="seats"><div class="m2-feature-icon">✈</div><strong>${tx("機位分配","Phân ghế")}</strong><small>${tx("去回程依座位排序","Sắp theo ghế đi/về")}</small></button>
<button class="m2-feature-card" data-navigate="itinerary"><div class="m2-feature-icon">🗓</div><strong>${tx("五日行程","Lịch trình 5 ngày")}</strong><small>${tx("每日景點與集合資訊","Điểm tham quan và tập trung")}</small></button>
<button class="m2-feature-card" data-navigate="budget"><div class="m2-feature-icon">💰</div><strong>${tx("每日費用","Chi phí mỗi ngày")}</strong><small>${tx("已含、自費與建議現金","Đã bao gồm, tự chọn và tiền mặt")}</small></button>
</section>
<div class="m2-section-head"><div><h2>${tx("旅行提醒","Nhắc nhở")}</h2></div></div>
<section class="grid-2"><article class="mini-card"><div class="emoji">🌦</div><strong>24–33°C</strong><small>${getLanguage()==="zh-TW"?WEATHER_CONFIG.reminderZh:WEATHER_CONFIG.reminderVi}</small></article><article class="mini-card"><div class="emoji">🍽</div><strong>RM 30 × 2</strong><small>${tx("9/21 午餐、9/22 晚餐自理","21/9 trưa, 22/9 tối tự túc")}</small></article></section>
<section class="card"><span class="status-chip">📣 ${tx("最新公告","Thông báo")}</span><strong style="display:block;margin-top:12px">${getLanguage()==="zh-TW"?n.titleZh:n.titleVi}</strong><p style="margin:5px 0 0;color:var(--muted)">${getLanguage()==="zh-TW"?n.messageZh:n.messageVi}</p></section>
</div>`;}
