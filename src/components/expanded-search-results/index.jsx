// External dependencies
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies.
import Verse from '../reference/verse';

/** Component to show expanded search results for a verse */
export default function ExpandedSearchResults( { book, chapter, verse } ) {
	const interfaceLanguage = useSelector( ( state ) => {
		return state.settings.interfaceLanguage;
	} );

	if ( ! book || ! chapter || ! verse ) {
		return null;
	}

	const adjustedReference = {
		book: book,
		chapter: chapter - 1,
		verse: verse - 1,
	};

	return (
		<div className="expanded-search-results-verse">
			<Verse
				reference={ adjustedReference }
				index={ adjustedReference.verse }
				version={ interfaceLanguage }
			/>
		</div>
	);
}

ExpandedSearchResults.propTypes = {
	book: PropTypes.string,
	chapter: PropTypes.number,
	verse: PropTypes.number,
};
