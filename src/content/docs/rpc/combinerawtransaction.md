---
title: combinerawtransaction
description: "Combine multiple partially signed transactions into one transaction. DebitMyData Core RPC command."
coin: true
---

[Raw transactions](/rpc/#raw-transactions) command of DebitMyData Core 1.3.5.

```text
combinerawtransaction ["hexstring",...]
```

Combine multiple partially signed transactions into one transaction.\
The combined transaction may be another partially signed transaction or a fully signed transaction.

## Arguments

```text
1. txs                 (json array, required) The hex strings of partially signed transactions
     [
       "hexstring",    (string) A hex-encoded raw transaction
       ...
     ]
```

## Result

```text
"str"    (string) The hex-encoded raw transaction with signature(s)
```

## Examples

```sh
debitmydata-cli combinerawtransaction '["myhex1", "myhex2", "myhex3"]'
```
