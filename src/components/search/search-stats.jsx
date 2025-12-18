// External dependencies
import PropTypes from 'prop-types';

// Internal dependencies.
import styles from './styles.module.scss';
import SortGroupResults from '../sort-group-results';

/** Component for displaying search result statistics */
export default function SearchStats( { results, data } ) {
	if ( ! results ) {
		return <p>Stats will appear when you have searched for the word.</p>;
	}

	return (
		<div className={ styles.wordStats }>
			<h2>Stats for { data.version }</h2>
			<SortGroupResults
				results={ results }
				initialGroup="book"
				initialSort="reference"
				supportsWord={ false }
				supportsStrongs={ true }
			/>
		</div>
	);
}

SearchStats.propTypes = {
	results: PropTypes.array,
	data: PropTypes.shape( {
		version: PropTypes.string.isRequired,
	} ).isRequired,
};
