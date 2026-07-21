import {storage} from './storage.js';
const ENDPOINT_KEY='translation-endpoint';
export function translationEndpoint(){return storage.get(ENDPOINT_KEY,'')}
export function saveTranslationEndpoint(url){return storage.set(ENDPOINT_KEY,String(url||'').trim().replace(/\/$/,''))}
export async function translateAnnouncement({titleZh,bodyZh}){
  const endpoint=translationEndpoint();
  if(!endpoint)throw new Error('NO_ENDPOINT');
  const response=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({titleZh,bodyZh})});
  if(!response.ok)throw new Error(`TRANSLATION_${response.status}`);
  const result=await response.json();
  if(!result.titleVi&&!result.bodyVi)throw new Error('EMPTY_TRANSLATION');
  return result;
}
