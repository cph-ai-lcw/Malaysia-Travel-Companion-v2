import {storage} from '../storage.js';
import {bi,text} from '../i18n.js';
import {escapeHTML} from '../utils.js';

const categories=[
  ['food','🍜','餐食','Ăn uống'],
  ['shopping','🛒','購物','Mua sắm'],
  ['activity','🌺','自費活動','Hoạt động'],
  ['transport','🚕','交通','Di chuyển'],
  ['gift','🎁','伴手禮','Quà tặng'],
  ['other','📌','其他','Khác']
];

const RATE_API='https://open.er-api.com/v6/latest/MYR';
const RATE_SOURCE_URL='https://www.exchangerate-api.com/';
const CUSTOMS_RATE_URL='https://portal.sw.nat.gov.tw/APGQO/GC331';
const RATE_MAX_AGE=12*60*60*1000;

function formatRate(value){
  return Number(value).toFixed(4).replace(/0+$/,'').replace(/\.$/,'');
}

function formatUpdatedAt(value){
  if(!value)return '';
  const date=new Date(value);
  if(Number.isNaN(date.getTime()))return '';
  const locale=document.documentElement.lang==='vi'?'vi-VN':'zh-TW';
  return date.toLocaleString(locale,{month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'});
}

function categoryInfo(id){return categories.find(item=>item[0]===id)||categories.at(-1)}

function breakdownMarkup(items){
  const totals=categories.map(category=>({category,total:items.filter(item=>(item.category||'other')===category[0]).reduce((sum,item)=>sum+Number(item.myr||0),0)})).filter(row=>row.total>0);
  const max=Math.max(...totals.map(row=>row.total),1);
  if(!totals.length)return `<div class="empty">${text('尚無統計資料','Chưa có dữ liệu')}</div>`;
  return `<div class="category-breakdown">${totals.map(({category,total})=>`<div><span>${category[1]} ${bi(category[2],category[3])}</span><div class="bar-track"><i style="width:${Math.round(total/max*100)}%"></i></div><b>RM ${total.toFixed(2)}</b></div>`).join('')}</div>`;
}

export function walletPage(){
  const items=storage.get('wallet',[]);
  const rate=Number(storage.get('rate',7.5))||7.5;
  const rateMeta=storage.get('rateMeta',{});
  const rateTime=formatUpdatedAt(rateMeta.updatedAt);
  const rateStatus=rateTime
    ?`${bi('上次更新','Cập nhật lần cuối')}：${rateTime}`
    :bi('尚未連線更新，現在使用本機匯率。','Chưa cập nhật trực tuyến; đang dùng tỷ giá trên thiết bị.');
  const total=items.reduce((sum,item)=>sum+Number(item.myr||0),0);
  return `<section class="section"><p class="eyebrow">WALLET</p><h1>${bi('旅遊記帳','Chi tiêu du lịch')}</h1><div class="grid wallet-kpis"><div class="card kpi"><small>${bi('累計支出','Tổng chi')}</small><b>RM ${total.toFixed(2)}</b></div><div class="card kpi"><small>${bi('約合台幣','Ước tính TWD')}</small><b id="walletTwdTotal">NT$ ${(total*rate).toFixed(0)}</b></div><div class="card kpi"><small>${bi('記錄筆數','Số giao dịch')}</small><b>${items.length}</b></div></div></section><section class="card section converter-card"><div class="section-head"><div><p class="eyebrow">CURRENCY</p><h2>${bi('RM ↔ NTD 雙向換算','Đổi hai chiều RM ↔ NTD')}</h2></div></div><div class="converter-grid" id="converterGrid"><div class="field currency-field myr-field"><label>MYR (RM)</label><input id="convertMyr" inputmode="decimal" type="number" min="0" step="0.01" value="100"></div><button class="swap-icon" id="swapCurrency" type="button" aria-label="${text('切換換算方向','Đổi hướng quy đổi')}" title="${text('切換換算方向','Đổi hướng quy đổi')}">⇄</button><div class="field currency-field twd-field"><label>TWD (NT$)</label><input id="convertTwd" inputmode="decimal" type="number" min="0" step="1" value="${(100*rate).toFixed(0)}"></div></div><small class="converter-hint">${bi('兩邊都能直接輸入；點擊箭頭可切換左右顯示。','Có thể nhập ở cả hai bên; bấm mũi tên để đổi vị trí hiển thị.')}</small><div class="rate-row"><label for="rateInput">${bi('匯率：1 MYR =','Tỷ giá: 1 MYR =')}</label><input id="rateInput" type="number" min="0.01" step="0.0001" value="${formatRate(rate)}"><span>TWD</span></div><div class="rate-actions"><button class="secondary-btn inline-btn" id="refreshRate" type="button">↻ ${bi('線上更新匯率','Cập nhật tỷ giá')}</button><a class="rate-source-link" href="${RATE_SOURCE_URL}" target="_blank" rel="noopener">${bi('市場匯率來源 ↗','Nguồn tỷ giá ↗')}</a><a class="rate-source-link" href="${CUSTOMS_RATE_URL}" target="_blank" rel="noopener">${bi('關務署每旬匯率 ↗','Tỷ giá Hải quan ↗')}</a></div><small class="rate-status" id="rateStatus">${rateStatus}</small><small class="rate-disclaimer">${bi('線上數值為市場參考匯率；實際現金換匯、刷卡與關務署報關匯率可能不同。可手動修改，並保留上次成功數值供離線使用。','Tỷ giá trực tuyến chỉ để tham khảo; tỷ giá tiền mặt, thẻ và Hải quan có thể khác. Có thể chỉnh tay và giữ giá trị cập nhật gần nhất để dùng ngoại tuyến.')}</small></section><section class="card section"><h2>${bi('新增支出','Thêm chi tiêu')}</h2><form id="expenseForm"><div class="field"><label>${bi('項目','Mục')}</label><input name="title" maxlength="60" required placeholder="${text('例：Fipper 拖鞋','VD: Dép Fipper')}"></div><div class="grid two"><div class="field"><label>${bi('分類','Phân loại')}</label><select name="category">${categories.map(category=>`<option value="${category[0]}">${category[1]} ${text(category[2],category[3])}</option>`).join('')}</select></div><div class="field"><label>${bi('金額','Số tiền')} MYR</label><input name="myr" type="number" inputmode="decimal" min="0.01" step="0.01" required></div></div><button class="primary-btn">${bi('加入記帳','Thêm giao dịch')}</button></form></section><section class="card section"><h2>${bi('分類統計','Thống kê theo loại')}</h2>${breakdownMarkup(items)}</section><section class="card section"><h2>${bi('支出紀錄','Lịch sử chi tiêu')}</h2><div id="expenseList">${items.map((item,index)=>{const category=categoryInfo(item.category);return `<div class="expense"><span class="expense-icon">${category[1]}</span><div><b>${escapeHTML(item.title)}</b><small>${bi(category[2],category[3])} · ${escapeHTML(item.date||'')}</small></div><div><b>RM ${Number(item.myr).toFixed(2)}</b><button class="danger-link" data-delete-expense="${index}">${bi('刪除','Xóa')}</button></div></div>`}).join('')||`<div class="empty">${text('尚無記錄','Chưa có dữ liệu')}</div>`}</div></section>`;
}

export function bindWallet(render){
  const rateInput=document.querySelector('#rateInput');
  const myrInput=document.querySelector('#convertMyr');
  const twdInput=document.querySelector('#convertTwd');
  const converterGrid=document.querySelector('#converterGrid');
  const swapButton=document.querySelector('#swapCurrency');
  const refreshButton=document.querySelector('#refreshRate');
  const rateStatus=document.querySelector('#rateStatus');
  const walletTwdTotal=document.querySelector('#walletTwdTotal');
  const walletTotalMyr=storage.get('wallet',[]).reduce((sum,item)=>sum+Number(item.myr||0),0);
  let lastEdited='myr';
  const currentRate=()=>Number(rateInput?.value)||7.5;
  const updateTwd=()=>{twdInput.value=(Number(myrInput.value||0)*currentRate()).toFixed(0)};
  const updateMyr=()=>{myrInput.value=(Number(twdInput.value||0)/currentRate()).toFixed(2)};
  const updateWalletTotal=()=>{
    if(walletTwdTotal)walletTwdTotal.textContent=`NT$ ${(walletTotalMyr*currentRate()).toFixed(0)}`;
  };
  const setRateStatus=(message,state='')=>{
    if(!rateStatus)return;
    rateStatus.textContent=message;
    rateStatus.dataset.state=state;
  };
  const onMyrInput=()=>{lastEdited='myr';updateTwd()};
  const onTwdInput=()=>{lastEdited='twd';updateMyr()};
  myrInput?.addEventListener('input',onMyrInput);
  myrInput?.addEventListener('change',onMyrInput);
  twdInput?.addEventListener('input',onTwdInput);
  twdInput?.addEventListener('change',onTwdInput);
  swapButton?.addEventListener('click',()=>{
    const swapped=converterGrid?.classList.toggle('swapped');
    const target=swapped?twdInput:myrInput;
    target?.focus();
    target?.select();
  });
  rateInput?.addEventListener('change',event=>{
    const rate=Math.max(0.01,Number(event.target.value)||7.5);
    event.target.value=formatRate(rate);
    storage.set('rate',rate);
    storage.set('rateMeta',{source:'manual',updatedAt:new Date().toISOString()});
    if(lastEdited==='twd')updateMyr();else updateTwd();
    updateWalletTotal();
    setRateStatus(bi('已使用手動匯率並儲存在本機。','Đã dùng tỷ giá chỉnh tay và lưu trên thiết bị.'),'success');
  });
  const refreshRate=async()=>{
    if(!navigator.onLine){
      setRateStatus(bi('目前離線，保留上次匯率；仍可手動修改。','Đang ngoại tuyến; giữ tỷ giá gần nhất và vẫn có thể chỉnh tay.'),'error');
      return;
    }
    refreshButton.disabled=true;
    setRateStatus(bi('正在取得市場參考匯率…','Đang lấy tỷ giá tham khảo…'));
    const controller=new AbortController();
    const timeout=setTimeout(()=>controller.abort(),10000);
    try{
      const response=await fetch(RATE_API,{cache:'no-store',signal:controller.signal});
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const data=await response.json();
      const rate=Number(data?.rates?.TWD);
      if(data?.result!=='success'||!Number.isFinite(rate)||rate<=0)throw new Error('Invalid rate');
      const updatedAt=data.time_last_update_unix
        ?new Date(data.time_last_update_unix*1000).toISOString()
        :new Date().toISOString();
      rateInput.value=formatRate(rate);
      storage.set('rate',rate);
      storage.set('rateMeta',{source:'ExchangeRate-API',updatedAt});
      if(lastEdited==='twd')updateMyr();else updateTwd();
      updateWalletTotal();
      setRateStatus(`${bi('市場參考匯率已更新','Đã cập nhật tỷ giá tham khảo')}：1 MYR = ${formatRate(rate)} TWD · ${formatUpdatedAt(updatedAt)}`,'success');
    }catch(error){
      setRateStatus(bi('線上更新失敗，已保留上次匯率；可稍後重試或手動修改。','Cập nhật thất bại; đã giữ tỷ giá gần nhất. Thử lại sau hoặc chỉnh tay.'),'error');
    }finally{
      clearTimeout(timeout);
      refreshButton.disabled=false;
    }
  };
  refreshButton?.addEventListener('click',refreshRate);
  const meta=storage.get('rateMeta',{});
  const lastUpdate=Date.parse(meta.updatedAt||'');
  if(!Number.isFinite(lastUpdate)||Date.now()-lastUpdate>RATE_MAX_AGE)refreshRate();
  document.querySelector('#expenseForm')?.addEventListener('submit',event=>{
    event.preventDefault();
    const form=new FormData(event.target);
    const items=storage.get('wallet',[]);
    items.unshift({title:String(form.get('title')).trim(),category:form.get('category'),myr:Number(form.get('myr')),date:new Date().toLocaleDateString('zh-TW')});
    storage.set('wallet',items);
    render();
  });
  document.querySelectorAll('[data-delete-expense]').forEach(button=>button.onclick=()=>{
    const items=storage.get('wallet',[]);
    items.splice(Number(button.dataset.deleteExpense),1);
    storage.set('wallet',items);
    render();
  });
}
