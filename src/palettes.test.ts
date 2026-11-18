import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { STYLESHEET_URL, accentLineProblems, paletteProblems } from '@itrium/palettes/check';
import { CODE_COLORS } from '@itrium/palettes/palettes';

// Rhodonite as this site uses it: the package's colors with our stylesheet on top, checked by the
// package's own checker, the way decision 0001 in the handbook asks every application to.

/**
 * The checker reads attribute selectors only in double quotes (`[data-theme="light"]`), and our
 * formatter writes single ones. Without this it would skip any theme rule of ours that has one.
 */
const forTheChecker = (css: string) => css.replace(/\[([a-z-]+)(\^?=)'([^']*)'\]/g, '[$1$2"$3"]');

/**
 * The checker finds pink lines in CSS declarations; ours are mostly Tailwind classes. A border,
 * outline, ring, underline or divider class in plain --accent (rather than --accent-edge) is a
 * pink line that's 1.5:1 on white. Returns `file:line: class` for each one.
 */
function accentClassProblems(files: { name: string; text: string }[]): string[] {
	const line =
		/(?:^|[\s"'`:])((?:border|outline|ring|decoration|divide)(?:-[trblxy])?-accent)(?![\w-])/;
	return files.flatMap(({ name, text }) =>
		text.split('\n').flatMap((row, index) => {
			const found = line.exec(row);
			return found ? [`${name}:${index + 1}: ${found[1]}`] : [];
		})
	);
}

const stylesheet = () => readFileSync('src/app.css', 'utf8');
const css = () => readFileSync(STYLESHEET_URL, 'utf8') + forTheChecker(stylesheet());
const ours = () =>
	[
		'src/app.css',
		...readdirSync('src', { recursive: true, encoding: 'utf8' })
			.filter((file) => file.endsWith('.svelte') || file === 'lib/styles.ts')
			.map((file) => `src/${file}`)
	].map((name) => ({ name, text: readFileSync(name, 'utf8') }));

describe('colors', () => {
	it('meet level AA in every theme state', () => {
		expect(paletteProblems(css())).toEqual([]);
	});

	it('draw pink lines in --accent-edge, which reaches 3:1 in light mode', () => {
		expect(accentLineProblems(ours())).toEqual([]);
		expect(accentClassProblems(ours())).toEqual([]);
	});

	it("keep the code sample's colors equal to the package's, which it checks at level AA", () => {
		const ruleFor = (scheme: 'dark' | 'light') => {
			const light = stylesheet().indexOf('@media (prefers-color-scheme: light)');
			return scheme === 'dark' ? stylesheet().slice(0, light) : stylesheet().slice(light);
		};
		for (const scheme of ['dark', 'light'] as const) {
			for (const [name, color] of Object.entries(CODE_COLORS[scheme].syntax)) {
				expect(ruleFor(scheme), `--code-${name} in ${scheme} mode`).toMatch(
					new RegExp(`--code-${name}: ${color};`, 'i')
				);
			}
		}
	});

	// The checks above only count if they can fail on this site's own way of writing things.
	it("catch a light color of ours that's too pale", () => {
		const pale =
			css() +
			"@media (prefers-color-scheme: light) { :root:not([data-theme='dark']) { --muted: #aaaaaa; } }";
		expect(paletteProblems(forTheChecker(pale))).not.toEqual([]);
	});

	it('catch a pink line drawn as a Tailwind class', () => {
		expect(
			accentClassProblems([{ name: 'x.svelte', text: '<p class="border-b border-accent">' }])
		).toEqual(['x.svelte:1: border-accent']);
	});
});
