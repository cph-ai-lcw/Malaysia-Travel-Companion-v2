export const ANNOUNCEMENT_TYPES = Object.freeze([
  {id:'all',icon:'📣',zh:'全部',vi:'Tất cả'},
  {id:'meeting',icon:'⏰',zh:'集合',vi:'Tập trung'},
  {id:'transport',icon:'🚌',zh:'交通',vi:'Di chuyển'},
  {id:'room',icon:'🏨',zh:'房務',vi:'Phòng'},
  {id:'meal',icon:'🍽️',zh:'餐食',vi:'Bữa ăn'},
  {id:'urgent',icon:'🚨',zh:'緊急',vi:'Khẩn cấp'},
  {id:'general',icon:'ℹ️',zh:'一般',vi:'Thông tin'}
]);
export const ANNOUNCEMENTS = Object.freeze([
  {id:'departure-0920',type:'meeting',priority:'urgent',date:'2026-09-20',time:'07:00',titleZh:'9/20 鶯歌集合',titleVi:'Tập trung tại Yingge ngày 20/9',messageZh:'請於早上 7:00 前抵達大湖路324號，7:20 準時發車前往桃園機場。',messageVi:'Vui lòng có mặt tại số 324 đường Dahu trước 07:00. Xe khởi hành đúng 07:20 đi sân bay Đào Viên.',locationZh:'鶯歌區中湖里大湖路324號',locationVi:'Số 324 đường Dahu, Yingge'},
  {id:'airport-counter',type:'meeting',priority:'normal',date:'2026-09-20',time:'08:00',titleZh:'第二航廈航空櫃台集合',titleVi:'Tập trung tại quầy hãng bay ở Nhà ga 2',messageZh:'桃園機場第二航廈，星宇航空3號櫃台前方集合。',messageVi:'Tập trung trước quầy số 3 của STARLUX tại Nhà ga 2 sân bay Đào Viên.',locationZh:'桃園機場第二航廈',locationVi:'Nhà ga 2 sân bay Đào Viên'},
  {id:'return-pickup',type:'transport',priority:'normal',date:'2026-09-24',time:'23:15',titleZh:'返台接機集合',titleVi:'Tập trung xe đón khi về Đài Loan',messageZh:'JX726 預計22:15抵達；23:15集合、23:30發車返回鶯歌。',messageVi:'JX726 dự kiến đến lúc 22:15; tập trung 23:15, xe khởi hành 23:30 về Yingge.',locationZh:'桃園機場',locationVi:'Sân bay Đào Viên'},
  {id:'room-reminder',type:'room',priority:'normal',date:'2026-09-20',time:'',titleZh:'房間分配提醒',titleVi:'Nhắc về phân phòng',messageZh:'App 內顯示的是房間分配代碼，不是飯店正式房號；正式房號以領隊現場發放房卡為準。',messageVi:'Mã phòng trong ứng dụng là mã phân nhóm, không phải số phòng chính thức. Số phòng thực tế theo thẻ phòng do trưởng đoàn phát.'}
]);
