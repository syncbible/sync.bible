// External dependencies
import PropTypes from 'prop-types';

// Internal dependencies.
import styles from './styles.module.scss';
import SortGroupResults from '../sort-group-results';

/** Component for displaying word statistics and grouping options */
export default function WordStats( { strongsNumber, version } ) {
	return (
		<div className={ styles.wordStats }>
			<h2>Stats for { version }</h2>
			<SortGroupResults
				type="word"
				version={ version }
				strongsNumber={ strongsNumber }
				initialGroup="book"
				initialSort="reference"
				supportsWord={ true }
			/>
		</div>
	);
}

WordStats.propTypes = {
	strongsNumber: PropTypes.string.isRequired,
	version: PropTypes.string.isRequired,
};
