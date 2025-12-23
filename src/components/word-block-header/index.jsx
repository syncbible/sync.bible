// External dependencies
import PropTypes from 'prop-types';

// Internal dependencies
import RemoveSvg from '../svg/remove';
import CopyToClipboard from '../copy-to-clipboard';
import ReferenceLink from '../reference-link';
import styles from './styles.module.scss';

/** Header component for word blocks with optional copy and remove actions */
export default function WordBlockHeader( {
	children,
	className,
	textToCopy,
	onRemove,
	reference,
} ) {
	return (
		<div className={ className }>
			{ children }
			<span className={ styles.buttons }>
				{ reference && (
					<ReferenceLink reference={ reference } isIcon={ true } />
				) }
				{ textToCopy && <CopyToClipboard textToCopy={ textToCopy } /> }
				{ onRemove && (
					<a
						onClick={ ( event ) => {
							event.stopPropagation();
							onRemove();
						} }
					>
						<RemoveSvg />
					</a>
				) }
			</span>
		</div>
	);
}

WordBlockHeader.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	textToCopy: PropTypes.oneOfType( [ PropTypes.string, PropTypes.object ] ),
	onRemove: PropTypes.func,
};
