// External dependencies
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal dependencies
import { fetchData } from '../../actions/index.js';
import Bookmark from '../svg/bookmark';
import Collapsible from '../collapsible';
import CombinedResults from '../word-details/combined';
import JoinFull from '../svg/join-full';
import Single from './single';
import styles from './styles.module.scss';
import WordBlockLink from '../word-details/word-block-link';

const BookMarks = () => {
	const list = useSelector( ( state ) => state.list );
	const original = useSelector( ( state ) => state.data.original );

	const bookmarks = list.filter(
		( { listType } ) => listType === 'bookmark'
	);

	// Get unique lemmas for each bookmark.
	const bookmarkLemmasList = bookmarks.map( ( item ) => {
		const { book, chapter, verse } = item.data.reference;
		if (
			original &&
			original[ book ] &&
			original[ book ][ chapter ] &&
			original[ book ][ chapter - 1 ][ verse - 1 ]
		) {
			const referenceLemmas = original[ book ][ chapter - 1 ][ verse - 1 ]
				.filter( ( word ) => word[ 1 ] )
				.map( ( word ) => {
					return word[ 1 ].split( ' ' );
				} )
				.flat()
				.filter( ( word ) => word !== 'added' && word !== 'G3588' );
			return [ ...new Set( referenceLemmas ) ]; // dedupe.
		}
	} );

	const words = {};
	bookmarkLemmasList.forEach( ( bookmarkLemmas ) => {
		if ( ! bookmarkLemmas ) {
			return;
		}

		bookmarkLemmas.forEach( ( bookmarkLemma ) => {
			if ( ! words[ bookmarkLemma ] ) {
				words[ bookmarkLemma ] = 1;
			} else {
				words[ bookmarkLemma ] = words[ bookmarkLemma ] + 1;
			}
		} );
	} );

	const dispatch = useDispatch();
	dispatch( fetchData( 'original' ) );

	const [ open, setOpen ] = useState( false );

	function getSharedWords() {
		return (
			<Collapsible
				open={ open }
				onToggle={ () => {
					setOpen( ! open );
				} }
				header={
					<div>
						Shared Words <JoinFull />
					</div>
				}
				title={ 'Words that are used in more than one bookmark' }
			>
				<ol>
					{ Object.keys( words ).map( ( word, index ) => {
						if ( words[ word ] > 1 ) {
							return (
								<li key={ index }>
									<WordBlockLink
										key={ index }
										strongsNumber={ word }
										count={ words[ word ] }
									/>
								</li>
							);
						}
					} ) }
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
			{ bookmarks.length > 1 && getSharedWords() }
		</>
	);
};

export default BookMarks;
