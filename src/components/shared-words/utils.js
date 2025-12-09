// Internal imports.
import { getReferenceText, getReferenceFromString } from '../../lib/reference';

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

	// Then for each reference get the list of unique lemmas per reference.
	const lemmasPerReference = uniqueReferences.map( ( referenceString ) => {
		const allLemmasInReference = [];
		const { book, chapter, verse } =
			getReferenceFromString( referenceString );
		if (
			data.original &&
			data.original[ book ] &&
			data.original[ book ][ chapter ] &&
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
								allLemmasInReference.push( lemma );
							}
						} );
					}
				}
			);
		}
		return [ ...new Set( allLemmasInReference ) ];
	} );

	// Validate.
	if ( ! lemmasPerReference || lemmasPerReference.length < 1 ) {
		return {};
	}

	// Then count how many of each lemma we have.
	const words = {};
	lemmasPerReference.forEach( ( lemmas ) => {
		lemmas.forEach( ( lemma ) => {
			if ( ! words[ lemma ] ) {
				words[ lemma ] = 0;
			}
			words[ lemma ] = words[ lemma ] + 1;
		} );
	} );

	return words;
}

export function getListOfReferencesFromType( list, type ) {
	const filteredList = list.filter( ( { listType } ) => listType === type );
	if ( type === 'bookmark' ) {
		return filteredList.map( ( item ) =>
			getReferenceText( item.data.reference )
		);
	}

	return filteredList
		.filter( ( word ) => word.results )
		.map( ( word ) => word.results.map( ( result ) => result.reference ) )
		.flat();
}
