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
		install: 'brew install itriumid/tap/honk',
		page: '/honk' as const,
		sourceUrl: 'https://github.com/itriumid/honk'
	}
];

export const INSTALL_HINT = 'On a Mac with Homebrew (click the command to select it):';

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
