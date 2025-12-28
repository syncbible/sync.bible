// Simple cache version - automatically generated from build
const CACHE_VERSION = 'sync.bible.24.27784a4';
const CACHE_NAME = CACHE_VERSION;

// Files to cache
const FILES_TO_CACHE = [
	'/',
	'/index.html',
	'/manifest.json',
	'/syncbible.svg',
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
			return response || fetch( event.request );
		} )
	);
} );
