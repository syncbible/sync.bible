// External dependencies
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

// Internal dependencies
import styles from './styles.module.scss';
import TrayList from './tray-list';
import ResizeHandle from './resize-handle';
import Footer from '../footer';
import { rootClasses } from '../utils';
import { selectAllSettings } from '../../selectors';
import { DOCK_HEIGHT } from '../../constants/dimensions';
import { useTrayDimensions } from '../../hooks/useTrayDimensions';

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
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	const { darkMode, expandedSearchResults } = useSelector( selectAllSettings );
	const { activeTrays, customWidth, activeTraysCount } = useTrayDimensions();
	const drawerLeftOffset = DOCK_HEIGHT;

	if ( interfaceLanguage ) {
		return (
			<div className={ styles.trays }>
				<Footer trays={ trays } />
				{ activeTraysCount > 0 && (
					<div
						className={ classnames(
							styles.customDrawer,
							rootClasses( darkMode, expandedSearchResults )
						) }
						style={ {
							width: `${ customWidth }px`,
							left: drawerLeftOffset,
						} }
					>
						<div
							className={ styles.trayList }
							style={ { width: `${ customWidth }px` } }
						>
							<TrayList
								trays={ trays }
								sidebarWidth={ customWidth }
							/>
							<ResizeHandle />
						</div>
					</div>
				) }
			</div>
		);
	}

	return null;
};

export default React.memo( Trays );
