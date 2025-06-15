// External
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// Internal
import bible from '../../data/bible.js';
import styles from './styles.module.scss';
import { settingsChange, setTrayVisibilityFilter } from '../../actions/';

/** Component for selecting Bible versions with language grouping */
export default function VersionSelect( {
	name,
	value = 'default',
	onChange,
	large,
} ) {
	const dispatch = useDispatch();
	const { availableVersions, interfaceLanguage } = useSelector( ( state ) => {
		return {
			availableVersions: state.settings.versions,
			interfaceLanguage: state.settings.interfaceLanguage,
		};
	} );
	const classes = classnames(
		styles.sidebarSelect,
		large ? styles.large : styles.small
	);

	return (
		<select
			className={ classes }
			name={ name }
			value={ value }
			onChange={ ( event ) => {
				if (
					typeof window !== 'undefined' &&
					typeof window.gtag !== 'undefined'
				) {
					window.gtag( 'event', 'select_content', {
						content_type: 'version',
						item_id: value,
					} );
				}

				if ( event.target.value === 'more' ) {
					// open more
					dispatch( settingsChange( 'compareMode', true ) );
					dispatch( setTrayVisibilityFilter( 'versions' ) );
				} else {
					onChange( event );
				}
			} }
		>
			<option disabled hidden value="default">
				Select a version to get started
			</option>
			{ Object.keys( bible.Data.tongues ).map( ( key ) => {
				const versionsForLanguage = Object.keys(
					bible.Data.supportedVersions
				).filter( ( versionForLanguage ) => {
					return (
						bible.Data.supportedVersions[ versionForLanguage ]
							.tongue === key
					);
				} );
				const versionOption = versionsForLanguage
					.filter(
						( versionToFilter ) =>
							! interfaceLanguage ||
							availableVersions.indexOf( versionToFilter ) > -1
					)
					.map( ( version ) => {
						const versionData =
							bible.Data.supportedVersions[ version ];
						return (
							<option
								value={ version }
								key={ version }
								title={ versionData.name }
							>
								{ version }
								{ versionData.strongs ? ' *' : '' } -{ ' ' }
								{ versionData.name }
							</option>
						);
					} );
				return (
					versionOption.length && (
						<optgroup
							key={ 'optgroup' + key }
							label={ bible.Data.tongues[ key ] }
						>
							{ versionOption }
						</optgroup>
					)
				);
			} ) }
			<option value="more">Select more versions</option>
		</select>
	);
}

VersionSelect.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	large: PropTypes.bool,
};
