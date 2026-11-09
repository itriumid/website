<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import Arrow from '#lib/Arrow.svelte';
	import PageHero from '#lib/PageHero.svelte';
	import { ERROR_PAGE } from '#lib/content.js';

	const missing = $derived(page.status === 404);
	// Where a stale link most likely meant to go.
	const places = [
		{ label: 'Free stuff', href: resolve('/free-stuff') },
		{ label: 'Our work', href: resolve('/work') },
		{ label: 'Contact', href: `${resolve('/')}#contact` },
		{ label: 'Home', href: resolve('/') }
	];
</script>

<svelte:head>
	<title>{missing ? 'Page not found' : 'Something went wrong'} · Itrium</title>
</svelte:head>

<PageHero
	title={missing ? ERROR_PAGE.missing.title : ERROR_PAGE.broken.title}
	introduction={missing ? ERROR_PAGE.missing.body : ERROR_PAGE.broken.body}
>
	<ul class="mt-8 border-t border-border">
		{#each places as place (place.label)}
			<li class="border-b border-border">
				<a
					href={place.href}
					class="group flex min-h-14 items-center justify-between text-xl font-bold tracking-tight hover:text-accent-text"
				>
					{place.label}
					<Arrow
						class="text-accent-text transition-transform motion-safe:group-hover:translate-x-1"
					/>
				</a>
			</li>
		{/each}
	</ul>
</PageHero>
