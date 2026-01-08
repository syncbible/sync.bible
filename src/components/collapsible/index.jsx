// External
import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import styles from './styles.module.scss';
import WordBlockHeader from '../word-block-header';

const Collapsible = React.forwardRef(
	(
		{
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
		},
		ref
	) => {
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
	}
);

Collapsible.displayName = 'Collapsible';

Collapsible.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.node,
	onToggle: PropTypes.func.isRequired,
	textToCopy: PropTypes.object,
	title: PropTypes.string,
	onRemove: PropTypes.func,
	onMouseOver: PropTypes.func,
	onMouseOut: PropTypes.func,
	onPointerOver: PropTypes.func,
	onPointerOut: PropTypes.func,
	open: PropTypes.bool,
	reference: PropTypes.object,
};

export default React.memo( Collapsible );
