
self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('f').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       //'/styles/main.css'
     ]);
   })
 );
});

self.addEventListener('fetch',
  function(event) {
    console.log(event.request.url);
  }
);