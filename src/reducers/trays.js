import { trays as traysList } from '../components/trays';

const trays = ( state = 'goto', action ) => {
	const parsedFilter = parseInt( action.filter );
	switch ( action.type ) {
		case 'SET_TRAY_VISIBILITY_FILTER':
			if (
				typeof parsedFilter === 'number' &&
				traysList[ parsedFilter - 1 ]
			) {
				return traysList[ parsedFilter - 1 ].id;
			}
			return action.filter;

		default:
			return state;
	}
};

export default trays;
