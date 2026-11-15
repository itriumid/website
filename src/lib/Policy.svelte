<script lang="ts">
	import { resolve } from '$app/paths';
	import PageHero from '#lib/PageHero.svelte';
	import Seo from '#lib/Seo.svelte';

	interface Props {
		policy: {
			title: string;
			description: string;
			heading: string;
			introduction: string;
			updated: string;
			sections: readonly { heading: string; body: string }[];
		};
		path: '/tall-order/privacy' | '/tall-order/terms';
		/** The other of the pair, linked at the end. */
		other: { label: string; page: '/tall-order/privacy' | '/tall-order/terms' };
	}

	const { policy, path, other }: Props = $props();

	const link =
		'underline decoration-accent-edge decoration-2 underline-offset-4 hover:text-accent-text';
</script>

<!-- A game's privacy policy or terms: a heading, then each part in a sentence or few. -->
<Seo title={policy.title} description={policy.description} {path} />

<PageHero
	title={policy.heading}
	tagline="Felterra: Tall Order"
	introduction={policy.introduction}
/>

<section>
	<div class="mx-auto max-w-3xl px-5 py-20 sm:px-8">
		<dl class="space-y-10">
			{#each policy.sections as part (part.heading)}
				<div>
					<dt class="text-xl font-semibold tracking-tight">{part.heading}</dt>
					<dd class="mt-2 text-lg leading-relaxed text-muted">{part.body}</dd>
				</div>
			{/each}
		</dl>
		<p class="mt-14 text-muted">
			Last changed {policy.updated}.
			<a href={resolve(other.page)} class={link}>{other.label}</a>
			·
			<a href={resolve('/tall-order')} class={link}>The game</a>
		</p>
	</div>
</section>
