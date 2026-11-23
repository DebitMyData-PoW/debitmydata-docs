---
title: listreceivedbylabel
description: "List received transactions by label. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
listreceivedbylabel ( minconf include_empty include_watchonly include_immature_coinbase )
```

List received transactions by label.

## Arguments

```text
1. minconf                      (numeric, optional, default=1) The minimum number of confirmations before payments are included.
2. include_empty                (boolean, optional, default=false) Whether to include labels that haven't received any payments.
3. include_watchonly            (boolean, optional, default=false) (DEPRECATED) No longer used
4. include_immature_coinbase    (boolean, optional, default=false) Include immature coinbase transactions.
```

## Result

```text
[                           (json array)
  {                         (json object)
    "amount" : n,           (numeric) The total amount received by addresses with this label
    "confirmations" : n,    (numeric) The number of confirmations of the most recent transaction included
    "label" : "str"         (string) The label of the receiving address. The default label is ""
  },
  ...
]
```

## Examples

```sh
debitmydata-cli listreceivedbylabel
debitmydata-cli listreceivedbylabel 6 true
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listreceivedbylabel", "params": [6, true, true, true]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
