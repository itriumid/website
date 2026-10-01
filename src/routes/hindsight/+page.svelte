<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { primaryButton, secondaryButton } from '$lib/styles';
	import { FREE_PROMISE, HINDSIGHT, SITE_URL } from '$lib/content';

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

	const link = 'underline underline-offset-4 hover:text-text';
</script>

<Seo
	title={HINDSIGHT.title}
	description={HINDSIGHT.description}
	path="/hindsight"
	structuredData={application}
/>

<section class="mx-auto max-w-5xl px-5 pt-16 pb-20 sm:px-8 sm:pt-24">
	<p class="text-sm font-semibold tracking-widest text-muted uppercase">Free tool</p>
	<h1 class="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">Hindsight</h1>
	<p class="mt-5 max-w-2xl text-2xl leading-snug font-medium text-balance sm:text-3xl">
		{HINDSIGHT.tagline}
	</p>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{HINDSIGHT.introduction}</p>
	<div class="mt-10 flex flex-wrap gap-3">
		<a href="#download" class={primaryButton}>Download Hindsight</a>
		<a href={HINDSIGHT.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
	</div>
</section>

<section class="border-t border-border">
	<ul class="mx-auto grid max-w-5xl gap-4 px-5 py-20 sm:px-8 lg:grid-cols-3">
		{#each HINDSIGHT.promises as promise (promise.title)}
			<li class="rounded-2xl border border-border bg-surface p-6">
				<h2 class="text-lg font-semibold">{promise.title}</h2>
				<p class="mt-3 leading-relaxed text-muted">{promise.body}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="border-t border-border">
	<ul
		class="mx-auto grid max-w-5xl gap-x-10 gap-y-8 px-5 py-20 sm:grid-cols-2 sm:px-8 lg:grid-cols-4"
	>
		{#each HINDSIGHT.features as feature (feature.title)}
			<li>
				<h2 class="font-semibold">{feature.title}</h2>
				<p class="mt-2 leading-relaxed text-muted">{feature.body}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-3xl font-bold tracking-tight">{HINDSIGHT.people.heading}</h2>
		<p class="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{HINDSIGHT.people.body}</p>
	</div>
</section>

<section id="download" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-3xl font-bold tracking-tight">Download</h2>
		<ul class="mt-8 grid gap-4 lg:grid-cols-3">
			{#each HINDSIGHT.downloads as download (download.system)}
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
						<p class="mt-5 text-sm text-muted">{HINDSIGHT.installHint}</p>
						<pre
							class="mt-2 rounded-lg border border-border bg-bg px-4 py-3 text-sm whitespace-pre-wrap"><code
								class="cursor-text select-all">{download.install}</code
							></pre>
					{/if}
				</li>
			{/each}
		</ul>
		<p class="mt-6 text-sm text-muted">
			{HINDSIGHT.allDownloads.body}
			<a href={HINDSIGHT.allDownloads.url} rel="external" class={link}>See all releases</a>
		</p>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="max-w-2xl text-3xl font-bold tracking-tight text-balance">
			{HINDSIGHT.unsigned.heading}
		</h2>
		<p class="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{HINDSIGHT.unsigned.body}</p>
		<dl class="mt-10 grid gap-8 lg:grid-cols-3">
			{#each HINDSIGHT.unsigned.steps as step (step.system)}
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
