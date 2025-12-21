export const createSortFunctions = ( common, strongsObjectWithFamilies, strongsDictionary ) => {
	const sortByStrongsAsc = ( a, b ) => {
		// Extract the numeric part from Strong's numbers (e.g., "H123" -> 123)
		const numA = parseInt( a.substring( 1 ) );
		const numB = parseInt( b.substring( 1 ) );
		return numA - numB;
	};

	const sortByStrongsDesc = ( a, b ) => {
		const numA = parseInt( a.substring( 1 ) );
		const numB = parseInt( b.substring( 1 ) );
		return numB - numA;
	};

	const sortByWordAsc = ( a, b ) => {
		const wordA = strongsDictionary?.[ a ]?.lemma || '';
		const wordB = strongsDictionary?.[ b ]?.lemma || '';
		return wordA.localeCompare( wordB );
	};

	const sortByWordDesc = ( a, b ) => {
		const wordA = strongsDictionary?.[ a ]?.lemma || '';
		const wordB = strongsDictionary?.[ b ]?.lemma || '';
		return wordB.localeCompare( wordA );
	};

	const sortByTotalAsc = ( a, b ) => {
		return (
			strongsObjectWithFamilies[ a ].count -
			strongsObjectWithFamilies[ b ].count
		);
	};

	const sortByTotalDesc = ( a, b ) => {
		return (
			strongsObjectWithFamilies[ b ].count -
			strongsObjectWithFamilies[ a ].count
		);
	};

	const sortByUsesDesc = ( a, b ) => {
		return common[ b ] - common[ a ];
	};

	const sortByUsesAsc = ( a, b ) => {
		return common[ a ] - common[ b ];
	};

	const sortBySignificanceAsc = ( a, b ) => {
		const significanceA =
			common[ a ] / strongsObjectWithFamilies[ a ].count;
		const significanceB =
			common[ b ] / strongsObjectWithFamilies[ b ].count;
		return significanceA - significanceB;
	};

	const sortBySignificanceDesc = ( a, b ) => {
		const significanceA =
			common[ a ] / strongsObjectWithFamilies[ a ].count;
		const significanceB =
			common[ b ] / strongsObjectWithFamilies[ b ].count;
		return significanceB - significanceA;
	};

	return {
		sortByStrongsAsc,
		sortByStrongsDesc,
		sortByWordAsc,
		sortByWordDesc,
		sortByTotalAsc,
		sortByTotalDesc,
		sortByUsesDesc,
		sortByUsesAsc,
		sortBySignificanceAsc,
		sortBySignificanceDesc,
	};
};

export const getSortFunction = ( sort, sortFunctions ) => {
	switch ( sort ) {
		case 'strongsAsc':
			return sortFunctions.sortByStrongsAsc;

		case 'strongsDesc':
			return sortFunctions.sortByStrongsDesc;

		case 'wordAsc':
			return sortFunctions.sortByWordAsc;

		case 'wordDesc':
			return sortFunctions.sortByWordDesc;

		case 'usesDesc':
			return sortFunctions.sortByUsesDesc;

		case 'usesAsc':
			return sortFunctions.sortByUsesAsc;

		case 'totalAsc':
			return sortFunctions.sortByTotalAsc;

		case 'totalDesc':
			return sortFunctions.sortByTotalDesc;

		case 'significanceAsc':
			return sortFunctions.sortBySignificanceAsc;

		case 'significanceDesc':
			return sortFunctions.sortBySignificanceDesc;

		default:
			return sortFunctions.sortBySignificanceDesc;
	}
};
