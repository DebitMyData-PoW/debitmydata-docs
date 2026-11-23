---
title: utxoupdatepsbt
description: "Updates all segwit inputs and outputs in a PSBT with data from output descriptors, the UTXO set, txindex, or the mempool. DebitMyData Core RPC command."
coin: true
---

[Raw transactions](/rpc/#raw-transactions) command of DebitMyData Core 1.3.5.

```text
utxoupdatepsbt "psbt" ( ["",{"desc":"str","range":n or [n,n]},...] )
```

Updates all segwit inputs and outputs in a PSBT with data from output descriptors, the UTXO set, txindex, or the mempool.

## Arguments

```text
1. psbt                          (string, required) A base64 string of a PSBT
2. descriptors                   (json array, optional) An array of either strings or objects
     [
       "",                       (string) An output descriptor
       {                         (json object) An object with an output descriptor and extra information
         "desc": "str",          (string, required) An output descriptor
         "range": n or [n,n],    (numeric or array, optional, default=1000) Up to what index HD chains should be explored (either end or [begin,end])
       },
       ...
     ]
```

## Result

```text
"str"    (string) The base64-encoded partially signed transaction with inputs updated
```

## Examples

```sh
debitmydata-cli utxoupdatepsbt "psbt"
```
