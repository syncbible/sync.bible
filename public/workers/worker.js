var module = {};
var javascripture = {};
javascripture.api = {};

const otBooks = [
	'Genesis',
	'Exodus',
	'Leviticus',
	'Numbers',
	'Deuteronomy',
	'Joshua',
	'Judges',
	'Ruth',
	'I Samuel',
	'II Samuel',
	'I Kings',
	'II Kings',
	'I Chronicles',
	'II Chronicles',
	'Ezra',
	'Nehemiah',
	'Esther',
	'Job',
	'Psalms',
	'Proverbs',
	'Ecclesiastes',
	'Song of Solomon',
	'Isaiah',
	'Jeremiah',
	'Lamentations',
	'Ezekiel',
	'Daniel',
	'Hosea',
	'Joel',
	'Amos',
	'Obadiah',
	'Jonah',
	'Micah',
	'Nahum',
	'Habakkuk',
	'Zephaniah',
	'Haggai',
	'Zechariah',
	'Malachi',
];
const ntBooks = [
	'Matthew',
	'Mark',
	'Luke',
	'John',
	'Acts',
	'Romans',
	'I Corinthians',
	'II Corinthians',
	'Galatians',
	'Ephesians',
	'Philippians',
	'Colossians',
	'I Thessalonians',
	'II Thessalonians',
	'I Timothy',
	'II Timothy',
	'Titus',
	'Philemon',
	'Hebrews',
	'James',
	'I Peter',
	'II Peter',
	'I John',
	'II John',
	'III John',
	'Jude',
	'Revelation of John',
];
const allBooks = otBooks.concat( ntBooks );

self.postMessage( { task: 'loading', html: 'loading API' } );
importScripts( '../api/searchApi.js' );
self.postMessage( { task: 'loading', html: 'loading complete!' } );

// Copied from lib/reference.js.
function sortReferences(
	{ reference: referenceA },
	{ reference: referenceB }
) {
	const referenceAArray = referenceA.split( '.' );
	const referenceBArray = referenceB.split( '.' );
	const positionOfReferenceA = allBooks.indexOf( referenceAArray[ 0 ] );
	const positionOfReferenceB = allBooks.indexOf( referenceBArray[ 0 ] );

	if ( positionOfReferenceA === positionOfReferenceB ) {
		if ( referenceAArray[ 1 ] === referenceBArray[ 1 ] ) {
			return referenceAArray[ 2 ] - referenceBArray[ 2 ];
		}

		return referenceAArray[ 1 ] - referenceBArray[ 1 ];
	}

	return positionOfReferenceA - positionOfReferenceB;
}

// Copied from actions/index.js.
function getResultsForWord( parameters, versionData ) {
	const strongsNumber = parameters.lemma;
	const resultData = [];
	Object.keys( versionData ).forEach( ( book ) =>
		versionData[ book ].forEach( ( chapter, chapterNumber ) =>
			chapter.forEach( ( verse, verseNumber ) =>
				verse.forEach( ( word ) => {
					const lemmaArray = word[ 1 ] && word[ 1 ].split( / |\// ); // should also split by &.
					if (
						lemmaArray &&
						lemmaArray.indexOf( strongsNumber ) > -1
					) {
						resultData.push( {
							reference:
								book +
								'.' +
								( chapterNumber + 1 ) +
								'.' +
								( verseNumber + 1 ),
							word,
						} );
					}
				} )
			)
		)
	);
	return resultData.sort( sortReferences );
}

self.addEventListener(
	'message',
	function ( e ) {
		let result;
		if ( e.data.task === 'search' ) {
			result = javascripture.api.search.getReferences(
				e.data.parameters,
				e.data.data
			);
		}
		if ( e.data.task === 'word' ) {
			result = getResultsForWord( e.data.parameters, e.data.data );
		}

		if ( result ) {
			self.postMessage( {
				task: e.data.task,
				parameters: e.data.parameters,
				result: result,
			} );
		}
	},
	false
);
