// External
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

// Internal
import bible from '../../data/bible.js';
import styles from './styles.module.scss';
import {
	addColumnAction,
	addVersion,
	updateSearchForm,
	toggleVersion,
	settingsChange,
} from '../../actions';

const Versions = ( { trays } ) => {
	const dispatch = useDispatch();
	const [ searchQuery, setSearchQuery ] = useState( '' );
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

	const onSelectVersion = useCallback(
		( version ) => {
			dispatch( addColumnAction( version ) );
			dispatch( updateSearchForm( 'version', version ) );
			dispatch( settingsChange( 'interfaceLanguage', version ) );
			dispatch( addVersion( version ) );
			event.target.blur();
		},
		[ dispatch ]
	);

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
				<div className={ styles.searchContainer }>
					<legend>Select version or search</legend>
					<input
						type="text"
						placeholder="Search versions..."
						value={ searchQuery }
						onChange={ ( e ) => setSearchQuery( e.target.value ) }
						className={ styles.searchInput }
					/>
				</div>

				{ Object.keys( bible.Data.tongues ).map( ( key ) => {
					const languageName = bible.Data.tongues[ key ];
					const versionsForLanguage = Object.keys(
						bible.Data.supportedVersions
					).filter( ( versionForLanguage ) => {
						const versionData =
							bible.Data.supportedVersions[ versionForLanguage ];
						const query = searchQuery.toLowerCase();
						const matchesSearch =
							searchQuery === '' ||
							versionForLanguage
								.toLowerCase()
								.includes( query ) ||
							versionData.name.toLowerCase().includes( query ) ||
							languageName.toLowerCase().includes( query );
						return (
							bible.Data.supportedVersions[ versionForLanguage ]
								.tongue === key && matchesSearch
						);
					} );
					// Skip empty language groups
					if ( versionsForLanguage.length === 0 ) {
						return null;
					}
					const labelClasses = classnames(
						styles.versionLabel,
						interfaceLanguage && styles.withCheckbox
					);
					const versionOption = versionsForLanguage.map(
						( version ) => {
							const versionData =
								bible.Data.supportedVersions[ version ];
							return (
								<li key={ version }>
									<label
										title={ versionData.name }
										className={ labelClasses }
										onClick={ () => {
											if ( ! interfaceLanguage ) {
												onSelectVersion( version );
											}
										} }
									>
										{ interfaceLanguage && (
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
											/>
										) }
										<span className={ styles.versionCode }>
											{ version }
											{ versionData.strongs ? ' *' : '' }
										</span>
										<span>{ versionData.name }</span>
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
