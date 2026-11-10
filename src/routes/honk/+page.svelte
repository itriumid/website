<script lang="ts">
	import { resolve } from '$app/paths';
	import ClosingPanel from '#lib/ClosingPanel.svelte';
	import Screenshot from '#lib/Screenshot.svelte';
	import PageHero from '#lib/PageHero.svelte';
	import Downloads from '#lib/Downloads.svelte';
	import Seo from '#lib/Seo.svelte';
	import categoryDark from '#lib/screenshots/category-dark.webp?w=400;800;1180&enhanced';
	import categoryLight from '#lib/screenshots/category-light.webp?w=400;800;1180&enhanced';
	import importDark from '#lib/screenshots/import-dark.webp?w=400;800;1160&enhanced';
	import importLight from '#lib/screenshots/import-light.webp?w=400;800;1160&enhanced';
	import mainDark from '#lib/screenshots/main-dark.webp?w=400;800;1200;1600;2224&enhanced';
	import mainLight from '#lib/screenshots/main-light.webp?w=400;800;1200;1600;2224&enhanced';
	import popoverDark from '#lib/screenshots/popover-dark.webp?w=400;640&enhanced';
	import popoverLight from '#lib/screenshots/popover-light.webp?w=400;640&enhanced';
	import { primaryButton, secondaryButton, sectionHeading } from '#lib/styles.js';
	import { FREE_PROMISE, FREE_STUFF, HONK, SITE_URL } from '#lib/content.js';

	const application = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Honk',
		description: HONK.description,
		url: `${SITE_URL}/honk`,
		applicationCategory: 'MultimediaApplication',
		operatingSystem: 'macOS, Windows, Linux',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: SITE_URL }
	};

	// Each highlight's screenshot pair, with the files' own pixel sizes.
	const images = {
		popover: { dark: popoverDark, light: popoverLight },
		category: { dark: categoryDark, light: categoryLight },
		import: { dark: importDark, light: importLight }
	};
</script>

<Seo title={HONK.title} description={HONK.description} path="/honk" structuredData={application} />

<PageHero title="Honk" tagline={HONK.tagline} introduction={HONK.introduction}>
	{#snippet actions()}
		<a href="#download" class={primaryButton}>Download Honk</a>
		<a href={HONK.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
	{/snippet}
	{#snippet media()}
		<Screenshot dark={mainDark} light={mainLight} alt={HONK.screenshot} lazy={false} />
	{/snippet}
</PageHero>

<section>
	<div class="mx-auto max-w-5xl space-y-20 px-5 py-20 sm:px-8">
		{#each HONK.highlights as highlight, index (highlight.title)}
			{@const image = images[highlight.image]}
			<div class="reveal grid items-center gap-8 md:grid-cols-2 md:gap-12">
				<div class={index % 2 === 1 ? 'md:order-last' : ''}>
					<h2 class="text-2xl font-semibold tracking-tight">{highlight.title}</h2>
					<p class="mt-3 text-lg leading-relaxed text-muted">{highlight.body}</p>
				</div>
				<div class={highlight.image === 'popover' ? 'mx-auto w-full max-w-xs' : ''}>
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
		<ul class="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each HONK.features as feature (feature.title)}
				<li>
					<h3 class="font-semibold">{feature.title}</h3>
					<p class="mt-2 leading-relaxed text-muted">{feature.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<Downloads
	downloads={HONK.downloads}
	unsigned={HONK.unsigned}
	allDownloads={HONK.allDownloads}
	sourceUrl={HONK.sourceUrl}
/>

<ClosingPanel>
	<p class="max-w-3xl text-2xl leading-snug font-medium text-balance sm:text-3xl">{FREE_PROMISE}</p>
	<div class="mt-8">
		<a href={resolve('/free-stuff')} class={secondaryButton}>{FREE_STUFF.more}</a>
	</div>
</ClosingPanel>
