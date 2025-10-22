// Memoized selectors for performance optimization
import { createSelector } from 'reselect';
import { mapVersionToData } from '../lib/reference';
import { getFamily } from '../lib/word';
import { getLiteralConsistentTranslation } from '../components/utils.js';

// Base selectors
const selectData = (state) => state.data;
const selectSettings = (state) => state.settings;

// Verse data selectors with memoization
export const makeSelectVerseData = () => createSelector(
	[
		selectData,
		(_, props) => props.book,
		(_, props) => props.version,
		(_, props) => props.chapter,
		(_, props) => props.verse,
	],
	(data, book, version, chapter, verse) => {
		const language = mapVersionToData(book, version);

		if (!data[language] || Object.keys(data[language]).length === 0) {
			return { loading: true };
		}

		if (!data[language][book] && language !== 'LC') {
			return { notAvailable: true };
		}

		if (
			(!language ||
				typeof data[language] === 'undefined' ||
				typeof data[language][book] === 'undefined' ||
				typeof data[language][book][chapter] === 'undefined') &&
			language !== 'LC'
		) {
			return { notFound: true };
		}

		const verseData = data[language][book][chapter][verse];
		return { verseData, language };
	}
);

// Selector for strongs object with families (used for word highlighting)
export const selectStrongsObjectWithFamilies = createSelector(
	[selectData],
	(data) => data.strongsObjectWithFamilies
);

// Selector for farsi translations
export const selectFarsiTranslations = createSelector(
	[selectData],
	(data) => data.farsiTranslations
);

// Selector for LC data
export const selectLCData = createSelector(
	[selectData],
	(data) => data.LC
);

// Memoized selector for literal consistent translation
export const makeSelectLiteralConsistentTranslation = () => createSelector(
	[
		selectLCData,
		(_, props) => props.word,
		(_, props) => props.lemma,
		(_, props) => props.morph,
		(_, props) => props.prevWord,
	],
	(LC, word, lemma, morph, prevWord) => {
		return getLiteralConsistentTranslation(LC, word, lemma, morph, prevWord);
	}
);

// Memoized selector for word family calculation
export const makeSelectWordFamily = () => createSelector(
	[
		selectStrongsObjectWithFamilies,
		(_, props) => props.lemmaArray,
	],
	(strongsObjectWithFamilies, lemmaArray) => {
		if (!lemmaArray || lemmaArray.length === 0) {
			return null;
		}
		return lemmaArray.map(
			(oneLemma) => getFamily(oneLemma, strongsObjectWithFamilies) + '-family'
		);
	}
);

// Selector for common reference data
export const selectReferenceData = createSelector(
	[(state) => state.reference],
	(reference) => reference
);

// Selector for settings
export const selectInSync = createSelector(
	[selectSettings],
	(settings) => settings.inSync
);

export const selectDarkMode = createSelector(
	[selectSettings],
	(settings) => settings.darkMode
);

export const selectCompareMode = createSelector(
	[selectSettings],
	(settings) => settings.compareMode
);

export const selectExpandedSearchResults = createSelector(
	[selectSettings],
	(settings) => settings.expandedSearchResults
);

export const selectFontFamily = createSelector(
	[selectSettings],
	(settings) => settings.fontFamily
);

export const selectFontSize = createSelector(
	[selectSettings],
	(settings) => settings.fontSize
);

// Combined settings selector to reduce multiple useSelector calls
export const selectAllSettings = createSelector(
	[selectSettings],
	(settings) => ({
		inSync: settings.inSync,
		darkMode: settings.darkMode,
		compareMode: settings.compareMode,
		expandedSearchResults: settings.expandedSearchResults,
		fontFamily: settings.fontFamily,
		fontSize: settings.fontSize,
	})
);

// Combined selector for Verse component to reduce subscriptions
// Returns all data needed by Verse in a single subscription
export const selectVerseComponentData = createSelector(
	[
		selectData,
		selectLCData,
		selectFarsiTranslations,
		selectStrongsObjectWithFamilies,
	],
	(data, lcData, farsiTranslations, strongsObjectWithFamilies) => ({
		data,
		lcData,
		farsiTranslations,
		strongsObjectWithFamilies,
	})
);
