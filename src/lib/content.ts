// Everything the site says, in one place, so the copy can be reviewed without reading markup.
// It's public copy in Itrium's voice: "we", plain words, no abbreviations. See the brand brief.

export const SITE_URL = 'https://itrium.id';
export const EMAIL = 'hello@itrium.id';
export const SECURITY_EMAIL = 'security@itrium.id';
export const GITHUB_URL = 'https://github.com/itriumid';
export const SOURCE_URL = 'https://github.com/itriumid/website';

export const TITLE = 'Itrium: an Indonesian software studio';
export const DESCRIPTION =
	'An Indonesian software studio: plain advice, applications and websites built to order, and free tools that leave your data alone.';

export const TAGLINE = 'From a quick question to a finished application.';
export const INTRODUCTION =
	'We help people and small businesses with software, from Indonesia. And we make free tools that leave your data alone.';

export const SERVICES = [
	{
		title: 'Advice',
		body: "Plain answers about software and technology: what to build, what to buy, what to avoid, and how to fix what's broken. No jargon, unless you use it first."
	},
	{
		title: 'Projects',
		body: "Applications, websites and landing pages, built to order. Before we start, we tell you what it will cost and what it won't do."
	},
	{
		title: 'Free tools',
		body: 'Small, useful software that anyone can use at no cost. No account, no advertisements, and nothing about you leaves your device.'
	}
];

export const TOOLS = [
	{
		name: 'Honk',
		body: 'A lightweight soundboard for the desktop. Bind sounds to global hotkeys and play them from anywhere, including a menu bar popover on macOS. It makes no network requests at all.',
		platforms: 'macOS, Windows and Linux',
		installHint: 'On a Mac with Homebrew (click the command to select it):',
		install: 'brew install itriumid/tap/honk',
		page: '/honk' as const,
		pageLabel: 'Download and details',
		sourceUrl: 'https://github.com/itriumid/honk'
	},
	{
		name: 'Hindsight',
		body: 'Keeps the last few minutes of what was said near your computer in memory, so when something matters, you save it. Encrypted while it waits, written to disk only when you save, and it never goes online.',
		platforms: 'macOS, Windows and Linux',
		installHint: 'On a Mac with Homebrew (click the command to select it):',
		install: 'brew install itriumid/tap/hindsight',
		page: '/hindsight' as const,
		pageLabel: 'Download and details',
		sourceUrl: 'https://github.com/itriumid/hindsight'
	},
	{
		name: 'Rhodonite Theme',
		body: 'Our palette for Visual Studio Code and the editors built on it: graphite with pink running through it, in dark and light, every color readable at level AA.',
		platforms: 'Visual Studio Code, Cursor, VSCodium and more',
		installHint: 'In Cursor, VSCodium, Windsurf or Antigravity (click the command to select it):',
		install: 'code --install-extension itrium.rhodonite',
		page: '/rhodonite' as const,
		pageLabel: 'Install and details',
		sourceUrl: 'https://github.com/itriumid/vscode-theme-rhodonite'
	}
];

// The tools that run in the browser, on their own site (tools.itrium.id): they need JavaScript,
// which this site promises not to send, so they live on a subdomain with its own policy.
export const WEB_TOOLS = {
	name: 'Web tools',
	body: 'Small tools that run in your browser: make a WhatsApp click-to-chat link from any phone number, or split a bill fairly, tax and service included. Nothing you type is ever sent to us.',
	platforms: 'In any browser',
	url: 'https://tools.itrium.id',
	label: 'Open the tools',
	sourceUrl: 'https://github.com/itriumid/website-tools'
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
export const FOOTNOTE = 'Itrium is the Indonesian word for yttrium: element 39.';

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
			install: 'brew install itriumid/tap/honk'
		},
		{
			system: 'Windows',
			note: 'Windows 10 or 11.',
			primary: { label: 'Download for Windows', url: honkFile('Honk_x64-setup.exe') },
			others: [
				{ label: 'Windows on ARM', url: honkFile('Honk_arm64-setup.exe') },
				{ label: '32-bit Windows', url: honkFile('Honk_x86-setup.exe') }
			]
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
	installHint: 'Or with Homebrew (click the command to select it):',
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
