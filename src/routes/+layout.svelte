<script lang="ts">
	import '../app.css';
	import { resolve } from '$app/paths';
	import lockupOnDark from '#lib/itrium-lockup-on-dark.svg';
	import lockupOnLight from '#lib/itrium-lockup-on-light.svg';
	// The font's Latin file, the only one an English page needs. Fetched early, it's ready before
	// the first paint, so headings don't reflow (and push the page down) when it arrives.
	import latinFont from '@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2?url';
	import {
		DISCORD_URL,
		EMAIL,
		GITHUB_URL,
		INSTAGRAM_URL,
		NO_TRACKING,
		SECURITY_EMAIL,
		SOURCE_URL,
		THREADS_URL
	} from '#lib/content.js';

	const { children } = $props();
	// What we do and Contact are sections of the home page, so these links work from every page.
	const home = resolve('/');
</script>

<svelte:head>
	<link rel="preload" href={latinFont} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a
	href="#main"
	class="absolute -top-full left-4 z-10 rounded-b-lg bg-accent px-4 py-2 font-semibold text-on-accent focus:top-0"
>
	Skip to content
</a>

<header class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-6 sm:px-8">
	<a href={resolve('/')} class="shrink-0">
		<picture>
			<source srcset={lockupOnDark} media="(prefers-color-scheme: dark)" />
			<img src={lockupOnLight} alt="Itrium" width="131" height="40" class="h-10 w-auto" />
		</picture>
	</a>
	<nav aria-label="Main">
		<ul class="flex items-center gap-5 text-sm font-medium whitespace-nowrap text-muted sm:gap-7">
			<li class="hidden sm:block">
				<a
					href="{home}#services"
					class="-my-1 inline-flex min-h-11 items-center transition-colors hover:text-text"
					>What we do</a
				>
			</li>
			<!-- Hidden on phones with "What we do": four items don't fit beside the logo there. -->
			<li class="hidden sm:block">
				<a
					href={resolve('/work')}
					class="-my-1 inline-flex min-h-11 items-center transition-colors hover:text-text"
					>Our work</a
				>
			</li>
			<li>
				<a
					href={resolve('/free-stuff')}
					class="-my-1 inline-flex min-h-11 items-center transition-colors hover:text-text"
					>Free stuff</a
				>
			</li>
			<li>
				<a
					href="{home}#contact"
					class="-my-1 inline-flex min-h-11 items-center transition-colors hover:text-text"
					>Contact</a
				>
			</li>
		</ul>
	</nav>
</header>

<main id="main">
	{@render children()}
</main>

<footer class="border-t border-border">
	<div
		class="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-10 text-sm text-muted sm:flex-row sm:justify-between sm:px-8"
	>
		<div class="space-y-2">
			<p>© {new Date().getFullYear()} Itrium</p>
			<p>{NO_TRACKING}</p>
		</div>
		<!-- Plain links, all of them: nothing here loads anything from those sites. On phones each
		     is tall enough to tap. -->
		<ul
			class="grid shrink-0 grid-cols-2 gap-x-6 sm:grid-flow-col sm:grid-rows-4 sm:gap-x-10 sm:gap-y-2 sm:text-right"
		>
			<li>
				<a
					href="mailto:{EMAIL}"
					class="inline-flex min-h-11 items-center transition-colors hover:text-text sm:min-h-0"
					>{EMAIL}</a
				>
			</li>
			<li>
				<a
					href={DISCORD_URL}
					rel="external"
					class="inline-flex min-h-11 items-center transition-colors hover:text-text sm:min-h-0"
					>Discord</a
				>
			</li>
			<li>
				<a
					href={INSTAGRAM_URL}
					rel="external"
					class="inline-flex min-h-11 items-center transition-colors hover:text-text sm:min-h-0"
					>Instagram</a
				>
			</li>
			<li>
				<a
					href={THREADS_URL}
					rel="external"
					class="inline-flex min-h-11 items-center transition-colors hover:text-text sm:min-h-0"
					>Threads</a
				>
			</li>
			<li>
				<a
					href={GITHUB_URL}
					rel="external"
					class="inline-flex min-h-11 items-center transition-colors hover:text-text sm:min-h-0"
					>GitHub</a
				>
			</li>
			<li>
				<a
					href={SOURCE_URL}
					rel="external"
					class="inline-flex min-h-11 items-center transition-colors hover:text-text sm:min-h-0"
					>This site's source</a
				>
			</li>
			<li>
				<a
					href="mailto:{SECURITY_EMAIL}"
					class="inline-flex min-h-11 items-center transition-colors hover:text-text sm:min-h-0"
					>Report a security problem</a
				>
			</li>
		</ul>
	</div>
</footer>
