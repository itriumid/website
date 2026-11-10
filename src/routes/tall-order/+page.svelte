<script lang="ts">
	import { resolve } from '$app/paths';
	import ClosingPanel from '#lib/ClosingPanel.svelte';
	import Screenshot from '#lib/Screenshot.svelte';
	import PageHero from '#lib/PageHero.svelte';
	import Downloads from '#lib/Downloads.svelte';
	import Seo from '#lib/Seo.svelte';
	import dialog from '#lib/screenshots/tall-order-dialog.webp?w=640;1280&enhanced';
	import fight from '#lib/screenshots/tall-order-fight.webp?w=640;1280&enhanced';
	import map from '#lib/screenshots/tall-order-map.webp?w=640;1280&enhanced';
	import village from '#lib/screenshots/tall-order-village.webp?w=640;1280&enhanced';
	import { primaryButton, secondaryButton, sectionHeading } from '#lib/styles.js';
	import {
		DISCORD_URL,
		EMAIL,
		FREE_PROMISE,
		FREE_STUFF,
		SITE_URL,
		TALL_ORDER
	} from '#lib/content.js';

	const game = {
		'@context': 'https://schema.org',
		'@type': 'VideoGame',
		name: 'Felterra: Tall Order',
		description: TALL_ORDER.description,
		url: `${SITE_URL}/tall-order`,
		genre: 'Action',
		gamePlatform: ['Windows', 'macOS', 'Linux'],
		operatingSystem: 'Windows, macOS, Linux',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: SITE_URL }
	};

	// The game has one look, not a light and a dark, so each screenshot serves both themes. Its
	// pixels are doubled from the game's 640 by 360, whole pixels, so the art stays sharp.
	const images = { fight, map, village, dialog };

	const link =
		'underline decoration-accent-edge decoration-2 underline-offset-4 hover:text-accent-text';
</script>

<Seo
	title={TALL_ORDER.title}
	description={TALL_ORDER.description}
	path="/tall-order"
	structuredData={game}
/>

<PageHero
	title="Felterra: Tall Order"
	tagline={TALL_ORDER.tagline}
	introduction={TALL_ORDER.introduction}
>
	{#snippet actions()}
		<a href="#download" class={primaryButton}>Download Tall Order</a>
		<a href={DISCORD_URL} rel="external" class={secondaryButton}>Join us on Discord</a>
	{/snippet}
	{#snippet media()}
		<Screenshot
			dark={fight}
			light={fight}
			alt={TALL_ORDER.screenshot}
			lazy={false}
			class="rounded-xl border border-border [image-rendering:pixelated]"
		/>
	{/snippet}
</PageHero>

<section>
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class={sectionHeading}>{TALL_ORDER.highlights[0].title}</h2>
		<p class="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{TALL_ORDER.highlights[0].body}</p>
		<ul class="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each TALL_ORDER.features as feature (feature.title)}
				<li>
					<h3 class="font-semibold">{feature.title}</h3>
					<p class="mt-2 leading-relaxed text-muted">{feature.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl space-y-20 px-5 py-20 sm:px-8">
		{#each TALL_ORDER.highlights.slice(1) as highlight, index (highlight.title)}
			<div class="reveal grid items-center gap-8 md:grid-cols-2 md:gap-12">
				<div class={index % 2 === 1 ? 'md:order-last' : ''}>
					<h2 class="text-2xl font-semibold tracking-tight">{highlight.title}</h2>
					<p class="mt-3 text-lg leading-relaxed text-muted">{highlight.body}</p>
				</div>
				<Screenshot
					dark={images[highlight.image]}
					light={images[highlight.image]}
					alt={highlight.alt}
					sizes="(min-width: 48rem) 30rem, 100vw"
					class="rounded-xl border border-border [image-rendering:pixelated]"
				/>
			</div>
		{/each}
	</div>
</section>

<section class="border-t border-border">
	<ul class="mx-auto grid max-w-5xl gap-4 px-5 py-20 sm:px-8 lg:grid-cols-3">
		{#each [TALL_ORDER.free, TALL_ORDER.art, TALL_ORDER.together] as part (part.heading)}
			<li class="rounded-2xl border border-border bg-surface p-6">
				<h2 class="text-lg font-semibold">{part.heading}</h2>
				<p class="mt-3 leading-relaxed text-muted">{part.body}</p>
				{#if part === TALL_ORDER.together}
					<p class="mt-4 flex flex-wrap gap-x-4 gap-y-2">
						<a href="mailto:{EMAIL}" class={link}>{EMAIL}</a>
						<a href={DISCORD_URL} rel="external" class={link}>Discord</a>
					</p>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<Downloads
	downloads={TALL_ORDER.downloads}
	unsigned={TALL_ORDER.unsigned}
	allDownloads={TALL_ORDER.allDownloads}
	note={TALL_ORDER.downloadsNote}
	sourceUrl={TALL_ORDER.sourceUrl}
/>

<ClosingPanel>
	<p class="max-w-3xl text-2xl leading-snug font-medium text-balance sm:text-3xl">{FREE_PROMISE}</p>
	<div class="mt-8">
		<a href={resolve('/free-stuff')} class={secondaryButton}>{FREE_STUFF.more}</a>
	</div>
</ClosingPanel>
