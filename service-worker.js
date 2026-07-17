const CACHE_NAME = "mtc-v2-milestone-1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/app.css",
  "./js/app.js",
  "./js/router.js",
  "./js/storage.js",
  "./js/i18n.js",
  "./js/theme.js",
  "./js/views.js",
  "./data/index.js",
  "./data/system/index.js",
  "./data/system/app-config.js",
  "./data/system/version.js",
  "./data/system/constants.js",
  "./data/system/language.js",
  "./data/system/currency-config.js",
  "./data/system/weather-config.js",
  "./data/trip/index.js",
  "./data/trip/trip-config.js",
  "./data/trip/leader-config.js",
  "./data/trip/announcement.js",
  "./data/trip/emergency.js",
  "./data/trip/itinerary.js",
  "./data/trip/members.js",
  "./data/trip/rooms.js",
  "./data/trip/seats.js",
  "./data/trip/daily-budget.js",
  "./data/trip/foods.js",
  "./data/trip/shopping.js",
  "./data/trip/souvenirs.js",
  "./data/trip/gallery.js",
  "./images/hero-pattern.svg",
  "./images/leader-placeholder.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
