// External dependencies
import classnames from 'classnames';
import React from 'react';

// Internal dependencies
import styles from './styles.module.scss';
import WordBlockHeader from '../word-block-header';

const Collapsible = React.forwardRef( ( {
	children,
	className,
	header,
	onToggle,
	textToCopy,
	title,
	onRemove,
	onMouseOver,
	onMouseOut,
	onPointerOver,
	onPointerOut,
	open,
	reference,
}, ref ) => {
	return (
		<div className={ styles.collapsible } ref={ ref }>
			<div
				className={ classnames(
					styles.header,
					open ? styles.open : styles.closed
				) }
				onClick={ () => {
					onToggle();
				} }
				title={ title }
				onMouseOver={ onMouseOver && ( () => onMouseOver() ) }
				onMouseOut={ onMouseOut && ( () => onMouseOut() ) }
				onPointerOver={ onPointerOver }
				onPointerOut={ onPointerOut }
			>
				<WordBlockHeader
					className={ className }
					textToCopy={ textToCopy }
					onRemove={ onRemove }
					reference={ reference }
				>
					{ header }
				</WordBlockHeader>
			</div>
			<div
				className={ classnames( styles.content ) }
				style={ { display: open ? 'block' : 'none' } }
			>
				{ children }
			</div>
		</div>
	);
} );

Collapsible.displayName = 'Collapsible';

export default React.memo( Collapsible );
