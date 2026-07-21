const REQUIRED_ARRAYS=['members','rooms','announcements','attendanceSessions','attendanceRecords','checkinRecords'];
const clone=v=>JSON.parse(JSON.stringify(v));
const iso=v=>{const d=new Date(v);return Number.isNaN(d.getTime())?new Date().toISOString():d.toISOString()};
const arr=v=>Array.isArray(v)?v:[];
export function validateAndRepairDatabase(input,seed={}){
  const db=(input&&typeof input==='object')?clone(input):{};
  const repaired=[];
  db.meta={schema:'amt-travel-pro',schemaVersion:2,milestone:'6-2',appVersion:'6.3.0',createdAt:iso(db.meta?.createdAt),updatedAt:iso(db.meta?.updatedAt),...(db.meta||{})};
  db.meta.schema='amt-travel-pro';db.meta.schemaVersion=2;db.meta.milestone='6-2';db.meta.appVersion='6.3.0';
  REQUIRED_ARRAYS.forEach(k=>{if(!Array.isArray(db[k])){db[k]=arr(seed[k]);repaired.push(k)}});
  db.members=db.members.filter(Boolean).map((m,i)=>({...m,id:m.id??`M${String(i+1).padStart(3,'0')}`,active:m.active!==false,qrCode:m.qrCode||`AMT-MY26-${m.id??`M${String(i+1).padStart(3,'0')}`}`,checkinStatus:m.checkinStatus||'pending'}));
  db.rooms=db.rooms.filter(Boolean);db.announcements=db.announcements.filter(Boolean);
  db.attendanceSessions=db.attendanceSessions.filter(Boolean);db.attendanceRecords=db.attendanceRecords.filter(Boolean);db.checkinRecords=db.checkinRecords.filter(Boolean);
  db.leaderSettings={authMode:'local-pin',pinConfigured:false,pinHash:'',sessionTimeoutMinutes:30,failedAttempts:0,lockedUntil:null,...(db.leaderSettings||{})};
  db.sync={provider:'local',enabled:false,status:'disconnected',realtime:true,autoUpload:true,lastSyncAt:null,lastRemoteUpdateAt:null,lastError:'',conflictPolicy:'newest-wins',...(db.sync||{})};
  db.safety={lastValidationAt:new Date().toISOString(),lastRepairFields:repaired,lastGoodSnapshotAt:db.safety?.lastGoodSnapshotAt||null,lastError:db.safety?.lastError||'',...(db.safety||{})};
  return {database:db,repaired,valid:true};
}
export function chooseNewestDatabase(local,remote){
  const lt=Date.parse(local?.meta?.updatedAt||0)||0, rt=Date.parse(remote?.meta?.updatedAt||remote?.sourceUpdatedAt||0)||0;
  if(rt>lt)return {winner:'remote',database:remote};
  return {winner:'local',database:local};
}
export function safeParseJSON(text){try{return {ok:true,value:JSON.parse(text)}}catch(error){return {ok:false,error}}}
export function createRecoverySnapshot(database,key='amt-m5-recovery-v1'){
  try{localStorage.setItem(key,JSON.stringify({...database,safety:{...(database.safety||{}),lastGoodSnapshotAt:new Date().toISOString()}}));return true}catch{return false}
}
export function readRecoverySnapshot(key='amt-m5-recovery-v1'){try{return JSON.parse(localStorage.getItem(key)||'null')}catch{return null}}
export function installGlobalErrorBoundary(onError){
  const report=e=>{const message=e?.reason?.message||e?.message||String(e?.reason||e);try{onError?.(message)}catch{};console.error('[MTC]',e)};
  window.addEventListener('error',report);window.addEventListener('unhandledrejection',report);
}
