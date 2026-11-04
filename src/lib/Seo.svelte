<script lang="ts">
	import { SITE_URL } from '#lib/content.js';

	interface SeoProps {
		title: string;
		description: string;
		/** The page's path, such as `/` or `/honk`. */
		path: string;
		/** Structured data for search engines, rendered as JSON-LD. */
		structuredData?: Record<string, unknown>;
		/** The preview shown where the page is shared, a path in static/; our logo card otherwise. */
		image?: { path: string; width: number; height: number };
	}

	const {
		title,
		description,
		path,
		structuredData,
		image = { path: '/og-image.png', width: 1200, height: 630 }
	}: SeoProps = $props();
	const url = $derived(`${SITE_URL}${path}`);

	// Built here rather than in the markup, where a `<script>` inside a template literal breaks the
	// ESLint Svelte parser. The closing tag is split so it doesn't end this component's own script.
	// A JSON-LD block is data, not a script, so the Content-Security-Policy doesn't block it.
	const structuredDataTag = $derived(
		structuredData
			? `<script type="application/ld+json">${JSON.stringify(structuredData)}<` + `/script>`
			: ''
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Itrium" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="{SITE_URL}{image.path}" />
	<meta property="og:image:width" content={String(image.width)} />
	<meta property="og:image:height" content={String(image.height)} />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- built above from constants, not user input -->
	{@html structuredDataTag}
</svelte:head>
