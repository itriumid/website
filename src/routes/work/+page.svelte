<script lang="ts">
	import Seo from '#lib/Seo.svelte';
	import WorkCard from '#lib/WorkCard.svelte';
	import { primaryButton } from '#lib/styles.js';
	import { CONTACT_BODY, CONTACT_HEADING, EMAIL, WORK } from '#lib/content.js';
</script>

<Seo title={WORK.title} description={WORK.description} path="/work" />

<section class="mx-auto max-w-5xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24">
	<h1 class="text-5xl font-bold tracking-tight sm:text-7xl">{WORK.heading}</h1>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{WORK.introduction}</p>
</section>

<!-- One card per client, each as wide as the page, so a single entry looks deliberate. -->
<section class="mx-auto max-w-5xl px-5 pb-20 sm:px-8" aria-label={WORK.heading}>
	<WorkCard level="h2" />
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-sm font-semibold tracking-widest text-accent-text uppercase">
			{WORK.process.heading}
		</h2>
		<ol class="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each WORK.process.steps as step, index (step.title)}
				<li>
					<p class="text-3xl font-bold text-accent-text tabular-nums" aria-hidden="true">
						{String(index + 1).padStart(2, '0')}
					</p>
					<h3 class="mt-3 font-semibold">{step.title}</h3>
					<p class="mt-2 leading-relaxed text-muted">{step.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-24 sm:px-8">
		<h2 class="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
			{CONTACT_HEADING}
		</h2>
		<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{CONTACT_BODY}</p>
		<div class="mt-8">
			<a href="mailto:{EMAIL}" class={primaryButton}>{EMAIL}</a>
		</div>
	</div>
</section>
