---
title: combinepsbt
description: "Combine multiple partially signed DebitMyData transactions into one transaction. DebitMyData Core RPC command."
coin: true
---

[Raw transactions](/rpc/#raw-transactions) command of DebitMyData Core 1.3.5.

```text
combinepsbt ["psbt",...]
```

Combine multiple partially signed DebitMyData transactions into one transaction.\
Implements the Combiner role.

## Arguments

```text
1. txs            (json array, required) The base64 strings of partially signed transactions
     [
       "psbt",    (string) A base64 string of a PSBT
       ...
     ]
```

## Result

```text
"str"    (string) The base64-encoded partially signed transaction
```

## Examples

```sh
debitmydata-cli combinepsbt '["mybase64_1", "mybase64_2", "mybase64_3"]'
```
