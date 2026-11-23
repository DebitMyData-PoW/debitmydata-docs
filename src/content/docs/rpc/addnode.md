---
title: addnode
description: "Attempts to add or remove a node from the addnode list. DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
addnode "node" "command" ( v2transport )
```

Attempts to add or remove a node from the addnode list.\
Or try a connection to a node once.\
Nodes added using addnode (or -connect) are protected from DoS disconnection and are not required to be full nodes/support SegWit as other outbound peers are (though such peers will not be synced from).\
Addnode connections are limited to 8 at a time and are counted separately from the -maxconnections limit.

## Arguments

```text
1. node           (string, required) The IP address/hostname optionally followed by :port of the peer to connect to
2. command        (string, required) 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once
3. v2transport    (boolean, optional, default=set by -v2transport) Attempt to connect using BIP324 v2 transport protocol (ignored for 'remove' command)
```

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli addnode "192.168.0.6:18556" "onetry" true
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "addnode", "params": ["192.168.0.6:18556", "onetry" true]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
