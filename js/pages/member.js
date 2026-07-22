import {MEMBERS,ROOMS} from '../data.js';
import {storage} from '../storage.js';
import {bi,text} from '../i18n.js';
import {roomNumber} from '../leader-store.js';

const roomMap=new Map(ROOMS.map(room=>[room.id,room]));
const hotelGalleries=[
  {
    icon:'🏝️',
    name:'Lexis Hibiscus Port Dickson',
    zh:'大紅花海上泳池別墅渡假村',
    vi:'Khu nghỉ dưỡng Lexis Hibiscus',
    info:['./images/hotel-lexis-guide.png','大紅花渡假村住宿須知','Hướng dẫn lưu trú Lexis Hibiscus'],
    photos:[
      ['./images/hotel-lexis-aerial.jpg','大紅花渡假村空拍','Toàn cảnh Lexis Hibiscus từ trên cao'],
      ['./images/hotel-lexis-beach.jpg','Lexis Hibiscus 沙灘區','Khu bãi biển Lexis Hibiscus'],
      ['./images/hotel-lexis-room.jpg','Premium Pool Villa 房型','Phòng Premium Pool Villa']
    ]
  },
  {
    icon:'🏙️',
    name:'Sunway Velocity Hotel Kuala Lumpur',
    zh:'吉隆坡雙威偉樂酒店',
    vi:'Khách sạn Sunway Velocity Kuala Lumpur',
    info:['./images/hotel-sunway-guide.png','吉隆坡雙威偉樂酒店住宿須知','Hướng dẫn lưu trú Sunway Velocity Hotel'],
    photos:[
      ['./images/hotel-sunway-exterior.jpg','Sunway Velocity 酒店外觀','Bên ngoài khách sạn Sunway Velocity'],
      ['./images/hotel-sunway-pool.jpg','Sunway Velocity 屋頂無邊際泳池','Hồ bơi vô cực trên tầng mái Sunway Velocity'],
      ['./images/hotel-sunway-room.jpg','Sunway Velocity 客房','Phòng khách sạn Sunway Velocity']
    ]
  }
];

function roomInfo(member,key){
  const room=roomMap.get(member.roomAssignments?.[key]);
  if(!room)return {code:'—',mates:'—',type:'—'};
  const mates=room.memberIds
    .filter(id=>id!==member.id)
    .map(id=>MEMBERS.find(item=>item.id===id)?.nameZh)
    .filter(Boolean)
    .join('、')||text('單人房','Phòng đơn');
  const actual=roomNumber(room.id);
  return {code:actual||bi(`分房代碼 ${room.assignmentCode}`,`Mã phân phòng ${room.assignmentCode}`),actual,mates,type:text(room.roomTypeZh,room.roomTypeVi)};
}

function transportText(value){
  if(value==='公司搭車前往機場')return bi('公司搭車前往機場','Đi xe công ty đến sân bay');
  if(value==='自行前往機場')return bi('自行前往機場','Tự đến sân bay');
  return value||'—';
}

function renderMember(member){
  if(!member)return '';
  const lexis=roomInfo(member,'lexis');
  const sunway=roomInfo(member,'sunway');
  return `<div class="member-summary"><div class="card member-name-card"><div class="icon-title"><span class="icon">👤</span><div><small>NO. ${member.number}</small><h2>${member.nameZh}</h2><small>${member.nameEn||''}</small></div></div></div><div class="seat-grid"><div class="card seat-card"><small>JX725 ${bi('去程','Chiều đi')}</small><b>${member.seatOutbound||'—'}</b></div><div class="card seat-card"><small>JX726 ${bi('回程','Chiều về')}</small><b>${member.seatReturn||'—'}</b></div></div><div class="hotel-grid"><div class="card hotel-card"><small>🏝 Lexis Hibiscus</small><b>${lexis.code}</b><p>${lexis.actual?bi('正式房號','Số phòng chính thức'):bi('入住當日公布','Công bố ngày nhận phòng')} · ${lexis.type}</p><small>${bi('同房者','Bạn cùng phòng')}：${lexis.mates}</small></div><div class="card hotel-card"><small>🏙 Sunway Velocity</small><b>${sunway.code}</b><p>${sunway.actual?bi('正式房號','Số phòng chính thức'):bi('入住當日公布','Công bố ngày nhận phòng')} · ${sunway.type}</p><small>${bi('同房者','Bạn cùng phòng')}：${sunway.mates}</small></div></div><div class="card transport-member-card"><b>🚌 ${bi('交通備註','Ghi chú di chuyển')}</b><p>${transportText(member.airportTransport)}</p></div></div>`;
}

function renderHotelGalleries(){
  return `<section class="section hotel-gallery-section"><div class="section-head"><div><p class="eyebrow">HOTEL INFO</p><h2>${bi('飯店資料與住宿環境','Thông tin và hình ảnh khách sạn')}</h2></div><small>${bi('圖卡可點擊放大','Bấm hình để xem lớn')}</small></div><div class="hotel-gallery-list">${hotelGalleries.map(hotel=>{const [infoSrc,infoZh,infoVi]=hotel.info;const infoTitle=bi(infoZh,infoVi);return `<article class="card hotel-gallery-card"><div class="hotel-gallery-heading"><span>${hotel.icon}</span><div><small>${hotel.name}</small><h3>${bi(hotel.zh,hotel.vi)}</h3></div></div><button class="hotel-info-guide" type="button" data-guide-image="${infoSrc}" data-guide-title="${infoTitle}" data-guide-download="${bi('下載／儲存圖片','Tải／lưu ảnh')}" data-guide-close="${bi('關閉圖卡','Đóng hình')}" aria-label="${infoTitle}，${bi('點擊放大查看','Bấm để xem lớn')}"><img src="${infoSrc}" alt="${infoTitle}" loading="lazy"><span><strong>${infoTitle}</strong><small>${bi('點擊放大查看','Bấm để xem lớn')} ↗</small></span></button><div class="hotel-photo-strip">${hotel.photos.map(([src,zh,vi])=>{const title=bi(zh,vi);return `<figure><button type="button" class="hotel-photo-button" data-guide-image="${src}" data-guide-title="${title}" data-guide-download="${bi('下載／儲存圖片','Tải／lưu ảnh')}" data-guide-close="${bi('關閉圖卡','Đóng hình')}" aria-label="${title}，${bi('點擊放大查看','Bấm để xem lớn')}"><img src="${src}" alt="${title}" loading="lazy"></button><figcaption>${title}</figcaption></figure>`}).join('')}</div></article>`}).join('')}</div></section>`;
}

export function memberPage(){
  const selected=storage.get('memberId','');
  return `<section class="section"><p class="eyebrow">MY TRIP</p><h1>${bi('我的旅程','Chuyến đi của tôi')}</h1><p class="page-intro">${bi('選擇姓名後可查看去回程機位、兩間飯店房間分配與同房者。','Chọn tên để xem ghế khứ hồi, phòng hai khách sạn và bạn cùng phòng.')}</p><div class="card"><div class="field"><label>${bi('搜尋姓名','Tìm tên')}</label><input id="memberSearch" autocomplete="off" placeholder="${text('輸入中文或英文姓名','Nhập tên Hoa hoặc Anh')}"></div><div id="memberResults" class="search-results"></div><div class="field"><label>${bi('選擇團員','Chọn thành viên')}</label><select id="memberSelect"><option value="">${text('請選擇姓名','Vui lòng chọn tên')}</option>${MEMBERS.map(member=>`<option value="${member.id}" ${member.id===selected?'selected':''}>${member.number}. ${member.nameZh} · ${member.nameEn}</option>`).join('')}</select></div></div></section><section id="memberDetail" class="section">${selected?renderMember(MEMBERS.find(member=>member.id===selected)):''}</section>${renderHotelGalleries()}`;
}

export function bindMemberPage(){
  const search=document.querySelector('#memberSearch');
  const results=document.querySelector('#memberResults');
  const select=document.querySelector('#memberSelect');
  const detail=document.querySelector('#memberDetail');
  const choose=id=>{
    storage.set('memberId',id);
    select.value=id;
    const member=MEMBERS.find(item=>item.id===id);
    detail.innerHTML=member?renderMember(member):'';
    results.innerHTML='';
  };
  select?.addEventListener('change',event=>choose(event.target.value));
  search?.addEventListener('input',event=>{
    const query=event.target.value.trim().toLowerCase();
    const list=query?MEMBERS.filter(member=>`${member.nameZh} ${member.nameEn}`.toLowerCase().includes(query)).slice(0,10):[];
    results.innerHTML=list.map(member=>`<button class="search-result" data-id="${member.id}">${member.number}. ${member.nameZh}<small>${member.nameEn}</small></button>`).join('');
    results.querySelectorAll('button').forEach(button=>button.onclick=()=>choose(button.dataset.id));
  });
}
