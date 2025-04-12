// External dependencies
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import { changeVersion } from '../../actions';
import ReferenceSelectorMobile from '../reference-selector-mobile';
import ReferenceInput from '../reference-input';
import VersionSelect from '../version-select';
import bible from '../../data/bible.js';
import styles from './styles.module.scss';

/** Navigation component with reference selection and version controls */
export default function Navigation( { index, version } ) {
	const dispatch = useDispatch();
	const handleChangeVersion = useCallback(
		( event ) => {
			dispatch( changeVersion( event.target.name, event.target.value ) );
			//event.target.blur();
		},
		[ dispatch ]
	);
	const isRTL = bible.isRtlVersion( version );

	return (
		<div className={ styles.navigation } dir={ isRTL ? 'rtl' : 'ltr' }>
			<ReferenceSelectorMobile index={ index } version={ version } />
			<ReferenceInput version={ version } index={ index } />
			<VersionSelect
				name={ index.toString() }
				value={ version }
				onChange={ handleChangeVersion }
			/>
		</div>
	);
}

Navigation.propTypes = {
	index: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] )
		.isRequired,
	version: PropTypes.string.isRequired,
};
