<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/Seo.svelte';
	import { primaryButton, secondaryButton } from '#lib/styles.js';
	import {
		CONTACT_BODY,
		CONTACT_HEADING,
		DESCRIPTION,
		EMAIL,
		FREE_PROMISE,
		FREE_STUFF,
		GITHUB_URL,
		GRAY_AREA,
		INTRODUCTION,
		PRINCIPLES,
		SECURITY_EMAIL,
		SERVICES,
		SITE_URL,
		TAGLINE,
		TITLE
	} from '#lib/content.js';

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
		<a href={resolve('/free-stuff')} class={secondaryButton}>See our free stuff</a>
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
					{#if service.page}
						<p class="mt-4">
							<a href={resolve(service.page)} class="underline underline-offset-4 hover:text-text"
								>{FREE_STUFF.more}</a
							>
						</p>
					{/if}
				</li>
			{/each}
		</ul>
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

<section id="free-stuff" class="scroll-mt-8 border-t border-border">
	<!-- This section used to be two, #tools and #games. Links to them may still be out there, in
	     chats and posts we can't search, so both land here. -->
	<span id="tools" class="block scroll-mt-8"></span>
	<span id="games" class="block scroll-mt-8"></span>
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-sm font-semibold tracking-widest text-muted uppercase">{FREE_STUFF.label}</h2>
		<ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each FREE_STUFF.groups as group (group.id)}
				{#each group.items as item (item.name)}
					<li>
						<a
							href={'page' in item ? resolve(item.page) : item.url}
							rel={'page' in item ? undefined : 'external'}
							class="block h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-text"
						>
							<p class="text-xs font-semibold tracking-widest text-muted uppercase">
								{group.heading}
							</p>
							<h3 class="mt-2 text-lg font-semibold">{item.name}</h3>
							<p class="mt-2 leading-relaxed text-muted">{item.summary}</p>
						</a>
					</li>
				{/each}
			{/each}
		</ul>
		<p class="mt-8 max-w-3xl leading-relaxed text-muted">{FREE_PROMISE}</p>
		<div class="mt-8">
			<a href={resolve('/free-stuff')} class={secondaryButton}>{FREE_STUFF.more}</a>
		</div>
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
