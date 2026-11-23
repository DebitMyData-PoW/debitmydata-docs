---
title: ping
description: "Requests that a ping be sent to all other nodes, to measure ping time. DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
ping
```

Requests that a ping be sent to all other nodes, to measure ping time.\
Results are provided in getpeerinfo.\
Ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping.

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli ping
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "ping", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
