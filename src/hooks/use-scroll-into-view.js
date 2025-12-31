import { useEffect } from 'react';

/**
 * Scrolls an element into view when it becomes visible
 * @param {Object} ref - React ref to the element to scroll
 * @param {boolean} isVisible - Whether the element is visible
 */
export const useScrollIntoView = ( ref, isVisible ) => {
	useEffect( () => {
		if ( isVisible && ref.current ) {
			ref.current.scrollIntoView( {
				behavior: 'smooth',
				block: 'start',
			} );
		}
	}, [ isVisible, ref ] );
};
