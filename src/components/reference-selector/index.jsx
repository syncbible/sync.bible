// External
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Internal
import BookControl from './book-control';
import bible from '../../data/bible.js';

const ReferenceSelector = ( { onGoToReference, onChangeDisplayState } ) => {
	const [ active, setActive ] = useState( -1 );

	return bible.Data.books.map( ( bookArray, index ) => {
		const chapters = parseInt( bible.Data.verses[ index ].length );
		const isActive = active === index;
		return (
			<BookControl
				key={ index }
				index={ index }
				name={ bookArray[ 0 ] }
				chapters={ chapters }
				onSetActiveBook={ ( book ) => {
					setActive( book );
				} }
				onGoToReference={ onGoToReference ? () => onGoToReference() : undefined }
				onChangeDisplayState={ onChangeDisplayState ? () => onChangeDisplayState() : undefined }
				active={ isActive }
			/>
		);
	} );
};

ReferenceSelector.propTypes = {
	onGoToReference: PropTypes.func,
	onChangeDisplayState: PropTypes.func,
};

export default React.memo( ReferenceSelector );
