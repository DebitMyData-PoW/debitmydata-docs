---
title: getnodeaddresses
description: "Return known addresses, after filtering for quality and recency. DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
getnodeaddresses ( count "network" )
```

Return known addresses, after filtering for quality and recency.\
These can potentially be used to find new peers in the network.\
The total number of addresses known to the node may be higher.

## Arguments

```text
1. count      (numeric, optional, default=1) The maximum number of addresses to return. Specify 0 to return all known addresses.
2. network    (string, optional, default=all networks) Return only addresses of the specified network. Can be one of: ipv4, ipv6, onion, i2p, cjdns.
```

## Result

```text
[                         (json array)
  {                       (json object)
    "time" : xxx,         (numeric) The UNIX epoch time when the node was last seen
    "services" : n,       (numeric) The services offered by the node
    "address" : "str",    (string) The address of the node
    "port" : n,           (numeric) The port number of the node
    "network" : "str"     (string) The network (ipv4, ipv6, onion, i2p, cjdns) the node connected through
  },
  ...
]
```

## Examples

```sh
debitmydata-cli getnodeaddresses 8
debitmydata-cli getnodeaddresses 4 "i2p"
debitmydata-cli -named getnodeaddresses network=onion count=12
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getnodeaddresses", "params": [8]}' -H 'content-type: application/json' http://127.0.0.1:18557/
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getnodeaddresses", "params": [4, "i2p"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
