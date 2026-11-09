<script lang="ts">
	import Arrow from '#lib/Arrow.svelte';
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
	import lintechDrajat from '#lib/screenshots/lintech-drajat-light.webp';
	import honkLight from '#lib/screenshots/main-light.webp';
	import honkPadLight from '#lib/screenshots/honk-pad-light.webp';
	import honkPadDark from '#lib/screenshots/honk-pad-dark.webp';
	import honkDark from '#lib/screenshots/main-dark.webp';
	import { buttonStack, primaryButton, secondaryButton, sectionHeading } from '#lib/styles.js';
	import {
		AMBER,
		CONTACT_BODY,
		CONTACT_HINT,
		CONTACT_HEADING,
		DESCRIPTION,
		DISCORD_URL,
		EMAIL,
		FREE_STUFF,
		GITHUB_URL,
		GRAY_AREA,
		HINDSIGHT_ITEM,
		HONK_ITEM,
		INSTAGRAM_URL,
		INDEX,
		NAME_STORY,
		RHODONITE_ITEM,
		SITE_URL,
		TALL_ORDER_ITEM,
		LETTER,
		THREADS_URL,
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
		sameAs: [GITHUB_URL, INSTAGRAM_URL, THREADS_URL, DISCORD_URL]
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

	// Each index row's picture, but Advice's, which is our mark on pink.
	const pictures: Record<string, { light: string; dark?: string; width: number; height: number }> =
		{
			projects: { light: lintechDrajat, width: 1440, height: 960 },
			free: { light: honkPadLight, dark: honkPadDark, width: 558, height: 418 },
			games: { light: tallOrderVillage, width: 1280, height: 720 }
		};
</script>

<Seo title={TITLE} description={DESCRIPTION} path="/" structuredData={organization} />

<!-- The home page introduces us, not one project: a short signed note, then an index of what we
     do, each row a door with a real picture. All of it sits in one graphite panel, which on wide
     screens holds the work behind the note like enclosures. -->
<section class="px-3 sm:px-5">
	<div class="band mx-auto max-w-6xl overflow-hidden rounded-3xl">
		<div class="px-6 pt-14 pb-6 sm:px-10 sm:pt-20 lg:pb-10">
			<div class="relative lg:min-h-[36rem]">
				<div class="relative z-10 lg:max-w-[29rem]">
					<h1 class="text-5xl leading-none font-bold tracking-tight text-balance sm:text-7xl">
						{LETTER.greeting[0]} <span class="text-accent-text">{LETTER.greeting[1]}</span>
					</h1>
					<p class="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{LETTER.note}</p>
					<p class="mt-5 flex items-center gap-3 text-sm font-medium text-muted">
						<span class="h-px w-8 bg-accent-edge" aria-hidden="true"></span>{LETTER.signature}
					</p>
					<div class="mt-9 {buttonStack}">
						<a href={THREADS_URL} rel="external" class={primaryButton}>Message us on Threads</a>
						<a href="mailto:{EMAIL}" class={secondaryButton}>Email us</a>
					</div>
				</div>
				<!-- The enclosures: a client's site, a game and an application, tucked behind the note's
				     right edge. Only where there's room; on phones the index's pictures do this job.
				     Held to the top, not centered on the text: centered, it jumped when the font
				     arrived. -->
				<div class="absolute top-0 right-0 hidden aspect-[5/4] w-[55%] lg:block" aria-hidden="true">
					<div class="absolute top-0 right-[6%] w-[64%] rotate-3">
						<Screenshot
							light={tallOrderVillage}
							alt=""
							width={1280}
							height={720}
							lazy={false}
							class="rounded-xl border border-border shadow-2xl shadow-black/40"
						/>
					</div>
					<div class="absolute -bottom-[17%] -left-[20%] w-[64%] -rotate-2">
						<Screenshot
							light={lintechHome}
							alt=""
							width={1440}
							height={960}
							lazy={false}
							class="rounded-xl border border-border shadow-2xl shadow-black/50"
						/>
					</div>
					<div class="absolute -bottom-[22%] left-[36%] w-[26%] rotate-3">
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

			<!-- What we do, as an index: a big title, one short note and a picture per row. -->
			<h2 id="services" class="sr-only scroll-mt-8">What we do</h2>
			<ol class="mt-14 border-t border-border sm:mt-20 lg:mt-10">
				{#each INDEX as row (row.id)}
					<li class="border-b border-border">
						<a
							href={'page' in row ? resolve(row.page) : row.hash}
							class="group -mx-3 grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 rounded-xl px-3 py-5 transition-colors hover:bg-surface sm:grid-cols-[8rem_1fr_auto] sm:gap-8 sm:py-6"
						>
							{#if row.id === 'advice'}
								<span
									class="flex aspect-[4/3] items-center justify-center rounded-lg bg-accent"
									aria-hidden="true"
								>
									<img src={mark} alt="" width="96" height="96" class="size-9 sm:size-14" />
								</span>
							{:else}
								{@const picture = pictures[row.id]}
								<Screenshot
									light={picture.light}
									dark={picture.dark}
									alt=""
									width={picture.width}
									height={picture.height}
									class="aspect-[4/3] rounded-lg border border-border object-cover object-top"
								/>
							{/if}
							<span>
								<span
									class="block text-xl leading-tight font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl"
									>{row.title}</span
								>
								<span class="mt-1 block text-sm text-muted sm:text-base">{row.note}</span>
							</span>
							<Arrow
								class="text-xl font-semibold text-accent-text transition-transform motion-safe:group-hover:translate-x-1 sm:text-2xl"
							/>
						</a>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<section id="work" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class={sectionHeading}>{WORK.label}</h2>
		<div class="reveal mt-8"><WorkCard /></div>
	</div>
</section>

<section id="free-stuff" class="scroll-mt-8 border-t border-border">
	<!-- This section used to be two, #tools and #games. Links to them may still be out there, in
	     chats and posts we can't search, so both land here. -->
	<span id="tools" class="block scroll-mt-8"></span>
	<span id="games" class="block scroll-mt-8"></span>
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class={sectionHeading}>{FREE_STUFF.label}</h2>
		<ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each featured as { item, href, light, dark, width, height } (item.name)}
				<li class="reveal">
					<a
						{href}
						class="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent-edge motion-safe:hover:-translate-y-1"
					>
						<Screenshot
							{light}
							{dark}
							alt=""
							{width}
							{height}
							class="aspect-[4/3] border-b border-border object-cover object-top"
						/>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="text-lg font-semibold">{item.name}</h3>
							<p class="mt-2 leading-relaxed text-muted">{item.summary}</p>
							<p class="mt-2 text-sm text-muted">{item.platforms}</p>
							<!-- What the click does: download, open or install, before the visitor commits. -->
							<p class="mt-auto pt-5 font-semibold text-accent-text">
								{item.label}
								<Arrow class="transition-transform motion-safe:group-hover:translate-x-1" />
							</p>
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
						class="group flex flex-col gap-1 px-6 py-4 transition-colors hover:bg-bg sm:flex-row sm:items-baseline sm:gap-4"
					>
						<span class="font-semibold sm:w-44 sm:shrink-0">{item.name}</span>
						<span class="flex-1 text-muted">{item.summary}</span>
						<!-- Where it runs, and for what leaves this site, where it goes. -->
						<span class="text-sm text-muted sm:w-56 sm:shrink-0 sm:text-right">
							{item.platforms}
							{#if 'url' in item}
								<span class="whitespace-nowrap text-accent-text">
									· {new URL(item.url).host}
									<Arrow class="transition-transform motion-safe:group-hover:translate-x-1" />
								</span>
							{/if}
						</span>
					</a>
				</li>
			{/each}
		</ul>
		<div class="mt-8">
			<a href={resolve('/free-stuff')} class={primaryButton}>{FREE_STUFF.more}</a>
		</div>
	</div>
</section>

<section id="how-we-work" class="scroll-mt-8 border-t border-border">
	<div class="reveal mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class={sectionHeading}>How we work</h2>
		<p class="mt-6 max-w-2xl text-xl leading-relaxed">{GRAY_AREA}</p>
		<p class="mt-8 flex max-w-2xl items-center gap-4 leading-relaxed text-muted">
			<span
				class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent"
				aria-hidden="true"><img src={mark} alt="" width="96" height="96" class="size-8" /></span
			>{NAME_STORY}
		</p>
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
			<div class="mt-8 {buttonStack}">
				<!-- Threads leads: most clients first meet us there. Email is for whoever prefers it. -->
				<a href={THREADS_URL} rel="external" class={primaryButton}>Message us on Threads</a>
				<a href="mailto:{EMAIL}" class={secondaryButton}>{EMAIL}</a>
			</div>
			<p class="mt-6 max-w-xl leading-relaxed text-muted">{CONTACT_HINT}</p>
		</div>
	</div>
</section>
