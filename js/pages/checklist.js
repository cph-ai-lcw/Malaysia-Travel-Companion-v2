import {storage} from '../storage.js';
import {bi,text} from '../i18n.js';
import {travelGuideCard} from '../components/travel-guide.js';

const groups=[
  {
    id:'documents',icon:'📄',zh:'證件／重要文件',vi:'Giấy tờ quan trọng',items:[
      ['passport','護照（返國日起算至少 6 個月效期）','Hộ chiếu (còn hạn ít nhất 6 tháng từ ngày về)'],
      ['arc','外籍員工 ARC／居留證','Thẻ ARC／cư trú của nhân viên nước ngoài'],
      ['ticket','電子機票、航班與集合資訊','Vé điện tử, thông tin chuyến bay và tập trung'],
      ['insurance','旅遊保險與緊急聯絡資料','Bảo hiểm du lịch và liên hệ khẩn cấp'],
      ['cards','信用卡／金融卡與適量現金','Thẻ tín dụng／ATM và tiền mặt vừa đủ'],
      ['funds','入境備用財力至少 NTD 15,000 等值；可用適量現金、信用卡／金融卡與可查驗銀行餘額搭配，不必全換外幣','Chuẩn bị tài chính nhập cảnh tương đương ít nhất 15.000 TWD; có thể kết hợp tiền mặt vừa đủ, thẻ tín dụng／ATM và số dư ngân hàng, không cần đổi toàn bộ sang ngoại tệ'],
      ['copies','護照資料頁照片（手機加密留存）','Ảnh trang thông tin hộ chiếu (lưu bảo mật trong điện thoại)']
    ]
  },
  {
    id:'clothes',icon:'👕',zh:'衣物／泳裝',vi:'Quần áo／đồ bơi',items:[
      ['tops','輕薄透氣上衣 5 件','5 áo mỏng thoáng khí'],
      ['bottoms','長褲／短褲 3–4 件','3–4 quần dài／quần short'],
      ['underwear','內衣褲、襪子與睡衣','Đồ lót, tất và đồ ngủ'],
      ['jacket','薄外套（飛機、雲頂、冷氣室內）','Áo khoác mỏng (máy bay, Genting, phòng máy lạnh)'],
      ['shoes','舒適防滑步行鞋','Giày đi bộ thoải mái, chống trơn'],
      ['slippers','拖鞋／涼鞋','Dép／xăng-đan'],
      ['swimwear','泳衣／泳褲與防水袋','Đồ bơi và túi chống nước'],
      ['hat','遮陽帽／好搭配拍照衣物','Mũ chống nắng／quần áo chụp ảnh']
    ]
  },
  {
    id:'weather',icon:'🌦️',zh:'熱帶氣候／防雨防曬',vi:'Khí hậu nhiệt đới／chống mưa nắng',items:[
      ['umbrella','輕巧折疊傘（防曬防雨）','Ô gấp nhỏ (chống nắng và mưa)'],
      ['raincoat','輕便雨衣／防潑水外套','Áo mưa nhẹ／áo khoác chống nước'],
      ['sunscreen','防曬乳（建議 SPF50+）','Kem chống nắng (khuyến nghị SPF50+)'],
      ['sunglasses','太陽眼鏡','Kính râm'],
      ['repellent','防蚊液／防蚊貼','Thuốc／miếng dán chống muỗi'],
      ['towel','小毛巾／手帕與濕紙巾','Khăn nhỏ và khăn giấy ướt'],
      ['bottle','可重複使用水瓶','Bình nước có thể tái sử dụng']
    ]
  },
  {
    id:'care',icon:'🧴',zh:'盥洗／保養／個人藥品',vi:'Vệ sinh／chăm sóc／thuốc',items:[
      ['tooth','牙刷、牙膏、漱口用品','Bàn chải, kem đánh răng, nước súc miệng'],
      ['wash','洗面乳、卸妝與保養品（旅行分裝）','Sữa rửa mặt, tẩy trang và chăm sóc da (chai nhỏ)'],
      ['bath','個人毛巾、沐浴、洗髮用品','Khăn cá nhân, sữa tắm và dầu gội'],
      ['medicine','個人慢性處方藥（原包裝隨身攜帶）','Thuốc kê đơn cá nhân (mang theo bao bì gốc)'],
      ['travelmed','暈車藥、腫胃藥、止痛藥與退燒藥','Thuốc say xe, đau bụng, giảm đau và hạ sốt'],
      ['firstaid','OK 繃、防水貼布、酸痛藥膏','Băng cá nhân, băng chống nước, cao giảm đau'],
      ['sanitizer','乾洗手、口罩與衛生紙','Gel rửa tay, khẩu trang và khăn giấy']
    ]
  },
  {
    id:'electronics',icon:'🔌',zh:'3C／充電／Type G 插頭',vi:'Thiết bị／sạc／phích Type G',items:[
      ['phone','手機與充電線','Điện thoại và cáp sạc'],
      ['powerbank','行動電源（必須隨身，不得託運）','Pin dự phòng (phải xách tay, không ký gửi)'],
      ['adapter','Type G 英規三腳方型轉接頭','Đầu chuyển Type G ba chân vuông'],
      ['charger','多孔充電器／USB 充電頭','Bộ sạc nhiều cổng／củ sạc USB'],
      ['esim','eSIM／網卡與離線重要資料','eSIM／SIM và dữ liệu quan trọng ngoại tuyến'],
      ['camera','相機、耳機與備用記憶卡','Máy ảnh, tai nghe và thẻ nhớ dự phòng']
    ]
  },
  {
    id:'packing',icon:'🧳',zh:'行李箱／分類收納',vi:'Va li／sắp xếp',items:[
      ['tag','行李吊牌與聯絡方式','Thẻ hành lý và thông tin liên lạc'],
      ['lock','TSA 鎖／行李束帶','Khóa TSA／dây đai va li'],
      ['cubes','收納袋／壓縮袋','Túi phân loại／túi nén'],
      ['bags','大容量購物袋、黑色垃圾袋','Túi mua sắm lớn và túi rác đen'],
      ['zipbags','密封袋／氣泡紙（液體與易碎物）','Túi zip／xốp hơi (chất lỏng và đồ dễ vỡ)'],
      ['space','預留至少 1/4 空間放伴手禮','Chừa ít nhất 1/4 chỗ cho quà mang về']
    ]
  },
  {
    id:'final',icon:'✅',zh:'出門與託運前再檢查',vi:'Kiểm tra trước khi đi và ký gửi',items:[
      ['photo','託運前拍攝行李箱外觀','Chụp ngoại hình va li trước khi ký gửi'],
      ['weight','拍下行李重量讀數','Chụp lại số cân hành lý'],
      ['receipt','保留行李條碼、票根與登機證','Giữ tem hành lý, cuống vé và thẻ lên máy bay'],
      ['carryon','護照、手機、錢包、藥品放隨身包','Hộ chiếu, điện thoại, ví và thuốc trong túi xách tay'],
      ['liquids','液體與尖銳物品依航空規定分類','Phân loại chất lỏng và vật sắc theo quy định hàng không'],
      ['roomcheck','離開飯店前檢查保險箱、插座與浴室','Trước khi rời khách sạn, kiểm tra két sắt, ổ cắm và phòng tắm']
    ]
  }
];

const flatItems=groups.flatMap(group=>group.items);

function progressMarkup(checked){
  const done=flatItems.filter(([id])=>checked[id]).length;
  const percent=Math.round(done/flatItems.length*100);
  return `<div class="card checklist-progress"><div><small>${bi('已完成','Đã hoàn thành')}</small><b id="checkCount">${done} / ${flatItems.length}</b></div><div class="progress-track" aria-label="${text('打包進度','Tiến độ hành lý')}"><span id="checkProgress" style="width:${percent}%"></span></div><strong id="checkPercent">${percent}%</strong></div>`;
}

export function checklistPage(){
  const checked=storage.get('checklist',{});
  return `<section class="section"><div class="page-title-row"><div><p class="eyebrow">PACKING LIST</p><h1>${bi('馬來西亞詳細打包清單','Danh sách hành lý Malaysia chi tiết')}</h1></div><button class="text-btn" id="resetChecklist">${bi('重設','Đặt lại')}</button></div>${progressMarkup(checked)}<div class="card weather-callout"><span>🌦️</span><div><b>${bi('9 月仍高溫、潮濕且容易陣雨','Tháng 9 vẫn nóng, ẩm và dễ có mưa rào')}</b><small>${bi('以輕薄快乾衣物為主，傘具、防曬、防蚊不可少。','Ưu tiên quần áo mỏng mau khô; đừng quên ô, chống nắng và chống muỗi.')}</small></div></div></section><section class="section"><div class="card plug-card"><img src="./images/type-g-plug.jpg" alt="${text('馬來西亞 Type G 英規三腳方型插頭','Phích cắm Type G ba chân vuông tại Malaysia')}" loading="lazy"><div><span class="badge">🔌 Type G</span><h2>${bi('記得帶英規轉接頭','Nhớ mang đầu chuyển chuẩn Anh')}</h2><p>${bi('馬來西亞為三腳方型插座。充電器也請確認支援 100–240V。','Malaysia dùng ổ cắm ba chân vuông. Kiểm tra bộ sạc có hỗ trợ 100–240V.')}</p></div></div></section><section class="section"><div class="section-head"><div><p class="eyebrow">BAGGAGE SAFETY</p><h2>${bi('行李自保流程圖卡','Hình hướng dẫn bảo vệ hành lý')}</h2></div><small>${bi('點擊圖片可放大','Bấm hình để xem lớn')}</small></div>${travelGuideCard('baggage',{compact:true})}</section><section class="section checklist-groups">${groups.map(group=>`<div class="card checklist-group"><div class="icon-title"><span class="icon">${group.icon}</span><h2>${bi(group.zh,group.vi)}</h2></div>${group.items.map(([id,zh,vi])=>`<label class="check-row"><input type="checkbox" data-check="${id}" ${checked[id]?'checked':''}><span>${bi(zh,vi)}</span></label>`).join('')}</div>`).join('')}</section>`;
}

export function bindChecklist(render){
  const updateProgress=()=>{
    const checked=storage.get('checklist',{});
    const done=flatItems.filter(([id])=>checked[id]).length;
    const percent=Math.round(done/flatItems.length*100);
    document.querySelector('#checkCount').textContent=`${done} / ${flatItems.length}`;
    document.querySelector('#checkProgress').style.width=`${percent}%`;
    document.querySelector('#checkPercent').textContent=`${percent}%`;
  };
  document.querySelectorAll('[data-check]').forEach(input=>input.onchange=()=>{
    const data=storage.get('checklist',{});
    data[input.dataset.check]=input.checked;
    storage.set('checklist',data);
    updateProgress();
  });
  document.querySelector('#resetChecklist')?.addEventListener('click',()=>{
    if(confirm(text('確定要清除所有勾選嗎？','Xóa tất cả mục đã chọn?'))){
      storage.remove('checklist');
      render();
    }
  });
}
