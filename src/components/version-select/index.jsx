// External
import classnames from 'classnames';
import PropTypes from 'prop-types';

// Internal
import bible from '../../data/bible.js';
import styles from './styles.module.scss';

/** Component for selecting Bible versions with language grouping */
export default function VersionSelect( {
	name,
	value = 'default',
	onChange,
	large,
} ) {
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
				onChange( event );
			} }
		>
			<option disabled hidden value="default">
				Select a version to get started
			</option>
			{ Object.keys( bible.Data.interfaceLanguages ).map( ( key ) => {
				const versionsForLanguage = Object.keys(
					bible.Data.supportedVersions
				).filter(
					( versionForLanguage ) =>
						bible.Data.supportedVersions[ versionForLanguage ]
							.language === key
				);
				const versionOption = versionsForLanguage.map( ( version ) => {
					const versionData = bible.Data.supportedVersions[ version ];
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
					<optgroup
						key={ 'optgroup' + key }
						label={ bible.Data.interfaceLanguages[ key ] }
					>
						{ versionOption }
					</optgroup>
				);
			} ) }
		</select>
	);
}

VersionSelect.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	large: PropTypes.bool,
};
