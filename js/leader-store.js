import {storage} from './storage.js';
import {MEMBERS} from './data.js';

const KEY='leader-center';
const blankSessions=()=>[1,2,3,4,5].map(day=>({id:`day-${day}`,day,titleZh:`Day ${day} 每日集合`,titleVi:`Tập trung ngày ${day}`,date:`2026-09-${19+day}`,time:'08:00',locationZh:'飯店大廳',locationVi:'Sảnh khách sạn'}));
const seed=()=>({version:1,settings:{pinHash:'',pinConfigured:false},announcements:[],sessions:blankSessions(),attendance:{},qr:{},updatedAt:new Date().toISOString()});
export function loadLeader(){const data=storage.get(KEY,null);return data&&typeof data==='object'?{...seed(),...data,settings:{...seed().settings,...data.settings}}:seed()}
export function saveLeader(data){data.updatedAt=new Date().toISOString();return storage.set(KEY,data)}
export function resetLeader(){storage.remove(KEY);return seed()}
export async function pinHash(pin){const bytes=new TextEncoder().encode(String(pin));const digest=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('')}
export function isLeaderSession(){try{return sessionStorage.getItem('gn-leader-auth')==='1'}catch{return false}}
export function setLeaderSession(value){try{value?sessionStorage.setItem('gn-leader-auth','1'):sessionStorage.removeItem('gn-leader-auth')}catch{}}
export function attendanceStatus(data,sessionId,memberId){return data.attendance?.[sessionId]?.[memberId]||'pending'}
export function setAttendance(data,sessionId,memberId,status){data.attendance[sessionId]??={};data.attendance[sessionId][memberId]=status;return saveLeader(data)}
export function qrValue(member){return `GN-MY26-${member.id}`}
export function qrChecked(data,memberId){return Boolean(data.qr?.[memberId]?.checkedAt)}
export function setQr(data,memberId,checked=true){if(checked)data.qr[memberId]={checkedAt:new Date().toISOString()};else delete data.qr[memberId];return saveLeader(data)}
export function exportLeader(data){const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`GN-Malaysia-Leader-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(a.href)}
export function validMember(id){return MEMBERS.some(member=>member.id===id)}
