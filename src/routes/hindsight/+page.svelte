<script lang="ts">
	import { resolve } from '$app/paths';
	import ClosingPanel from '#lib/ClosingPanel.svelte';
	import Screenshot from '#lib/Screenshot.svelte';
	import PageHero from '#lib/PageHero.svelte';
	import Downloads from '#lib/Downloads.svelte';
	import Seo from '#lib/Seo.svelte';
	import colorsDark from '#lib/screenshots/hindsight-colors-dark.webp?w=400;800;1200;1600&enhanced';
	import colorsLight from '#lib/screenshots/hindsight-colors-light.webp?w=400;800;1200;1600&enhanced';
	import heroDark from '#lib/screenshots/hindsight-hero-dark.webp?w=400;800;1200;1600;1824&enhanced';
	import heroLight from '#lib/screenshots/hindsight-hero-light.webp?w=400;800;1200;1600;1824&enhanced';
	import menuDark from '#lib/screenshots/hindsight-menu-dark.webp?w=400;562&enhanced';
	import menuLight from '#lib/screenshots/hindsight-menu-light.webp?w=400;562&enhanced';
	import timelineDark from '#lib/screenshots/hindsight-timeline-dark.webp?w=400;800;1200;1600&enhanced';
	import timelineLight from '#lib/screenshots/hindsight-timeline-light.webp?w=400;800;1200;1600&enhanced';
	import { primaryButton, secondaryButton, sectionHeading } from '#lib/styles.js';
	import { FREE_PROMISE, FREE_STUFF, HINDSIGHT, SITE_URL } from '#lib/content.js';

	const application = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Hindsight',
		description: HINDSIGHT.description,
		url: `${SITE_URL}/hindsight`,
		applicationCategory: 'UtilitiesApplication',
		operatingSystem: 'macOS, Windows, Linux',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: SITE_URL }
	};

	// Each highlight's screenshot pair, with the files' own pixel sizes.
	const images = {
		timeline: { dark: timelineDark, light: timelineLight },
		menu: { dark: menuDark, light: menuLight },
		colors: { dark: colorsDark, light: colorsLight }
	};
</script>

<Seo
	title={HINDSIGHT.title}
	description={HINDSIGHT.description}
	path="/hindsight"
	structuredData={application}
/>

<PageHero title="Hindsight" tagline={HINDSIGHT.tagline} introduction={HINDSIGHT.introduction}>
	{#snippet actions()}
		<a href="#download" class={primaryButton}>Download Hindsight</a>
		<a href={HINDSIGHT.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
	{/snippet}
	{#snippet media()}
		<Screenshot dark={heroDark} light={heroLight} alt={HINDSIGHT.screenshot} lazy={false} />
	{/snippet}
</PageHero>

<section>
	<div class="mx-auto max-w-5xl space-y-20 px-5 py-20 sm:px-8">
		{#each HINDSIGHT.highlights as highlight, index (highlight.title)}
			{@const image = images[highlight.image]}
			<div class="reveal grid items-center gap-8 md:grid-cols-2 md:gap-12">
				<div class={index % 2 === 1 ? 'md:order-last' : ''}>
					<h2 class="text-2xl font-semibold tracking-tight">{highlight.title}</h2>
					<p class="mt-3 text-lg leading-relaxed text-muted">{highlight.body}</p>
				</div>
				<div class={highlight.image === 'menu' ? 'mx-auto w-full max-w-xs' : ''}>
					<Screenshot
						dark={image.dark}
						light={image.light}
						alt={highlight.alt}
						sizes="(min-width: 48rem) 30rem, 100vw"
						class="rounded-xl border border-border"
					/>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class={sectionHeading}>The details</h2>
		<ul class="mt-8 grid gap-x-10 gap-y-8 lg:grid-cols-3">
			{#each HINDSIGHT.promises as promise (promise.title)}
				<li>
					<h3 class="text-xl font-bold tracking-tight">{promise.title}</h3>
					<p class="mt-2 leading-relaxed text-muted">{promise.body}</p>
				</li>
			{/each}
		</ul>
		<ul
			class="mt-12 grid gap-x-10 gap-y-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4"
		>
			{#each HINDSIGHT.features as feature (feature.title)}
				<li>
					<h3 class="font-semibold">{feature.title}</h3>
					<p class="mt-2 leading-relaxed text-muted">{feature.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class={sectionHeading}>{HINDSIGHT.people.heading}</h2>
		<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{HINDSIGHT.people.body}</p>
	</div>
</section>

<Downloads
	downloads={HINDSIGHT.downloads}
	unsigned={HINDSIGHT.unsigned}
	allDownloads={HINDSIGHT.allDownloads}
	installHint={HINDSIGHT.installHint}
	sourceUrl={HINDSIGHT.sourceUrl}
/>

<ClosingPanel>
	<p class="max-w-3xl text-2xl leading-snug font-medium text-balance sm:text-3xl">{FREE_PROMISE}</p>
	<div class="mt-8">
		<a href={resolve('/free-stuff')} class={secondaryButton}>{FREE_STUFF.more}</a>
	</div>
</ClosingPanel>
