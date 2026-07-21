const LOCATIONS={
  kl:{label:'吉隆坡',lat:3.1390,lon:101.6869},
  portDickson:{label:'波德申',lat:2.5225,lon:101.7963},
  genting:{label:'雲頂高原',lat:3.4236,lon:101.7932}
};

const weatherText=code=>{
  if(code===0)return '晴朗';
  if(code<=3)return '多雲';
  if(code<=48)return '有霧';
  if(code<=57)return '毛毛雨';
  if(code<=67)return '有雨';
  if(code<=77)return '雨夾雪';
  if(code<=82)return '陣雨';
  if(code<=86)return '陣雪';
  return '雷陣雨';
};

const malaysiaTomorrow=()=>{
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kuala_Lumpur',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(Date.now()+86400000);
  const value=Object.fromEntries(parts.map(part=>[part.type,part.value]));
  return `${value.year}-${value.month}-${value.day}`;
};

const suggestedLocation=date=>{
  if(date==='2026-09-20'||date==='2026-09-21')return 'portDickson';
  if(date==='2026-09-23')return 'genting';
  return 'kl';
};

async function fetchTomorrow(locationId){
  const location=LOCATIONS[locationId]||LOCATIONS.kl;
  const url=new URL('https://api.open-meteo.com/v1/forecast');
  url.search=new URLSearchParams({
    latitude:location.lat,
    longitude:location.lon,
    daily:'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    timezone:'Asia/Kuala_Lumpur',
    forecast_days:'3'
  });
  const response=await fetch(url,{headers:{Accept:'application/json'}});
  if(!response.ok)throw new Error('WEATHER_HTTP');
  const data=await response.json();
  const date=malaysiaTomorrow();
  const index=data.daily?.time?.indexOf(date);
  if(index<0)throw new Error('NO_FORECAST');
  const low=Math.round(data.daily.temperature_2m_min[index]);
  const high=Math.round(data.daily.temperature_2m_max[index]);
  const rain=Math.round(data.daily.precipitation_probability_max[index]||0);
  const condition=weatherText(data.daily.weather_code[index]);
  return {date,location:location.label,text:`${low}～${high}°C・${condition}・降雨 ${rain}%`};
}

export function setupWeatherLink(){
  const input=document.querySelector('#announcementForm [name="weather"]');
  if(!input||document.querySelector('#weatherAutoControls'))return;
  const date=malaysiaTomorrow();
  const controls=document.createElement('div');
  controls.id='weatherAutoControls';
  controls.className='weather-auto-controls';
  controls.innerHTML=`<select id="weatherLocation" aria-label="明日天氣地點">${Object.entries(LOCATIONS).map(([id,item])=>`<option value="${id}" ${id===suggestedLocation(date)?'selected':''}>${item.label}</option>`).join('')}</select><button type="button" class="secondary-btn" id="refreshTomorrowWeather">↻ 自動帶入</button><small id="weatherAutoStatus">連線取得明日預報</small>`;
  input.insertAdjacentElement('afterend',controls);
  const status=controls.querySelector('#weatherAutoStatus');
  const update=async()=>{
    const button=controls.querySelector('#refreshTomorrowWeather');
    button.disabled=true;
    status.textContent='天氣更新中…';
    try{
      const result=await fetchTomorrow(controls.querySelector('#weatherLocation').value);
      input.value=result.text;
      input.dispatchEvent(new Event('input',{bubbles:true}));
      localStorage.setItem('gnTomorrowWeather',JSON.stringify({...result,locationId:controls.querySelector('#weatherLocation').value,updatedAt:Date.now()}));
      status.textContent=`${result.location}｜${result.date}｜已更新`;
    }catch{
      status.textContent='無法連線，已保留手動輸入值';
    }finally{button.disabled=false}
  };
  controls.querySelector('#refreshTomorrowWeather').addEventListener('click',update);
  controls.querySelector('#weatherLocation').addEventListener('change',update);
  update();
}
