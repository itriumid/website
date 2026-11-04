<script lang="ts">
	import ClosingPanel from '#lib/ClosingPanel.svelte';
	import Screenshot from '#lib/Screenshot.svelte';
	import PageHero from '#lib/PageHero.svelte';
	import Seo from '#lib/Seo.svelte';
	import drajatLight from '#lib/screenshots/lintech-drajat-light.webp';
	import facilityLight from '#lib/screenshots/lintech-facility-light.webp';
	import homeLight from '#lib/screenshots/lintech-home-light.webp';
	import { primaryButton, secondaryButton } from '#lib/styles.js';
	import { EMAIL, LINTECH } from '#lib/content.js';

	// Each highlight's screenshot: the client's site at 1440 by 960, in its light theme for every
	// visitor (its ivory and blue sit better beside our colors than its navy does).
	const images = { drajat: drajatLight, facility: facilityLight };
</script>

<Seo
	title={LINTECH.title}
	description={LINTECH.description}
	path="/work/lintech-shipping"
	image={LINTECH.socialImage}
/>

<PageHero
	label="Client work"
	title={LINTECH.name}
	tagline={LINTECH.tagline}
	introduction={LINTECH.introduction}
>
	{#snippet actions()}
		<a href={LINTECH.siteUrl} rel="external" class={primaryButton}>{LINTECH.siteLabel}</a>
	{/snippet}
	{#snippet media()}
		<Screenshot
			light={homeLight}
			alt={LINTECH.screenshot}
			width={1440}
			height={960}
			lazy={false}
			class="rounded-2xl border border-border"
		/>
	{/snippet}
</PageHero>

<section>
	<div class="mx-auto max-w-5xl space-y-20 px-5 py-20 sm:px-8">
		{#each LINTECH.highlights as highlight, index (highlight.title)}
			{@const image = images[highlight.image]}
			<div class="reveal grid items-center gap-8 md:grid-cols-2 md:gap-12">
				<div class={index % 2 === 1 ? 'md:order-last' : ''}>
					<h2 class="text-2xl font-semibold tracking-tight">{highlight.title}</h2>
					<p class="mt-3 text-lg leading-relaxed text-muted">{highlight.body}</p>
				</div>
				<Screenshot
					light={image}
					alt={highlight.alt}
					width={1440}
					height={960}
					class="rounded-2xl border border-border"
				/>
			</div>
		{/each}
	</div>
</section>

<section class="border-t border-border">
	<ul
		class="mx-auto grid max-w-5xl gap-x-10 gap-y-8 px-5 py-20 sm:grid-cols-2 sm:px-8 lg:grid-cols-4"
	>
		{#each LINTECH.features as feature (feature.title)}
			<li>
				<h2 class="font-semibold">{feature.title}</h2>
				<p class="mt-2 leading-relaxed text-muted">{feature.body}</p>
			</li>
		{/each}
	</ul>
</section>

<ClosingPanel>
	<h2 class="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
		{LINTECH.closing.heading}
	</h2>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{LINTECH.closing.body}</p>
	<div class="mt-8 flex flex-wrap gap-3">
		<a href="mailto:{EMAIL}" class={primaryButton}>{EMAIL}</a>
		<a href={LINTECH.siteUrl} rel="external" class={secondaryButton}>{LINTECH.siteLabel}</a>
	</div>
</ClosingPanel>
