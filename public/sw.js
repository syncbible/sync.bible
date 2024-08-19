const cacheKey = new URL( location ).searchParams.get( 'cacheKey' );

self.addEventListener( 'install', function ( e ) {
	e.waitUntil(
		caches.open( cacheKey ).then( function ( cache ) {
			return cache.addAll( [
				'.',
				'index.html',

				// The Vite build output
				'assets/index.js',
				'assets/index.css',

				// Assets
				'manifest.json',
				'syncbible.svg',

				//data
				'data/strongsObjectWithFamilies.json',
				'data/strongs-dictionary.json',
				'data/searchResults.json',
				'data/crossReferences.json',

				//api - so that search works offline
				'api/searchApi.js',

				//workers
				'workers/worker.js',
			] );
		} )
	);
} );

function send_message_to_client( client, msg ) {
	return new Promise( function ( resolve, reject ) {
		var msg_chan = new MessageChannel();

		msg_chan.port1.onmessage = function ( event ) {
			if ( event.data.error ) {
				reject( event.data.error );
			} else {
				resolve( event.data );
			}
		};

		client.postMessage( msg, [ msg_chan.port2 ] );
	} );
}

function send_message_to_all_clients( msg ) {
	clients.matchAll().then( ( clients ) => {
		clients.forEach( ( client ) => {
			send_message_to_client( client, msg ).then( ( m ) =>
				console.log( 'SW Received Message: ' + m )
			);
		} );
	} );
}

self.addEventListener( 'fetch', function ( event ) {
	send_message_to_all_clients( cacheKey );
	event.respondWith(
		caches.match( event.request ).then( function ( response ) {
			return response || fetch( event.request );
		} )
	);
} );

// Delete unused cache
self.addEventListener( 'activate', function ( event ) {
	send_message_to_all_clients( cacheKey );
	var cacheWhitelist = [ cacheKey ];
	event.waitUntil(
		caches.keys().then( function ( keyList ) {
			return Promise.all(
				keyList.map( function ( key ) {
					if ( cacheWhitelist.indexOf( key ) === -1 ) {
						return caches.delete( key );
					}
				} )
			);
		} )
	);
} );

self.addEventListener( 'message', function ( event ) {
	if ( event.data.action === 'skipWaiting' ) {
		self.skipWaiting();
	}
} );
