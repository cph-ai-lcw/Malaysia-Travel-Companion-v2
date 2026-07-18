export const FOOD_ASSISTANT = Object.freeze({
  defaultBudgetMYR: 180,
  categories:[
    {id:'all',icon:'🍽️',zh:'全部',vi:'Tất cả'},
    {id:'meal',icon:'🍜',zh:'正餐',vi:'Món chính'},
    {id:'snack',icon:'🍢',zh:'小吃',vi:'Ăn vặt'},
    {id:'drink',icon:'🥤',zh:'飲品',vi:'Đồ uống'},
    {id:'dessert',icon:'🍧',zh:'甜點',vi:'Tráng miệng'}
  ],
  locations:[
    {id:'all',zh:'全部地點',vi:'Tất cả địa điểm'},
    {id:'port-dickson',zh:'波德申／大紅花',vi:'Port Dickson / Lexis'},
    {id:'kuala-lumpur',zh:'吉隆坡市區',vi:'Kuala Lumpur'},
    {id:'jalan-alor',zh:'亞羅街夜市',vi:'Phố ẩm thực Jalan Alor'},
    {id:'genting',zh:'雲頂／黑風洞',vi:'Genting / Batu Caves'},
    {id:'putrajaya',zh:'布城／機場周邊',vi:'Putrajaya / gần sân bay'}
  ],
  items:[
    {id:'butter-crab',icon:'🦀',category:'meal',day:1,location:'kuala-lumpur',nameZh:'奶油螃蟹',nameVi:'Cua sốt bơ',priceMin:45,priceMax:90,spice:0,halal:false,vegetarian:false,included:true,placeZh:'第一天團體晚餐',placeVi:'Bữa tối đoàn ngày 1',tipZh:'醬汁濃郁，適合配飯；海鮮過敏者請先告知領隊。',tipVi:'Sốt đậm vị, hợp ăn với cơm; người dị ứng hải sản cần báo trước.'},
    {id:'bak-kut-teh',icon:'🍲',category:'meal',day:3,location:'kuala-lumpur',nameZh:'肉骨茶',nameVi:'Bak Kut Teh',priceMin:18,priceMax:35,spice:1,halal:false,vegetarian:false,included:true,placeZh:'吉隆坡午餐',placeVi:'Bữa trưa tại Kuala Lumpur',tipZh:'胡椒與藥材香明顯，通常含豬肉。',tipVi:'Vị tiêu và thảo mộc rõ, thường có thịt heo.'},
    {id:'teppanyaki-seafood',icon:'🦐',category:'meal',day:4,location:'genting',nameZh:'虹姊鐵板海鮮',nameVi:'Hải sản áp chảo Rainbow Sister',priceMin:25,priceMax:55,spice:1,halal:false,vegetarian:false,included:true,placeZh:'第四天午餐',placeVi:'Bữa trưa ngày 4',tipZh:'鐵板料理趁熱享用，海鮮過敏者請先告知。',tipVi:'Nên dùng nóng; người dị ứng hải sản cần báo trước.'},
    {id:'wong-ah-wah',icon:'🍗',category:'meal',day:4,location:'jalan-alor',nameZh:'黃亞華燒雞翅',nameVi:'Cánh gà nướng Wong Ah Wah',priceMin:18,priceMax:35,spice:1,halal:false,vegetarian:false,included:true,placeZh:'亞羅街晚餐',placeVi:'Bữa tối tại Jalan Alor',tipZh:'招牌炭烤雞翅，熱門時段可能需等候。',tipVi:'Cánh gà nướng than nổi tiếng, có thể phải chờ vào giờ cao điểm.'},
    {id:'satay',icon:'🍢',category:'snack',day:2,location:'port-dickson',nameZh:'沙嗲',nameVi:'Satay',priceMin:10,priceMax:25,spice:1,halal:true,vegetarian:false,included:false,placeZh:'Hibiscus Walk／夜市',placeVi:'Hibiscus Walk / chợ đêm',tipZh:'可選雞肉或牛肉，花生醬可能造成過敏。',tipVi:'Có thể chọn gà hoặc bò; sốt đậu phộng có thể gây dị ứng.'},
    {id:'teh-tarik',icon:'🥤',category:'drink',day:2,location:'port-dickson',nameZh:'拉茶',nameVi:'Trà sữa kéo',priceMin:5,priceMax:10,spice:0,halal:true,vegetarian:true,included:false,placeZh:'Hibiscus Walk',placeVi:'Hibiscus Walk',tipZh:'通常偏甜，可說「Kurang manis」要求少糖。',tipVi:'Thường khá ngọt; có thể nói “Kurang manis” để giảm đường.'},
    {id:'coconut',icon:'🥥',category:'drink',day:2,location:'port-dickson',nameZh:'椰子水',nameVi:'Nước dừa',priceMin:8,priceMax:15,spice:0,halal:true,vegetarian:true,included:false,placeZh:'Hibiscus Walk／夜市',placeVi:'Hibiscus Walk / chợ đêm',tipZh:'炎熱時補水方便，購買前先確認價格。',tipVi:'Giải khát tốt khi trời nóng; hãy hỏi giá trước khi mua.'},
    {id:'kaya-toast',icon:'🍞',category:'snack',day:4,location:'kuala-lumpur',nameZh:'咖椰吐司',nameVi:'Bánh mì nướng kaya',priceMin:8,priceMax:15,spice:0,halal:true,vegetarian:true,included:true,placeZh:'源昌隆咖啡店',placeVi:'Kafei Dian',tipZh:'與海南茶、生熟蛋搭配，已列入團體下午茶。',tipVi:'Dùng cùng trà Hải Nam và trứng lòng đào; đã gồm trong trà chiều đoàn.'},
    {id:'hainan-tea',icon:'☕',category:'drink',day:4,location:'kuala-lumpur',nameZh:'海南茶',nameVi:'Trà Hải Nam',priceMin:5,priceMax:10,spice:0,halal:true,vegetarian:true,included:true,placeZh:'源昌隆咖啡店',placeVi:'Kafei Dian',tipZh:'咖啡與茶混合風味，通常含奶與糖。',tipVi:'Hương vị pha giữa cà phê và trà, thường có sữa và đường.'},
    {id:'soft-eggs',icon:'🥚',category:'snack',day:4,location:'kuala-lumpur',nameZh:'生熟蛋',nameVi:'Trứng lòng đào',priceMin:4,priceMax:8,spice:0,halal:true,vegetarian:true,included:true,placeZh:'源昌隆咖啡店',placeVi:'Kafei Dian',tipZh:'蛋黃偏生，腸胃敏感者可少量食用。',tipVi:'Lòng đỏ còn mềm; người bụng yếu nên ăn ít.'},
    {id:'cendol',icon:'🍧',category:'dessert',day:3,location:'kuala-lumpur',nameZh:'煎蕊 Cendol',nameVi:'Chè Cendol',priceMin:6,priceMax:15,spice:0,halal:true,vegetarian:true,included:false,placeZh:'商場／夜市',placeVi:'Trung tâm thương mại / chợ đêm',tipZh:'椰奶與椰糖風味濃，甜度較高。',tipVi:'Vị nước cốt dừa và đường thốt nốt đậm, khá ngọt.'},
    {id:'nasi-lemak',icon:'🍛',category:'meal',day:3,location:'kuala-lumpur',nameZh:'椰漿飯 Nasi Lemak',nameVi:'Cơm dừa Nasi Lemak',priceMin:10,priceMax:28,spice:2,halal:true,vegetarian:false,included:false,placeZh:'商場美食街／市區餐廳',placeVi:'Khu ẩm thực / nhà hàng thành phố',tipZh:'參巴醬偏辣，可要求醬料分開。',tipVi:'Sambal khá cay; có thể yêu cầu để sốt riêng.'},
    {id:'char-kway-teow',icon:'🍝',category:'meal',day:3,location:'kuala-lumpur',nameZh:'炒粿條',nameVi:'Hủ tiếu xào Char Kway Teow',priceMin:12,priceMax:25,spice:1,halal:false,vegetarian:false,included:false,placeZh:'市區餐廳／夜市',placeVi:'Nhà hàng / chợ đêm',tipZh:'可能含豬油、蝦與貝類，點餐前先確認。',tipVi:'Có thể có mỡ heo, tôm và sò; nên hỏi trước khi gọi.'}
  ],
  phrases:[
    {zh:'不要辣，謝謝。',vi:'Không cay, cảm ơn.',ms:'Tak pedas, terima kasih.'},
    {zh:'少糖。',vi:'Ít đường.',ms:'Kurang manis.'},
    {zh:'這個含有豬肉嗎？',vi:'Món này có thịt heo không?',ms:'Ada daging babi?'},
    {zh:'我對花生／海鮮過敏。',vi:'Tôi dị ứng đậu phộng / hải sản.',ms:'Saya alah kacang / makanan laut.'}
  ]
});
