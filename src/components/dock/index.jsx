// External
import { useSelector, shallowEqual } from 'react-redux';

// Internal
import Navigation from '../navigation';
import styles from './style.module.scss';
import { DOCK_HEIGHT } from '../../constants/dimensions';
import { useTrayDimensions } from '../../hooks/useTrayDimensions';

export default function Dock() {
	const versionArray = useSelector(
		( state ) =>
			state.reference.map(
				( reference, index ) => reference.version ?? 'KJV'
			),
		shallowEqual
	);
	const showControls = useSelector( ( state ) => state.reference.length > 0 );
	const { isMobile, customWidth, activeTraysCount } = useTrayDimensions();

	// On mobile, sidebar overlays, so no margin adjustment needed
	const dynamicMargin = isMobile
		? DOCK_HEIGHT
		: DOCK_HEIGHT +
		  ( activeTraysCount > 0 ? customWidth : 0 );
	const dynamicWidth = `calc(100% - ${ dynamicMargin }px)`;

	return (
		<div
			className={ styles.dock }
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
