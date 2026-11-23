---
title: listwallets
description: "Returns a list of currently loaded wallets. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
listwallets
```

Returns a list of currently loaded wallets.\
For full information on the wallet, use "getwalletinfo"

## Result

```text
[           (json array)
  "str",    (string) the wallet name
  ...
]
```

## Examples

```sh
debitmydata-cli listwallets
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listwallets", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
