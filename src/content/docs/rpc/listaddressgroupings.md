---
title: listaddressgroupings
description: "Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
listaddressgroupings
```

Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions

## Result

```text
[               (json array)
  [             (json array)
    [           (json array)
      "str",    (string) The debitmydata address
      n,        (numeric) The amount in DMD
      "str"     (string, optional) The label
    ],
    ...
  ],
  ...
]
```

## Examples

```sh
debitmydata-cli listaddressgroupings
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listaddressgroupings", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
