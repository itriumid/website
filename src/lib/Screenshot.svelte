<script lang="ts">
	// A screenshot in both themes: the browser picks the one matching the visitor's, the same way
	// the logo in the header does. Width and height are the files' own, so the page doesn't jump
	// while the image loads.
	interface ScreenshotProps {
		dark: string;
		light: string;
		alt: string;
		width: number;
		height: number;
		class?: string;
		/** Below the fold, so the browser can wait before fetching it. */
		lazy?: boolean;
	}

	const {
		dark,
		light,
		alt,
		width,
		height,
		class: className = '',
		lazy = true
	}: ScreenshotProps = $props();
</script>

<picture>
	<source srcset={dark} media="(prefers-color-scheme: dark)" />
	<img
		src={light}
		{alt}
		{width}
		{height}
		loading={lazy ? 'lazy' : 'eager'}
		decoding="async"
		class="h-auto w-full {className}"
	/>
</picture>
