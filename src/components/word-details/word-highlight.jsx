// External dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Internal dependecies
import { getHighlight } from '../strongs-color.js';

const WordHighlight = ( { lemma } ) => {
	const strongsDictionaryWithFamilies = useSelector(
		( state ) => state.data.strongsDictionaryWithFamilies
	);
	const focusWord = useSelector( ( state ) => state.focusWord );
	if ( focusWord === lemma || focusWord === null ) {
		return (
			<style>
				{ getHighlight( lemma, strongsDictionaryWithFamilies ) }
			</style>
		);
	}
	return null;
};

export default WordHighlight;
