// External dependencies
import React from 'react';

// Internal dependencies
import SearchForm from './search-form';
import SearchResults from './search-results';
import CombinedResults from '../word-details/combined';
import SharedWords from '../shared-words';

const Search = ( { isActive } ) => (
	<>
		<SearchForm isActive={ isActive } />
		<SearchResults />
		<CombinedResults type="search" />
		<SharedWords type="search" />
	</>
);

export default React.memo( Search );
