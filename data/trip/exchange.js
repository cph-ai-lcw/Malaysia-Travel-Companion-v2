export const EXCHANGE_CONFIG = Object.freeze({
  apiUrl: 'https://open.er-api.com/v6/latest/MYR',
  cacheMs: 12 * 60 * 60 * 1000,
  quickMYR: [10, 20, 50, 100, 200, 500],
  quickTWD: [100, 500, 1000, 2000, 5000, 10000],
  examples: [
    { icon:'🥤', zh:'飲料／小點', vi:'Đồ uống / món nhẹ', myr:10 },
    { icon:'🍜', zh:'一般餐點', vi:'Bữa ăn thông thường', myr:25 },
    { icon:'🎁', zh:'伴手禮預算', vi:'Ngân sách quà tặng', myr:50 },
    { icon:'🛍️', zh:'購物預算', vi:'Ngân sách mua sắm', myr:100 }
  ]
});
