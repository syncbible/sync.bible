import { trays as traysList } from '../components/trays';
import { MOBILE_BREAKPOINT } from '../constants/dimensions';

const trays = ( state = [], action ) => {
	const parsedFilter = parseInt( action.filter );
	const isMobile =
		typeof window !== 'undefined' &&
		window.innerWidth < MOBILE_BREAKPOINT;

	switch ( action.type ) {
		case 'SET_TRAY_VISIBILITY_FILTER':
			// Legacy support: replace all trays with just this one
			let trayId = action.filter;
			if (
				typeof parsedFilter === 'number' &&
				traysList[ parsedFilter - 1 ]
			) {
				trayId = traysList[ parsedFilter - 1 ].id;
			}
			return [ trayId ];

		case 'TOGGLE_TRAY':
			// Toggle a tray on/off in the array
			const trayToToggle = action.trayId;
			if ( state.includes( trayToToggle ) ) {
				// Remove it - allow closing all trays
				return state.filter( ( id ) => id !== trayToToggle );
			} else {
				// Add it
				return [ ...state, trayToToggle ];
			}

		case 'ADD_TRAY':
			// On mobile, only show one tray at a time
			if ( isMobile ) {
				// Replace all trays with just this one
				return [ action.trayId ];
			}
			// On desktop, add the tray if not already open
			if ( ! state.includes( action.trayId ) ) {
				return [ ...state, action.trayId ];
			}
			return state;

		case 'REMOVE_TRAY':
			// Remove a tray - allow closing all trays
			return state.filter( ( id ) => id !== action.trayId );

		default:
			return state;
	}
};

export default trays;
