self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('helpar').then(function(cache) {
      return cache.addAll([
        '/',
        './jq.min.js',
        './bootstrap.bundle.min.js.map',
        './bootstrap.bundle.min.js',
        
        '../css/work.css',
        '../css/us.css',
        '../css/swiper.css',
        '../css/index.css',
        '../css/bootstrap.min.css.map',
        '../css/bootstrap.min.css'
      ]).catch(function(error) {
        console.error('Cache addAll failed:', error);
      });
    })
  );
});

self.addEventListener('fetch', function(event) {  
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).catch(function(error) {
        console.error('Fetch failed:', error);
      });
    })
  );
});
