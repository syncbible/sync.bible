// External
import { Fragment, useState, useCallback, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
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

const Versions = () => {
	const dispatch = useDispatch();
	const [ searchQuery, setSearchQuery ] = useState( '' );
	const [ collapsedLanguages, setCollapsedLanguages ] = useState( {} );
	const availableVersions = useSelector(
		( state ) => state.settings.versions
	);
	const { interfaceLanguage, compareMode } = useSelector(
		( state ) => ( {
			compareMode: state.settings.compareMode,
			interfaceLanguage: state.settings.interfaceLanguage,
		} ),
		shallowEqual
	);
	const reference = useSelector( ( state ) => state.reference );

	const referenceVersions = useMemo(
		() => reference.map( ( ref ) => ref.version ),
		[ reference ]
	);

	const usedVersions = useMemo(
		() => [ ...referenceVersions, interfaceLanguage ],
		[ referenceVersions, interfaceLanguage ]
	);
	const allVersions = useMemo(
		() => Object.keys( bible.Data.supportedVersions ),
		[]
	);
	const requiredVersions = useMemo(
		() => [
			...new Set(
				usedVersions.filter(
					( version ) => version && allVersions.includes( version )
				)
			),
		],
		[ allVersions, usedVersions ]
	);
	const hasVersionsToClear = useMemo(
		() =>
			availableVersions.some(
				( version ) => ! requiredVersions.includes( version )
			),
		[ availableVersions, requiredVersions ]
	);

	const clearAllVersions = useCallback( () => {
		dispatch( settingsChange( 'versions', requiredVersions ) );
	}, [ dispatch, requiredVersions ] );

	const toggleLanguageCollapsed = useCallback( ( key ) => {
		setCollapsedLanguages( ( currentCollapsedLanguages ) => ( {
			...currentCollapsedLanguages,
			[ key ]: currentCollapsedLanguages[ key ] === false,
		} ) );
	}, [] );

	const toggleLanguageVersions = useCallback(
		( versionsForLanguage, checked ) => {
			const requiredVersionsSet = new Set( requiredVersions );
			const nextVersions = checked
				? [
						...new Set( [
							...availableVersions,
							...versionsForLanguage,
						] ),
				  ]
				: availableVersions.filter(
						( version ) =>
							! versionsForLanguage.includes( version ) ||
							requiredVersionsSet.has( version )
				  );

			dispatch( settingsChange( 'versions', nextVersions ) );
		},
		[ availableVersions, dispatch, requiredVersions ]
	);

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
							type="button"
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
							type="button"
							onClick={ () => {
								clearAllVersions();
							} }
						>
							Clear
						</button>
						&nbsp;
						<button
							type="button"
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
					{ interfaceLanguage && (
						<a
							href="#clear-all-versions"
							className={ classnames(
								styles.clearAllLink,
								! hasVersionsToClear && styles.disabledLink
							) }
							aria-disabled={ ! hasVersionsToClear }
							onClick={ ( event ) => {
								event.preventDefault();
								if ( hasVersionsToClear ) {
									clearAllVersions();
								}
							} }
						>
							Clear all
						</a>
					) }
				</div>

				{ Object.keys( bible.Data.tongues ).map( ( key ) => {
					const languageName = bible.Data.tongues[ key ];
					const query = searchQuery.toLowerCase();
					const versionsForLanguage = allVersions.filter(
						( versionForLanguage ) =>
							bible.Data.supportedVersions[ versionForLanguage ]
								.tongue === key
					);
					const visibleVersionsForLanguage =
						versionsForLanguage.filter( ( versionForLanguage ) => {
							const versionData =
								bible.Data.supportedVersions[
									versionForLanguage
								];
							return (
								searchQuery === '' ||
								versionForLanguage
									.toLowerCase()
									.includes( query ) ||
								versionData.name
									.toLowerCase()
									.includes( query ) ||
								languageName.toLowerCase().includes( query )
							);
						} );
					// Skip empty language groups
					if ( visibleVersionsForLanguage.length === 0 ) {
						return null;
					}
					const selectedLanguageVersions = versionsForLanguage.filter(
						( version ) => availableVersions.indexOf( version ) > -1
					);
					const hasSelectedLanguageVersions =
						selectedLanguageVersions.length > 0;
					const hasAllLanguageVersions =
						selectedLanguageVersions.length ===
						versionsForLanguage.length;
					const hasSomeLanguageVersions =
						hasSelectedLanguageVersions && ! hasAllLanguageVersions;
					const languageCheckboxId = `language-${ key }`;
					const versionsListId = `versions-${ key }`;
					const isCollapsed = collapsedLanguages[ key ] !== false;
					const labelClasses = classnames(
						styles.versionLabel,
						interfaceLanguage && styles.withCheckbox
					);
					const versionOption = visibleVersionsForLanguage.map(
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
													requiredVersions.indexOf(
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
						<Fragment key={ 'language' + key }>
							<div
								className={ classnames(
									styles.languageHeader,
									! isCollapsed && styles.stickyLanguageHeader
								) }
							>
								<a
									href={ `#${ versionsListId }` }
									className={ styles.languageToggle }
									aria-expanded={ ! isCollapsed }
									aria-controls={ versionsListId }
									onClick={ ( event ) => {
										event.preventDefault();
										toggleLanguageCollapsed( key );
									} }
								>
									<span
										className={ styles.collapseIndicator }
										aria-hidden="true"
									>
										{ isCollapsed ? '+' : '-' }
									</span>
								</a>
								{ interfaceLanguage && (
									<label
										className={ styles.languageCheckbox }
										htmlFor={ languageCheckboxId }
									>
										<input
											id={ languageCheckboxId }
											type="checkbox"
											checked={ hasAllLanguageVersions }
											ref={ ( input ) => {
												if ( input ) {
													input.indeterminate =
														hasSomeLanguageVersions;
												}
											} }
											onChange={ ( event ) => {
												toggleLanguageVersions(
													versionsForLanguage,
													event.target.checked
												);
											} }
										/>
									</label>
								) }
								<a
									href={ `#${ versionsListId }` }
									className={ styles.languageName }
									aria-expanded={ ! isCollapsed }
									aria-controls={ versionsListId }
									onClick={ ( event ) => {
										event.preventDefault();
										toggleLanguageCollapsed( key );
									} }
								>
									{ languageName }
								</a>
							</div>
							<ul
								id={ versionsListId }
								className={ styles.versionList }
								hidden={ isCollapsed }
							>
								{ versionOption }
							</ul>
						</Fragment>
					);
				} ) }
			</form>
		</div>
	);
};

export default Versions;
