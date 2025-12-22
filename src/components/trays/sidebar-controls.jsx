// External dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import { fetchData, settingsChange, toggleSidebar } from '../../actions';
import styles from './styles.module.scss';
import { mapVersionToData } from '../../lib/reference';
import VersionSelect from '../version-select';
import LeftPanelClose from '../svg/left-panel-close';

/** Controls component for sidebar with version selection and close button */
export default function SidebarControls( { trays } ) {
	const dispatch = useDispatch();
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);

	useEffect( () => {
		// Load data for OT and NT
		const otData = mapVersionToData( 'Genesis', interfaceLanguage );
		const ntData = mapVersionToData( 'Matthew', interfaceLanguage );
		dispatch( fetchData( otData ) );
		if ( ntData !== otData ) {
			dispatch( fetchData( ntData ) );
		}
	}, [ interfaceLanguage, dispatch ] );

	return (
		<div className={ styles.sidebarControls }>
			<span className={ styles.sidebarControlsInner } />

			<span className={ styles.sidebarControlsRightOuter }>
				<VersionSelect
					name="version"
					value={ interfaceLanguage }
					onChange={ ( event ) => {
						dispatch(
							settingsChange(
								'interfaceLanguage',
								event.target.value
							)
						);
						event.target.blur();
					} }
				/>

				<span className={ styles.sidebarControlsRight }>
					<button
						className={ styles.sidebarButton }
						onClick={ () => {
							dispatch( toggleSidebar() );
						} }
					>
						<LeftPanelClose />
					</button>
				</span>
			</span>
		</div>
	);
}

SidebarControls.propTypes = {
	trays: PropTypes.arrayOf(
		PropTypes.shape( {
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			component: PropTypes.elementType.isRequired,
		} )
	).isRequired,
};
