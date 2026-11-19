---
title: Stats
description: stats.debitmydata.io, the DebitMyData network's live figures since block 1. Hashrate, difficulty, mining cost, reference price, miners, notifications and a free API in JSON and CSV.
coin: true
---

[stats.debitmydata.io](https://stats.debitmydata.io/) shows the DebitMyData Proof-of-Work chain
live and since its first block:

- **Hashrate and difficulty**, with their all-time highs.
- **Blocks**: height, block time, the block reward and the next halving.
- **Mining cost**: what the electricity to mine 1 DMD costs.
- **Reference price** and **market cap** (see [Reference price](/data/reference-price/)).
- **On-chain volume** and transactions.
- **Miners**: who found the last blocks, and the pool's share; the pools of DebitMyData's
  [pool list](https://github.com/DebitMyData-PoW/mining-pools) by name, with their logos.
- **Large transfers** and the **rich list**.
- Charts from the last 15 minutes up to all time, with candles.

It also watches the chain's health: it warns when the chain splits (a fork) or when one miner
or pool holds most of the hashrate.

## Notifications and the app

The bell lets you choose alerts, for example a new block found by the pool, a hashrate or
difficulty change, the reference price moving or reaching a price you set, or a daily summary.
The site installs as an app on phones and computers, so the alerts arrive like any app's.

## API

Free, with no key and no sign-up, readable from any website. Each file is at
`https://stats.debitmydata.io` followed by its path:

| File | What | Updated |
| --- | --- | --- |
| [`/api/summary.json`](https://stats.debitmydata.io/api/summary.json) | The latest figures with their 24-hour changes: height, difficulty, hashrate, mining cost, reference price, market cap, volume, block reward, next halving, the chain's status | Every minute |
| `/api/chart-24h.json` | Chart points and candles. The other ranges, from 15 minutes up to all time, are listed on the [API page](https://stats.debitmydata.io/api/) | Every minute (30 days, 1 year and all: every 10 minutes) |
| [`/api/miners.json`](https://stats.debitmydata.io/api/miners.json) | Who found blocks over 24 hours, 7 and 30 days, and their shares | Every minute |
| [`/api/transfers.json`](https://stats.debitmydata.io/api/transfers.json) | Large transfers of the last 7 days | Every minute |
| [`/api/richlist.json`](https://stats.debitmydata.io/api/richlist.json) | The 100 addresses holding the most DMD | Every minute |
| [`/api/dmd-daily.csv`](https://stats.debitmydata.io/api/dmd-daily.csv) | One line per day since block 1, for spreadsheets | Every minute |
| [`/api/dmd-blocks.csv`](https://stats.debitmydata.io/api/dmd-blocks.csv) | One line per block since block 1 | Every hour |

The [API page](https://stats.debitmydata.io/api/) describes every field and lets you try each
file.
