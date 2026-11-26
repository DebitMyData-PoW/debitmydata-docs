---
title: The DMD coin
description: DMD, the native coin of the DebitMyData Proof-of-Work chain. Specs, units, supply cycles, addresses and ports.
coin: true
sidebar:
  label: Overview
---

DMD is the native coin of the **DebitMyData Proof-of-Work chain**, an independent SHA-256
blockchain built from Bitcoin Core. It has no pre-mine: every DMD was mined. Its first block
is dated 20 February 2026.

DMD pays for DebitMyData's services, starting with the [DID-LLM](/did-llm/overview/), and it is
built to stay mineable for good: the block reward starts a new cycle once a cycle's supply has
been mined.

## Specs

| | |
| --- | --- |
| Name | DebitMyData PoW |
| Ticker | DMD |
| Algorithm | SHA-256 (any Bitcoin ASIC mines it) |
| Block time | 150 seconds (2.5 minutes) |
| Difficulty | LWMA-3 over the last 60 blocks, adjusted at every block |
| Block reward | 35 DMD |
| Halving | Every 300,000 blocks (about 1.4 years) |
| Supply per cycle | 21,000,000 DMD |
| Cycle | 9,600,000 blocks (32 halvings, about 45.7 years), then the reward starts again at 35 DMD |
| Pre-mine | None |
| Block size | 4 MB (weight) |
| Coinbase maturity | 250 blocks (about 10.4 hours) before mined coins can be spent |
| Addresses | `dm1…` (bech32); older `D…` addresses also work |
| P2P port | 18556 |
| RPC port | 18557 (keep it closed to the internet) |
| Tor port | 18558 |
| Transport | BIP324 (v2) encrypted connections between nodes, by default |

The live height, hashrate, difficulty and supply are on [stats.debitmydata.io](https://stats.debitmydata.io/).

## Units

| Unit | In DMD | Also called |
| --- | --- | --- |
| DMD | 1 | |
| mDMD | 0.001 | milli-DMD |
| debit | 0.000001 | µDMD (micro-DMD) |
| data | 0.00000001 | the smallest unit, 1/100,000,000 DMD |

"Debits" replace Bitcoin's "bits", and "data" replaces the "sat".

## Supply cycles

Bitcoin's reward halves until it reaches zero; after that, miners only earn fees. DebitMyData
instead mines in **cycles**:

1. Each block pays 35 DMD at the start of a cycle.
2. The reward halves every 300,000 blocks.
3. After 32 halvings (9,600,000 blocks, about 45.7 years), close to 21,000,000 DMD have been
   mined in that cycle, and the reward starts again at 35 DMD.

Miners always earn a block reward, so the chain always pays for its security.

## Price

DMD is not on an exchange yet, so it has no market price. DebitMyData publishes a
**reference price** instead: its minimum rate of $0.001 per DMD, or the cost of mining DMD when
that is higher. It can go up or down, but never below $0.001. It is not a market price, and
once DMD is listed on an exchange, the market price will replace it. See
[Reference price](/data/reference-price/).

## Learn more

- [Whitepaper, version 2.0 (PDF)](https://debitmydata.io/DebitMyData_Whitepaper_v2.0.pdf)
- [debitmydata.io](https://debitmydata.io/): the coin's website and roadmap
- [DebitMyData Core on GitHub](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core): the source code
