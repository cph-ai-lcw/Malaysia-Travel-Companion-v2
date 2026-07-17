export const ITINERARY = Object.freeze([
  {
    day: 1,
    date: "2026-09-20",
    weekdayZh: "星期日",
    weekdayVi: "Chủ nhật",
    titleZh: "桃園出發・入住大紅花渡假村",
    titleVi: "Khởi hành từ Đào Viên・Nhận phòng Lexis Hibiscus",
    summaryZh: "搭乘星宇航空前往吉隆坡，享用奶油螃蟹晚餐後入住海上泳池 Villa。",
    summaryVi: "Bay đến Kuala Lumpur, dùng bữa tối cua sốt bơ và nhận phòng villa hồ bơi trên biển.",
    flight: { no: "JX725", from: "TPE", to: "KUL", depart: "11:00", arrive: "15:55" },
    events: [
      { time: "出發", icon: "✈️", titleZh: "桃園國際機場集合・搭乘 JX725", titleVi: "Tập trung tại sân bay Đào Viên・Bay chuyến JX725", detailZh: "辦理登機、行李託運及出境手續。", detailVi: "Làm thủ tục lên máy bay, ký gửi hành lý và xuất cảnh。" },
      { time: "抵達後", icon: "🚌", titleZh: "吉隆坡機場前往波德申", titleVi: "Từ sân bay Kuala Lumpur đến Port Dickson", detailZh: "搭乘遊覽車前往大紅花海上泳池渡假村。", detailVi: "Di chuyển bằng xe du lịch đến Lexis Hibiscus。" },
      { time: "晚餐", icon: "🦀", titleZh: "奶油螃蟹風味餐", titleVi: "Bữa tối cua sốt bơ", detailZh: "享用馬來西亞風味晚餐。", detailVi: "Thưởng thức bữa tối đặc trưng Malaysia。" },
      { time: "入住", icon: "🌺", titleZh: "大紅花 Premium Pool Villa", titleVi: "Lexis Hibiscus Premium Pool Villa", detailZh: "入住海上泳池 Villa，展開渡假行程。", detailVi: "Nhận phòng villa hồ bơi trên biển。" },
      { time: "晚間", icon: "🍹", titleZh: "大紅花 Sky Bar", titleVi: "Sky Bar tại Lexis Hibiscus", detailZh: "每位團員包含一杯無酒精飲料。", detailVi: "Mỗi thành viên được bao gồm một ly thức uống không cồn。", status: "included" }
    ],
    meals: [
      { labelZh: "早餐", labelVi: "Bữa sáng", valueZh: "敬請自理", valueVi: "Tự túc", status: "self" },
      { labelZh: "午餐", labelVi: "Bữa trưa", valueZh: "機上餐食", valueVi: "Suất ăn trên máy bay", status: "included" },
      { labelZh: "晚餐", labelVi: "Bữa tối", valueZh: "奶油螃蟹風味餐", valueVi: "Cua sốt bơ", status: "included" }
    ],
    hotelZh: "大紅花海上泳池渡假村 Premium Pool Villa",
    hotelVi: "Lexis Hibiscus Premium Pool Villa"
  },
  {
    day: 2,
    date: "2026-09-21",
    weekdayZh: "星期一",
    weekdayVi: "Thứ hai",
    titleZh: "大紅花渡假村自由活動",
    titleVi: "Tự do tại Lexis Hibiscus",
    summaryZh: "全天自由享受飯店設施，並可依個人喜好參加水上、陸上休閒或 SPA。",
    summaryVi: "Tự do tận hưởng tiện ích resort và lựa chọn hoạt động biển, trên bờ hoặc spa。",
    events: [
      { time: "全天", icon: "🏖️", titleZh: "大紅花自由活動", titleVi: "Tự do tại Lexis Hibiscus", detailZh: "可使用私人泳池、沙灘、園區設施並自由拍照。", detailVi: "Tự do sử dụng hồ bơi riêng, bãi biển và tiện ích trong khu nghỉ dưỡng。" },
      { time: "午餐", icon: "🍽️", titleZh: "午餐補助 RM30", titleVi: "Hỗ trợ bữa trưa RM30", detailZh: "可依現場規定於指定餐廳或區域使用。", detailVi: "Sử dụng theo quy định tại nhà hàng hoặc khu vực chỉ định。", status: "included" },
      { time: "晚餐", icon: "🥂", titleZh: "飯店自助晚餐 RM100", titleVi: "Buffet tối tại khách sạn RM100", detailZh: "享用飯店自助式晚餐。", detailVi: "Thưởng thức buffet tối tại khách sạn。", status: "included" }
    ],
    resortGuide: {
      water: [
        { icon: "🍌", nameZh: "香蕉船", nameVi: "Phao chuối", en: "Banana Boat", price: "RM35–50／人", noteZh: "需多人成行", noteVi: "Cần đủ số người" },
        { icon: "🏍️", nameZh: "水上摩托車", nameVi: "Mô tô nước", en: "Jet Ski", price: "RM120–150／15分鐘", noteZh: "刺激好玩，有教練陪同", noteVi: "Có huấn luyện viên đi cùng" },
        { icon: "🚲", nameZh: "大腳鴨雙人水上腳踏車", nameVi: "Thuyền đạp nước đôi", en: "Water Paddle Boat", price: "RM40–60／30分鐘", noteZh: "適合親子與朋友", noteVi: "Phù hợp gia đình và bạn bè" },
        { icon: "🍩", nameZh: "極速飛艇／甜甜圈船", nameVi: "Thuyền phao donut", en: "Bandwagon / Donut Ride", price: "約 RM50／人", noteZh: "高速拖曳體驗", noteVi: "Trải nghiệm kéo tốc độ cao" },
        { icon: "🚤", nameZh: "海峽觀光遊艇船", nameVi: "Du thuyền ngắm eo biển", en: "Boat Cruise", price: "RM60–80／人", noteZh: "夕陽航程，通常需提前預約", noteVi: "Ngắm hoàng hôn, thường cần đặt trước" }
      ],
      land: [
        { icon: "🛴", nameZh: "九號平衡車／電動代步車", nameVi: "Xe điện cân bằng", en: "Segway / Yohoo Motor", price: "RM35–50／15–20分鐘", noteZh: "園區漫遊省力好玩", noteVi: "Thuận tiện tham quan khu resort" },
        { icon: "🚴", nameZh: "雙人／四人協力腳踏車", nameVi: "Xe đạp đôi／bốn người", en: "Bicycle Rental", price: "RM20–40／小時", noteZh: "適合拍照打卡", noteVi: "Rất thích hợp chụp ảnh" },
        { icon: "🏹", nameZh: "射箭體驗", nameVi: "Bắn cung", en: "Archery", price: "RM25–35／局", noteZh: "依現場箭數規定", noteVi: "Theo số mũi tên quy định" }
      ],
      indoor: [
        { icon: "🍢", nameZh: "Hibiscus Walk 美食街", nameVi: "Khu ẩm thực Hibiscus Walk", price: "約 RM10–25", noteZh: "沙嗲、拉茶、椰子水及馬來小吃", noteVi: "Satay, trà sữa kéo, nước dừa và món ăn Malaysia" },
        { icon: "💆", nameZh: "Lexis Wellness SPA", nameVi: "Lexis Wellness SPA", price: "約 RM180–350+", noteZh: "依療程而定，建議提前預約", noteVi: "Tùy liệu trình, nên đặt trước" }
      ],
      noticeZh: "以上為參考價格，實際內容、營業狀況及收費請依飯店現場公告為準；水上活動可能因天候暫停。",
      noticeVi: "Giá trên chỉ mang tính tham khảo; nội dung, giờ hoạt động và phí thực tế theo thông báo tại resort. Hoạt động trên biển có thể tạm dừng do thời tiết。"
    },
    meals: [
      { labelZh: "早餐", labelVi: "Bữa sáng", valueZh: "飯店自助早餐", valueVi: "Buffet sáng tại khách sạn", status: "included" },
      { labelZh: "午餐", labelVi: "Bữa trưa", valueZh: "RM30 餐費補助", valueVi: "Hỗ trợ RM30", status: "included" },
      { labelZh: "晚餐", labelVi: "Bữa tối", valueZh: "飯店自助晚餐 RM100", valueVi: "Buffet khách sạn RM100", status: "included" }
    ],
    hotelZh: "大紅花海上泳池渡假村 Premium Pool Villa",
    hotelVi: "Lexis Hibiscus Premium Pool Villa"
  },
  {
    day: 3,
    date: "2026-09-22",
    weekdayZh: "星期二",
    weekdayVi: "Thứ ba",
    titleZh: "波德申・吉隆坡市區精華",
    titleVi: "Port Dickson・Khám phá Kuala Lumpur",
    summaryZh: "從波德申前往吉隆坡，體驗天際線斜坡滑車、雙子星塔、Pavilion 與莎羅馬天橋。",
    summaryVi: "Từ Port Dickson đến Kuala Lumpur, trải nghiệm Skyline Luge, tháp đôi, Pavilion và cầu Saloma。",
    events: [
      { time: "上午", icon: "🚌", titleZh: "波德申前往吉隆坡", titleVi: "Từ Port Dickson đến Kuala Lumpur", detailZh: "早餐後退房，搭車前往吉隆坡。", detailVi: "Sau bữa sáng trả phòng và đi Kuala Lumpur。" },
      { time: "午餐", icon: "🍲", titleZh: "肉骨茶風味餐", titleVi: "Cơm Bak Kut Teh", detailZh: "品嚐馬來西亞經典肉骨茶。", detailVi: "Thưởng thức món Bak Kut Teh đặc trưng Malaysia。", status: "included" },
      { time: "下午", icon: "🛷", titleZh: "天際線斜坡滑車", titleVi: "Skyline Luge", detailZh: "體驗斜坡滑車活動。", detailVi: "Trải nghiệm xe trượt dốc Skyline Luge。" },
      { time: "購物", icon: "🍫", titleZh: "巧克力專賣店", titleVi: "Cửa hàng chocolate", detailZh: "選購馬來西亞特色巧克力與伴手禮。", detailVi: "Mua chocolate Malaysia và quà lưu niệm。" },
      { time: "市區", icon: "🏙️", titleZh: "雙子星塔・全冷氣空橋・Pavilion", titleVi: "Tháp đôi・Cầu đi bộ có điều hòa・Pavilion", detailZh: "漫步吉隆坡市中心地標與購物商圈。", detailVi: "Khám phá trung tâm Kuala Lumpur và khu mua sắm。" },
      { time: "夜景", icon: "🌉", titleZh: "莎羅馬天橋 Saloma Link", titleVi: "Cầu Saloma Link", detailZh: "欣賞燈光夜景並拍照。", detailVi: "Ngắm đèn đêm và chụp ảnh。" }
    ],
    meals: [
      { labelZh: "早餐", labelVi: "Bữa sáng", valueZh: "飯店自助早餐", valueVi: "Buffet sáng tại khách sạn", status: "included" },
      { labelZh: "午餐", labelVi: "Bữa trưa", valueZh: "肉骨茶風味餐", valueVi: "Bak Kut Teh", status: "included" },
      { labelZh: "晚餐", labelVi: "Bữa tối", valueZh: "依行程安排／自理", valueVi: "Theo chương trình／Tự túc", status: "self" }
    ],
    hotelZh: "Sunway Velocity Hotel Kuala Lumpur",
    hotelVi: "Sunway Velocity Hotel Kuala Lumpur"
  },
  {
    day: 4,
    date: "2026-09-23",
    weekdayZh: "星期三",
    weekdayVi: "Thứ tư",
    titleZh: "黑風洞・雲頂・老城・亞羅街",
    titleVi: "Động Batu・Genting・Phố cổ・Jalan Alor",
    summaryZh: "參觀黑風洞、搭乘雲頂纜車，於源昌隆享用已含下午茶，晚間前往亞羅街。",
    summaryVi: "Tham quan động Batu, đi cáp treo Genting, dùng trà chiều đã bao gồm tại Kafei Dian và đến Jalan Alor。",
    events: [
      { time: "上午", icon: "🛍️", titleZh: "土產店", titleVi: "Cửa hàng đặc sản", detailZh: "選購馬來西亞特色土產與伴手禮。", detailVi: "Mua đặc sản và quà lưu niệm Malaysia。" },
      { time: "上午", icon: "🛕", titleZh: "黑風洞", titleVi: "Động Batu", detailZh: "參觀彩虹階梯與印度教聖地。", detailVi: "Tham quan cầu thang cầu vồng và thánh địa Hindu。" },
      { time: "中午", icon: "🍤", titleZh: "虹姊鐵板海鮮", titleVi: "Hải sản bàn sắt", detailZh: "享用鐵板海鮮午餐。", detailVi: "Thưởng thức bữa trưa hải sản bàn sắt。", status: "included" },
      { time: "下午", icon: "🚡", titleZh: "雲頂纜車", titleVi: "Cáp treo Genting", detailZh: "搭乘纜車欣賞高原與熱帶雨林景色。", detailVi: "Ngắm cao nguyên và rừng nhiệt đới từ cáp treo。" },
      { time: "下午茶", icon: "☕", titleZh: "源昌隆咖啡店 Kafei Dian", titleVi: "Kafei Dian", detailZh: "海南茶＋咖椰吐司＋生熟蛋下午茶，費用已包含。", detailVi: "Trà Hải Nam, bánh mì kaya và trứng lòng đào; đã bao gồm。", status: "included" },
      { time: "傍晚", icon: "🏘️", titleZh: "老城漫步", titleVi: "Dạo phố cổ", detailZh: "感受吉隆坡老城區的歷史與文青氛圍。", detailVi: "Khám phá lịch sử và không khí nghệ thuật của khu phố cổ。" },
      { time: "晚間", icon: "🍢", titleZh: "亞羅街・黃亞華晚餐", titleVi: "Jalan Alor・Bữa tối Wong Ah Wah", detailZh: "體驗夜市美食與熱鬧街景。", detailVi: "Trải nghiệm ẩm thực đêm và phố xá sôi động。", status: "included" }
    ],
    meals: [
      { labelZh: "早餐", labelVi: "Bữa sáng", valueZh: "飯店自助早餐", valueVi: "Buffet sáng tại khách sạn", status: "included" },
      { labelZh: "午餐", labelVi: "Bữa trưa", valueZh: "虹姊鐵板海鮮", valueVi: "Hải sản bàn sắt", status: "included" },
      { labelZh: "下午茶", labelVi: "Trà chiều", valueZh: "海南茶＋咖椰吐司＋生熟蛋", valueVi: "Trà Hải Nam＋bánh mì kaya＋trứng lòng đào", status: "included" },
      { labelZh: "晚餐", labelVi: "Bữa tối", valueZh: "黃亞華小吃店", valueVi: "Wong Ah Wah", status: "included" }
    ],
    hotelZh: "Sunway Velocity Hotel Kuala Lumpur",
    hotelVi: "Sunway Velocity Hotel Kuala Lumpur"
  },
  {
    day: 5,
    date: "2026-09-24",
    weekdayZh: "星期四",
    weekdayVi: "Thứ năm",
    titleZh: "布城・三井 Outlet・返回台灣",
    titleVi: "Putrajaya・Mitsui Outlet・Trở về Đài Loan",
    summaryZh: "參觀布城湖、粉紅清真寺與行政建築，前往三井 Outlet 後搭乘 JX726 返回桃園。",
    summaryVi: "Tham quan hồ Putrajaya, thánh đường Hồng và khu hành chính, mua sắm tại Mitsui Outlet rồi bay JX726 về Đào Viên。",
    flight: { no: "JX726", from: "KUL", to: "TPE", depart: "17:20", arrive: "22:15" },
    events: [
      { time: "上午", icon: "🕌", titleZh: "布城・粉紅清真寺", titleVi: "Putrajaya・Thánh đường Hồng", detailZh: "參觀布城代表性地標。", detailVi: "Tham quan địa danh tiêu biểu Putrajaya。" },
      { time: "上午", icon: "🌊", titleZh: "布城湖・首相署・首相府", titleVi: "Hồ Putrajaya・Văn phòng và Phủ Thủ tướng", detailZh: "欣賞行政首都建築群與湖景。", detailVi: "Ngắm kiến trúc hành chính và cảnh hồ。" },
      { time: "下午", icon: "🛍️", titleZh: "三井 Outlet", titleVi: "Mitsui Outlet", detailZh: "登機前最後購物。", detailVi: "Mua sắm lần cuối trước khi ra sân bay。" },
      { time: "17:20", icon: "✈️", titleZh: "搭乘 JX726 返回桃園", titleVi: "Bay JX726 về Đào Viên", detailZh: "預計 22:15 抵達桃園。", detailVi: "Dự kiến đến Đào Viên lúc 22:15。" }
    ],
    meals: [
      { labelZh: "早餐", labelVi: "Bữa sáng", valueZh: "飯店自助早餐", valueVi: "Buffet sáng tại khách sạn", status: "included" },
      { labelZh: "午餐", labelVi: "Bữa trưa", valueZh: "依行程安排", valueVi: "Theo chương trình", status: "included" },
      { labelZh: "晚餐", labelVi: "Bữa tối", valueZh: "機上餐食", valueVi: "Suất ăn trên máy bay", status: "included" }
    ],
    hotelZh: "溫暖的家",
    hotelVi: "Trở về nhà"
  }
]);
