---
name: itrium.id
description: Graphite, with pink running through it. The front page of an Indonesian software studio.
colors:
  graphite: '#2b2b2b'
  graphite-surface: '#343434'
  graphite-border: '#474747'
  graphite-raised: '#3d3d3d'
  graphite-raised-border: '#4f4f4f'
  off-white: '#f2f2f2'
  muted-gray-on-dark: '#aaaaaa'
  pastel-pink: '#febfca'
  paper: '#fafafa'
  paper-surface: '#ffffff'
  paper-border: '#e4e4e4'
  muted-gray-on-light: '#6b6b6b'
  control-edge-on-dark: '#8a8a8a'
  control-edge-on-light: '#767676'
  deep-rose: '#c46475'
  rose-text: '#a84d60'
typography:
  display:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '4.5rem'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.025em'
  headline:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '2.25rem'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.025em'
  index-title:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '2.25rem'
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: '-0.025em'
  tagline:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.875rem'
    fontWeight: 500
    lineHeight: 1.375
  subheading:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.5rem'
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: '-0.025em'
  title:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 600
    lineHeight: 1.55
  lead:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  button:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 600
    lineHeight: 1.43
  small:
    fontFamily: "'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.43
rounded:
  focus: '4px'
  sm: '0.5rem'
  md: '0.75rem'
  lg: '1rem'
  xl: '1.5rem'
  full: '9999px'
spacing:
  gutter-panel: '0.75rem'
  gutter-phone: '1.25rem'
  gutter-wide: '2rem'
  card: '1.5rem'
  card-feature: '2.5rem'
  section: '5rem'
  touch-target: '2.75rem'
  content-width: '64rem'
  panel-width: '72rem'
components:
  button-primary:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.full}'
    padding: '0.75rem 1.5rem'
    typography: '{typography.button}'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '{colors.off-white}'
    rounded: '{rounded.full}'
    padding: '0.75rem 1.5rem'
  button-secondary-hover:
    backgroundColor: '{colors.graphite-surface}'
  card:
    backgroundColor: '{colors.paper-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.card}'
  card-dark:
    backgroundColor: '{colors.graphite-surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.card}'
  work-card:
    backgroundColor: '{colors.paper-surface}'
    rounded: '{rounded.xl}'
    padding: '{spacing.card-feature}'
  graphite-panel:
    backgroundColor: '{colors.graphite}'
    textColor: '{colors.off-white}'
    rounded: '{rounded.xl}'
    width: '{spacing.panel-width}'
  index-row:
    rounded: '{rounded.md}'
    padding: '1.5rem 0.75rem'
    typography: '{typography.index-title}'
  index-row-hover:
    backgroundColor: '{colors.graphite-surface}'
  chip-fact:
    textColor: '{colors.graphite}'
    rounded: '{rounded.full}'
    padding: '0.25rem 0.75rem'
  mark-tile:
    backgroundColor: '{colors.pastel-pink}'
    rounded: '{rounded.sm}'
    size: '3rem'
  skip-link:
    backgroundColor: '{colors.pastel-pink}'
    textColor: '{colors.graphite}'
    rounded: '{rounded.sm}'
    padding: '0.5rem 1rem'
---

# Design System: itrium.id

## Overview

**Creative North Star: "The Rhodonite Specimen"**

The site is a polished slice of the mineral it takes its palette from: a graphite matrix with
pink veins running through it. Graphite is the body of the stone. It's the panels that open and
close every page, the dark theme, and the text in the light one. Pink is the vein, and a vein
runs through the stone for a reason: it marks what a visitor should find, such as a link, the
main action, focus, a name, or the arrow that says a row goes somewhere. Everything else stays in
the grays, because the gray is the message: very little in software is one size fits all, and
the honest answer usually starts with "it depends".

It reads like a specimen on a bench, and like a letter left on it. The home page opens with a
short signed note from the studio inside the graphite panel, with real screenshots tucked behind
it like enclosures, and an index of what the studio does underneath: four rows, each a door with
a picture, a big title, one line and a drawn arrow. The real work does the persuading: client
sites, applications and a game, shown as screenshots in their own themes. Text is kept light:
one line where a paragraph used to be. The density is calm, with generous section spacing and a
content column of about 64rem; the panels are a little wider, so they feel like slabs the content
sits in. Components are soft and tactile: fully rounded buttons, cards with gently curved corners
that lift and take a pink edge when a pointer touches them. Nothing performs for its own sake.

The system refuses five things. It isn't a generic SaaS landing page: no gradient text, stock 3D
shapes, logo walls, "trusted by" strips, invented metrics, icon-card rows or values grids. It
isn't an agency showreel: no autoplaying full-bleed media, no scroll-jacking, no type sized to
show off. It's never pure black and white. Pink is never decoration. And no heading wears a small
label above it.

**Key Characteristics:**

- Graphite panels (`.band`) open and close every page, in both themes.
- One accent, pastel pink, with a deep rose for text and a separate one for lines on light
  backgrounds.
- Light and dark follow the visitor's system. There's no toggle, because there's no script.
- Section headings are real headings in sentence case, never small uppercase labels.
- Real screenshots are the imagery. They're the only things that cast shadows.
- One drawn arrow, everywhere a link points onward.
- Motion is CSS only: page cross-fades, sections rising into place, 4 px moves on hover. All of
  it is off when a visitor asks for reduced motion.
- No JavaScript, no inline styles, no `data:` URLs, nothing from another domain.

## Colors

Rhodonite: graphite and grays, with one pink and its two light-background deepenings. The tokens
live in `src/app.css` as `--bg`, `--surface`, `--border`, `--text`, `--muted`, `--accent`,
`--on-accent`, `--accent-edge`, `--accent-text` and `--focus`, and each one swaps values between
the dark default and `prefers-color-scheme: light`. The binding rules come from the handbook's
`conventions/reference/brand.md`. This section describes how the site applies them.

### Primary

- **Pastel pink** (`pastel-pink`): the accent, as a fill in both themes. It's the primary
  button, the tile behind the studio mark, the selection highlight and the skip link, and the 25%
  tint behind the work card's screenshots in the light theme. On graphite it's also the text color
  for the studio's name in the greeting, links, arrows and bylines, and the focus outline.
- **Deep rose** (`deep-rose`): pink as a line on light backgrounds (`--accent-edge`). Hover
  borders on cards, link underlines, the outline of fact chips, and the short rule before the
  letter's signature. It reaches 3:1 on white where pastel pink is 1.5:1.
- **Rose text** (`rose-text`): pink as text on light backgrounds (`--accent-text`). A link's hover
  color, the client byline, "See more" and card action lines, and the arrows beside them. 4.8:1 on
  off-white, 5.2:1 on the light page and 5.4:1 on white cards: level AA, with little headroom, so
  never put it on a pink tint.

### Neutral

- **Graphite** (`graphite`): the dark theme's page, the color of every graphite panel in either
  theme, the light theme's text, and the text on pink, always.
- **Graphite surface** (`graphite-surface`) and **graphite border** (`graphite-border`): cards and
  their edges on graphite, and the hover fill of an index row. Inside a panel in the dark theme,
  the panel steps up to graphite surface so it stays visible against the page. Its cards and rows
  then step up to **graphite raised** (`graphite-raised`) with **graphite raised border**
  (`graphite-raised-border`).
- **Off-white** (`off-white`): text on graphite.
- **Muted gray on dark** (`muted-gray-on-dark`) and **muted gray on light** (`muted-gray-on-light`):
  secondary text: introductions, the letter's note and signature, index notes, card bodies,
  platform lines and the navigation. The lighter one is 4.6:1 on graphite raised, the darkest
  surface it sits on.
- **Control edge on dark** (`control-edge-on-dark`) and **control edge on light**
  (`control-edge-on-light`): the border of a secondary button (`--control-border`), which people
  have to see to find it. It reaches 3:1 against the page, a card and a graphite panel, where the
  softer border colors are about 1.5:1.
- **Paper** (`paper`), **paper surface** (`paper-surface`) and **paper border** (`paper-border`):
  the light theme's page, cards and dividers.

The code colors (`--code-*` in `src/app.css`) exist only for the editor sample on `/rhodonite`.
They mirror `@itrium/palettes` and don't belong anywhere else.

### Named Rules

**The Vein Rule.** Pink marks something: a link, the main action, focus, a name, or the way
onward. If you can't say what a pink element marks, it should be gray.

**The Graphite Text Rule.** Text on pink is graphite, never white. On light backgrounds, pink text
is rose text and pink lines are deep rose. Pastel pink is never text or a line there.

**The Every-Surface Rule.** Contrast is checked on every surface text sits on, raised cards and
rows inside a panel included, not only the page background. Body text needs 4.5:1, and focus
outlines and lines that show a state need 3:1.

**The Two Borders Rule.** `--border` is for lines nothing depends on: card edges, dividers,
hairlines around screenshots. A button someone has to find gets `--control-border`.

## Typography

**Display Font:** Plus Jakarta Sans Variable (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Plus Jakarta Sans Variable, the same file

**Character:** one variable typeface, from the Indonesian foundry Tokotype, carries every role.
Hierarchy comes from weight and size alone: bold, tightly tracked headings in sentence case and
regular body text with relaxed leading. Nothing is set in uppercase. It's served from the site
itself, and the Latin file is preloaded so the headings don't move when it arrives.

### Hierarchy

- **Display** (`display`): every page's title in its graphite panel, the home page's greeting
  included, 3rem on phones and the token size from 640 px, balanced. In the greeting, the studio's
  name is pink.
- **Headline** (`headline`): section headings (`sectionHeading` in `src/lib/styles.ts`), the work
  card's tagline and closing-panel headings, 1.875rem on phones. The home page's contact heading
  steps up to 3rem on wide screens.
- **Index title** (`index-title`): an index row's title, 1.25rem on phones, 1.875rem from 640 px
  and the token size from 1024 px. The 404 page's destinations use the same bold, tight style at
  1.25rem.
- **Tagline** (`tagline`): the pink line under a page title and the closing promise on free-stuff
  pages, 1.5rem on phones, medium weight.
- **Subheading** (`subheading`): a highlight's heading beside its screenshot, and, in bold, a
  free-stuff card's name and a download row's system.
- **Title** (`title`): small card headings, semibold. Feature headings use the same weight at body
  size.
- **Lead** (`lead`): hero introductions and summaries, muted, at most about 42rem wide. The
  letter's note rises to 1.25rem from 640 px.
- **Body** (`body`): card bodies and feature descriptions, muted, with relaxed leading.
- **Button** (`button`): button labels, semibold. Navigation uses the same size at medium weight.
- **Small** (`small`): bylines (semibold, pink, after the heading), the letter's signature
  (medium, muted), platform lines, the first-launch step and footer text.

### Named Rules

**The One Typeface Rule.** Plus Jakarta Sans does everything. Never add a second family for
headings, and never load a font from another domain.

**The No Kicker Rule.** A heading is the first thing in its block. Nothing small sits above it:
no eyebrow, no category label, no client name. Who or what it belongs to follows it as a byline.

## Layout

- **Width:** content sits in a centered column of 64rem (`content-width`). Graphite panels are
  wider, at 72rem (`panel-width`), and inset from the viewport by 0.75 to 1.25rem
  (`gutter-panel`), so they read as slabs rather than full-bleed bands. Header and footer share
  the content column.
- **Gutters:** 1.25rem on phones (`gutter-phone`) and 2rem from 640 px (`gutter-wide`). Inside
  panels, 1.5rem rising to 2.5rem.
- **Rhythm:** sections are 5rem tall top and bottom (`section`) and separated by a hairline
  border. Panels get 3.5rem to 6rem of internal padding. A section heading sits 2rem above its
  content.
- **Home:** the letter keeps to about 29rem on wide screens, and the enclosures take the right 55%
  of the panel behind it, held to the top. Below 1024 px the enclosures are gone and the index's
  pictures do their job. The index follows in the same panel, each row a three-column grid of
  picture (4.5rem, then 8rem from 640 px), text and arrow.
- **Lists over grids:** the index, the download rows and the 404 destinations are ruled lists,
  one item per row, divided by hairlines. Free-stuff cards are one column, then two at 640 px (and
  three on the home page at 1024 px). The work card splits 1 to 1.15 at 768 px. Highlights pair
  text and screenshot in two columns at 768 px, alternating sides.
- **Phones:** button pairs stack full width (`buttonStack`), because neither label fits half the
  width. Every link and disclosure is at least 2.75rem tall (`touch-target`). The navigation drops
  to its two most-needed links, "Free stuff" and "Contact".
- **Breakpoints:** Tailwind's defaults, 640, 768 and 1024 px.

**The Slab Rule.** Every page opens with a graphite panel and closes with one. Between them, the
content sits on the page background in a narrower column.

**The One Line Rule.** Text is as short as the job allows. Where a paragraph would explain, one
line says it, and the picture or the next step does the rest.

## Elevation & Depth

Surfaces are flat. Depth comes from tonal steps (page, then surface, then raised, inside panels)
and from 1 px borders, not from shadows. The only shadows belong to screenshots that sit loose in
a stack: they're physical objects laid on the specimen, so they cast deep, soft shadows, deeper
the higher they sit. Screenshots that sit in a card or beside text lie flat, with a hairline edge.
Nothing lights them from behind: a hero's picture and the home page's enclosures sit on the
plain panel, and the work card's screenshots sit on the plain card in the dark theme, with no
tint. There is no glow anywhere, in either theme.

### Shadow Vocabulary

- **Screenshot** (`0 25px 50px -12px`, in black at 25 to 50%): every loose screenshot in a stack,
  the home page's enclosures and the work card's pair. Use the lower opacities on light cards and
  the higher ones on graphite and for the top of a stack.

### Named Rules

**The Only Screenshots Cast Shadows Rule.** Cards, buttons, rows and panels never get a drop
shadow. When a card needs to respond, it lifts 4 px and takes a pink edge; a row fills with the
surface color.

## Shapes

Soft and rounded everywhere, with the radius growing with the size of the object. Buttons and
chips are pills (`full`). Index pictures, the mark tile and code blocks get 0.5rem (`sm`).
Screenshots and index rows get 0.75rem (`md`), cards get 1rem (`lg`), and panels and the work card
get 1.5rem (`xl`). The focus outline gets 4 px (`focus`), 3 px away from the element. Edges are
1 px hairlines in the border color. Pictures in cards and rows are cropped to 4:3 from the top.
The work card's picture area clips its screenshots, so they run off the card's edge as if the card
were cut from a bigger sheet, and the home page's enclosures sit a few degrees off straight.

The arrow is drawn, not typed: one SVG (`src/lib/Arrow.svelte`), a 2-unit round-capped stroke in
the current color, sized to the text beside it.

## Components

### Buttons

Pressable pills. There are only two kinds, and pink is the main action.

- **Shape:** fully rounded (`full`), with 0.75rem by 1.5rem of padding.
- **Primary:** pastel pink with graphite text. One per view, for the main action. Wherever contact
  appears, the primary is "Message us on Threads" and email is the secondary. The one exception is
  the download section, where each system's row has its own primary, since a visitor picks one.
- **Secondary:** transparent with a 1 px control-edge border (`--control-border`) and medium
  weight. Every other action beside the
  primary one. Leaving for a client's site is secondary.
- **Hover:** the primary fades to 85% opacity. The secondary fills with the surface color.
- **Focus:** a 2 px outline 3 px away, pastel pink on graphite and graphite on light backgrounds.
- **Pairs:** side by side from 640 px; stacked full width and centered on phones (`buttonStack`).

### Cards

- **Corner style:** 1rem (`lg`), or 1.5rem (`xl`) for the work card.
- **Background:** the surface color, with a 1 px border.
- **Hover:** the whole card lifts 4 px and its border turns pink (deep rose on light
  backgrounds). The arrow inside moves 4 px right. The lift and every hover move are gated on
  `motion-safe`.
- **Internal padding:** 1.5rem (`card`), and 2 to 2.5rem (`card-feature`) on the work card.
- **Free-stuff cards** lead with a screenshot cropped to 4:3, then the name, a one-line summary, a
  platform line and a pink action line with the arrow ("Download and details", "Open Amber"). The
  whole card is the link. On `/free-stuff`, a muted "Source code" link sits under the card, outside
  it.

### Graphite panel

The signature component. `PageHero` and `ClosingPanel` in `src/lib/`, the home page and the 404
page all use it. A `.band` gives the graphite tokens in either theme and is rounded, inset and
wider than the content. A hero holds the title, an optional pink tagline, the introduction,
buttons, and optionally the page's main picture on the plain panel, or a list of destinations
(404). It
never holds a label above the title. A closing panel ends the page with the next step.

### The letter (home)

The home panel opens with a greeting in display type, the studio's name in pink, then one muted
note and a signature line: a short deep-rose rule and "The Itrium team" in small muted type. The
contact pair follows. On wide screens three real screenshots, a client's site, the game and an
application, sit behind the letter's right edge, tilted and shadowed, on the plain panel.

### Index

Four rows in the home panel under the letter, one per thing the studio does. Each row is a link: a
4:3 picture (the studio mark on pink for advice), a large title, one muted line, and the arrow in
pink. Rows are divided by hairlines. On hover the row fills with the surface color and the arrow
moves 4 px right. The 404 page uses the same ruled-list form without pictures.

### Work card

A client's site, opened up. Text is on the left: the tagline as the heading, the client's name as
a pink byline after it, a summary, fact chips, and "See more" with the arrow. The right side has
two screenshots fanned out and running off the edge, on a 25% pink tint in the light theme and on
the plain card in the dark one, where a tint turns a muddy mauve.
Client sites always appear in their light theme. The card never repeats a screenshot the hero
above it already shows.

### Download section

`src/lib/Downloads.svelte`. A section heading, one bold line saying what the system will ask the
first time, then one ruled row per system: the system's name and a muted note, its primary button,
and directly under the button the first-launch step for that system. Extra formats and install
commands wait behind a native `<details>` disclosure, "Other versions", in pink with the arrow
turning down when open. On phones a bordered note says the files are for computers. A muted line
of links to all releases, full steps and the source closes it.

### Chips

- **Fact chips:** pills with a pink outline (deep rose on light backgrounds), 0.875rem text,
  0.25rem by 0.75rem of padding. They're facts, not filters, so they have no states.

### Navigation

Four text links in the header, muted, turning to the text color on hover. There's no active
state. On phones only "Free stuff" and "Contact" stay. A pink skip link sits off screen and drops
in from the top on focus.

### Inline links

Text links are underlined 2 px thick and 4 px below the text, in pink (deep rose on light
backgrounds), and turn rose text on hover. Action lines ("See more", a card's action) are rose
text with the arrow, which moves 4 px right on hover.

## Do's and Don'ts

### Do:

- **Do** open and close every page with a graphite panel, and keep the content between them in
  the 64rem column.
- **Do** set section headings with `sectionHeading`: a real heading in sentence case, a clear size
  step above the text under it.
- **Do** put a byline after its heading, never above it.
- **Do** make Threads the primary action wherever contact appears, with email beside it.
- **Do** use the drawn arrow (`Arrow.svelte`) wherever a link points onward.
- **Do** use real screenshots as the imagery, each in the theme that matches the visitor (or
  light, for client sites), with its width and height set so the page doesn't jump.
- **Do** check every new color pairing against every surface it sits on, including raised cards
  inside a panel in the dark theme.
- **Do** keep motion in CSS and gated on reduced motion (`prefers-reduced-motion: no-preference`
  or `motion-safe`), and movement only. A revealed section rises 2rem but never fades, so text
  below the fold keeps full contrast.
- **Do** use Tailwind classes with the theme tokens (`bg-surface`, `text-accent-text`,
  `border-accent-edge`), never raw hex values in markup.

### Don't:

- **Don't** use pink as decoration: no pink backgrounds or borders that don't mark something.
- **Don't** light pictures from behind with a glow or radial gradient; screenshots sit on the
  plain panel.
- **Don't** put a small uppercase label, eyebrow or kicker above a heading.
- **Don't** type arrows or chevrons as characters.
- **Don't** use `#000000` or a pure black and white palette. Graphite is `#2b2b2b`.
- **Don't** put white text on pink, or pastel pink text or lines on a light background.
- **Don't** add gradient text, stock 3D shapes, logo walls, "trusted by" strips, invented
  metrics, rows of icon cards or a values grid.
- **Don't** write a paragraph where one line will do.
- **Don't** add autoplaying full-bleed media, scroll-jacking, or type sized to show off.
- **Don't** give cards, buttons, rows or panels drop shadows. Only screenshots cast them.
- **Don't** add a second typeface, inline styles, `data:` URLs, scripts, or anything loaded from
  another domain.
