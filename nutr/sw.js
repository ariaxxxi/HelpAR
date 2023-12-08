self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('helpar').then(function(cache) {
      return cache.addAll([
        '/',
        './js/jq.min.js',
        './js/bootstrap.bundle.min.js.map',
        './js/bootstrap.bundle.min.js',
        
        './css/work.css',
        './css/us.css',
        './css/swiper.css',
        './css/index.css',
        './css/bootstrap.min.css.map',
        './css/bootstrap.min.css'
      ]);
    })
  );
  });

self.addEventListener('fetch', function(event) {  
event.respondWith(
  caches.match(event.request).then(function(response) {
  return response || fetch(event.request);
  })
);
});