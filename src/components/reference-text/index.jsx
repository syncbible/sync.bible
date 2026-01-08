// External
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import bible from '../../data/bible.js';

const ReferenceText = ( { reference } ) => {
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	let text = bible.getTranslatedBookName( reference.book, interfaceLanguage );
	if ( reference.chapter ) {
		text += ' ' + reference.chapter;
	}

	if ( reference.verse ) {
		text += ':' + reference.verse;
	}
	return text;
};

ReferenceText.propTypes = {
	reference: PropTypes.shape( {
		book: PropTypes.string.isRequired,
		chapter: PropTypes.number,
		verse: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	} ).isRequired,
};

export default ReferenceText;
