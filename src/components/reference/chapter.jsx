// External
import React, {
	createRef,
	useEffect,
	useRef,
	Fragment,
	useState,
	useMemo,
} from 'react';
import { Waypoint } from 'react-waypoint';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import { Virtuoso } from 'react-virtuoso';

// Internal
import bible from '../../data/bible.js';
import { fetchData, setScrollChapterHarmonised } from '../../actions';
import Title from './title';
import VerseWrapper from './verse-wrapper';
import styles from './styles.module.scss';
import {
	mapVersionToData,
	getNumberOfVerses,
	getHarmonisedReference,
} from '../../lib/reference';
import copyToClipboardHelper from '../../lib/copy-to-clipboard-helper';
import { DOCK_HEIGHT } from '../../constants/dimensions';

function getLanguageFromVersion( version, book ) {
	if ( version === 'original' ) {
		if ( bible.Data.otBooks.indexOf( book ) > -1 ) {
			return 'hbo';
		}

		return 'grc';
	}
	return bible.Data.supportedVersions[ version ].language;
}

const Chapter = ( { book, chapter, index, useVirtualization = false } ) => {
	const { reference, data, inSync } = useSelector(
		( state ) => ( {
			reference: state.reference,
			data: state.data,
			inSync: state.settings.inSync,
		} ),
		shallowEqual
	);
	const currentReference = reference[ index ];

	// Guard against null reference during initialization
	if ( ! currentReference ) {
		return null;
	}

	const version = currentReference.version;
	const startVerse = currentReference.verse;
	const endVerse = currentReference.endVerse;
	const numberOfVerses = getNumberOfVerses( { book, chapter } );

	// Memoize verseMap to avoid recreating on every render
	const verseMap = useMemo( () => {
		const map = [];
		for ( let number = 0; number < numberOfVerses; number++ ) {
			map.push( number );
		}
		return map;
	}, [ numberOfVerses ] );

	const dispatch = useDispatch();

	// used to scroll to the current chapter
	const currentRef = useRef();

	// Memoize the versions that need to be fetched to avoid re-dispatching
	const versionsToFetch = useMemo( () => {
		const toFetch = [];
		reference.forEach( ( { book, version } ) => {
			const dataKey = mapVersionToData( book, version );
			// Only add to fetch list if data doesn't exist
			if ( ! data[ dataKey ] ) {
				toFetch.push( { dataKey, version } );
			}
			// LC needs both original and LC data
			if ( version === 'LC' && ! data[ 'LC' ] ) {
				toFetch.push( { dataKey: 'LC', version: 'LC' } );
			}
		} );
		return toFetch;
	}, [ reference, data ] );

	// Only dispatch fetches for versions we don't have yet
	useEffect( () => {
		versionsToFetch.forEach( ( { dataKey } ) => {
			dispatch( fetchData( dataKey ) );
		} );
	}, [ versionsToFetch, dispatch ] );

	useEffect( () => {
		scrollToCurrentChapter();
	}, [
		currentReference.book,
		currentReference.chapter,
		currentReference.verse,
	] );

	const scrollToCurrentChapter = () => {
		const currrentChapter = currentRef.current;
		const referenceWindow = document.getElementById(
			'referenceWindow' + index
		);
		if ( currrentChapter && referenceWindow ) {
			// Subtract DOCK_HEIGHT to position verse at bottom of dock
			const targetPosition = currrentChapter.offsetTop - DOCK_HEIGHT;
			const startPosition = referenceWindow.scrollTop;
			const distance = targetPosition - startPosition;
			const duration = 200; // milliseconds
			let start = null;

			const animation = ( currentTime ) => {
				if ( start === null ) start = currentTime;
				const timeElapsed = currentTime - start;
				const progress = Math.min( timeElapsed / duration, 1 );

				// Ease out quad for smoother deceleration
				const ease = 1 - Math.pow( 1 - progress, 2 );

				referenceWindow.scrollTop = startPosition + distance * ease;

				if ( timeElapsed < duration ) {
					requestAnimationFrame( animation );
				}
			};

			requestAnimationFrame( animation );
		}
	};

	const isCurrentRef = ( verseNumber ) => {
		if ( verseNumber === null ) {
			return false;
		}
		return currentReference &&
			currentReference.book === book &&
			currentReference.chapter === chapter &&
			currentReference.verse === verseNumber + 1
			? currentRef
			: null;
	};

	const textToCopyRef = createRef( book + chapter + version + index );
	const [ textToCopyText, setTextToCopyText ] = useState( '' );

	const customClickHandler = ( version ) => {
		setTextToCopyText( getDifferentVerses( version ) );
	};
	useEffect( () => {
		copyToClipboardHelper( textToCopyRef );
	}, [ textToCopyText ] );

	const getSyncVerses = () => {
		let parsedReference;
		const title = (
			<div className={ styles.chapterColumn }>
				{ reference.map( ( { version }, index ) => {
					let newBook = book,
						newChapter = chapter;
					if ( reference[ index ].book === 'Harmony' ) {
						const parsedReference = getHarmonisedReference( {
							book,
							chapter,
							verseNumber: 0, //TODO
							index,
						} );
						newBook = parsedReference.book;
						newChapter = parsedReference.chapter;
					}

					return (
						<Fragment key={ index }>
							<Title
								book={ newBook }
								chapter={ newChapter }
								version={ version }
								key={ index }
								customClickHandler={ customClickHandler }
							/>
						</Fragment>
					);
				} ) }
			</div>
		);

		// Filter verses if we have a range
		const filteredVerses = useMemo( () => {
			if ( ! endVerse || ! startVerse ) {
				return verseMap;
			}
			return verseMap.filter( ( verse, verseNumber ) => {
				return verseNumber + 1 >= startVerse && verseNumber < endVerse;
			} );
		}, [ verseMap, startVerse, endVerse ] );

		const renderSyncVerse = ( verseIndex ) => {
			const verseNumber = useVirtualization
				? filteredVerses[ verseIndex ]
				: verseIndex;

			if ( ! useVirtualization && endVerse && startVerse ) {
				if ( verseNumber + 1 < startVerse || verseNumber >= endVerse ) {
					return null;
				}
			}

			return (
				<div
					className={ styles.singleReference }
					key={ verseNumber }
					ref={ isCurrentRef( verseNumber ) }
				>
					{ book === 'Harmony' && (
						<Waypoint
							topOffset={ 0 }
							onEnter={ ( { previousPosition } ) => {
								if ( previousPosition === 'above' ) {
									dispatch(
										setScrollChapterHarmonised(
											chapter,
											verseNumber
										)
									);
								}
							} }
							onLeave={ ( { currentPosition } ) => {
								if ( currentPosition === 'above' ) {
									dispatch(
										setScrollChapterHarmonised(
											chapter,
											verseNumber
										)
									);
								}
							} }
						>
							<span
								style={ {
									height: '1px',
								} }
							/>
						</Waypoint>
					) }
					{ reference.map( ( { version }, index ) => {
						if ( book === 'Harmony' ) {
							parsedReference = getHarmonisedReference( {
								book,
								chapter,
								verseNumber,
								index,
							} );
						} else {
							parsedReference = {
								book,
								chapter,
								verseNumber,
								index,
							};
						}
						const newVerseNumber =
							parsedReference.verseNumber !== null
								? parsedReference.verseNumber + 1
								: null;

						// Render empty placeholder if chapter or verse is null (Harmony mode)
						if (
							parsedReference.chapter === null ||
							newVerseNumber === null
						) {
							return (
								<div
									key={ 'empty-' + index }
									className={ styles.verseWrapper }
									style={ {
										flexBasis: 0,
										flexGrow: 1,
										maxWidth: '600px',
									} }
								>
									{ /* Empty column placeholder */ }
								</div>
							);
						}

						return (
							<VerseWrapper
								lang={ getLanguageFromVersion( version, book ) }
								book={ parsedReference.book }
								version={ version }
								chapter={ parsedReference.chapter }
								verse={ newVerseNumber }
								key={ 'versewrapper' + index + newVerseNumber }
								isCurrentRef={
									!! isCurrentRef(
										parsedReference.verseNumber
									)
								}
								columnIndex={ index }
							/>
						);
					} ) }
				</div>
			);
		};

		// Use virtualization or regular map based on prop
		if ( useVirtualization ) {
			return (
				<div>
					{ title }
					<Virtuoso
						totalCount={ filteredVerses.length }
						itemContent={ renderSyncVerse }
						useWindowScroll
						customScrollParent={
							typeof window !== 'undefined'
								? document.getElementById(
										'referenceWindow' + index
								  )
								: undefined
						}
					/>
				</div>
			);
		}

		return (
			<div>
				{ title }
				{ verseMap.map( ( verse, verseNumber ) =>
					renderSyncVerse( verseNumber )
				) }
			</div>
		);
	};

	const getDifferentVerses = ( version ) => {
		// Filter verses if we have a range
		const filteredVerses = useMemo( () => {
			if ( ! endVerse || ! startVerse ) {
				return verseMap;
			}
			return verseMap.filter( ( verse, verseNumber ) => {
				return verseNumber + 1 >= startVerse && verseNumber < endVerse;
			} );
		}, [ verseMap, startVerse, endVerse ] );

		const renderVerse = ( verseIndex ) => {
			const verseNumber = useVirtualization
				? filteredVerses[ verseIndex ]
				: verseIndex;

			if ( ! useVirtualization && endVerse && startVerse ) {
				if ( verseNumber + 1 < startVerse || verseNumber >= endVerse ) {
					return null;
				}
			}

			return (
				<div
					className={ styles.singleReference }
					key={ verseNumber }
					ref={ isCurrentRef( verseNumber ) }
				>
					<VerseWrapper
						lang={ getLanguageFromVersion( version, book ) }
						book={ book }
						version={ version }
						chapter={ chapter }
						verse={ verseNumber + 1 }
						isCurrentRef={ !! isCurrentRef( verseNumber ) }
						columnIndex={ index }
					/>
				</div>
			);
		};

		// Use virtualization or regular map based on prop
		if ( useVirtualization ) {
			return (
				<div>
					<Title
						book={ book }
						chapter={ chapter }
						version={ version }
						customClickHandler={ customClickHandler }
					/>
					<Virtuoso
						totalCount={ filteredVerses.length }
						itemContent={ renderVerse }
						useWindowScroll
						customScrollParent={
							typeof window !== 'undefined'
								? document.getElementById(
										'referenceWindow' + index
								  )
								: undefined
						}
					/>
				</div>
			);
		}

		return (
			<div>
				<Title
					book={ book }
					chapter={ chapter }
					version={ version }
					customClickHandler={ customClickHandler }
				/>
				{ verseMap.map( ( verse, verseNumber ) =>
					renderVerse( verseNumber )
				) }
			</div>
		);
	};

	return (
		<div className={ styles.chapter }>
			{ /*This outputs an extra div for copying*/ }
			<div className={ styles.invisible } ref={ textToCopyRef }>
				{ textToCopyText }
			</div>
			{ inSync ? getSyncVerses() : getDifferentVerses( version ) }
		</div>
	);
};

Chapter.propTypes = {
	book: PropTypes.string.isRequired,
	chapter: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
	useVirtualization: PropTypes.bool,
};
export default React.memo( Chapter );
