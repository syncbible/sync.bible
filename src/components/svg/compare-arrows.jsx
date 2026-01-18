// External
import PropTypes from 'prop-types';

const Compare = ( { fill } ) => (
	<svg
		fill={ fill }
		height="24"
		viewBox="0 -960 960 960"
		width="24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="m320-160-56-57 103-103h-287v-80h287l-103-103 56-57 200 200zm320-240-200-200 200-200 56 57-103 103h287v80h-287l103 103z" />
	</svg>
);

Compare.propTypes = {
	fill: PropTypes.string,
};

export default Compare;
