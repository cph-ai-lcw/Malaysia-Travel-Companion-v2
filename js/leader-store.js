import {storage} from './storage.js';
import {MEMBERS} from './data.js';

const KEY='leader-center';
const SESSION_KEY='gn-leader-auth-v424';
const AUTH_USERS=[
  {role:'organizer',hash:'3c2f8c25313ffdcfc69e425c01c0c88a6af3e26047288691390c1f86144d849c'},
  {role:'leader',hash:'9b4ae0858fed778f94ac7daa7cb48b553b7595f410ca627b1959b6f7638c157b'}
];
const SESSION_TIMEOUT=30*60*1000;
const LOCK_TIME=15*60*1000;
const MAX_FAILURES=5;
const blankSessions=()=>[1,2,3,4,5].map(day=>({id:`day-${day}`,day,titleZh:`Day ${day} 每日集合`,titleVi:`Tập trung ngày ${day}`,date:`2026-09-${19+day}`,time:'08:00',locationZh:'飯店大廳',locationVi:'Sảnh khách sạn'}));
const seed=()=>({version:5,settings:{pinConfigured:true,failedAttempts:0,lockedUntil:0},announcements:[],sessions:blankSessions(),attendance:{},mdac:{},mealAllowances:{},roomNumbers:{},updatedAt:new Date().toISOString()});
export function loadLeader(){const data=storage.get(KEY,null);if(!data||typeof data!=='object')return seed();const settings={pinConfigured:true,failedAttempts:Number(data.settings?.failedAttempts||0),lockedUntil:Number(data.settings?.lockedUntil||0)};return {...seed(),...data,version:5,settings,mdac:{...(data.mdac||{})},mealAllowances:{...(data.mealAllowances||{})},roomNumbers:{...(data.roomNumbers||{})}}}
export function saveLeader(data){data.updatedAt=new Date().toISOString();return storage.set(KEY,data)}
export function resetLeader(){storage.remove(KEY);return seed()}
export async function pinHash(pin){const bytes=new TextEncoder().encode(String(pin));const digest=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('')}
export function isLeaderSession(){try{const session=JSON.parse(sessionStorage.getItem(SESSION_KEY)||'null');if(!session?.authenticated||Date.now()-Number(session.lastActive||0)>SESSION_TIMEOUT){sessionStorage.removeItem(SESSION_KEY);return false}session.lastActive=Date.now();sessionStorage.setItem(SESSION_KEY,JSON.stringify(session));return true}catch{return false}}
export function setLeaderSession(value,role='leader'){try{value?sessionStorage.setItem(SESSION_KEY,JSON.stringify({authenticated:true,role,lastActive:Date.now()})):sessionStorage.removeItem(SESSION_KEY)}catch{}}
export function leaderRole(){try{return JSON.parse(sessionStorage.getItem(SESSION_KEY)||'null')?.role||'leader'}catch{return 'leader'}}
export function matchLeaderHash(hash){return AUTH_USERS.find(user=>user.hash===hash)||null}
export function leaderLockRemaining(data=loadLeader()){return Math.max(0,Number(data.settings?.lockedUntil||0)-Date.now())}
export function recordLoginFailure(){const data=loadLeader(),attempts=Number(data.settings.failedAttempts||0)+1;data.settings.failedAttempts=attempts;if(attempts>=MAX_FAILURES){data.settings.lockedUntil=Date.now()+LOCK_TIME;data.settings.failedAttempts=0}saveLeader(data);return leaderLockRemaining(data)}
export function clearLoginFailures(){const data=loadLeader();data.settings.failedAttempts=0;data.settings.lockedUntil=0;saveLeader(data)}
export function attendanceStatus(data,sessionId,memberId){return data.attendance?.[sessionId]?.[memberId]||'pending'}
export function setAttendance(data,sessionId,memberId,status){data.attendance[sessionId]??={};data.attendance[sessionId][memberId]=status;return saveLeader(data)}
export function exportLeader(data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`GN-Malaysia-Leader-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)}
export function validMember(id){return MEMBERS.some(member=>member.id===id)}
export function roomNumber(roomId){return String(loadLeader().roomNumbers?.[roomId]||'').trim()}
export function setRoomNumbers(values){const data=loadLeader();data.roomNumbers=Object.fromEntries(Object.entries(values||{}).map(([id,value])=>[id,String(value||'').trim()]).filter(([,value])=>value));return saveLeader(data)}
export function mdacStatus(data,memberId){return data.mdac?.[memberId]?.status||'not-started'}
export function setMdac(memberId,status,note=''){const data=loadLeader();data.mdac??={};data.mdac[memberId]={status,note:String(note||'').trim(),updatedAt:new Date().toISOString()};return saveLeader(data)}
export function mealAllowanceReceived(data,mealId,memberId){return Boolean(data.mealAllowances?.[mealId]?.[memberId]?.received)}
export function setMealAllowance(mealId,memberId,received){const data=loadLeader();data.mealAllowances??={};data.mealAllowances[mealId]??={};data.mealAllowances[mealId][memberId]={received:Boolean(received),updatedAt:new Date().toISOString()};return saveLeader(data)}
export function setAllMealAllowances(mealId,received){const data=loadLeader(),now=new Date().toISOString();data.mealAllowances??={};data.mealAllowances[mealId]={};MEMBERS.filter(member=>member.number!==32).forEach(member=>{data.mealAllowances[mealId][member.id]={received:Boolean(received),updatedAt:now}});return saveLeader(data)}
