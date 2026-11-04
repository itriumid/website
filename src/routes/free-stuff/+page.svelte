<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '#lib/Seo.svelte';
	import { secondaryButton } from '#lib/styles.js';
	import { FREE_PROMISE, FREE_STUFF } from '#lib/content.js';

	const link = 'underline underline-offset-4 hover:text-text';
</script>

<Seo title={FREE_STUFF.title} description={FREE_STUFF.description} path="/free-stuff" />

<section class="mx-auto max-w-5xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24">
	<p class="text-sm font-semibold tracking-widest text-accent-text uppercase">{FREE_STUFF.label}</p>
	<h1 class="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
		{FREE_STUFF.heading}
	</h1>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
		{FREE_STUFF.introduction}
	</p>
	<!-- Jump links, so someone who only wants games doesn't scroll past everything else. -->
	<ul class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted">
		{#each FREE_STUFF.groups as group (group.id)}
			<li><a href="#{group.id}" class={link}>{group.heading}</a></li>
		{/each}
	</ul>
</section>

{#each FREE_STUFF.groups as group (group.id)}
	<section id={group.id} class="scroll-mt-8 border-t border-border">
		<div class="mx-auto max-w-5xl px-5 py-16 sm:px-8">
			<h2 class="text-2xl font-semibold tracking-tight">{group.heading}</h2>
			<p class="mt-3 max-w-2xl leading-relaxed text-muted">{group.body}</p>
			<ul class="mt-8 grid gap-4 lg:grid-cols-2">
				{#each group.items as item (item.name)}
					<li class="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
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

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<p class="max-w-3xl text-xl leading-relaxed">{FREE_PROMISE}</p>
	</div>
</section>
