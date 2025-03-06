// External dependencies
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Internal dependencies
import { goToReferenceAction } from '../../actions';

/** Link component for daily Bible readings */
export default function DailyReadingLink( { book, chapter, verses } ) {
	const dispatch = useDispatch();

	let referenceString = book + ' ' + chapter;
	const reference = { book, chapter };

	if ( verses ) {
		const versesArray = verses.split( '-' );
		reference.verse = versesArray[ 0 ];
		// Don't add an end verse as this will limit the verses output.
		// reference.endVerse = versesArray[1];
		referenceString += ':' + verses;
	} else {
		reference.verse = 1;
	}

	return (
		<a
			onClick={ ( event ) => {
				event.stopPropagation();
				event.preventDefault();
				dispatch( goToReferenceAction( reference ) );
			} }
		>
			{ referenceString }
		</a>
	);
}

DailyReadingLink.propTypes = {
	book: PropTypes.string.isRequired,
	chapter: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] )
		.isRequired,
	verses: PropTypes.string,
};
