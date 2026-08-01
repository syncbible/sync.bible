// External
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import WordSingle from './word-single';
import {
	getLiteralConsistentTranslation,
	getWordParts,
	getWordSingleText,
	startsWithPunctuation,
} from '../../lib/reference-text';

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

	const [ wordValue ] = word;

	const wordString =
		wordValue &&
		typeof wordValue === 'string' &&
		getWordParts( word ).map( ( wordPart, key ) => {
			const wordSingle = getWordSingleText( {
				version,
				lcData,
				prevWord,
				...wordPart,
			} );
			const literalConsistentTranslation =
				version === 'LC'
					? getLiteralConsistentTranslation(
							lcData,
							wordPart.word,
							wordPart.lemma,
							wordPart.morph
					  )
					: null;

			if ( version === 'LC' ) {
				return (
					<React.Fragment key={ key }>
						{ ' ' }
						<WordSingle
							key={ key }
							lemma={ wordPart.lemma }
							word={ wordPart.word }
							wordText={ wordSingle }
							morph={ wordPart.morph }
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
					lemma={ wordPart.lemma }
					word={ wordPart.word }
					wordText={ wordSingle }
					morph={ wordPart.morph }
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

WordComponent.propTypes = {
	word: PropTypes.array,
	version: PropTypes.string.isRequired,
	prevWord: PropTypes.array,
	reference: PropTypes.shape( {
		book: PropTypes.string.isRequired,
		chapter: PropTypes.number.isRequired,
		verse: PropTypes.number.isRequired,
	} ).isRequired,
	index: PropTypes.number.isRequired,
	lcData: PropTypes.object,
	farsiTranslations: PropTypes.object,
	strongsObjectWithFamilies: PropTypes.object,
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
		prevProps.reference.verse === nextProps.reference.verse &&
		prevProps.lcData === nextProps.lcData && // Check for LC data updates
		prevProps.farsiTranslations === nextProps.farsiTranslations && // Check for Farsi updates
		prevProps.strongsObjectWithFamilies === nextProps.strongsObjectWithFamilies // Check for Strongs updates
	);
};

export default React.memo( WordComponent, arePropsEqual );
