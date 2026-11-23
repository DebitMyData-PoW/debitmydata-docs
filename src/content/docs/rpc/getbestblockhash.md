---
title: getbestblockhash
description: "Returns the hash of the best (tip) block in the most-work fully-validated chain. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getbestblockhash
```

Returns the hash of the best (tip) block in the most-work fully-validated chain.

## Result

```text
"hex"    (string) the block hash, hex-encoded
```

## Examples

```sh
debitmydata-cli getbestblockhash
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getbestblockhash", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
