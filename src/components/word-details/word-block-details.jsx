// External
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import Translate from '../svg/translate';
import Search from '../svg/search';
import Stats from '../svg/stats';
import styles from './styles.module.scss';
import SearchLink from '../search-link';
import InlineResultsToggle from '../inline-results-toggle';
import SortForm from '../sort-form';
import { searchForWord, addSearchResults } from '../../actions';
import MoreDetails from './more-details';
import WordStats from './word-stats';
import bible from '../../data/bible.js';
import { getReferenceFromSearchResult, getVerseData } from '../../lib/reference';

const WordBlockDetails = ( {
	morphologyProp,
	strongsNumber,
	version,
	resultsFromProps,
	current,
	id,
	loading,
	data,
	word,
} ) => {
	const dispatch = useDispatch();
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	const strongsWithFamilies = useSelector(
		( state ) => state.data.strongsObjectWithFamilies
	);
	const versionData = useSelector( ( state ) => state.data[ version ] );
	const [ activeTab, setActiveTab ] = useState( 'search' );
	const [ sortBy, setSortBy ] = useState( 'reference' );
	const [ filterBook, setFilterBook ] = useState( 'all' );

	let numberOfUses =
		strongsWithFamilies &&
		strongsWithFamilies[ strongsNumber ] &&
		strongsWithFamilies[ strongsNumber ].count;

	const shouldDisplayResults = () => {
		return numberOfUses < 1000;
	};

	useEffect( () => {
		if ( ! resultsFromProps && shouldDisplayResults() ) {
			// Pause to render the list before we load the results
			setTimeout( () => {
				dispatch( addSearchResults( word ) );
			}, 100 );
		}
	}, [
		resultsFromProps,
		shouldDisplayResults,
		dispatch,
		addSearchResults,
		word,
	] );

	let resultsData = resultsFromProps;

	// Filter results by book if needed
	if ( resultsData && Array.isArray( resultsData ) && filterBook !== 'all' ) {
		resultsData = resultsData.filter( ( result ) => {
			const ref = getReferenceFromSearchResult( result.reference );
			return ref && ref.book === filterBook;
		} );
	}

	// Sort results if needed
	if ( resultsData && Array.isArray( resultsData ) && sortBy === 'translation' && versionData ) {
		resultsData = [ ...resultsData ].sort( ( a, b ) => {
			// Each result has a 'word' property that contains the word data
			const textA = a.word && a.word[ 0 ] ? a.word[ 0 ].toLowerCase() : '';
			const textB = b.word && b.word[ 0 ] ? b.word[ 0 ].toLowerCase() : '';

			return textA.localeCompare( textB );
		} );
	}

	const results =
		resultsData &&
		Array.isArray( resultsData ) &&
		resultsData.map( ( result, index ) => {
			const isActive =
				typeof current !== 'undefined' && current === index;

			// Add heading when sorted by translation
			let heading = null;
			if ( sortBy === 'translation' ) {
				// Get the translated word text from the result
				const currentText = result.word && result.word[ 0 ] ? result.word[ 0 ] : '';

				// Check if this is a new translation (first occurrence or different from previous)
				const prevText = index > 0 && resultsData[ index - 1 ].word && resultsData[ index - 1 ].word[ 0 ]
					? resultsData[ index - 1 ].word[ 0 ]
					: '';

				if ( index === 0 || currentText.toLowerCase() !== prevText.toLowerCase() ) {
					heading = (
						<li key={ `heading-${ index }` } className={ styles.translationHeading }>
							{ currentText }
						</li>
					);
				}
			}

			return (
				<React.Fragment key={ index }>
					{ heading }
					<SearchLink
						index={ index }
						referenceString={ result.reference }
						wordId={ id }
						isActive={ isActive }
					/>
				</React.Fragment>
			);
		} );

	function getResultsDisplay() {
		if ( results && results.length > 0 ) {
			numberOfUses = results.length;
		}
		const useString = numberOfUses === 1 ? 'use' : 'uses';
		const resultString = numberOfUses === 1 ? 'result' : 'results';

		// Get unique books from all results
		const booksInResults = resultsFromProps && Array.isArray( resultsFromProps )
			? [ ...new Set( resultsFromProps.map( ( result ) => {
				const ref = getReferenceFromSearchResult( result.reference );
				return ref ? ref.book : null;
			} ).filter( Boolean ) ) ]
			: [];

		// Build filter options
		const filterOptions = [
			{ value: 'all', label: 'All books' },
			...booksInResults.map( ( book ) => ( {
				value: book,
				label: bible.getTranslatedBookName( book, version ),
			} ) ),
		];

		const sortOptions = [
			{ value: 'reference', label: 'Reference' },
			{ value: 'translation', label: 'Translation' },
		];

		if ( results ) {
			return (
				<>
					Found { numberOfUses } { useString } in { version }:{ ' ' }
					<InlineResultsToggle />
					<SortForm
						sortBy={ sortBy }
						onSortChange={ setSortBy }
						sortOptions={ sortOptions }
						filterBy={ filterBook }
						onFilterChange={ setFilterBook }
						filterOptions={ filterOptions }
					/>
					<ol
						className={ styles.results }
						dir={
							bible.isRtlVersion( interfaceLanguage )
								? 'rtl'
								: 'ltr'
						}
					>
						{ results }
					</ol>
				</>
			);
		}

		if ( loading ) {
			return (
				<p>
					Loading { numberOfUses } search { resultString }...
				</p>
			);
		}

		if ( ! shouldDisplayResults() ) {
			return (
				<a
					href="#"
					className="word-block-details__find-all-uses"
					onClick={ ( event ) => {
						event.preventDefault();
						dispatch( searchForWord( data ) );
					} }
				>
					Find { numberOfUses } { useString }
					{ numberOfUses > 1000 && ' (slow!)' }
				</a>
			);
		}

		return (
			<p>
				Loading { numberOfUses } { useString }...
			</p>
		);
	}

	const getActiveTab = () => {
		if ( activeTab === 'search' ) {
			return getResultsDisplay();
		}

		if ( activeTab === 'more' ) {
			return (
				<MoreDetails
					morphologyProp={ morphologyProp }
					strongsNumber={ strongsNumber }
					version={ version }
				/>
			);
		}

		if ( activeTab === 'stats' ) {
			if ( results ) {
				return (
					<WordStats
						strongsNumber={ strongsNumber }
						version={ version }
					/>
				);
			}
			return (
				<p>Stats will appear when you have searched for the word.</p>
			);
		}
	};

	return (
		<>
			<div className={ styles.tabs }>
				<a
					className={ activeTab === 'search' ? styles.active : '' }
					onClick={ () => setActiveTab( 'search' ) }
				>
					<Search />
				</a>
				<a
					className={ activeTab === 'more' ? styles.active : '' }
					onClick={ () => setActiveTab( 'more' ) }
				>
					<Translate />
				</a>
				<a
					className={ activeTab === 'stats' ? styles.active : '' }
					onClick={ () => setActiveTab( 'stats' ) }
				>
					<Stats />
				</a>
			</div>
			<div className={ styles.wordBlockDetails }>{ getActiveTab() }</div>
		</>
	);
};

WordBlockDetails.propTypes = {
	morphologyProp: PropTypes.string,
	strongsNumber: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	resultsFromProps: PropTypes.array,
	current: PropTypes.bool,
	id: PropTypes.string,
	loading: PropTypes.bool,
	data: PropTypes.object,
	word: PropTypes.object,
};

export default React.memo( WordBlockDetails );
