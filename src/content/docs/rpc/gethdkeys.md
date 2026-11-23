---
title: gethdkeys
description: "List all BIP 32 HD keys in the wallet and which descriptors use them. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
gethdkeys ( {"active_only":bool,"private":bool,...} )
```

List all BIP 32 HD keys in the wallet and which descriptors use them.

## Arguments

```text
1. options    (json object, optional) Options object that can be used to pass named arguments, listed below.
```

## Named Arguments

```text
active_only    (boolean, optional, default=false) Show the keys for only active descriptors
private        (boolean, optional, default=false) Show private keys
```

## Result

```text
[                                  (json array)
  {                                (json object)
    "xpub" : "str",                (string) The extended public key
    "has_private" : true|false,    (boolean) Whether the wallet has the private key for this xpub
    "xprv" : "str",                (string, optional) The extended private key if "private" is true
    "descriptors" : [              (json array) Array of descriptor objects that use this HD key
      {                            (json object)
        "desc" : "str",            (string) Descriptor string representation
        "active" : true|false      (boolean) Whether this descriptor is currently used to generate new addresses
      },
      ...
    ]
  },
  ...
]
```

## Examples

```sh
debitmydata-cli gethdkeys
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "gethdkeys", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
debitmydata-cli -named gethdkeys active_only=true private=true
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "gethdkeys", "params": {"active_only":"true","private":"true"}}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
