// External dependencies
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import {
	toggleTray,
	setTrayVisibilityFilter,
} from '../../actions';
import styles from './styles.module.scss';
import { useIsMobile } from '../../hooks/useIsMobile';

/** Filter component for tray visibility */
export default function TrayFilter( { children, filter, title } ) {
	const dispatch = useDispatch();
	const activeTrays = useSelector( ( state ) => state.trays );
	const isActive = activeTrays.includes( filter );
	const isMobile = useIsMobile();

	const handleClick = ( event ) => {
		event.preventDefault();

		if ( isMobile ) {
			// On mobile, only one tray at a time
			dispatch( setTrayVisibilityFilter( filter ) );
		} else {
			// On desktop, toggle the tray on/off
			dispatch( toggleTray( filter ) );
		}
	};

	return (
		<button
			type="button"
			title={ title }
			className={ classnames(
				styles.trayFilter,
				isActive ? styles.active : null
			) }
			onClick={ handleClick }
		>
			{ children }
		</button>
	);
}

TrayFilter.propTypes = {
	children: PropTypes.node.isRequired,
	filter: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
