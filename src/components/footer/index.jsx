// External dependencies
import PropTypes from 'prop-types';

// Internal dependencies
import TrayFilter from '../../components/trays/filter';
import Controls from '../controls';
import styles from './styles.module.scss';

export default function Footer( { trays } ) {
	return (
		<div className={ styles.footer }>
			<Controls />
			{ trays.map( ( tray ) => {
				return (
					<TrayFilter
						trays={ trays }
						key={ tray.id }
						title={ tray.text }
						filter={ tray.id }
					>
						{ tray.icon }
					</TrayFilter>
				);
			} ) }
		</div>
	);
}

Footer.propTypes = {
	trays: PropTypes.arrayOf(
		PropTypes.shape( {
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			icon: PropTypes.node.isRequired,
		} )
	).isRequired,
};
