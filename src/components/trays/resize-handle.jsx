import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { settingsChange } from '../../actions';
import styles from './styles.module.scss';
import { TRAY_WIDTH } from '../../constants/dimensions';

export default function ResizeHandle() {
	const dispatch = useDispatch();
	const activeTrays = useSelector( ( state ) => state.trays );
	const sidebarWidth = useSelector( ( state ) => state.settings.sidebarWidth );
	const isResizing = useRef( false );
	const startX = useRef( 0 );
	const startWidth = useRef( 0 );
	const rafId = useRef( null );

	// Calculate default width based on number of trays
	const defaultWidth = activeTrays.length * TRAY_WIDTH;
	const currentWidth = sidebarWidth || defaultWidth;

	const handleMouseDown = useCallback( ( e ) => {
		isResizing.current = true;
		startX.current = e.clientX;
		startWidth.current = currentWidth;
		e.preventDefault();
		document.body.style.cursor = 'ew-resize';
	}, [ currentWidth ] );

	const handleMouseMove = useCallback( ( e ) => {
		if ( ! isResizing.current ) return;

		// Cancel any pending animation frame
		if ( rafId.current ) {
			cancelAnimationFrame( rafId.current );
		}

		// Use requestAnimationFrame for smooth updates
		rafId.current = requestAnimationFrame( () => {
			const deltaX = e.clientX - startX.current;
			const newWidth = Math.max( TRAY_WIDTH, startWidth.current + deltaX );

			dispatch( settingsChange( 'sidebarWidth', newWidth ) );
		} );
	}, [ dispatch ] );

	const handleMouseUp = useCallback( () => {
		isResizing.current = false;
		document.body.style.cursor = '';

		// Cancel any pending animation frame
		if ( rafId.current ) {
			cancelAnimationFrame( rafId.current );
			rafId.current = null;
		}
	}, [] );

	useEffect( () => {
		document.addEventListener( 'mousemove', handleMouseMove );
		document.addEventListener( 'mouseup', handleMouseUp );

		return () => {
			document.removeEventListener( 'mousemove', handleMouseMove );
			document.removeEventListener( 'mouseup', handleMouseUp );
			if ( rafId.current ) {
				cancelAnimationFrame( rafId.current );
			}
		};
	}, [ handleMouseMove, handleMouseUp ] );

	return (
		<div
			className={ styles.resizeHandle }
			onMouseDown={ handleMouseDown }
		/>
	);
}
