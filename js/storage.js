const PREFIX='gn-malaysia-v4:';
const memory=new Map();
function nativeStorage(){try{return window.localStorage}catch{return null}}
export const storage={
  get(key,fallback=null){try{const raw=nativeStorage()?.getItem(PREFIX+key);if(raw!==null&&raw!==undefined)return JSON.parse(raw);return memory.has(key)?memory.get(key):fallback}catch{return memory.has(key)?memory.get(key):fallback}},
  set(key,value){memory.set(key,value);try{nativeStorage()?.setItem(PREFIX+key,JSON.stringify(value))}catch{}return value},
  remove(key){memory.delete(key);try{nativeStorage()?.removeItem(PREFIX+key)}catch{}}
};
