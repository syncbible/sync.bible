// External dependencies
import { useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Internal dependencies
import { removeFromList, toggleListItemVisible } from '../../actions';
import Collapsible from '../collapsible';
import ReferenceLink from '../reference-link';
import SearchLink from '../search-link';
import InlineResultsToggle from '../inline-results-toggle';
import WordStatsTable from '../word-stats-table';
import Shuffle from '../svg/shuffle';
import Stats from '../svg/stats';
import bible from '../../data/bible.js';
import { calculateCommonWords } from '../../lib/reference';
import searchStyles from '../search/styles.module.scss';
import styles from './styles.module.scss';

export default function Single( { bookmark, index } ) {
	const dispatch = useDispatch();
	const data = useSelector( ( state ) => state.data );
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	const bookmarkRef = useRef();
	const userInterface = useSelector( ( state ) => state.userInterface );
	const [ activeTab, setActiveTab ] = useState( 'crossReferences' );
	const [ sort, setSort ] = useState( 'significanceDesc' );
	const {
		data: { reference },
	} = bookmark;

	const common = useMemo(
		() => calculateCommonWords( reference, data ),
		[ reference, data ]
	);

	const handleToggle = () => {
		dispatch( toggleListItemVisible( bookmark ) );
	};

	const header = <ReferenceLink reference={ reference } />;

	const renderCrossReferences = () => {
		if ( ! data.crossReferences ) {
			return 'Loading cross references';
		}
		return (
			<div>
				{ bookmark.results.length > 0
					? 'Cross references:'
					: 'No cross references' }
				<InlineResultsToggle />
				<div
					dir={
						bible.isRtlVersion( interfaceLanguage ) ? 'rtl' : 'ltr'
					}
				>
					<ol>
						{ bookmark.results.map(
							( crossReference, referenceKey ) => {
								const isActive =
									bookmark &&
									typeof bookmark.current !== 'undefined' &&
									bookmark.current === referenceKey;
								return (
									<SearchLink
										key={ referenceKey }
										index={ referenceKey }
										referenceString={
											crossReference.reference
										}
										wordId={ bookmark.id }
										isActive={ isActive }
									/>
								);
							}
						) }
					</ol>
				</div>
			</div>
		);
	};

	const renderStats = () => {
		if ( ! data.original ) {
			return <p>Loading original texts...</p>;
		}

		if ( ! common || Object.keys( common ).length === 0 ) {
			return <p>No words found in this verse.</p>;
		}

		return (
			<div className={ styles.statsWrapper }>
				<WordStatsTable
					common={ common }
					sort={ sort }
					setSort={ setSort }
				/>
			</div>
		);
	};

	const getActiveTab = () => {
		if ( activeTab === 'crossReferences' ) {
			return renderCrossReferences();
		}
		if ( activeTab === 'stats' ) {
			return renderStats();
		}
	};

	const renderTabs = () => {
		return (
			<>
				<div className={ searchStyles.tabs }>
					<a
						className={
							activeTab === 'crossReferences'
								? searchStyles.active
								: ''
						}
						onClick={ () => setActiveTab( 'crossReferences' ) }
					>
						<Shuffle />
					</a>
					<a
						className={
							activeTab === 'stats' ? searchStyles.active : ''
						}
						onClick={ () => setActiveTab( 'stats' ) }
					>
						<Stats />
					</a>
				</div>
				{ getActiveTab() }
			</>
		);
	};

	return (
		<Collapsible
			key={ index }
			header={ header }
			open={ userInterface[ bookmark.id ] }
			onToggle={ () => handleToggle() }
			textToCopy={ bookmarkRef }
			onRemove={ () => dispatch( removeFromList( bookmark ) ) }
		>
			<div ref={ bookmarkRef }>{ renderTabs() }</div>
		</Collapsible>
	);
}
