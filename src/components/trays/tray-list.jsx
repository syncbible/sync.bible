// External
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

// Internal
import { removeTray, fetchData, closeAllListItems } from '../../actions';
import { mapVersionToData } from '../../lib/reference';
import Close from '../svg/close';
import Clear from '../clear';
import UnfoldLessDouble from '../svg/unfold-less-double';
import styles from './styles.module.scss';
import { TRAY_WIDTH } from '../../constants/dimensions';

const TrayList = ( { trays, sidebarWidth } ) => {
	const dispatch = useDispatch();
	const activeTrays = useSelector( ( state ) => state.trays );
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	const list = useSelector( ( state ) => state.list );
	const userInterface = useSelector( ( state ) => state.userInterface );

	// Calculate per-tray width by dividing sidebar width by number of active trays
	const trayWidth =
		activeTrays.length > 0 ? sidebarWidth / activeTrays.length : TRAY_WIDTH;
	const wordListItems = useSelector( ( state ) => {
		return (
			state.list.filter( ( listItem ) => listItem.listType === 'word' )
				.length > 1
		);
	} );
	const bookmarkListItems = useSelector( ( state ) => {
		return (
			state.list.filter(
				( listItem ) => listItem.listType === 'bookmark'
			).length > 1
		);
	} );
	const searchListItems = useSelector( ( state ) => {
		return (
			state.list.filter( ( listItem ) => listItem.listType === 'search' )
				.length > 1
		);
	} );

	const closeAllForTray = ( trayId ) => {
		dispatch( closeAllListItems( trayId ) );
	};

	const hasOpenItemsForTray = ( trayId ) => {
		// Get all list items of this type
		const itemsOfType = list.filter( ( item ) => item.listType === trayId );
		// Check if any are open
		return itemsOfType.some( ( item ) => userInterface[ item.id ] );
	};

	useEffect( () => {
		// Load data for OT and NT
		const otData = mapVersionToData( 'Genesis', interfaceLanguage );
		const ntData = mapVersionToData( 'Matthew', interfaceLanguage );
		dispatch( fetchData( otData ) );
		if ( ntData !== otData ) {
			dispatch( fetchData( ntData ) );
		}
	}, [ interfaceLanguage, dispatch ] );

	return trays.map( ( tray ) => {
		const isActive = activeTrays.includes( tray.id );
		const hasListItems =
			( tray.id === 'word' && wordListItems ) ||
			( tray.id === 'bookmark' && bookmarkListItems ) ||
			( tray.id === 'search' && searchListItems );

		// Calculate z-index: leftmost tray gets highest z-index
		const trayPosition = activeTrays.indexOf( tray.id );
		const zIndex = isActive ? 100 - trayPosition : 10;

		return (
			<div
				key={ tray.id }
				className={ classnames(
					styles.tray,
					isActive ? styles.visible : styles.hidden
				) }
				style={ {
					width: `${ trayWidth }px`,
					minWidth: `${ trayWidth }px`,
					zIndex: zIndex,
				} }
			>
				<div className={ styles.trayHeader }>
					<h3 className={ styles.trayTitle }>{ tray.text }</h3>
					<div className={ styles.trayHeaderRight }>
						{ hasListItems && (
							<>
								{ hasOpenItemsForTray( tray.id ) && (
									<button
										className={ styles.trayHeaderButton }
										onClick={ () => {
											closeAllForTray( tray.id );
										} }
										title="Close all"
									>
										<UnfoldLessDouble />
									</button>
								) }
								<Clear selectedTrayId={ tray.id } />
							</>
						) }
						<button
							className={ classnames( styles.trayHeaderButton ) }
							onClick={ () => dispatch( removeTray( tray.id ) ) }
							title={ `Close ${ tray.text }` }
						>
							<Close />
						</button>
					</div>
				</div>
				<tray.component isActive={ isActive } />
			</div>
		);
	} );
};

export default React.memo( TrayList );
