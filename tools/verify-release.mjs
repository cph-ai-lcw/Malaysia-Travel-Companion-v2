import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const errors=[];
const required=[
  '.nojekyll','index.html','manifest.webmanifest','service-worker.js','css/app.css',
  'js/app.js','js/qrcode-browser.js','js/data-safety.js','js/milestone4-pro-store.js',
  'data/system/version.js','icons/icon-192.png','icons/icon-512.png'
  ,'images/line-group-qr.jpg','fonts/noto-sans-tc-400.woff2'
];

for(const relative of required){
  if(!fs.existsSync(path.join(root,relative)))errors.push(`缺少必要檔案：${relative}`);
}

const appPath=path.join(root,'js/app.js');
const app=fs.readFileSync(appPath,'utf8');
for(const match of app.matchAll(/^import\s.+?from\s+['"](.+?)['"];?$/gm)){
  if(match[1].startsWith('.')){
    const target=path.resolve(path.dirname(appPath),match[1]);
    if(!fs.existsSync(target))errors.push(`App import 不存在：${match[1]}`);
  }
}

if(!/function\s+countdownPage\s*\(/.test(app))errors.push('缺少 countdownPage');
const pageFunctions=['home','itinerary','budget','food','shoppingPage','resort','traveler','rooms','guide','mapPage','notificationsPage','checkinPage','countdownPage','weatherPage','exchangePage','proPage','announcementAdminPage','attendanceAdminPage','qrCheckinPage','firebaseAdminPage','travelInfoPage','myTravelPage'];
for(const name of pageFunctions){
  if(!new RegExp(`function\\s+${name}\\s*\\(`).test(app))errors.push(`缺少頁面函式：${name}`);
}
if(!/version:'6\.3\.0'/.test(fs.readFileSync(path.join(root,'data/system/version.js'),'utf8')))errors.push('版本未統一為 6.3.0');
if(!/6300/.test(fs.readFileSync(path.join(root,'index.html'),'utf8')))errors.push('index.html 快取版本不正確');

const { MEMBERS }=await import(pathToFileURL(path.join(root,'data/trip/members.js')));
const { ROOMS }=await import(pathToFileURL(path.join(root,'data/trip/rooms.js')));
const { ITINERARY }=await import(pathToFileURL(path.join(root,'data/trip/itinerary.js')));
if(MEMBERS.length!==32)errors.push(`團員數應為 32，目前為 ${MEMBERS.length}`);
if(ITINERARY.length!==5)errors.push(`行程天數應為 5，目前為 ${ITINERARY.length}`);

const memberIds=new Set(MEMBERS.map(member=>member.id));
if(memberIds.size!==MEMBERS.length)errors.push('團員 ID 有重複');
for(const member of MEMBERS){
  if(!member.seatOutbound||!member.seatReturn)errors.push(`${member.id} 缺少去程或回程機位`);
  for(const hotel of ['lexis','sunway']){
    const roomId=member.roomAssignments?.[hotel];
    if(!roomId||!ROOMS.some(room=>room.id===roomId))errors.push(`${member.id} 缺少 ${hotel} 房間資料`);
  }
}

if(errors.length){
  console.error('VERIFY_FAILED');
  errors.forEach(error=>console.error('- '+error));
  process.exit(1);
}
console.log(`VERIFY_OK · v6.3.0 · ${MEMBERS.length} members · ${ROOMS.length} room assignments · ${ITINERARY.length} days`);
