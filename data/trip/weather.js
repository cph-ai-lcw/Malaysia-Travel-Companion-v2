export const WEATHER_LOCATIONS = Object.freeze([
  {id:'kuala-lumpur',nameZh:'吉隆坡',nameVi:'Kuala Lumpur',icon:'🏙️',lat:3.1390,lng:101.6869,note:'Kuala Lumpur'},
  {id:'port-dickson',nameZh:'波德申',nameVi:'Port Dickson',icon:'🌊',lat:2.5225,lng:101.7963,note:'Lexis Hibiscus'},
  {id:'putrajaya',nameZh:'布城',nameVi:'Putrajaya',icon:'🕌',lat:2.9264,lng:101.6964,note:'Putrajaya'},
  {id:'genting',nameZh:'雲頂高原',nameVi:'Cao nguyên Genting',icon:'⛰️',lat:3.4236,lng:101.7932,note:'Genting Highlands'}
]);

export const WEATHER_CODE = Object.freeze({
  '0':{icon:'☀️',zh:'晴朗',vi:'Trời quang'},
  '1':{icon:'🌤️',zh:'大致晴朗',vi:'Khá quang'},
  '2':{icon:'⛅',zh:'局部多雲',vi:'Có mây rải rác'},
  '3':{icon:'☁️',zh:'陰天',vi:'Nhiều mây'},
  '45':{icon:'🌫️',zh:'霧',vi:'Sương mù'},
  '48':{icon:'🌫️',zh:'霧淞',vi:'Sương mù đóng băng'},
  '51':{icon:'🌦️',zh:'細雨',vi:'Mưa phùn nhẹ'},
  '53':{icon:'🌦️',zh:'細雨',vi:'Mưa phùn'},
  '55':{icon:'🌧️',zh:'較強細雨',vi:'Mưa phùn mạnh'},
  '61':{icon:'🌦️',zh:'小雨',vi:'Mưa nhẹ'},
  '63':{icon:'🌧️',zh:'中雨',vi:'Mưa vừa'},
  '65':{icon:'🌧️',zh:'大雨',vi:'Mưa lớn'},
  '80':{icon:'🌦️',zh:'短暫陣雨',vi:'Mưa rào nhẹ'},
  '81':{icon:'🌧️',zh:'陣雨',vi:'Mưa rào'},
  '82':{icon:'⛈️',zh:'強陣雨',vi:'Mưa rào mạnh'},
  '95':{icon:'⛈️',zh:'雷雨',vi:'Dông'},
  '96':{icon:'⛈️',zh:'雷雨伴冰雹',vi:'Dông kèm mưa đá'},
  '99':{icon:'⛈️',zh:'強雷雨伴冰雹',vi:'Dông mạnh kèm mưa đá'},
  default:{icon:'🌦️',zh:'天氣多變',vi:'Thời tiết thay đổi'}
});
