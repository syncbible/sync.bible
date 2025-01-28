// External dependencies
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
//import { fetchSearchResults, fetchData } from '../../actions/index.js';
import Bookmark from '../svg/bookmark';
import CombinedResults from '../word-details/combined';
import Single from './single';
import styles from './styles.module.scss';

const BookMarks = () => {
	const { bookmarks, words } = useSelector( ( state ) => {
		const _bookmarks = state.list.filter(
			( { listType } ) => listType === 'bookmark'
		);

		const _words = {};
		_bookmarks.forEach( ( item ) => {
			const { book, chapter, verse, version } = item.data.reference;

			if (
				state.data[ version ] &&
				state.data[ version ][ book ] &&
				state.data[ version ][ book ][ chapter ] &&
				state.data[ version ][ book ][ chapter - 1 ][ verse - 1 ]
			) {
				return state.data[ version ][ book ][ chapter - 1 ][
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

	if ( bookmarks.length > 0 ) {
		// Get the data for extra stuff in single.
		// not used right now
		//dispatch( fetchSearchResults() );
		//dispatch( fetchData( 'original' ) );
	}

	function getSharedWords() {
		return null;
		return (
			<div>
				<ol>
					{ Object.keys( words )
						.filter( ( word ) => words[ word ] > 1 )
						.map( ( word, index ) => (
							<li key={ index }>
								{ word } { words[ word ] }
							</li>
						) ) }
				</ol>
			</div>
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
