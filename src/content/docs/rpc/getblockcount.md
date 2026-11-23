---
title: getblockcount
description: "Returns the height of the most-work fully-validated chain. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getblockcount
```

Returns the height of the most-work fully-validated chain.\
The genesis block has height 0.

## Result

```text
n    (numeric) The current block count
```

## Examples

```sh
debitmydata-cli getblockcount
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getblockcount", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
