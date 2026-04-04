// External
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal
import {
	addColumnAction,
	deleteColumnAction,
	syncReferences,
	unSyncReferences,
	harmoniseAction,
	singleVerseAction,
} from '../../actions';
import Add from '../svg/add';
import Menu from '../svg/menu';
import styles from './styles.module.scss';

const Controls = () => {
	const dispatch = useDispatch();
	const inSync = useSelector( ( state ) => state.settings.inSync );
	const referenceLength = useSelector( ( state ) => state.reference.length );
	const isSingle = useSelector(
		( state ) => state.reference[ 0 ]?.version === 'All'
	);
	const change = ( event ) => {
		if ( event.target.value === 'add' ) {
			dispatch( addColumnAction() );
		}

		if ( event.target.value === 'delete' ) {
			dispatch( deleteColumnAction() );
		}

		if ( event.target.value === 'sync' ) {
			dispatch( syncReferences() );
		}

		if ( event.target.value === 'unsync' ) {
			dispatch( unSyncReferences() );
		}

		if ( event.target.value === 'harmonised' ) {
			dispatch( harmoniseAction() );
		}

		if ( event.target.value === 'single' ) {
			dispatch( singleVerseAction() );
		}

		setValue( '' );
		event.target.blur();
	};
	const [ value, setValue ] = useState( '' );

	if ( referenceLength > 1 || isSingle ) {
		return (
			<div className={ styles.controls }>
				<button className={ styles.menu }>
					<Menu />
				</button>
				<select
					onChange={ change }
					className={ styles.extraOptions }
					value={ value }
				>
					<option value="" disabled hidden>
						…
					</option>
					{ ! isSingle && (
						<option value="add">Add a column</option>
					) }
					{ referenceLength > 1 && (
						<option value="delete">Delete column</option>
					) }
					{ ( isSingle || inSync !== true ) && (
						<option value="sync">Sync references</option>
					) }
					{ ( isSingle || inSync !== false ) && (
						<option value="unsync">Un-sync references</option>
					) }
					{ ( isSingle || inSync !== 'harmonised' ) && (
						<option value="harmonised">Harmonise</option>
					) }
					{ ! isSingle && (
						<option value="single">Single verse</option>
					) }
				</select>
			</div>
		);
	}

	if ( referenceLength === 1 ) {
		return (
			<div className={ styles.controls }>
				<button
					className={ styles.addButton }
					onClick={ () => dispatch( addColumnAction() ) }
				>
					<Add />
				</button>
			</div>
		);
	}
};

export default React.memo( Controls );
