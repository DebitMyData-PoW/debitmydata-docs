---
title: waitforblockheight
description: "Waits for (at least) block height and returns the height and hash of the current tip. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
waitforblockheight height ( timeout )
```

Waits for (at least) block height and returns the height and hash of the current tip.

Returns the current block on timeout or exit.

Make sure to use no RPC timeout (debitmydata-cli -rpcclienttimeout=0)

## Arguments

```text
1. height     (numeric, required) Block height to wait for.
2. timeout    (numeric, optional, default=0) Time in milliseconds to wait for a response. 0 indicates no timeout.
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
debitmydata-cli waitforblockheight 100 1000
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "waitforblockheight", "params": [100, 1000]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
