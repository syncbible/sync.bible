// External dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Internal dependencies
import styles from './styles.module.scss';
import CombinedResults from './combined';
import WordBlock from './word-block';

const WordDetails = () => {
	const list = useSelector( ( state ) => state.list );
	const words = list.filter( ( { listType } ) => listType === 'word' );

	return words && words.length ? (
		<div className={ styles.wordDetails }>
			{ words.map( ( word, index ) => {
				return (
					<WordBlock
						word={ word }
						key={ index }
						data={ word.data }
						results={ word.results }
						loading={ word.loading }
						id={ word.id } // ID is needed when we call toggleListItemVisible
					/>
				);
			} ) }
			<CombinedResults type="word" />
		</div>
	) : (
		<div className={ styles.wordBlockHelp }>
			Select a word to show more details about it here.
		</div>
	);
};

export default WordDetails;
