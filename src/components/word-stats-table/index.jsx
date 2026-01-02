// External dependencies
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

// Internal dependencies
import { selectWord } from '../../actions';
import { createSortFunctions, getSortFunction } from './word-stats-utils';
import stripPointing from '../../lib/strip-pointing.js';
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

	const sortFunctions = createSortFunctions(
		common,
		strongsObjectWithFamilies,
		strongsDictionary
	);
	const sortFunction = getSortFunction( sort, sortFunctions );

	const commonWords = Object.keys( common )
		.sort( sortFunction )
		.map( ( lemma ) => {
			const count = strongsObjectWithFamilies[ lemma ]?.count || 1;
			const significance = ( common[ lemma ] / count ).toFixed( 2 );
			return (
				<>
					<tr
						key={ `${ lemma }-word` }
						className={ classnames( lemma, styles.wordRow ) }
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
						<td colSpan="4">
							{ strongsDictionary &&
								stripPointing(
									strongsDictionary[ lemma ].lemma
								) }
						</td>
					</tr>
					<tr
						key={ lemma }
						className={ classnames( lemma, styles.row ) }
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
						<td
							title={
								strongsDictionary &&
								strongsDictionary[ lemma ].xlit
									? strongsDictionary[ lemma ].xlit
									: ''
							}
						>
							{ lemma }
						</td>
						<td>{ common[ lemma ] }</td>
						<td>{ count }</td>
						<td>{ significance }</td>
					</tr>
				</>
			);
		} );

	return (
		<table className={ styles.wordStatsTable }>
			<thead>
				<tr>
					<th
						className={ styles.sort }
						onClick={ () =>
							sort === 'wordDesc'
								? setSort( 'wordAsc' )
								: setSort( 'wordDesc' )
						}
					>
						Word
						{ sort === 'wordAsc' ? '\u00A0↓' : '' }
						{ sort === 'wordDesc' ? '\u00A0↑' : '' }
					</th>
					<th
						className={ styles.sort }
						onClick={ () =>
							sort === 'usesDesc'
								? setSort( 'usesAsc' )
								: setSort( 'usesDesc' )
						}
					>
						Uses
						{ sort === 'usesAsc' ? '\u00A0↓' : '' }
						{ sort === 'usesDesc' ? '\u00A0↑' : '' }
					</th>
					<th
						className={ styles.sort }
						onClick={ () =>
							sort === 'totalDesc'
								? setSort( 'totalAsc' )
								: setSort( 'totalDesc' )
						}
					>
						Total
						{ sort === 'totalAsc' ? '\u00A0↓' : '' }
						{ sort === 'totalDesc' ? '\u00A0↑' : '' }
					</th>
					<th
						className={ styles.sort }
						onClick={ () =>
							sort === 'significanceDesc'
								? setSort( 'significanceAsc' )
								: setSort( 'significanceDesc' )
						}
						title="Significance (Uses / Total)"
					>
						Sig.
						{ sort === 'significanceAsc' ? '\u00A0↓' : '' }
						{ sort === 'significanceDesc' ? '\u00A0↑' : '' }
					</th>
				</tr>
			</thead>
			<tbody>{ commonWords }</tbody>
		</table>
	);
}
