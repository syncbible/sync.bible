// External
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classnames from 'classnames';

// Internal
import ReferenceComponent from '../reference';
import styles from './style.module.scss';

const ReferenceWrapper = () => {
	const { reference, inSync, searchSelect, sidebarOpen, activeTrays, sidebarWidth } = useSelector(
		( state ) => ({
			reference: state.reference,
			inSync: state.settings.inSync,
			searchSelect: state.searchSelect,
			sidebarOpen: state.sidebar,
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
		sidebarOpen ? styles.referenceWrapperSidebarOpen : null,
		searchSelect ? 'search-select' : null
	);

	// Calculate dynamic margin based on sidebar width
	const dockHeight = 60;
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
	const defaultWidth = activeTrays.length * 320;
	const customWidth = sidebarWidth || defaultWidth;

	// On mobile, sidebar overlays, so no margin adjustment needed
	const dynamicMargin = isMobile
		? dockHeight
		: sidebarOpen && activeTrays.length > 0
			? customWidth + dockHeight
			: dockHeight;

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
