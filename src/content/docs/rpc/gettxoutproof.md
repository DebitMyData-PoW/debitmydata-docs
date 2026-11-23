---
title: gettxoutproof
description: "Returns a hex-encoded proof that \"txid\" was included in a block. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
gettxoutproof ["txid",...] ( "blockhash" )
```

Returns a hex-encoded proof that "txid" was included in a block.

NOTE: By default this function only works sometimes. This is when there is an unspent output in the utxo for this transaction. To make it always work, you need to maintain a transaction index, using the -txindex command line option or specify the block in which the transaction is included manually (by blockhash).

## Arguments

```text
1. txids          (json array, required) The txids to filter
     [
       "txid",    (string) A transaction hash
       ...
     ]
2. blockhash      (string, optional) If specified, looks for txid in the block with this hash
```

## Result

```text
"str"    (string) A string that is a serialized, hex-encoded data for the proof.
```
