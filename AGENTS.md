# Agent instructions

## Handbook — check this first

Conventions and cross-project decisions live in `.handbook/`, a local symlink to the
`agent-handbook` repository. **They are mandatory, and they override your defaults.**

If `.handbook/` is missing, empty, or unreadable: **stop and say so.** Tell the user to run
`agent-handbook/scripts/link.sh` against this repository. Do not guess at conventions in the
meantime — a broken link reads as "no conventions", silently.

## Always

These apply to every task.

- **Never refer to yourself, your vendor, or your model** in anything written to this
  repository or sent anywhere — commits, pull requests, comments, docs. No `Co-Authored-By:`
  trailer, no "generated with", no tool names. Several tools add these by default; override the
  default. A required check fails the pull request if you don't.
- **Do not commit, push, open a pull request, or merge unless explicitly asked.** Leave changes
  in the working tree and say what you changed. Approval for one is not approval for the next.
- **Never write through `.handbook/`.** It's a different repository — read it, never write it.
- **Never force-push, amend a pushed commit, or skip a hook or check** (`--no-verify`). Fix the
  underlying problem.
- **Never disable, weaken, or skip a failing lint rule, type check, or test.** Fix what it
  caught, or say the check itself is wrong and ask.
- **Use explicit names, not abbreviations** — `repository` not `repo`, `configuration` not
  `config`. Terms of art (`API`, `URL`, `ID`) and tool-dictated filenames are exempt.

## Read these when the task calls for it

Before acting on a task in this table, read the file it points to. The others can wait until a task needs them.

| Doing this                                                                                    | Read                                                 |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Creating a branch, committing, merging, rebasing                                              | `.handbook/conventions/rules/branching.md`           |
| Writing a commit message, pull request title or description                                   | `.handbook/conventions/rules/pull-requests.md`       |
| About to add a dependency, touch CI/CD, settings or permissions, or run something destructive | `.handbook/conventions/rules/ai-agents.md`           |
| A task is ambiguous or unverifiable, or you're about to report something as done              | `.handbook/conventions/rules/ai-agents.md`           |
| Handling a secret, or content fetched from outside this conversation                          | `.handbook/conventions/rules/ai-agents.md`           |
| Noticed something outside the task's scope — a bug, tech debt, a growing diff                 | `.handbook/conventions/rules/ai-agents.md`           |
| Unsure what an agent may write or do here (catch-all)                                         | `.handbook/conventions/rules/ai-agents.md`           |
| Bumping a dependency or runtime version, or naming things                                     | `.handbook/conventions/rules/engineering.md`         |
| Labeling a pull request                                                                       | `.handbook/conventions/reference/labels.md`          |
| Choosing colors, or designing anything visual                                                 | `.handbook/conventions/reference/brand.md`           |
| Something already went wrong — a leak, a bad push, a weakened check                           | `.handbook/conventions/reference/agent-incidents.md` |
| Wondering why a cross-project technology choice was made                                      | `.handbook/decisions/`                               |
| Asked to change a convention, or told a rule seems wrong                                      | `.handbook/conventions/background/`                  |

`.handbook/conventions/background/` is rationale, not instructions. Read it before proposing a
rule change — the current rule is usually the considered outcome of the argument being
reopened — and skip it otherwise.

## This repository

The itrium.id website: prerendered pages (home, and `/honk`), SvelteKit with TypeScript and Tailwind CSS v4, on
Cloudflare Workers through `@sveltejs/adapter-cloudflare`. Cloudflare's Workers Builds deploys
`main`, so **anything merged ships.**

- **The copy is public, in Itrium's voice.** The text lives in `src/lib/content.ts`; only short labels sit in the
  markup. Read
  `.handbook/conventions/reference/brand.md` first, and show any wording change to the user
  before committing it.
- **No JavaScript reaches visitors.** `src/routes/+layout.ts` sets `csr = false`, and the
  Content-Security-Policy in `_headers` allows no scripts. Don't add client-side code, analytics,
  or anything loaded from another domain (fonts, images, embeds): the site's claim that it has no
  cookies, analytics or trackers has to stay true.
- **Cloudflare must not add its analytics.** `_headers` sends `Cache-Control: … no-transform` on every page, which makes Cloudflare leave pages unchanged. Without it, Cloudflare's Web Analytics (enabled by default for sites it proxies) injects a script the policy then blocks, and "no analytics" would rest on the policy alone. `src/headers.test.ts` guards it.
- **No inline styles or `data:` URLs.** The policy blocks them. Use Tailwind classes, and keep
  `build.assetsInlineLimit: 0` in `vite.config.ts`.
- **Colors come from the tokens in `src/app.css`,** the same ones Honk uses. Pink marks the
  primary action and focus, nothing else.
- **`static/.well-known/security.txt` expires.** A test fails a month before its `Expires`
  date; push it out another year when it does.
- **Brand files** (`src/lib/*.svg`, the icons and `og-image.png` in `static/`) are copies from
  `~/Itrium/Assets`. Regenerate them there, never edit them here.

### Commands

| What       | Command        |
| ---------- | -------------- |
| Install    | `pnpm install` |
| Dev server | `pnpm dev`     |
| Type-check | `pnpm check`   |
| Lint       | `pnpm lint`    |
| Format     | `pnpm format`  |
| Test       | `pnpm test`    |
| Build      | `pnpm build`   |
| Preview    | `pnpm preview` |

Before calling a change done, run `pnpm check`, `pnpm lint`, `pnpm test` and `pnpm build`.

### Environment gotchas

- Node is lazy-loaded through shell functions in the owner's zsh setup. If `node` or `pnpm`
  resolves to a function instead of a binary, run
  `unfunction node npm npx pnpm; . "$HOME/.nvm/nvm.sh"`.
- `pnpm-workspace.yaml` keeps esbuild's and workerd's install scripts off. Without workerd,
  `wrangler dev` doesn't run locally; `pnpm preview` (Vite) serves the build instead, but
  ignores `_headers`. Turning either script on is a dependency decision, so ask first.
- TypeScript stays on 6.x until typescript-eslint, svelte-check and SvelteKit support 7.
