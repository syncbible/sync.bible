const initialState = {
	fontSize: '100%',
	fontFamily:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", Arial, Helvetica, sans-serif;',
	highlightWordsWith: 'same',
	referencePicker: 'select',
	inSync: true,
	expandedSearchResults: false,
	highlightSearchResults: false,
	interfaceLanguage: null,
	type: 'SETTINGS_CHANGE',
	darkMode: null,
	targetColumn: 0,
	sidebarWidth: null,
	versions: [
		'KJV',
		'ESV',
		'original',
		'accented',
		'ASV',
		'RLT',
		'WEB',
		'DARBY',
		'NMV_strongs',
		'GerSch',
		'MCSB',
		'RusSynodalLIO',
		'ChiUns',
		'ChiUn',
		'spaRV1909eb',
		'engNET2016eb',
	],
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case 'SETTINGS_CHANGE':
			return Object.assign( {}, state, action );

		case 'TOGGLE_VERSION':
			if ( state.versions.indexOf( action.version ) === -1 ) {
				return {
					...state,
					versions: [
						...new Set( [ ...state.versions, action.version ] ),
					],
				};
			} else {
				return {
					...state,
					versions: [
						...state.versions.filter(
							( version ) => version !== action.version
						),
					],
				};
			}

		case 'ADD_VERSION':
			return {
				...state,
				versions: [
					...new Set( [ ...state.versions, action.version ] ),
				],
			};

		case 'TOGGLE_TRAY':
		case 'ADD_TRAY':
		case 'REMOVE_TRAY':
			return { ...state, sidebarWidth: null };

		default:
			return state;
	}
};
