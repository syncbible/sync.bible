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
import { MOBILE_BREAKPOINT } from '../../constants/dimensions';

/** Filter component for tray visibility */
export default function TrayFilter( { children, filter, title } ) {
	const dispatch = useDispatch();
	const activeTrays = useSelector( ( state ) => state.trays );
	const isActive = activeTrays.includes( filter );

	return (
		<span
			title={ title }
			className={ classnames(
				styles.trayFilter,
				isActive ? styles.active : null
			) }
			onClick={ ( event ) => {
				event.preventDefault();
				const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

				if ( isMobile ) {
					// On mobile, only one tray at a time
					dispatch( setTrayVisibilityFilter( filter ) );
				} else {
					// On desktop, toggle the tray on/off
					dispatch( toggleTray( filter ) );
				}
			} }
		>
			{ children }
		</span>
	);
}

TrayFilter.propTypes = {
	children: PropTypes.node.isRequired,
	filter: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
