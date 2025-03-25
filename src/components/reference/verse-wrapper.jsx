// External
import { useRef } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Internal
import CopyToClipboard from '../copy-to-clipboard';
import Verse from './verse';
import VerseNumber from './verse-number';
import styles from './styles.module.scss';
import bible from '../../data/bible.js';

const getClassName = ( book, version ) => {
	if (
		( version === 'original' || version === 'accented' ) &&
		bible.Data.otBooks.indexOf( book ) > -1
	) {
		return classnames( styles.verse, styles.hebrew );
	}

	if ( version === 'OPV' || version === 'TPV' || version === 'NMV' ) {
		return classnames( styles.verse, styles.farsi );
	}

	return styles.verse;
};

/** Component for wrapping verses with numbers and copy functionality */
export default function VerseWrapper( {
	book,
	version,
	chapter,
	verse,
	isCurrentRef,
	lang,
} ) {
	const verseWrapperRef = useRef( null );
	const reference = { book, chapter: chapter - 1, verse: verse - 1 };

	return (
		<div
			lang={ lang }
			className={ classnames(
				styles.verseWrapper,
				isCurrentRef ? styles.isCurrent : null
			) }
			dir={ bible.isRtlVersion( version, book ) ? 'rtl' : 'ltr' }
			ref={ verseWrapperRef }
		>
			{ chapter && verse && (
				<div className={ styles.helpers }>
					<VerseNumber
						book={ book }
						chapter={ chapter }
						verse={ verse }
						isCurrentRef={ isCurrentRef }
					/>
					<span className={ styles.hidden }>
						<CopyToClipboard
							fill={ '#999' }
							textToCopy={ verseWrapperRef }
						/>
					</span>
				</div>
			) }
			<div className={ getClassName( book, version ) }>
				<Verse reference={ reference } version={ version } />
			</div>
		</div>
	);
}

VerseWrapper.propTypes = {
	book: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	chapter: PropTypes.number.isRequired,
	verse: PropTypes.number.isRequired,
	isCurrentRef: PropTypes.bool,
	lang: PropTypes.string,
};
