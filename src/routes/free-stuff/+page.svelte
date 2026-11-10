<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';
	import { resolve } from '$app/paths';
	import Arrow from '#lib/Arrow.svelte';
	import ClosingPanel from '#lib/ClosingPanel.svelte';
	import PageHero from '#lib/PageHero.svelte';
	import Screenshot from '#lib/Screenshot.svelte';
	import Seo from '#lib/Seo.svelte';
	import amberDark from '#lib/screenshots/amber-dark.webp?w=400;800;1200;1440&enhanced';
	import amberLight from '#lib/screenshots/amber-light.webp?w=400;800;1200;1440&enhanced';
	import hindsightDark from '#lib/screenshots/hindsight-hero-dark.webp?w=400;800;1200;1600;1824&enhanced';
	import hindsightLight from '#lib/screenshots/hindsight-hero-light.webp?w=400;800;1200;1600;1824&enhanced';
	import honkDark from '#lib/screenshots/main-dark.webp?w=400;800;1200;1600;2224&enhanced';
	import honkLight from '#lib/screenshots/main-light.webp?w=400;800;1200;1600;2224&enhanced';
	import rhodoniteDark from '#lib/screenshots/rhodonite-sample-dark.webp?w=400;800;1200;1664&enhanced';
	import rhodoniteLight from '#lib/screenshots/rhodonite-sample-light.webp?w=400;800;1200;1664&enhanced';
	import splitBillDark from '#lib/screenshots/split-bill-dark.webp?w=400;800;1200;1440&enhanced';
	import splitBillLight from '#lib/screenshots/split-bill-light.webp?w=400;800;1200;1440&enhanced';
	import tallOrder from '#lib/screenshots/tall-order-village.webp?w=640;1280&enhanced';
	import { sectionHeading } from '#lib/styles.js';
	import { DOWNLOADS, FREE_PROMISE, FREE_STUFF } from '#lib/content.js';

	// Each item's picture, by name, with the files' own pixel sizes. `position` keeps the part of a
	// capture that shows the thing working: the bill's split sits at the bottom of its frame, and code
	// reads from the left.
	const pictures: Record<string, { light: Picture; dark?: Picture; position?: string }> = {
		Amber: { light: amberLight, dark: amberDark },
		'Web tools': {
			light: splitBillLight,
			dark: splitBillDark,
			position: 'object-bottom'
		},
		Honk: { light: honkLight, dark: honkDark },
		Hindsight: { light: hindsightLight, dark: hindsightDark },
		'Felterra: Tall Order': { light: tallOrder },
		'Rhodonite Theme': {
			light: rhodoniteLight,
			dark: rhodoniteDark,
			position: 'object-left-top'
		}
	};

	const link =
		'inline-flex min-h-11 items-center underline decoration-accent-edge decoration-2 underline-offset-4 hover:text-accent-text';
</script>

<Seo title={FREE_STUFF.title} description={FREE_STUFF.description} path="/free-stuff" />

<PageHero title={FREE_STUFF.heading} introduction={FREE_STUFF.introduction}>
	<!-- Jump links, so someone who only wants games doesn't scroll past everything else. -->
	<ul class="mt-6 flex flex-wrap gap-x-6 text-sm font-medium">
		{#each FREE_STUFF.groups as group (group.id)}
			<li><a href="#{group.id}" class={link}>{group.heading}</a></li>
		{/each}
	</ul>
</PageHero>

<!-- One section per place it runs. Each item is a card led by a real picture of it; the whole
     card is the link, and the source code sits under it as a link of its own. -->
{#each FREE_STUFF.groups as group, index (group.id)}
	<section id={group.id} class="scroll-mt-8 border-border {index > 0 ? 'border-t' : ''}">
		<div class="mx-auto max-w-5xl px-5 py-16 sm:px-8">
			<h2 class={sectionHeading}>{group.heading}</h2>
			<p class="mt-3 max-w-xl leading-relaxed text-muted">{group.body}</p>
			<ul class="mt-8 grid gap-6 sm:grid-cols-2">
				{#each group.items as item (item.name)}
					{@const picture = pictures[item.name]}
					<li class="reveal flex flex-col">
						<a
							href={'page' in item ? resolve(item.page) : item.url}
							rel={'page' in item ? undefined : 'external'}
							class="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-accent-edge motion-safe:hover:-translate-y-1"
						>
							<Screenshot
								light={picture.light}
								dark={picture.dark}
								alt=""
								sizes="(min-width: 64rem) 30rem, (min-width: 40rem) 50vw, 100vw"
								class="aspect-[4/3] border-b border-border object-cover {picture.position ??
									'object-top'}"
							/>
							<span class="flex flex-1 flex-col p-6">
								<span class="text-2xl font-bold tracking-tight">{item.name}</span>
								<span class="mt-2 leading-relaxed text-muted">{item.summary}</span>
								<span class="mt-2 text-sm text-muted">{item.platforms}</span>
								<span class="mt-auto flex items-center gap-2 pt-5 font-semibold text-accent-text">
									{item.label}
									<Arrow class="transition-transform motion-safe:group-hover:translate-x-1" />
								</span>
							</span>
						</a>
						<a href={item.sourceUrl} rel="external" class="{link} self-start text-sm text-muted">
							{DOWNLOADS.source}<span class="sr-only">: {item.name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/each}

<ClosingPanel>
	<p class="max-w-3xl text-2xl leading-snug font-medium text-balance sm:text-3xl">{FREE_PROMISE}</p>
</ClosingPanel>
