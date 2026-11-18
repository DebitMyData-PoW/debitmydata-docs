---
title: Explorers
description: The three DebitMyData block explorers, the mempool explorer, the lite explorer and the rich list, and their public APIs.
coin: true
---

Three explorers show the DebitMyData chain, each from its own node:

| Explorer | Best for |
| --- | --- |
| [Mempool explorer](https://mempool.debitmydata.io/) | Watching blocks and the mempool live, fees, a transaction's progress |
| [Lite explorer](https://chain.debitmydata.io/) | Fast lookups of a block, a transaction or an address |
| [Rich list and API](https://explorer.debitmydata.io/) | The largest addresses, the supply's distribution, a simple API |

All three search by block height, block hash, transaction ID or address.

## Mempool explorer

[mempool.debitmydata.io](https://mempool.debitmydata.io/) shows blocks as they arrive, the
transactions waiting for the next ones and the fees they pay. It is built on mempool.space,
and its API is **mempool.space's REST API** at `https://mempool.debitmydata.io/api/`:

```sh
curl -s https://mempool.debitmydata.io/api/blocks/tip/height
curl -s https://mempool.debitmydata.io/api/blocks/tip/hash
curl -s https://mempool.debitmydata.io/api/block-height/1000
curl -s https://mempool.debitmydata.io/api/address/ADDRESS
curl -s https://mempool.debitmydata.io/api/tx/TXID
curl -s https://mempool.debitmydata.io/api/v1/fees/recommended
```

mempool.space's [API documentation](https://mempool.space/docs/api/rest) lists every request:
replace `https://mempool.space/api/` with `https://mempool.debitmydata.io/api/`. Amounts are in
data (1/100,000,000 DMD) where mempool.space says sats.

## Lite explorer

[chain.debitmydata.io](https://chain.debitmydata.io/) is a light, fast explorer: the latest
blocks, any block, transaction or address, and its node's information
([Node](https://chain.debitmydata.io/?nodeinfo=1)).

## Rich list and API

[explorer.debitmydata.io](https://explorer.debitmydata.io/) shows the addresses holding the
most DMD, how the supply is spread, the latest large transactions and the network's peers.
Its API is listed on [its API page](https://explorer.debitmydata.io/info).

### From the node

| Request | Answers |
| --- | --- |
| `/api/getblockcount` | The current height |
| `/api/getdifficulty` | The current difficulty |
| `/api/getnetworkhashps` | The network's hashrate, in hashes per second |
| `/api/getconnectioncount` | The explorer node's connections |
| `/api/getblockhash?index=HEIGHT` | The hash of a block (0 is the first block) |
| `/api/getblock?hash=HASH` | A block |
| `/api/getrawtransaction?txid=TXID&decrypt=1` | A transaction, decoded (`decrypt=0`: raw) |

### From the explorer's index

| Request | Answers |
| --- | --- |
| `/ext/getmoneysupply` | The DMD in existence |
| `/ext/getdistribution` | How the supply is spread across addresses |
| `/ext/getaddress/ADDRESS` | An address: balance, received, sent, last transactions |
| `/ext/getbalance/ADDRESS` | An address's balance |
| `/ext/getaddresstxs/ADDRESS/START/LENGTH` | An address's transactions, newest first |
| `/ext/gettx/TXID` | A transaction |
| `/ext/getlasttxs/MIN/START/LENGTH` | The latest transactions above `MIN` DMD (100 at most) |
| `/ext/getnetworkpeers` | The nodes seen in the last 24 hours |
| `/ext/getsummary` | Difficulty, supply, hashrate, connections and height at once |

Each request starts with `https://explorer.debitmydata.io`, for example
`https://explorer.debitmydata.io/api/getblockcount`.

:::note
Prices shown by explorers built for other coins (BTC or USD prices) mean nothing for DMD
until it is on an exchange. DebitMyData's own figure is the
[reference price](/data/reference-price/).
:::
