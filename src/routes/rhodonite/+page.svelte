<script lang="ts">
	import Seo from '$lib/Seo.svelte';
	import { primaryButton, secondaryButton } from '$lib/styles';
	import { FREE_PROMISE, RHODONITE, SITE_URL } from '$lib/content';

	const application = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Rhodonite Theme',
		description: RHODONITE.description,
		url: `${SITE_URL}/rhodonite`,
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'macOS, Windows, Linux',
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		publisher: { '@type': 'Organization', name: 'Itrium', url: SITE_URL }
	};

	// The code sample, colored the way the theme colors TypeScript. Kept as data rather than
	// markup, so formatting the file can't change the whitespace inside the <pre>.
	type Kind = 'plain' | 'comment' | 'keyword' | 'string' | 'number' | 'type' | 'function' | 'mark';
	const kinds: Record<Kind, string> = {
		plain: '',
		comment: 'text-muted italic',
		keyword: 'text-code-pink',
		string: 'text-code-sage',
		number: 'text-code-sand',
		type: 'text-code-teal',
		function: 'text-code-blue',
		mark: 'text-code-punctuation'
	};
	const sample: [Kind, string][][] = [
		[['comment', '// Pink means something: one accent, used on purpose']],
		[
			['keyword', 'import'],
			['mark', ' { '],
			['plain', 'contrast'],
			['mark', ' } '],
			['keyword', 'from'],
			['string', ' "./color"'],
			['mark', ';']
		],
		[],
		[
			['keyword', 'const'],
			['plain', ' accent '],
			['mark', '= '],
			['string', '"#febfca"'],
			['mark', ';']
		],
		[
			['keyword', 'const'],
			['plain', ' minimumContrast '],
			['mark', '= '],
			['number', '4.5'],
			['mark', ';']
		],
		[],
		[
			['keyword', 'interface'],
			['type', ' Tab'],
			['mark', ' {']
		],
		[
			['plain', '  title'],
			['mark', ': '],
			['type', 'string'],
			['mark', ';']
		],
		[
			['plain', '  active'],
			['mark', ': '],
			['type', 'boolean'],
			['mark', ';']
		],
		[['mark', '}']],
		[],
		[
			['keyword', 'export function'],
			['function', ' edgeColor'],
			['mark', '('],
			['plain', 'tab'],
			['mark', ': '],
			['type', 'Tab'],
			['mark', '): '],
			['type', 'string'],
			['mark', ' | '],
			['type', 'null'],
			['mark', ' {']
		],
		[
			['keyword', '  return'],
			['plain', ' tab'],
			['mark', '.'],
			['plain', 'active '],
			['mark', '? '],
			['plain', 'accent '],
			['mark', ': '],
			['number', 'null'],
			['mark', ';']
		],
		[['mark', '}']],
		[],
		[
			['keyword', 'export function'],
			['function', ' readable'],
			['mark', '('],
			['plain', 'text'],
			['mark', ': '],
			['type', 'string'],
			['mark', ', '],
			['plain', 'surface'],
			['mark', ': '],
			['type', 'string'],
			['mark', '): '],
			['type', 'boolean'],
			['mark', ' {']
		],
		[
			['keyword', '  return'],
			['function', ' contrast'],
			['mark', '('],
			['plain', 'text'],
			['mark', ', '],
			['plain', 'surface'],
			['mark', ') >= '],
			['plain', 'minimumContrast'],
			['mark', ';']
		],
		[['mark', '}']]
	];

	// Ends each line of the sample, so copying it keeps the line breaks.
	const newline = '\n';

	// Swatch fills. Written out in full, so Tailwind finds each class in the source.
	const fills: Record<string, string> = {
		'#2B2B2B': 'bg-[#2B2B2B]',
		'#FEBFCA': 'bg-[#FEBFCA]',
		'#C46475': 'bg-[#C46475]',
		'#F2F2F2': 'bg-[#F2F2F2]',
		'#AAAAAA': 'bg-[#AAAAAA]',
		'#6B6B6B': 'bg-[#6B6B6B]',
		'#A9C9A0': 'bg-[#A9C9A0]',
		'#3F7339': 'bg-[#3F7339]',
		'#E6CF98': 'bg-[#E6CF98]',
		'#7F6216': 'bg-[#7F6216]',
		'#9FB5D8': 'bg-[#9FB5D8]',
		'#3A5F93': 'bg-[#3A5F93]',
		'#9DCEC7': 'bg-[#9DCEC7]',
		'#2F7069': 'bg-[#2F7069]',
		'#F58C9D': 'bg-[#F58C9D]',
		'#B03A4F': 'bg-[#B03A4F]'
	};

	const groups = [
		{ label: RHODONITE.colors.paletteLabel, colors: RHODONITE.colors.palette },
		{ label: RHODONITE.colors.codeLabel, colors: RHODONITE.colors.code }
	];

	const link = 'underline underline-offset-4 hover:text-text';
</script>

<Seo
	title={RHODONITE.title}
	description={RHODONITE.description}
	path="/rhodonite"
	structuredData={application}
/>

<section class="mx-auto max-w-5xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24">
	<p class="text-sm font-semibold tracking-widest text-muted uppercase">Free tool</p>
	<h1 class="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">Rhodonite</h1>
	<p class="mt-5 max-w-2xl text-2xl leading-snug font-medium text-balance sm:text-3xl">
		{RHODONITE.tagline}
	</p>
	<p class="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{RHODONITE.introduction}</p>
	<div class="mt-10 flex flex-wrap gap-3">
		<a href="#install" class={primaryButton}>Install the theme</a>
		<a href={RHODONITE.sourceUrl} rel="external" class={secondaryButton}>Source code</a>
	</div>
</section>

<!-- An editor window in the theme: the active tab carries the pink line, as it does in the
     editor. Real text, so it follows the visitor's light or dark setting like the rest of the page. -->
<figure class="mx-auto max-w-4xl px-5 pb-20 sm:px-8" aria-label={RHODONITE.sample}>
	<div class="overflow-hidden rounded-xl border border-border bg-bg">
		<div class="flex border-b border-border text-sm" aria-hidden="true">
			<span class="border-t-2 border-r border-t-accent-edge border-r-border px-4 py-2"
				>palette.ts</span
			>
			<span class="border-r border-border px-4 py-2 text-muted">README.md</span>
		</div>
		<pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed"><code
				>{#each sample as line, index (index)}{#each line as [kind, text], part (part)}<span
							class={kinds[kind]}>{text}</span
						>{/each}{newline}{/each}</code
			></pre>
	</div>
</figure>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-3xl font-bold tracking-tight">{RHODONITE.pink.heading}</h2>
		<p class="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{RHODONITE.pink.body}</p>
	</div>
</section>

<section class="border-t border-border">
	<ul class="mx-auto grid max-w-5xl gap-4 px-5 py-20 sm:px-8 lg:grid-cols-3">
		{#each RHODONITE.promises as promise (promise.title)}
			<li class="rounded-2xl border border-border bg-surface p-6">
				<h2 class="text-lg font-semibold">{promise.title}</h2>
				<p class="mt-3 leading-relaxed text-muted">{promise.body}</p>
			</li>
		{/each}
	</ul>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-3xl font-bold tracking-tight">{RHODONITE.colors.heading}</h2>
		<div class="mt-10 grid gap-12 lg:grid-cols-2">
			{#each groups as group (group.label)}
				<div>
					<h3 class="text-sm font-semibold tracking-widest text-muted uppercase">
						{group.label}
					</h3>
					<ul class="mt-5 space-y-4">
						{#each group.colors as color (color.name)}
							<li class="flex items-center gap-4">
								<div class="flex w-21 shrink-0 gap-1" aria-hidden="true">
									<span class="size-10 rounded-lg border border-border {fills[color.dark]}"></span>
									{#if color.light}
										<span class="size-10 rounded-lg border border-border {fills[color.light]}"
										></span>
									{/if}
								</div>
								<div class="min-w-0">
									<p class="font-semibold">{color.name}</p>
									<p class="text-sm text-muted">
										{color.use}:
										{#if color.light}
											<span class="font-mono">{color.dark}</span>
											{RHODONITE.colors.darkLabel},
											<span class="font-mono">{color.light}</span>
											{RHODONITE.colors.lightLabel}
										{:else}
											<span class="font-mono">{color.dark}</span>
										{/if}
									</p>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<section id="install" class="scroll-mt-8 border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<h2 class="text-3xl font-bold tracking-tight">{RHODONITE.install.heading}</h2>
		<ul class="mt-8 grid gap-4 lg:grid-cols-2">
			<li class="flex flex-col rounded-2xl border border-border bg-surface p-6">
				<h3 class="text-xl font-semibold text-balance">{RHODONITE.install.openVsx.heading}</h3>
				<p class="mt-3 text-muted">{RHODONITE.install.openVsx.body}</p>
				<pre
					class="mt-3 overflow-x-auto rounded-lg border border-border bg-bg px-4 py-3 text-sm"><code
						class="cursor-text select-all">{RHODONITE.install.openVsx.command}</code
					></pre>
				<p class="mt-3 text-sm text-muted">{RHODONITE.install.openVsx.note}</p>
				<p class="mt-5 text-sm text-muted">
					<a href={RHODONITE.install.openVsx.url} rel="external" class={link}
						>{RHODONITE.install.openVsx.linkLabel}</a
					>
				</p>
			</li>
			<li class="flex flex-col rounded-2xl border border-border bg-surface p-6">
				<h3 class="text-xl font-semibold">{RHODONITE.install.vscode.heading}</h3>
				<p class="mt-3 text-muted">{RHODONITE.install.vscode.body}</p>
				<div class="mt-5">
					<a href={RHODONITE.install.vscode.url} rel="external" class={secondaryButton}
						>{RHODONITE.install.vscode.linkLabel}</a
					>
				</div>
			</li>
		</ul>
		<p class="mt-8 max-w-3xl leading-relaxed text-muted">{RHODONITE.install.then}</p>
		<pre
			class="mt-3 max-w-3xl overflow-x-auto rounded-lg border border-border bg-surface px-4 py-3 text-sm"><code
				class="cursor-text select-all">{RHODONITE.install.settings}</code
			></pre>
	</div>
</section>

<section class="border-t border-border">
	<div class="mx-auto max-w-5xl px-5 py-20 sm:px-8">
		<p class="max-w-3xl text-xl leading-relaxed">{FREE_PROMISE}</p>
	</div>
</section>
