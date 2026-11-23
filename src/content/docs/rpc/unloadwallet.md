---
title: unloadwallet
description: "Unloads the wallet referenced by the request endpoint or the wallet_name argument. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
unloadwallet ( "wallet_name" load_on_startup )
```

Unloads the wallet referenced by the request endpoint or the wallet\_name argument.\
If both are specified, they must be identical.

## Arguments

```text
1. wallet_name        (string, optional, default=the wallet name from the RPC endpoint) The name of the wallet to unload. If provided both here and in the RPC endpoint, the two must be identical.
2. load_on_startup    (boolean, optional) Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged.
```

## Result

```text
{                   (json object)
  "warnings" : [    (json array, optional) Warning messages, if any, related to unloading the wallet.
    "str",          (string)
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli unloadwallet wallet_name
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "unloadwallet", "params": [wallet_name]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
