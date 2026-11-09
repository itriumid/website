<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		/** A line under the title, set in pink. */
		tagline?: string;
		introduction: string;
		/** The page's buttons. */
		actions?: Snippet;
		/** What sits under the buttons, such as jump links. */
		children?: Snippet;
		/** The page's main picture, shown in the panel. */
		media?: Snippet;
	}

	const { title, tagline, introduction, actions, children, media }: Props = $props();
</script>

<!-- The top of every page but home: a graphite panel in both themes, like the home page's hero. -->
<section class="px-3 sm:px-5">
	<div class="band mx-auto max-w-6xl overflow-hidden rounded-3xl">
		<div class="mx-auto max-w-5xl px-6 pt-14 sm:px-10 sm:pt-20 {media ? '' : 'pb-14 sm:pb-20'}">
			<h1 class="text-5xl font-bold tracking-tight text-balance sm:text-7xl">{title}</h1>
			{#if tagline}
				<p
					class="mt-5 max-w-2xl text-2xl leading-snug font-medium text-balance text-accent-text sm:text-3xl"
				>
					{tagline}
				</p>
			{/if}
			<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{introduction}</p>
			{#if actions}
				<div class="mt-10 flex flex-wrap gap-3">{@render actions()}</div>
			{/if}
			{@render children?.()}
		</div>
		{#if media}
			<div class="relative mx-auto mt-14 max-w-4xl px-4 pb-10 sm:px-8 sm:pb-14">
				<div class="relative">{@render media()}</div>
			</div>
		{/if}
	</div>
</section>
