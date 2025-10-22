const data = ( state = {}, action ) => {
	switch ( action.type ) {
		case 'REQUEST_DATA': {
			// Only create new state if the key doesn't exist or isn't already empty
			if (
				state[ action.key ] &&
				Object.keys( state[ action.key ] ).length === 0
			) {
				return state;
			}
			return {
				...state,
				[ action.key ]: {},
			};
		}

		case 'RECEIVE_DATA': {
			// Only update if data actually changed
			if ( state[ action.key ] === action.data ) {
				return state;
			}
			javascripture.data[ action.key ] = action.data; //for search
			return {
				...state,
				[ action.key ]: action.data,
			};
		}

		case 'UPDATE_DATA': {
			const lemma = action.lemma || '';
			// Use nested object spread to avoid mutating and copying entire state
			return {
				...state,
				[ action.version ]: {
					...state[ action.version ],
					[ action.word ]: {
						...state[ action.version ][ action.word ],
						[ lemma ]: {
							...state[ action.version ][ action.word ][ lemma ],
							[ action.morph ]: action.translation,
						},
					},
				},
			};
		}

		default:
			return state;
	}
};

export default data;
