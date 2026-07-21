import {bi} from '../i18n.js';
export function nav(active){const items=[['home','🏠','首頁','Trang chủ'],['itinerary','📅','行程','Lịch trình'],['my-travel','👤','我的旅程','Chuyến đi'],['info','☰','更多','Thêm']];return items.map(([id,icon,zh,vi])=>`<a class="nav-item ${active===id?'active':''}" href="#/${id}"><span>${icon}</span><span>${bi(zh,vi)}</span></a>`).join('')}
