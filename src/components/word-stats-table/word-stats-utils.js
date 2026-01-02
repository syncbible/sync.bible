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
		const countA = strongsObjectWithFamilies[ a ]?.count || 0;
		const countB = strongsObjectWithFamilies[ b ]?.count || 0;
		return countA - countB;
	};

	const sortByTotalDesc = ( a, b ) => {
		const countA = strongsObjectWithFamilies[ a ]?.count || 0;
		const countB = strongsObjectWithFamilies[ b ]?.count || 0;
		return countB - countA;
	};

	const sortByUsesDesc = ( a, b ) => {
		return common[ b ] - common[ a ];
	};

	const sortByUsesAsc = ( a, b ) => {
		return common[ a ] - common[ b ];
	};

	const sortBySignificanceAsc = ( a, b ) => {
		const countA = strongsObjectWithFamilies[ a ]?.count || 1;
		const countB = strongsObjectWithFamilies[ b ]?.count || 1;
		const significanceA = common[ a ] / countA;
		const significanceB = common[ b ] / countB;
		return significanceA - significanceB;
	};

	const sortBySignificanceDesc = ( a, b ) => {
		const countA = strongsObjectWithFamilies[ a ]?.count || 1;
		const countB = strongsObjectWithFamilies[ b ]?.count || 1;
		const significanceA = common[ a ] / countA;
		const significanceB = common[ b ] / countB;
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
