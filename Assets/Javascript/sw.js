// install service worker

self.addEventListener('install', event => {
    console.log('Service worker has been installed');
    
})

// Aktivering af service worker

self.addEventListener('active', event => {
    console.log('Service worker has been activated');
    
})
// Fetch

self.addEventListener('fetch', event => {
    console.log('Fetch event', event)
    
})