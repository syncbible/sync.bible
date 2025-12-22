const userInterface = ( state = {}, action ) => {
	switch ( action.type ) {
		case 'ADD_TO_LIST':
			const dataForId = Object.assign( {}, action.item.data );
			delete dataForId.clickedWord;
			delete dataForId.morphology;
			const id = JSON.stringify( dataForId );
			// Close only items of the same type
			if ( action.itemIdsToClose ) {
				action.itemIdsToClose.forEach( ( itemId ) => {
					if ( state[ itemId ] !== undefined ) {
						state[ itemId ] = false;
					}
				} );
			}
			state[ id ] = true;
			return { ...state };

		case 'REMOVE_FROM_LIST':
			delete state[ action.item.id ];
			return { ...state };

		case 'TOGGLE_LIST_ITEM_VISIBLE':
			state[ action.item.id ] = ! state[ action.item.id ];
			return { ...state };

		case 'CLOSE_ALL_LIST_ITEMS':
			if ( action.itemIds ) {
				// Close only specific items
				action.itemIds.forEach( ( id ) => {
					if ( state[ id ] !== undefined ) {
						state[ id ] = false;
					}
				} );
			} else {
				// Close all items (backwards compatibility)
				Object.keys( state ).forEach( ( key ) => {
					state[ key ] = false;
				} );
			}
			return { ...state };

		default:
			return state;
	}
};

export default userInterface;
