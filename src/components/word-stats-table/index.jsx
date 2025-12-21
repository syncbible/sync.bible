// External dependencies
import { useDispatch, useSelector } from 'react-redux';

// Internal dependencies
import { selectWord } from '../../actions';
import { createSortFunctions, getSortFunction } from './word-stats-utils';
import styles from './styles.module.scss';

export default function WordStatsTable( { common, sort, setSort } ) {
	const dispatch = useDispatch();
	const strongsDictionary = useSelector(
		( state ) => state.data.strongsDictionary
	);
	const strongsObjectWithFamilies = useSelector(
		( state ) => state.data.strongsObjectWithFamilies
	);

	if ( ! common || Object.keys( common ).length === 0 ) {
		return null;
	}

	const sortFunctions = createSortFunctions( common, strongsObjectWithFamilies );
	const sortFunction = getSortFunction( sort, sortFunctions );

	const commonWords = Object.keys( common )
		.sort( sortFunction )
		.map( ( lemma ) => {
			const significance = (
				common[ lemma ] / strongsObjectWithFamilies[ lemma ].count
			).toFixed( 3 );
			return (
				<tr
					key={ lemma }
					className={ lemma }
					onMouseEnter={ () => {
						window.updateAppComponent(
							'highlightedWord',
							lemma
						);
					} }
					onClick={ () =>
						dispatch(
							selectWord( { lemma, version: 'original' } )
						)
					}
				>
					<td>{ lemma }</td>
					<td>
						{ strongsDictionary &&
							strongsDictionary[ lemma ].lemma }
					</td>
					<td>
						{ ( strongsDictionary &&
							strongsDictionary[ lemma ].xlit ) ||
							strongsDictionary[ lemma ].translit }
					</td>
					<td>{ common[ lemma ] }</td>
					<td>{ strongsObjectWithFamilies[ lemma ].count }</td>
					<td>{ significance }</td>
				</tr>
			);
		} );

	return (
		<table>
			<thead>
				<tr>
					<th>Strongs</th>
					<th>Word</th>
					<th>Transliteration</th>
					<th
						className={ styles.sort }
						onClick={ () =>
							sort === 'usesDesc'
								? setSort( 'usesAsc' )
								: setSort( 'usesDesc' )
						}
					>
						Uses in reference
						{ sort === 'usesAsc' ? ' ↓' : '' }
						{ sort === 'usesDesc' ? ' ↑' : '' }
					</th>
					<th
						className={ styles.sort }
						onClick={ () =>
							sort === 'totalDesc'
								? setSort( 'totalAsc' )
								: setSort( 'totalDesc' )
						}
					>
						Total uses
						{ sort === 'totalAsc' ? ' ↓' : '' }
						{ sort === 'totalDesc' ? ' ↑' : '' }
					</th>
					<th
						className={ styles.sort }
						onClick={ () =>
							sort === 'significanceDesc'
								? setSort( 'significanceAsc' )
								: setSort( 'significanceDesc' )
						}
					>
						Significance
						{ sort === 'significanceAsc' ? ' ↓' : '' }
						{ sort === 'significanceDesc' ? ' ↑' : '' }
					</th>
				</tr>
			</thead>
			<tbody>{ commonWords }</tbody>
		</table>
	);
}
