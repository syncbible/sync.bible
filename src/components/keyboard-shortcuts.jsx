// External
import React, { useEffect } from 'react';
import mousetrap from 'mousetrap';
import { useDispatch, useSelector } from 'react-redux';

// Internal
import {
	setTrayVisibilityFilter,
	setCurrentListResult,
	goToReferenceAction,
	deactivateSearchSelect,
	goToChapterAction,
} from '../actions';
import { getReferenceFromSearchResult } from '../lib/reference.js';

// Component variables
let lastTimeStamp = 0,
	waiter,
	firstPartOfChapter,
	chapterToGoTo;

const KeyboardShortcuts = () => {
	/* Taking this out for performance reasons.
		const currentListItemFromState = useSelector( ( state ) =>
		state.list.filter( ( { current } ) => typeof current !== 'undefined' )
	);
	const currentListItem = currentListItemFromState.shift();*/

	const dispatch = useDispatch();
	const targetColumn = useSelector( ( state ) => state.settings.targetColumn );
	const referenceCount = useSelector( ( state ) => state.reference?.length || 0 );

	const goToChapter = ( event, combo ) => {
		const currentTimeStamp = Math.floor( event.timeStamp );

		chapterToGoTo = combo;
		if ( currentTimeStamp - lastTimeStamp < 350 ) {
			chapterToGoTo = firstPartOfChapter + chapterToGoTo;
		}

		clearTimeout( waiter );
		waiter = setTimeout( () => {
			dispatch( goToChapterAction( chapterToGoTo ) );
		}, 350 );

		lastTimeStamp = currentTimeStamp;
		firstPartOfChapter = chapterToGoTo;
	};

	const openTray = ( event, combo ) => {
		event.preventDefault();
		const tray = combo.split( '+' )[ 1 ];
		dispatch( setTrayVisibilityFilter( tray ) );
	};

	const focusReferenceInput = ( event ) => {
		event.preventDefault();
		const allInputs = document.querySelectorAll( 'input[name="reference"]' );

		// If shift is pressed, use column 1 (second column), otherwise use targetColumn
		const columnToFocus = event.shiftKey ? 1 : targetColumn;
		const targetInput = allInputs[ columnToFocus ];

		if ( targetInput ) {
			targetInput.focus();
			targetInput.selectionStart = targetInput.selectionEnd = 0;
			// Set the value to the pressed key
			targetInput.value = event.key;
			// Trigger input event to update React state
			const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
				window.HTMLInputElement.prototype,
				'value'
			).set;
			nativeInputValueSetter.call( targetInput, event.key );
			const inputEvent = new Event( 'input', { bubbles: true } );
			targetInput.dispatchEvent( inputEvent );
		}
	};

	useEffect( () => {
		mousetrap.bind( [ '=' ], () => {
			if (
				currentListItem &&
				currentListItem.current < currentListItem.results.length - 1
			) {
				dispatch(
					goToReferenceAction(
						getReferenceFromSearchResult(
							currentListItem.results[
								currentListItem.current + 1
							]
						)
					)
				);
				dispatch(
					setCurrentListResult(
						currentListItem.id,
						currentListItem.current + 1
					)
				);
			}
		} );
		mousetrap.bind( [ '-' ], () => {
			if ( currentListItem && currentListItem.current > 0 ) {
				dispatch(
					goToReferenceAction(
						getReferenceFromSearchResult(
							currentListItem.results[
								currentListItem.current - 1
							]
						)
					)
				);
				dispatch(
					setCurrentListResult(
						currentListItem.id,
						currentListItem.current - 1
					)
				);
			}
		} );
		mousetrap.bind(
			[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ],
			( event, combo ) => goToChapter( event, combo )
		);
		mousetrap.bind(
			[
				'alt+1',
				'alt+2',
				'alt+3',
				'alt+4',
				'alt+5',
				'alt+6',
				'alt+7',
				'alt+8',
				'alt+9',
			],
			( event, combo ) => openTray( event, combo )
		);
		mousetrap.bind(
			[
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
				'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
				's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			],
			focusReferenceInput
		);
		mousetrap.bind(
			[
				'shift+a', 'shift+b', 'shift+c', 'shift+d', 'shift+e', 'shift+f',
				'shift+g', 'shift+h', 'shift+i', 'shift+j', 'shift+k', 'shift+l',
				'shift+m', 'shift+n', 'shift+o', 'shift+p', 'shift+q', 'shift+r',
				'shift+s', 'shift+t', 'shift+u', 'shift+v', 'shift+w', 'shift+x',
				'shift+y', 'shift+z',
			],
			( event ) => {
				event.preventDefault();
				const allInputs = document.querySelectorAll( 'input[name="reference"]' );
				// Use the rightmost column (last index)
				const rightmostColumn = Math.max( 0, referenceCount - 1 );
				const targetInput = allInputs[ rightmostColumn ];

				if ( targetInput ) {
					targetInput.focus();
					targetInput.selectionStart = targetInput.selectionEnd = 0;
					// Get the actual key pressed (lowercase version)
					const key = event.key.toLowerCase();
					targetInput.value = key;
					// Trigger input event to update React state
					const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
						window.HTMLInputElement.prototype,
						'value'
					).set;
					nativeInputValueSetter.call( targetInput, key );
					const inputEvent = new Event( 'input', { bubbles: true } );
					targetInput.dispatchEvent( inputEvent );
				}
			}
		);
		mousetrap.bind( [ 'esc' ], () => dispatch( deactivateSearchSelect() ) );
	} );

	return null;
};

export default React.memo( KeyboardShortcuts );
