---
title: gettxout
description: "Returns details about an unspent transaction output. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
gettxout "txid" n ( include_mempool )
```

Returns details about an unspent transaction output.

## Arguments

```text
1. txid               (string, required) The transaction id
2. n                  (numeric, required) vout number
3. include_mempool    (boolean, optional, default=true) Whether to include the mempool. Note that an unspent output that is spent in the mempool won't appear.
```

## Results

### If the UTXO was not found

```text
null    (json null)
```

### Otherwise

```text
{                             (json object)
  "bestblock" : "hex",        (string) The hash of the block at the tip of the chain
  "confirmations" : n,        (numeric) The number of confirmations
  "value" : n,                (numeric) The transaction value in DMD
  "scriptPubKey" : {          (json object)
    "asm" : "str",            (string) Disassembly of the output script
    "desc" : "str",           (string) Inferred descriptor for the output
    "hex" : "hex",            (string) The raw output script bytes, hex-encoded
    "type" : "str",           (string) The type, eg pubkeyhash
    "address" : "str"         (string, optional) The DebitMyData address (only if a well-defined address exists)
  },
  "coinbase" : true|false     (boolean) Coinbase or not
}
```

## Examples

Get unspent transactions

```sh
debitmydata-cli listunspent
```

View the details

```sh
debitmydata-cli gettxout "txid" 1
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "gettxout", "params": ["txid", 1]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
