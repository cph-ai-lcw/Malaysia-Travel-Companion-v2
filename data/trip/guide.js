export const DIGITAL_GUIDE = Object.freeze({
  meta: {
    version: '3.0.0',
    module: 'Milestone 3-1',
    updatedAt: '2026-07-18',
    disclaimerZh: '入境、海關及航空規定可能隨時調整，請以出發前旅行社與官方最新公告為準。',
    disclaimerVi: 'Quy định nhập cảnh, hải quan và hàng không có thể thay đổi. Vui lòng kiểm tra thông báo mới nhất trước khi khởi hành.'
  },
  categories: [
    { id:'departure', icon:'✈️', titleZh:'出發與返程', titleVi:'Khởi hành và trở về', summaryZh:'集合、接送、航班與機場資訊', summaryVi:'Tập trung, đưa đón, chuyến bay và sân bay' },
    { id:'entry', icon:'🛂', titleZh:'入境與護照', titleVi:'Nhập cảnh và hộ chiếu', summaryZh:'MDAC、護照效期與通關文件', summaryVi:'MDAC, hạn hộ chiếu và giấy tờ nhập cảnh' },
    { id:'hotels', icon:'🏨', titleZh:'飯店資訊', titleVi:'Thông tin khách sạn', summaryZh:'住宿、電話與入住提醒', summaryVi:'Nơi ở, điện thoại và lưu ý nhận phòng' },
    { id:'money', icon:'💰', titleZh:'貨幣與付款', titleVi:'Tiền tệ và thanh toán', summaryZh:'馬幣、刷卡、現金與申報', summaryVi:'Ringgit, thẻ, tiền mặt và khai báo' },
    { id:'power', icon:'🔌', titleZh:'插座與充電', titleVi:'Ổ cắm và sạc', summaryZh:'Type G、電壓與行動電源', summaryVi:'Type G, điện áp và pin dự phòng' },
    { id:'internet', icon:'📶', titleZh:'網路與通訊', titleVi:'Internet và liên lạc', summaryZh:'eSIM、漫遊與飯店 Wi-Fi', summaryVi:'eSIM, chuyển vùng và Wi-Fi khách sạn' },
    { id:'culture', icon:'🕌', titleZh:'文化與禮儀', titleVi:'Văn hóa và phép lịch sự', summaryZh:'清真寺、服裝與日常禮貌', summaryVi:'Nhà thờ Hồi giáo, trang phục và ứng xử' },
    { id:'customs', icon:'🚫', titleZh:'海關與禁限帶', titleVi:'Hải quan và hàng hóa hạn chế', summaryZh:'菸品、電子煙、藥品與現金', summaryVi:'Thuốc lá, vape, thuốc và tiền mặt' },
    { id:'emergency', icon:'☎️', titleZh:'緊急聯絡', titleVi:'Liên hệ khẩn cấp', summaryZh:'領隊、旅行社、飯店與求助電話', summaryVi:'Trưởng đoàn, công ty, khách sạn và cứu hộ' },
    { id:'phrases', icon:'💬', titleZh:'常用會話', titleVi:'Câu giao tiếp thường dùng', summaryZh:'越南文、英文與馬來文短句', summaryVi:'Câu tiếng Việt, Anh và Mã Lai' },
    { id:'checklist', icon:'✅', titleZh:'出發前確認', titleVi:'Kiểm tra trước khi đi', summaryZh:'護照、衣物、雨具與隨身物品', summaryVi:'Hộ chiếu, quần áo, ô và đồ cá nhân' }
  ],
  sections: {
    departure: {
      heroZh:'重要時間請設定手機提醒，團體行程務必準時。', heroVi:'Hãy đặt nhắc nhở trên điện thoại và luôn đúng giờ.',
      cards:[
        { icon:'🚌', titleZh:'9/20 送機', titleVi:'Đưa ra sân bay 20/9', linesZh:['07:00｜鶯歌區中湖里大湖路324號集合','07:20｜遊覽車發車','08:00｜桃園機場第二航廈，星宇航空3號櫃台前集合','11:15｜JX725 起飛，16:10 抵達吉隆坡'], linesVi:['07:00｜Tập trung tại số 324, đường Dahu, Yingge','07:20｜Xe khởi hành','08:00｜Tập trung trước quầy số 3 STARLUX, Nhà ga 2 sân bay Đào Viên','11:15｜JX725 cất cánh, 16:10 đến Kuala Lumpur'] },
        { icon:'🛬', titleZh:'9/24 接機', titleVi:'Đón sân bay 24/9', linesZh:['17:20｜JX726 吉隆坡起飛','22:15｜抵達桃園機場','23:15｜桃園機場集合','23:30｜遊覽車發車，返回鶯歌區中湖里大湖路324號'], linesVi:['17:20｜JX726 rời Kuala Lumpur','22:15｜Đến sân bay Đào Viên','23:15｜Tập trung tại sân bay','23:30｜Xe khởi hành về số 324, đường Dahu, Yingge'] }
      ]
    },
    entry: {
      heroZh:'外籍旅客應於抵達日前3天內完成 Malaysia Digital Arrival Card（MDAC）；請使用馬來西亞移民局官方網站。',
      heroVi:'Khách nước ngoài cần hoàn tất Malaysia Digital Arrival Card (MDAC) trong vòng 3 ngày trước khi đến; chỉ dùng trang chính thức của Cục Di trú Malaysia.',
      cards:[
        { icon:'📘', titleZh:'護照與文件', titleVi:'Hộ chiếu và giấy tờ', linesZh:['護照效期建議自入境日起至少6個月','護照內保留足夠空白頁','隨身備妥來回機票、飯店資料及必要財力證明','護照、登機證及重要文件請勿放入託運行李'], linesVi:['Hộ chiếu nên còn hạn ít nhất 6 tháng từ ngày nhập cảnh','Giữ đủ trang trống trong hộ chiếu','Mang theo vé khứ hồi, thông tin khách sạn và chứng minh tài chính khi cần','Không để hộ chiếu, thẻ lên máy bay hoặc giấy tờ quan trọng trong hành lý ký gửi'] },
        { icon:'📱', titleZh:'MDAC 填寫提醒', titleVi:'Lưu ý khai MDAC', linesZh:['旅程資料須落在提交日起3天內','請確認姓名、護照號碼、航班及住宿地址正確','只使用官方網址，避免付費或假冒網站','完成後保存確認畫面或電子郵件'], linesVi:['Ngày đến phải nằm trong vòng 3 ngày kể từ ngày gửi','Kiểm tra đúng tên, số hộ chiếu, chuyến bay và địa chỉ lưu trú','Chỉ sử dụng trang chính thức, tránh trang giả hoặc thu phí','Lưu ảnh xác nhận hoặc email sau khi hoàn tất'], link:'https://imigresen-online.imi.gov.my/mdac/main', linkLabelZh:'開啟 MDAC 官方網站', linkLabelVi:'Mở trang MDAC chính thức' }
      ]
    },
    hotels: {
      heroZh:'入住時以領隊現場分配的正式房號為準。', heroVi:'Số phòng chính thức theo phân bổ của trưởng đoàn khi nhận phòng.',
      cards:[
        { icon:'🌺', titleZh:'大紅花海上泳池渡假村', titleVi:'Lexis Hibiscus Port Dickson', linesZh:['住宿：9/20、9/21','英文：Lexis Hibiscus Port Dickson','電話：+60 6-660 2626','SKY BAR 每人一杯無酒精飲料已包含於團費','私人泳池及水上活動請遵守飯店安全規定'], linesVi:['Lưu trú: 20/9 và 21/9','Tên tiếng Anh: Lexis Hibiscus Port Dickson','Điện thoại: +60 6-660 2626','Mỗi người có 1 ly nước không cồn tại SKY BAR, đã bao gồm','Tuân thủ quy định an toàn tại hồ bơi riêng và khu hoạt động biển'] },
        { icon:'🏙️', titleZh:'雙威偉樂酒店', titleVi:'Sunway Velocity Hotel', linesZh:['住宿：9/22、9/23','英文：Sunway Velocity Hotel','電話：+60 3-2726 3988','鄰近 Sunway Velocity Mall','離房前請確認護照、房卡、充電器及個人物品'], linesVi:['Lưu trú: 22/9 và 23/9','Tên tiếng Anh: Sunway Velocity Hotel','Điện thoại: +60 3-2726 3988','Gần Sunway Velocity Mall','Trước khi rời phòng hãy kiểm tra hộ chiếu, thẻ phòng, sạc và đồ cá nhân'] }
      ]
    },
    money: {
      heroZh:'馬來西亞使用令吉（MYR），一般標示為 RM。即時匯率功能將於後續模組接入。', heroVi:'Malaysia sử dụng Ringgit (MYR), thường ký hiệu RM. Tỷ giá trực tiếp sẽ được bổ sung ở mô-đun sau.',
      cards:[
        { icon:'💵', titleZh:'付款建議', titleVi:'Gợi ý thanh toán', linesZh:['小額消費、夜市及部分攤商建議使用馬幣現金','商場、飯店及大型餐廳多可使用 Visa／Mastercard','刷卡前確認幣別為 MYR，避免不必要的動態換匯','現金與信用卡分開保管'], linesVi:['Nên dùng tiền mặt MYR cho khoản nhỏ, chợ đêm và một số quầy hàng','Trung tâm thương mại, khách sạn và nhà hàng lớn thường nhận Visa/Mastercard','Kiểm tra giao dịch bằng MYR trước khi quẹt thẻ','Cất tiền mặt và thẻ ở các vị trí khác nhau'] },
        { icon:'📋', titleZh:'現金申報', titleVi:'Khai báo tiền mặt', linesZh:['攜帶超過等值 USD10,000 的現金或可轉讓票據須向海關申報','大量馬幣攜入或攜出亦可能受限制','購買高價物品請保留收據','實際規定以馬來西亞海關最新公告為準'], linesVi:['Tiền mặt hoặc công cụ chuyển nhượng trên mức tương đương USD10.000 phải khai báo hải quan','Mang lượng lớn Ringgit vào/ra có thể bị hạn chế','Giữ hóa đơn khi mua hàng giá trị cao','Quy định thực tế theo thông báo mới nhất của Hải quan Malaysia'], link:'https://www.customs.gov.my/en/individu/pengembara/travelers-guide', linkLabelZh:'查看馬來西亞海關旅客指南', linkLabelVi:'Xem hướng dẫn du khách của Hải quan Malaysia' }
      ]
    },
    power: {
      heroZh:'馬來西亞常用 Type G 英式三方腳插座，建議每人攜帶萬國轉接頭。', heroVi:'Malaysia thường dùng ổ cắm Type G ba chấu kiểu Anh; nên mang bộ chuyển đổi đa năng.',
      cards:[
        { icon:'🔌', titleZh:'用電提醒', titleVi:'Lưu ý sử dụng điện', linesZh:['常見供電為約230V／50Hz','確認吹風機、電棒等電器支援220–240V','USB充電器多支援100–240V，但仍請查看標示','轉接頭只改變插頭形狀，不會轉換電壓'], linesVi:['Nguồn điện thường khoảng 230V / 50Hz','Kiểm tra máy sấy, máy uốn tóc có hỗ trợ 220–240V','Nhiều bộ sạc USB hỗ trợ 100–240V, nhưng vẫn cần xem nhãn','Đầu chuyển chỉ đổi hình dạng phích cắm, không đổi điện áp'] },
        { icon:'🔋', titleZh:'行動電源', titleVi:'Pin dự phòng', linesZh:['行動電源必須放隨身行李，不可託運','容量標示需清楚可辨識','機上使用與充電依航空公司規定','請勿攜帶膨脹、破損或異常發熱的電池'], linesVi:['Pin dự phòng phải để trong hành lý xách tay, không ký gửi','Thông tin dung lượng phải rõ ràng','Việc sử dụng và sạc trên máy bay theo quy định hãng hàng không','Không mang pin phồng, hỏng hoặc nóng bất thường'] }
      ]
    },
    internet: {
      heroZh:'可選 eSIM、原門號漫遊或實體 SIM；設定前先確認手機是否支援。', heroVi:'Có thể dùng eSIM, roaming hoặc SIM vật lý; hãy kiểm tra điện thoại hỗ trợ trước.',
      cards:[
        { icon:'📲', titleZh:'eSIM／漫遊', titleVi:'eSIM / roaming', linesZh:['出發前下載並安裝 eSIM，抵達後再啟用數據方案','保留原門號接收簡訊時，注意關閉原門號數據漫遊','建議將離線地圖、電子機票及飯店資訊先存入手機','團體集合期間請保持手機可聯絡'], linesVi:['Tải và cài eSIM trước khi đi, chỉ bật gói dữ liệu khi đến nơi','Nếu giữ SIM gốc để nhận SMS, hãy tắt dữ liệu roaming của SIM gốc','Lưu bản đồ offline, vé điện tử và thông tin khách sạn vào điện thoại','Giữ điện thoại liên lạc được trong thời gian tập trung'] },
        { icon:'🛜', titleZh:'Wi-Fi 安全', titleVi:'An toàn Wi-Fi', linesZh:['飯店 Wi-Fi 適合一般瀏覽與通訊','公共 Wi-Fi 下避免登入重要金融帳戶','不使用時可關閉自動連線公開網路','重要照片與文件建議每日備份'], linesVi:['Wi-Fi khách sạn phù hợp cho duyệt web và liên lạc thông thường','Tránh đăng nhập tài khoản tài chính quan trọng trên Wi-Fi công cộng','Tắt tự động kết nối mạng công cộng khi không dùng','Nên sao lưu ảnh và giấy tờ quan trọng mỗi ngày'] }
      ]
    },
    culture: {
      heroZh:'尊重多元宗教與族群文化，公共場合保持禮貌並遵從現場指示。', heroVi:'Tôn trọng tôn giáo và văn hóa đa dạng, giữ lịch sự và làm theo hướng dẫn tại chỗ.',
      cards:[
        { icon:'🕌', titleZh:'清真寺參觀', titleVi:'Tham quan nhà thờ Hồi giáo', linesZh:['穿著端莊，肩膀與膝蓋應適當遮蔽','依現場規定脫鞋或穿著提供的長袍／頭巾','禮拜區保持安靜，不打擾正在祈禱的人','未經允許勿拍攝他人'], linesVi:['Ăn mặc kín đáo, che vai và đầu gối phù hợp','Cởi giày hoặc mặc áo choàng/khăn trùm theo yêu cầu tại chỗ','Giữ yên lặng tại khu cầu nguyện','Không chụp người khác khi chưa được phép'] },
        { icon:'🤝', titleZh:'日常禮貌', titleVi:'Phép lịch sự hằng ngày', linesZh:['遞接物品可優先使用右手或雙手','避免隨意觸碰他人頭部','尊重禁菸區、排隊與公共環境','遇到不了解的規定先詢問領隊或工作人員'], linesVi:['Ưu tiên dùng tay phải hoặc hai tay khi đưa nhận đồ','Tránh tùy ý chạm vào đầu người khác','Tôn trọng khu cấm hút thuốc, xếp hàng và nơi công cộng','Khi không rõ quy định, hãy hỏi trưởng đoàn hoặc nhân viên'] }
      ]
    },
    customs: {
      heroZh:'不要替陌生人攜帶物品；所有行李內容均由本人負責。', heroVi:'Không mang đồ hộ người lạ; mỗi người tự chịu trách nhiệm về hành lý của mình.',
      cards:[
        { icon:'🚭', titleZh:'菸品與電子煙', titleVi:'Thuốc lá và vape', linesZh:['香菸、菸草產品、電子煙及相關液體不屬一般免稅品範圍','攜帶入境可能需要申報及課稅','飯店房內多禁止吸菸，違規罰款由個人負擔','最安全做法是不攜帶電子煙與相關用品'], linesVi:['Thuốc lá, sản phẩm thuốc lá, vape và dung dịch liên quan không thuộc diện miễn thuế thông thường','Mang vào có thể phải khai báo và nộp thuế','Nhiều khách sạn cấm hút thuốc trong phòng; người vi phạm tự chịu tiền phạt','An toàn nhất là không mang vape và phụ kiện liên quan'] },
        { icon:'💊', titleZh:'藥品與其他物品', titleVi:'Thuốc và hàng hóa khác', linesZh:['個人常用藥保留原包裝，處方藥建議備妥處方或醫師證明','勿攜帶毒品、武器、爆裂物及來路不明物品','食品、動植物及高價商品可能有申報或檢疫要求','不確定時應主動走申報通道並詢問海關'], linesVi:['Giữ thuốc cá nhân trong bao bì gốc; thuốc kê đơn nên có đơn hoặc giấy bác sĩ','Không mang ma túy, vũ khí, chất nổ hoặc đồ không rõ nguồn gốc','Thực phẩm, động thực vật và hàng giá trị cao có thể cần khai báo/kiểm dịch','Khi không chắc, hãy chủ động khai báo và hỏi hải quan'], link:'https://www.customs.gov.my/en/individu/pengembara/prohibition-of-import-and-export', linkLabelZh:'查看禁限帶官方說明', linkLabelVi:'Xem quy định hàng cấm/hạn chế chính thức' }
      ]
    },
    emergency: {
      heroZh:'緊急時先確保自身安全，再聯絡領隊或撥打當地求助電話。', heroVi:'Khi khẩn cấp, ưu tiên an toàn bản thân rồi liên hệ trưởng đoàn hoặc số cứu hộ địa phương.',
      cards:[
        { icon:'🧑‍✈️', titleZh:'領隊與旅遊聯絡', titleVi:'Trưởng đoàn và liên hệ tour', linesZh:['領隊：簡政義 Jason','領隊電話：0988-825-256','機場服務專線：0928-505-622','桃園機場旅客服務中心：(03) 398-3274'], linesVi:['Trưởng đoàn: Jian Zheng Yi (Jason)','Điện thoại trưởng đoàn: 0988-825-256','Dịch vụ sân bay: 0928-505-622','Trung tâm dịch vụ sân bay Đào Viên: (03) 398-3274'] },
        { icon:'🚑', titleZh:'馬來西亞緊急求助', titleVi:'Cứu hộ khẩn cấp tại Malaysia', linesZh:['警察／救護：999','火災求助：994','告知所在位置、姓名、狀況及聯絡方式','無法溝通時請出示飯店卡片或本手冊飯店資訊'], linesVi:['Cảnh sát / cứu thương: 999','Hỏa hoạn: 994','Nói rõ vị trí, tên, tình trạng và cách liên lạc','Nếu khó giao tiếp, hãy đưa thẻ khách sạn hoặc thông tin khách sạn trong sổ tay này'] }
      ]
    },
    phrases: {
      heroZh:'常用短句可直接點選放大，方便出示給店員或工作人員。', heroVi:'Có thể mở to câu thông dụng để đưa cho nhân viên xem.',
      phrases:[
        { zh:'你好', vi:'Xin chào', ms:'Hai / Selamat sejahtera', en:'Hello' },
        { zh:'謝謝', vi:'Cảm ơn', ms:'Terima kasih', en:'Thank you' },
        { zh:'不好意思／對不起', vi:'Xin lỗi', ms:'Maaf', en:'Excuse me / Sorry' },
        { zh:'請問多少錢？', vi:'Bao nhiêu tiền?', ms:'Berapa harganya?', en:'How much is it?' },
        { zh:'廁所在哪裡？', vi:'Nhà vệ sinh ở đâu?', ms:'Tandas di mana?', en:'Where is the restroom?' },
        { zh:'我不要辣', vi:'Tôi không ăn cay', ms:'Saya tidak mahu pedas', en:'No spicy, please' },
        { zh:'請幫我叫計程車', vi:'Vui lòng gọi taxi giúp tôi', ms:'Tolong panggil teksi', en:'Please call a taxi for me' },
        { zh:'我和團體走散了', vi:'Tôi bị lạc đoàn', ms:'Saya terpisah daripada kumpulan', en:'I am separated from my group' }
      ]
    },
    checklist: {
      heroZh:'出門前再次確認，重要物品一律放隨身包。', heroVi:'Kiểm tra lại trước khi đi; vật quan trọng luôn để trong túi xách tay.',
      checks:[
        {id:'passport', zh:'護照與必要入境資料', vi:'Hộ chiếu và giấy tờ nhập cảnh'},
        {id:'ticket', zh:'電子機票／航班資料', vi:'Vé điện tử / thông tin chuyến bay'},
        {id:'money', zh:'馬幣現金、信用卡', vi:'Tiền MYR và thẻ tín dụng'},
        {id:'phone', zh:'手機、充電線、Type G 轉接頭', vi:'Điện thoại, cáp sạc và đầu chuyển Type G'},
        {id:'powerbank', zh:'行動電源放隨身行李', vi:'Pin dự phòng để trong hành lý xách tay'},
        {id:'rain', zh:'摺疊傘或輕便雨衣', vi:'Ô gấp hoặc áo mưa nhẹ'},
        {id:'clothes', zh:'透氣衣物、薄外套、泳衣', vi:'Quần áo thoáng, áo khoác mỏng, đồ bơi'},
        {id:'care', zh:'防曬、盥洗用品、個人藥品', vi:'Kem chống nắng, đồ vệ sinh, thuốc cá nhân'},
        {id:'luggage', zh:'行李外觀與重量已拍照留存', vi:'Đã chụp ảnh hành lý và trọng lượng'},
        {id:'contact', zh:'領隊與家人聯絡方式已保存', vi:'Đã lưu liên hệ trưởng đoàn và gia đình'}
      ]
    }
  },
  futureModules: [
    { id:'weather', icon:'🌦️', titleZh:'即時天氣', titleVi:'Thời tiết trực tiếp', status:'Milestone 3-2' },
    { id:'currency', icon:'💱', titleZh:'即時匯率', titleVi:'Tỷ giá trực tiếp', status:'Milestone 3-3' },
    { id:'assistant', icon:'🤖', titleZh:'AI 旅遊助手', titleVi:'Trợ lý du lịch AI', status:'Milestone 3-4' }
  ]
});
