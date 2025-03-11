// External
import { useSelector } from 'react-redux';

// Internal
import styles from './styles.module.scss';

export default function InitialView() {
	const reference = useSelector( ( state ) => state.reference );

	if ( reference.length ) {
		return null;
	}

	return (
		<div className={ styles.initialView }>
			<div className={ styles.logo }>
				<object
					type="image/svg+xml"
					data="syncbible.svg"
					width="150"
					height="150"
				></object>
			</div>
			<div className={ styles.content }>
				<h1>sync.bible</h1>
				<p>
					sync.bible is a tool to help you understand the bible
					better.
				</p>
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
