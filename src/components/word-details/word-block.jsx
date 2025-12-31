// External dependencies
import React, { useRef } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import stripPointing from '../../lib/strip-pointing.js';

// Internal dependencies
import Collapsible from '../collapsible';
import { getHighlight } from '../strongs-color.js';
import styles from './styles.module.scss';
import WordBlockDetails from './word-block-details';
import { removeFromList, toggleListItemVisible } from '../../actions';
import { useScrollIntoView } from '../../hooks/use-scroll-into-view';

const WordBlock = ( props ) => {
	const { data, visible, highlight, setFocus, word } = props;
	const { clickedWord, morphology, lemma, version } = data;
	const strongsDictionary = useSelector(
		( state ) => state.data.strongsDictionary
	);
	const strongsDictionaryWithFamilies = useSelector(
		( state ) => state.data.strongsDictionaryWithFamilies
	);
	const wordBlockRef = useRef( null );
	const collapsibleRef = useRef( null );

	// Scroll into view when this item becomes visible (newly added)
	useScrollIntoView( collapsibleRef, visible );

	const getSearchParameters = () => {
		return {
			clusivity: 'exclusive',
			version: version,
			lemma,
			range: 'verse',
			clickedWord,
		};
	};

	const getClassName = ( rootNumber ) => {
		return classnames( rootNumber, styles.wordTree, styles.wordListHeader );
	};

	const termTitle = ( { clusivity, version, lemma, range, clickedWord } ) => {
		return (
			'strongs number: ' +
			lemma +
			'\nversion: ' +
			version +
			'\nclusivity: ' +
			clusivity +
			'\nrange: ' +
			range +
			'\nclicked word: ' +
			clickedWord
		);
	};

	const wordDetail = strongsDictionary && strongsDictionary[ lemma ];

	const dispatch = useDispatch();

	const header = (
		<span>
			<span className={ styles.strongsNumberTitle }>{ lemma }</span>
			{ wordDetail && stripPointing( wordDetail.lemma ) }
		</span>
	);

	const handlePointerOver = ( event ) => {
		// Only isolate on mouse/pen, not touch
		if ( event.pointerType !== 'touch' ) {
			setFocus( lemma );
		}
	};

	const handlePointerOut = ( event ) => {
		// Only un-isolate on mouse/pen, not touch
		if ( event.pointerType !== 'touch' ) {
			setFocus( null );
		}
	};

	return (
		<Collapsible
			ref={ collapsibleRef }
			title={ termTitle( getSearchParameters() ) }
			header={ header }
			open={ visible }
			onToggle={ () => dispatch( toggleListItemVisible( props ) ) }
			className={ getClassName( lemma ) }
			textToCopy={ wordBlockRef }
			onRemove={ () => {
				setFocus( null );
				dispatch( removeFromList( props ) );
			} }
			onPointerOver={ handlePointerOver }
			onPointerOut={ handlePointerOut }
		>
			{ highlight && (
				<style>
					{ getHighlight( lemma, strongsDictionaryWithFamilies ) }
				</style>
			) }
			<div ref={ wordBlockRef }>
				<div className={ styles.wordBlock }>
					<WordBlockDetails
						word={ word }
						morphologyProp={ morphology }
						strongsNumber={ lemma }
						version={ version }
						resultsFromProps={ props.results }
						current={ props.current }
						id={ props.id }
						loading={ props.loading }
						data={ props.data }
					/>
				</div>
			</div>
		</Collapsible>
	);
};

export default React.memo( WordBlock );
