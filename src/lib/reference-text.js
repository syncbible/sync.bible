import bible from '../data/bible.js';
import { mapVersionToData } from './reference';

export function startsWithPunctuation( word ) {
	return /^[.)?!:;,]/.test( word );
}

export function getLiteralConsistentTranslation(
	LC,
	word,
	lemma,
	morph,
	prevWord
) {
	if ( ! LC ) {
		return null;
	}

	if ( ! LC[ word ] ) {
		return null;
	}

	if ( ! lemma ) {
		lemma = '';
	}

	if ( 'הו' === word ) {
		// If the last word was a noun then modify "him" to "his".
		if ( prevWord?.[ 2 ] ) {
			const morphContainsAVerb = prevWord[ 2 ].match( /[N|/N]/ );
			if ( morphContainsAVerb && morphContainsAVerb.length > 0 ) {
				return 'his';
			}
		}
	}

	if ( typeof LC[ word ]?.[ lemma ]?.[ morph ] === 'string' ) {
		return LC[ word ][ lemma ][ morph ];
	}

	return null;
}

export function getWordParts( word ) {
	if ( ! Array.isArray( word ) ) {
		return [];
	}

	const [ wordValue, lemma, morph ] = word;
	if ( ! wordValue || typeof wordValue !== 'string' ) {
		return [];
	}

	const lemmaArray =
		lemma && typeof lemma === 'string' ? lemma.split( '/' ) : [];
	const morphArray =
		morph && typeof morph === 'string' ? morph.split( '/' ) : [];

	return wordValue.split( '/' ).map( ( wordSingleValue, key ) => {
		let morphSingle = morphArray[ key ] || null;

		if ( morph && morph.indexOf( 'H' ) === 0 && key > 0 ) {
			morphSingle = 'H' + morphSingle;
		}

		if ( morph && morph.indexOf( 'A' ) === 0 && key > 0 ) {
			morphSingle = 'A' + morphSingle;
		}

		return {
			word: wordSingleValue,
			lemma: lemmaArray[ key ] || null,
			morph: morphSingle,
		};
	} );
}

export function getWordSingleText( {
	version,
	lcData,
	word,
	lemma,
	morph,
	prevWord,
	fallbackToOriginal = false,
} ) {
	if ( version === 'LC' ) {
		const translation = getLiteralConsistentTranslation(
			lcData,
			word,
			lemma,
			morph,
			prevWord
		);

		return fallbackToOriginal ? translation || word : translation;
	}

	return word;
}

export function getWordText( {
	word,
	version,
	lcData,
	prevWord,
	fallbackToOriginal = true,
} ) {
	return getWordParts( word )
		.map( ( wordPart ) =>
			getWordSingleText( {
				version,
				lcData,
				prevWord,
				fallbackToOriginal,
				...wordPart,
			} )
		)
		.filter( Boolean )
		.join( ' ' );
}

export function getVerseText( { verseData, version, lcData } ) {
	if ( typeof verseData === 'string' ) {
		return verseData.replace( /<[^>]+>/g, '' ).trim();
	}

	if ( ! Array.isArray( verseData ) ) {
		return '';
	}

	let prevWord = null;
	return verseData.reduce( ( text, word ) => {
		const wordText = getWordText( { word, version, lcData, prevWord } );
		prevWord = word;

		if ( ! wordText ) {
			return text;
		}

		return (
			text +
			( startsWithPunctuation( wordText ) || text === ''
				? ''
				: ' ' ) +
			wordText
		);
	}, '' );
}

export function getChapterText( { book, chapter, version, data } ) {
	const dataKey = mapVersionToData( book, version );
	const chapterData = data[ dataKey ]?.[ book ]?.[ parseInt( chapter ) - 1 ];

	if ( ! chapterData ) {
		return '';
	}

	const titleText = `${ bible.getTranslatedBookName(
		book,
		version
	) } ${ chapter }`;

	const verses = chapterData
		.map( ( verseData, verseNumber ) => {
			return `${ verseNumber + 1 }. ${ getVerseText( {
				verseData,
				version,
				lcData: data.LC,
			} ) }`;
		} )
		.join( '\n' );

	return `${ titleText }\n${ verses }`;
}
