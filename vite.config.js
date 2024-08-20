import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Cache busting: append timestamp as hash
const versionNumberPlugin = () => {
	return {
		name: 'version-number-transform',
		transformIndexHtml( html ) {
			const hash = Date.now();

			return html.replaceAll(
				/sync.bible.23.([0-9]+)/g,
				'sync.bible.23.' + hash
			);
		},
	};
};

// https://vitejs.dev/config/
export default defineConfig( {
	build: {
		rollupOptions: {
			output: {
				entryFileNames: 'assets/[name].js', // Don't use hashing, instead rely on clearing the cache with the version name.
				chunkFileNames: 'assets/[name].js',
				assetFileNames: 'assets/[name].[ext]',
			},
		},
	},
	plugins: [ react(), versionNumberPlugin() ],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
	server: {
		port: 7777,
	},
} );
