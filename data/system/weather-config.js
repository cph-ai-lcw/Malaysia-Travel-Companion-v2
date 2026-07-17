export const WEATHER_CONFIG = Object.freeze({
  locations: [
    { id: "kuala-lumpur", name: "Kuala Lumpur", nameZh: "吉隆坡", country: "Malaysia" },
    { id: "port-dickson", name: "Port Dickson", nameZh: "波德申", country: "Malaysia" },
    { id: "genting-highlands", name: "Genting Highlands", nameZh: "雲頂高原", country: "Malaysia" }
  ],
  defaultLocation: "kuala-lumpur",
  temperatureUnit: "C",
  averageTemperature: "24–33°C",
  refreshMinutes: 60,
  reminders: {
    "zh-TW": [
      "午後可能出現雷陣雨，建議攜帶摺疊傘。",
      "戶外活動請注意防曬並補充水分。",
      "商場與遊覽車冷氣較強，建議攜帶薄外套。"
    ],
    vi: [
      "Buổi chiều có thể có mưa giông, nên mang theo ô gấp.",
      "Khi hoạt động ngoài trời, hãy chống nắng và uống đủ nước.",
      "Máy lạnh trong trung tâm thương mại và xe buýt khá lạnh, nên mang áo khoác mỏng."
    ]
  }
});
