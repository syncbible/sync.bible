// External dependencies
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
import { fetchData } from '../../actions/index.js';
import Collapsible from '../collapsible/index.jsx';
import {
	getSharedWordsFromReferences,
	getListOfReferencesFromType,
} from './utils.js';
import Lemma from '../lemma';
import styles from './styles.module.scss';

export default function SharedWords( { type } ) {
	const [ limit, setLimit ] = useState( 100 );
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

	const sharedWordsRendered = Object.keys( sharedWords )
		.filter( ( word ) => sharedWords[ word ] > 1 )
		.sort( ( wordA, wordB ) => sharedWords[ wordB ] > sharedWords[ wordA ] )
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
			{ sharedWordsRendered.length > 0 && (
				<ol>{ sharedWordsRendered }</ol>
			) }
		</Collapsible>
	) : null;
}
