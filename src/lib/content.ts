// Everything the site says, in one place, so the copy can be reviewed without reading markup.
// It's public copy in Itrium's voice: "we", plain words, no abbreviations. See the brand brief.

export const SITE_URL = 'https://itrium.id';
export const EMAIL = 'hello@itrium.id';
// Itrium's Discord server. The invite never expires; a new one must be set to never expire too.
export const DISCORD_URL = 'https://discord.gg/ARpBjrD77C';
export const SECURITY_EMAIL = 'security@itrium.id';
export const GITHUB_URL = 'https://github.com/itriumid';
export const SOURCE_URL = 'https://github.com/itriumid/website';

export const TITLE = 'Itrium: an Indonesian software studio';
export const DESCRIPTION =
	'An Indonesian software studio: plain advice, applications and websites built to order, and free applications, tools and games that leave your data alone.';

// The hero sets the second half in pink, so the tagline is kept in its two halves.
export const TAGLINE_PARTS = ['From a quick question to', 'a finished application.'] as const;
export const TAGLINE = TAGLINE_PARTS.join(' ');
export const INTRODUCTION =
	'We help people and small businesses with software, from Indonesia. And we make free applications, tools and games that leave your data alone.';

// The free stuff link's label, on its card in "What we do" and under the free stuff section.
const SEE_FREE_STUFF = 'See everything we make for free';

// Each card in "What we do" links to what comes next: a page on this site, or a section of the
// home page.
type Service = { title: string; body: string; more: string } & (
	{ page: '/work' | '/free-stuff' } | { hash: `#${string}` }
);

export const SERVICES: Service[] = [
	{
		title: 'Advice',
		body: "Plain answers about software and technology: what to build, what to buy, what to avoid, and how to fix what's broken. No jargon, unless you use it first.",
		// Advice is the conversation itself, so its card leads to the contact section.
		more: 'Ask us something',
		hash: '#contact'
	},
	{
		title: 'Projects',
		body: "Applications, websites and landing pages, built to order. Before we start, we tell you what it will cost and what it won't do.",
		more: 'See our work',
		page: '/work'
	},
	{
		title: 'Free stuff',
		body: 'Applications, tools and games that anyone can use at no cost. No account, no advertisements, and nothing about you leaves your device.',
		more: SEE_FREE_STUFF,
		page: '/free-stuff'
	}
];

// Everything we make for free, grouped by where it runs rather than by what it is: whether
// something is an application or a tool matters less to a visitor than whether they have to
// install it. The home page shows each item's `summary`; /free-stuff shows the full `body`. An item
// links to its own page on this site (`page`) or to where it runs (`url`): what runs in the
// browser lives on its own subdomain, since it needs JavaScript, which this site promises not to
// send. Install commands stay on each item's own page, below the download buttons.
type FreeItem = {
	name: string;
	summary: string;
	body: string;
	platforms: string;
	label: string;
	sourceUrl: string;
} & ({ page: '/honk' | '/hindsight' | '/rhodonite' | '/tall-order' } | { url: string });

export const AMBER: FreeItem = {
	name: 'Amber',
	summary: 'Lists for to-dos and bucket lists that stay on your device.',
	body: 'Lists for to-dos and bucket lists, with categories, tags, steps and search. It works offline and installs to your home screen, and your lists stay on your device: no account, and nobody else can read them.',
	platforms: 'In any browser',
	url: 'https://amber.itrium.id',
	label: 'Open Amber',
	sourceUrl: 'https://github.com/itriumid/amber'
};

export const WEB_TOOLS: FreeItem = {
	name: 'Web tools',
	summary: 'A WhatsApp chat link from any number, and a fair way to split a bill.',
	body: 'Small tools that run in your browser: make a WhatsApp click-to-chat link from any phone number, or split a bill fairly, tax and service included. Nothing you type is ever sent to us.',
	platforms: 'In any browser',
	url: 'https://tools.itrium.id',
	label: 'Open the tools',
	sourceUrl: 'https://github.com/itriumid/website-tools'
};

export const HONK_ITEM: FreeItem = {
	name: 'Honk',
	summary: 'A soundboard: play any sound with a keyboard shortcut.',
	body: 'A lightweight soundboard. Give each sound its own keyboard shortcut and play it from whatever you have open, or from the menu bar on a Mac. It never goes online.',
	platforms: 'Mac, Windows and Linux',
	page: '/honk',
	label: 'Download and details',
	sourceUrl: 'https://github.com/itriumid/honk'
};

export const HINDSIGHT_ITEM: FreeItem = {
	name: 'Hindsight',
	summary: 'Keeps the last few minutes of what was said, so you can save it.',
	body: 'Keeps the last few minutes of what was said near your computer in memory, so when something matters, you save it. Encrypted while it waits, written to disk only when you save, and it never goes online.',
	platforms: 'Mac, Windows and Linux',
	page: '/hindsight',
	label: 'Download and details',
	sourceUrl: 'https://github.com/itriumid/hindsight'
};

export const TALL_ORDER_ITEM: FreeItem = {
	name: 'Felterra: Tall Order',
	summary: 'A pixel art game of cats against giants, to play alone or with friends.',
	body: "A pixel art game of cats against giants. A company has stamped Tompel's forest idle land and sent its machines in: free it area by area, bring your village back from ruin, and find out who's behind it all. A work in progress, built in the open.",
	platforms: 'Windows, Mac and Linux',
	page: '/tall-order',
	label: 'Download and details',
	sourceUrl: 'https://github.com/itriumid/felterra-tall-order'
};

export const RHODONITE_ITEM: FreeItem = {
	name: 'Rhodonite Theme',
	summary: 'Our graphite and pink, as a color theme for your code editor.',
	body: 'Our palette for Visual Studio Code and the editors built on it: graphite with pink running through it, in dark and light, and every color checked to be easy to read.',
	platforms: 'Visual Studio Code, Cursor, VSCodium and more',
	page: '/rhodonite',
	label: 'Install and details',
	sourceUrl: 'https://github.com/itriumid/vscode-theme-rhodonite'
};

export const FREE_STUFF = {
	title: 'Free stuff: everything Itrium makes for free',
	description:
		'Free applications, tools and games from Itrium, for your browser, Mac, Windows and Linux. No account, no advertisements, and nothing that tracks you.',
	label: 'Free stuff',
	heading: 'Everything we make for free',
	introduction:
		'Applications, tools and games that anyone can use at no cost. No account, no advertisements, and nothing about you leaves your device. Some open right in your browser; others you download once.',
	more: SEE_FREE_STUFF,
	groups: [
		{
			id: 'browser',
			heading: 'In your browser',
			body: 'Nothing to install. Open it on your phone or your computer, and start.',
			items: [AMBER, WEB_TOOLS]
		},
		{
			id: 'computer',
			heading: 'On your computer',
			body: 'Download once, for Mac, Windows or Linux. Your computer will ask you to confirm the first time you open it, and each page shows you how.',
			items: [HONK_ITEM, HINDSIGHT_ITEM]
		},
		{
			id: 'games',
			heading: 'Games',
			body: 'Free to download and play, with no advertisements.',
			items: [TALL_ORDER_ITEM]
		},
		{
			id: 'programmers',
			heading: 'For programmers',
			body: "If you write code, this one is for you. If you don't, you can safely skip it.",
			items: [RHODONITE_ITEM]
		}
	]
};

export const FREE_PROMISE =
	"Everything we make for free stays free: no hidden upsell, no account wall and no advertisements. It doesn't collect, track or sell anything, and it's open source, so you can check.";

export const GRAY_AREA = [
	'Very little in software is one size fits all. Every person, business and problem is its own case, and the honest answer usually starts with "it depends". Our job is to find out what it depends on.',
	"That's why our color is graphite, not black: a gray, with pink running through it."
];

export const PRINCIPLES = [
	{
		title: 'Privacy by default',
		body: "If a tool doesn't need your data, it never sees it. Client work follows the same rule: we collect only what the job needs."
	},
	{
		title: 'Free means free',
		body: 'Free tools stay free, with nothing held back to sell you later.'
	},
	{
		title: 'Simple',
		body: 'Easy to understand and easy to use. Less, done well.'
	},
	{
		title: 'Honest',
		body: "We say what a tool does and doesn't do, and what a project will and won't cost."
	}
];

export const CONTACT_HEADING = "Tell us what you're stuck on.";
export const CONTACT_BODY =
	"The first conversation is free. Tell us what you're stuck on, and we'll tell you honestly whether we can help.";

export const NO_TRACKING =
	'This site has no cookies, no analytics and no trackers. It runs no scripts at all.';
// Why the name, on the home page beside how we work. It replaced a footnote in the footer.
export const NAME_STORY = {
	heading: 'Why Itrium',
	body: "Itrium is the Indonesian word for yttrium, element 39. Hardly anyone has heard of it, yet it's in many of the white lights and screens people look at every day: quiet, useful and out of sight, which is how we think good software should be. Read it another way and it's IT with -rium, the Latin ending of aquarium and auditorium that makes a word into a place: a place for IT."
};

// The Honk page, at /honk. Each release carries its main installers under names without the
// version (Honk_universal.dmg) too, and releases/latest/download/ serves them from the newest
// release, so these links never need changing.
const honkFile = (name: string) =>
	`https://github.com/itriumid/honk/releases/latest/download/${name}`;

export const HONK = {
	title: 'Honk: a free soundboard with global hotkeys',
	description:
		'Honk is a free, open source soundboard for macOS, Windows and Linux. Bind sounds to global hotkeys and play them from anywhere. It makes no network requests at all.',
	tagline: 'A lightweight soundboard for the desktop.',
	introduction:
		"Import your sounds, bind them to global hotkeys, and play them without leaving whatever you're doing. It's free, it's open source, and it makes no network requests at all.",
	screenshot:
		"Honk's main window: a grid of sound pads in three categories, with Sad Trombone playing",
	// Shown beside a screenshot each; `image` names the pair in src/lib/screenshots.
	highlights: [
		{
			title: 'A menu bar popover',
			body: 'On macOS, search your sounds and play your favorites from the menu bar, without switching windows.',
			image: 'popover',
			alt: 'The menu bar popover: a search field, category chips and six favorite sounds'
		},
		{
			title: 'Categories',
			body: 'Sort sounds into categories, and filter by them in the main window and the popover.',
			image: 'category',
			alt: 'The main window showing only the four sounds in the Goose Mode category'
		},
		{
			title: 'Share a whole board',
			body: "Export your sounds as one .honk file for someone else to import. Before anything is added, they see what's new and where it goes, and hotkeys only come along if they say so.",
			image: 'import',
			alt: 'The import preview: 13 new sounds, where each goes, and an unticked box to import their hotkeys'
		}
	] as const,
	features: [
		{
			title: 'Global hotkeys',
			body: 'Give any sound its own shortcut, and play it from whichever application you have open.'
		},
		{
			title: 'Two outputs at once',
			body: 'Play through your headphones and a virtual audio cable together, so you hear exactly what your call or stream hears.'
		},
		{
			title: 'Your sounds stay yours',
			body: 'Sounds are copied into your library, so moving the originals never breaks anything. Nothing is uploaded, ever.'
		},
		{
			title: 'Pick your colors',
			body: 'Stay with Rhodonite, our graphite and pink, or switch to Catppuccin Mocha, Macchiato or Frappé. Each comes in light and dark, and every one is checked for readable contrast.'
		}
	],
	downloads: [
		{
			system: 'macOS',
			note: 'One download for every Mac, Apple silicon or Intel.',
			primary: { label: 'Download for Mac', url: honkFile('Honk_universal.dmg') },
			others: [],
			installHint: 'Or with Homebrew (click the command to select it):',
			install: 'brew install itriumid/tap/honk'
		},
		{
			system: 'Windows',
			note: 'Windows 10 or 11.',
			primary: { label: 'Download for Windows', url: honkFile('Honk_x64-setup.exe') },
			others: [
				{ label: 'Windows on ARM', url: honkFile('Honk_arm64-setup.exe') },
				{ label: '32-bit Windows', url: honkFile('Honk_x86-setup.exe') }
			],
			installHint: 'Or with winget, in a terminal (click the command to select it):',
			install: 'winget install Itrium.Honk'
		},
		{
			system: 'Linux',
			note: 'Debian, Ubuntu, Fedora, openSUSE and the rest.',
			primary: { label: 'Download .deb', url: honkFile('Honk_amd64.deb') },
			others: [
				{ label: '.rpm', url: honkFile('Honk.x86_64.rpm') },
				{ label: 'AppImage', url: honkFile('Honk_amd64.AppImage') },
				{ label: 'ARM .deb', url: honkFile('Honk_arm64.deb') },
				{ label: 'ARM .rpm', url: honkFile('Honk.aarch64.rpm') },
				{ label: 'ARM AppImage', url: honkFile('Honk_aarch64.AppImage') }
			]
		}
	],
	allDownloads: {
		body: 'The .msi installers, portable Windows executables and every earlier version are on the releases page.',
		url: 'https://github.com/itriumid/honk/releases'
	},
	unsigned: {
		heading: 'Your computer will ask you to confirm, once',
		body: "Signing certificates cost money every year, and Honk is free, so it isn't signed by a verified developer yet. It's built from its public source code, on GitHub's machines, but your system can't know that, so it asks the first time.",
		steps: [
			{
				system: 'macOS',
				body: 'Open Honk once and click Done on the warning. Then open System Settings, go to Privacy & Security, and click Open Anyway next to the message about Honk.'
			},
			{
				system: 'Windows',
				body: 'When SmartScreen says "Windows protected your PC", click More info, then Run anyway.'
			},
			{
				system: 'Linux',
				body: 'No warning. For the AppImage, make it executable first: chmod +x, then run it.'
			}
		],
		moreUrl:
			'https://github.com/itriumid/honk#honk-isnt-signed-so-your-system-will-warn-you-the-first-time'
	},
	sourceUrl: 'https://github.com/itriumid/honk'
};

const hindsightFile = (name: string) =>
	`https://github.com/itriumid/hindsight/releases/latest/download/${name}`;

export const HINDSIGHT = {
	title: 'Hindsight: keep the last few minutes of what was said',
	description:
		'Hindsight is a free, open source app for macOS, Windows and Linux that keeps the last few minutes of what was said in memory, so you can save it when it turns out to matter. Encrypted, local, and it never goes online.',
	tagline: "Keep the last few minutes, so you don't have to.",
	introduction:
		"Someone walks up and says something you'll want to check later, but it's over before you'd think to record. Hindsight was already listening: it keeps the last few minutes in memory and forgets anything older. When it matters, you save it.",
	screenshot:
		"Hindsight's main window: recording from the microphone, holding the last hour and 14 minutes, with two saved clips",
	// Shown beside a screenshot each; `image` names the pair in src/lib/screenshots.
	highlights: [
		{
			title: 'Go back to when it started',
			body: 'Choose… opens a timeline of everything Hindsight holds, up to three hours. Quiet stretches show where a conversation began: drag the start and the end there, listen to check, and save exactly that.',
			image: 'timeline',
			alt: 'The timeline: an hour and 17 minutes held, a quiet stretch a third of the way in, and the 44 minutes after it chosen'
		},
		{
			title: 'From the menu bar',
			body: 'Save the last minute, 5 minutes or 15 minutes, or open the timeline, without opening a window. A shortcut you choose saves from any application.',
			image: 'menu',
			alt: 'The menu bar menu: what Hindsight is recording from, how much it holds, and the ways to save'
		},
		{
			title: 'Pick your colors',
			body: "Rhodonite, Itrium's own, or one of three Catppuccin flavors, each in light and dark. Every palette meets level AA contrast, which we check before any of them ships.",
			image: 'colors',
			alt: "Hindsight's main window in the Catppuccin Mocha palette"
		}
	] as const,
	promises: [
		{
			title: 'In memory only',
			body: 'Nothing is written to disk until you save a clip. Until then, the last few minutes exist only in memory.'
		},
		{
			title: 'Encrypted while it waits',
			body: 'The buffer is encrypted with a key that exists only while Hindsight runs, so even if your system swaps memory to disk, it writes scrambled bytes.'
		},
		{
			title: 'Never leaves your computer',
			body: 'Hindsight makes no network requests. Clips are ordinary audio files in a folder you choose.'
		}
	],
	features: [
		{
			title: 'Up to three hours',
			body: 'Keep 15 minutes or up to three hours. Three hours takes about 22 MB of memory and a little over one percent of a processor core.'
		},
		{
			title: 'A fallback microphone',
			body: 'Record from your phone or a headset; if it disconnects or goes quiet, Hindsight switches to a fallback and back again by itself.'
		},
		{
			title: 'Your clips, playable anywhere',
			body: 'Play clips inside Hindsight, or export them as WAV for any other application. Delete them for good when you no longer need them.'
		},
		{
			title: 'Starts when you log in',
			body: "Hindsight can start quietly in the menu bar when you log in. It's off until you turn it on, since starting means recording."
		}
	],
	people: {
		heading: 'Recording people',
		body: "In many places, recording a conversation needs the consent of everyone in it. Hindsight shows that it's recording, and your system shows its microphone indicator, but whether recording is allowed where you are is up to you. Let the people around you know."
	},
	downloads: [
		{
			system: 'macOS',
			note: 'One download for every Mac, Apple silicon or Intel.',
			primary: { label: 'Download for Mac', url: hindsightFile('Hindsight_universal.dmg') },
			others: [],
			install: 'brew install itriumid/tap/hindsight'
		},
		{
			system: 'Windows',
			note: 'Windows 10 or 11.',
			primary: { label: 'Download for Windows', url: hindsightFile('Hindsight_x64-setup.exe') },
			others: [
				{ label: 'Windows on ARM', url: hindsightFile('Hindsight_arm64-setup.exe') },
				{ label: '32-bit Windows', url: hindsightFile('Hindsight_x86-setup.exe') }
			]
		},
		{
			system: 'Linux',
			note: 'Debian, Ubuntu, Fedora, openSUSE and the rest.',
			primary: { label: 'Download .deb', url: hindsightFile('Hindsight_amd64.deb') },
			others: [
				{ label: '.rpm', url: hindsightFile('Hindsight.x86_64.rpm') },
				{ label: 'AppImage', url: hindsightFile('Hindsight_amd64.AppImage') },
				{ label: 'ARM .deb', url: hindsightFile('Hindsight_arm64.deb') },
				{ label: 'ARM .rpm', url: hindsightFile('Hindsight.aarch64.rpm') },
				{ label: 'ARM AppImage', url: hindsightFile('Hindsight_aarch64.AppImage') }
			]
		}
	],
	installHint: 'Or with Homebrew (click the command to select it):',
	allDownloads: {
		body: 'The .msi installers, portable Windows executables and every earlier version are on the releases page.',
		url: 'https://github.com/itriumid/hindsight/releases'
	},
	unsigned: {
		heading: 'Your computer will ask you to confirm, once',
		body: "Signing certificates cost money every year, and Hindsight is free, so it isn't signed by a verified developer yet. It's built from its public source code, on GitHub's machines, but your system can't know that, so it asks the first time. It will also ask whether Hindsight may use the microphone.",
		steps: [
			{
				system: 'macOS',
				body: 'Open Hindsight once and click Done on the warning. Then open System Settings, go to Privacy & Security, and click Open Anyway next to the message about Hindsight.'
			},
			{
				system: 'Windows',
				body: 'When SmartScreen says "Windows protected your PC", click More info, then Run anyway.'
			},
			{
				system: 'Linux',
				body: 'No warning. For the AppImage, make it executable first: chmod +x, then run it.'
			}
		]
	},
	sourceUrl: 'https://github.com/itriumid/hindsight'
};

// The Rhodonite page, at /rhodonite: the palette, and the editor theme made from it. The theme is
// on Open VSX, which most editors built on Visual Studio Code install from, but not on
// Microsoft's marketplace, which Visual Studio Code itself uses.
export const RHODONITE = {
	title: 'Rhodonite: our color palette, for your editor',
	description:
		"Rhodonite, Itrium's palette, as a free color theme for Visual Studio Code, Cursor, VSCodium and other editors: graphite with pink running through it, in dark and light, every color readable at level AA.",
	tagline: 'Graphite, with pink running through it.',
	introduction:
		'Rhodonite is our palette, named after the mineral. It colors everything we make, and now it can color your editor too: a theme for Visual Studio Code and the editors built on it, in dark and light.',
	sample: 'A short TypeScript file in the Rhodonite theme',
	pink: {
		heading: 'Pink means something',
		body: "Most of the window stays graphite and gray. Pink marks the few things worth finding at a glance: the cursor, the active tab, what has focus, and the button that does the main thing. In code, it's the keywords. Everything else gets a quieter color that sits next to the pink instead of competing with it."
	},
	promises: [
		{
			title: 'Readable, not just pretty',
			body: 'Every color meets level AA of the Web Content Accessibility Guidelines, in dark and light, on every surface it sits on: the editor, the current line, a selection, every menu. A test checks every pairing before a version ships.'
		},
		{
			title: 'Follows your system',
			body: "Rhodonite when your computer is in dark mode, Rhodonite Light when it's in light mode, if you let it switch."
		},
		{
			title: 'One palette everywhere',
			body: 'The theme takes its colors from the same place as Honk and Hindsight, so our editor, our applications and our website never drift apart.'
		}
	],
	// Shown as swatches. A color with one value is the same in dark and light.
	colors: {
		heading: 'The colors',
		palette: [
			{ name: 'Graphite', use: 'Backgrounds, and text in light mode', dark: '#2B2B2B' },
			{ name: 'Pastel pink', use: 'The one accent', dark: '#FEBFCA' },
			{ name: 'Deep rose', use: 'Pink as a line in light mode', dark: '#C46475' },
			{ name: 'Off-white', use: 'Text in dark mode', dark: '#F2F2F2' },
			{ name: 'Muted gray', use: 'Secondary text and comments', dark: '#AAAAAA', light: '#6B6B6B' }
		],
		code: [
			{ name: 'Sage', use: 'Strings', dark: '#A9C9A0', light: '#3F7339' },
			{ name: 'Sand', use: 'Numbers and constants', dark: '#E6CF98', light: '#7F6216' },
			{ name: 'Blue', use: 'Functions and links', dark: '#9FB5D8', light: '#3A5F93' },
			{ name: 'Teal', use: 'Types and classes', dark: '#9DCEC7', light: '#2F7069' },
			{ name: 'Rose', use: 'Errors and deletions', dark: '#F58C9D', light: '#B03A4F' }
		],
		paletteLabel: 'Palette',
		codeLabel: 'Code',
		darkLabel: 'dark',
		lightLabel: 'light'
	},
	install: {
		heading: 'Install',
		openVsx: {
			heading: 'Cursor, VSCodium, Windsurf, Antigravity and other editors that use Open VSX',
			body: 'Search for Rhodonite in the Extensions view, or run:',
			command: 'code --install-extension itrium.rhodonite',
			note: "with your editor's own command in place of code.",
			linkLabel: 'Rhodonite on Open VSX',
			url: 'https://open-vsx.org/extension/itrium/rhodonite'
		},
		vscode: {
			heading: 'Visual Studio Code',
			body: "It isn't on Microsoft's marketplace yet. Download the .vsix from the latest release, then run code --install-extension with the file.",
			linkLabel: 'Latest release',
			url: 'https://github.com/itriumid/vscode-theme-rhodonite/releases/latest'
		},
		then: 'Then choose Rhodonite or Rhodonite Light under Preferences: Color Theme. To switch with your system, add this to your settings:',
		settings: `{
  "window.autoDetectColorScheme": true,
  "workbench.preferredDarkColorTheme": "Rhodonite",
  "workbench.preferredLightColorTheme": "Rhodonite Light"
}`
	},
	sourceUrl: 'https://github.com/itriumid/vscode-theme-rhodonite'
};

// The Felterra: Tall Order page, at /tall-order. Its builds are named without the version
// (FelterraTallOrder_windows_x86_64.zip), and releases/latest/download/ serves them from the
// newest release, so these links never need changing.
const tallOrderFile = (name: string) =>
	`https://github.com/itriumid/felterra-tall-order/releases/latest/download/${name}`;

export const TALL_ORDER = {
	title: 'Felterra: Tall Order, a free game of cats against giants',
	description:
		'Felterra: Tall Order is a free pixel art game for Windows, macOS and Linux: a cat named Tompel and his village take their forest back from the company clearing it, one area at a time.',
	tagline: 'A crew of cats against giants.',
	introduction:
		"A company has stamped Tompel's forest idle land and sent its machines in. Fight your way through it area by area, bring your village back from ruin, and find out who's behind it all. It's early days: the game is a work in progress, and we're building it in the open.",
	screenshot:
		'Tompel in a fight: rats closing in from every side, a company worker towering over him, and three cards to choose his next upgrade from',
	// Shown beside a screenshot each; `image` names it in src/lib/screenshots.
	highlights: [
		{
			title: 'You steer, the cat fights',
			body: "Tompel's weapons aim and strike on their own, one in his mouth and one in his tail, while you move him, dodge, and choose what he grows into. Every level brings a choice of three cards: a new weapon, gear he wears where you can see it, or a new trick for his dodge.",
			image: 'fight',
			alt: 'Tompel in a fight, with three upgrade cards to choose from'
		},
		{
			title: 'Free the forest, area by area',
			body: "Seven hand-made places, each with its own goal and its own boss: break the rat nests, free the caged, wreck the saws. Each looks wrecked while the company holds it, and grows green again once it's free. Or play Endless, a fresh clearing every run, for the highest score.",
			image: 'map',
			alt: 'The map of the forest: five areas freed under our flags, the log slide still held by the company, the rest not yet found'
		},
		{
			title: 'A village that comes back',
			body: "Every cat you free comes home, and the story brings the village back with them: a smith for the forge, a weaver for new looks, a carpenter for the longhouse. Jogiboy, who lives next door to the Elder, finds you things while you're out.",
			image: 'village',
			alt: 'The village restored: thatched huts, a well, a market stall, and the cats who live there'
		},
		{
			title: 'Everyone speaks for themselves',
			body: 'The cast tell the story in their own words, with a portrait for every mood. Every scene can be hurried along or skipped, or set to wait until you have read each line.',
			image: 'dialog',
			alt: 'The Elder welcoming Tompel home: "Look at you. Did nobody feed you down there?"'
		}
	] as const,
	features: [
		{
			title: 'Honest physics',
			body: 'Anything that moves, falls or breaks does it through the physics, never a canned animation. A felled giant crushes whatever is under him, his own dogs included.'
		},
		{
			title: 'Fair warning',
			body: "Every hit is shown before it lands: a shadow before a boot comes down, a crouch before a dog leaps. A card's rarity shows in its shape as well as its color."
		},
		{
			title: 'Everything has a story',
			body: 'Every weapon, piece of gear and trick has a line on where it came from, many of them from Indonesia: the kris, the golok, the bamboo spear.'
		},
		{
			title: 'Satire, not cynicism',
			body: "The company is made up, and so is the agency it works with, but the way the land gets cleared isn't. The joke is the system, never the people caught up in it."
		}
	],
	free: {
		heading: 'Free, and how it will pay for itself',
		body: "Tall Order is free to download and play, with no advertisements and nothing that tracks you. We haven't worked out yet how it can pay its own way. Whatever we choose, we'll say so plainly before it happens, and the game you can download stays free."
	},
	art: {
		heading: 'How the art is made, for now',
		body: "For now, the game's pixel art, sounds and music are made with AI tools. They're placeholders: a way to build and test a whole game before there's money to pay anyone for it. Once Tall Order earns enough, we want real artists and musicians to replace them, piece by piece, and to credit them by name."
	},
	together: {
		heading: 'Make it with us',
		body: "If you draw pixel art, make sound or music, or build games, and Tall Order is something you'd like to work on, write to us or find us on Discord. We'd love to hear from you."
	},
	downloads: [
		{
			system: 'Windows',
			note: 'Windows 10 or 11, 64-bit.',
			primary: {
				label: 'Download for Windows',
				url: tallOrderFile('FelterraTallOrder_windows_x86_64.zip')
			},
			others: []
		},
		{
			system: 'macOS',
			note: 'One download for every Mac, Apple silicon or Intel.',
			primary: {
				label: 'Download for Mac',
				url: tallOrderFile('FelterraTallOrder_macos_universal.zip')
			},
			others: []
		},
		{
			system: 'Linux',
			note: 'Any distribution, on 64-bit Intel and AMD, or ARM.',
			primary: {
				label: 'Download for Linux',
				url: tallOrderFile('FelterraTallOrder_linux_x86_64.zip')
			},
			others: [{ label: 'ARM', url: tallOrderFile('FelterraTallOrder_linux_arm64.zip') }]
		}
	],
	downloadsNote: 'Each is a zip: unzip it and run the game inside.',
	allDownloads: {
		body: 'Every earlier version, and checksums for each download, are on the releases page.',
		url: 'https://github.com/itriumid/felterra-tall-order/releases'
	},
	unsigned: {
		heading: 'Your computer will ask you to confirm, once',
		body: "Signing certificates cost money every year, and Tall Order is free, so it isn't signed by a verified developer yet. It's built from its public source code, on GitHub's machines, but your system can't know that, so it asks the first time.",
		steps: [
			{
				system: 'Windows',
				body: 'When SmartScreen says "Windows protected your PC", click More info, then Run anyway.'
			},
			{
				system: 'macOS',
				body: 'Open the game once and click Done on the warning. Then open System Settings, go to Privacy & Security, and click Open Anyway next to the message about Felterra Tall Order.'
			},
			{
				system: 'Linux',
				body: 'No warning. Make the game executable first if your file manager asks: chmod +x, then run it.'
			}
		]
	},
	sourceUrl: 'https://github.com/itriumid/felterra-tall-order'
};

// Client work, shown with each client's permission. /work lists every entry, and the home page's
// "Our work" section shows them too, each with its `summary`; each has its own page at
// /work/<slug>. Facts about a client (what they do, when the site went live) come from them, and
// the page says only what we did. The process describes steps, never prices: an estimate is
// written per project.
export const WORK = {
	label: 'Our work',
	more: 'Read about it',
	title: 'Our work: websites and applications built by Itrium',
	description:
		'Websites and applications we have built for clients, shown with their permission, and how a project with us goes.',
	heading: 'Our work',
	introduction:
		'What we have built for clients, shown with their permission. Each has its own page: what they needed, and what we made.',
	process: {
		heading: 'How a project goes',
		steps: [
			{
				title: 'A first conversation',
				body: "Free. Tell us what you need, and we'll tell you honestly whether we're the right people for it."
			},
			{
				title: 'A written estimate',
				body: "What it will cost, how long it will take, and what it won't do, in writing, before any work starts."
			},
			{
				title: 'Building it',
				body: "You follow the work on a private preview as it grows, and we change course with you when something isn't right."
			},
			{
				title: 'Handing it over',
				body: 'It runs on accounts you own, and you get what you need to keep it up to date yourself, or we can keep looking after it for you.'
			}
		]
	}
};

export const LINTECH = {
	title: 'Lintech Energy Shipping: a company website by Itrium',
	description:
		'The website we built for PT. Lintech Energy Shipping, a shipyard and energy logistics company in East Java: two languages, light and dark, a 360° view of its shipyard, and articles its team can publish themselves.',
	name: 'Lintech Energy Shipping',
	summary:
		'A company website for a shipyard in East Java: two languages, a 360° view of the yard, and articles its team can publish themselves.',
	tagline: 'A shipyard, online in two languages.',
	introduction:
		'PT. Lintech Energy Shipping repairs and builds ships at its yard on the coast of East Java, and carries cargo by tug and barge. It needed a website that shows that work to customers who read Indonesian or English, and that its own team can keep up to date. We designed and built it, and it went live in October 2026.',
	siteUrl: 'https://lintechshipping.co.id',
	siteLabel: 'Visit lintechshipping.co.id',
	// The preview where the page is shared: the client's home page, 1200 by 630, in static/social.
	socialImage: { path: '/social/lintech-shipping.jpg', width: 1200, height: 630 },
	screenshot:
		"The site's home page: the company's name, a line about its team, and its video, paused on an aerial view of the shipyard",
	// Shown beside a screenshot each; `image` names it in src/lib/screenshots (lintech-<image>-*).
	highlights: [
		{
			title: 'Every project, with its photos',
			body: "Fourteen projects, each with its own page: what was done, for whom and when, with a row of photos from the yard. We picked them from the company's own folders and videos, cropped off the burned-in timestamps, and stripped the location data that drone photos carry.",
			image: 'drajat',
			alt: 'The page for the ferry KMP Drajat, opening with a drone photo of the ship on the slipway'
		},
		{
			title: 'The shipyard from the air, in 360°',
			body: 'We stitched 26 drone photos into one panorama that visitors can turn and zoom. It loads only when someone starts it, so the rest of the site stays light.',
			image: 'facility',
			alt: 'The facility page, with an aerial view of the coast and a button to start the 360° view'
		}
	] as const,
	features: [
		{
			title: 'A video everyone can follow',
			body: "The company video plays on the home page with captions in both languages, and in a version with audio description for people who can't see it."
		},
		{
			title: 'Articles without us',
			body: 'The team writes articles in an online editor. The site rebuilds itself and publishes them within a few minutes.'
		},
		{
			title: 'Indonesian and English',
			body: 'Every page in both languages, and search engines told which is which.'
		},
		{
			title: 'Light and dark',
			body: "In the company's colors, following the visitor's device unless they choose otherwise."
		},
		{
			title: 'Nothing from third parties',
			body: "No trackers and no advertisements, and nothing loads from YouTube or anyone else. The video comes from the company's own server."
		},
		{
			title: 'Readable by everyone',
			body: 'It meets level AA of the Web Content Accessibility Guidelines, in both languages and both themes.'
		},
		{
			title: 'Quick on a phone',
			body: 'Every page is built ahead of time, and the heavy parts, the video and the panorama, wait until the rest has loaded.'
		},
		{
			title: 'No new bills',
			body: 'It runs on the hosting the company was already paying for.'
		}
	],
	closing: {
		heading: 'Need a website like this?',
		body: "Tell us about your business and what the site should do. The first conversation is free, and before we start, we tell you what it will cost and what it won't do."
	}
};
