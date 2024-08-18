import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Cache busting: append timestamp as hash
const htmlPlugin = () => {
	return {
		name: 'html-transform',
		transformIndexHtml( html ) {
			const hash = Date.now();

			return html
				.replaceAll( '.json"', '.json?v=' + hash + '"' )
				.replaceAll( '.js"', '.js?v=' + hash + '"' )
				.replaceAll( '.css"', '.css?v=' + hash + '"' );
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
	plugins: [ react() ],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
		},
	},
} );
