// console.warn("hello from public folder - find me -  I am sw.js");

let cacheVal = "appV1";

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheVal).then((cache) => {
      return cache.addAll([
        "/static/js/bundle.js",
        "/static/js/0.chunk.js",
        "/static/js/main.chunk.js",
        '/static/js/1.chunk.js',
        "/index.html",
        "/",
        "./pages/About.js",
        "/main.aa40c9604f59d6c67a2a.hot-update.js",
        "../src/pages/Contact.js",
        "/main.67b21516d09e524f091e.hot-update.js"
      ]);
    })
  );
});



self.addEventListener('fetch', (event) => {
	if(!navigator.online){
    event.respondWith(
    caches.match(event.request).then((result)=>{
      if(result){
        return result
      }
      let requestUrl = event.request.clone();
      return fetch(requestUrl)
    })
    );
  }
});


// this.addEventListener("fetch",(event)=>{
//   event.respondWith(
//   caches.match(event.request).then((result)=>{
//     if(result){
//       return result;
//     }
//   })
//     )
// })


// this.addEventListener("fetch",(event)=>{
//   event.respondWith((async () => {
//   const cachedResponse = await caches.match(event.request);
//   if (cachedResponse) {
//     return cachedResponse;
//   }

//   const response = await fetch(event.request);

//   if (!response || response.status !== 200 || response.type !== 'basic') {
//     return response;
//   }

//   // if (ENABLE_DYNAMIC_CACHING) {
//   //   const responseToCache = response.clone();
//   //   const cache = await caches.open(DYNAMIC_CACHE)
//   //   await cache.put(event.request, response.clone());
//   // }

//   return response;
// }));
// })


