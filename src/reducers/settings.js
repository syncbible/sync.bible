const ROUTER_ON_LOCATION_CHANGED = '@@router/ON_LOCATION_CHANGED';

const initialState = {
	fontSize: '100%',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", Arial, Helvetica, sans-serif;',
	highlightWordsWith: 'same',
	referencePicker: 'select',
	inSync: true,
	expandedSearchResults: false,
	highlightSearchResults: false,
	interfaceLanguage: 'KJV', // TODO, we shouldn't need this, for some reason it gets reset when you reload the page
	type: 'SETTINGS_CHANGE',
	darkMode: null,
	compareMode: false,
	targetColumn: 0,
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'SETTINGS_CHANGE':
			return Object.assign( {}, state, action );

		case ROUTER_ON_LOCATION_CHANGED:
			return { ...state, compareMode: false };

		default:
			return state;
	}
};
