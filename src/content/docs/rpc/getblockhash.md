---
title: getblockhash
description: "Returns hash of block in best-block-chain at height provided. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getblockhash height
```

Returns hash of block in best-block-chain at height provided.

## Arguments

```text
1. height    (numeric, required) The height index
```

## Result

```text
"hex"    (string) The block hash
```

## Examples

```sh
debitmydata-cli getblockhash 1000
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getblockhash", "params": [1000]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
