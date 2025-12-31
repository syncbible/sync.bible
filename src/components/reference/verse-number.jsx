// External
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

// Internal
import { addToList, addTray, goToReferenceAction } from '../../actions';
import styles from './styles.module.scss';
import Bookmark from '../svg/bookmark';
import { getCrossReferences } from '../../lib/cross-references';

const VerseNumber = ( { book, chapter, verse, isCurrentRef, columnIndex } ) => {
	const dispatch = useDispatch();
	const data = useSelector( ( state ) => state.data );
	const inSync = useSelector( ( state ) => state.settings.inSync );
	const targetColumn = useSelector( ( state ) => state.settings.targetColumn );

	const addBookmarkAction = () => {
		dispatch( addTray( 'bookmark' ) );
		dispatch(
			addToList( {
				listType: 'bookmark',
				data: {
					reference: { book, chapter, verse },
				},
				results: getCrossReferences( data, { book, chapter, verse } ),
				visible: true,
			} )
		);
		// Only navigate if in sync mode OR this is the target column
		if ( inSync || columnIndex === targetColumn ) {
			dispatch( goToReferenceAction( { book, chapter, verse } ) );
		}
	};

	// Use consistent gray color for all bookmark icons
	const fill = '#999';

	return (
		<span
			className={ classnames( styles.verseNumber ) }
			onClick={ addBookmarkAction }
			title={ book + ' ' + chapter + ':' + verse }
		>
			<span>{ verse }</span>
			<span className={ styles.verseNumberIcon }>
				<Bookmark fill={ fill } />
			</span>
		</span>
	);
};

VerseNumber.propTypes = {
	book: PropTypes.string.isRequired,
	chapter: PropTypes.number.isRequired,
	verse: PropTypes.number.isRequired,
	isCurrentRef: PropTypes.bool,
	columnIndex: PropTypes.number,
};

export default VerseNumber;
