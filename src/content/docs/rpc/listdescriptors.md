---
title: listdescriptors
description: "List all descriptors present in a wallet. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
listdescriptors ( private )
```

List all descriptors present in a wallet.

## Arguments

```text
1. private    (boolean, optional, default=false) Show private descriptors.
```

## Result

```text
{                                 (json object)
  "wallet_name" : "str",          (string) Name of wallet this operation was performed on
  "descriptors" : [               (json array) Array of descriptor objects (sorted by descriptor string representation)
    {                             (json object)
      "desc" : "str",             (string) Descriptor string representation
      "timestamp" : n,            (numeric) The creation time of the descriptor
      "active" : true|false,      (boolean) Whether this descriptor is currently used to generate new addresses
      "internal" : true|false,    (boolean, optional) True if this descriptor is used to generate change addresses. False if this descriptor is used to generate receiving addresses; defined only for active descriptors
      "range" : [                 (json array, optional) Defined only for ranged descriptors
        n,                        (numeric) Range start inclusive
        n                         (numeric) Range end inclusive
      ],
      "next" : n,                 (numeric, optional) Same as next_index field. Kept for compatibility reason.
      "next_index" : n            (numeric, optional) The next index to generate addresses from; defined only for ranged descriptors
    },
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli listdescriptors
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listdescriptors", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
debitmydata-cli listdescriptors true
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listdescriptors", "params": [true]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
