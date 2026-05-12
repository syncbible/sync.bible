// External
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Internal
import { fetchData, settingsChange } from '../../actions';
import { mapVersionToData } from '../../lib/reference';
import TrayHeaderButtons from './tray-header-buttons';
import VersionSelect from '../version-select';
import LibraryBooksSvg from '../svg/library-books';
import styles from './styles.module.scss';
import {
	TRAY_WIDTH,
	TRAY_Z_INDEX_BASE,
	TRAY_Z_INDEX_INACTIVE,
} from '../../constants/dimensions';

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

	const hasAnyListItems = ( trayId ) => {
		return list.some( ( item ) => item.listType === trayId );
	};

	// Helper to check if any items are open for a tray
	const hasOpenItemsForTray = ( trayId ) => {
		const itemsOfType = list.filter( ( item ) => item.listType === trayId );
		return itemsOfType.some( ( item ) => userInterface[ item.id ] );
	};

	const changeInterfaceLanguage = useCallback(
		( event ) => {
			dispatch( settingsChange( event.target.name, event.target.value ) );
			event.target.blur();
		},
		[ dispatch ]
	);

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
		const hasTrayItems = hasAnyListItems( tray.id );

		// Calculate z-index: leftmost active tray gets highest z-index
		// This ensures overlapping trays stack correctly from left to right
		const trayPosition = activeTrays.indexOf( tray.id );
		const zIndex = isActive
			? TRAY_Z_INDEX_BASE - trayPosition
			: TRAY_Z_INDEX_INACTIVE;

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
						{ [
							'word',
							'search',
							'bookmark',
							'combinedall',
						].includes( tray.id ) &&
							hasTrayItems && (
								<div className={ styles.versionMenuControl }>
									<button
										className={ styles.trayHeaderButton }
										type="button"
										tabIndex={ -1 }
										aria-hidden="true"
										title="Select language"
									>
										<LibraryBooksSvg />
									</button>
									<VersionSelect
										value={ interfaceLanguage }
										name="interfaceLanguage"
										onChange={ changeInterfaceLanguage }
										ariaLabel="Select language"
									/>
								</div>
							) }
						<TrayHeaderButtons
							trayId={ tray.id }
							trayText={ tray.text }
							hasListItems={ hasListItems }
							hasOpenItems={ hasOpenItemsForTray( tray.id ) }
						/>
					</div>
				</div>
				<tray.component isActive={ isActive } />
			</div>
		);
	} );
};

TrayList.propTypes = {
	trays: PropTypes.array.isRequired,
	sidebarWidth: PropTypes.number.isRequired,
};

export default React.memo( TrayList );
