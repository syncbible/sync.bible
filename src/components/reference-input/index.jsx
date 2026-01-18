// External
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import {
	goToReferenceAction,
	openReferenceSelectorMobile,
} from '../../actions';
import bible from '../../data/bible.js';

// Internal
import styles from './styles.module.scss';

const getBookFromState = ( reference, scrollChapter ) => {
	if ( scrollChapter && scrollChapter.book ) {
		return scrollChapter.book;
	} else {
		if ( reference ) {
			return reference.book;
		}
	}
};
const getReferenceValue = ( reference, scrollChapter, version ) => {
	const chapter =
		scrollChapter && scrollChapter?.chapter ? scrollChapter.chapter : '';
	const book = getBookFromState( reference, scrollChapter );

	// Return empty string if book or version is not valid
	if ( ! book || ! version ) {
		return ' ';
	}

	const tranlatedBook = bible.getTranslatedBookName( book, version );
	if ( ! tranlatedBook || tranlatedBook === 'problemo' ) {
		return ' ';
	}
	return tranlatedBook + ' ' + chapter;
};

const ReferenceInput = ( { index } ) => {
	const dispatch = useDispatch();
	const reference = useSelector( ( state ) => state.reference );
	const scrollChapter = useSelector( ( state ) => {
		if ( state.scrollChapter ) {
			return state.scrollChapter[ index ];
		}
	} );
	const version = reference[ index ]?.version ?? 'KJV';
	const referenceValue = getReferenceValue(
		reference[ index ],
		scrollChapter,
		version
	);
	const [ localReference, setLocalReference ] = useState( referenceValue );
	const referenceInputField = useRef();

	const change = ( event ) => {
		setLocalReference( event.target.value );
	};

	const getLocalReferenceObject = () => {
		const newLocalReference = bible.parseReference( localReference );
		newLocalReference.book =
			bible.Data.books[ newLocalReference.bookID - 1 ][ 0 ];
		return newLocalReference;
	};

	const goToReference = ( event ) => {
		event.preventDefault();
		dispatch( goToReferenceAction( getLocalReferenceObject(), index ) );
		referenceInputField.current.blur();
	};

	useEffect( () => {
		setLocalReference( referenceValue );
	}, [ setLocalReference, referenceValue ] );

	const focus = () => {
		dispatch( openReferenceSelectorMobile( index ) );
	};

	return (
		<div className={ styles.versionSelectorFlexible }>
			<form
				onSubmit={ goToReference }
				className={ styles.versionSelectorInput }
			>
				<input
					type="text"
					id="goToReference"
					name="reference"
					placeholder="Type a reference"
					className={ styles.input }
					value={ localReference }
					onChange={ change }
					ref={ referenceInputField }
					onFocus={ focus }
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
				/>
			</form>
		</div>
	);
};

ReferenceInput.propTypes = {
	index: PropTypes.number.isRequired,
};

export default React.memo( ReferenceInput );
