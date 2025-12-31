// Internal imports.
import { getReferenceFromString } from '../../lib/reference';

export function getSharedWordsFromReferences(
	listOfReferences,
	data,
	limit = 100
) {
	// First make the list of references unique.
	const uniqueReferences = [ ...new Set( listOfReferences ) ];

	if ( uniqueReferences.length < 1 ) {
		return {};
	}

	// Track which references each lemma appears in AND total occurrences
	const wordReferences = {};
	const wordOccurrences = {};

	uniqueReferences.forEach( ( referenceString ) => {
		const { book, chapter, verse } =
			getReferenceFromString( referenceString );
		if (
			data.original &&
			data.original[ book ] &&
			data.original[ book ][ chapter - 1 ] &&
			data.original[ book ][ chapter - 1 ][ verse - 1 ] &&
			typeof data.original[ book ][ chapter - 1 ][ verse - 1 ] !==
				'string'
		) {
			// Track which lemmas appear in this reference
			const lemmasInThisReference = new Set();

			data.original[ book ][ chapter - 1 ][ verse - 1 ].forEach(
				( word ) => {
					if ( ! word[ 1 ] ) {
						return;
					}
					const lemmas = word[ 1 ].split( / |\// );
					if ( lemmas ) {
						lemmas.forEach( ( lemma ) => {
							// Exclude popular lemmas.
							if (
								lemma &&
								data.strongsObjectWithFamilies[ lemma ] &&
								data.strongsObjectWithFamilies[ lemma ].count <
									limit
							) {
								lemmasInThisReference.add( lemma );
								// Count total occurrences
								if ( ! wordOccurrences[ lemma ] ) {
									wordOccurrences[ lemma ] = 0;
								}
								wordOccurrences[ lemma ]++;
							}
						} );
					}
				}
			);

			// Track unique references for each lemma
			lemmasInThisReference.forEach( ( lemma ) => {
				if ( ! wordReferences[ lemma ] ) {
					wordReferences[ lemma ] = new Set();
				}
				wordReferences[ lemma ].add( referenceString );
			} );
		}
	} );

	// Return both reference count and total occurrences
	const words = {};
	Object.keys( wordReferences ).forEach( ( lemma ) => {
		words[ lemma ] = {
			referenceCount: wordReferences[ lemma ].size,
			totalOccurrences: wordOccurrences[ lemma ] || 0,
		};
	} );

	return words;
}

export function getListOfReferencesFromType( list, type ) {
	const filteredList = list.filter( ( { listType } ) => listType === type );
	if ( type === 'bookmark' ) {
		return filteredList.map(
			( item ) =>
				item.data.reference.book +
				'.' +
				item.data.reference.chapter +
				'.' +
				item.data.reference.verse
		);
	}

	return filteredList
		.filter( ( word ) => word.results )
		.map( ( word ) => word.results.map( ( result ) => result.reference ) )
		.flat();
}
