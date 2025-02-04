// External dependencies
import React, { useRef } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import stripPointing from '../../lib/strip-pointing.js';

// Internal dependencies
import Collapsible from '../collapsible';
import styles from './styles.module.scss';
import WordBlockDetails from './word-block-details';
import WordHighlight from './word-highlight.jsx';
import {
	focusWord,
	removeFromList,
	toggleListItemVisible,
} from '../../actions';

const WordBlock = ( props ) => {
	const { data, visible, word } = props;
	const { clickedWord, morphology, lemma, version } = data;
	const strongsDictionary = useSelector(
		( state ) => state.data.strongsDictionary
	);
	const wordBlockRef = useRef( null );
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

	return (
		<Collapsible
			title={ termTitle( getSearchParameters() ) }
			header={ header }
			open={ visible }
			onToggle={ () => dispatch( toggleListItemVisible( props ) ) }
			className={ getClassName( lemma ) }
			textToCopy={ wordBlockRef }
			onRemove={ () => {
				dispatch( focusWord( null ) );
				dispatch( removeFromList( props ) );
			} }
			onMouseOver={ () => dispatch( focusWord( lemma ) ) }
			onMouseOut={ () => dispatch( focusWord( null ) ) }
		>
			<WordHighlight lemma={ lemma } />
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

export default WordBlock;
