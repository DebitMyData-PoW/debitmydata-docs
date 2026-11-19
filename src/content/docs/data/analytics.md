---
title: Analytics
description: analytics.debitmydata.io, in-depth on-chain analytics of the DebitMyData chain. Thousands of charts in Studio, the network, the mining pools on a globe, every series as data and an open API.
coin: true
---

[analytics.debitmydata.io](https://analytics.debitmydata.io/) reads every block of the
DebitMyData chain and turns it into thousands of figures: supply, addresses and their
balances, coins' age, what holders paid, fees, mining and more.

| | |
| --- | --- |
| **Studio** | Thousands of ready-made charts |
| **Oracle** | The network on one screen: hashrate, the reference price and the difficulty, each block behind the line, and small charts of how each is worked out |
| **Explorer** | Every block, transaction and address, each block's size, and the fee to get into the next block |
| **Compass** | Where DMD's reference price stands against what its holders paid |
| **Globe** | Where the blocks are mined: each mining pool's country, on a globe |
| **Trail** | Every DMD by the reference price it last moved at, as a terrain over the days |
| **Stack** | A plan buying DMD on a schedule, beside one that buys more at Bedrock's price floors |
| **Calendar** | Each day's blocks and pools |
| **Miners** | Which pool first did each new thing on the chain, and every block that left coins unclaimed |
| **Catalog** | Every series, browsed like files |
| **API** | Every series, block, transaction and address as data |

US dollar values use DebitMyData's [reference price](/data/reference-price/), worked out for
every block since the first, and labeled as such: it is not a market price.

The mining pools, their logos and countries come from DebitMyData's public lists on GitHub,
[mining-pools](https://github.com/DebitMyData-PoW/mining-pools) and
[mining-pool-logos](https://github.com/DebitMyData-PoW/mining-pool-logos), read every day by both
this site and [DMD Stats](/data/stats/). A pool is known by the text it writes in its blocks or the
addresses it pays.

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

The pages show amounts in DMD and data (1/100,000,000 DMD), and fee rates in data/vB. The API's
descriptions say data too, but it keeps Bitview's names, so tools made for it work unchanged: `btc`
means DMD, `sats` means data and `cents` are millionths of a dollar.
