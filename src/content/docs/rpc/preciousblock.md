---
title: preciousblock
description: "Treats a block as if it were received before others with the same work. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
preciousblock "blockhash"
```

Treats a block as if it were received before others with the same work.

A later preciousblock call can override the effect of an earlier one.

The effects of preciousblock are not retained across restarts.

## Arguments

```text
1. blockhash    (string, required) the hash of the block to mark as precious
```

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli preciousblock "blockhash"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "preciousblock", "params": ["blockhash"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
