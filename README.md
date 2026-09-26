# itrium.id

The website of [Itrium](https://github.com/itriumid): who we are, what we do, and our free
tools. Live at [itrium.id](https://itrium.id).

It's one page of plain HTML. It sends no JavaScript to visitors, sets no cookies, and loads
nothing from anywhere else: the font is served from the site itself, and a strict
Content-Security-Policy (in [`_headers`](_headers)) blocks everything else.

## Stack

[SvelteKit](https://svelte.dev/docs/kit) with TypeScript and [Tailwind CSS](https://tailwindcss.com),
prerendered and served by [Cloudflare Workers](https://developers.cloudflare.com/workers/).
Cloudflare builds and deploys `main` itself, so merging a pull request publishes it.

## Developing

```sh
pnpm install
pnpm dev
```

| What          | Command                             |
| ------------- | ----------------------------------- |
| Type-check    | `pnpm check`                        |
| Lint          | `pnpm lint` (Prettier, then ESLint) |
| Format        | `pnpm format`                       |
| Test          | `pnpm test`                         |
| Build         | `pnpm build`                        |
| Preview build | `pnpm build && pnpm preview`        |

All the words on the page are in [`src/lib/content.ts`](src/lib/content.ts).

## License

The code is [MIT](LICENSE). The Itrium name and logo aren't covered by it: please don't use
them for your own work.
