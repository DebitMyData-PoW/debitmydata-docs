---
title: disconnectnode
description: "Immediately disconnects from the specified peer node. DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
disconnectnode ( "address" nodeid )
```

Immediately disconnects from the specified peer node.

Strictly one out of 'address' and 'nodeid' can be provided to identify the node.

To disconnect by nodeid, either set 'address' to the empty string, or call using the named 'nodeid' argument only.

## Arguments

```text
1. address    (string, optional, default=fallback to nodeid) The IP address/port of the node
2. nodeid     (numeric, optional, default=fallback to address) The node ID (see getpeerinfo for node IDs)
```

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli disconnectnode "192.168.0.6:18556"
debitmydata-cli disconnectnode "" 1
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "disconnectnode", "params": ["192.168.0.6:18556"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "disconnectnode", "params": ["", 1]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
