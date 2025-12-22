// External dependencies
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// Internal dependencies
import styles from './styles.module.scss';
import TrayList from './tray-list';
import Footer from '../footer';
import { toggleSidebar, closeSidebar } from '../../actions';
import { rootClasses } from '../utils';
import { selectAllSettings } from '../../selectors';

// Tray comonents
import BookMarks from '../bookmarks';
import DailyReadings from '../daily-readings';
import SettingsTray from './settings';
import Stats from '../stats';
import Compare from '../compare';
import ReferenceSelector from '../reference-selector';
import WordDetails from '../word-details';
import CombinedAll from '../combined-all';
import Help from './help';
import Search from '../search';
import VersionsTray from '../versions';

// SVGs
import BookSvg from '../svg/book';
import BookmarksSvg from '../svg/bookmarks';
import CompareSvg from '../svg/compare';
import HelpSvg from '../svg/help';
import EyeSvg from '../svg/eye';
import SearchSvg from '../svg/search';
import StatsSvg from '../svg/stats';
import CalendarSvg from '../svg/calendar';
import JoinFull from '../svg/join-full';
import CogSvg from '../svg/cog';
import LibraryBooksSvg from '../svg/library-books';

export const trays = [
	{
		visible: true,
		id: 'goto',
		text: 'Go to',
		component: ReferenceSelector,
		icon: <BookSvg />,
	},
	{
		visible: false,
		id: 'word',
		text: 'Words',
		component: WordDetails,
		icon: <EyeSvg />,
	},
	{
		visible: false,
		id: 'search',
		text: 'Search',
		component: Search,
		icon: <SearchSvg />,
	},
	{
		visible: false,
		id: 'bookmark',
		text: 'Bookmarks',
		component: BookMarks,
		icon: <BookmarksSvg />,
	},
	{
		visible: false,
		id: 'combinedall',
		text: 'Combined',
		component: CombinedAll,
		icon: <JoinFull />,
	},
	{
		visible: false,
		id: 'stats',
		text: 'Stats',
		component: Stats,
		icon: <StatsSvg />,
	},
	{
		visible: false,
		id: 'reference',
		text: 'Compare',
		component: Compare,
		icon: <CompareSvg />,
	},
	{
		visible: false,
		id: 'dailyreadings',
		text: 'Dailies',
		component: DailyReadings,
		icon: <CalendarSvg />,
	},
	{
		visible: false,
		id: 'versions',
		text: 'Versions',
		component: VersionsTray,
		icon: <LibraryBooksSvg />,
	},
	{
		visible: false,
		id: 'settings',
		text: 'Settings',
		component: SettingsTray,
		icon: <CogSvg />,
	},
	{
		visible: false,
		id: 'help',
		text: 'Help',
		component: Help,
		icon: <HelpSvg />,
	},
];

const Trays = () => {
	const dispatch = useDispatch();
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	const sidebarOpen = useSelector( ( state ) => state.sidebar );
	const activeTrays = useSelector( ( state ) => state.trays );
	const drawerBleeding = 10; // Might be too small.
	const iOS =
		typeof navigator !== 'undefined' &&
		/iPad|iPhone|iPod/.test( navigator.userAgent );

	// Using selectAllSettings selector to combine multiple settings subscriptions
	const { darkMode, compareMode, expandedSearchResults } =
		useSelector( selectAllSettings );

	// Calculate drawer width based on number of active trays
	const baseTrayWidth = 290;
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
	const calculatedWidth = compareMode
		? '100vw'
		: activeTrays.length > 0
			? baseTrayWidth * activeTrays.length
			: 0;
	const drawerWidth = compareMode ? '100vw' : calculatedWidth;
	const drawerLeftOffset = compareMode ? 0 : 60;

	// Close sidebar when all trays are closed
	useEffect( () => {
		if ( sidebarOpen && activeTrays.length === 0 ) {
			dispatch( closeSidebar() );
		}
	}, [ activeTrays.length, sidebarOpen, dispatch ] );

	if ( interfaceLanguage ) {
		return (
			<div
				className={ classnames(
					styles.trays,
					compareMode ? styles.isCompareModeWrapper : null
				) }
			>
				<Footer trays={ trays } />
				<SwipeableDrawer
					className={ rootClasses(
						darkMode,
						compareMode,
						expandedSearchResults
					) }
					sx={ {
						width: drawerWidth,
						flexShrink: 0,
						zIndex: sidebarOpen ? 9 : -1, // Needed to keep the drawer from sitting over the canvas on initial load.
						'& .MuiDrawer-paper': {
							background: 'var(--background)',
							boxShadow: '2px 0 10px var(--shadow)',
							boxSizing: 'border-box',
							color: 'var(--color)',
							width: compareMode ? '100%' : drawerWidth,
						left: drawerLeftOffset, // Offset by dock width on desktop, 0 on mobile
						},
						'& .MuiBackdrop-root': {
							display: 'none',
						},
					} }
					anchor="left"
					open={ sidebarOpen }
					onClose={ () => dispatch( toggleSidebar() ) }
					onOpen={ () => dispatch( toggleSidebar() ) }
					disableSwipeToOpen={ false }
					disableBackdropTransition={ ! iOS }
					disableDiscovery={ iOS }
					disableEnforceFocus
					ModalProps={ {
						keepMounted: true,
					} }
					BackdropProps={ { invisible: true } }
					swipeAreaWidth={ drawerBleeding }
				>
					<div
						className={ classnames(
							styles.trayList,
							sidebarOpen ? styles.sidebarOpen : null,
							compareMode
								? styles.isCompareMode
								: styles.isReferenceMode
						) }
					>
						<TrayList trays={ trays } />
					</div>
				</SwipeableDrawer>
			</div>
		);
	}

	return null;
};

export default React.memo( Trays );
