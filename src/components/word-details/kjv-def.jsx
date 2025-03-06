// External dependencies
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal dependencies
import { addSearch, setTrayVisibilityFilter } from '../../actions';
import styles from './styles.module.scss';

/** Component for displaying and searching KJV word definitions */
export default function KJVDef( { word, strongsNumber } ) {
	const dispatch = useDispatch();
	const searchWord = () => {
		const searchParameters = {
			clusivity: 'exclusive',
			version: 'KJV',
			lemma: strongsNumber,
			range: 'word',
			word: word,
			strict: false,
			morph: '',
		};

		dispatch( addSearch( searchParameters, 'search' ) );
		dispatch( setTrayVisibilityFilter( 'search' ) );
	};

	return (
		<span className={ styles.fakeLink } onClick={ searchWord }>
			{ word }
		</span>
	);
}

KJVDef.propTypes = {
	word: PropTypes.string.isRequired,
	strongsNumber: PropTypes.string.isRequired,
};
