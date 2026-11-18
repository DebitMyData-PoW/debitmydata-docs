---
title: Reference price
description: DMD has no market price yet. DebitMyData's reference price follows the cost of mining DMD and never goes below $0.001. How it is computed, its API and where it is used.
coin: true
---

DMD is not on an exchange yet, so it has no market price. Until it has one, DebitMyData uses
a **reference price**: the cost of the electricity it takes to mine one DMD, and never less
than **$0.001 per DMD**.

It is **not a market price**: nobody is promised to buy or sell DMD at it.

## How it is computed

```text
mining cost per DMD = hashes a block takes × energy per hash × electricity price ÷ DMD per block
reference price     = the higher of the mining cost and $0.001
```

- **Hashes a block takes**: the chain's work, averaged over the last week of blocks (4,032),
  so a short burst of hashing power barely moves it.
- **Energy per hash**: 20 joules per terahash, a typical mix of current and older SHA-256
  machines.
- **Electricity price**: $0.06 per kWh.
- **DMD per block**: the block reward (35 DMD, halving every 300,000 blocks), without fees.

DebitMyData reviews the energy and electricity figures every three months. The $0.001 minimum
was approved by DebitMyData on 27 October 2026. At $0.001, a $25.00 DID-LLM costs 25,000 DMD.

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
| `minimum_usd_per_unit` | The minimum rate |
| `observed_at`, `age_seconds` | When it was computed |
| `fresh` | Recent enough for a quote (15 minutes at most) |
| `inputs` | Every figure it used |

## Where it is used

| | |
| --- | --- |
| [DID-LLM](/did-llm/overview/) payments in DMD | The quote's DMD amount: $25.00 at the reference price. A quote is refused if the price is older than 15 minutes |
| [Stats](/data/stats/) | Records it every 5 minutes, and charts it with the mining cost |
| [Analytics](/data/analytics/) | Works it out for every block since the first, with the same formula |

Once DMD trades on an exchange, its market price will replace the reference price.
