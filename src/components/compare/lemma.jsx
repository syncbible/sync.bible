// External dependencies
import { useDispatch, useSelector } from 'react-redux';

// Internal dependencies
import { selectWord } from '../../actions';
import stripPointing from '../../lib/strip-pointing.js';

export default function Lemma( { lemma } ) {
	const dispatch = useDispatch();
	const strongsDictionary = useSelector(
		( state ) => state.data.strongsDictionary
	);

	return (
		<div
			key={ lemma }
			className={ lemma }
			onMouseEnter={ () => {
				window.updateAppComponent( 'highlightedWord', lemma );
			} }
			onClick={ () => {
				dispatch( selectWord( { lemma, version: 'original' } ) );
			} }
		>
			{ lemma } { ' - ' }
			{ strongsDictionary &&
				stripPointing( strongsDictionary[ lemma ].lemma ) }
			{ ' - ' }
			{ strongsDictionary && strongsDictionary[ lemma ].xlit }
		</div>
	);
}
