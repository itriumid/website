import adapter from '@sveltejs/adapter-cloudflare';
import { enhancedImages } from '@sveltejs/enhanced-img';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	// Screenshots are imported with ?enhanced and a list of widths, so the build writes smaller
	// copies (AVIF and WebP) and each picture's srcset lets a phone fetch one its own size.
	plugins: [enhancedImages(), tailwindcss(), sveltekit({ adapter: adapter() })],
	// Never inline assets as data: URLs; the Content-Security-Policy in static/_headers only
	// allows files served from the site itself.
	build: { assetsInlineLimit: 0 },
	test: {
		expect: { requireAssertions: true },
		include: ['src/**/*.test.ts'],
		environment: 'node'
	}
});
