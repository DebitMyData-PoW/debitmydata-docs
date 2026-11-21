# DebitMyData Docs

The documentation website of DebitMyData, at **[docs.debitmydata.io](https://docs.debitmydata.io)**:
the DMD coin and its Proof-of-Work chain, wallets, running a node, mining, the explorers, the
DID-LLM and the DebitMyData Agent Gateway (MCP server, A2A, sign-in, REST API), the stats and
analytics sites, and every public API.

It is a static site made with [Starlight](https://starlight.astro.build) (Astro): Markdown pages
in, plain HTML pages out, with search, light and dark themes, and `/llms.txt` and
`/llms-full.txt` for AI agents. Nothing runs on the server but nginx, serving the files.

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

The site is plain files, served by **nginx** at `docs.debitmydata.io`, behind Cloudflare. Nothing
links this repository to the server: the site changes only when someone uploads a new version by
hand.

**Build it** (or use the `debitmydata-docs-site.zip` made for you):

```sh
npm ci
npm run build
cd dist && zip -r ../debitmydata-docs-site.zip . && cd ..
```

**Each new version**, on the server: empty the site's folder (`rm -rf /var/www/docs/*`), then
upload the zip's contents into it (with WinSCP, for example). Nothing needs restarting.

The nginx site serves `/var/www/docs` as it is: `try_files $uri $uri/ $uri.html =404`, the 404
page for anything else, long caching for `/_astro/` and `/fonts/`, and `absolute_redirect off`.
[`public/_headers`](public/_headers) lists the headers every page gets; nginx sets the same ones.

## License

The site's code is under the MIT license ([LICENSE](LICENSE)). Its design is DebitMyData's Aurora
design (`src/styles/aurora.css`), the same as debitmydata.io's. The fonts (Sora, Inter, JetBrains
Mono and Mada) are under the SIL Open Font License (their licence texts are in
[public/fonts](public/fonts)). The DebitMyData logo and the DMD coin are DebitMyData's.
