// External
import { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Internal
import Dock from './dock';
import ReferenceWrapper from '../components/reference-wrapper';
import KeyboardShortcuts from './keyboard-shortcuts';
import Trays from './trays';
import WordHighlight from './word-highlight';
import InitialView from './inital-view';
import styles from './root.module.scss';
import { closeReferenceSelectorMobile, fetchDataAsync } from '../actions';
import { rootClasses } from './utils';
import { selectAllSettings, selectReferenceData } from '../selectors';

export default function Root() {
	const dispatch = useDispatch();

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
	const { darkMode, compareMode, expandedSearchResults, fontFamily, fontSize } =
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
		() => rootClasses( darkMode, compareMode, expandedSearchResults ),
		[ darkMode, compareMode, expandedSearchResults ]
	);

	// Memoize reference component
	const referenceComponent = useMemo(
		() =>
			! compareMode && (
				<>
					<Dock />
					<div onClick={ clearReferenceSelector }>
						<ReferenceWrapper />
					</div>
				</>
			),
		[ compareMode, clearReferenceSelector ]
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
