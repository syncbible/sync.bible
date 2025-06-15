import bible from '../data/bible.js';
import referenceArray from '../data/reference-array';

export const getCrossReferencesArray = ( data, referencePosition ) => {
	if (
		! data.crossReferences ||
		! data.crossReferences[ referencePosition ]
	) {
		return [];
	}

	return data.crossReferences[ referencePosition ];
};

function getReverseCrossRefs( data, referencePosition ) {
	if ( ! data.crossReferences ) {
		return [];
	}

	const reverseCrossRefs = Object.keys( data.crossReferences ).filter(
		( crossReference ) => {
			return (
				data.crossReferences[ crossReference ].indexOf(
					referencePosition
				) > -1
			);
		}
	);
	return reverseCrossRefs.map( ( crossRef ) => parseInt( crossRef ) );
}

function getReferencePosition( reference ) {
	const { book, chapter, verse } = reference;
	const bookID = bible.getBookId( book ) - 1;
	const shortBookCode =
		bible.Data.books[ bookID ][ bible.Data.books[ bookID ].length - 1 ];
	return referenceArray.indexOf(
		shortBookCode + '.' + chapter + '.' + verse
	);
}

export const getCrossReferences = ( data, reference ) => {
	if ( ! reference ) {
		return [];
	}
	const referencePosition = getReferencePosition( reference );
	if ( ! referencePosition ) {
		return [];
	}
	const crossReferenceArray = getCrossReferencesArray(
		data,
		referencePosition
	);
	const reverseCrossRefs = getReverseCrossRefs( data, referencePosition );

	// Combine both sets of cross refs.
	const combinedCrossRefs = crossReferenceArray.concat( reverseCrossRefs );
	const uniqueCrossRefs = [ ...combinedCrossRefs ];

	return uniqueCrossRefs.map( ( referencePosition ) => {
		let firstReferencePosition = referencePosition;
		if ( referencePosition.split ) {
			firstReferencePosition = referencePosition.split( '-' )[ 0 ];
		}
		const crossReferenceArray =
			referenceArray[ firstReferencePosition ].split( '.' );
		const bookId = bible.getBookId( crossReferenceArray[ 0 ] );
		return {
			reference:
				bible.Data.books[ bookId - 1 ][ 0 ] +
				'.' +
				crossReferenceArray[ 1 ] +
				'.' +
				crossReferenceArray[ 2 ],
		};
	} );
};
