import { EMERGENCY_CONTACTS, LEADER_CONFIG } from "../data.js";
import { bi } from "../i18n.js";
import { travelGuideGrid } from "../components/travel-guide.js";

const faqs = [
  {
    qZh: "9/20 要在哪裡集合？",
    qVi: "Tập trung ở đâu ngày 20/9?",
    aZh: "搭乘公司接送車者 07:00 在鶯歌區中湖里大湖路 324 號集合，07:20 發車。自行前往者 08:00 在桃園機場第二航廈星宇航空 3 號櫃檯前集合。",
    aVi: "Người đi xe công ty tập trung 07:00 tại số 324 đường Dahu, Yingge; xe chạy 07:20. Người tự đi tập trung 08:00 trước quầy số 3 STARLUX, Nhà ga 2.",
  },
  {
    qZh: "MDAC 入境卡要自己填嗎？",
    qVi: "Tôi có tự khai MDAC không?",
    aZh: "本團 MDAC 由旅行社提供。請依旅行社與領隊通知核對資料，不需自行填寫，也不要重複提交。",
    aVi: "MDAC của đoàn do công ty du lịch cung cấp. Hãy kiểm tra thông tin theo thông báo của công ty và trưởng đoàn; không tự khai hoặc nộp trùng.",
  },
  {
    qZh: "NTD 15,000 一定要全部換成外幣現金嗎？",
    qVi: "Có cần đổi toàn bộ 15.000 TWD sang tiền mặt ngoại tệ không?",
    aZh: "不用。身上請至少準備 NTD 15,000 等值的可用財力，以備可能的入境抽查；可由適量現金、信用卡／金融卡及可查驗的銀行餘額搭配，不必全部換成美元或馬幣現鈔。是否查驗及接受方式依現場移民官認定。",
    aVi: "Không cần. Nên chuẩn bị sẵn khả năng tài chính tương đương ít nhất 15.000 TWD để phòng khi bị kiểm tra nhập cảnh; có thể kết hợp tiền mặt vừa đủ, thẻ tín dụng／ATM và số dư ngân hàng có thể kiểm tra, không cần đổi toàn bộ sang USD hoặc MYR tiền mặt. Việc kiểm tra và hình thức được chấp nhận do nhân viên nhập cảnh quyết định.",
  },
  {
    qZh: "護照與外籍員工需準備什麼？",
    qVi: "Cần chuẩn bị hộ chiếu và giấy tờ gì?",
    aZh: "護照效期需至少自返國日起算 6 個月，建議保留 3 頁完整空白頁。外籍員工必須另攜帶 ARC／居留證。",
    aVi: "Hộ chiếu cần còn hạn ít nhất 6 tháng từ ngày về và nên có 3 trang trống. Nhân viên nước ngoài phải mang thẻ ARC／cư trú.",
  },
  {
    qZh: "馬來西亞使用什麼插頭？",
    qVi: "Malaysia dùng loại phích cắm nào?",
    aZh: "使用 Type G 英規三腳方型插頭，請自備轉接頭並確認充電器支援 100–240V。",
    aVi: "Dùng phích Type G ba chân vuông. Mang đầu chuyển và kiểm tra bộ sạc hỗ trợ 100–240V.",
  },
  {
    qZh: "行動電源可以放行李箱託運嗎？",
    qVi: "Pin dự phòng có thể ký gửi không?",
    aZh: "不可以。行動電源必須放在隨身行李，並依航空公司規定攜帶。",
    aVi: "Không. Pin dự phòng phải để trong hành lý xách tay và tuân theo quy định hãng bay.",
  },
  {
    qZh: "大紅花自費活動價格是固定的嗎？",
    qVi: "Giá hoạt động Lexis có cố định không?",
    aZh: "手帳價格為行前參考，須以現場公告為準。水上項目也受天候、海況、人數與預約狀況影響。",
    aVi: "Giá trong sổ tay chỉ để tham khảo; giá tại chỗ là giá chính thức. Hoạt động biển còn tùy thời tiết, biển, số người và đặt chỗ.",
  },
];

export function infoPage() {
  const contacts=EMERGENCY_CONTACTS.map((contact) => `<div class="info-row"><span>${bi(contact.nameZh, contact.nameVi)}<small>${bi(contact.noteZh, contact.noteVi)}</small></span><a class="call-btn" href="tel:${contact.phone}">☎ ${contact.phoneDisplay || contact.phone}</a></div>`).join("");
  const faqMarkup=faqs.map((faq, index) => `<details class="card faq-item" ${index === 0 ? "open" : ""}><summary>${bi(faq.qZh, faq.qVi)}<i>+</i></summary><p>${bi(faq.aZh, faq.aVi)}</p></details>`).join("");
  return `
    <section class="section">
      <p class="eyebrow">INFORMATION</p>
      <h1>${bi("更多旅遊資訊", "Thông tin du lịch")}</h1>
      <div class="quick-grid">
        <a class="card quick-card" href="#/checklist"><span class="emoji">🧳</span><b>${bi("打包清單", "Hành lý")}</b></a>
        <a class="card quick-card" href="#/wallet"><span class="emoji">💰</span><b>${bi("記帳", "Chi tiêu")}</b></a>
        <a class="card quick-card" href="#/guide"><span class="emoji">🌺</span><b>${bi("自費・美食購物", "Tự phí · Ăn mua")}</b></a>
        <a class="card quick-card" href="#/itinerary"><span class="emoji">📅</span><b>${bi("完整行程", "Lịch trình")}</b></a>
      </div>
    </section>
    <section class="section" id="travel-process-guides">
      <div class="section-head"><div><p class="eyebrow">TRAVEL GUIDE CARDS</p><h2>${bi("機場與行李流程圖卡", "Hình hướng dẫn sân bay và hành lý")}</h2></div><small>${bi("點擊圖片可全螢幕查看", "Bấm hình để xem toàn màn hình")}</small></div>
      <div class="card mdac-guide-note"><span>🛂</span><b>${bi("本團 MDAC 由旅行社提供，不需自行填寫或重複提交。", "MDAC của đoàn do công ty du lịch cung cấp; không tự khai hoặc nộp trùng.")}</b></div>
      ${travelGuideGrid(["boarding","entry","baggage","return"],{compact:true})}
    </section>
    <section class="card section">
      <div class="icon-title"><span class="icon">🚩</span><div><p class="eyebrow">TOUR TEAM</p><h2>${bi("領隊與導遊", "Trưởng đoàn và hướng dẫn viên")}</h2></div></div>
      <div class="staff-list"><div class="leader-row"><div><span class="badge">${bi("領隊", "Trưởng đoàn")}</span><b>${LEADER_CONFIG.name}</b><small>${bi("國能馬來西亞團領隊", "Trưởng đoàn Malaysia")}</small></div><a class="primary-btn inline-btn" href="tel:${LEADER_CONFIG.phone}">☎ ${LEADER_CONFIG.phoneDisplay}</a></div><div class="leader-row"><div><span class="badge">${bi("導遊", "Hướng dẫn viên")}</span><b>${LEADER_CONFIG.guideName}</b><small>${bi("馬來西亞當地導遊", "Hướng dẫn viên địa phương tại Malaysia")}</small></div></div></div>
    </section>
    <section class="card section"><h2>${bi("接送時間", "Giờ xe đưa đón")}</h2><div class="info-list"><div class="info-row"><span>9/20<small>${bi("去程", "Lượt đi")}</small></span><b>07:00 ${bi("集合", "Tập trung")}<br>07:20 ${bi("發車", "Khởi hành")}</b></div><div class="info-row"><span>9/24<small>${bi("回程", "Lượt về")}</small></span><b>23:15 ${bi("集合", "Tập trung")}<br>23:30 ${bi("發車", "Khởi hành")}</b></div></div></section>
    <section class="card section"><h2>${bi("緊急聯絡", "Liên hệ khẩn cấp")}</h2><div class="contact-list">${contacts}</div></section>
    <section class="card section line-info-card"><div class="line-qr-large"><img src="${LEADER_CONFIG.lineQr}" alt="LINE 群組 QR Code" loading="lazy"></div><div><span class="badge">LINE GROUP</span><h2>${bi("員工旅遊 LINE 群組", "Nhóm LINE du lịch")}</h2><p>${bi("可用手機直接點選按鈕加入；若使用其他裝置，可開啟 LINE 掃描 QR Code。", "Bấm nút để tham gia trên điện thoại; trên thiết bị khác có thể quét mã QR bằng LINE.")}</p><a class="primary-btn" href="${LEADER_CONFIG.line}" target="_blank" rel="noopener">LINE ${bi("直接加入群組", "Tham gia nhóm ngay")}</a></div></section>
    <section class="card section mdac-card"><span>🛂</span><div><h2>MDAC ${bi("入境提醒", "Nhắc nhập cảnh")}</h2><p>${bi("本團 MDAC 由旅行社提供。請依旅行社與領隊通知核對資料，不需自行填寫，也不要重複提交；外籍員工另攜 ARC。", "MDAC của đoàn do công ty du lịch cung cấp. Kiểm tra thông tin theo thông báo của công ty và trưởng đoàn; không tự khai hoặc nộp trùng. Nhân viên nước ngoài mang thêm ARC.")}</p></div></section>
    <section class="card section leader-entry"><span>🧭</span><div><p class="eyebrow">LEADER MODE</p><h2>${bi("領隊管理中心", "Trung tâm trưởng đoàn")}</h2><p>${bi("公告、點名、QR報到與資料備份。", "Thông báo, điểm danh, QR và sao lưu.")}</p><a class="primary-btn inline-btn" href="#/leader">${bi("領隊登入", "Đăng nhập trưởng đoàn")}</a></div></section>
    <section class="section"><div class="section-head"><h2>FAQ</h2></div><div class="faq-list">${faqMarkup}</div></section>`;
}
