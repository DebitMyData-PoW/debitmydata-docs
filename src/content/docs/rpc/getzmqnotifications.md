---
title: getzmqnotifications
description: "Returns information about the active ZeroMQ notifications. DebitMyData Core RPC command."
coin: true
---

[ZMQ](/rpc/#zmq) command of DebitMyData Core 1.3.5.

```text
getzmqnotifications
```

Returns information about the active ZeroMQ notifications.

## Result

```text
[                         (json array)
  {                       (json object)
    "type" : "str",       (string) Type of notification
    "address" : "str",    (string) Address of the publisher
    "hwm" : n             (numeric) Outbound message high water mark
  },
  ...
]
```

## Examples

```sh
debitmydata-cli getzmqnotifications
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getzmqnotifications", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
