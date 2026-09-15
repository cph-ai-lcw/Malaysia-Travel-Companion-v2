export const EXCHANGE_CONFIG = Object.freeze({
  fixedRateTWDPerMYR: 1000 / 120,
  confirmedTWD: 1000,
  confirmedMYR: 120,
  confirmedDate: '2026-09-15',
  quickMYR: [10, 20, 50, 100, 200, 500],
  quickTWD: [100, 500, 1000, 2000, 5000, 10000],
  examples: [
    { icon:'🥤', zh:'飲料／小點', vi:'Đồ uống / món nhẹ', myr:10 },
    { icon:'🍜', zh:'一般餐點', vi:'Bữa ăn thông thường', myr:25 },
    { icon:'🎁', zh:'伴手禮預算', vi:'Ngân sách quà tặng', myr:50 },
    { icon:'🛍️', zh:'購物預算', vi:'Ngân sách mua sắm', myr:100 }
  ]
});
