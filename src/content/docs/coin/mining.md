---
title: Mining DMD
description: Mine DMD with any SHA-256 miner on the official pool, pool.debitmydata.io. Connection settings, PPLNS or solo, starting difficulty, rented hashrate and the pool's API.
coin: true
---

DMD is mined with **SHA-256**, the algorithm of Bitcoin, so any Bitcoin ASIC (Antminer,
Whatsminer, Avalon and others) mines it. The official pool is
[pool.debitmydata.io](https://pool.debitmydata.io/).

## Pool settings

| Field in your miner | Value |
| --- | --- |
| Pool (URL) | `connect.debitmydata.io:8700` |
| Worker / user | Your DMD address, optionally followed by `.` and a name for the machine: `dm1q….S19` |
| Password | `x`, or the options below |

You need a DMD address first: get one from any [wallet](/coin/wallets/).

### Password options

| Password | Effect |
| --- | --- |
| `x` | Pool mining (PPLNS), starting difficulty 2048 |
| `d=65536` | Sets the starting difficulty (here 65536). Large machines start higher, so they send fewer shares |
| `m=solo` | Solo mining: the whole block is yours when your machine finds one |
| `d=65536,m=solo` | Both |

| Mode | Fee | Paid |
| --- | --- | --- |
| Pool (PPLNS) | 0.5% | Your share of each block the pool finds, by the shares you sent recently |
| Solo | 1% | Each block you find, all to you |

Mined DMD can be spent after 250 blocks (about 10.4 hours), the chain's coinbase maturity.

## Step by step

1. Open your miner's settings page (on most ASICs: its IP address in a browser, then
   **Miner Configuration**).
2. In **Pool** or **URL**, enter `connect.debitmydata.io:8700`.
3. In **Worker** or **User**, enter your DMD address, optionally with a name: `dm1q….S19`.
4. In **Password**, enter `x`, or `d=…` and `m=solo` as above.
5. Save. After a few minutes, your address's page shows your hashrate:
   `https://pool.debitmydata.io/mywallet/?address=YOUR_ADDRESS`.
6. Optional: install the pool's app from the pool's site and turn on its notifications.

## Rented hashrate

No machine? Rent SHA-256 hashrate and point it at the pool:

- **NiceHash** ([hash power marketplace](https://www.nicehash.com/support/hash-power-marketplace)):
  algorithm SHA256, pool `connect.debitmydata.io:8700`, your DMD address as the user, `x` as
  the password. The pool is NiceHash compatible: NiceHash connections start at difficulty
  500,000.
- **MiningRigRentals** ([miningrigrentals.com](https://www.miningrigrentals.com/)): choose
  **SHA256 Asicboost**, pool host `connect.debitmydata.io:8700`, your DMD address as the worker
  name, `x` as the password.

## Is it worth it?

[stats.debitmydata.io](https://stats.debitmydata.io/) shows the network's hashrate and
difficulty and what it costs in electricity to mine 1 DMD, so you can compare with your own
machines and electricity price.

## Pool API

The pool answers in JSON, with no key. It allows only a few requests a minute: ask once,
then wait.

| Request | Answers |
| --- | --- |
| `GET https://pool.debitmydata.io/api/status` | The pool's hashrate, workers and fees |
| `GET https://pool.debitmydata.io/api/currencies` | DMD on the pool: height, the network's difficulty and hashrate, the pool's last blocks |
| `GET https://pool.debitmydata.io/api/wallet?address=ADDRESS` | An address's balance, unpaid and paid DMD |
| `GET https://pool.debitmydata.io/api/walletEx?address=ADDRESS` | The same, with its miners and their hashrate |

## Mining with your own node

Pool mining is the simple way. To mine solo against your own node instead, run
[DebitMyData Core](/coin/node/) with `server=1`: it serves `getblocktemplate` to mining
software like Bitcoin Core does. Most people use the pool's solo mode (`m=solo`) rather than
running their own stratum server.
