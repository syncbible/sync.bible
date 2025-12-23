// External
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classnames from 'classnames';

// Internal
import ReferenceComponent from '../reference';
import styles from './style.module.scss';
import { TRAY_WIDTH, DOCK_HEIGHT, MOBILE_BREAKPOINT } from '../../constants/dimensions';

const ReferenceWrapper = () => {
	const { reference, inSync, searchSelect, activeTrays, sidebarWidth } = useSelector(
		( state ) => ({
			reference: state.reference,
			inSync: state.settings.inSync,
			searchSelect: state.searchSelect,
			activeTrays: state.trays,
			sidebarWidth: state.settings.sidebarWidth,
		}),
		shallowEqual
	);

	let references;

	if ( reference.length === 0 ) {
		return null;
	}

	if ( inSync ) {
		references = (
			<ReferenceComponent reference={ reference[ 0 ] } index={ 0 } />
		);
	} else {
		references = reference.map( ( singleReference, index ) => {
			return (
				<ReferenceComponent
					reference={ singleReference }
					key={ index }
					index={ index }
				/>
			);
		} );
	}

	const className = classnames(
		styles.referenceWrapper,
		activeTrays.length > 0 ? styles.referenceWrapperSidebarOpen : null,
		searchSelect ? 'search-select' : null
	);

	// Calculate dynamic margin based on sidebar width
	const isMobile = typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT;
	const defaultWidth = activeTrays.length * TRAY_WIDTH;
	const customWidth = sidebarWidth || defaultWidth;

	// On mobile, sidebar overlays, so no margin adjustment needed
	const dynamicMargin = isMobile
		? DOCK_HEIGHT
		: activeTrays.length > 0
			? customWidth + DOCK_HEIGHT
			: DOCK_HEIGHT;

	return (
		<div
			className={ className }
			style={ { marginLeft: `${dynamicMargin}px` } }
		>
			<div className={ styles.referenceWrapperInner }>{ references }</div>
		</div>
	);
};

export default React.memo( ReferenceWrapper );
