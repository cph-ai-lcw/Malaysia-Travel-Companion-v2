import {bi,text} from '../i18n.js';
import {escapeHTML} from '../utils.js';

const GUIDE_CARDS=Object.freeze({
  boarding:{
    image:'./images/guide-boarding.webp',
    eyebrowZh:'出發前',eyebrowVi:'Trước khi khởi hành',
    titleZh:'出發前登機流程',titleVi:'Quy trình trước khi lên máy bay',
    descZh:'護照統一保管、辦理登機、掛行李、出境審查與登機口流程。',
    descVi:'Quy trình giữ hộ chiếu, làm thủ tục, ký gửi, xuất cảnh và đến cửa lên máy bay.'
  },
  entry:{
    image:'./images/guide-malaysia-entry.webp',
    eyebrowZh:'抵達馬來西亞',eyebrowVi:'Đến Malaysia',
    titleZh:'馬來西亞入境流程',titleVi:'Quy trình nhập cảnh Malaysia',
    descZh:'本團 MDAC 由旅行社提供；請依領隊通知核對資料，不需自行填寫或重複提交。',
    descVi:'MDAC của đoàn do công ty du lịch cung cấp; kiểm tra theo thông báo của trưởng đoàn, không tự khai hoặc nộp trùng.',
    notice:true
  },
  baggage:{
    image:'./images/guide-baggage-safety.webp',
    eyebrowZh:'行李安全',eyebrowVi:'An toàn hành lý',
    titleZh:'行李自保流程',titleVi:'Quy trình tự bảo vệ hành lý',
    descZh:'託運前拍照、保留行李票根；領取後先檢查外觀，異常請立即申報。',
    descVi:'Chụp ảnh trước khi ký gửi, giữ tem hành lý và báo ngay nếu có bất thường khi nhận.'
  },
  mall:{
    image:'./images/guide-sunway-mall.webp',
    eyebrowZh:'住宿周邊',eyebrowVi:'Gần khách sạn',
    titleZh:'Sunway Velocity Mall 逛街推薦',titleVi:'Gợi ý mua sắm Sunway Velocity Mall',
    descZh:'美食、服飾、Fipper、Padini、HOOGA、Beryl’s 與伴手禮樓層整理。',
    descVi:'Gợi ý ẩm thực, quần áo, Fipper, Padini, HOOGA, Beryl’s và quà lưu niệm.'
  },
  pavilion:{
    image:'./images/guide-pavilion-shopping.png',
    eyebrowZh:'Day 3 自由逛街',eyebrowVi:'Tự do mua sắm Day 3',
    titleZh:'Pavilion 必買指南',titleVi:'Cẩm nang mua sắm Pavilion',
    descZh:'中越文對照整理伴手禮、Fipper、錫器、鞋包服飾與建議購物順序。',
    descVi:'Hướng dẫn song ngữ về quà lưu niệm, Fipper, đồ thiếc, giày dép, thời trang và thứ tự mua sắm.'
  },
  oldTownFood:{
    image:'./images/guide-day4-old-town-food.png',
    eyebrowZh:'Day 4 老城散步',eyebrowVi:'Dạo phố cổ Day 4',
    titleZh:'老城美食購物指南',titleVi:'Cẩm nang ẩm thực và mua sắm phố cổ',
    descZh:'從源昌隆下午茶出發，整理鬼仔巷、茨廠街與中央藝術坊沿途美食及伴手禮。',
    descVi:'Xuất phát sau trà chiều tại Kafei Dian, khám phá món ăn và quà lưu niệm dọc Kwai Chai Hong, Petaling Street và Central Market.'
  },
  oldTownRoute:{
    image:'./images/guide-day4-old-town-route.png',
    eyebrowZh:'Day 4 步行指示',eyebrowVi:'Chỉ dẫn đi bộ Day 4',
    titleZh:'源昌隆至中央藝術坊路線圖',titleVi:'Bản đồ từ Kafei Dian đến Central Market',
    descZh:'源昌隆 → 鬼仔巷 → 茨廠街 → 中央藝術坊，附街道方向、步行時間與集合提醒。',
    descVi:'Kafei Dian → Kwai Chai Hong → Petaling Street → Central Market, kèm hướng đi, thời gian và điểm tập trung.'
  },
  return:{
    image:'./images/guide-return-baggage.webp',
    eyebrowZh:'回台前',eyebrowVi:'Trước khi về Đài Loan',
    titleZh:'回台行李注意事項',titleVi:'Lưu ý hành lý khi trở về Đài Loan',
    descZh:'託運、隨身行李、菸酒與入境物品提醒；實際規定以航空公司及海關最新公告為準。',
    descVi:'Lưu ý hành lý ký gửi, xách tay, thuốc lá, rượu và vật phẩm nhập cảnh; theo quy định mới nhất.'
  }
});

export function travelGuideCard(id,{compact=false}={}){
  const card=GUIDE_CARDS[id];
  if(!card)return '';
  const title=bi(card.titleZh,card.titleVi);
  const viewLabel=bi('點擊放大查看','Bấm để xem lớn');
  return `<button class="card travel-guide-card${compact?' compact':''}${card.notice?' important':''}" type="button" data-guide-image="${card.image}" data-guide-title="${escapeHTML(title)}" data-guide-download="${escapeHTML(bi('下載／儲存圖片','Tải／lưu ảnh'))}" data-guide-close="${escapeHTML(bi('關閉圖卡','Đóng hình'))}" aria-label="${escapeHTML(`${title}，${viewLabel}`)}"><span class="travel-guide-thumb"><img src="${card.image}" alt="${escapeHTML(title)}" loading="lazy"><i aria-hidden="true">↗</i></span><span class="travel-guide-copy"><small>${bi(card.eyebrowZh,card.eyebrowVi)}</small><strong>${title}</strong><span>${bi(card.descZh,card.descVi)}</span><b>${viewLabel}</b></span></button>`;
}

export function travelGuideGrid(ids,{compact=false}={}){
  return `<div class="travel-guide-grid">${ids.map(id=>travelGuideCard(id,{compact})).join('')}</div>`;
}

function ensureLightbox(){
  let modal=document.querySelector('#travelGuideModal');
  if(modal)return modal;
  modal=document.createElement('div');
  modal.id='travelGuideModal';
  modal.className='travel-guide-modal';
  modal.hidden=true;
  modal.innerHTML='<div class="travel-guide-dialog" role="dialog" aria-modal="true" aria-labelledby="travelGuideTitle"><div class="travel-guide-modal-head"><h2 id="travelGuideTitle"></h2><button type="button" data-close-guide aria-label="關閉圖卡">×</button></div><div class="travel-guide-image-stage"><img id="travelGuideImage" alt=""></div><a class="secondary-btn inline-btn travel-guide-download" id="travelGuideDownload" download>↓ 下載／儲存圖片</a></div>';
  document.body.append(modal);
  const close=()=>{
    modal.hidden=true;
    document.body.classList.remove('guide-modal-open');
    modal._guideOpener?.focus();
  };
  modal.querySelector('[data-close-guide]').addEventListener('click',close);
  modal.addEventListener('click',event=>{if(event.target===modal)close()});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!modal.hidden)close()});
  return modal;
}

export function bindTravelGuides(){
  document.querySelectorAll('[data-guide-image]').forEach(button=>button.onclick=()=>{
    const modal=ensureLightbox();
    const title=button.dataset.guideTitle||'';
    const image=modal.querySelector('#travelGuideImage');
    const download=modal.querySelector('#travelGuideDownload');
    modal.querySelector('#travelGuideTitle').textContent=title;
    modal.querySelector('[data-close-guide]').setAttribute('aria-label',button.dataset.guideClose||text('關閉圖卡','Đóng hình'));
    image.src=button.dataset.guideImage;
    image.alt=title;
    download.href=button.dataset.guideImage;
    download.textContent=`↓ ${button.dataset.guideDownload||bi('下載／儲存圖片','Tải／lưu ảnh')}`;
    modal._guideOpener=button;
    modal.hidden=false;
    document.body.classList.add('guide-modal-open');
    modal.querySelector('[data-close-guide]').focus();
  });
}
