// External dependencies
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Internal dependencies
import Collapsible from '../collapsible';
import SearchBlock from './search-block';
import SearchStats from './search-stats';
import Search from '../svg/search';
import Stats from '../svg/stats';
import styles from './styles.module.scss';
import { removeFromList, toggleListItemVisible } from '../../actions';
import { useScrollIntoView } from '../../hooks/use-scroll-into-view';

// Single search result item component
const SearchResultItem = ( { searchTerm, index, activeTabs, setActiveTabs } ) => {
	const dispatch = useDispatch();
	const userInterface = useSelector( ( state ) => state.userInterface );
	const textToCopy = useRef( null );
	const collapsibleRef = useRef( null );
	const isVisible = userInterface[ searchTerm.id ];

	// Scroll into view when this search becomes visible (newly added)
	useScrollIntoView( collapsibleRef, isVisible );

	const termTitle = ( {
		clusivity,
		version,
		lemma,
		morph,
		range,
		strict,
		word,
	} ) => {
		return (
			'word: ' +
			word +
			'\nstrongs number: ' +
			lemma +
			'\nmorphology: ' +
			morph +
			'\nversion: ' +
			version +
			'\nclusivity: ' +
			clusivity +
			'\nrange: ' +
			range +
			'\nstrict: ' +
			strict
		);
	};

	const header =
		searchTerm.data.word +
		' ' +
		searchTerm.data.lemma +
		' ' +
		searchTerm.data.morph;

	const activeTab = activeTabs[ searchTerm.id ] || 'search';
	const setActiveTab = ( tab ) => {
		setActiveTabs( ( prev ) => ( {
			...prev,
			[ searchTerm.id ]: tab,
		} ) );
	};

	const getActiveTab = () => {
		if ( activeTab === 'search' ) {
			return (
				<div ref={ textToCopy }>
					<SearchBlock { ...searchTerm } />
				</div>
			);
		}

		if ( activeTab === 'stats' ) {
			return <SearchStats { ...searchTerm } />;
		}
	};

	return (
		<Collapsible
			ref={ collapsibleRef }
			title={ termTitle( searchTerm.data ) }
			key={ index }
			header={ header }
			open={ userInterface[ searchTerm.id ] }
			textToCopy={ textToCopy }
			onToggle={ () =>
				dispatch( toggleListItemVisible( searchTerm ) )
			}
			onRemove={ () => dispatch( removeFromList( searchTerm ) ) }
		>
			<div className={ styles.tabs }>
				<a
					className={
						activeTab === 'search' ? styles.active : ''
					}
					onClick={ () => setActiveTab( 'search' ) }
				>
					<Search />
				</a>
				<a
					className={ activeTab === 'stats' ? styles.active : '' }
					onClick={ () => setActiveTab( 'stats' ) }
				>
					<Stats />
				</a>
			</div>

			{ getActiveTab() }
		</Collapsible>
	);
};

const SearchResults = () => {
	const [ activeTabs, setActiveTabs ] = useState( {} );
	const list = useSelector( ( state ) => state.list );
	const searchTerms = list.filter(
		( { listType } ) => listType === 'search'
	);

	return searchTerms.map( ( searchTerm, index ) => (
		<SearchResultItem
			key={ searchTerm.id }
			searchTerm={ searchTerm }
			index={ index }
			activeTabs={ activeTabs }
			setActiveTabs={ setActiveTabs }
		/>
	) );
};

export default React.memo( SearchResults );
