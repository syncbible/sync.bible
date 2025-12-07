// External dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Internal dependencies
import SearchForm from './search-form';
import SearchResults from './search-results';
import CombinedResults from '../word-details/combined';
import SharedWords from '../shared-words';
import { getReferenceFromSearchResult } from '../../lib/reference';

const Search = ( { isActive } ) => {
	const list = useSelector( ( state ) => state.list );
	const searchReferences = list
		.filter( ( { listType } ) => listType === 'search' )
		.filter( ( word ) => word.results )
		.map( ( word ) =>
			word.results.map( ( result ) =>
				getReferenceFromSearchResult( result.reference )
			)
		)
		.flat();

	return (
		<>
			<SearchForm isActive={ isActive } />
			<SearchResults />
			<CombinedResults type="search" />
			<SharedWords listOfReferences={ searchReferences } />
		</>
	);
};

export default React.memo( Search );
