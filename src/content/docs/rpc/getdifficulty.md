---
title: getdifficulty
description: "Returns the proof-of-work difficulty as a multiple of the minimum difficulty. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getdifficulty
```

Returns the proof-of-work difficulty as a multiple of the minimum difficulty.

## Result

```text
n    (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty.
```

## Examples

```sh
debitmydata-cli getdifficulty
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getdifficulty", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
