---
title: listbanned
description: "List all manually banned IPs/Subnets. DebitMyData Core RPC command."
coin: true
---

[Network](/rpc/#network) command of DebitMyData Core 1.3.5.

```text
listbanned
```

List all manually banned IPs/Subnets.

## Result

```text
[                              (json array)
  {                            (json object)
    "address" : "str",         (string) The IP/Subnet of the banned node
    "ban_created" : xxx,       (numeric) The UNIX epoch time the ban was created
    "banned_until" : xxx,      (numeric) The UNIX epoch time the ban expires
    "ban_duration" : xxx,      (numeric) The ban duration, in seconds
    "time_remaining" : xxx     (numeric) The time remaining until the ban expires, in seconds
  },
  ...
]
```

## Examples

```sh
debitmydata-cli listbanned
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listbanned", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
