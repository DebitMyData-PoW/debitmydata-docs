---
title: listwalletdir
description: "Returns a list of wallets in the wallet directory. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
listwalletdir
```

Returns a list of wallets in the wallet directory.

## Result

```text
{                        (json object)
  "wallets" : [          (json array)
    {                    (json object)
      "name" : "str",    (string) The wallet name
      "warnings" : [     (json array, optional) Warning messages, if any, related to loading the wallet.
        "str",           (string)
        ...
      ]
    },
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli listwalletdir
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listwalletdir", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
