// External
import { useSelector } from 'react-redux';

// Internal
import bible from '../../data/bible.js';

export default function ReferenceText( { reference } ) {
	const interfaceLanguage = useSelector(
		( state ) => state.settings.interfaceLanguage
	);
	let text = bible.getTranslatedBookName( reference.book, interfaceLanguage );
	if ( reference.chapter ) {
		text += ' ' + reference.chapter;
	}

	if ( reference.verse ) {
		text += ':' + reference.verse;
	}
	return text;
}
