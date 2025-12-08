// External dependencies
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

// Internal dependencies
import { selectWord } from '../../actions';
import stripPointing from '../../lib/strip-pointing.js';
import styles from './styles.module.scss';

export default function Lemma( { lemma, version, count } ) {
	const dispatch = useDispatch();
	const strongsDictionary = useSelector(
		( state ) => state.data.strongsDictionary
	);

	return (
		<a
			className={ classnames( lemma, styles.lemma ) }
			onMouseEnter={ () => {
				window.updateAppComponent( 'highlightedWord', lemma );
			} }
			onMouseLeave={ () => {
				window.updateAppComponent( 'highlightedWord', null );
			} }
			onClick={ () => {
				dispatch( selectWord( { lemma, version } ) );
			} }
			title={ strongsDictionary && strongsDictionary[ lemma ].xlit }
		>
			<span>{ lemma }</span>
			<span>
				{ strongsDictionary &&
					stripPointing( strongsDictionary[ lemma ].lemma ) }
			</span>
			{ count && <span>{ count }</span> }
		</a>
	);
}
