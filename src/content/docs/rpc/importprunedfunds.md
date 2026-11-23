---
title: importprunedfunds
description: "Imports funds without rescan. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
importprunedfunds "rawtransaction" "txoutproof"
```

Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included.

## Arguments

```text
1. rawtransaction    (string, required) A raw transaction in hex funding an already-existing address in wallet
2. txoutproof        (string, required) The hex output from gettxoutproof that contains the transaction
```

## Result

```text
null    (json null)
```
