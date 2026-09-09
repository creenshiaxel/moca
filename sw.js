// MOCA TEXT v6: no persistent app-shell cache; always use fresh GitHub Pages files.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())await caches.delete(k);await self.registration.unregister();})()));
