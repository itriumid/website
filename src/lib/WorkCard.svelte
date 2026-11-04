<script lang="ts">
	import { resolve } from '$app/paths';
	import Screenshot from '#lib/Screenshot.svelte';
	import lintechLight from '#lib/screenshots/lintech-home-light.webp';
	import { LINTECH, WORK } from '#lib/content.js';

	interface Props {
		/** The heading level that fits under the page's own headings. */
		level?: 'h2' | 'h3';
	}

	const { level = 'h3' }: Props = $props();
</script>

<!-- A client's site in its light theme, its name and summary; the whole card links to the case
     study. Shown on the home page and on /work. -->
<a
	href={resolve('/work/lintech-shipping')}
	class="grid items-center gap-8 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-text md:grid-cols-2"
>
	<Screenshot
		light={lintechLight}
		alt=""
		width={1440}
		height={960}
		class="rounded-xl border border-border"
	/>
	<div>
		<svelte:element this={level} class="text-2xl font-semibold tracking-tight"
			>{LINTECH.name}</svelte:element
		>
		<p class="mt-3 text-lg leading-relaxed text-muted">{LINTECH.summary}</p>
		<p class="mt-4 underline underline-offset-4">{WORK.more}</p>
	</div>
</a>
