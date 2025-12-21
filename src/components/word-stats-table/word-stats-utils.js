export const createSortFunctions = ( common, strongsObjectWithFamilies ) => {
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
