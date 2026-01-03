// External dependencies.
import { push } from '@lagunovsky/redux-react-router';

// Internal dependencies.
import {
	addColumnHelper,
	deleteColumnHelper,
	getAllLemmasFromReference,
	goToReferenceHelper,
	getSyncReference,
	getUnSyncReference,
	getNewVersionHash,
	sortReferences,
	getHarmonisedVerses,
	findHarmonisedReference,
} from '../lib/reference.js';
import { isValidWord } from '../lib/word.js';
import bible from '../data/bible.js';

const cacheKey = 'sync.bible.25.6b0e81f';

export const goToReferenceAction = ( reference, targetColumn ) => {
	return function ( dispatch, getState ) {
		const state = getState();

		// Preserve the old version.
		const version = state.reference[ 0 ].version;
		reference.version = version;

		if ( typeof targetColumn === 'undefined' ) {
			targetColumn = state.settings.targetColumn;
		}

		// Harmonise reference if that setting is on.
		const inSync = state.settings.inSync;

		if ( inSync === 'harmonised' ) {
			reference = findHarmonisedReference( reference );
		}

		const newHash = goToReferenceHelper(
			state.reference,
			reference,
			targetColumn,
			state.settings.inSync
		);
		dispatch( push( newHash ) );
	};
};

export const goToChapterAction = ( chapterToGoTo ) => {
	return function ( dispatch, getState ) {
		const state = getState();
		const bookId = bible.getBookId( state.reference[ 0 ].book );
		const reference = { ...state.reference[ 0 ] };
		reference.verse = 1;
		if ( bible.Data.verses[ bookId - 1 ][ chapterToGoTo - 1 ] ) {
			reference.chapter = chapterToGoTo;
		} else {
			// Go to the last chapter.
			reference.chapter = bible.Data.verses[ bookId - 1 ].length;
		}
		dispatch( goToReferenceAction( reference ) );
	};
};

export const syncReferences = () => {
	return function ( dispatch, getState ) {
		const state = getState();
		const newHash = getSyncReference( state.reference );
		dispatch( push( newHash ) );
		dispatch( settingsChange( 'inSync', true ) );
	};
};

export const unSyncReferences = () => {
	return function ( dispatch, getState ) {
		const state = getState();
		const newHash = getUnSyncReference( state.reference );
		dispatch( push( newHash ) );
		dispatch( settingsChange( 'inSync', false ) );
	};
};

export const addColumnAction = ( version = '' ) => {
	return function ( dispatch, getState ) {
		const state = getState();
		const newHash = addColumnHelper( state.reference, version );
		dispatch( push( newHash ) );
	};
};

export const harmoniseAction = () => {
	return function ( dispatch, getState ) {
		const state = getState();
		const books = [ 'Matthew', 'Mark', 'Luke', 'John' ];
		const bookToHarmonise = books.indexOf( state.reference[ 0 ].book );
		let harmonisedReference = {
			book: 'Harmony',
			chapter: 1,
			verse: 1,
		};
		if ( bookToHarmonise > -1 ) {
			harmonisedReference = findHarmonisedReference(
				state.reference[ 0 ]
			);
		}

		const versions = state.reference.map( ( { version } ) => version );
		const referenceArray = books.map( ( book, index ) => {
			return {
				...harmonisedReference,
				version: versions[ index ] ?? versions[ 0 ],
			};
		} );

		dispatch( settingsChange( 'inSync', 'harmonised' ) );
		const newHash = getNewVersionHash( referenceArray );
		dispatch( push( newHash ) );
	};
};

export const deleteColumnAction = () => {
	return function ( dispatch, getState ) {
		const state = getState();
		const newHash = deleteColumnHelper( state.reference );
		dispatch( push( newHash ) );
	};
};

export const setTrayVisibilityFilter = ( filter ) => {
	return {
		type: 'SET_TRAY_VISIBILITY_FILTER',
		filter,
	};
};

export const toggleTray = ( trayId ) => {
	return {
		type: 'TOGGLE_TRAY',
		trayId,
	};
};

export const addTray = ( trayId ) => {
	return {
		type: 'ADD_TRAY',
		trayId,
	};
};

export const removeTray = ( trayId ) => {
	return {
		type: 'REMOVE_TRAY',
		trayId,
	};
};

export const setScrollChapter = ( book, chapter, index ) => {
	return {
		book,
		chapter,
		index,
		type: 'SET_SCROLL_CHAPTER',
	};
};

export const setScrollChapterHarmonised = ( chapter, verseNumber ) => {
	const harmonisedChapters = getHarmonisedVerses( { chapter, verseNumber } );
	const books = [ 'Matthew', 'Mark', 'Luke', 'John' ];
	return {
		type: 'SET_ALL_SCROLL_CHAPTERS',
		chapters: harmonisedChapters.map( ( reference, index ) => {
			return {
				book: books[ index ],
				chapter: reference[ 0 ],
			};
		} ),
	};
};

export function setScrollChapterSynced( book, chapter ) {
	return {
		book,
		chapter,
		type: 'SET_SCROLL_CHAPTER_SYNCED',
	};
}

export const settingsChange = ( settingName, settingValue ) => {
	const returnValue = {
		type: 'SETTINGS_CHANGE',
	};
	returnValue[ settingName ] = settingValue;

	return returnValue;
};

export const addVersion = ( version ) => {
	const returnValue = {
		type: 'ADD_VERSION',
	};
	returnValue[ 'version' ] = version;

	return returnValue;
};

export const toggleVersion = ( version ) => {
	const returnValue = {
		type: 'TOGGLE_VERSION',
	};
	returnValue[ 'version' ] = version;

	return returnValue;
};

export const showCrossReferences = ( reference ) => {
	return {
		reference,
		type: 'SHOW_CROSS_REFERENCES',
	};
};

export const findSimilarReferences = ( reference, listItem ) => {
	return function ( dispatch, getState ) {
		const searchParameters = {
			clusivity: 'inclusive',
			version: 'original',
			lemma: getAllLemmasFromReference(
				reference,
				getState().data.original
			),
			range: 'verse',
		};

		// Send data to our worker.
		postMessageToWorker( 'search', searchParameters, getState() );

		dispatch( {
			reference,
			type: 'FIND_SIMILAR_REFERENCES',
		} );
	};
};

function postMessageToWorker( task, parameters, state ) {
	let data = state.data[ parameters.version ];
	if ( parameters.version === 'LC' ) {
		data = state.data[ 'original' ];
	}
	worker.postMessage( {
		task,
		parameters,
		data,
	} );
}

const getResultsForWord = ( versionData, strongsNumber ) => {
	const resultData = [];
	Object.keys( versionData ).forEach( ( book ) =>
		versionData[ book ].forEach( ( chapter, chapterNumber ) =>
			chapter.forEach( ( verse, verseNumber ) =>
				verse.forEach( ( word ) => {
					const lemmaArray = word[ 1 ] && word[ 1 ].split( / |\// ); // should also split by &.
					if (
						lemmaArray &&
						lemmaArray.indexOf( strongsNumber ) > -1
					) {
						resultData.push( {
							reference:
								book +
								'.' +
								( chapterNumber + 1 ) +
								'.' +
								( verseNumber + 1 ),
							word,
						} );
					}
				} )
			)
		)
	);
	return resultData.sort( sortReferences );
};

export const addWord = ( word ) => {
	return function ( dispatch, getState ) {
		// Send data to our worker.
		dispatch( addToList( word ) );
	};
};

export const addSearchResults = ( word ) => {
	return function ( dispatch, getState ) {
		word.data.clusivity = 'exclusive';
		word.data.range = 'verse';
		const state = getState();
		const versionData = state.data[ word.data.version ];
		dispatch( {
			terms: word.data,
			results: getResultsForWord( versionData, word.data.lemma ),
			type: 'ADD_SEARCH_RESULTS',
		} );
	};
};

export const removeWord = ( strongsNumber ) => {
	return {
		strongsNumber,
		type: 'REMOVE_WORD',
	};
};

export const clearAll = () => {
	return {
		type: 'CLEAR_ALL',
	};
};

export const toggleWord = ( strongsNumber ) => {
	return {
		strongsNumber,
		type: 'TOGGLE_WORD',
	};
};

export const openAdvancedSearch = () => {
	return {
		type: 'OPEN_ADVANCED_SEARCH',
	};
};

export const closeAdvancedSearch = () => {
	return {
		type: 'CLOSE_ADVANCED_SEARCH',
	};
};

export const addSearch = ( terms, target ) => {
	return function ( dispatch, getState ) {
		// Send data to our worker.
		postMessageToWorker( target, terms, getState() );

		const searchItem = {
			listType: 'search',
			data: terms,
			visible: true,
		};
		dispatch( addToList( searchItem ) );
	};
};

export const searchForWord = ( parameters ) => {
	return function ( dispatch, getState ) {
		dispatch( wordResultsLoading( parameters ) );

		// Send data to our worker.
		postMessageToWorker( 'word', parameters, getState() );
	};
};

export const wordResultsLoading = ( terms ) => {
	return {
		terms,
		type: 'WORD_RESULTS_LOADING',
	};
};

export const removeSearch = ( terms ) => {
	return {
		terms,
		type: 'REMOVE_SEARCH',
	};
};

export const toggleSearch = ( terms ) => {
	return {
		terms,
		type: 'TOGGLE_SEARCH',
	};
};

export const clearSearch = ( terms ) => {
	return {
		terms,
		type: 'CLEAR_SEARCH',
	};
};

export const setCurrentVerse = ( terms, index ) => {
	return {
		index,
		terms,
		type: 'SET_CURRENT_VERSE',
	};
};

export const goToNextCurrentVerse = () => {
	return {
		type: 'GO_TO_NEXT_CURRENT_VERSE',
	};
};

export const goToPreviousCurrentVerse = () => {
	return {
		type: 'GO_TO_PREVIOUS_CURRENT_VERSE',
	};
};

export const changeVersion = ( index, version ) => {
	return function ( dispatch, getState ) {
		const state = getState();
		const newHash = getNewVersionHash(
			state.reference,
			parseInt( index ),
			version
		);
		dispatch( push( newHash ) );
	};
};

export const setReference = ( reference, index ) => {
	return {
		reference,
		index,
		type: 'SET_REFERENCE',
	};
};

export const referenceSelectorMobileSetBook = (
	bookName,
	bookIndex,
	index
) => {
	return {
		bookName,
		bookIndex,
		index,
		type: 'REFERENCE_SELECTOR_MOBILE_SET_BOOK',
	};
};

export const closeReferenceSelectorMobile = ( index ) => {
	return {
		index,
		type: 'CLOSE_REFERENCE_SELECTOR_MOBILE',
	};
};

export const toggleReferenceSelectorMobile = ( index ) => {
	return {
		index,
		type: 'TOGGLE_REFERENCE_SELECTOR_MOBILE',
	};
};

export const openReferenceSelectorMobile = ( index ) => {
	return {
		index,
		type: 'OPEN_REFERENCE_SELECTOR_MOBILE',
	};
};

export const activateSearchSelect = ( target ) => {
	return {
		target,
		type: 'ACTIVATE_SEARCH_SELECT',
	};
};

export const deactivateSearchSelect = () => {
	return {
		type: 'DEACTIVATE_SEARCH_SELECT',
	};
};

export const updateSearchForm = ( name, value ) => {
	return {
		name,
		value,
		type: 'UPDATE_SEARCH_FORM',
	};
};

export const appendToSearchForm = ( name, value ) => {
	return {
		name,
		value,
		type: 'APPEND_TO_SEARCH_FORM',
	};
};

export const clearSearchForm = () => {
	return {
		type: 'CLEAR_SEARCH_FORM',
	};
};

function requestData( key ) {
	return {
		type: 'REQUEST_DATA',
		key,
	};
}

export function receiveData( key, data ) {
	return {
		type: 'RECEIVE_DATA',
		key,
		data,
	};
}

export const fetchData = ( key ) => {
	return async function ( dispatch, getState ) {
		const { data } = getState(); // check that the data isn't already in state
		if ( data[ key ] ) {
			return;
		}

		dispatch( requestData( key ) );

		try {
			const response = await fetch( `bibles/${ key }.json` );
			if ( ! response.ok ) {
				throw new Error( `Response status: ${ response.status }` );
			}

			const json = await response.json();
			if ( json.books ) {
				dispatch( receiveData( key, json.books ) );
			} else {
				dispatch( receiveData( key, json ) );
			}
			caches.open( cacheKey ).then( function ( cache ) {
				return cache.addAll( [ 'bibles/' + key + '.json' ] );
			} );
		} catch ( error ) {
			console.log( error.message );
		}

		// If we load NMV_strongs, we need to load the translation data as well.
		if ( key === 'NMV_strongs' ) {
			try {
				const response = await fetch( 'data/farsi-translations.json' );
				if ( ! response.ok ) {
					throw new Error( `Response status: ${ response.status }` );
				}

				const json = await response.json();
				dispatch( receiveData( 'farsiTranslations', json ) );
				caches.open( cacheKey ).then( function ( cache ) {
					return cache.addAll( [ 'data/farsi-translations.json' ] );
				} );
			} catch ( error ) {
				console.log( error.message );
			}
		}
	};
};

export function fetchDataAsync( key ) {
	return async function ( dispatch, getState ) {
		const { data } = getState();
		if ( data[ key ] ) {
			return;
		}

		try {
			const response = await fetch( `data/${ key }.json` );
			if ( ! response.ok ) {
				throw new Error( `Response status: ${ response.status }` );
			}

			const json = await response.json();
			dispatch( receiveData( key, json ) );
			// Add to the cache - most things are already, except comparisonData.
			caches.open( cacheKey ).then( function ( cache ) {
				return cache.addAll( [ `data/${ key }.json` ] );
			} );
		} catch ( error ) {
			console.log( error.message );
		}
	};
}

export const setReferenceInfo = ( reference ) => {
	return {
		type: 'SET_REFERENCE_INFO',
		reference: reference,
	};
};

export const setReferenceInfoCompareWith = ( referenceToCompareWith ) => {
	return {
		type: 'SET_REFERENCE_INFO_COMPARE_WITH',
		referenceToCompareWith: referenceToCompareWith,
	};
};

export const setReferenceInfoLimit = ( limit ) => {
	return {
		type: 'SET_REFERENCE_INFO_LIMIT',
		limit,
	};
};

export const selectWord = ( props ) => {
	const { word, lemma, morph, version } = props;

	return function ( dispatch, getState ) {
		const searchSelect = getState().searchSelect;
		const data = getState().data;
		if ( searchSelect ) {
			// If there's a book then this is a reference.
			if ( searchSelect.book ) {
				// Get the reference.
				const { book, chapter, verse, index } = searchSelect;

				// Get the current word
				const currentWord =
					data[ 'NMV_strongs' ][ book ][ chapter ][ verse ][ index ];

				// Create a new verse array with the updated word
				const updatedVerse = [
					...data[ 'NMV_strongs' ][ book ][ chapter ][ verse ],
				];
				updatedVerse[ index ] = [ currentWord[ 0 ], lemma ];

				// Create new nested objects to ensure reference changes
				const updatedNMVStrongs = {
					...data[ 'NMV_strongs' ],
					[ book ]: {
						...data[ 'NMV_strongs' ][ book ],
						[ chapter ]: [
							...data[ 'NMV_strongs' ][ book ][ chapter ],
						],
					},
				};
				updatedNMVStrongs[ book ][ chapter ][ verse ] = updatedVerse;

				// Push the update to the store with new reference
				dispatch( receiveData( 'NMV_strongs', updatedNMVStrongs ) );
			} else {
				dispatch(
					appendToSearchForm( searchSelect, props[ searchSelect ] )
				);
				dispatch( updateSearchForm( 'version', version ) );
			}
			dispatch( deactivateSearchSelect() );
		} else {
			dispatch( addTray( 'word' ) );

			lemma &&
				lemma.split( /[\&\s]/ ).map( ( strongsNumber ) => {
					if ( ! isValidWord( strongsNumber ) ) {
						return;
					}

					dispatch(
						addWord( {
							listType: 'word',
							data: {
								lemma: strongsNumber,
								morphology: morph,
								version: version,
								clickedWord: word,
							},
							visible: true,
						} )
					);
				} );
		}
	};
};

export const addToList = ( item ) => {
	return ( dispatch, getState ) => {
		const state = getState();
		// Get all items of the same type from the list
		const itemsOfSameType = state.list.filter(
			( listItem ) => listItem.listType === item.listType
		);
		// Get their IDs
		const itemIdsToClose = itemsOfSameType.map( ( listItem ) => listItem.id );

		dispatch( {
			type: 'ADD_TO_LIST',
			item: item,
			itemIdsToClose: itemIdsToClose,
		} );
	};
};

export const removeFromList = ( item ) => {
	return function ( dispatch ) {
		dispatch( removeSearch( item ) );
		dispatch( {
			type: 'REMOVE_FROM_LIST',
			item: item,
		} );
	};
};

export const removeTypeFromList = ( listType ) => {
	return {
		type: 'REMOVE_TYPE_FROM_LIST',
		listType: listType,
	};
};

export const toggleListItemVisible = ( item ) => {
	return {
		type: 'TOGGLE_LIST_ITEM_VISIBLE',
		item: item,
	};
};

export const closeAllListItems = ( trayId ) => {
	return ( dispatch, getState ) => {
		const list = getState().list;
		// Get all list items of this type
		const itemsOfType = list.filter( ( item ) => item.listType === trayId );
		// Get their IDs
		const itemIds = itemsOfType.map( ( item ) => item.id );

		dispatch( {
			type: 'CLOSE_ALL_LIST_ITEMS',
			itemIds,
		} );
	};
};

export const setCurrentListResult = ( id, index ) => {
	return {
		id,
		index,
		type: 'SET_CURRENT_LIST_RESULT',
	};
};

export const updateData = ( { version, word, lemma, morph, translation } ) => {
	return {
		type: 'UPDATE_DATA',
		version,
		word,
		lemma,
		morph,
		translation,
	};
};
