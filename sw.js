// build: 2026-07-17-1
// Minimaler Service Worker — nur für PWA-Installierbarkeit (Homescreen-Icon).
// Kein Offline-Caching, da die App live Supabase-Daten braucht.
self.addEventListener('install', function(e) { self.skipWaiting(); });
self.addEventListener('activate', function(e) { self.clients.claim(); });
self.addEventListener('fetch', function(e) {
  // Bewusst kein Caching: immer live vom Netz laden.
});
