---
title: getaddednodeinfo
description: "Returns information about the given added node, or all added nodes (note that onetry addnodes are not listed here) DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
getaddednodeinfo ( "node" )
```

Returns information about the given added node, or all added nodes (note that onetry addnodes are not listed here)

## Arguments

```text
1. node    (string, optional, default=all nodes) If provided, return information about this specific node, otherwise all nodes are returned.
```

## Result

```text
[                                (json array)
  {                              (json object)
    "addednode" : "str",         (string) The node IP address or name (as provided to addnode)
    "connected" : true|false,    (boolean) If connected
    "addresses" : [              (json array) Only when connected = true
      {                          (json object)
        "address" : "str",       (string) The debitmydata server IP and port we're connected to
        "connected" : "str"      (string) connection, inbound or outbound
      },
      ...
    ]
  },
  ...
]
```

## Examples

```sh
debitmydata-cli getaddednodeinfo "192.168.0.201"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getaddednodeinfo", "params": ["192.168.0.201"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
