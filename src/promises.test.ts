import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import * as layout from './routes/+layout.js';

// The footer says this site has no cookies, no analytics and no trackers, and runs no scripts at
// all. These checks keep each piece of that true at its source, so a change that would quietly
// break the promise fails here instead of shipping.

const everyPage = readFileSync('_headers', 'utf8')
	.split(/\n(?=\S)/)
	.find((block) => block.startsWith('/*'));
const policy = everyPage?.match(/^\s+Content-Security-Policy:\s*(.+)$/m)?.[1] ?? '';
const directives = new Map(
	policy
		.split(';')
		.map((directive) => directive.trim().split(/\s+/))
		.filter(([name]) => name)
		.map(([name, ...sources]) => [name, sources])
);

/** Every Svelte component under `directory`, with its path. */
function components(directory: string): { path: string; source: string }[] {
	return readdirSync(directory, { withFileTypes: true, recursive: true })
		.filter((entry) => entry.isFile() && entry.name.endsWith('.svelte'))
		.map((entry) => {
			const path = join(entry.parentPath, entry.name);
			return { path, source: readFileSync(path, 'utf8') };
		});
}

/** A component's markup: everything outside its own `<script>` and `<style>` blocks. */
const markupOf = (source: string) =>
	source.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');

describe('the Content-Security-Policy', () => {
	it('is sent with every page', () => {
		expect(policy).not.toBe('');
	});

	it('falls back to nothing, so anything not named is blocked', () => {
		expect(directives.get('default-src')).toEqual(["'none'"]);
	});

	it('allows no scripts at all', () => {
		// With no script-src, scripts fall back to default-src 'none'.
		expect(directives.has('script-src')).toBe(false);
		expect(directives.has('script-src-elem')).toBe(false);
		expect(directives.has('script-src-attr')).toBe(false);
	});

	it('loads nothing from another site, and nothing inline or from data: addresses', () => {
		for (const [name, sources] of directives) {
			for (const source of sources) {
				expect(source, `${name} ${source}`).toMatch(/^'(self|none)'$/);
			}
		}
	});
});

describe('the pages', () => {
	it('are built ahead of time and send no JavaScript', () => {
		expect(layout.prerender).toBe(true);
		expect(layout.csr).toBe(false);
	});

	it('never inline an asset as a data: address, which the policy would block', () => {
		expect(readFileSync('vite.config.ts', 'utf8')).toMatch(/assetsInlineLimit:\s*0\b/);
	});

	it.each(components('src'))('$path has no inline styles or event handlers', ({ source }) => {
		const markup = markupOf(source);
		expect(markup).not.toMatch(/\sstyle\s*=/);
		// Handlers never run without client-side code; one here means someone expects them to.
		expect(markup).not.toMatch(/\son[a-z]+\s*=/);
	});
});
