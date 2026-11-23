---
title: waitforblock
description: "Waits for a specific new block and returns useful info about it. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
waitforblock "blockhash" ( timeout )
```

Waits for a specific new block and returns useful info about it.

Returns the current block on timeout or exit.

Make sure to use no RPC timeout (debitmydata-cli -rpcclienttimeout=0)

## Arguments

```text
1. blockhash    (string, required) Block hash to wait for.
2. timeout      (numeric, optional, default=0) Time in milliseconds to wait for a response. 0 indicates no timeout.
```

## Result

```text
{                    (json object)
  "hash" : "hex",    (string) The blockhash
  "height" : n       (numeric) Block height
}
```

## Examples

```sh
debitmydata-cli waitforblock "0000000000079f8ef3d2c688c244eb7a4570b24c9ed7b4a8c619eb02596f8862" 1000
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "waitforblock", "params": ["0000000000079f8ef3d2c688c244eb7a4570b24c9ed7b4a8c619eb02596f8862", 1000]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
