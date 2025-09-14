const CACHE_NAME = 'qortexmq-cache-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/docs.html',
  '/downloads.html',
  '/404.html',
  '/assets/css/styles.css',
  '/assets/js/theme.js',
  '/assets/js/animations.js',
  '/assets/js/main.js',
  '/assets/js/downloads.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((k) => k !== CACHE_NAME && caches.delete(k)))));
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // For navigations, try network, on 404 fallback to custom 404
  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const resp = await fetch(request);
        if (resp.status === 404) {
          const cached404 = await caches.match('/404.html');
          return cached404 || resp;
        }
        // Cache successful navigations
        const cache = await caches.open(CACHE_NAME);
        cache.put(request, resp.clone());
        return resp;
      } catch (e) {
        const cached = await caches.match(request);
        return cached || caches.match('/404.html');
      }
    })());
    return;
  }

  // For other GETs: cache-first, then network, then fallback cached
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((resp) => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
      return resp;
    }).catch(() => cached))
  );
});


