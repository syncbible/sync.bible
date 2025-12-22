// External
import { useSelector, shallowEqual } from 'react-redux';
import classnames from 'classnames';

// Internal
import Navigation from '../navigation';
import Controls from '../controls';
import styles from './style.module.scss';

export default function Dock() {
	const versionArray = useSelector(
		( state ) =>
			state.reference.map(
				( reference, index ) => reference.version ?? 'KJV'
			),
		shallowEqual
	);
	const showControls = useSelector( ( state ) => state.reference.length > 0 );
	const sidebarOpen = useSelector( ( state ) => state.sidebar );
	const activeTrays = useSelector( ( state ) => state.trays );
	const sidebarWidth = useSelector( ( state ) => state.settings.sidebarWidth );
	const className = classnames(
		styles.dock,
		sidebarOpen ? styles.dockWithSidebarOpen : null,
		showControls ? null : styles.noReference
	);

	// Calculate dynamic margin and width based on sidebar width
	const dockHeight = 60;
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
	const defaultWidth = activeTrays.length * 290;
	const customWidth = sidebarWidth || defaultWidth;

	// On mobile, sidebar overlays, so no margin adjustment needed
	const dynamicMargin = isMobile
		? dockHeight
		: dockHeight + (sidebarOpen && activeTrays.length > 0
			? customWidth
			: 0);
	const dynamicWidth = `calc(100% - ${dynamicMargin}px)`;

	return (
		<div
			className={ className }
			style={ { marginLeft: `${dynamicMargin}px`, width: dynamicWidth } }
		>
			<div className={ styles.dockVersionSelectors }>
				{ versionArray.map( ( version, index ) => (
					<Navigation
						key={ index }
						version={ version }
						index={ index }
					/>
				) ) }
				{ showControls && <Controls /> }
			</div>
		</div>
	);
}
