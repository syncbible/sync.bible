const focusWord = ( state = [], action ) => {
	switch ( action.type ) {
		case 'FOCUS_WORD':
			return action.lemma;

		default:
			return state;
	}
};

export default focusWord;
