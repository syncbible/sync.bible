import { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT } from '../constants/dimensions';

/**
 * Custom hook to detect if the viewport is mobile-sized
 * Uses a resize listener instead of checking on every interaction
 * @returns {boolean} Whether the viewport is mobile-sized
 */
export const useIsMobile = () => {
	const [ isMobile, setIsMobile ] = useState(
		typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
	);

	useEffect( () => {
		const handleResize = () => {
			setIsMobile( window.innerWidth < MOBILE_BREAKPOINT );
		};

		window.addEventListener( 'resize', handleResize );

		return () => {
			window.removeEventListener( 'resize', handleResize );
		};
	}, [] );

	return isMobile;
};
