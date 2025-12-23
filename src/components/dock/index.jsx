// External
import { useSelector, shallowEqual } from 'react-redux';
import classnames from 'classnames';

// Internal
import Navigation from '../navigation';
import styles from './style.module.scss';
import { TRAY_WIDTH, DOCK_HEIGHT, MOBILE_BREAKPOINT } from '../../constants/dimensions';

export default function Dock() {
	const versionArray = useSelector(
		( state ) =>
			state.reference.map(
				( reference, index ) => reference.version ?? 'KJV'
			),
		shallowEqual
	);
	const showControls = useSelector( ( state ) => state.reference.length > 0 );
	const activeTrays = useSelector( ( state ) => state.trays );
	const sidebarWidth = useSelector(
		( state ) => state.settings.sidebarWidth
	);
	const className = classnames(
		styles.dock,
		showControls ? null : styles.noReference
	);

	// Calculate dynamic margin and width based on sidebar width
	const isMobile = typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT;
	const defaultWidth = activeTrays.length * TRAY_WIDTH;
	const customWidth = sidebarWidth || defaultWidth;

	// On mobile, sidebar overlays, so no margin adjustment needed
	const dynamicMargin = isMobile
		? DOCK_HEIGHT
		: DOCK_HEIGHT +
		  ( activeTrays.length > 0 ? customWidth : 0 );
	const dynamicWidth = `calc(100% - ${ dynamicMargin }px)`;

	return (
		<div
			className={ className }
			style={ {
				marginLeft: `${ dynamicMargin }px`,
				width: dynamicWidth,
			} }
		>
			<div className={ styles.dockVersionSelectors }>
				{ versionArray.map( ( version, index ) => (
					<Navigation
						key={ index }
						version={ version }
						index={ index }
					/>
				) ) }
			</div>
		</div>
	);
}
