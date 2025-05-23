// External dependencies
import { useSelector } from 'react-redux';

// Internal dependencies
import styles from './styles.module.scss';
import SortGroupResults from '../sort-group-results/index';
import SyncBible from '../svg/syncbible';

export default function CombinedAll() {
	const { compareMode } = useSelector( ( state ) => {
		return {
			compareMode: state.settings.compareMode,
		};
	} );

	if ( compareMode ) {
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

	return (
		<div className={ styles.combinedAll }>
			<p>
				To use compare mode, use the <SyncBible /> icon. This will load
				a combination of all the references in the other panels.
			</p>
		</div>
	);
}
