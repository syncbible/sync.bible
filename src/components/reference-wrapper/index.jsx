// External
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import classnames from 'classnames';

// Internal
import ReferenceComponent from '../reference';
import styles from './style.module.scss';

const ReferenceWrapper = () => {
	const { reference, inSync, searchSelect, sidebarOpen } = useSelector(
		( state ) => ({
			reference: state.reference,
			inSync: state.settings.inSync,
			searchSelect: state.searchSelect,
			sidebarOpen: state.sidebar,
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
	return (
		<div className={ className }>
			<div className={ styles.referenceWrapperInner }>{ references }</div>
		</div>
	);
};

export default React.memo( ReferenceWrapper );
