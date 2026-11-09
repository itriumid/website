<script lang="ts">
	import Arrow from '#lib/Arrow.svelte';
	import { resolve } from '$app/paths';
	import Screenshot from '#lib/Screenshot.svelte';
	import lintechFacility from '#lib/screenshots/lintech-facility-light.webp';
	import lintechDrajat from '#lib/screenshots/lintech-drajat-light.webp';
	import { LINTECH, WORK } from '#lib/content.js';

	interface Props {
		/** The heading level that fits under the page's own headings. */
		level?: 'h2' | 'h3';
	}

	const { level = 'h3' }: Props = $props();
</script>

<!-- A client's site: its name, tagline, summary and a few facts beside its pages, fanned out on a
     pink panel that runs off the card's edge (on graphite, the plain card: a pink tint there turns a
     muddy mauve). It shows pages the home page's hero doesn't, so the same
     screenshot never appears twice in one scroll. The whole card links to the case study. Shown on the
     home page and on /work. Client sites are shown in their light theme, whatever ours. -->
<a
	href={resolve('/work/lintech-shipping')}
	class="group grid overflow-hidden rounded-3xl border border-border bg-surface transition hover:border-accent-edge motion-safe:hover:-translate-y-1 md:grid-cols-[1fr_1.15fr]"
>
	<div class="flex flex-col p-8 sm:p-10">
		<!-- The tagline is the heading; the client's name follows it as a byline, not above it. -->
		<svelte:element this={level} class="text-3xl font-bold tracking-tight text-balance sm:text-4xl"
			>{LINTECH.tagline}</svelte:element
		>
		<p class="mt-2 text-sm font-semibold text-accent-text">{LINTECH.name}</p>
		<p class="mt-4 text-lg leading-relaxed text-muted">{LINTECH.summary}</p>
		<ul class="mt-6 flex flex-wrap gap-2 text-sm">
			{#each LINTECH.facts as fact (fact)}
				<li class="rounded-full border border-accent-edge px-3 py-1">{fact}</li>
			{/each}
		</ul>
		<p class="mt-auto pt-8 font-semibold text-accent-text">
			{WORK.more}
			<Arrow class="transition-transform motion-safe:group-hover:translate-x-1" />
		</p>
	</div>
	<div
		class="relative min-h-72 overflow-hidden bg-accent/25 sm:min-h-96 dark:bg-transparent"
		aria-hidden="true"
	>
		<div
			class="absolute top-10 left-8 w-[88%] transition-transform motion-safe:group-hover:-translate-y-1"
		>
			<Screenshot
				light={lintechFacility}
				alt=""
				width={1440}
				height={960}
				class="rounded-xl border border-border shadow-2xl shadow-black/25"
			/>
		</div>
		<div
			class="absolute top-[45%] -right-[12%] w-[62%] transition-transform motion-safe:group-hover:-translate-x-1"
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
