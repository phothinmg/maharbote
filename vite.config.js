import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import Pages from 'vite-plugin-pages';
import generateSitemap from 'vite-plugin-pages-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		Pages({
			onRoutesGenerated: routes => (generateSitemap({ routes })),
		})
		
	],
	build: {
		sourcemap: true, 
		minify: true, 
	  },
	
});
