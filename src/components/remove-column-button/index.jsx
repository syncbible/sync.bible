// External
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Internal
import { removeColumn } from '../../actions';
import RemoveSvg from '../svg/remove';

export default function RemoveColumnButton( { index } ) {
	const dispatch = useDispatch();

	return (
		<button
			type="button"
			onClick={ () => dispatch( removeColumn( index ) ) }
		>
			<RemoveSvg />
		</button>
	);
}

RemoveColumnButton.propTypes = {
	index: PropTypes.number.isRequired,
};
