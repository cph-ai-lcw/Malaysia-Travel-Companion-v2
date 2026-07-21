import {storage} from './storage.js';
const savedLang=storage.get('lang','zh');
let lang=savedLang==='vi'?'vi':'zh';
if(savedLang!==lang)storage.set('lang',lang);
export function getLang(){return lang}
export function setLang(next){lang=next==='vi'?'vi':'zh';storage.set('lang',lang)}
export function bi(zh,vi){return lang==='vi'?(vi||zh):zh}
export function text(zh,vi){return lang==='vi'?(vi||zh):zh}
