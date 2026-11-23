---
title: joinpsbts
description: "Joins multiple distinct PSBTs with different inputs and outputs into one PSBT with inputs and outputs from all of the PSBTs No input in any of the PSBTs can be in more than one of the PSBTs. DebitMyData Core RPC command."
coin: true
---

[Raw transactions](/rpc/#raw-transactions) command of DebitMyData Core 1.3.5.

```text
joinpsbts ["psbt",...]
```

Joins multiple distinct PSBTs with different inputs and outputs into one PSBT with inputs and outputs from all of the PSBTs No input in any of the PSBTs can be in more than one of the PSBTs.

## Arguments

```text
1. txs            (json array, required) The base64 strings of partially signed transactions
     [
       "psbt",    (string, required) A base64 string of a PSBT
       ...
     ]
```

## Result

```text
"str"    (string) The base64-encoded partially signed transaction
```

## Examples

```sh
debitmydata-cli joinpsbts "psbt"
```
