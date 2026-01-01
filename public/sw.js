// Simple cache version - automatically generated from build
const CACHE_VERSION = 'sync.bible.25.d9cff32';
const CACHE_NAME = CACHE_VERSION;

// Files to cache
const FILES_TO_CACHE = [
	'/',
	'/index.html',
	'/manifest.json',
	'/syncbible.svg',
	'/assets/index.js',
	'/assets/index.css',
	'/data/strongsObjectWithFamilies.json',
	'/data/strongsDictionary.json',
	'/data/crossReferences.json',
	'/data/lemmas.json',
	'/api/searchApi.js',
	'/workers/worker.js',
];

// Install - cache files
self.addEventListener( 'install', ( event ) => {
	event.waitUntil(
		caches.open( CACHE_NAME ).then( ( cache ) => {
			return cache.addAll( FILES_TO_CACHE );
		} )
	);
	// Force the waiting service worker to become the active service worker
	self.skipWaiting();
} );

// Activate - clean up old caches
self.addEventListener( 'activate', ( event ) => {
	event.waitUntil(
		caches.keys().then( ( cacheNames ) => {
			return Promise.all(
				cacheNames.map( ( cacheName ) => {
					if ( cacheName !== CACHE_NAME ) {
						return caches.delete( cacheName );
					}
				} )
			);
		} )
	);
	// Take control of all pages immediately
	self.clients.claim();
} );

// Fetch - serve from cache, fallback to network
self.addEventListener( 'fetch', ( event ) => {
	event.respondWith(
		caches.match( event.request ).then( ( response ) => {
			// If we have a cached response, return it
			if ( response ) {
				return response;
			}

			// Otherwise, fetch from network and cache it
			return fetch( event.request ).then( ( networkResponse ) => {
				// Only cache successful responses
				if ( ! networkResponse || networkResponse.status !== 200 || networkResponse.type === 'error' ) {
					return networkResponse;
				}

				// Cache responses for same-origin requests
				if ( event.request.url.startsWith( self.location.origin ) ) {
					const responseToCache = networkResponse.clone();
					caches.open( CACHE_NAME ).then( ( cache ) => {
						cache.put( event.request, responseToCache );
					} );
				}

				return networkResponse;
			} ).catch( () => {
				// If network fails and we don't have a cache, return offline page
				// For now, just fail gracefully
				return new Response( 'Offline', { status: 503, statusText: 'Service Unavailable' } );
			} );
		} )
	);
} );
