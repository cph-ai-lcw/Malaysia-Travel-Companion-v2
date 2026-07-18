export const SHOPPING_ASSISTANT = Object.freeze({
  categories: [
    {id:'all',icon:'🛍️',zh:'全部',vi:'Tất cả'},
    {id:'food',icon:'🍫',zh:'食品伴手禮',vi:'Quà thực phẩm'},
    {id:'fashion',icon:'👕',zh:'服飾鞋類',vi:'Thời trang & giày dép'},
    {id:'care',icon:'🧴',zh:'生活保養',vi:'Chăm sóc cá nhân'},
    {id:'kids',icon:'🧒',zh:'兒童禮物',vi:'Quà cho trẻ em'}
  ],
  stores: [
    {id:'sunway',zh:'雙威偉樂城',vi:'Sunway Velocity Mall',noteZh:'Day 3 飯店旁，適合集中採買',noteVi:'Gần khách sạn Day 3, thuận tiện mua sắm tập trung'},
    {id:'pavilion',zh:'Pavilion 吉隆坡',vi:'Pavilion Kuala Lumpur',noteZh:'Day 3 市中心品牌與美食',noteVi:'Thương hiệu và ẩm thực trung tâm thành phố Day 3'},
    {id:'local',zh:'土產店／超市',vi:'Cửa hàng đặc sản / siêu thị',noteZh:'白咖啡、肉骨茶包、巧克力較方便比價',noteVi:'Thuận tiện so giá cà phê trắng, gia vị Bak Kut Teh và sô-cô-la'},
    {id:'mitsui',zh:'三井 Outlet',vi:'Mitsui Outlet Park',noteZh:'Day 5 最後補貨與品牌折扣',noteVi:'Mua bổ sung và săn giảm giá thương hiệu vào Day 5'}
  ],
  items: [
    {id:'beryls',category:'food',icon:'🍫',nameZh:'Beryl’s 巧克力',nameVi:'Sô-cô-la Beryl’s',min:15,max:45,unitZh:'盒／包',unitVi:'hộp / gói',stores:['local','sunway','pavilion'],bestZh:'大型超市常有組合包較划算',bestVi:'Siêu thị lớn thường có gói combo tiết kiệm hơn',tipZh:'留意可可含量、保存期限與是否含酒精餡。',tipVi:'Kiểm tra hàm lượng cacao, hạn dùng và nhân có cồn.'},
    {id:'white-coffee',category:'food',icon:'☕',nameZh:'馬來西亞白咖啡',nameVi:'Cà phê trắng Malaysia',min:15,max:35,unitZh:'袋',unitVi:'túi',stores:['local','sunway','mitsui'],bestZh:'超市多包裝選擇較多',bestVi:'Siêu thị có nhiều lựa chọn đóng gói',tipZh:'無糖、低糖、榛果口味請先看清標示。',tipVi:'Đọc kỹ nhãn: không đường, ít đường hoặc vị hạt phỉ.'},
    {id:'bakkutteh',category:'food',icon:'🍵',nameZh:'肉骨茶料理包',nameVi:'Gói gia vị Bak Kut Teh',min:10,max:30,unitZh:'盒／包',unitVi:'hộp / gói',stores:['local','sunway'],bestZh:'超市單包價通常較透明',bestVi:'Giá lẻ ở siêu thị thường minh bạch hơn',tipZh:'確認是否含藥材、胡椒比例與入境規定。',tipVi:'Kiểm tra thành phần thảo mộc, tiêu và quy định nhập cảnh.'},
    {id:'dodol',category:'food',icon:'🍬',nameZh:'Dodol 椰糖糕',nameVi:'Kẹo dừa Dodol',min:8,max:22,unitZh:'包',unitVi:'gói',stores:['local','pavilion'],bestZh:'土產店可試吃再購買',bestVi:'Có thể thử trước tại cửa hàng đặc sản',tipZh:'口感偏甜黏，少量包裝較適合分送。',tipVi:'Khá ngọt và dẻo; gói nhỏ tiện chia quà.'},
    {id:'fipper',category:'fashion',icon:'🩴',nameZh:'Fipper 天然橡膠拖鞋',nameVi:'Dép cao su tự nhiên Fipper',min:25,max:60,unitZh:'雙',unitVi:'đôi',stores:['sunway','mitsui'],bestZh:'Outlet 或促銷組合可能較便宜',bestVi:'Outlet hoặc combo khuyến mãi có thể rẻ hơn',tipZh:'尺寸偏差依款式不同，建議現場試穿。',tipVi:'Kích cỡ khác nhau theo mẫu, nên thử trực tiếp.'},
    {id:'batik',category:'fashion',icon:'👚',nameZh:'Batik 蠟染服飾',nameVi:'Trang phục Batik',min:35,max:120,unitZh:'件',unitVi:'món',stores:['pavilion','local'],bestZh:'市集款式多，商場品質較穩定',bestVi:'Chợ có nhiều mẫu; trung tâm thương mại ổn định chất lượng hơn',tipZh:'檢查染色、縫線及洗滌方式。',tipVi:'Kiểm tra màu nhuộm, đường may và cách giặt.'},
    {id:'kids-wear',category:'kids',icon:'🧒',nameZh:'兒童服飾／卡通上衣',nameVi:'Quần áo trẻ em / áo hoạt hình',min:30,max:90,unitZh:'件',unitVi:'món',stores:['sunway','mitsui'],bestZh:'三井 Outlet 適合找品牌折扣',bestVi:'Mitsui Outlet phù hợp tìm hàng hiệu giảm giá',tipZh:'先記錄小朋友身高與平常尺寸。',tipVi:'Ghi trước chiều cao và cỡ quần áo thường mặc.'},
    {id:'plush',category:'kids',icon:'🐯',nameZh:'馬來西亞主題玩偶',nameVi:'Thú bông chủ đề Malaysia',min:20,max:65,unitZh:'個',unitVi:'con',stores:['pavilion','sunway','mitsui'],bestZh:'紀念品店款式較有特色',bestVi:'Cửa hàng lưu niệm có mẫu đặc trưng hơn',tipZh:'大型玩偶請注意行李空間。',tipVi:'Lưu ý không gian hành lý với thú bông lớn.'},
    {id:'nutmeg-balm',category:'care',icon:'🧴',nameZh:'豆蔻膏／按摩膏',nameVi:'Dầu nhục đậu khấu / dầu xoa bóp',min:10,max:25,unitZh:'罐',unitVi:'hũ',stores:['local','sunway'],bestZh:'土產店常有多入組',bestVi:'Cửa hàng đặc sản thường có bộ nhiều hũ',tipZh:'敏感肌先少量測試，勿塗抹眼周。',tipVi:'Da nhạy cảm nên thử ít trước, tránh vùng mắt.'},
    {id:'handcream',category:'care',icon:'🧼',nameZh:'熱帶香氛護手霜／皂',nameVi:'Kem tay / xà phòng hương nhiệt đới',min:12,max:40,unitZh:'件',unitVi:'món',stores:['sunway','pavilion','mitsui'],bestZh:'商場藥妝與品牌店可比較容量',bestVi:'So sánh dung tích tại cửa hàng mỹ phẩm và thương hiệu',tipZh:'液體與膏狀品返程時注意隨身行李限制。',tipVi:'Chú ý giới hạn hành lý xách tay với chất lỏng và kem.'}
  ],
  defaultBudgetMYR: 300
});
