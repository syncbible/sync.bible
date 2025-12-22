// External dependencies
import React from 'react';

// Internal dependencies
import styles from './styles.module.scss';
import SortGroupResults from '../sort-group-results/index';

export default function CombinedAll() {
	return (
		<div className={ styles.combinedAll }>
			<p>A combination of all the references in the other panels.</p>
			<div className={ styles.results }>
				<SortGroupResults
					initialGroup="verse"
					initialSort="reference"
					allowPreview={ true }
				/>
			</div>
		</div>
	);
}
