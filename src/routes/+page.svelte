<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/Seo.svelte';
	import { primaryButton, secondaryButton } from '$lib/styles';
	import {
		CONTACT_BODY,
		CONTACT_HEADING,
		DESCRIPTION,
		EMAIL,
		FREE_PROMISE,
		GITHUB_URL,
		GRAY_AREA,
		INTRODUCTION,
		PRINCIPLES,
		SECURITY_EMAIL,
		SERVICES,
		SITE_URL,
		TAGLINE,
		TITLE,
		TOOLS,
		WEB_TOOLS
	} from '$lib/content';

	const organization = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Itrium',
		url: SITE_URL,
		logo: `${SITE_URL}/icon-512.png`,
		email: EMAIL,
		description: DESCRIPTION,
		sameAs: [GITHUB_URL]
	};
</script>

<Seo title={TITLE} description={DESCRIPTION} path="/" structuredData={organization} />

<section class="mx-auto max-w-5xl px-5 pt-16 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
	<h1 class="max-w-3xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-6xl">
		{TAGLINE}
	</h1>
	<p class="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{INTRODUCTION}</p>
	<div class="mt-10 flex flex-wrap gap-3">
		<a href="#contact" class={primaryButton}>Say hello</a>
		<a href="#tools" class={secondaryButton}>See our free tools</a>
	</div>
</section>

<section id="services" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-sm font-semibold tracking-widest text-muted uppercase">What we do</h2>
		<ul class="mt-8 grid gap-4 sm:grid-cols-3">
			{#each SERVICES as service (service.title)}
				<li class="rounded-2xl border border-border bg-surface p-6">
					<h3 class="text-lg font-semibold">{service.title}</h3>
					<p class="mt-3 leading-relaxed text-muted">{service.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section id="tools" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-sm font-semibold tracking-widest text-muted uppercase">Free tools</h2>
		<ul class="mt-8 space-y-4">
			{#each TOOLS as tool (tool.name)}
				<li class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
					<div class="flex flex-wrap items-baseline justify-between gap-2">
						<h3 class="text-2xl font-semibold">{tool.name}</h3>
						<p class="text-sm text-muted">{tool.platforms}</p>
					</div>
					<p class="mt-3 max-w-2xl leading-relaxed text-muted">{tool.body}</p>
					<p class="mt-5 text-sm text-muted">{tool.installHint}</p>
					<!-- One click selects the whole command, ready to copy. A copy button would need
					     JavaScript, and the site runs none. -->
					<pre
						class="mt-2 overflow-x-auto rounded-lg border border-border bg-bg px-4 py-3 text-sm"><code
							class="cursor-text select-all">{tool.install}</code
						></pre>
					<div class="mt-6 flex flex-wrap gap-3">
						<a href={resolve(tool.page)} class={secondaryButton}>{tool.pageLabel}</a>
						<a href={tool.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
					</div>
				</li>
			{/each}
			<li class="rounded-2xl border border-border bg-surface p-6 sm:p-8">
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<h3 class="text-2xl font-semibold">{WEB_TOOLS.name}</h3>
					<p class="text-sm text-muted">{WEB_TOOLS.platforms}</p>
				</div>
				<p class="mt-3 max-w-2xl leading-relaxed text-muted">{WEB_TOOLS.body}</p>
				<div class="mt-6 flex flex-wrap gap-3">
					<a href={WEB_TOOLS.url} rel="external" class={secondaryButton}>{WEB_TOOLS.label}</a>
					<a href={WEB_TOOLS.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
				</div>
			</li>
		</ul>
		<p class="mt-8 max-w-3xl leading-relaxed text-muted">{FREE_PROMISE}</p>
	</div>
</section>

<section id="how-we-work" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto grid max-w-5xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
		<div>
			<h2 class="text-sm font-semibold tracking-widest text-muted uppercase">How we work</h2>
			{#each GRAY_AREA as paragraph, index (index)}
				<p class="mt-6 text-xl leading-relaxed {index === 0 ? '' : 'text-muted'}">{paragraph}</p>
			{/each}
		</div>
		<dl class="grid gap-6 sm:grid-cols-2 lg:mt-12">
			{#each PRINCIPLES as principle (principle.title)}
				<div>
					<dt class="font-semibold">{principle.title}</dt>
					<dd class="mt-2 leading-relaxed text-muted">{principle.body}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<section id="contact" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-24 sm:px-8">
		<h2 class="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
			{CONTACT_HEADING}
		</h2>
		<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{CONTACT_BODY}</p>
		<div class="mt-8">
			<a href="mailto:{EMAIL}" class={primaryButton}>{EMAIL}</a>
		</div>
		<p class="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
			Found a security problem in something we make? Write to
			<a href="mailto:{SECURITY_EMAIL}" class="underline underline-offset-4 hover:text-text"
				>{SECURITY_EMAIL}</a
			> instead, so it stays private until it's fixed.
		</p>
	</div>
</section>
