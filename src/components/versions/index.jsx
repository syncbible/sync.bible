// External
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Internal
import bible from '../../data/bible.js';
import styles from './styles.module.scss';
import { toggleVersion, settingsChange } from '../../actions';

const Versions = ( { trays } ) => {
	const dispatch = useDispatch();
	const availableVersions = useSelector(
		( state ) => state.settings.versions
	);
	const { interfaceLanguage, compareMode } = useSelector( ( state ) => {
		return {
			compareMode: state.settings.compareMode,
			interfaceLanguage: state.settings.interfaceLanguage,
		};
	} );
	const reference = useSelector( ( state ) => state.reference );
	const referenceVersions = reference.map( ( ref ) => ref.version );
	const usedVersions = [ ...referenceVersions, interfaceLanguage ];
	const allVersions = Object.keys( bible.Data.supportedVersions );

	return (
		<div className={ styles.versions }>
			<form>
				{ compareMode && (
					<div className={ styles.buttons }>
						<button
							onClick={ () => {
								dispatch(
									settingsChange( 'versions', allVersions )
								);
							} }
						>
							All
						</button>
						&nbsp;
						<button
							onClick={ () => {
								dispatch(
									settingsChange( 'versions', usedVersions )
								);
							} }
						>
							Clear
						</button>
						&nbsp;
						<button
							onClick={ () =>
								dispatch(
									settingsChange( 'compareMode', false )
								)
							}
						>
							Done
						</button>
					</div>
				) }
				<legend>Select versions to use</legend>
				{ Object.keys( bible.Data.tongues ).map( ( key ) => {
					const versionsForLanguage = Object.keys(
						bible.Data.supportedVersions
					).filter( ( versionForLanguage ) => {
						return (
							bible.Data.supportedVersions[ versionForLanguage ]
								.tongue === key
						);
					} );
					const versionOption = versionsForLanguage.map(
						( version ) => {
							const versionData =
								bible.Data.supportedVersions[ version ];
							return (
								<li key={ version }>
									<label title={ versionData.name }>
										<input
											id={ version }
											type="checkbox"
											disabled={
												usedVersions.indexOf(
													version
												) > -1
											}
											checked={
												availableVersions.indexOf(
													version
												) > -1
											}
											onChange={ () => {
												// TODO - load the version and cache it.
												dispatch(
													toggleVersion( version )
												);
											} }
										/>{ ' ' }
										{ version }
										{ versionData.strongs
											? ' *'
											: '' } - { versionData.name }
									</label>
								</li>
							);
						}
					);
					return (
						<fieldset
							className={ styles.fieldset }
							key={ 'fieldset' + key }
						>
							<label>{ bible.Data.tongues[ key ] }</label>
							<ul>{ versionOption }</ul>
						</fieldset>
					);
				} ) }
			</form>
		</div>
	);
};

export default Versions;
