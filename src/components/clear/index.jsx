// External dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import { removeTypeFromList } from '../../actions';
import DeleteForever from '../svg/delete-forever';
import styles from './style.module.scss';

export default function Clear( { selectedTrayId } ) {
	const dispatch = useDispatch();
	const list = useSelector( ( state ) => state.list );

	// Check if this tray type supports clearing
	const CLEARABLE_TRAYS = [ 'bookmark', 'word', 'search' ];
	if ( ! CLEARABLE_TRAYS.includes( selectedTrayId ) ) {
		return null;
	}

	// Check if there are any items to clear
	const itemsOfType = list.filter( ( { listType } ) => listType === selectedTrayId );
	if ( itemsOfType.length === 0 ) {
		return null;
	}

	const clearTray = ( event ) => {
		event.preventDefault();
		dispatch( removeTypeFromList( selectedTrayId ) );
	};

	return (
		<button
			onClick={ clearTray }
			title="Clear"
			className={ styles.clear }
		>
			<DeleteForever />
		</button>
	);
}

Clear.propTypes = {
	selectedTrayId: PropTypes.oneOf( [ 'bookmark', 'word', 'search' ] )
		.isRequired,
};
