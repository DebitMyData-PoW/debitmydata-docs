---
title: clearbanned
description: "Clear all banned IPs. DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
clearbanned
```

Clear all banned IPs.

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli clearbanned
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "clearbanned", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
