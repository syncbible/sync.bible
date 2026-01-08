// External
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import { goToReferenceHelper } from '../../lib/reference.js';
import ReferenceText from '../reference-text';
import { goToReferenceAction } from '../../actions/index.js';
import BookSvg from '../svg/book';

//The right way to do a link
const ReferenceLink = ( { reference, number, isIcon } ) => {
	const dispatch = useDispatch();
	const inSync = useSelector( ( state ) => state.settings.inSync );
	const targetColumn = useSelector(
		( state ) => state.settings.targetColumn
	);
	const stateReference = useSelector( ( state ) => state.reference );
	const newHash =
		'/#' +
		goToReferenceHelper( stateReference, reference, targetColumn, inSync );
	return (
		<a
			href={ newHash }
			onClick={ ( event ) => {
				event.stopPropagation();
				event.preventDefault();
				dispatch( goToReferenceAction( reference ) );
			} }
		>
			{ typeof number !== 'undefined' && parseInt( number ) + 1 + '.' }{ ' ' }
			{ isIcon ? <BookSvg /> : <ReferenceText reference={ reference } /> }
		</a>
	);
};

ReferenceLink.propTypes = {
	reference: PropTypes.shape( {
		book: PropTypes.string.isRequired,
		chapter: PropTypes.number,
		verse: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	} ).isRequired,
	number: PropTypes.number,
	isIcon: PropTypes.bool,
};

export default React.memo( ReferenceLink );
