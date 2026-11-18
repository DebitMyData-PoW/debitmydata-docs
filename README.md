# DebitMyData Docs

The documentation website of DebitMyData, at **[docs.debitmydata.io](https://docs.debitmydata.io)**:
the DMD coin and its Proof-of-Work chain, wallets, running a node, mining, the explorers, the
DID-LLM and the DebitMyData Agent Gateway (MCP server, A2A, sign-in, REST API), the stats and
analytics sites, and every public API.

It is a static site made with [Starlight](https://starlight.astro.build) (Astro): Markdown pages
in, plain HTML pages out, with search, light and dark themes, and `/llms.txt` and
`/llms-full.txt` for AI agents. Nothing runs on a server: Cloudflare serves the files.

## Editing a page

The pages are Markdown files in [`src/content/docs/`](src/content/docs/), one per page:

| Section | Folder |
| --- | --- |
| Start here | `start/` |
| The DMD coin: specs, wallets, node, mining | `coin/` |
| DID-LLM | `did-llm/` |
| Developers and agents | `developers/` |
| Explorers and data: explorers, stats, analytics, reference price | `data/` |
| Project: source code, community | `project/` |
| The home page | `index.mdx` |

Each file starts with its `title` and `description` (used by search engines, link previews and
`llms.txt`). Pages about the DMD coin or one of its platforms add `coin: true`, which shows the
coin beside their title; the rest of the site uses the DebitMyData logo.

**A new page:** add its file, then its path (without `.md`) to [`src/sidebar.mjs`](src/sidebar.mjs),
which orders the sidebar, `llms.txt` and `llms-full.txt`.

Write "DebitMyData" for the project, its chain and nodes, "DMD" only for the coin's ticker, and
"DID-LLM" for the identity. Never put a server's IP address, a private key, or anything else
private in this repository: it is public.

## Trying it on your computer

With [Node.js](https://nodejs.org) 22.23 or later:

```sh
npm ci
npm run dev          # http://localhost:4321, the page reloads as you edit
npm run build        # the finished site, in dist/
npm run check-links  # after a build: every link inside the site leads somewhere
```

## Putting it online

Cloudflare builds and serves the site from this repository: each push to `main` goes live in a
minute or two. The settings are in [`wrangler.jsonc`](wrangler.jsonc) (the site's files, no code)
and [`public/_headers`](public/_headers) (security and cache headers).

**Once, in Cloudflare** (the account that holds debitmydata.io):

1. **Workers & Pages**, **Create application**, **Import a repository**.
2. Connect GitHub if asked, and choose `DebitMyData-PoW/debitmydata-docs`.
3. Build command: `npm run build`. Deploy command: `npx wrangler deploy` (the default). Save
   and deploy.
4. Open the new Worker, **Settings**, **Domains & Routes**, **Add**, **Custom domain**:
   `docs.debitmydata.io`. Cloudflare adds the DNS record and the certificate itself.

After that, there is nothing to do but push.

## License

The site's code is under the MIT license ([LICENSE](LICENSE)). The Mada font is under the SIL Open
Font License ([public/fonts/OFL-Mada.txt](public/fonts/OFL-Mada.txt)). The DebitMyData logo and
the DMD coin are DebitMyData's.
