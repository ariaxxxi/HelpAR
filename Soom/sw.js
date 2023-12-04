self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('helpar-soom').then(function(cache) {
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
          './css/bootstrap.min.css',

          
        

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

// const CACHE_NAME = `helpar-soom`;

// // Use the install event to pre-cache all initial resources.
// self.addEventListener('install', event => {
//   event.waitUntil((async () => {
//     const cache = await caches.open("static");
//     cache.addAll([
//       '/',
//       './js/jq.min.js',
//       './js/bootstrap.bundle.min.js.map',
//       './js/bootstrap.bundle.min.js',
      
//       './css/work.css',
//       './css/u.css',
//       './css/swiper.css',
//       './css/index.css',
//       './css/index.css',
//       './css/bootstrap.min.css.map',
//       './css/bootstrap.min.css'

//     ]);
//   })());
// });

// self.addEventListener('fetch', event => {
//   event.respondWith((async () => {
//     const cache = await caches.open(CACHE_NAME);

//     // Get the resource from the cache.
//     const cachedResponse = await cache.match(event.request);
//     if (cachedResponse) {
//       return cachedResponse;
//     } else {
//         try {
//           // If the resource was not in the cache, try the network.
//           const fetchResponse = await fetch(event.request);

//           // Save the resource in the cache and return it.
//           cache.put(event.request, fetchResponse.clone());
//           return fetchResponse;
//         } catch (e) {
//           // The network failed.
//         }
//     }
//   })());
// });