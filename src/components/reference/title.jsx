// External
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Internal
import { setTrayVisibilityFilter, setReferenceInfo } from '../../actions';
import CopyToClipboard from '../copy-to-clipboard';
import styles from './styles.module.scss';
import bible from '../../data/bible.js';

/** Title component for displaying book and chapter with copy functionality */
export default function Title( {
	book,
	chapter,
	version,
	customClickHandler,
} ) {
	const dispatch = useDispatch();

	const tranlatedBook = bible.getTranslatedBookName( book, version );
	const showChapterDetails = () => {
		dispatch( setTrayVisibilityFilter( 'stats' ) );
		dispatch( setReferenceInfo( { book, chapter } ) );
	};

	const titleText = chapter && `${ tranlatedBook } ${ chapter }`;

	// There is a zero width character at the end of the title
	// This is so that when you copy the chapter the title doesn't get put on the same line as the first verse
	return (
		<h1 className={ styles.heading } onClick={ showChapterDetails }>
			{ titleText }
			<span className={ styles.copyHidden }>
				<CopyToClipboard
					fill={ '#999' }
					customClickHandler={ customClickHandler }
					version={ version }
				/>
			</span>
		</h1>
	);
}

Title.propTypes = {
	book: PropTypes.string.isRequired,
	chapter: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
	version: PropTypes.string.isRequired,
	customClickHandler: PropTypes.func,
};
