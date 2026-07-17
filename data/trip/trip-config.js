export const TRIP_CONFIG = Object.freeze({
  titleZh: "2026 國能馬來西亞員工旅遊",
  titleVi: "Du lịch nhân viên Malaysia 2026",
  startDate: "2026-09-20",
  endDate: "2026-09-24",
  totalDays: 5,
  outboundFlight: {
    airline: "STARLUX", number: "JX725", route: "TPE → KUL",
    departureTime: "11:15", arrivalTime: "16:10"
  },
  returnFlight: {
    airline: "STARLUX", number: "JX726", route: "KUL → TPE",
    departureTime: "17:20", arrivalTime: "22:15"
  },
  hotels: [
    { id: "lexis", name: "Lexis Hibiscus Port Dickson", nameZh: "波德申大紅花渡假村" },
    { id: "sunway", name: "Sunway Velocity Hotel", nameZh: "吉隆坡雙威偉樂酒店" }
  ]
});
