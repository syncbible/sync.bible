// External dependencies
import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
import { setTrayVisibilityFilter } from '../../actions';
import Collapsible from '../collapsible';
import JoinFull from '../svg/join-full';
import SortGroupResults from '../sort-group-results';
import { hasDisplayableCombinedResults } from '../../lib/reference';

const CombinedResults = ( { type } ) => {
	const dispatch = useDispatch();
	const [ open, setOpen ] = useState( false );
	const words = useSelector( ( state ) => {
		return state.list.filter( ( { listType } ) => listType === type );
	} );

	if ( words.length < 2 ) {
		return null;
	}

	// Check if there are any actual combined results that will pass the minCountToShow filter
	// NOTE: This calls getCombinedResults(), which SortGroupResults will also call again.
	// This duplication is a tradeoff to avoid rendering the Collapsible wrapper when there's no content.
	const _results = words.map( ( { results } ) => results );
	const hasDisplayableResults = useMemo(
		() => hasDisplayableCombinedResults( _results, 'verse', 2 ),
		[ JSON.stringify( _results ) ]
	);

	if ( ! hasDisplayableResults ) {
		return null;
	}

	return (
		<Collapsible
			open={ open }
			onToggle={ () => setOpen( ! open ) }
			className="collapse"
			header={
				<div>
					Combined{ ' ' }
					<a
						onClick={ ( event ) => {
							event.stopPropagation();
							dispatch(
								setTrayVisibilityFilter( 'combinedall' )
							);
						} }
					>
						<JoinFull />
					</a>
				</div>
			}
		>
			<SortGroupResults
				type={ type }
				initialGroup="verse"
				initialSort="desc"
				allowPreview={ true }
				minCountToShow={ 2 }
			/>
		</Collapsible>
	);
};

export default React.memo( CombinedResults );
