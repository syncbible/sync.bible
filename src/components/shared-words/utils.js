export function getSharedWordsFromBookmarks( listOfReferences, original ) {
	const words = {};
	listOfReferences.forEach( ( reference ) => {
		const allLemmasInBookmark = [];
		const { book, chapter, verse } = reference;
		if (
			original &&
			original[ book ] &&
			original[ book ][ chapter ] &&
			original[ book ][ chapter - 1 ][ verse - 1 ] &&
			typeof original[ book ][ chapter - 1 ][ verse - 1 ] !== 'string'
		) {
			original[ book ][ chapter - 1 ][ verse - 1 ].forEach( ( word ) => {
				if ( ! word[ 1 ] ) {
					return;
				}
				const lemmas = word[ 1 ].split( / |\// );
				if ( lemmas ) {
					lemmas.forEach( ( lemma ) => {
						// Exclude lemmas that aren't numbers.
						if ( lemma && parseInt( lemma.substring( 1 ) ) ) {
							allLemmasInBookmark.push( lemma );
						}
					} );
				}
			} );
		}
		if ( allLemmasInBookmark ) {
			new Set( allLemmasInBookmark ).forEach( ( lemma ) => {
				if ( ! words[ lemma ] ) {
					words[ lemma ] = 0;
				}
				words[ lemma ] = words[ lemma ] + 1;
			} );
		}
	} );
	return words;
}
