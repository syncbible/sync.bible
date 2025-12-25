// External
import { useEffect, useMemo, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replace } from '@lagunovsky/redux-react-router';

// Internal
import Dock from './dock';
import ReferenceWrapper from '../components/reference-wrapper';
import KeyboardShortcuts from './keyboard-shortcuts';
import Trays from './trays';
import WordHighlight from './word-highlight';
import InitialView from './inital-view';
import styles from './root.module.scss';
import { closeReferenceSelectorMobile, fetchDataAsync, settingsChange } from '../actions';
import { rootClasses } from './utils';
import { selectAllSettings, selectReferenceData } from '../selectors';
import { getReferenceFromHash } from '../lib/reference';
import bible from '../data/bible';

export default function Root() {
	const dispatch = useDispatch();
	const hasInitialized = useRef( false );

	// On initial mount, process URL to set reference and interface language
	// URL takes precedence over persisted state
	useEffect( () => {
		if ( ! hasInitialized.current ) {
			hasInitialized.current = true;

			if ( window.location.hash ) {
				const hash = window.location.hash.replace( '#', '' );
				if ( hash && hash !== '/' ) {
					// Parse the hash to extract reference data
					const parsedReferences = getReferenceFromHash( hash );
					if ( parsedReferences && parsedReferences.length > 0 && parsedReferences[ 0 ] ) {
						const firstReference = parsedReferences[ 0 ];
						const version = firstReference.version;

						// Set interface language from the first version in the URL
						if ( version && bible.Data.supportedVersions[ version ] ) {
							dispatch( settingsChange( 'interfaceLanguage', version ) );
						}
					}

					// Navigate to URL to ensure it takes precedence over persisted state
					const expectedPath = hash.startsWith( '/' ) ? hash : '/' + hash;
					dispatch( replace( expectedPath ) );
				}
			}
		}
	}, [ dispatch ] );

	// Fetch the other data we need - we precache this as a lot of features depend on it
	// and we want them to work in offline mode.
	// Don't store it in the global state as that is cached in local storage
	// and we don't want to fill up local storage with immutable data.
	useEffect( () => {
		dispatch( fetchDataAsync( 'crossReferences' ) );
		dispatch( fetchDataAsync( 'strongsDictionary' ) );
		dispatch( fetchDataAsync( 'strongsObjectWithFamilies' ) );
		dispatch( fetchDataAsync( 'lemmas' ) ); // So that stats and comparison tabs work offline.
	}, [] ); // Use the useEffect so this runs after the component mounts.

	const reference = useSelector( selectReferenceData );
	const settings = useSelector( selectAllSettings );
	const { darkMode, expandedSearchResults, fontFamily, fontSize } =
		settings;

	// Memoize body styles to avoid recalculation
	const bodyStyles = useMemo( () => {
		return `body, .root { font-family: ${ fontFamily }; font-size: ${ fontSize }; }`;
	}, [ fontFamily, fontSize ] );

	// Memoize callback to avoid recreating on every render
	const clearReferenceSelector = useCallback( () => {
		dispatch( closeReferenceSelectorMobile() );
	}, [ dispatch ] );

	useEffect( () => {
		// show the fallback errors which are hidden initially.
		// this does mean that if this component has an error then nothing will load.
		window.errors.style.display = 'block';
	}, [] );

	// Memoize classes to avoid recalculation
	const classes = useMemo(
		() => rootClasses( darkMode, expandedSearchResults ),
		[ darkMode, expandedSearchResults ]
	);

	// Memoize reference component
	const referenceComponent = useMemo(
		() => (
			<>
				<Dock />
				<div onClick={ clearReferenceSelector }>
					<ReferenceWrapper />
				</div>
			</>
		),
		[ clearReferenceSelector ]
	);

	return (
		<div className={ classes }>
			<div className={ styles.root }>
				{ reference.length > 0 && <Trays /> }

				<style>{ bodyStyles }</style>
				<KeyboardShortcuts />
				<WordHighlight />
				{ referenceComponent }
				<InitialView />
			</div>
		</div>
	);
}
