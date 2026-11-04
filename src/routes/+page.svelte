<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/Seo.svelte';
	import Screenshot from '#lib/Screenshot.svelte';
	import WorkCard from '#lib/WorkCard.svelte';
	import mark from '#lib/itrium-mark.svg';
	import lintechHome from '#lib/screenshots/lintech-home-light.webp';
	import tallOrderVillage from '#lib/screenshots/tall-order-village.webp';
	import honkPopoverLight from '#lib/screenshots/popover-light.webp';
	import honkPopoverDark from '#lib/screenshots/popover-dark.webp';
	import hindsightHeroLight from '#lib/screenshots/hindsight-hero-light.webp';
	import hindsightHeroDark from '#lib/screenshots/hindsight-hero-dark.webp';
	import honkLight from '#lib/screenshots/main-light.webp';
	import honkDark from '#lib/screenshots/main-dark.webp';
	import { primaryButton, secondaryButton } from '#lib/styles.js';
	import {
		AMBER,
		CONTACT_BODY,
		CONTACT_HEADING,
		DESCRIPTION,
		EMAIL,
		FREE_PROMISE,
		FREE_STUFF,
		GITHUB_URL,
		GRAY_AREA,
		HINDSIGHT_ITEM,
		HONK_ITEM,
		INTRODUCTION,
		NAME_STORY,
		PRINCIPLES,
		RHODONITE_ITEM,
		SECURITY_EMAIL,
		SERVICES,
		SITE_URL,
		TALL_ORDER_ITEM,
		TAGLINE_PARTS,
		TITLE,
		WEB_TOOLS,
		WORK
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

	// The free stuff with pictures gets a card each; the rest are a line each below them.
	const featured = [
		{
			item: TALL_ORDER_ITEM,
			href: resolve('/tall-order'),
			light: tallOrderVillage,
			dark: undefined,
			width: 1280,
			height: 720
		},
		{
			item: HINDSIGHT_ITEM,
			href: resolve('/hindsight'),
			light: hindsightHeroLight,
			dark: hindsightHeroDark,
			width: 1824,
			height: 1604
		},
		{
			item: HONK_ITEM,
			href: resolve('/honk'),
			light: honkLight,
			dark: honkDark,
			width: 2224,
			height: 1596
		}
	];
	const others = [AMBER, WEB_TOOLS, RHODONITE_ITEM];
</script>

<!-- A line icon for each card in "What we do", drawn in the text color on a pink tile. -->
{#snippet icon(title: string)}
	<svg
		viewBox="0 0 24 24"
		width="24"
		height="24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		{#if title === 'Advice'}
			<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
		{:else if title === 'Projects'}
			<rect x="3" y="4" width="18" height="16" rx="2" />
			<path d="M3 9h18M10 13l-2 2 2 2M14 13l2 2-2 2" />
		{:else}
			<rect x="3" y="8" width="18" height="4" rx="1" />
			<path d="M5 12v8h14v-8M12 8v12M12 8C10.5 5 7 5 7 7s3 1 5 1Zm0 0c1.5-3 5-3 5-1s-3 1-5 1Z" />
		{/if}
	</svg>
{/snippet}

<Seo title={TITLE} description={DESCRIPTION} path="/" structuredData={organization} />

<!-- The hero is a graphite panel in both themes, with the work itself beside the promise: a
     client's site, a game and an application, stacked in a soft pink light. -->
<section class="px-3 sm:px-5">
	<div class="band mx-auto max-w-6xl overflow-hidden rounded-3xl">
		<div
			class="grid items-start gap-12 px-6 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24"
		>
			<div>
				<h1 class="text-4xl leading-tight font-bold tracking-tight text-balance sm:text-6xl">
					{TAGLINE_PARTS[0]} <span class="text-accent">{TAGLINE_PARTS[1]}</span>
				</h1>
				<p class="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{INTRODUCTION}</p>
				<div class="mt-10 flex flex-wrap gap-3">
					<a href="#contact" class={primaryButton}>Say hello</a>
					<a href={resolve('/work')} class={secondaryButton}>See our work</a>
				</div>
			</div>
			<!-- Held to the top, not centered on the text: centered, it jumped when the font arrived. -->
			<div class="relative aspect-[5/4] lg:mt-6" aria-hidden="true">
				<div class="glow absolute -inset-[15%]"></div>
				<div class="absolute top-0 right-[6%] w-[66%]">
					<Screenshot
						light={tallOrderVillage}
						alt=""
						width={1280}
						height={720}
						lazy={false}
						class="rounded-xl border border-border shadow-2xl shadow-black/40"
					/>
				</div>
				<div class="absolute bottom-[10%] left-0 w-[80%]">
					<Screenshot
						light={lintechHome}
						alt=""
						width={1440}
						height={960}
						lazy={false}
						class="rounded-xl border border-border shadow-2xl shadow-black/50"
					/>
				</div>
				<div class="absolute right-0 -bottom-[6%] w-[28%]">
					<Screenshot
						light={honkPopoverLight}
						dark={honkPopoverDark}
						alt=""
						width={640}
						height={880}
						lazy={false}
						class="rounded-xl border border-border shadow-2xl shadow-black/50"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="services" class="scroll-mt-8">
	<div class="mx-auto max-w-5xl px-5 pt-24 pb-20 sm:px-8">
		<h2 class="text-sm font-semibold tracking-widest text-accent-text uppercase">What we do</h2>
		<ul class="mt-8 grid gap-4 sm:grid-cols-3">
			{#each SERVICES as service (service.title)}
				<li
					class="reveal flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent-edge"
				>
					<span
						class="flex size-12 items-center justify-center rounded-xl bg-accent text-on-accent"
						aria-hidden="true">{@render icon(service.title)}</span
					>
					<h3 class="mt-5 text-lg font-semibold">{service.title}</h3>
					<p class="mt-3 leading-relaxed text-muted">{service.body}</p>
					<!-- Each card leads to what comes next: a conversation, our work, or the free stuff. -->
					<p class="mt-auto pt-4">
						<a
							href={'page' in service ? resolve(service.page) : service.hash}
							class="underline decoration-accent-edge decoration-2 underline-offset-4 hover:text-accent-text"
							>{service.more}</a
						>
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section id="work" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-sm font-semibold tracking-widest text-accent-text uppercase">{WORK.label}</h2>
		<div class="reveal mt-8"><WorkCard /></div>
	</div>
</section>

<section id="how-we-work" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto grid max-w-5xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2">
		<div class="reveal">
			<h2 class="text-sm font-semibold tracking-widest text-accent-text uppercase">How we work</h2>
			{#each GRAY_AREA as paragraph, index (index)}
				<p class="mt-6 text-xl leading-relaxed {index === 0 ? '' : 'text-muted'}">{paragraph}</p>
			{/each}
		</div>
		<dl class="reveal grid gap-6 sm:grid-cols-2 lg:mt-12">
			{#each PRINCIPLES as principle (principle.title)}
				<div>
					<dt class="font-semibold">{principle.title}</dt>
					<dd class="mt-2 leading-relaxed text-muted">{principle.body}</dd>
				</div>
			{/each}
		</dl>
		<div
			class="reveal flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center lg:col-span-2"
		>
			<img src={mark} alt="" width="96" height="96" class="size-24 shrink-0" />
			<div>
				<h3 class="text-lg font-semibold">{NAME_STORY.heading}</h3>
				<p class="mt-2 max-w-3xl leading-relaxed text-muted">{NAME_STORY.body}</p>
			</div>
		</div>
	</div>
</section>

<section id="free-stuff" class="scroll-mt-8 border-t border-border">
	<!-- This section used to be two, #tools and #games. Links to them may still be out there, in
	     chats and posts we can't search, so both land here. -->
	<span id="tools" class="block scroll-mt-8"></span>
	<span id="games" class="block scroll-mt-8"></span>
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-sm font-semibold tracking-widest text-accent-text uppercase">
			{FREE_STUFF.label}
		</h2>
		<ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each featured as { item, href, light, dark, width, height } (item.name)}
				<li class="reveal">
					<a
						{href}
						class="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:-translate-y-1 hover:border-accent-edge"
					>
						<Screenshot
							{light}
							{dark}
							alt=""
							{width}
							{height}
							class="aspect-[4/3] border-b border-border object-cover object-top"
						/>
						<div class="p-6">
							<p class="text-xs font-semibold tracking-widest text-muted uppercase">
								{item.platforms}
							</p>
							<h3 class="mt-2 text-lg font-semibold">{item.name}</h3>
							<p class="mt-2 leading-relaxed text-muted">{item.summary}</p>
						</div>
					</a>
				</li>
			{/each}
		</ul>
		<ul class="reveal mt-4 divide-y divide-border rounded-2xl border border-border bg-surface">
			{#each others as item (item.name)}
				<li>
					<a
						href={'page' in item ? resolve(item.page) : item.url}
						rel={'page' in item ? undefined : 'external'}
						class="flex flex-col gap-1 px-6 py-4 transition-colors hover:text-text sm:flex-row sm:items-baseline sm:gap-4"
					>
						<span class="font-semibold sm:w-44 sm:shrink-0">{item.name}</span>
						<span class="text-muted">{item.summary}</span>
					</a>
				</li>
			{/each}
		</ul>
		<p class="mt-8 max-w-3xl leading-relaxed text-muted">{FREE_PROMISE}</p>
		<div class="mt-8">
			<a href={resolve('/free-stuff')} class={secondaryButton}>{FREE_STUFF.more}</a>
		</div>
	</div>
</section>

<!-- Contact closes the page the way the hero opens it: a graphite panel. -->
<section id="contact" class="scroll-mt-8 px-3 pb-12 sm:px-5">
	<div class="band reveal mx-auto max-w-6xl rounded-3xl">
		<div class="mx-auto max-w-5xl px-6 py-20 sm:px-10 sm:py-24">
			<h2 class="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
				{CONTACT_HEADING}
			</h2>
			<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{CONTACT_BODY}</p>
			<div class="mt-8">
				<a href="mailto:{EMAIL}" class={primaryButton}>{EMAIL}</a>
			</div>
			<p class="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
				Found a security problem in something we make? Write to
				<a
					href="mailto:{SECURITY_EMAIL}"
					class="underline decoration-accent-edge decoration-2 underline-offset-4 hover:text-accent-text"
					>{SECURITY_EMAIL}</a
				> instead, so it stays private until it's fixed.
			</p>
		</div>
	</div>
</section>
