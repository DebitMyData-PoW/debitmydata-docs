---
title: uptime
description: "Returns the total uptime of the server. DebitMyData Core RPC command."
coin: true
---

[Control](/rpc/#control) command of DebitMyData Core 1.3.5.

```text
uptime
```

Returns the total uptime of the server.

## Result

```text
n    (numeric) The number of seconds that the server has been running
```

## Examples

```sh
debitmydata-cli uptime
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "uptime", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
