// External dependencies
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import {
	toggleTray,
	setTrayVisibilityFilter,
	openSidebar,
} from '../../actions';
import styles from './styles.module.scss';

/** Filter component for tray visibility */
export default function TrayFilter( { children, filter, title } ) {
	const dispatch = useDispatch();
	const activeTrays = useSelector( ( state ) => state.trays );
	const sidebarOpen = useSelector( ( state ) => state.sidebar );
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
				const isMobile = window.innerWidth < 768;

				if ( isMobile ) {
					// On mobile, use toggle behavior (only one tray at a time)
					dispatch( openSidebar() );
					dispatch( setTrayVisibilityFilter( filter ) );
				} else if ( ! sidebarOpen ) {
					// If sidebar is closed, open it and add the tray
					dispatch( openSidebar() );
					dispatch( toggleTray( filter ) );
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
