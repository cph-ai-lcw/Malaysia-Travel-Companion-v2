// v6.2 Stable Cleanup: retirement worker.
// It removes every legacy PWA cache and unregisters itself. Offline support will
// return only after the production cache test suite is complete.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.map(key=>caches.delete(key)));
  await self.registration.unregister();
  const clients=await self.clients.matchAll({type:'window'});
  clients.forEach(client=>client.navigate(client.url));
})()));
