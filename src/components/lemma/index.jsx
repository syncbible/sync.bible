// External dependencies
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Internal dependencies
import { selectWord } from '../../actions';
import stripPointing from '../../lib/strip-pointing.js';
import styles from './styles.module.scss';

function Lemma( { lemma, version, count } ) {
	const dispatch = useDispatch();
	const strongsDictionary = useSelector(
		( state ) => state.data.strongsDictionary
	);
	const strongsObjectWithFamilies = useSelector(
		( state ) => state.data.strongsObjectWithFamilies
	);

	// Calculate title text with significance if count is provided
	let titleText = strongsDictionary && strongsDictionary[ lemma ].xlit;
	if ( count && strongsObjectWithFamilies?.[ lemma ]?.count ) {
		const totalUses = strongsObjectWithFamilies[ lemma ].count;
		const significance = ( count / totalUses ).toFixed( 3 );
		titleText = `${ titleText }\nUses in references: ${ count }, Total uses: ${ totalUses }, Significance: ${ significance }`;
	}

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
			title={ titleText }
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

Lemma.propTypes = {
	lemma: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
	count: PropTypes.number,
};

export default Lemma;
