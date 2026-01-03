export function getReferenceStringByGroup( reference, group ) {
	if ( group === 'word' || group === 'morph' ) {
		return reference.word?.[ 0 ] || '';
	}

	if ( group === 'strongs' ) {
		return reference.strongsNumber;
	}

	if ( group === 'book' ) {
		return reference[ 0 ];
	}
	if ( group === 'chapter' ) {
		return reference[ 0 ] + '.' + reference[ 1 ];
	}

	return reference.join( '.' );
}

export function getCountedResults( results, group ) {
	const countedResults = {};
	results.forEach( ( resultArray ) => {
		const referenceString = getReferenceStringByGroup(
			resultArray[ 0 ],
			group
		);

		countedResults[ referenceString ] = resultArray.length;
	} );
	return countedResults;
}
