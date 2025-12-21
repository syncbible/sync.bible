// External dependencies
import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import { fetchData } from '../../actions/index.js';
import Collapsible from '../collapsible/index.jsx';
import {
	getSharedWordsFromReferences,
	getListOfReferencesFromType,
} from './utils.js';
import WordStatsTable from '../word-stats-table';
import styles from './styles.module.scss';

function SharedWords( { type } ) {
	const [ limit, setLimit ] = useState( 100 );
	const [ sortBy, setSortBy ] = useState( 'significanceDesc' );
	const list = useSelector( ( state ) => state.list );
	const listOfReferences = getListOfReferencesFromType( list, type );
	const dispatch = useDispatch();

	if ( listOfReferences.length > 0 ) {
		// Get the data for bookmark lemmas.
		dispatch( fetchData( 'original' ) );
	}
	const data = useSelector( ( state ) => state.data );

	const sharedWords = getSharedWordsFromReferences(
		listOfReferences,
		data,
		limit
	);

	// Filter to only show words that appear more than once
	const filteredSharedWords = useMemo( () => {
		const filtered = {};
		Object.keys( sharedWords ).forEach( ( word ) => {
			if ( sharedWords[ word ] > 1 ) {
				filtered[ word ] = sharedWords[ word ];
			}
		} );
		return filtered;
	}, [ sharedWords ] );

	const [ open, setOpen ] = useState( false );

	// Convert SharedWords sort format to WordStatsTable format
	const convertedSort = sortBy === 'count-desc' ? 'usesDesc' : sortBy;

	return listOfReferences.length > 1 ? (
		<Collapsible
			open={ open }
			onToggle={ () => {
				setOpen( ! open );
			} }
			header={ 'Shared words' }
		>
			<div>
				Words that are used in more than one reference
				<br />
				with less than{ ' ' }
				<input
					type="number"
					name="limit"
					value={ limit }
					onChange={ ( event ) =>
						setLimit( Number( event.target.value ) )
					}
					className={ styles.limit }
				/>{ ' ' }
				uses
			</div>
			{ Object.keys( filteredSharedWords ).length > 0 ? (
				<div className={ styles.tableWrapper }>
					<WordStatsTable
						common={ filteredSharedWords }
						sort={ convertedSort }
						setSort={ setSortBy }
					/>
				</div>
			) : (
				<p>No shared words found.</p>
			) }
		</Collapsible>
	) : null;
}

SharedWords.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SharedWords;
