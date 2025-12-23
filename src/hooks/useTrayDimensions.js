import { useSelector } from 'react-redux';
import { TRAY_WIDTH, MOBILE_BREAKPOINT } from '../constants/dimensions';

/**
 * Custom hook to calculate tray dimensions
 * @returns {Object} Dimensions and mobile detection
 */
export const useTrayDimensions = () => {
	const activeTrays = useSelector( ( state ) => state.trays );
	const sidebarWidth = useSelector( ( state ) => state.settings.sidebarWidth );

	const isMobile = typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT;
	const defaultWidth = activeTrays.length * TRAY_WIDTH;
	const customWidth = sidebarWidth || defaultWidth;

	return {
		activeTrays,
		isMobile,
		defaultWidth,
		customWidth,
		activeTraysCount: activeTrays.length,
	};
};
