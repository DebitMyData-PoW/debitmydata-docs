---
title: getindexinfo
description: "Returns the status of one or all available indices currently running in the node. DebitMyData Core RPC command."
coin: true
---

[Utility](/rpc/#utility) command of DebitMyData Core 1.3.5.

```text
getindexinfo ( "index_name" )
```

Returns the status of one or all available indices currently running in the node.

## Arguments

```text
1. index_name    (string, optional) Filter results for an index with a specific name.
```

## Result

```text
{                               (json object)
  "name" : {                    (json object) The name of the index
    "synced" : true|false,      (boolean) Whether the index is synced or not
    "best_block_height" : n     (numeric) The block height to which the index is synced
  },
  ...
}
```

## Examples

```sh
debitmydata-cli getindexinfo
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getindexinfo", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
debitmydata-cli getindexinfo txindex
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getindexinfo", "params": [txindex]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
