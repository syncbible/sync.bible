// External
import classnames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { selectWord } from '../../actions';

const WordBlockLink = ( { strongsNumber, version, count } ) => {
	const dispatch = useDispatch();

	const getClassName = ( strongsNumber ) => {
		return classnames( strongsNumber, styles.wordTree );
	};

	const highlight = ( strongsNumber ) => {
		window.updateAppComponent( 'highlightedWord', strongsNumber );
	};

	const unHighlight = () => {
		window.updateAppComponent( 'highlightedWord', null );
	};

	const searchForWord = ( strongsNumber ) => {
		dispatch(
			selectWord( {
				lemma: strongsNumber,
				version,
			} )
		);
	};

	return (
		<span>
			<a
				className={ getClassName( strongsNumber ) }
				onClick={ () => searchForWord( strongsNumber ) }
				onMouseOver={ () => highlight( strongsNumber ) }
				onMouseOut={ unHighlight }
			>
				{ strongsNumber } { count && '(' + count + ')' }
			</a>
		</span>
	);
};

WordBlockLink.propTypes = {
	strongsNumber: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	count: PropTypes.number,
};

export default React.memo( WordBlockLink );
