// External dependencies
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
import { fetchData } from '../../actions/index.js';
import Bookmark from '../svg/bookmark';
import Collapsible from '../collapsible';
import CombinedResults from '../word-details/combined';
import Single from './single';
import styles from './styles.module.scss';
import WordBlockLink from '../word-details/word-block-link';

const BookMarks = () => {
	const dispatch = useDispatch();
	const { bookmarks, words } = useSelector( ( state ) => {
		const _bookmarks = state.list.filter(
			( { listType } ) => listType === 'bookmark'
		);

		const _words = {};
		_bookmarks.forEach( ( item ) => {
			const { book, chapter, verse } = item.data.reference;

			if (
				state.data[ 'original' ] &&
				state.data[ 'original' ][ book ] &&
				state.data[ 'original' ][ book ][ chapter ] &&
				state.data[ 'original' ][ book ][ chapter - 1 ][ verse - 1 ] &&
				typeof state.data[ 'original' ][ book ][ chapter - 1 ][
					verse - 1
				] !== 'string'
			) {
				return state.data[ 'original' ][ book ][ chapter - 1 ][
					verse - 1
				].forEach( ( word ) => {
					if ( ! word[ 1 ] ) {
						return;
					}
					const lemmas = word[ 1 ].split( ' ' );
					if ( lemmas ) {
						lemmas.forEach( ( lemma ) => {
							if ( ! _words[ lemma ] ) {
								_words[ lemma ] = 0;
							}
							_words[ lemma ] = _words[ lemma ] + 1;
						} );
					}
				} );
			}
		} );

		return {
			bookmarks: _bookmarks,
			words: _words,
		};
	} );

	const [ open, setOpen ] = useState( false );

	if ( bookmarks.length > 0 ) {
		// Get the data for extra stuff in single.
		// not used right now
		//dispatch( fetchSearchResults() );
		dispatch( fetchData( 'original' ) );
	}

	function getSharedWords() {
		return (
			<Collapsible
				open={ open }
				onToggle={ () => {
					setOpen( ! open );
				} }
				header={ 'Shared Words' }
				title={ 'Words that are used in more than one bookmark' }
			>
				<ol>
					{ Object.keys( words )
						.filter( ( word ) => words[ word ] > 1 )
						.map( ( word, index ) => (
							<li key={ index }>
								<WordBlockLink
									key={ index }
									strongsNumber={ word }
									count={ words[ word ] }
								/>
							</li>
						) ) }
				</ol>
			</Collapsible>
		);
	}

	return (
		<>
			{ bookmarks.length === 0 && (
				<p className={ styles.description }>
					Click the <Bookmark /> to bookmark a verse.
				</p>
			) }
			{ bookmarks.map( ( bookmark, key ) => (
				<Single bookmark={ bookmark } key={ key } index={ key } />
			) ) }
			<CombinedResults type="bookmark" />
			{ getSharedWords() }
		</>
	);
};

export default React.memo( BookMarks );
