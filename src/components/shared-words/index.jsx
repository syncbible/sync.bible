// External dependencies
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import { fetchData } from '../../actions/index.js';
import Collapsible from '../collapsible/index.jsx';
import {
	getSharedWordsFromReferences,
	getListOfReferencesFromType,
} from './utils.js';
import Lemma from '../lemma';
import styles from './styles.module.scss';

function SharedWords( { type } ) {
	const [ limit, setLimit ] = useState( 100 );
	const [ sortBy, setSortBy ] = useState( 'count-desc' );
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

	const [ open, setOpen ] = useState( false );

	const sortWords = ( wordA, wordB ) => {
		if ( sortBy === 'count-desc' ) {
			return sharedWords[ wordB ] - sharedWords[ wordA ];
		} else if ( sortBy === 'strongs' ) {
			// Sort by Strong's number (numeric comparison)
			const numA = parseInt( wordA.substring( 1 ) );
			const numB = parseInt( wordB.substring( 1 ) );
			return numA - numB;
		}
		return 0;
	};

	const sharedWordsRendered = Object.keys( sharedWords )
		.filter( ( word ) => sharedWords[ word ] > 1 )
		.sort( sortWords )
		.map( ( word, index ) => (
			<li key={ index }>
				<Lemma
					key={ index }
					lemma={ word }
					count={ sharedWords[ word ] }
					version="original"
				/>
			</li>
		) );

	return listOfReferences.length > 1 ? (
		<Collapsible
			open={ open }
			onToggle={ () => {
				setOpen( ! open );
			} }
			header={ 'Shared words' }
		>
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
			<br />
			<label htmlFor="shared-words-sort">Sort by:</label>{ ' ' }
			<select
				id="shared-words-sort"
				value={ sortBy }
				onChange={ ( event ) => setSortBy( event.target.value ) }
				className={ styles.select }
			>
				<option value="count-desc">Uses</option>
				<option value="strongs">Strong&apos;s number</option>
			</select>
			{ sharedWordsRendered.length > 0 && (
				<ol>{ sharedWordsRendered }</ol>
			) }
		</Collapsible>
	) : null;
}

SharedWords.propTypes = {
	type: PropTypes.string.isRequired,
};

export default SharedWords;
