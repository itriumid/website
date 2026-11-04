<script lang="ts">
	import { resolve } from '$app/paths';
	import Screenshot from '#lib/Screenshot.svelte';
	import lintechHome from '#lib/screenshots/lintech-home-light.webp';
	import lintechDrajat from '#lib/screenshots/lintech-drajat-light.webp';
	import { LINTECH, WORK } from '#lib/content.js';

	interface Props {
		/** The heading level that fits under the page's own headings. */
		level?: 'h2' | 'h3';
	}

	const { level = 'h3' }: Props = $props();
</script>

<!-- A client's site: its name, tagline, summary and a few facts beside its pages, fanned out on a
     pink panel that runs off the card's edge. The whole card links to the case study. Shown on the
     home page and on /work. Client sites are shown in their light theme, whatever ours. -->
<a
	href={resolve('/work/lintech-shipping')}
	class="group grid overflow-hidden rounded-3xl border border-border bg-surface transition hover:-translate-y-1 hover:border-accent-edge md:grid-cols-[1fr_1.15fr]"
>
	<div class="flex flex-col p-8 sm:p-10">
		<svelte:element this={level} class="text-sm font-semibold text-muted"
			>{LINTECH.name}</svelte:element
		>
		<p class="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
			{LINTECH.tagline}
		</p>
		<p class="mt-4 text-lg leading-relaxed text-muted">{LINTECH.summary}</p>
		<ul class="mt-6 flex flex-wrap gap-2 text-sm">
			{#each LINTECH.facts as fact (fact)}
				<li class="rounded-full border border-accent-edge px-3 py-1">{fact}</li>
			{/each}
		</ul>
		<p class="mt-auto pt-8 font-semibold text-accent-text">
			{WORK.more}
			<span class="inline-block transition-transform group-hover:translate-x-1" aria-hidden="true"
				>→</span
			>
		</p>
	</div>
	<div class="relative min-h-72 overflow-hidden bg-accent/25 sm:min-h-96" aria-hidden="true">
		<div class="absolute top-10 left-8 w-[88%] transition-transform group-hover:-translate-y-1">
			<Screenshot
				light={lintechHome}
				alt=""
				width={1440}
				height={960}
				class="rounded-xl border border-border shadow-2xl shadow-black/25"
			/>
		</div>
		<div
			class="absolute top-[45%] -right-[12%] w-[62%] transition-transform group-hover:-translate-x-1"
		>
			<Screenshot
				light={lintechDrajat}
				alt=""
				width={1440}
				height={960}
				class="rounded-xl border border-border shadow-2xl shadow-black/30"
			/>
		</div>
	</div>
</a>
