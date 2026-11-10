<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';

	// A screenshot in both themes: the browser picks the one matching the visitor's, the same way
	// the logo in the header does. Without `dark`, everyone sees the light one: a client's site is
	// shown the way it looks best, whatever our theme. Each picture is imported with ?enhanced and
	// a list of widths, so the build writes smaller copies and `sizes` lets the browser fetch one
	// no bigger than it needs. Width and height come from the files themselves, so the page doesn't
	// jump while the image loads.
	interface ScreenshotProps {
		dark?: Picture;
		light: Picture;
		alt: string;
		/** How wide it shows, for choosing a copy: a `sizes` attribute. */
		sizes?: string;
		class?: string;
		/** Below the fold, so the browser can wait before fetching it. */
		lazy?: boolean;
	}

	const {
		dark,
		light,
		alt,
		sizes = '(min-width: 64rem) 64rem, 100vw',
		class: className = '',
		lazy = true
	}: ScreenshotProps = $props();
</script>

<picture>
	{#if dark}
		{#each Object.entries(dark.sources) as [format, srcset] (format)}
			<source type="image/{format}" {srcset} {sizes} media="(prefers-color-scheme: dark)" />
		{/each}
	{/if}
	{#each Object.entries(light.sources) as [format, srcset] (format)}
		<source type="image/{format}" {srcset} {sizes} />
	{/each}
	<img
		src={light.img.src}
		{alt}
		width={light.img.w}
		height={light.img.h}
		loading={lazy ? 'lazy' : 'eager'}
		decoding="async"
		class="h-auto w-full {className}"
	/>
</picture>
