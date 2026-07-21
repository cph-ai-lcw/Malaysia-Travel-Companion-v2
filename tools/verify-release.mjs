import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),errors=[];
const required=['index.html','manifest.webmanifest','service-worker.js','js/app.js','js/leader-store.js','js/translation.js','js/weather-link.js','js/pages/leader.js','cloudflare-worker/src/index.js','cloudflare-worker/wrangler.jsonc','data/trip/members.js','data/trip/rooms.js','data/trip/seats.js','images/line-group-qr.jpg','images/announcement-template-blank.png'];
required.forEach(file=>{if(!fs.existsSync(path.join(root,file)))errors.push(`缺少 ${file}`)});

for(const file of ['js/app.js','js/leader-store.js','js/translation.js','js/weather-link.js','js/pages/leader.js']){
  const source=fs.readFileSync(path.join(root,file),'utf8');
  for(const match of source.matchAll(/from\s+['"](.+?)['"]/g)){
    if(match[1].startsWith('.')&&!fs.existsSync(path.resolve(path.dirname(path.join(root,file)),match[1])))errors.push(`${file} import不存在：${match[1]}`);
  }
}

const {MEMBERS}=await import(pathToFileURL(path.join(root,'data/trip/members.js')));
const {ROOMS}=await import(pathToFileURL(path.join(root,'data/trip/rooms.js')));
const {SEATS}=await import(pathToFileURL(path.join(root,'data/trip/seats.js')));
if(MEMBERS.length!==32)errors.push(`團員數不是32：${MEMBERS.length}`);
if(!ROOMS.length)errors.push('房間資料為空');
if(!SEATS.length)errors.push('機位資料為空');
for(const member of MEMBERS){
  if(!member.seatOutbound||!member.seatReturn)errors.push(`${member.id}缺少機位`);
  for(const hotel of ['lexis','sunway'])if(!member.roomAssignments?.[hotel])errors.push(`${member.id}缺少${hotel}房間`);
}
if(errors.length){console.error('VERIFY_FAILED');errors.forEach(x=>console.error('- '+x));process.exit(1)}
console.log(`VERIFY_OK · GN Core v4.1 · ${MEMBERS.length} members · ${ROOMS.length} rooms · ${SEATS.length} seats · translation worker ready`);
