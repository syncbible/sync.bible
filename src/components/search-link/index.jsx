// External dependencies
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import { goToReferenceAction } from '../../actions';
import ExpandedSearchResults from '../expanded-search-results';
import styles from './styles.module.scss';
import ReferenceText from '../reference-text';
import {
	getReferenceFromSearchResult,
	getVerseData,
} from '../../lib/reference';

export default function SearchLink( {
	referenceString,
	index,
	count,
	wordId,
	isActive,
	referenceToDisplay,
} ) {
	const dispatch = useDispatch();
	const highlightSearchResults = useSelector(
		( state ) => state.settingshighlightSearchResults
	);
	const interfaceLanguage = useSelector(
		( state ) => state.interfaceLanguage
	);

	const reference = getReferenceFromSearchResult( referenceString );
	if ( ! reference ) {
		return null;
	}

	if ( ! referenceToDisplay ) {
		referenceToDisplay = <ReferenceText reference={ reference } />;
	}

	// Component constants
	const className = classnames(
		styles.searchLink,
		isActive ? styles.activeReference : null
	);
	const highlightWords = () => {
		if ( ! highlightSearchResults ) {
			return;
		}

		const verseData = getVerseData( reference, interfaceLanguage );
		const strongsNumbers = verseData.map( ( word ) => {
			return word?.[ 1 ] || '';
		} );

		window.updateAppComponent(
			'highlightedWord',
			strongsNumbers.join( ' ' )
		);
	};
	const unHighlightWords = () => {
		if ( ! highlightSearchResults ) {
			return;
		}

		window.updateAppComponent( 'highlightedWord', null );
	};

	const chapter = reference.chapter
		? parseInt( reference.chapter, 10 )
		: null;
	const verse = reference.verse ? parseInt( reference.verse, 10 ) : null;

	if ( ! chapter || ! verse ) {
		return null;
	}

	return (
		<li className={ className }>
			<a
				className={ styles.searchLink }
				onClick={ ( event ) => {
					if ( wordId ) {
						//dispatch( setCurrentListResult( wordId, index ) );
					}
					event.stopPropagation();
					event.preventDefault();
					dispatch( goToReferenceAction( reference ) );
				} }
				onMouseOver={ highlightWords }
				onMouseOut={ unHighlightWords }
			>
				{ index + 1 }. { referenceToDisplay }
				{ count && ' (' + count + ')' }
			</a>
			<ExpandedSearchResults
				book={ reference.book }
				chapter={ chapter }
				verse={ verse }
			/>
		</li>
	);
}

SearchLink.propTypes = {
	referenceString: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	count: PropTypes.number,
	wordId: PropTypes.string,
	isActive: PropTypes.bool,
	referenceToDisplay: PropTypes.node,
};
