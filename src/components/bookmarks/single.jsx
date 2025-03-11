// External dependencies
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Internal dependencies
import { removeFromList, toggleListItemVisible } from '../../actions';
import Collapsible from '../collapsible';
import ReferenceLink from '../reference-link';
import SearchLink from '../search-link';
import InlineResultsToggle from '../inline-results-toggle';
import bible from '../../data/bible.js';

export default function Single( { bookmark, index } ) {
	const dispatch = useDispatch();
	const data = useSelector( ( state ) => state.data );
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	const bookmarkRef = useRef();
	const userInterface = useSelector( ( state ) => state.userInterface );
	const {
		data: { reference },
	} = bookmark;

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

	return (
		<Collapsible
			key={ index }
			header={ header }
			open={ userInterface[ bookmark.id ] }
			onToggle={ () => handleToggle() }
			textToCopy={ bookmarkRef }
			onRemove={ () => dispatch( removeFromList( bookmark ) ) }
		>
			<div ref={ bookmarkRef }>{ renderCrossReferences() }</div>
		</Collapsible>
	);
}
