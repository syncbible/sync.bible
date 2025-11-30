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
	const className = classnames(
		styles.dock,
		sidebarOpen ? styles.dockWithSidebarOpen : null,
		showControls ? null : styles.noReference
	);

	return (
		<div className={ className }>
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
