export const DAILY_BUDGET = Object.freeze([
  {
    day: 1,
    date: "09/20",
    titleZh: "抵達日・大紅花入住",
    titleVi: "Ngày đến・Nhận phòng Lexis",
    includedZh: ["機上餐食", "奶油螃蟹晚餐", "Sky Bar 無酒精飲料 1 杯"],
    includedVi: ["Suất ăn trên máy bay", "Bữa tối cua sốt bơ", "1 ly không cồn tại Sky Bar"],
    required: [
      { icon: "🥤", nameZh: "飲水／小點心", nameVi: "Nước uống／đồ ăn nhẹ", min: 0, max: 30, noteZh: "依個人需求", noteVi: "Tùy nhu cầu cá nhân" }
    ],
    optional: [],
    suggestedMin: 0,
    suggestedMax: 30,
    shoppingExcluded: true
  },
  {
    day: 2,
    date: "09/21",
    titleZh: "大紅花自由活動日",
    titleVi: "Ngày tự do tại Lexis Hibiscus",
    includedZh: ["飯店早餐", "午餐補助 RM30", "飯店自助晚餐 RM100"],
    includedVi: ["Buffet sáng", "Hỗ trợ bữa trưa RM30", "Buffet tối RM100"],
    required: [
      { icon: "🍢", nameZh: "額外小吃／飲料", nameVi: "Đồ ăn nhẹ／đồ uống thêm", min: 10, max: 25, noteZh: "Hibiscus Walk 參考", noteVi: "Tham khảo Hibiscus Walk" }
    ],
    optional: [
      { icon: "🍌", nameZh: "香蕉船", nameVi: "Phao chuối", min: 35, max: 50 },
      { icon: "🏍️", nameZh: "水上摩托車", nameVi: "Mô tô nước", min: 120, max: 150 },
      { icon: "🚲", nameZh: "水上腳踏船", nameVi: "Thuyền đạp nước", min: 40, max: 60 },
      { icon: "🍩", nameZh: "甜甜圈船", nameVi: "Thuyền donut", min: 50, max: 50 },
      { icon: "🚤", nameZh: "海峽觀光遊艇", nameVi: "Du thuyền ngắm eo biển", min: 60, max: 80 },
      { icon: "🛴", nameZh: "Segway／電動代步車", nameVi: "Segway／xe điện", min: 35, max: 50 },
      { icon: "🚴", nameZh: "協力腳踏車", nameVi: "Xe đạp đôi／bốn người", min: 20, max: 40 },
      { icon: "🏹", nameZh: "射箭", nameVi: "Bắn cung", min: 25, max: 35 },
      { icon: "💆", nameZh: "Wellness SPA", nameVi: "Wellness SPA", min: 180, max: 350 }
    ],
    suggestedMin: 20,
    suggestedMax: 200,
    shoppingExcluded: true
  },
  {
    day: 3,
    date: "09/22",
    titleZh: "吉隆坡市區・購物日",
    titleVi: "Kuala Lumpur・Ngày mua sắm",
    includedZh: ["飯店早餐", "肉骨茶午餐", "天際線斜坡滑車"],
    includedVi: ["Buffet sáng", "Bữa trưa Bak Kut Teh", "Skyline Luge"],
    required: [
      { icon: "🍽️", nameZh: "晚餐自理", nameVi: "Bữa tối tự túc", min: 25, max: 60, noteZh: "依餐廳與食量調整", noteVi: "Tùy nhà hàng và khẩu phần" },
      { icon: "🥤", nameZh: "飲料／小點", nameVi: "Đồ uống／đồ ăn nhẹ", min: 10, max: 25 }
    ],
    optional: [
      { icon: "🍫", nameZh: "巧克力／伴手禮", nameVi: "Chocolate／quà lưu niệm", min: 30, max: 150 },
      { icon: "🛍️", nameZh: "Pavilion 購物", nameVi: "Mua sắm tại Pavilion", min: 0, max: 0, openEnded: true }
    ],
    suggestedMin: 40,
    suggestedMax: 100,
    shoppingExcluded: true
  },
  {
    day: 4,
    date: "09/23",
    titleZh: "黑風洞・雲頂・亞羅街",
    titleVi: "Động Batu・Genting・Jalan Alor",
    includedZh: ["飯店早餐", "虹姊鐵板海鮮", "源昌隆下午茶", "黃亞華晚餐"],
    includedVi: ["Buffet sáng", "Hải sản bàn sắt", "Trà chiều Kafei Dian", "Bữa tối Wong Ah Wah"],
    required: [
      { icon: "🥤", nameZh: "飲料／零食", nameVi: "Đồ uống／đồ ăn nhẹ", min: 10, max: 30 }
    ],
    optional: [
      { icon: "🛍️", nameZh: "土產店伴手禮", nameVi: "Đặc sản／quà lưu niệm", min: 30, max: 200 },
      { icon: "🍢", nameZh: "亞羅街額外小吃", nameVi: "Món ăn thêm tại Jalan Alor", min: 10, max: 50 }
    ],
    suggestedMin: 20,
    suggestedMax: 100,
    shoppingExcluded: true
  },
  {
    day: 5,
    date: "09/24",
    titleZh: "布城・Outlet・返台",
    titleVi: "Putrajaya・Outlet・Về Đài Loan",
    includedZh: ["飯店早餐", "行程午餐", "機上餐食"],
    includedVi: ["Buffet sáng", "Bữa trưa theo chương trình", "Suất ăn trên máy bay"],
    required: [
      { icon: "🥤", nameZh: "機場飲料／小點", nameVi: "Đồ uống／đồ ăn nhẹ tại sân bay", min: 10, max: 30 }
    ],
    optional: [
      { icon: "🛍️", nameZh: "三井 Outlet 購物", nameVi: "Mua sắm tại Mitsui Outlet", min: 0, max: 0, openEnded: true }
    ],
    suggestedMin: 10,
    suggestedMax: 50,
    shoppingExcluded: true
  }
]);

export const BUDGET_SETTINGS = Object.freeze({
  defaultExchangeRate: 7.5,
  currency: "RM",
  homeCurrency: "TWD",
  noteZh: "匯率與價格僅供行前估算；實際請依刷卡、換匯及現場公告為準。購物費用未列入建議現金。",
  noteVi: "Tỷ giá và giá chỉ dùng để dự toán; thực tế theo thẻ, đổi tiền và thông báo tại chỗ. Chi phí mua sắm không tính vào tiền mặt đề xuất。"
});
