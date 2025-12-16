// External dependencies
import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
import { setTrayVisibilityFilter } from '../../actions';
import Collapsible from '../collapsible';
import JoinFull from '../svg/join-full';
import SortGroupResults from '../sort-group-results';
import { getCombinedResults } from '../../lib/reference';

const CombinedResults = ( { type } ) => {
	const dispatch = useDispatch();
	const [ open, setOpen ] = useState( false );
	const words = useSelector( ( state ) => {
		return state.list.filter( ( { listType } ) => listType === type );
	} );

	// Compute combined results once here and check if there's displayable content
	// Pass the precomputed results to SortGroupResults to avoid duplicate computation
	const precomputedData = useMemo( () => {
		if ( words.length < 2 ) {
			return null;
		}

		const _results = words.map( ( { results } ) => results );
		const combined = getCombinedResults( _results, 'verse' );

		// Count occurrences to check if any reference appears at least twice (minCountToShow = 2)
		const referenceCounts = {};
		combined.forEach( ( ref ) => {
			referenceCounts[ ref ] = ( referenceCounts[ ref ] || 0 ) + 1;
		} );

		const hasDisplayable = Object.values( referenceCounts ).some(
			( count ) => count >= 2
		);

		return hasDisplayable ? _results : null;
	}, [ words ] );

	if ( ! precomputedData ) {
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
				precomputedResults={ precomputedData }
			/>
		</Collapsible>
	);
};

export default React.memo( CombinedResults );
