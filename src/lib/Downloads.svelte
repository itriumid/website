<script lang="ts">
	import Arrow from '#lib/Arrow.svelte';
	import { primaryButton, sectionHeading } from '#lib/styles.js';
	import { DOWNLOADS } from '#lib/content.js';

	interface Download {
		system: string;
		note: string;
		primary: { label: string; url: string };
		others: readonly { label: string; url: string }[];
		installHint?: string;
		install?: string;
	}

	interface Props {
		downloads: readonly Download[];
		/** What the system says the first time, and how to get past it, by system. */
		unsigned: {
			heading: string;
			body: string;
			steps: readonly { system: string; body: string }[];
			moreUrl?: string;
		};
		allDownloads: { body: string; url: string };
		/** A line under the heading, such as how the files come packed. */
		note?: string;
		/** The install command's hint, when every system shares one. */
		installHint?: string;
		sourceUrl?: string;
	}

	const { downloads, unsigned, allDownloads, note, installHint, sourceUrl }: Props = $props();

	const link =
		'inline-flex min-h-11 items-center underline decoration-accent-edge decoration-2 underline-offset-4 hover:text-accent-text';
	const stepFor = (system: string) => unsigned.steps.find((step) => step.system === system)?.body;
</script>

<!-- One row per system: its button, and right under it the one step the system will ask for the
     first time, so the help is in view at the moment the warning appears. Extra formats and the
     install command wait behind "Other versions", a plain disclosure that needs no script. -->
<section id="download" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class={sectionHeading}>Download</h2>
		<p class="mt-6 max-w-2xl text-2xl leading-snug font-semibold text-balance">
			{unsigned.heading}
		</p>
		<p class="mt-3 max-w-xl leading-relaxed text-muted">{unsigned.body}</p>
		{#if note}<p class="mt-3 max-w-xl leading-relaxed text-muted">{note}</p>{/if}
		<!-- Phones can't run these, and a visitor holding one should know before they tap. -->
		<p class="mt-6 rounded-xl border border-border bg-surface px-4 py-3 text-sm sm:hidden">
			{DOWNLOADS.phone}
		</p>

		<ol class="mt-10 border-t border-border">
			{#each downloads as download (download.system)}
				{@const step = stepFor(download.system)}
				{@const hint = download.installHint ?? installHint}
				<li class="grid gap-x-10 gap-y-4 border-b border-border py-8 lg:grid-cols-[13rem_1fr]">
					<div>
						<h3 class="text-2xl font-bold tracking-tight">{download.system}</h3>
						<p class="mt-1 text-sm text-muted">{download.note}</p>
					</div>
					<div>
						<a href={download.primary.url} rel="external" class={primaryButton}
							>{download.primary.label}</a
						>
						{#if step}
							<p class="mt-4 max-w-xl text-sm leading-relaxed text-muted">
								<span class="font-semibold text-text">{DOWNLOADS.firstTime}</span>
								{step}
							</p>
						{/if}
						{#if download.others.length > 0 || download.install}
							<details class="group mt-3">
								<summary
									class="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-medium text-accent-text [&::-webkit-details-marker]:hidden"
								>
									{DOWNLOADS.others}
									<Arrow
										class="transition-transform group-open:rotate-90 motion-reduce:transition-none"
									/>
								</summary>
								{#if download.others.length > 0}
									<ul class="flex flex-wrap gap-x-5 text-sm">
										{#each download.others as other (other.url)}
											<li><a href={other.url} rel="external" class={link}>{other.label}</a></li>
										{/each}
									</ul>
								{/if}
								{#if download.install}
									<p class="mt-3 text-sm text-muted">{hint}</p>
									<pre
										class="mt-2 max-w-xl rounded-lg border border-border bg-bg px-4 py-3 text-sm whitespace-pre-wrap"><code
											class="cursor-text select-all">{download.install}</code
										></pre>
								{/if}
							</details>
						{/if}
					</div>
				</li>
			{/each}
		</ol>

		<p class="mt-6 flex flex-wrap items-center gap-x-5 text-sm text-muted">
			<span>{allDownloads.body}</span>
			<a href={allDownloads.url} rel="external" class={link}>{DOWNLOADS.releases}</a>
			{#if unsigned.moreUrl}
				<a href={unsigned.moreUrl} rel="external" class={link}>{DOWNLOADS.fullSteps}</a>
			{/if}
			{#if sourceUrl}
				<a href={sourceUrl} rel="external" class={link}>{DOWNLOADS.source}</a>
			{/if}
		</p>
	</div>
</section>
