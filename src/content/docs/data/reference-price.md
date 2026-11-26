---
title: Reference price
description: DMD has no market price yet. DebitMyData's reference price is its minimum rate of $0.001, or the cost of mining DMD when that is higher. It can go up or down, never below the minimum, until the market price replaces it. How it is computed, its API and where it is used.
coin: true
---

DMD is not on an exchange yet, so it has no market price. Until it has one, DebitMyData uses
a **reference price**: its **minimum rate of $0.001 per DMD**, or the cost of the electricity
it takes to mine one DMD when that is higher.

- It **moves with the mining cost**: it can go up or down, but never below the minimum rate.
- It is **not a market price**: nobody is obliged to buy or sell DMD at it.
- Once DMD is listed on an exchange, its **market price will replace it**.

## How it is computed

```text
mining cost per DMD = hashes a block takes × energy per hash × electricity price ÷ DMD per block
reference price     = the higher of the mining cost and the minimum rate ($0.001)
```

- **Hashes a block takes**: the chain's work, averaged over the last week of blocks (4,032),
  so a short burst of hashing power barely moves it.
- **Energy per hash**: 20 joules per terahash, a typical mix of current and older SHA-256
  machines.
- **Electricity price**: $0.06 per kWh.
- **DMD per block**: the block reward (35 DMD, halving every 300,000 blocks), without fees.

The mining cost moves with the network. More hashing power makes each block take more work,
and a halving pays fewer DMD per block: both make a DMD cost more to mine. When hashing power
leaves, each DMD costs less to mine. The reference price follows the mining cost both ways, and
stops at the minimum rate.

DebitMyData reviews the energy and electricity figures every three months. The $0.001 minimum
rate was approved by DebitMyData on 27 October 2026. At $0.001, a $25.00 DID-LLM costs
25,000 DMD.

The price only uses DebitMyData's own chain and the cost of SHA-256 mining: never Bitcoin's
price, hashrate or difficulty.

## API

```sh
curl -s https://api.debitmydata.io/v1/prices/dmd-usd
```

The Agent Gateway computes it every 5 minutes. The answer gives the price and how it was
reached:

| Field | Means |
| --- | --- |
| `usd_per_unit` | US dollars per DMD |
| `units_per_usd` | DMD per US dollar |
| `price_from` | `mining_cost`, or `minimum` while the mining cost is below $0.001 |
| `mining_cost_usd_per_unit` | What it costs to mine 1 DMD |
| `minimum_usd_per_unit` | The minimum rate ($0.001) |
| `observed_at`, `age_seconds` | When it was computed |
| `fresh` | Recent enough for a quote (15 minutes at most) |
| `inputs` | Every figure it used |

## Where it is used

| | |
| --- | --- |
| [DID-LLM](/did-llm/overview/) payments in DMD | The quote's DMD amount: $25.00 at the reference price. A quote is refused if the price is older than 15 minutes |
| [Stats](/data/stats/) | Records it every 5 minutes, and charts it with the mining cost |
| [Analytics](/data/analytics/) | Works it out for every block since the first, with the same formula |
| [Web wallet](/coin/wallets/#web-wallet-mydmdio) | Shows balances in US dollars and other currencies, and explains the price in each of its 15 languages |

Once DMD trades on an exchange, its market price will replace the reference price.

## If you show DMD in dollars

A site or app that shows DMD at the reference price can say so in these words, and link to
this page:

> DMD isn't on an exchange yet, so it has no market price. Prices are shown at DebitMyData's
> reference price: its minimum rate of $0.001 per DMD, or the cost of mining DMD when that is
> higher. It can go up or down, but never below $0.001. It is not a market price, and nobody is
> obliged to buy or sell at it. Once DMD is listed on an exchange, the market price will replace
> it.
