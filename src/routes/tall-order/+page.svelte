<script lang="ts">
	import Screenshot from '#lib/Screenshot.svelte';
	import Seo from '#lib/Seo.svelte';
	import dialog from '#lib/screenshots/tall-order-dialog.webp';
	import fight from '#lib/screenshots/tall-order-fight.webp';
	import map from '#lib/screenshots/tall-order-map.webp';
	import village from '#lib/screenshots/tall-order-village.webp';
	import { primaryButton, secondaryButton } from '#lib/styles.js';
	import { EMAIL, FREE_PROMISE, SITE_URL, TALL_ORDER } from '#lib/content.js';

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

	const link = 'underline underline-offset-4 hover:text-text';
</script>

<Seo
	title={TALL_ORDER.title}
	description={TALL_ORDER.description}
	path="/tall-order"
	structuredData={game}
/>

<section class="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24">
	<p class="text-sm font-semibold tracking-widest text-muted uppercase">Free game</p>
	<h1 class="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">Felterra: Tall Order</h1>
	<p class="mt-5 max-w-2xl text-2xl leading-snug font-medium text-balance sm:text-3xl">
		{TALL_ORDER.tagline}
	</p>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{TALL_ORDER.introduction}</p>
	<div class="mt-10 flex flex-wrap gap-3">
		<a href="#download" class={primaryButton}>Download Tall Order</a>
		<a href={TALL_ORDER.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
	</div>
</section>

<div class="mx-auto max-w-4xl px-2 pb-16 sm:px-4">
	<Screenshot
		dark={fight}
		light={fight}
		alt={TALL_ORDER.screenshot}
		width={1280}
		height={720}
		lazy={false}
		class="rounded-xl border border-border [image-rendering:pixelated]"
	/>
</div>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl space-y-20 px-5 py-20 sm:px-8">
		{#each TALL_ORDER.highlights.slice(1) as highlight, index (highlight.title)}
			<div class="grid items-center gap-8 md:grid-cols-2 md:gap-12">
				<div class={index % 2 === 1 ? 'md:order-last' : ''}>
					<h2 class="text-2xl font-semibold tracking-tight">{highlight.title}</h2>
					<p class="mt-3 text-lg leading-relaxed text-muted">{highlight.body}</p>
				</div>
				<Screenshot
					dark={images[highlight.image]}
					light={images[highlight.image]}
					alt={highlight.alt}
					width={1280}
					height={720}
					class="rounded-xl border border-border [image-rendering:pixelated]"
				/>
			</div>
		{/each}
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-2xl font-semibold tracking-tight">{TALL_ORDER.highlights[0].title}</h2>
		<p class="mt-3 max-w-3xl text-lg leading-relaxed text-muted">{TALL_ORDER.highlights[0].body}</p>
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
	<ul class="mx-auto grid max-w-5xl gap-4 px-5 py-20 sm:px-8 lg:grid-cols-3">
		{#each [TALL_ORDER.free, TALL_ORDER.art, TALL_ORDER.together] as part (part.heading)}
			<li class="rounded-2xl border border-border bg-surface p-6">
				<h2 class="text-lg font-semibold">{part.heading}</h2>
				<p class="mt-3 leading-relaxed text-muted">{part.body}</p>
				{#if part === TALL_ORDER.together}
					<p class="mt-4"><a href="mailto:{EMAIL}" class={link}>{EMAIL}</a></p>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<section id="download" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-3xl font-bold tracking-tight">Download</h2>
		<p class="mt-3 text-muted">{TALL_ORDER.downloadsNote}</p>
		<ul class="mt-8 grid gap-4 lg:grid-cols-3">
			{#each TALL_ORDER.downloads as download (download.system)}
				<li class="flex flex-col rounded-2xl border border-border bg-surface p-6">
					<h3 class="text-xl font-semibold">{download.system}</h3>
					<p class="mt-2 text-sm text-muted">{download.note}</p>
					<div class="mt-5">
						<a href={download.primary.url} rel="external" class={secondaryButton}
							>{download.primary.label}</a
						>
					</div>
					{#if download.others.length > 0}
						<ul class="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
							{#each download.others as other (other.url)}
								<li><a href={other.url} rel="external" class={link}>{other.label}</a></li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
		<p class="mt-6 text-sm text-muted">
			{TALL_ORDER.allDownloads.body}
			<a href={TALL_ORDER.allDownloads.url} rel="external" class={link}>See all releases</a>
		</p>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="max-w-2xl text-3xl font-bold tracking-tight text-balance">
			{TALL_ORDER.unsigned.heading}
		</h2>
		<p class="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{TALL_ORDER.unsigned.body}</p>
		<dl class="mt-10 grid gap-8 lg:grid-cols-3">
			{#each TALL_ORDER.unsigned.steps as step (step.system)}
				<div>
					<dt class="font-semibold">{step.system}</dt>
					<dd class="mt-2 leading-relaxed text-muted">{step.body}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<p class="max-w-3xl text-xl leading-relaxed">{FREE_PROMISE}</p>
	</div>
</section>
