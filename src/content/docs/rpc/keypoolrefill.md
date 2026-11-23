---
title: keypoolrefill
description: "Refills each descriptor keypool in the wallet up to the specified number of new keys. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
keypoolrefill ( newsize )
```

Refills each descriptor keypool in the wallet up to the specified number of new keys.\
By default, descriptor wallets have 4 active ranged descriptors ("legacy", "p2sh-segwit", "bech32", "bech32m"), each with 1000 entries.

Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.

## Arguments

```text
1. newsize    (numeric, optional, default=1000, or as set by -keypool) The new keypool size
```

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli keypoolrefill
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "keypoolrefill", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
