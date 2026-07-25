const CACHE_NAME = "ebookhub-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/404.html",
    "/offline.html",
    "/about.html",
    "/category.html",
    "/contact.html",
    "/detail.html",
    "/downloads.html",
    "/privacy.html",
    "/terms.html",
    "/assets/css/style.css"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        fetch(event.request)
            .catch(() =>
                caches.match(event.request)
                    .then(response => response || caches.match("/offline.html"))
            )
    );
});
