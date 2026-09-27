<script lang="ts">
	import Screenshot from '$lib/Screenshot.svelte';
	import Seo from '$lib/Seo.svelte';
	import categoryDark from '$lib/screenshots/category-dark.webp';
	import categoryLight from '$lib/screenshots/category-light.webp';
	import importDark from '$lib/screenshots/import-dark.webp';
	import importLight from '$lib/screenshots/import-light.webp';
	import mainDark from '$lib/screenshots/main-dark.webp';
	import mainLight from '$lib/screenshots/main-light.webp';
	import popoverDark from '$lib/screenshots/popover-dark.webp';
	import popoverLight from '$lib/screenshots/popover-light.webp';
	import { primaryButton, secondaryButton } from '$lib/styles';
	import { FREE_PROMISE, HONK, SITE_URL } from '$lib/content';

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
		popover: { dark: popoverDark, light: popoverLight, width: 640, height: 880 },
		category: { dark: categoryDark, light: categoryLight, width: 1180, height: 548 },
		import: { dark: importDark, light: importLight, width: 1160, height: 880 }
	};

	const link = 'underline underline-offset-4 hover:text-text';
</script>

<Seo title={HONK.title} description={HONK.description} path="/honk" structuredData={application} />

<section class="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24">
	<p class="text-sm font-semibold tracking-widest text-muted uppercase">Free tool</p>
	<h1 class="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">Honk</h1>
	<p class="mt-5 max-w-2xl text-2xl leading-snug font-medium text-balance sm:text-3xl">
		{HONK.tagline}
	</p>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{HONK.introduction}</p>
	<div class="mt-10 flex flex-wrap gap-3">
		<a href="#download" class={primaryButton}>Download Honk</a>
		<a href={HONK.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
	</div>
</section>

<!-- The main window, with its own shadow baked in, so it sits straight on the page. -->
<div class="mx-auto max-w-5xl px-2 pb-16 sm:px-4">
	<Screenshot
		dark={mainDark}
		light={mainLight}
		alt={HONK.screenshot}
		width={2000}
		height={1373}
		lazy={false}
	/>
</div>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl space-y-20 px-5 py-20 sm:px-8">
		{#each HONK.highlights as highlight, index (highlight.title)}
			{@const image = images[highlight.image]}
			<div class="grid items-center gap-8 md:grid-cols-2 md:gap-12">
				<div class={index % 2 === 1 ? 'md:order-last' : ''}>
					<h2 class="text-2xl font-semibold tracking-tight">{highlight.title}</h2>
					<p class="mt-3 text-lg leading-relaxed text-muted">{highlight.body}</p>
				</div>
				<div class={highlight.image === 'popover' ? 'mx-auto w-full max-w-xs' : ''}>
					<Screenshot
						dark={image.dark}
						light={image.light}
						alt={highlight.alt}
						width={image.width}
						height={image.height}
						class="rounded-xl border border-border"
					/>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="border-t border-border">
	<ul class="mx-auto grid max-w-5xl gap-x-10 gap-y-8 px-5 py-20 sm:grid-cols-3 sm:px-8">
		{#each HONK.features as feature (feature.title)}
			<li>
				<h2 class="font-semibold">{feature.title}</h2>
				<p class="mt-2 leading-relaxed text-muted">{feature.body}</p>
			</li>
		{/each}
	</ul>
</section>

<section id="download" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-3xl font-bold tracking-tight">Download</h2>
		<ul class="mt-8 grid gap-4 lg:grid-cols-3">
			{#each HONK.downloads as download (download.system)}
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
					{#if download.install}
						<p class="mt-5 text-sm text-muted">{HONK.installHint}</p>
						<pre
							class="mt-2 rounded-lg border border-border bg-bg px-4 py-3 text-sm whitespace-pre-wrap"><code
								class="cursor-text select-all">{download.install}</code
							></pre>
					{/if}
				</li>
			{/each}
		</ul>
		<p class="mt-6 text-sm text-muted">
			{HONK.allDownloads.body}
			<a href={HONK.allDownloads.url} rel="external" class={link}>See all releases</a>
		</p>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="max-w-2xl text-3xl font-bold tracking-tight text-balance">
			{HONK.unsigned.heading}
		</h2>
		<p class="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{HONK.unsigned.body}</p>
		<dl class="mt-10 grid gap-8 lg:grid-cols-3">
			{#each HONK.unsigned.steps as step (step.system)}
				<div>
					<dt class="font-semibold">{step.system}</dt>
					<dd class="mt-2 leading-relaxed text-muted">{step.body}</dd>
				</div>
			{/each}
		</dl>
		<p class="mt-8 text-sm text-muted">
			<a href={HONK.unsigned.moreUrl} rel="external" class={link}>The full steps, with details</a>
		</p>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<p class="max-w-3xl text-xl leading-relaxed">{FREE_PROMISE}</p>
	</div>
</section>
