// External
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal
import styles from './styles.module.scss';
import VersionSelect from '../version-select';
import {
	addColumnAction,
	addVersion,
	settingsChange,
	updateSearchForm,
} from '../../actions';

export default function InitialView() {
	const dispatch = useDispatch();
	const reference = useSelector( ( state ) => state.reference );

	const onSelectVersion = useCallback(
		( event ) => {
			const version = event.target.value;
			dispatch( addColumnAction( version ) );
			dispatch( updateSearchForm( 'version', version ) );
			dispatch( settingsChange( 'interfaceLanguage', version ) );
			dispatch( addVersion( version ) );
			event.target.blur();
		},
		[ dispatch ]
	);

	if ( reference.length ) {
		return null;
	}

	return (
		<div className={ styles.initialView }>
			<div className={ styles.content }>
				<div className={ styles.logo }>
					<object
						type="image/svg+xml"
						data="syncbible.svg"
						width="150"
						height="150"
					></object>
				</div>
				<h1>sync.bible</h1>
				<p>
					sync.bible is a tool to help you understand the bible
					better.
				</p>
				<div className={ styles.versionSelectContainer }>
					<VersionSelect onChange={ onSelectVersion } large={ true } />
				</div>
				{ localStorage && (
					<p className="installation-info">
						<br />
						Once the scripts have loaded, they will be cached, so
						the app will work offline.
					</p>
				) }
				<p>
					Having problems?{ ' ' }
					<a href="http://scruffian.wordpress.com/contact/">
						Email me
					</a>
					,
					<a
						href="#"
						onClick={ () => {
							localStorage.clear();
							window.location.href = '/';
						} }
					>
						clear settings and start over
					</a>{ ' ' }
					or <a href="/help/index.html">get help</a>
				</p>
				<p>
					There are also old versions available in case this one is
					broken:{ ' ' }
					<a href="https://javascripture.github.io/javascripture">
						javascripture
					</a>
					{ ' | ' }
					<a href="https://syncbible.github.io/syncbible">
						syncbible webkit
					</a>
				</p>
			</div>
		</div>
	);
}
