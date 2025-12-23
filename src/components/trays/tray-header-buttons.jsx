// External
import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Internal
import { removeTray, closeAllListItems } from '../../actions';
import Close from '../svg/close';
import Clear from '../clear';
import UnfoldLessDouble from '../svg/unfold-less-double';
import styles from './styles.module.scss';

const TrayHeaderButtons = ( { trayId, trayText, hasListItems, hasOpenItems } ) => {
	const dispatch = useDispatch();

	const closeAllForTray = () => {
		dispatch( closeAllListItems( trayId ) );
	};

	const closeTray = () => {
		dispatch( removeTray( trayId ) );
	};

	return (
		<div className={ styles.trayHeaderRight }>
			{ hasListItems && (
				<>
					{ hasOpenItems && (
						<button
							className={ styles.trayHeaderButton }
							onClick={ closeAllForTray }
							title="Close all"
						>
							<UnfoldLessDouble />
						</button>
					) }
					<Clear selectedTrayId={ trayId } />
				</>
			) }
			<button
				className={ classnames( styles.trayHeaderButton ) }
				onClick={ closeTray }
				title={ `Close ${ trayText }` }
			>
				<Close />
			</button>
		</div>
	);
};

TrayHeaderButtons.propTypes = {
	trayId: PropTypes.string.isRequired,
	trayText: PropTypes.string.isRequired,
	hasListItems: PropTypes.bool.isRequired,
	hasOpenItems: PropTypes.bool.isRequired,
};

export default TrayHeaderButtons;
