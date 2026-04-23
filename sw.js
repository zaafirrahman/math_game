// Math Arena Service Worker
// Network-first strategy - always fetch latest content from server
// No pre-caching to ensure dynamic content (quizzes, progress) stays fresh

const CACHE_NAME = 'math-arena-v1';

// Install - skip waiting, no pre-cache
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Activate - clean up old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch - network first, fallback to cache only for static assets
self.addEventListener('fetch', (e) => {
  const url = e.request.url;

  // Skip non-GET requests
  if (e.request.method !== 'GET') return;

  // Always fetch HTML and dynamic content from network
  if (url.endsWith('.html') || url.includes('/lesson') || url.includes('/section')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // For static assets (CSS, JS, images), try network first, then cache
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        // Clone and cache successful responses
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseClone);
        });
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
