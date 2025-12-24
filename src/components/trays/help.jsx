// External dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Internal dependencies
import Download from '../svg/download';
import styles from './styles.module.scss';

const HelpTray = () => {
	const data = useSelector( ( state ) => state.data );

	const clear = () => {
		indexedDB.deleteDatabase( 'syncbible' );
		window.location.href = '/';
	};

	const clearCache = async () => {
		if ( 'serviceWorker' in navigator && 'caches' in window ) {
			try {
				// Unregister all service workers
				const registrations = await navigator.serviceWorker.getRegistrations();
				for ( const registration of registrations ) {
					await registration.unregister();
				}

				// Delete all caches
				const cacheNames = await caches.keys();
				await Promise.all(
					cacheNames.map( ( cacheName ) => caches.delete( cacheName ) )
				);

				// Clear IndexedDB too
				indexedDB.deleteDatabase( 'syncbible' );

				alert( 'Cache cleared successfully! The page will now reload.' );
				window.location.reload( true );
			} catch ( error ) {
				console.error( 'Error clearing cache:', error );
				alert( 'Error clearing cache. Please try again or clear your browser cache manually.' );
			}
		} else {
			alert( 'Service worker or cache API not supported in this browser.' );
		}
	};

	const exportFile = ( fileName ) => {
		const element = document.createElement( 'a' );
		const file = new Blob(
			[ JSON.stringify( data[ fileName ], null, '\t' ) ],
			{
				type: 'text/plain',
			}
		);
		element.href = URL.createObjectURL( file );
		element.download = fileName + '.json';
		document.body.appendChild( element ); // Required for this to work in FireFox
		element.click();
	};

	return (
		<div>
			<div id="helpPanel" className={ styles.helpPanel }>
				<div className="content">
					<div className="content-padding">
						<p>
							<a href="/help/index.html">Watch help videos.</a>
						</p>
						<h3>Keyboard shortcuts</h3>
						<ul>
							<li>
								<strong>Go to a reference:</strong> just start
								typing
							</li>
							<li>
								<strong>Jump to chapter</strong>: type a number
							</li>
						</ul>
						<p>
							Versions with a * are indexed with Strong's numbers.
						</p>
					</div>
				</div>

				<h3>Legacy versions</h3>
				<p>
					<a href="https://javascripture.github.io/javascripture">
						javascripture.org
					</a>
					{ ' | ' }
					<a href="https://syncbible.github.io/syncbible">
						syncbible-webkit
					</a>
				</p>

				<h3>Texts</h3>
				<p>
					Original:
					<br />
					<a href="https://github.com/openscriptures/morphhb">
						Hebrew
					</a>{ ' ' }
					|{ ' ' }
					<a href="https://github.com/morphgnt/tischendorf">Greek</a>
				</p>
				<p className={ styles.inline }>
					<a href="https://github.com/syncbible/sync.bible/blob/main/public/bibles/LC.json">
						Literal consistent
					</a>{ ' ' }
					<a
						className={ styles.export }
						title="Export"
						onClick={ () => exportFile( 'LC' ) }
					>
						<Download />
					</a>
				</p>
				<p className={ styles.inline }>
					<a href="https://github.com/syncbible/sync.bible/blob/main/bibles/NMV_strongs.js">
						NMV_strongs
					</a>{ ' ' }
					<a
						className={ styles.export }
						title="Export"
						onClick={ () => exportFile( 'NMV_strongs' ) }
					>
						<Download />
					</a>
				</p>
				<p>
					ESV: The Holy Bible, English Standard Version ©2011
					Crossway Bibles, a division of Good News Publishers. All
					rights reserved.
				</p>
				<p>
					<a href="https://www.dropbox.com/s/7e05iklpkrtn46n/Genesis%20-%20Jeremiah.pdf?dl=0">
						Mark's Hebrew Literal
					</a>
					.<br />{ ' ' }
					<a href="https://www.dropbox.com/s/lrhzis4d9532gf4/Introduction.pdf?dl=0">
						Please read the introduction
					</a>
					.
				</p>
				<p>
					<br />
					Version: { globalThis.cacheKey }
				</p>
				<p>
					<a href="#" onClick={ clear }>
						Clear settings and start over
					</a>
				</p>
				<p>
					<a href="#" onClick={ clearCache }>
						Clear cache and reload
					</a>
				</p>
				<p>
					Built in Firefox.
					<br />
					Tested in Chrome.
				</p>
			</div>
		</div>
	);
};

export default React.memo( HelpTray );
