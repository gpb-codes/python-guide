const CACHE = "python-guide-v1";
const BASE = new URL(self.registration.scope).pathname.replace(/\/$/, "");

const SHELL = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/temas/`,
  `${BASE}/sintaxis/`,
  `${BASE}/ejercicios/`,
  `${BASE}/quiz/`,
  `${BASE}/recursos/`,
  `${BASE}/manifest.webmanifest`,
  `${BASE}/python.png`,
  `${BASE}/icons/icon-192.png`,
  `${BASE}/icons/icon-512.png`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegaciones: red a la red, fallback a cache
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match(`${BASE}/index.html`)))
    );
    return;
  }

  // Recursos estáticos: cache primero, actualiza en segundo plano
  if (url.pathname.startsWith("/_next/") || url.pathname.startsWith(`${BASE}/`)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((response) => {
            if (response.ok) {
              const copy = response.clone();
              caches.open(CACHE).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
