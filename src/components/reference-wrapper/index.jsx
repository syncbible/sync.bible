// External
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classnames from 'classnames';

// Internal
import ReferenceComponent from '../reference';
import styles from './style.module.scss';
import { DOCK_HEIGHT } from '../../constants/dimensions';
import { useTrayDimensions } from '../../hooks/useTrayDimensions';

const ReferenceWrapper = () => {
	const { reference, inSync, searchSelect } = useSelector(
		( state ) => ({
			reference: state.reference,
			inSync: state.settings.inSync,
			searchSelect: state.searchSelect,
		}),
		shallowEqual
	);
	const { isMobile, customWidth, activeTraysCount } = useTrayDimensions();

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
		searchSelect ? 'search-select' : null
	);

	// On mobile, sidebar overlays, so no margin adjustment needed
	const dynamicMargin = isMobile
		? DOCK_HEIGHT
		: activeTraysCount > 0
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
