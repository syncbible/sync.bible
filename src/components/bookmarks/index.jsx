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

export default function BookMarks() {
	const dispatch = useDispatch();
	const { list, original } = useSelector( ( state ) => {
		return {
			list: state.list,
			original: state.data[ 'original' ],
		};
	}, [] );

	const bookmarks = list.filter(
		( { listType } ) => listType === 'bookmark'
	);
	const words = {};
	bookmarks.forEach( ( item ) => {
		const { book, chapter, verse } = item.data.reference;

		if (
			original &&
			original[ book ] &&
			original[ book ][ chapter ] &&
			original[ book ][ chapter - 1 ][ verse - 1 ] &&
			typeof original[ book ][ chapter - 1 ][ verse - 1 ] !== 'string'
		) {
			return original[ book ][ chapter - 1 ][ verse - 1 ].forEach(
				( word ) => {
					if ( ! word[ 1 ] ) {
						return;
					}
					const lemmas = word[ 1 ].split( ' ' );
					if ( lemmas ) {
						lemmas.forEach( ( lemma ) => {
							if ( ! words[ lemma ] ) {
								words[ lemma ] = 0;
							}
							words[ lemma ] = words[ lemma ] + 1;
						} );
					}
				}
			);
		}
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
}
