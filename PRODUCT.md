# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences of equal weight, each with its own job. When they pull against each other, neither
wins by default: a page serves the audience it was made for, and the home page serves both.

- **Potential clients.** People and small businesses, mostly in Indonesia, who need help with
  software: a plain answer to a question, or an application, website or landing page built to
  order. Their job is to decide whether Itrium can help and is worth talking to. Success: they get
  in touch, by email (`hello@itrium.id`) or a message on Threads; Discord is offered too.
- **Free-stuff users.** Anyone, anywhere, who wants a small application, tool or game that costs
  nothing and leaves their data alone. Their job is to find out what something does, check that it
  runs on their system, and get it. Success: they open it in the browser, or download and install
  it, including getting past the one-time warning about an unsigned application.

## Product Purpose

itrium.id is the front page of Itrium, an Indonesian software studio. It says who Itrium is and
what it does: plain advice, projects built to order, and free applications, tools and games. It
gives each free item and each client project its own page. It succeeds when a client knows
enough to start a conversation and a free-stuff user leaves with the thing they came for.

## Positioning

Itrium is a small team that gives honest, jargon-free answers. It tells a client what a project
will cost and what it won't do before any work starts. Its free applications collect nothing, show
no advertisements, need no account, and are open source, so anyone can check. The website follows
the same rules: no scripts, no cookies, no analytics, no trackers, and nothing loaded from another
domain. Its privacy claims are true of the site you're reading.

The "it depends" philosophy shows up in the brand itself: graphite, a gray rather than black, with
pink running through it.

## Operating Context

- Most clients find Itrium on Threads (`@itriumid`): the team replies to posts from people
  looking for a web developer, and the visitor follows that reply to the site, usually on a
  phone. The first thing they check is whether Itrium really builds websites, so a website is the
  first proof they should see, and a reply on Threads is their most natural next step. Itrium is
  also on Instagram (`@itriumid`), Discord and GitHub.
- Visitors arrive at a prerendered, script-free site on phones and computers. Every interaction is
  plain HTML: links, anchors, downloads, selectable text. Nothing on the page runs code.
- Browser tools (Amber, the web tools) need JavaScript, so they run on their own subdomains
  (`amber.itrium.id`, `tools.itrium.id`). The site links out to them and doesn't embed them.
- Desktop downloads come from GitHub releases. The `releases/latest/download/` links never need
  updating. Each page also gives package-manager commands (Homebrew, winget) and the steps to get
  past the unsigned-application warning on macOS and Windows.
- Cloudflare's Workers Builds deploys `main`, so anything merged goes live.

## Capabilities and Constraints

- **Language: English only, by choice.** No Indonesian version is planned.
- **No JavaScript reaches visitors.** `csr = false`, and the Content-Security-Policy in `_headers`
  allows no scripts, inline styles, `data:` URLs or anything from another domain. Hover, focus and
  motion must be done in CSS alone.
- **The "no cookies, no analytics, no trackers" claim has to stay true.** Don't add embeds,
  third-party fonts or images, or anything that would make it false.
- **The copy lives in `src/lib/content.ts`.** Only short labels sit in the markup. Show any wording
  change to the owner before it's committed.
- **No WhatsApp yet.** The only number is a personal one, and a public page would hand it to
  scrapers. Add WhatsApp once there's a separate business number.
- **Free items are grouped by where they run** (in your browser, on your computer, games, for
  programmers), not by what kind of thing they are.
- **Client work is shown only with the client's permission.** Facts about a client come from the
  client.

## Brand Commitments

- **Name and story:** Itrium is the Indonesian word for yttrium, element 39, which is quiet, useful
  and out of sight. Read another way, it's "IT" plus "-rium": a place for IT. The logo is an
  element tile with 39 in the corner and "It" in the middle. Use the exported files only, and
  below 48 px use the compact version without the "39".
- **Voice:** "we", plain words, no abbreviations, no jargon unless the reader uses it first.
  Honest about what things do and don't do.
- **Principles the site states publicly:** privacy by default, free means free, simple, honest.
- **Palette, typeface and color rules** are binding and live in the handbook's
  `itrium/brand.md`: the Rhodonite palette, Plus Jakarta Sans served from the site
  itself, and contrast at level AA of the Web Content Accessibility Guidelines.
- **Brand files** (`src/lib/*.svg`, the icons and `og-image.png`) are copies from
  `~/Itrium/Assets`. They're regenerated there and never edited here.

## Evidence on Hand

- **Client work:** one case study, PT. Lintech Energy Shipping (`/work/lintech-shipping`), a
  shipyard and energy logistics company in East Java. Its site went live in October 2026.
- **Free items:** Amber, the web tools, Honk, Hindsight, Felterra: Tall Order (a work in progress)
  and the Rhodonite theme. Each has real screenshots or samples and public source on GitHub.
- **Absent, so never fabricate it:** testimonials, client logos beyond Lintech, user counts,
  download numbers, press, awards, and any claim about team size, years in business or a client
  roster beyond the published one. Itrium is a small team. Design and copy must not suggest a
  bigger operation.

## Product Principles

1. **The site keeps the promises it makes.** Every privacy claim is literally true of itrium.id,
   so a change that would make one false is off the table.
2. **Two audiences, two clear paths.** A client finds the way to a conversation, and a free-stuff
   user finds the way to the download, and neither has to wade through the other's content.
3. **Show what's real.** Shipped work, real screenshots and public source code do the persuading,
   and nothing is claimed that the evidence doesn't support.
4. **Plain beats clever.** If a visitor has to decode it, rewrite it, in the words and in the
   interface.
5. **Less, done well.** Add only what serves a visitor's job. Pink marks what matters, not
   decoration.

## Accessibility & Inclusion

Level AA of the Web Content Accessibility Guidelines on every surface text sits on (4.5:1 for
body text, 3:1 for focus outlines and for lines that show a state), in both light and dark. Every
part of the site works without JavaScript by construction.
