// External dependencies
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
import { fetchData } from '../../actions/index.js';
import Collapsible from '../collapsible/index.jsx';
import { getSharedWordsFromBookmarks } from './utils.js';
import WordBlockLink from '../word-details/word-block-link.jsx';

export default function SharedWords( { list } ) {
	const dispatch = useDispatch();

	if ( list.length > 0 ) {
		// Get the data for bookmark lemmas.
		dispatch( fetchData( 'original' ) );
	}
	const original = useSelector( ( state ) => state.data[ 'original' ] );

	const sharedWords = getSharedWordsFromBookmarks( list, original );

	const [ open, setOpen ] = useState( false );

	const sharedWordsRendered = Object.keys( sharedWords )
		.filter( ( word ) => sharedWords[ word ] > 1 )
		.map( ( word, index ) => (
			<li key={ index }>
				<WordBlockLink
					key={ index }
					strongsNumber={ word }
					count={ sharedWords[ word ] }
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
			title={ 'Words that are used in more than one bookmark' }
		>
			<ol>{ sharedWordsRendered }</ol>
		</Collapsible>
	) : null;
}
