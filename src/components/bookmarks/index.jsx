// External dependencies
import { useSelector } from 'react-redux';

// Internal dependencies
import Bookmark from '../svg/bookmark';
import CombinedResults from '../word-details/combined';
import SharedWords from '../shared-words';
import Single from './single';
import styles from './styles.module.scss';

export default function BookMarks() {
	const list = useSelector( ( state ) => state.list );

	const bookmarks = list.filter(
		( { listType } ) => listType === 'bookmark'
	);

	return (
		<>
			{ bookmarks.length === 0 && (
				<p className={ styles.description }>
					Click the <Bookmark /> to bookmark a verse.
				</p>
			) }
			<div className={ styles.bookmarksContainer }>
				{ bookmarks.map( ( bookmark, key ) => (
					<Single bookmark={ bookmark } key={ key } index={ key } />
				) ) }
			</div>
			<CombinedResults type="bookmark" />
			<SharedWords type="bookmark" />
		</>
	);
}
