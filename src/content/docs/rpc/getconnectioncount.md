---
title: getconnectioncount
description: "Returns the number of connections to other nodes. DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
getconnectioncount
```

Returns the number of connections to other nodes.

## Result

```text
n    (numeric) The connection count
```

## Examples

```sh
debitmydata-cli getconnectioncount
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getconnectioncount", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
