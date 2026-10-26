/* Alte Adresse: Service Worker räumt sich selbst ab und leitet offene Fenster zu klopost.github.io */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  await self.registration.unregister();
  const cs = await self.clients.matchAll({ type: "window" });
  cs.forEach((c) => { const u = new URL(c.url); c.navigate("https://klopost.github.io/" + u.search + u.hash); });
})()));
