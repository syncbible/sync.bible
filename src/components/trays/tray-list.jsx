// External
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

// Internal
import { fetchData } from '../../actions';
import { mapVersionToData } from '../../lib/reference';
import TrayHeaderButtons from './tray-header-buttons';
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

	// Helper to check if a tray has multiple list items
	const hasMultipleListItems = ( trayId ) => {
		return list.filter( ( item ) => item.listType === trayId ).length > 1;
	};

	// Helper to check if any items are open for a tray
	const hasOpenItemsForTray = ( trayId ) => {
		const itemsOfType = list.filter( ( item ) => item.listType === trayId );
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
		const hasListItems = hasMultipleListItems( tray.id );

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
					<TrayHeaderButtons
						trayId={ tray.id }
						trayText={ tray.text }
						hasListItems={ hasListItems }
						hasOpenItems={ hasOpenItemsForTray( tray.id ) }
					/>
				</div>
				<tray.component isActive={ isActive } />
			</div>
		);
	} );
};

export default React.memo( TrayList );
