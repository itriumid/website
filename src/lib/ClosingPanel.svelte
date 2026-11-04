<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<!-- The end of a page: a graphite panel, the way the home page's contact section closes it. -->
<section class="px-3 pt-8 pb-12 sm:px-5">
	<div class="band reveal mx-auto max-w-6xl rounded-3xl">
		<div class="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-20">{@render children()}</div>
	</div>
</section>
