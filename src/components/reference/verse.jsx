// External
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

// Internal
import { mapVersionToData } from '../../lib/reference';
import {
	selectLCData,
	selectFarsiTranslations,
	selectStrongsObjectWithFamilies,
} from '../../selectors';
import Word from './word';
import styles from './styles.module.scss';

const Verse = ( { reference, version } ) => {
	const { book, chapter, verse } = reference;
	const data = useSelector( ( state ) => state.data );
	const lcData = useSelector( selectLCData );
	const farsiTranslations = useSelector( selectFarsiTranslations );
	const strongsObjectWithFamilies = useSelector(
		selectStrongsObjectWithFamilies
	);

	const language = useMemo(
		() => mapVersionToData( book, version ),
		[ book, version ]
	);
	let prevWord = null;
	let words = null;

	const placeholder = ( key ) => {
		return (
			<div className={ styles.verseWrapper } key={ key }>
				<span className={ styles.placeholder }>&nbsp;Loading</span>
				<span
					className={ styles.placeholder }
					style={ { width: Math.random() * 100 + '%' } }
				>
					&nbsp;
				</span>
			</div>
		);
	};

	const notAvailable = ( key ) => {
		return (
			<div className={ styles.verseWrapper } key={ key }>
				Book not available
			</div>
		);
	};

	if ( ! data[ language ] || Object.keys( data[ language ] ).length === 0 ) {
		return placeholder( verse );
	}

	if ( ! data[ language ][ book ] && language !== 'LC' ) {
		return notAvailable( verse );
	}

	if (
		( ! language ||
			typeof data[ language ] === 'undefined' ||
			typeof data[ language ][ book ] === 'undefined' ||
			typeof data[ language ][ book ][ chapter ] === 'undefined' ) &&
		language !== 'LC'
	) {
		return null;
	}

	const verseData = data[ language ][ book ][ chapter ][ verse ];
	if ( verseData && verseData.map ) {
		words = verseData.map( ( word, index ) => {
			const wordComponentInstance = (
				<Word
					word={ word }
					index={ index }
					key={ index }
					version={ version }
					prevWord={ prevWord }
					reference={ reference }
					lcData={ lcData }
					farsiTranslations={ farsiTranslations }
					strongsObjectWithFamilies={ strongsObjectWithFamilies }
				/>
			);
			prevWord = word;
			return wordComponentInstance;
		} );
	} else if ( verseData ) {
		words = verseData.replace( /<[^>]+>/g, '' ); // to strip tags like <FI>
	}

	return words;
};

// Custom comparison function for better memoization
const arePropsEqual = ( prevProps, nextProps ) => {
	return (
		prevProps.reference.book === nextProps.reference.book &&
		prevProps.reference.chapter === nextProps.reference.chapter &&
		prevProps.reference.verse === nextProps.reference.verse &&
		prevProps.version === nextProps.version
	);
};

export default React.memo( Verse, arePropsEqual );
