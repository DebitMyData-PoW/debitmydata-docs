---
title: waitfornewblock
description: "Waits for any new block and returns useful info about it. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
waitfornewblock ( timeout "current_tip" )
```

Waits for any new block and returns useful info about it.

Returns the current block on timeout or exit.

Make sure to use no RPC timeout (debitmydata-cli -rpcclienttimeout=0)

## Arguments

```text
1. timeout        (numeric, optional, default=0) Time in milliseconds to wait for a response. 0 indicates no timeout.
2. current_tip    (string, optional) Method waits for the chain tip to differ from this.
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
debitmydata-cli waitfornewblock 1000
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "waitfornewblock", "params": [1000]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
