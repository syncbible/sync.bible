// External
import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

// Internal
import bible from '../../data/bible.js';
import { fetchData } from '../../actions';
import VerseWrapper from './verse-wrapper';
import styles from './styles.module.scss';
import { mapVersionToData } from '../../lib/reference';

function getLanguageFromVersion( version, book ) {
	if ( version === 'original' ) {
		if ( bible.Data.otBooks.indexOf( book ) > -1 ) {
			return 'hbo';
		}

		return 'grc';
	}
	return bible.Data.supportedVersions[ version ]?.language || 'en';
}

const SingleVerseView = ( { book, chapter, startVerse, version } ) => {
	const dispatch = useDispatch();
	const { data, availableVersions } = useSelector(
		( state ) => ( {
			data: state.data,
			availableVersions: state.settings.versions,
		} ),
		shallowEqual
	);

	// Fetch data for all available versions
	const versionsToFetch = useMemo( () => {
		const toFetch = [];
		availableVersions.forEach( ( ver ) => {
			const dataKey = mapVersionToData( book, ver );
			if ( ! data[ dataKey ] ) {
				toFetch.push( dataKey );
			}
			if ( ver === 'LC' && ! data[ 'LC' ] ) {
				toFetch.push( 'LC' );
			}
		} );
		return toFetch;
	}, [ availableVersions, data, book ] );

	useEffect( () => {
		versionsToFetch.forEach( ( dataKey ) => {
			dispatch( fetchData( dataKey ) );
		} );
	}, [ versionsToFetch, dispatch ] );

	const verseNumber = startVerse ? startVerse - 1 : 0;
	const tranlatedBook = bible.getTranslatedBookName( book, version );
	const titleText = `${ tranlatedBook } ${ chapter }:${ verseNumber + 1 }`;

	// Order versions by tongue, matching the version selector dropdown
	const orderedVersions = [];
	Object.keys( bible.Data.tongues ).forEach( ( tongue ) => {
		Object.keys( bible.Data.supportedVersions )
			.filter(
				( ver ) =>
					bible.Data.supportedVersions[ ver ].tongue === tongue &&
					availableVersions.indexOf( ver ) > -1
			)
			.forEach( ( ver ) => orderedVersions.push( ver ) );
	} );

	return (
		<div>
			<h1 className={ styles.heading }>{ titleText }</h1>
			<div className={ styles.singleVerseView }>
				{ orderedVersions.map( ( ver, verIndex ) => {
					const versionData =
						bible.Data.supportedVersions[ ver ];
					if ( ! versionData ) {
						return null;
					}
					const dataKey = mapVersionToData( book, ver );
					if ( ! data[ dataKey ] ) {
						return null;
					}
					const versionName = versionData.name || ver;
					return (
						<div
							key={ ver }
							className={ styles.singleVerseItem }
						>
							<span className={ styles.versionLabel }>
								{ versionName }
							</span>
							<div className={ styles.singleReference }>
								<VerseWrapper
									lang={ getLanguageFromVersion(
										ver,
										book
									) }
									book={ book }
									version={ ver }
									chapter={ chapter }
									verse={ verseNumber + 1 }
									isCurrentRef={ false }
									columnIndex={ verIndex }
								/>
							</div>
						</div>
					);
				} ) }
			</div>
		</div>
	);
};

SingleVerseView.propTypes = {
	book: PropTypes.string.isRequired,
	chapter: PropTypes.number.isRequired,
	startVerse: PropTypes.oneOfType( [ PropTypes.number, PropTypes.string ] ),
	version: PropTypes.string.isRequired,
};

export default SingleVerseView;
