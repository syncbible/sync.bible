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

export default function SharedWords( { type } ) {
	const list = useSelector( ( state ) => state.list );
	const listOfReferences = getListOfReferencesFromType( list, type );
	const dispatch = useDispatch();

	if ( listOfReferences.length > 0 ) {
		// Get the data for bookmark lemmas.
		dispatch( fetchData( 'original' ) );
	}
	const original = useSelector( ( state ) => state.data[ 'original' ] );

	const sharedWords = getSharedWordsFromReferences(
		listOfReferences,
		original
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

	return sharedWordsRendered.length > 0 ? (
		<Collapsible
			open={ open }
			onToggle={ () => {
				setOpen( ! open );
			} }
			header={ 'Shared words' }
			title={
				'Words that are used in more than one references - the number is how many references each word is used in.'
			}
		>
			<ol>{ sharedWordsRendered }</ol>
		</Collapsible>
	) : null;
}
