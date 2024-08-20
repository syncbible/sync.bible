const ROUTER_ON_LOCATION_CHANGED = '@@router/ON_LOCATION_CHANGED';

const sidebar = ( state = false, action ) => {
	switch ( action.type ) {
		case 'SET_TRAY_VISIBILITY_FILTER':
		case 'OPEN_SIDEBAR':
			return true;

		case 'CLOSE_SIDEBAR':
			return false;

		case 'TOGGLE_SIDEBAR':
			return ! state;

		case ROUTER_ON_LOCATION_CHANGED:
			if ( window.innerWidth < 960 ) {
				return false;
			}
			break;

		default:
			return state;
	}
};

export default sidebar;
