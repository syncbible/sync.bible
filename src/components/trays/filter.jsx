// External dependencies
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import {
	setTrayVisibilityFilter,
	settingsChange,
	toggleSidebar,
} from '../../actions';
import styles from './styles.module.scss';

/** Filter component for tray visibility */
export default function TrayFilter( { children, filter, title } ) {
	const dispatch = useDispatch();
	const activeTray = useSelector( ( state ) => state.trays );

	return (
		<span
			title={ title }
			className={ classnames(
				styles.trayFilter,
				filter === activeTray ? styles.active : null
			) }
			onClick={ ( event ) => {
				event.preventDefault();
				if ( activeTray === filter ) {
					dispatch( toggleSidebar() );
					dispatch( settingsChange( 'compareMode', false ) );
				} else {
					dispatch( setTrayVisibilityFilter( filter ) );
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
