// External
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useCallback, Fragment } from 'react';

// Internal
import Navigation from '../navigation';
import styles from './styles.module.scss';
import { DOCK_HEIGHT } from '../../constants/dimensions';
import { useTrayDimensions } from '../../hooks/useTrayDimensions';
import { swapColumns } from '../../actions';
import CompareArrows from '../svg/compare-arrows';

const Dock = () => {
	const dispatch = useDispatch();
	const versionArray = useSelector(
		( state ) =>
			state.reference.map(
				( reference, index ) => reference.version ?? 'KJV'
			),
		shallowEqual
	);
	const { isMobile, customWidth, activeTraysCount } = useTrayDimensions();

	// On mobile, sidebar overlays, so no margin adjustment needed
	const dynamicMargin = isMobile
		? DOCK_HEIGHT
		: DOCK_HEIGHT +
		  ( activeTraysCount > 0 ? customWidth : 0 );
	const dynamicWidth = `calc(100% - ${ dynamicMargin }px)`;

	const handleSwap = useCallback( ( indexA, indexB ) => {
		dispatch( swapColumns( indexA, indexB ) );
	}, [ dispatch ] );

	return (
		<div
			className={ styles.dock }
			style={ {
				marginLeft: `${ dynamicMargin }px`,
				width: dynamicWidth,
			} }
		>
			<div className={ styles.dockVersionSelectors }>
				{ versionArray.map( ( version, index ) => (
					<Fragment key={ index }>
						<Navigation
							version={ version }
							index={ index }
						/>
						{ index < versionArray.length - 1 && (
							<button
								className={ styles.swapButton }
								onClick={ () => handleSwap( index, index + 1 ) }
								title={ `Swap columns ${ index + 1 } and ${ index + 2 }` }
							>
								<CompareArrows />
							</button>
						) }
					</Fragment>
				) ) }
			</div>
		</div>
	);
};

export default Dock;
