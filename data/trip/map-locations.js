export const MAP_LOCATIONS = Object.freeze([
  {id:'yingge',day:1,category:'transport',icon:'🚌',nameZh:'鶯歌集合地點',nameVi:'Điểm tập trung Yingge',lat:24.9613,lng:121.3429,addressZh:'新北市鶯歌區中湖里大湖路324號',addressVi:'Số 324 đường Dahu, khu Zhonghu, Yingge',query:'鶯歌區中湖里大湖路324號',noteZh:'9/20 07:00 集合、07:20 發車',noteVi:'20/9 tập trung 07:00, khởi hành 07:20'},
  {id:'tpe-t2',day:1,category:'transport',icon:'✈️',nameZh:'桃園國際機場第二航廈',nameVi:'Nhà ga 2 sân bay Đào Viên',lat:25.0777,lng:121.2328,addressZh:'桃園市大園區航站南路9號',addressVi:'Nhà ga 2, sân bay quốc tế Đào Viên',query:'桃園國際機場第二航廈',noteZh:'星宇航空3號櫃台前集合',noteVi:'Tập trung trước quầy số 3 STARLUX'},
  {id:'klia',day:1,category:'transport',icon:'🛬',nameZh:'吉隆坡國際機場 KLIA',nameVi:'Sân bay quốc tế Kuala Lumpur KLIA',lat:2.7456,lng:101.7072,addressZh:'Kuala Lumpur International Airport',addressVi:'Sân bay quốc tế Kuala Lumpur',query:'Kuala Lumpur International Airport',noteZh:'JX725 抵達／JX726 出發',noteVi:'JX725 đến / JX726 khởi hành'},
  {id:'lexis',day:1,category:'hotel',icon:'🌺',nameZh:'大紅花海上泳池渡假村',nameVi:'Lexis Hibiscus Port Dickson',lat:2.5529,lng:101.8436,addressZh:'12th Mile, Jalan Pantai, Pasir Panjang, Port Dickson',addressVi:'Port Dickson, Negeri Sembilan',query:'Lexis Hibiscus Port Dickson',noteZh:'Day 1–2 住宿・SKY BAR・自費活動',noteVi:'Khách sạn ngày 1–2・SKY BAR・hoạt động tự chọn'},
  {id:'sunway',day:3,category:'hotel',icon:'🏨',nameZh:'雙威偉樂酒店',nameVi:'Sunway Velocity Hotel',lat:3.1278,lng:101.7248,addressZh:'Lingkaran SV, Sunway Velocity, Kuala Lumpur',addressVi:'Sunway Velocity, Kuala Lumpur',query:'Sunway Velocity Hotel Kuala Lumpur',noteZh:'Day 3–4 住宿',noteVi:'Khách sạn ngày 3–4'},
  {id:'luge',day:3,category:'attraction',icon:'🛷',nameZh:'天際線斜坡滑車',nameVi:'Skyline Luge Kuala Lumpur',lat:3.2556,lng:101.5784,addressZh:'Gamuda Gardens, Rawang',addressVi:'Gamuda Gardens, Rawang',query:'Skyline Luge Kuala Lumpur',noteZh:'Day 3 體驗景點',noteVi:'Điểm trải nghiệm ngày 3'},
  {id:'beryls',day:3,category:'shopping',icon:'🍫',nameZh:'巧克力專賣店',nameVi:'Cửa hàng sô-cô-la',lat:3.1427,lng:101.7207,addressZh:'Kuala Lumpur',addressVi:'Kuala Lumpur',query:"Beryl's Chocolate Kingdom Kuala Lumpur",noteZh:'伴手禮採購',noteVi:'Mua quà sô-cô-la'},
  {id:'petronas',day:3,category:'attraction',icon:'🏙️',nameZh:'雙子星塔 KLCC',nameVi:'Tháp đôi Petronas KLCC',lat:3.1579,lng:101.7116,addressZh:'Kuala Lumpur City Centre',addressVi:'Trung tâm Kuala Lumpur',query:'Petronas Twin Towers',noteZh:'地標拍照景點',noteVi:'Địa danh chụp ảnh'},
  {id:'pavilion',day:3,category:'shopping',icon:'🛍️',nameZh:'Pavilion 購物中心',nameVi:'Trung tâm Pavilion',lat:3.1489,lng:101.7133,addressZh:'168 Jalan Bukit Bintang, Kuala Lumpur',addressVi:'Bukit Bintang, Kuala Lumpur',query:'Pavilion Kuala Lumpur',noteZh:'購物與自由活動',noteVi:'Mua sắm và tự do'},
  {id:'saloma',day:3,category:'attraction',icon:'🌉',nameZh:'莎羅馬天橋',nameVi:'Cầu Saloma Link',lat:3.1616,lng:101.7068,addressZh:'Kampung Baru, Kuala Lumpur',addressVi:'Kampung Baru, Kuala Lumpur',query:'Saloma Link Bridge',noteZh:'夜間燈光打卡',noteVi:'Chụp ảnh ánh sáng ban đêm'},
  {id:'batu',day:4,category:'attraction',icon:'🛕',nameZh:'黑風洞',nameVi:'Động Batu',lat:3.2379,lng:101.6840,addressZh:'Gombak, Selangor',addressVi:'Gombak, Selangor',query:'Batu Caves',noteZh:'彩虹階梯・宗教景點',noteVi:'Cầu thang cầu vồng・địa điểm tôn giáo'},
  {id:'genting',day:4,category:'attraction',icon:'🚡',nameZh:'雲頂纜車',nameVi:'Cáp treo Genting',lat:3.4139,lng:101.7923,addressZh:'Awana SkyCentral, Genting Highlands',addressVi:'Awana SkyCentral, Genting Highlands',query:'Awana SkyWay',noteZh:'搭乘纜車上雲頂',noteVi:'Đi cáp treo lên Genting'},
  {id:'kafeidian',day:4,category:'food',icon:'☕',nameZh:'源昌隆咖啡店 Kafei Dian',nameVi:'Quán Kafei Dian',lat:3.1415,lng:101.6990,addressZh:'16 Jalan Panggong, Kuala Lumpur',addressVi:'16 Jalan Panggong, Kuala Lumpur',query:'Kafei Dian Jalan Panggong',noteZh:'團費已含：海南茶、咖椰吐司、生熟蛋',noteVi:'Đã gồm: trà Hải Nam, bánh mì kaya, trứng lòng đào'},
  {id:'kwai',day:4,category:'attraction',icon:'🏮',nameZh:'吉隆坡老城・鬼仔巷',nameVi:'Phố cổ Kuala Lumpur・Kwai Chai Hong',lat:3.1418,lng:101.6986,addressZh:'Lorong Panggung, Kuala Lumpur',addressVi:'Lorong Panggung, Kuala Lumpur',query:'Kwai Chai Hong',noteZh:'老城散步與拍照',noteVi:'Dạo phố cổ và chụp ảnh'},
  {id:'alor',day:4,category:'food',icon:'🍢',nameZh:'亞羅街夜市',nameVi:'Chợ đêm Jalan Alor',lat:3.1466,lng:101.7084,addressZh:'Jalan Alor, Bukit Bintang',addressVi:'Jalan Alor, Bukit Bintang',query:'Jalan Alor Food Street',noteZh:'黃亞華小吃・晚餐',noteVi:'Wong Ah Wah・bữa tối'},
  {id:'putra',day:5,category:'attraction',icon:'🕌',nameZh:'粉紅清真寺',nameVi:'Thánh đường Hồng Putra',lat:2.9363,lng:101.6896,addressZh:'Persiaran Persekutuan, Putrajaya',addressVi:'Putrajaya',query:'Putra Mosque',noteZh:'布城代表景點',noteVi:'Biểu tượng Putrajaya'},
  {id:'perdana',day:5,category:'attraction',icon:'🏛️',nameZh:'首相署 Perdana Putra',nameVi:'Phủ Thủ tướng Perdana Putra',lat:2.9439,lng:101.6953,addressZh:'Federal Government Administrative Centre, Putrajaya',addressVi:'Trung tâm hành chính Putrajaya',query:'Perdana Putra',noteZh:'外觀拍照',noteVi:'Chụp ảnh bên ngoài'},
  {id:'putrajaya-lake',day:5,category:'attraction',icon:'🌊',nameZh:'布城湖',nameVi:'Hồ Putrajaya',lat:2.9297,lng:101.6902,addressZh:'Putrajaya Lake',addressVi:'Hồ Putrajaya',query:'Putrajaya Lake',noteZh:'湖景與城市景觀',noteVi:'Cảnh hồ và thành phố'},
  {id:'mitsui',day:5,category:'shopping',icon:'🏷️',nameZh:'三井 Outlet Park KLIA',nameVi:'Mitsui Outlet Park KLIA',lat:2.8447,lng:101.7180,addressZh:'Persiaran Komersial, KLIA, Sepang',addressVi:'KLIA, Sepang',query:'Mitsui Outlet Park KLIA Sepang',noteZh:'回程前自由購物',noteVi:'Mua sắm tự do trước chuyến về'}
]);

export const MAP_CATEGORIES = Object.freeze([
  {id:'all',icon:'🗺️',zh:'全部',vi:'Tất cả'},
  {id:'transport',icon:'✈️',zh:'交通',vi:'Di chuyển'},
  {id:'hotel',icon:'🏨',zh:'飯店',vi:'Khách sạn'},
  {id:'attraction',icon:'📍',zh:'景點',vi:'Điểm tham quan'},
  {id:'food',icon:'🍜',zh:'美食',vi:'Ẩm thực'},
  {id:'shopping',icon:'🛍️',zh:'購物',vi:'Mua sắm'}
]);
