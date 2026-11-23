---
title: savemempool
description: "Dumps the mempool to disk. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
savemempool
```

Dumps the mempool to disk. It will fail until the previous dump is fully loaded.

## Result

```text
{                        (json object)
  "filename" : "str"     (string) the directory and file where the mempool was saved
}
```

## Examples

```sh
debitmydata-cli savemempool
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "savemempool", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
