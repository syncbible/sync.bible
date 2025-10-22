// External
import React, { useMemo, useCallback } from 'react';
import classnames from 'classnames';
import { useDispatch } from 'react-redux';

// Internal
import { activateSearchSelect, selectWord, updateData } from '../../actions';
import { getFamily } from '../../lib/word';
import morphology from '../../lib/morphology';

const WordSingleComponent = ( props ) => {
	// wordText is the word to display, usually the same as word unless this is LC.
	const {
		lemma,
		morph,
		version,
		word,
		wordText,
		reference,
		index,
		farsiTranslations,
		literalConsistentTranslation,
		strongsObjectWithFamilies,
	} = props;
	const lemmaArray = useMemo(
		() => ( lemma ? lemma.split( /[\&\s]/ ) : [] ),
		[ lemma ]
	);

	const dispatch = useDispatch();

	const clearHighlightWord = useCallback( () => {
		window.updateAppComponent( 'highlightedWord', '' );
	}, [] );

	const highlightWord = useCallback( () => {
		window.updateAppComponent( 'highlightedWord', lemmaArray );
	}, [ lemmaArray ] );

	const parseTranslations = useCallback(
		( farsiTranslations ) => {
			return (
				farsiTranslations.translations &&
				Object.keys( farsiTranslations.translations ).map(
					( translation ) => {
						return farsiTranslations.translations[ translation ].join(
							', '
						);
					}
				)
			);
		},
		[]
	);

	// Memoize expensive title computation
	const titleText = useMemo( () => {
		let text = '';

		if ( lemmaArray.length > 0 ) {
			text += lemmaArray
				.map( ( oneLemma ) => {
					let extraTitleText = oneLemma;
					if ( morph ) {
						extraTitleText += '  |  ' + morph;

						const morphDesc = morphology(
							morph,
							'noLinks',
							oneLemma
						);
						if ( morphDesc ) {
							extraTitleText += '  |  ' + morphDesc;
						}
					}
					return extraTitleText;
				} )
				.join( ', ' );
		}

		// Check the translations have loaded.
		if (
			version === 'NMV_strongs' &&
			farsiTranslations &&
			farsiTranslations[ word ]
		) {
			text += '  |  ' + farsiTranslations[ word ].translation;

			const listOfTranslations = parseTranslations(
				farsiTranslations[ word ]
			);
			if ( listOfTranslations.length > 0 ) {
				text += '  |  ' + listOfTranslations;
			}
		}

		return text;
	}, [ lemmaArray, morph, version, word, farsiTranslations, parseTranslations ] );

	// Memoize expensive className computation
	const className = useMemo( () => {
		// Do this first for speed.
		if ( lemma === 'added' ) {
			return classnames( 'single', lemma );
		}

		let family = null;
		if ( lemmaArray.length > 0 ) {
			family = lemmaArray.map(
				( oneLemma ) =>
					getFamily( oneLemma, strongsObjectWithFamilies ) + '-family'
			);
		}

		return classnames( 'single', lemmaArray, family );
	}, [ lemma, lemmaArray, strongsObjectWithFamilies ] );

	const handleClick = useCallback(
		( event ) => {
			if ( event.altKey || event.ctrlKey || event.metaKey ) {
				// Update the literal consistent translation.
				if ( version === 'LC' ) {
					const translation = window.prompt(
						word + ' ' + lemma + ' ' + morph,
						literalConsistentTranslation
					);
					dispatch(
						updateData( {
							version: 'LC',
							word,
							lemma,
							morph,
							translation,
						} )
					);
				}

				// Update the farsi strongs translation.
				if ( version === 'NMV_strongs' ) {
					reference.index = index;
					dispatch( activateSearchSelect( reference ) );
				}
			} else {
				dispatch( selectWord( props ) );
			}
		},
		[
			version,
			word,
			lemma,
			morph,
			literalConsistentTranslation,
			reference,
			index,
			props,
			dispatch,
		]
	);

	return (
		<span
			className={ className }
			onMouseOver={ highlightWord }
			onMouseOut={ clearHighlightWord }
			onClick={ handleClick }
			title={ titleText }
			key={ lemma }
		>
			{ wordText }
		</span>
	);
};

// Custom comparison function for better memoization
const arePropsEqual = ( prevProps, nextProps ) => {
	// Only re-render if these specific props change
	return (
		prevProps.lemma === nextProps.lemma &&
		prevProps.morph === nextProps.morph &&
		prevProps.word === nextProps.word &&
		prevProps.wordText === nextProps.wordText &&
		prevProps.version === nextProps.version &&
		prevProps.literalConsistentTranslation ===
			nextProps.literalConsistentTranslation &&
		prevProps.reference.book === nextProps.reference.book &&
		prevProps.reference.chapter === nextProps.reference.chapter &&
		prevProps.reference.verse === nextProps.reference.verse &&
		prevProps.farsiTranslations === nextProps.farsiTranslations && // Check for Farsi updates
		prevProps.strongsObjectWithFamilies === nextProps.strongsObjectWithFamilies // Check for Strongs updates
	);
};

export default React.memo( WordSingleComponent, arePropsEqual );
