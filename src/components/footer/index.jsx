// External dependencies
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Internal dependencies
import SyncBible from '../svg/syncbible';
import TrayFilter from '../../components/trays/filter';
import { settingsChange, openSidebar } from '../../actions/index.js';
import styles from './styles.module.scss';

export default function Footer( { trays } ) {
	const compareMode = useSelector( ( state ) => {
		return state.settings.compareMode;
	} );

	const dispatch = useDispatch();

	return (
		<div className={ styles.footer }>
			<div
				className={ classnames(
					styles.logoOuter,
					compareMode ? styles.isCompareMode : null
				) }
			>
				<div className={ styles.logoInner }>
					<div className={ styles.logo }>
						<button
							className={ classnames(
								'no-hover',
								styles.syncButton
							) }
							onClick={ () => {
								dispatch(
									settingsChange( 'compareMode', true )
								);
								dispatch( openSidebar() );
							} }
						>
							<SyncBible />
						</button>
					</div>
					<div className={ styles.logoFlipped }>
						<button
							className={ classnames(
								'no-hover',
								styles.syncButton
							) }
							onClick={ () => {
								dispatch(
									settingsChange( 'compareMode', false )
								);
							} }
						>
							<SyncBible />
						</button>
					</div>
				</div>
			</div>
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
