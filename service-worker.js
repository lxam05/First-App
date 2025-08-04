const CACHE_NAME = 'bitez-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  'explore.html',
  'feeding.html',
  'walking.html',
  'extras.html',
  'manifest.json',
  'images/icon-192.png',
  'images/icon-512.png',
  // You can add more files to cache here, such as CSS or other images
];

self.addEventListener('install', (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
