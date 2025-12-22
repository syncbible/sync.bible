// External dependencies
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

// Internal dependencies
import bible from '../../data/bible.js';
import {
	compareTwoReferences,
	calculateRareWords,
	calculateCommonWords,
	calculateConnectionQuality,
} from '../../lib/reference';
import {
	fetchData,
	selectWord,
	setReferenceInfo,
	setReferenceInfoLimit,
	setTrayVisibilityFilter,
} from '../../actions';
import { getBooks, getCompareChapters } from '../../lib/select-helpers';
import WordStatsTable from '../word-stats-table';

import styles from './styles.module.scss';

const Rare = () => {
	const dispatch = useDispatch();
	const [ sort, setSort ] = useState( 'usesDesc' );
	const isOriginalLoaded = useSelector(
		( state ) => 'undefined' !== typeof state.data.original
	);
	const isActiveTray = useSelector( ( state ) => state.trays.includes( 'stats' ) );
	const reference = useSelector( ( state ) => state.referenceInfo.reference );
	const data = useSelector( ( state ) => state.data );
	const common = useMemo(
		() => calculateCommonWords( reference, data ),
		[ reference, data ]
	);

	useEffect( () => {
		if ( isActiveTray ) {
			dispatch( fetchData( 'original' ) );
		}
	}, [ isActiveTray ] );

	const getVerses = ( reference ) => {
		if ( reference && reference.book && reference.chapter ) {
			const bookNumber = bible.getBookId( reference.book );
			const numberOfVerses =
				bible.Data.verses[ bookNumber - 1 ][ reference.chapter - 1 ];
			const verses = [];
			for ( var i = 0; i < numberOfVerses; i++ ) {
				verses.push( i );
			}
			const versesJSX = verses.map( ( key ) => {
				return <option key={ key }>{ key + 1 }</option>;
			} );
			versesJSX.unshift(
				<option key="all" value="all">
					All
				</option>
			);
			return versesJSX;
		}

		return <option>-</option>;
	};

	const compareBookChange = ( event ) => {
		dispatch(
			setReferenceInfo( {
				book: event.target.value,
				chapter: 'all',
				verse: 'all',
			} )
		);
	};

	const compareChapterChange = ( event ) => {
		dispatch(
			setReferenceInfo( {
				...reference,
				chapter: event.target.value,
				verse: 'all',
			} )
		);
	};

	const compareVerseChange = ( event ) => {
		dispatch(
			setReferenceInfo( { ...reference, verse: event.target.value } )
		);
	};

	if ( ! isOriginalLoaded ) {
		return (
			<div className={ styles.trayPadding }>
				<p>Loading original texts...</p>
			</div>
		);
	}

	return (
		<>
			<div className={ styles.statsReferenceWrapper }>
				<div className={ classnames( styles.statsReference ) }>
					<select
						className={ styles.compareWithBook }
						name="compareWithBook"
						onChange={ compareBookChange }
						value={ reference ? reference.book : '' }
					>
						{ getBooks() }
					</select>
					<select
						className={ styles.compareWithChapter }
						name="compareWithChapter"
						onChange={ compareChapterChange }
						value={ reference ? reference.chapter : '' }
					>
						{ getCompareChapters( reference ) }
					</select>
					<select
						className={ styles.compareWithVerses }
						name="compareWithVerses"
						onChange={ compareVerseChange }
						value={ reference ? reference.verse : '' }
					>
						{ getVerses( reference ) }
					</select>
				</div>
			</div>
			<div className={ styles.statsResults }>
				<div>
					<h2>All words</h2>
					<div>
						<WordStatsTable
							common={ common }
							sort={ sort }
							setSort={ setSort }
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Rare;
