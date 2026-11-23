---
title: For exchanges and listings
description: Everything an exchange, a wallet or a listing site needs to add DMD. Facts, supply endpoints, address formats, confirmations, the node, the commands for deposits and withdrawals, explorers and logos.
coin: true
sidebar:
  label: Exchanges and listings
---

This page gathers what an exchange, a wallet or a coin-listing site usually asks for. For
anything else, write to [info@debitmydata.com](mailto:info@debitmydata.com).

## The coin

| | |
| --- | --- |
| Name | DebitMyData PoW |
| Ticker | DMD |
| Type | The native coin of its own Proof-of-Work blockchain. **Not a token**: DMD isn't on Ethereum, Base or any other chain |
| Built from | Bitcoin Core (DebitMyData Core 1.3.5 is built from Bitcoin Core 31.1) |
| Algorithm | SHA-256 |
| Block time | 150 seconds (2.5 minutes) |
| Decimals | 8 (the smallest unit, a *data*, is 0.00000001 DMD) |
| Block reward | 35 DMD, halving every 300,000 blocks, in repeating cycles |
| Maximum supply | None (20,999,999.964 DMD per cycle of 9,600,000 blocks) |
| Pre-mine | None |
| First block | 20 February 2026 |
| Coinbase maturity | 250 blocks (about 10.4 hours) |
| Website | [debitmydata.io](https://debitmydata.io/) |
| Whitepaper | [Version 2.0 (PDF)](https://debitmydata.io/DebitMyData_Whitepaper_v2.0.pdf) |
| Source code | [github.com/DebitMyData-PoW/DebitMyData-PoW-Core](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core) |

More in [The DMD coin](/coin/overview/).

## Supply and price for listing sites

| Field | Value |
| --- | --- |
| Circulating supply | `https://stats.debitmydata.io/api/circulating-supply.txt` (a plain number) |
| Total supply | `https://stats.debitmydata.io/api/total-supply.txt` (a plain number, the same) |
| Max supply | None |
| Everything in one file | `https://stats.debitmydata.io/api/coin.json` |
| Rich list | [Rich list](/api/rich-list/), or `https://stats.debitmydata.io/api/richlist.json` |
| Market price | None yet: DMD isn't on an exchange. DebitMyData's [reference price](/data/reference-price/) is not a market price |

The [coin data API](/api/coin-data/) explains each figure.

## Addresses

| Kind | Starts with | Length |
| --- | --- | --- |
| SegWit (bech32), the default | `dm1q` | 42 characters (62 for a script) |
| Legacy (base58) | `D` | 34 characters |

Check an address with [`validateaddress`](/rpc/validateaddress/) on your node. The bech32
prefix is `dm`; the base58 version bytes are 30 (addresses) and 31 (scripts), and 158 for
private keys (WIF).

## Confirmations

Each confirmation takes 150 seconds on average:

| Confirmations | About |
| --- | --- |
| 6 | 15 minutes |
| 12 | 30 minutes |
| 24 | 1 hour |
| 60 | 2.5 hours |

Mined coins (coinbase outputs) can only be spent after 250 confirmations. The difficulty adjusts
at every block (LWMA over the last 60 blocks), so the block time stays close to 150 seconds when
the hashrate changes.

## The node

Run **DebitMyData Core** like Bitcoin Core: download it from the
[releases](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core/releases) and follow
[Run a node](/coin/node/).

| | |
| --- | --- |
| Programs | `debitmydatad` (the node), `debitmydata-cli` (commands), `debitmydata-qt` (the app) |
| Settings file | `debitmydata.conf` |
| P2P port | 18556 |
| RPC port | 18557, on `127.0.0.1` only |
| Tor port | 18558 |

Its RPC interface is Bitcoin Core's, so software made for Bitcoin Core works with a change of
ports and address prefixes. The [RPC reference](/rpc/) lists every command. The ones an
exchange uses most:

| For | Commands |
| --- | --- |
| Is the node in sync? | [`getblockchaininfo`](/rpc/getblockchaininfo/) |
| Deposit addresses | [`getnewaddress`](/rpc/getnewaddress/), [`getaddressinfo`](/rpc/getaddressinfo/) |
| Incoming deposits | [`listsinceblock`](/rpc/listsinceblock/), [`gettransaction`](/rpc/gettransaction/) |
| Balance | [`getbalances`](/rpc/getbalances/) |
| Withdrawals | [`sendtoaddress`](/rpc/sendtoaddress/), [`sendmany`](/rpc/sendmany/), [`estimatesmartfee`](/rpc/estimatesmartfee/) |
| An encrypted wallet | [`walletpassphrase`](/rpc/walletpassphrase/) |
| Backups | [`backupwallet`](/rpc/backupwallet/) |

To hear about deposits as they arrive, set `walletnotify=` (run for each wallet transaction)
and `blocknotify=` (run for each new block) in `debitmydata.conf`, as in Bitcoin Core.

## Explorers

| Explorer | A transaction | An address |
| --- | --- | --- |
| [Mempool explorer](https://mempool.debitmydata.io/) | `https://mempool.debitmydata.io/tx/TXID` | `https://mempool.debitmydata.io/address/ADDRESS` |
| [Rich list and API](https://explorer.debitmydata.io/) | `https://explorer.debitmydata.io/tx/TXID` | `https://explorer.debitmydata.io/address/ADDRESS` |
| [Lite explorer](https://chain.debitmydata.io/) | Search by transaction ID | Search by address |

Their APIs are on [Explorers](/data/explorers/).

## Logo

The DMD coin, as PNG with a transparent background:
[512 × 512](https://debitmydata.io/assets/logo/512.png),
[1024 × 1024](https://debitmydata.io/assets/logo/1024.png) and
[2048 × 2048](https://debitmydata.io/assets/logo/2048.png).
Smaller sizes are in the same folder (`256.png`, `128.png`, `64.png`, `32.png`, `16.png`).

## Contact and community

- Email: [info@debitmydata.com](mailto:info@debitmydata.com)
- Discord, X, YouTube and GitHub: see [Community](/project/community/)
