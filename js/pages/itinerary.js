import {ITINERARY,SIGHTS} from '../data.js';
import {bi,getLang,text} from '../i18n.js';
import {travelGuideGrid} from '../components/travel-guide.js';

function timelineText(item){
  const lang=getLang();
  if(lang==='vi')return item.vi||item.zh;
  return item.zh;
}

function dayGuides(day){
  const guides=SIGHTS.find(entry=>entry.day===day)?.items||[];
  if(!guides.length)return '';
  return `<details class="deep-guide"><summary>📖 ${bi('開啟深度導覽','Mở hướng dẫn chi tiết')}</summary><div class="deep-guide-list">${guides.map(item=>`<article><span>${item.icon}</span><div><h3>${bi(item.nameZh,item.nameVi)}</h3><p>${bi(item.descZh,item.descVi)}</p></div>${item.photo?`<img class="sight-photo${item.photoClass?` ${item.photoClass}`:''}" src="${item.photo}" alt="${text(item.photoAltZh||item.nameZh,item.photoAltVi||item.nameVi)}" loading="lazy">`:''}</article>`).join('')}</div></details>`;
}

function dayTravelGuides(day){
  const guides={1:['boarding','entry'],3:['pavilion','mall'],4:['oldTownFood','oldTownRoute'],5:['return']}[day]||[];
  if(!guides.length)return '';
  const title=day===1
    ?bi('出發與入境圖卡','Hình hướng dẫn khởi hành và nhập cảnh')
    :day===3
      ?bi('Pavilion 與住宿周邊購物圖卡','Hình mua sắm Pavilion và gần khách sạn')
      :day===4
        ?bi('老城美食購物與步行路線','Ẩm thực, mua sắm và lộ trình phố cổ')
      :bi('回台前圖卡','Hình hướng dẫn trước khi về Đài Loan');
  return `<div class="day-travel-guides"><div class="section-head"><h3>🖼️ ${title}</h3><small>${bi('點擊圖片可放大','Bấm hình để xem lớn')}</small></div>${travelGuideGrid(guides,{compact:true})}</div>`;
}

export function itineraryPage(){
  const today=new Date();
  const todayISO=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;
  return `<section class="section"><p class="eyebrow">5 DAYS · 4 NIGHTS</p><h1>${bi('Day 1–Day 5 完整行程','Lịch trình Day 1–Day 5')}</h1><p class="page-intro">${bi('時間、景點、餐食、住宿與深度導覽已整合在各日卡片。','Thời gian, điểm tham quan, bữa ăn, khách sạn và hướng dẫn được gộp trong từng ngày.')}</p></section><section class="section">${ITINERARY.map((day,index)=>`<details class="card day-card" ${day.date===todayISO||(!ITINERARY.some(x=>x.date===todayISO)&&index===0)?'open':''}><summary><span><small>${day.date.slice(5).replace('-','/')}</small><b>Day ${day.day}</b></span><strong>${bi(day.titleZh,day.titleVi)}</strong><i aria-hidden="true">+</i></summary><div class="day-overview"><div><small>🏨 ${bi('住宿','Khách sạn')}</small><b>${day.hotel}</b></div><div><small>🍽️ ${bi('當日餐食','Bữa ăn')}</small><div class="meal-chips">${day.meals.map(meal=>`<span>${bi(meal.zh,meal.vi)}</span>`).join('')}</div></div></div><div class="timeline">${day.items.map(item=>`<div class="timeline-item"><div class="timeline-time">${item.time}</div><div class="timeline-body">${timelineText(item)}${item.optional?`<span class="mini-badge optional">${bi('自費','Tự phí')}</span>`:''}${item.included?`<span class="mini-badge">${bi('已安排','Đã sắp xếp')}</span>`:''}</div></div>`).join('')}</div>${dayGuides(day.day)}${dayTravelGuides(day.day)}</details>`).join('')}</section>`;
}
