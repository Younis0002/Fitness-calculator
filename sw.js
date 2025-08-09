self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('fitness-calculator-v1').then(cache => {
            return cache.addAll([
                '/index.html',
                '/body-icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});