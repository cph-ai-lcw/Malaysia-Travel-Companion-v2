export const TRAVEL_INFO = Object.freeze({
  updatedAt: '2026-07-18',
  mdac: {
    titleZh:'MDAC 馬來西亞數位入境卡',
    titleVi:'Thẻ nhập cảnh kỹ thuật số Malaysia – MDAC',
    ownerZh:'由公司或旅行社統一協助處理',
    ownerVi:'Do công ty hoặc công ty du lịch hỗ trợ xử lý thống nhất',
    noticeZh:'請勿自行重複填寫。相關資料收集、填報方式與確認結果，將由公司、旅行社或領隊於出發前另行通知。',
    noticeVi:'Vui lòng không tự khai lại để tránh trùng lặp. Việc thu thập dữ liệu, cách khai và kết quả xác nhận sẽ được công ty, công ty du lịch hoặc trưởng đoàn thông báo trước ngày khởi hành.',
    statuses:[
      {id:'pending',zh:'尚未通知',vi:'Chưa thông báo'},
      {id:'collecting',zh:'資料收集中',vi:'Đang thu thập dữ liệu'},
      {id:'processing',zh:'旅行社處理中',vi:'Công ty du lịch đang xử lý'},
      {id:'completed',zh:'已完成',vi:'Đã hoàn thành'}
    ]
  },
  quickFacts: [
    {icon:'🔌',titleZh:'電壓與插座',titleVi:'Điện áp và ổ cắm',value:'240V · Type G',noteZh:'三孔英規插座，建議攜帶萬用轉接頭。',noteVi:'Ổ cắm 3 chấu kiểu Anh, nên mang bộ chuyển đổi.'},
    {icon:'🕒',titleZh:'時差',titleVi:'Múi giờ',value:'UTC+8',noteZh:'與台灣相同，無需調整時間。',noteVi:'Cùng múi giờ với Đài Loan.'},
    {icon:'💵',titleZh:'貨幣',titleVi:'Tiền tệ',value:'MYR / RM',noteZh:'小額消費與夜市建議準備現金。',noteVi:'Nên chuẩn bị tiền mặt cho chợ đêm và chi tiêu nhỏ.'},
    {icon:'🗣️',titleZh:'語言',titleVi:'Ngôn ngữ',value:'Malay · English · 中文',noteZh:'觀光區多可使用英文或華語溝通。',noteVi:'Khu du lịch thường dùng được tiếng Anh hoặc tiếng Hoa.'}
  ],
  flights: [
    {type:'outbound',date:'2026-09-20',flight:'JX725',from:'TPE 桃園',to:'KUL 吉隆坡',depart:'11:15',arrive:'16:10',terminalZh:'桃園機場第二航廈',terminalVi:'Nhà ga 2 sân bay Đào Viên'},
    {type:'return',date:'2026-09-24',flight:'JX726',from:'KUL 吉隆坡',to:'TPE 桃園',depart:'17:20',arrive:'22:15',terminalZh:'抵達桃園機場',terminalVi:'Đến sân bay Đào Viên'}
  ],
  hotels: [
    {days:'9/20–9/22',icon:'🌺',nameZh:'大紅花渡假村',nameVi:'Lexis Hibiscus Port Dickson',noteZh:'Premium Pool Villa；房卡與實際房號以領隊現場發放為準。',noteVi:'Premium Pool Villa; số phòng thực tế theo trưởng đoàn phát tại chỗ.'},
    {days:'9/22–9/24',icon:'🏙️',nameZh:'雙威偉樂酒店',nameVi:'Sunway Velocity Hotel Kuala Lumpur',noteZh:'鄰近 Sunway Velocity Mall；房卡與實際房號以領隊通知為準。',noteVi:'Gần Sunway Velocity Mall; số phòng thực tế theo thông báo của trưởng đoàn.'}
  ],
  entry: [
    {icon:'🛂',titleZh:'護照與入境',titleVi:'Hộ chiếu và nhập cảnh',itemsZh:['護照須保持完整、無污損，並確認有效期限。','本團 MDAC 將由公司或旅行社統一協助處理，請勿自行重複填寫。','備妥回程機票、住宿與行程資料，以供入境查驗。'],itemsVi:['Hộ chiếu phải còn nguyên vẹn và còn hiệu lực.','MDAC của đoàn sẽ do công ty hoặc công ty du lịch hỗ trợ xử lý; vui lòng không tự khai lại.','Chuẩn bị vé về, khách sạn và lịch trình để xuất trình khi cần.'],officialUrl:'https://imigresen-online.imi.gov.my/mdac/main'},
    {icon:'🧳',titleZh:'海關與攜帶物品',titleVi:'Hải quan và hành lý',itemsZh:['毒品、電子煙及受管制物品不得攜帶。','處方藥請保留原包裝、處方或醫師證明。','現金或可轉讓票據達申報門檻時，應主動向海關申報。'],itemsVi:['Không mang ma túy, thuốc lá điện tử hoặc hàng bị kiểm soát.','Thuốc kê đơn nên giữ bao bì gốc và đơn thuốc hoặc giấy bác sĩ.','Khai báo với hải quan khi tiền mặt hoặc công cụ chuyển nhượng đạt ngưỡng quy định.'],officialUrl:'https://www.customs.gov.my/en/individu/pengembara/travelers-guide'}
  ],
  baggage: [
    {icon:'📸',titleZh:'託運前拍照',titleVi:'Chụp ảnh trước khi ký gửi',bodyZh:'拍攝行李外觀、拉鍊、鎖具及重量，保留託運前狀態。',bodyVi:'Chụp vali, khóa kéo, ổ khóa và trọng lượng trước khi ký gửi.'},
    {icon:'🏷️',titleZh:'保留行李條',titleVi:'Giữ thẻ hành lý',bodyZh:'將行李條與登機證妥善保存至領回行李後。',bodyVi:'Giữ thẻ hành lý và thẻ lên máy bay đến khi nhận lại vali.'},
    {icon:'🔒',titleZh:'貴重物品隨身',titleVi:'Đồ quý giá mang theo người',bodyZh:'護照、現金、藥品、行動電源及電子設備請勿託運。',bodyVi:'Không ký gửi hộ chiếu, tiền, thuốc, pin dự phòng và thiết bị điện tử.'},
    {icon:'👀',titleZh:'領取時核對',titleVi:'Kiểm tra khi nhận',bodyZh:'確認行李外觀、姓名牌及重量是否一致，再離開轉盤區。',bodyVi:'Kiểm tra ngoại hình, thẻ tên và trọng lượng trước khi rời băng chuyền.'}
  ],
  communication: [
    {icon:'📶',titleZh:'網路與漫遊',titleVi:'Mạng và chuyển vùng',bodyZh:'出發前確認電信漫遊或 eSIM 啟用方式；抵達後先測試 LINE 群組與地圖。',bodyVi:'Kiểm tra roaming hoặc eSIM trước khi đi; sau khi đến hãy thử LINE và bản đồ.'},
    {icon:'🙏',titleZh:'服裝與禮儀',titleVi:'Trang phục và phép lịch sự',bodyZh:'參觀清真寺或宗教場所請穿著端莊，避免短褲、無袖及過度暴露。',bodyVi:'Khi tham quan nơi tôn giáo, mặc kín đáo, tránh quần ngắn và áo sát nách.'},
    {icon:'🌧️',titleZh:'熱帶天氣',titleVi:'Thời tiết nhiệt đới',bodyZh:'準備摺疊傘、防曬、薄外套及可快速乾燥的衣物。',bodyVi:'Mang ô gấp, chống nắng, áo khoác mỏng và quần áo nhanh khô.'},
    {icon:'🤝',titleZh:'團體行動',titleVi:'Di chuyển theo đoàn',bodyZh:'準時集合，不單獨離隊；臨時離開務必告知領隊或同房團員。',bodyVi:'Tập trung đúng giờ, không tự ý rời đoàn; phải báo trưởng đoàn hoặc bạn cùng phòng.'}
  ],
  emergency: [
    {icon:'🚨',titleZh:'馬來西亞緊急專線',titleVi:'Khẩn cấp Malaysia',number:'999',noteZh:'警察、救護與消防整合專線',noteVi:'Cảnh sát, cứu thương và cứu hỏa'},
    {icon:'☎️',titleZh:'台灣旅外急難救助',titleVi:'Hỗ trợ khẩn cấp Đài Loan',number:'+886-800-085-095',noteZh:'海外撥打',noteVi:'Gọi từ nước ngoài'},
    {icon:'📞',titleZh:'馬來西亞觀光諮詢',titleVi:'Thông tin du lịch Malaysia',number:'1300-88-5050',noteZh:'平日服務時段',noteVi:'Giờ làm việc ngày thường'}
  ],
  checklist: [
    {id:'passport',zh:'護照與護照影本',vi:'Hộ chiếu và bản sao'},
    {id:'mdac-info',zh:'確認已收到公司／旅行社的 MDAC 通知',vi:'Xác nhận đã nhận thông báo MDAC từ công ty / công ty du lịch'},
    {id:'ticket',zh:'確認航班與集合時間',vi:'Xác nhận chuyến bay và giờ tập trung'},
    {id:'insurance',zh:'旅平險與醫療保險資料',vi:'Bảo hiểm du lịch và y tế'},
    {id:'adapter',zh:'Type G 轉接頭與充電線',vi:'Đầu chuyển Type G và cáp sạc'},
    {id:'medicine',zh:'常備藥與處方證明',vi:'Thuốc cá nhân và đơn thuốc'},
    {id:'cash',zh:'馬幣現金與信用卡',vi:'Tiền MYR và thẻ tín dụng'},
    {id:'line',zh:'加入 LINE 群組並測試通知',vi:'Tham gia nhóm LINE và thử thông báo'}
  ]
});
