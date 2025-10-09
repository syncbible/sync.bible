// External
import React from 'react';

// Internal
import WordSingle from './word-single';
import { getLiteralConsistentTranslation } from '../utils.js';

function startsWithPunctuation( word ) {
	return (
		word.indexOf( '.' ) === 0 ||
		word.indexOf( ')' ) === 0 ||
		word.indexOf( '?' ) === 0 ||
		word.indexOf( '!' ) === 0 ||
		word.indexOf( ':' ) === 0 ||
		word.indexOf( ';' ) === 0 ||
		word.indexOf( ',' ) === 0
	);
}

const WordComponent = ( {
	word,
	version,
	prevWord,
	reference,
	index,
	lcData,
	farsiTranslations,
	strongsObjectWithFamilies,
} ) => {
	if ( ! word ) {
		return null;
	}

	const [ wordValue, lemma, morph ] = word;

	const lemmaArray =
		lemma && typeof lemma === 'string' ? lemma.split( '/' ) : null;
	const morphArray =
		morph && typeof morph === 'string' ? morph.split( '/' ) : null;

	const getWordSingle = ( wordSingleValue, lemmaSingle, morphSingle ) => {
		if ( version === 'LC' ) {
			return getLiteralConsistentTranslation(
				lcData,
				wordSingleValue,
				lemmaSingle,
				morphSingle,
				prevWord
			);
		}

		return wordSingleValue;
	};

	const getLemmaSingle = ( key ) => {
		return lemmaArray ? lemmaArray[ key ] : null;
	};

	const getMorphSingle = ( key ) => {
		if ( ! morphArray ) {
			return null;
		}

		if ( morph.indexOf( 'H' ) === 0 && key > 0 ) {
			return 'H' + morphArray[ key ];
		}

		if ( morph.indexOf( 'A' ) === 0 && key > 0 ) {
			return 'A' + morphArray[ key ];
		}

		return morphArray[ key ];
	};

	const wordString =
		wordValue &&
		typeof wordValue === 'string' &&
		wordValue.split( '/' ).map( ( wordSingleValue, key ) => {
			const lemmaSingle = getLemmaSingle( key );
			const morphSingle = getMorphSingle( key );
			const wordSingle = getWordSingle(
				wordSingleValue,
				lemmaSingle,
				morphSingle
			);
			const literalConsistentTranslation =
				version === 'LC'
					? getLiteralConsistentTranslation(
							lcData,
							wordSingleValue,
							lemmaSingle,
							morphSingle
					  )
					: null;

			if ( version === 'LC' ) {
				return (
					<React.Fragment key={ key }>
						{ ' ' }
						<WordSingle
							key={ key }
							lemma={ lemmaSingle }
							word={ wordSingleValue }
							wordText={ wordSingle }
							morph={ morphSingle }
							version={ version }
							reference={ reference }
							index={ index }
							farsiTranslations={ farsiTranslations }
							literalConsistentTranslation={
								literalConsistentTranslation
							}
							strongsObjectWithFamilies={
								strongsObjectWithFamilies
							}
						/>
					</React.Fragment>
				);
			}
			return (
				<WordSingle
					key={ key }
					lemma={ lemmaSingle }
					word={ wordSingleValue }
					wordText={ wordSingle }
					morph={ morphSingle }
					version={ version }
					reference={ reference }
					index={ index }
					farsiTranslations={ farsiTranslations }
					literalConsistentTranslation={ literalConsistentTranslation }
					strongsObjectWithFamilies={ strongsObjectWithFamilies }
				/>
			);
		} );

	// Having this earlier helps speed.
	if ( startsWithPunctuation( wordValue ) ) {
		return wordString;
	}

	return <React.Fragment key={ word }> { wordString }</React.Fragment>;
};

// Custom comparison function for better memoization
const arePropsEqual = ( prevProps, nextProps ) => {
	// Compare arrays properly for word prop
	const prevWord = prevProps.word;
	const nextWord = nextProps.word;

	if ( ! prevWord && ! nextWord ) {
		return true;
	}
	if ( ! prevWord || ! nextWord ) {
		return false;
	}

	return (
		prevWord[ 0 ] === nextWord[ 0 ] && // wordValue
		prevWord[ 1 ] === nextWord[ 1 ] && // lemma
		prevWord[ 2 ] === nextWord[ 2 ] && // morph
		prevProps.version === nextProps.version &&
		prevProps.index === nextProps.index &&
		prevProps.reference.book === nextProps.reference.book &&
		prevProps.reference.chapter === nextProps.reference.chapter &&
		prevProps.reference.verse === nextProps.reference.verse
	);
};

export default React.memo( WordComponent, arePropsEqual );
