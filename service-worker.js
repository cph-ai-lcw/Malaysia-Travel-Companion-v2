const CACHE = 'mtc-release-v610-github-hotfix-20260719';
const CORE = [
  './index.html','./css/app.css','./js/app.js','./js/qrcode-browser.js',
  './manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(async cache => {
    await Promise.allSettled(CORE.map(url => cache.add(url)));
  }).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const req = event.request;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req, {cache:'no-store'}).catch(() => caches.match('./index.html')));
    return;
  }
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(req).then(res => {
    if (res && res.ok) caches.open(CACHE).then(cache => cache.put(req, res.clone()));
    return res;
  }).catch(() => caches.match(req)));
});
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'CLEAR_CACHES') event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
});
