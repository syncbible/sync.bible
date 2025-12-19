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

	// Count all occurrences of each lemma across all references
	const words = {};

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
								data.strongsObjectWithFamilies[ lemma ].count <
									limit
							) {
								if ( ! words[ lemma ] ) {
									words[ lemma ] = 0;
								}
								words[ lemma ] = words[ lemma ] + 1;
							}
						} );
					}
				}
			);
		}
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
