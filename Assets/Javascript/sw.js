// install service worker

self.addEventListener('install', event => {
    console.log('Service worker has been installed');
    
})

// Aktivering af service worker

self.addEventListener('activate', event => {
    console.log('Service worker has been activated');
    
})
// Fetch
// cache er åben

self.addEventListener('fetch', event => {// Kontroller svar på request
	event.respondWith(
		
		// Kig efter file match i cache 
		caches.match(event.request).then(cacheRes => {
			// Returner match fra cache / hent fil på server
			// ...
		}).catch(() => {
			// Hvis ovenstående giver fejl kaldes fallback siden			
			return caches.match('/pages/fallback.html')
		})
	)
    // caches.open('my-cache').then(function(cache){

    // });
    // console.log('Fetch event', event)
    
})
const assets = [
    'index.html',
    'Assets/Javascript/View/view.js',
    'manifest.json',
    'Assets/CSS/site.css',
    'Assets/icons/icon_72x72.png',
    'Assets/icons/icon_96x96.png',
    'Assets/icons/icon_128x128.png',
    'Assets/icons/icon_144x144.png',
    'Assets/icons/icon_152x152.png',
    'Assets/icons/icon_192x192.png',
    'Assets/icons/icon_384x384.png',
    'Assets/icons/icon_512x512.png'
]

caches.open('my-cache').then(cache =>{
    // Tilføj en enkelt fil
    // cache.add();

    //tilføj flere filer
    cache.addAll('Assets');
})
caches.match('Assets').then(response => {
  if (response) {
    // Fil findes i cache - brug den
  } else {
    // Fil findes ikke i cache - hent den
  }
});
caches.open('my-cache').then(cache => {
  cache.put('Assets', new Response('new content'));
});
caches.open('my-cache').then(cache => {
  cache.delete('Assets');
});
caches.open('my-cache').then(cache => {
  cache.add('Assets').catch(error => {
    // Fejl håndtering
  });
});
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/site.css',
        '/app.js'
      ]);
    })
  );
});