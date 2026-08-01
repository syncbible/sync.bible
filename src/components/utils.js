import classnames from 'classnames';
export { getLiteralConsistentTranslation } from '../lib/reference-text';

export function rootClasses( darkMode, expandedSearchResults ) {
	return classnames( 'root', {
		'dark-mode-on': darkMode === true,
		'dark-mode-off': darkMode === false,
		'expanded-search-results': expandedSearchResults === true,
	} );
}
