// External dependencies
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Internal dependencies
import bible from '../../data/bible';
import styles from './styles.module.scss';
import { fetchData, fetchDataAsync, setReferenceInfo } from '../../actions';
import { getBooks, getCompareChapters } from '../../lib/select-helpers';

export default function Connections( { close } ) {
	const dispatch = useDispatch();
	dispatch( fetchData( 'original' ) );
	dispatch( fetchDataAsync( 'strongsObjectWithFamilies' ) );
	dispatch( fetchDataAsync( 'comparisonData' ) );
	const comparisonData = useSelector(
		( state ) => state.data.comparisonData
	);
	const reference = useSelector( ( state ) => state.referenceInfo.reference );
	const [ showMore, setShowMore ] = useState( false );
	const [ sort, setSort ] = useState( 'bookorder' );
	const [ hueFactor, setHueFactor ] = useState( 5 );
	const [ saturationFactor, setSaturationFactor ] = useState( 50 );
	const [ lightnessFactor, setLightnessFactor ] = useState( 100 );
	if ( ! comparisonData ) {
		return null;
	}

	// Duplicated from index.jsx.
	const compareBookChange = ( event ) => {
		dispatch(
			setReferenceInfo( {
				book: event.target.value,
				chapter: 1,
				verse: 'all',
			} )
		);
	};

	const compareChapterChange = ( event ) => {
		dispatch(
			setReferenceInfo( {
				...reference,
				chapter: event.target.value,
				verse: 'all',
			} )
		);
	};

	const getHSLData = ( book, chapterNumber ) => {
		const bookId = bible.getBookId( book ) - 1;
		return comparisonData[ book ][ chapterNumber ]
			.map( ( compareBookData, compareBookId ) => {
				return compareBookData
					.map( ( compareChapterData, compareChapterNumber ) => {
						const { hue, saturation, lightness } = getHSL(
							bookId,
							chapterNumber,
							compareBookId,
							compareChapterNumber
						);
						let bookIdForName = compareBookId;
						if ( bookId >= 39 ) {
							bookIdForName = compareBookId + 39;
						}
						const compareBookName = bible.getBook(
							bookIdForName + 1
						);
						return {
							hue,
							saturation,
							lightness,
							compareBookName,
							compareChapterNumber,
						};
					} )
					.flat();
			} )
			.flat();
	};
	const sortByProperty = ( property ) => {
		return ( a, b ) => {
			if ( a[ property ] > b[ property ] ) {
				return -1;
			} else {
				return 1;
			}
		};
	};

	const sortCombined = ( a, b ) => {
		if (
			a.hue * a.saturation * a.lightness >
			b.hue * b.saturation * b.lightness
		) {
			return -1;
		} else {
			return 1;
		}
	};

	const getDataForSingleReference = ( { book, chapter } ) => {
		const chapterNumber = chapter - 1;
		let hslData = getHSLData( book, chapterNumber );
		if ( sort === 'hue' || sort === 'saturation' || sort === 'lightness' ) {
			hslData.sort( sortByProperty( sort ) );
		}

		if ( sort === 'combined' ) {
			hslData.sort( sortCombined );
		}

		return hslData.map(
			(
				{
					hue,
					saturation,
					lightness,
					compareBookName,
					compareChapterNumber,
				},
				key
			) => {
				return (
					<span
						key={ key }
						title={
							'Uniqueness ' +
							hue.toFixed( 2 ) +
							'\r\nDensity ' +
							saturation.toFixed( 2 ) +
							'\r\nSignificance ' +
							lightness.toFixed( 2 ) +
							'\r\nCombined ' +
							( hue * saturation * lightness ).toFixed( 2 )
						}
						style={ {
							'--hue': hue,
							'--saturation': saturation,
							'--lightness': lightness,
						} }
					>
						{ compareBookName } ( { compareChapterNumber + 1 } )
					</span>
				);
			}
		);
	};

	const getHSL = (
		bookId,
		chapterNumber,
		compareBookId,
		compareChapterNumber
	) => {
		const book = bible.getBook( bookId + 1 );
		const compareChapterData =
			comparisonData[ book ][ chapterNumber ][ compareBookId ][
				compareChapterNumber
			];
		if ( bookId >= 39 ) {
			compareBookId = compareBookId + 39;
		}

		const smallerReferenceLength = Math.min(
			bible.Data.numberOfLemmasInChapter[ bookId ][ chapterNumber ],
			bible.Data.numberOfLemmasInChapter[ compareBookId ][
				compareChapterNumber
			]
		);
		const averageWordCount =
			( bible.Data.numberOfWordsInChapter[ bookId ][ chapterNumber ] +
				bible.Data.numberOfWordsInChapter[ compareBookId ][
					compareChapterNumber
				] ) /
			2;
		const hue = compareChapterData[ 2 ] / compareChapterData[ 0 ];
		const saturation = compareChapterData[ 1 ] / averageWordCount;
		const lightness = compareChapterData[ 0 ] / smallerReferenceLength;
		return { hue, saturation, lightness };
	};

	const getCSSVars = () => {
		return (
			':root{ --hue-factor:' +
			hueFactor / 10 +
			';--saturation-factor:' +
			saturationFactor / 10 +
			'%;--lightness-factor:' +
			lightnessFactor +
			'%;}'
		);
	};

	return (
		<>
			<style>{ getCSSVars() }</style>
			<div className={ styles.content }>
				<div className={ styles.controls }>
					<div>
						<label htmlFor="sort">Chapter to compare</label>
						<div className={ styles.reference }>
							<select
								name="compareWithBook"
								onChange={ compareBookChange }
								value={ reference ? reference.book : '' }
							>
								{ getBooks() }
							</select>
							<select
								name="compareWithChapter"
								onChange={ compareChapterChange }
								value={ reference ? reference.chapter : '' }
							>
								{ getCompareChapters( reference ) }
							</select>
						</div>
					</div>
					<div>
						<label htmlFor="sort">Sort by</label>
						<br />
						<select
							name="sort"
							value={ sort }
							onChange={ ( event ) =>
								setSort( event.target.value )
							}
						>
							<option value="bookorder">Book order</option>
							<option value="hue">Uniquenesss</option>
							<option value="saturation">Density</option>
							<option value="lightness">Significance</option>
							<option value="combined">Combined</option>
						</select>
					</div>
					<div>
						<label onClick={ () => close() }>X</label>
						<br />
						<button onClick={ () => setShowMore( ! showMore ) }>
							How it works
						</button>
					</div>
				</div>
				<div className={ styles.adjustments }>
					<div>
						<label htmlFor="hueFactor">Uniqueness</label>
						<br />
						<input
							type="range"
							min="0"
							max="100"
							value={ hueFactor }
							onChange={ ( event ) =>
								setHueFactor( event.target.value )
							}
						/>
					</div>
					<div>
						<label htmlFor="saturationFactor">Density</label>
						<br />
						<input
							type="range"
							min="0"
							max="100"
							value={ saturationFactor }
							onChange={ ( event ) =>
								setSaturationFactor( event.target.value )
							}
						/>
					</div>
					<div>
						<label htmlFor="lightnessFactor">Significance</label>
						<br />
						<input
							type="range"
							min="0"
							max="200"
							value={ lightnessFactor }
							onChange={ ( event ) =>
								setLightnessFactor( event.target.value )
							}
						/>
					</div>
				</div>
				{ showMore && (
					<div>
						<div>
							<h2>
								Find connections between chapters of the bible
							</h2>
							<p>
								This compares a chapter of the bible with all
								the other chapters, to find the chapters with
								most connections.{ ' ' }
								<a onClick={ () => setShowMore( ! showMore ) }>
									How it works.
								</a>
							</p>
							<p>
								Connections are made using Strong&apos;s
								numbers, and include all numbers, even those
								that are very common. There are three ways to
								meaure the importance of connections:
							</p>
							<ol>
								<li>
									<strong>Uniqueness</strong>
									<br />
									This is a measure of how common or rare the
									connected words are. It is represented by
									the visual color spectrum (hue). Red
									represents very common words, yellow and
									green are less common, purple and pink are
									rare words. The uniqueness of a word is
									calculated by dividing the number of uses of
									the Strong&apos;s number in the whole bible
									by 50986, since this is how many times the
									most common word is used. This value is
									calculated for every connection between the
									two passages, added together, and then
									divided by the total number of connections.
								</li>
								<li>
									<strong>Density</strong>
									<br />
									This is a meause of how many times each
									connection occours. It is represented by the
									saturation levels of the colors - the more
									saturated a color is, the more dense the
									connections are. It is calculated by
									multiplying the number of uses of each
									connected Strong&apos;s number in both
									passages and then dividing by the average
									number of words in both passages.
								</li>
								<li>
									<strong>Significance</strong>
									<br />
									This is a measure of the percentage of the
									chapters which are connected. It is
									represented by the lightness of the color -
									the lighter the color the greater a
									percentage of the two passages are the same.
									When comparing a chapter with itself this
									should always be 100%, i.e white. It is
									calculated by dividing the number of
									connections between the two passages by the
									number of unique Strong&apos;s numbers in
									the shorter passage.
								</li>
							</ol>
							<h2>Adjustments</h2>
							<p>
								The colors are adjusted to make the differences
								between them easier to see in the average case,
								but in some cases you might want to change these
								settings to make it clearer.
							</p>
						</div>
					</div>
				) }
			</div>
			<div className={ styles.bookcase }>
				{ reference && getDataForSingleReference( reference ) }
			</div>
		</>
	);
}
