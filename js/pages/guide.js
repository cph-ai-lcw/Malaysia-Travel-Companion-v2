import {FOODS,SHOPPING,LEXIS_ACTIVITIES} from '../data.js';
import {bi} from '../i18n.js';
import {travelGuideCard} from '../components/travel-guide.js';

function itemIcon(item){return item.icon||'✨'}
function activityCard(item){return `<article class="activity-item"><span class="emoji">${item.icon}</span><div><h3>${bi(item.nameZh,item.nameVi)}</h3><p>${bi(item.noteZh,item.noteVi)}</p></div><b>${item.price}</b></article>`}

export function guidePage(){
  return `<section class="section"><p class="eyebrow">EAT · SHOP · PLAY</p><h1>${bi('美食・購物・自費活動','Ăn uống · Mua sắm · Vui chơi')}</h1><div class="guide-app-tabs" role="tablist" aria-label="${bi('旅遊攻略分頁','Tab hướng dẫn du lịch')}"><button class="active" type="button" role="tab" aria-selected="true" data-guide-tab="lexis">🌺 <span>${bi('大紅花自費','Tự phí Lexis')}</span></button><button type="button" role="tab" aria-selected="false" data-guide-tab="food">🍜 <span>${bi('必吃美食','Món ngon')}</span></button><button type="button" role="tab" aria-selected="false" data-guide-tab="shopping">🛍️ <span>${bi('購物伴手禮','Mua sắm')}</span></button></div></section>
  <div data-guide-panel="lexis" role="tabpanel"><section class="section" id="lexis-activities"><div class="section-head"><div><p class="eyebrow">LEXIS HIBISCUS</p><h2>${bi('大紅花自費休閒項目','Hoạt động tự phí tại Lexis')}</h2></div></div><div class="card price-notice"><span>ℹ️</span><p>${bi('價格為行前參考，以渡假村現場公告為準。水上活動受天候、海況、人數與安全條件影響，部分項目需提前預約。','Giá chỉ để tham khảo; giá tại resort là giá chính thức. Hoạt động biển tùy thời tiết, tình trạng biển, số người và an toàn; một số mục cần đặt trước.')}</p></div><div class="activity-groups">${LEXIS_ACTIVITIES.map(group=>`<div class="card activity-group"><div class="icon-title"><span class="icon">${group.icon}</span><h2>${bi(group.titleZh,group.titleVi)}</h2></div><div class="activity-list">${group.items.map(activityCard).join('')}</div></div>`).join('')}</div></section></div>
  <div data-guide-panel="food" role="tabpanel" hidden><section class="section"><div class="section-head"><div><p class="eyebrow">MALAYSIA FOOD</p><h2>${bi('必吃美食','Món nên thử')}</h2></div></div><div class="card notice"><b>🏆 ${bi('團體唯一夜市：亞羅街','Chợ đêm duy nhất: Jalan Alor')}</b><p>${bi('團體遊覽車上下客較方便，請依領隊指定時間與地點集合。','Xe đoàn lên xuống thuận tiện hơn. Tập trung theo giờ và địa điểm của trưởng đoàn.')}</p></div><div class="grid guide-grid">${FOODS.map(item=>`<article class="card guide-card"><span class="emoji">${itemIcon(item)}</span><div><h3>${bi(item.nameZh,item.nameVi)}</h3><small>📍 ${bi(item.placeZh,item.placeVi)}</small><p>${bi(item.noteZh,item.noteVi)}</p><span class="badge">${item.price}</span></div></article>`).join('')}</div></section></div>
  <div data-guide-panel="shopping" role="tabpanel" hidden><section class="section"><div class="section-head"><div><p class="eyebrow">SUNWAY · SOUVENIRS</p><h2>${bi('伴手禮・購物','Quà tặng · Mua sắm')}</h2></div><small>${bi('圖卡可點擊放大','Bấm hình để xem lớn')}</small></div>${travelGuideCard('mall',{compact:true})}<div class="card mall-card"><div><span class="badge">SUNWAY VELOCITY MALL</span><h3>${bi('飯店旁的自由購物重點','Khu mua sắm tự do cạnh khách sạn')}</h3><p>${bi('可一次找到 Fipper、Padini、HOOGA、Oriental Kopi 與超市伴手禮。店鋪與樓層以商場當日導覽為準。','Có thể tìm Fipper, Padini, HOOGA, Oriental Kopi và quà tại siêu thị. Vị trí cửa hàng theo danh mục trong ngày của trung tâm.')}</p></div></div><div class="grid guide-grid">${SHOPPING.map(item=>`<article class="card guide-card"><span class="emoji">${itemIcon(item)}</span><div><h3>${bi(item.nameZh,item.nameVi)}</h3><small>📍 ${bi(item.whereZh,item.whereVi)}</small><p>${bi(item.noteZh,item.noteVi)}</p><span class="badge">${item.price}</span></div></article>`).join('')}</div></section></div>`;
}

export function bindGuidePage(){
  const buttons=[...document.querySelectorAll('[data-guide-tab]')];
  const panels=[...document.querySelectorAll('[data-guide-panel]')];
  buttons.forEach(button=>button.onclick=()=>{
    const selected=button.dataset.guideTab;
    buttons.forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-selected',String(active))});
    panels.forEach(panel=>panel.hidden=panel.dataset.guidePanel!==selected);
    window.scrollTo({top:0,behavior:'smooth'});
  });
}
