// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import CopySvg from '../svg/copy';
import styles from './styles.module.scss';
import copyToClipboardHelper from '../../lib/copy-to-clipboard-helper';

/** Component for copying text to clipboard with optional custom handler */
export default function CopyToClipboard( {
	fill,
	textToCopy,
	customClickHandler,
	version,
} ) {
	const handleClick = ( event ) => {
		event.stopPropagation();
		if ( customClickHandler ) {
			customClickHandler( version );
		} else {
			copyToClipboardHelper( textToCopy );
		}
		event.target.focus();
	};

	return (
		<a
			className={ styles.copyToClipboard }
			onClick={ handleClick }
		>
			<CopySvg fill={ fill } />
		</a>
	);
}

CopyToClipboard.propTypes = {
	fill: PropTypes.string,
	textToCopy: PropTypes.oneOfType( [ PropTypes.string, PropTypes.object ] ),
	customClickHandler: PropTypes.func,
	version: PropTypes.string,
};
