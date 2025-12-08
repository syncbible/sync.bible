// External dependencies
import React, { useState, useMemo } from 'react';
import { countBy, sortBy } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
import SearchLink from '../search-link';
import styles from './styles.module.scss';
import InlineResultsToggle from '../inline-results-toggle';
import bible from '../../data/bible.js';
import { selectWord } from '../../actions';
import { getReferenceFromSearchResult } from '../../lib/reference';

const groupResultsByStrongs = ( results ) => {
	const grouped = {};
	results.forEach( ( result ) => {
		if ( result.matchDetails ) {
			const details = Array.isArray( result.matchDetails )
				? result.matchDetails
				: [ result.matchDetails ];
			details.forEach( ( detail ) => {
				if ( detail.strongsNumber ) {
					if ( ! grouped[ detail.strongsNumber ] ) {
						grouped[ detail.strongsNumber ] = [];
					}
					grouped[ detail.strongsNumber ].push( result );
				}
			} );
		}
	} );
	return grouped;
};

const SearchBlock = ( props ) => {
	const dispatch = useDispatch();
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);

	const { visible, sorted, results } = props;
	const [ sortBy, setSortBy ] = useState( 'reference' );

	const [ filterBy, setFilterBy ] = useState( 'all' );

	const filteredResults =
		results &&
		results.filter( ( { reference } ) => {
			return (
				filterBy === 'all' ||
				filterBy === getReferenceFromSearchResult( reference ).book
			);
		} );
	const groupedResults = useMemo(
		() =>
			filteredResults ? groupResultsByStrongs( filteredResults ) : {},
		[ filteredResults ]
	);

	const strongsNumbers = useMemo(
		() => Object.keys( groupedResults ),
		[ groupedResults ]
	);

	if ( ! results ) {
		return <div className={ styles.noResults }>Loading…</div>;
	}

	if ( results.length === 0 || typeof results === 'string' ) {
		return (
			<div className={ visible ? styles.noResults : styles.hidden }>
				No results.
			</div>
		);
	}

	const resultsBooks = [ ...results ].reduce(
		( prev, current, index, acc ) => {
			acc[ index ] = getReferenceFromSearchResult(
				current.reference
			).book;
			return acc;
		},
		[]
	);

	const renderResultsForStrongs = ( strongsNumber ) => {
		const resultsForStrongs = groupedResults[ strongsNumber ];
		if ( ! resultsForStrongs ) {
			return null;
		}

		return resultsForStrongs.map( ( result, index ) => {
			const globalIndex = results.findIndex(
				( r ) => r.reference === result.reference
			);
			const isActive =
				props &&
				typeof props.current !== 'undefined' &&
				props.current === globalIndex;
			return (
				<SearchLink
					key={ `${ strongsNumber }-${ index }` }
					index={ index }
					referenceString={ result.reference }
					wordId={ props.id }
					isActive={ isActive }
				/>
			);
		} );
	};

	const handleStrongsClick = ( strongsNumber ) => {
		dispatch(
			selectWord( {
				lemma: strongsNumber,
				version: props.data.version,
			} )
		);
	};

	const highlight = ( strongsNumber ) => {
		window.updateAppComponent( 'highlightedWord', strongsNumber );
	};

	const unHighlight = () => {
		window.updateAppComponent( 'highlightedWord', null );
	};

	let renderedResults;
	if ( sortBy === 'strongs' ) {
		renderedResults = strongsNumbers.map( ( strongsNumber ) => (
			<div key={ strongsNumber } className={ styles.strongsGroup }>
				<p className={ styles.strongsHeading }>
					<a
						onClick={ () => handleStrongsClick( strongsNumber ) }
						onMouseOver={ () => highlight( strongsNumber ) }
						onMouseOut={ unHighlight }
						className={ `${ strongsNumber } ${ styles.strongsLink }` }
					>
						{ strongsNumber } (
						{ groupedResults[ strongsNumber ].length })
					</a>
				</p>
				<ol className={ styles.results }>
					{ renderResultsForStrongs( strongsNumber ) }
				</ol>
			</div>
		) );
	} else if ( sorted ) {
		const countedResults = countBy( filteredResults );
		const countedResultsArray = Object.keys( countedResults ).map(
			( key ) => ( {
				key,
				value: countedResults[ key ],
			} )
		);
		const sortedResults = sortBy( countedResultsArray, [ 'value', 'key' ] )
			.filter( ( result ) => result.value > 2 )
			.reverse();

		renderedResults =
			Array.isArray( sortedResults ) &&
			sortedResults.map( ( result, index ) => {
				const isActive =
					props &&
					typeof props.current !== 'undefined' &&
					props.current === index;
				return (
					<SearchLink
						key={ index }
						index={ index }
						referenceString={ result.reference }
						wordId={ props.id }
						isActive={ isActive }
						count={ result.value }
					/>
				);
			} );
	} else {
		renderedResults =
			Array.isArray( filteredResults ) &&
			filteredResults.map( ( result, index ) => {
				const isActive =
					props &&
					typeof props.current !== 'undefined' &&
					props.current === index;
				return (
					<SearchLink
						key={ index }
						index={ index }
						referenceString={ result.reference }
						wordId={ props.id }
						isActive={ isActive }
					/>
				);
			} );
	}

	return (
		<div dir={ bible.isRtlVersion( interfaceLanguage ) ? 'rtl' : 'ltr' }>
			<InlineResultsToggle />
			Found { results.length } results in { props.data.version }{ ' ' }
			{ strongsNumbers.length > 0 && (
				<form className={ styles.sortForm }>
					<fieldset>
						<div>
							<label htmlFor="sort-search">Sort by</label>
							<select
								value={ sortBy }
								onChange={ ( event ) =>
									setSortBy( event.target.value )
								}
								name="sort-search"
							>
								<option value="reference">Reference</option>
								<option value="strongs">Strongs</option>
							</select>
						</div>
						<div>
							<label htmlFor="filter-search">Show</label>
							<select
								name="filter-search"
								onChange={ ( event ) =>
									setFilterBy( event.target.value )
								}
								value={ filterBy }
							>
								<option value="all">All</option>
								{ [ ...new Set( resultsBooks ) ].map(
									( book, index ) => (
										<option key={ index }>{ book }</option>
									)
								) }
							</select>
						</div>
					</fieldset>
				</form>
			) }
			{ sortBy === 'strongs' || sorted ? (
				<div>{ renderedResults }</div>
			) : (
				<ol className={ styles.results }>{ renderedResults }</ol>
			) }
		</div>
	);
};

export default React.memo( SearchBlock );
