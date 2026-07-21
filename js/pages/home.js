import {ITINERARY,NOTICES,LEADER_CONFIG} from '../data.js';
import {bi} from '../i18n.js';
import {loadLeader} from '../leader-store.js';

function allNotices(){const custom=loadLeader().announcements.map(item=>({icon:'📣',date:item.createdAt.slice(0,10),titleZh:item.titleZh,titleVi:item.titleVi||item.titleZh,bodyZh:item.bodyZh,bodyVi:item.bodyVi||item.bodyZh}));return [...custom,...NOTICES]}

function localISODate(){
  const now=new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;
}

function itineraryCard(){
  const today=localISODate();
  const active=ITINERARY.find(day=>day.date===today);
  const before=today<ITINERARY[0].date;
  const selected=active||(before?ITINERARY[0]:ITINERARY[ITINERARY.length-1]);
  const heading=active?bi('今日行程','Lịch trình hôm nay'):before?bi('出發日預覽','Xem trước ngày khởi hành'):bi('旅程回顧','Xem lại hành trình');
  return `<div class="card today-card"><div class="section-head"><div><p class="eyebrow">DAY ${selected.day} · ${selected.date.slice(5).replace('-','/')}</p><h2>${heading}</h2></div><a class="text-link" href="#/itinerary">${bi('全部','Tất cả')} →</a></div><h3>${bi(selected.titleZh,selected.titleVi)}</h3><div class="mini-timeline">${selected.items.slice(0,4).map(item=>`<div><b>${item.time}</b><span>${bi(item.zh,item.vi)}</span></div>`).join('')}</div></div>`;
}

export function homePage(){
  return `<section class="section">${itineraryCard()}</section><section class="section"><div class="section-head"><h2>${bi('快速入口','Truy cập nhanh')}</h2></div><div class="quick-grid"><a class="card quick-card" href="#/my-travel"><span class="emoji">👤</span><div><b>${bi('我的旅程','Chuyến đi của tôi')}</b><small>${bi('房間、機位、同房者','Phòng, ghế, bạn cùng phòng')}</small></div></a><a class="card quick-card" href="#/checklist"><span class="emoji">🧳</span><div><b>${bi('詳細打包清單','Hành lý chi tiết')}</b><small>${bi('熱帶天氣、Type G 插頭','Khí hậu nhiệt đới, phích Type G')}</small></div></a><a class="card quick-card" href="#/wallet"><span class="emoji">💰</span><div><b>${bi('旅遊記帳','Chi tiêu')}</b><small>${bi('RM 與台幣雙向換算','Đổi hai chiều RM và TWD')}</small></div></a><a class="card quick-card" href="#/guide"><span class="emoji">🌺</span><div><b>${bi('大紅花・美食購物','Lexis · Ăn uống mua sắm')}</b><small>${bi('自費活動、亞羅街、Sunway','Tự phí, Jalan Alor, Sunway')}</small></div></a></div></section><section class="section"><div class="card transport-card"><div class="icon-title"><span class="icon">🚌</span><div><p class="eyebrow">TRANSFER</p><h2>${bi('接送資訊','Xe đưa đón')}</h2></div></div><div class="transport-steps"><div><span>9/20</span><b>07:00</b><small>${bi('公司集合','Tập trung tại công ty')}</small></div><div><span>9/20</span><b>07:20</b><small>${bi('準時發車','Xe khởi hành')}</small></div><div><span>9/24</span><b>23:15</b><small>${bi('桃園機場集合','Tập trung tại sân bay')}</small></div><div><span>9/24</span><b>23:30</b><small>${bi('發車返回公司','Xe về công ty')}</small></div></div><p class="transport-note">${bi('自行前往機場者：9/20 08:00 於桃園機場第二航廈星宇航空 3 號櫃檯前集合。','Người tự đến sân bay: tập trung lúc 08:00 ngày 20/9 trước quầy số 3 STARLUX, Nhà ga 2.')}</p></div></section><section class="section"><div class="section-head"><h2>${bi('最新公告','Thông báo mới')}</h2></div><div class="notice-list">${allNotices().map(notice=>`<article class="card announcement"><span class="announcement-icon">${notice.icon}</span><div><small>${notice.date.replaceAll('-','.')}</small><h3>${bi(notice.titleZh,notice.titleVi)}</h3><p>${bi(notice.bodyZh,notice.bodyVi)}</p></div></article>`).join('')}</div></section><section class="section"><div class="card line-card"><img src="${LEADER_CONFIG.lineQr}" alt="LINE 群組 QR Code" loading="lazy"><div><span class="badge">LINE GROUP</span><h2>${bi('加入員工旅遊群組','Tham gia nhóm du lịch')}</h2><p>${bi('行程通知與緊急集合訊息請以群組公告為準。','Theo dõi thông báo lịch trình và tập trung khẩn cấp trong nhóm.')}</p><a class="primary-btn inline-btn" href="${LEADER_CONFIG.line}" target="_blank" rel="noopener">LINE ${bi('直接加入','Tham gia ngay')}</a></div></div></section>`;
}
