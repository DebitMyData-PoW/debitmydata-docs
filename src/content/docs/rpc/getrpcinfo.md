---
title: getrpcinfo
description: "Returns details of the RPC server. DebitMyData Core RPC command."
coin: true
---

[Control](/rpc/#control) command of DebitMyData Core 1.3.5.

```text
getrpcinfo
```

Returns details of the RPC server.

## Result

```text
{                          (json object)
  "active_commands" : [    (json array) All active commands
    {                      (json object) Information about an active command
      "method" : "str",    (string) The name of the RPC command
      "duration" : n       (numeric) The running time in microseconds
    },
    ...
  ],
  "logpath" : "str"        (string) The complete file path to the debug log
}
```

## Examples

```sh
debitmydata-cli getrpcinfo
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getrpcinfo", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
