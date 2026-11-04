<script lang="ts">
	import ClosingPanel from '#lib/ClosingPanel.svelte';
	import { resolve } from '$app/paths';
	import PageHero from '#lib/PageHero.svelte';
	import Seo from '#lib/Seo.svelte';
	import { secondaryButton } from '#lib/styles.js';
	import { FREE_PROMISE, FREE_STUFF } from '#lib/content.js';

	const link =
		'underline decoration-accent-edge decoration-2 underline-offset-4 hover:text-accent-text';
</script>

<Seo title={FREE_STUFF.title} description={FREE_STUFF.description} path="/free-stuff" />

<PageHero
	label={FREE_STUFF.label}
	title={FREE_STUFF.heading}
	introduction={FREE_STUFF.introduction}
>
	<!-- Jump links, so someone who only wants games doesn't scroll past everything else. -->
	<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
		{#each FREE_STUFF.groups as group (group.id)}
			<li><a href="#{group.id}" class={link}>{group.heading}</a></li>
		{/each}
	</ul>
</PageHero>

{#each FREE_STUFF.groups as group, index (group.id)}
	<section id={group.id} class="scroll-mt-8 border-border {index > 0 ? 'border-t' : ''}">
		<div class="mx-auto max-w-5xl px-5 py-16 sm:px-8">
			<h2 class="text-2xl font-semibold tracking-tight">{group.heading}</h2>
			<p class="mt-3 max-w-2xl leading-relaxed text-muted">{group.body}</p>
			<ul class="mt-8 grid gap-4 lg:grid-cols-2">
				{#each group.items as item (item.name)}
					<li
						class="reveal flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-accent-edge sm:p-8"
					>
						<div class="flex flex-wrap items-baseline justify-between gap-2">
							<h3 class="text-2xl font-semibold">{item.name}</h3>
							<p class="text-sm text-muted">{item.platforms}</p>
						</div>
						<p class="mt-3 grow leading-relaxed text-muted">{item.body}</p>
						<div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
							{#if 'page' in item}
								<a href={resolve(item.page)} class={secondaryButton}>{item.label}</a>
							{:else}
								<a href={item.url} rel="external" class={secondaryButton}>{item.label}</a>
							{/if}
							<a href={item.sourceUrl} rel="external" class="text-sm text-muted {link}">
								Source code
							</a>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/each}

<ClosingPanel>
	<p class="max-w-3xl text-2xl leading-snug font-medium text-balance sm:text-3xl">{FREE_PROMISE}</p>
</ClosingPanel>
