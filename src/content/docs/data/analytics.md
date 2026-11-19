---
title: Analytics
description: analytics.debitmydata.io, in-depth on-chain analytics of the DebitMyData chain. Thousands of charts in Studio, every series as data, the calendar and an open API.
coin: true
---

[analytics.debitmydata.io](https://analytics.debitmydata.io/) reads every block of the
DebitMyData chain and turns it into thousands of figures: supply, addresses and their
balances, coins' age, what holders paid, fees, mining and more.

| | |
| --- | --- |
| **Studio** | Thousands of ready-made charts |
| **Oracle** | The network on one screen: hashrate, the reference price and the difficulty, with a switch |
| **Explorer** | Every block, transaction and address, and the fee to get into the next block |
| **Calendar** | Each day's blocks and pools |
| **Catalog** | Every series, browsed like files |
| **API** | Every series, block, transaction and address as data |

US dollar values use DebitMyData's [reference price](/data/reference-price/), worked out for
every block since the first, and labeled as such: it is not a market price.

It is built on [Bitview](https://github.com/bitcoinresearchkit/mono), the Bitcoin Research
Kit, adapted to DebitMyData.

## API

Free and open, documented at [analytics.debitmydata.io/api](https://analytics.debitmydata.io/api):

```sh
curl -s https://analytics.debitmydata.io/api/blocks/tip/height
curl -s https://analytics.debitmydata.io/api/price
curl -s https://analytics.debitmydata.io/api/mempool
curl -s "https://analytics.debitmydata.io/api/series/search?q=supply"
```

- Blocks, transactions, addresses, mining, fees and mempool requests are the same as
  **mempool.space's REST API**.
- **Series**: thousands of time series by date, block height and more, in JSON or CSV
  (`/api/series/...`).
- For AI agents: [`/llms.txt`](https://analytics.debitmydata.io/llms.txt) to start, and the
  [OpenAPI description](https://analytics.debitmydata.io/openapi.json) to build tools.

The API keeps Bitview's names, so tools made for it work unchanged: `btc` means DMD, `sats`
means data (1/100,000,000 DMD) and `cents` are millionths of a dollar.
