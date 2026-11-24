# Contributing to DebitMyData Docs

## Editing a page

The pages are Markdown files in [`src/content/docs/`](src/content/docs/), one per page:

| Section | Folder |
| --- | --- |
| Start here | `start/` |
| The DMD coin: specs, wallets, node, mining | `coin/` |
| DMD coin API: coin data, rich list, exchanges and listings | `api/` |
| RPC reference: every DebitMyData Core command (written by a script, see below) | `rpc/` |
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

Before sending a change, build the site and check its links ([INSTALL.md](INSTALL.md)):
`npm run build && npm run check-links`.

## The RPC reference

The pages in `src/content/docs/rpc/` come from DebitMyData Core's own help, one page per
command, like Bitcoin's [RPC reference](https://developer.bitcoin.org/reference/rpc/). After each
new DebitMyData Core release, write them again from a node running the new version. A
throwaway regtest node, with no network, is enough:

```sh
debitmydatad -regtest -datadir=/tmp/dmd-help -daemon -listen=0 -connect=0 -dnsseed=0
sleep 5
DMD_CLI="debitmydata-cli -regtest -datadir=/tmp/dmd-help" npm run rpc-reference
debitmydata-cli -regtest -datadir=/tmp/dmd-help stop
rm -rf /tmp/dmd-help
```

(Start from an empty folder each time: on its first start the node writes a `debitmydata.conf`
with the seed nodes, which a regtest node refuses on its next start.)

`DMD_CLI` is the command that reaches the node, with any options it needs. The script only reads
the node's help. It rewrites each command's page, the command list in `rpc/index.md` (between its
two markers; the text above them is written by hand) and `src/rpc-commands.mjs`, which the sidebar
reads. The words about DebitMyData's own commands are in the script (`DEBITMYDATA_ONLY`).

## The live figures

The coin data and rich list pages read their figures in the visitor's browser from DMD Stats' API
(`src/components/CoinFigures.astro` and `RichList.astro`), so they need no build.
