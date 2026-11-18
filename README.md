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

The site is plain files, served by **Cloudflare Pages** at `docs.debitmydata.io`. Nothing links
this repository to Cloudflare: the site changes only when someone uploads a new version by hand.
No server of ours runs it, so it stays up when the other servers are down.

**Build it** (or use the `debitmydata-docs-site.zip` made for you):

```sh
npm ci
npm run build
cd dist && zip -r ../debitmydata-docs-site.zip . && cd ..
```

**The first time, in Cloudflare** (the account that holds debitmydata.io):

1. **Workers & Pages**, **Create application**, **Get started** next to "Drag and drop your
   files".
2. Project name: `debitmydata-docs`. **Create project**.
3. Drag `debitmydata-docs-site.zip` (or the `dist` folder) into the upload frame, then
   **Deploy site**. It answers at `debitmydata-docs.pages.dev`.
4. The project, **Custom domains**, **Set up a custom domain**: `docs.debitmydata.io`,
   **Activate domain**. Cloudflare adds the DNS record and the certificate itself.

**Each new version:** the project, **Create a new deployment**, **Production**, drag the new zip,
**Save and Deploy**. Earlier versions stay listed under **Deployments**: **Rollback to this
deployment** puts one back.

[`public/_headers`](public/_headers) gives every page its security and cache headers.

## License

The site's code is under the MIT license ([LICENSE](LICENSE)). The Mada font is under the SIL Open
Font License ([public/fonts/OFL-Mada.txt](public/fonts/OFL-Mada.txt)). The DebitMyData logo and
the DMD coin are DebitMyData's.
