// External
import React from 'react';
import PropTypes from 'prop-types';

// Internal
import styles from './styles.module.scss';

const SortForm = ( {
	sortBy,
	onSortChange,
	sortOptions,
	filterBy,
	onFilterChange,
	filterOptions,
	filterLabel = 'Show',
	sortLabel = 'Sort by',
} ) => {
	return (
		<form className={ styles.sortForm }>
			<fieldset>
				<div>
					<label htmlFor={ `sort-${ sortLabel }` }>{ sortLabel }</label>
					<select
						value={ sortBy }
						onChange={ ( e ) => onSortChange( e.target.value ) }
						name={ `sort-${ sortLabel }` }
					>
						{ sortOptions.map( ( option ) => (
							<option key={ option.value } value={ option.value }>
								{ option.label }
							</option>
						) ) }
					</select>
				</div>
				{ filterOptions && (
					<div>
						<label htmlFor={ `filter-${ filterLabel }` }>{ filterLabel }</label>
						<select
							value={ filterBy }
							onChange={ ( e ) => onFilterChange( e.target.value ) }
							name={ `filter-${ filterLabel }` }
						>
							{ filterOptions.map( ( option ) => (
								<option key={ option.value } value={ option.value }>
									{ option.label }
								</option>
							) ) }
						</select>
					</div>
				) }
			</fieldset>
		</form>
	);
};

SortForm.propTypes = {
	sortBy: PropTypes.string.isRequired,
	onSortChange: PropTypes.func.isRequired,
	sortOptions: PropTypes.arrayOf(
		PropTypes.shape( {
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		} )
	).isRequired,
	filterBy: PropTypes.string,
	onFilterChange: PropTypes.func,
	filterOptions: PropTypes.arrayOf(
		PropTypes.shape( {
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		} )
	),
	filterLabel: PropTypes.string,
	sortLabel: PropTypes.string,
};

export default SortForm;
