const CACHE_VERSION = 'amt-malaysia-m23-v3';
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, {cache:'no-store'}).catch(() => fetch('./index.html', {cache:'no-store'})));
    return;
  }
  event.respondWith(fetch(event.request, {cache:'no-store'}).catch(() => caches.match(event.request)));
});
