---
title: getprivatebroadcastinfo
description: "Returns information about transactions that are currently being privately broadcast. DebitMyData Core RPC command."
coin: true
---

[Raw transactions](/rpc/#raw-transactions) command of DebitMyData Core 1.3.5.

```text
getprivatebroadcastinfo
```

Returns information about transactions that are currently being privately broadcast.

## Result

```text
{                               (json object)
  "transactions" : [            (json array)
    {                           (json object)
      "txid" : "hex",           (string) The transaction hash in hex
      "wtxid" : "hex",          (string) The transaction witness hash in hex
      "hex" : "hex",            (string) The serialized, hex-encoded transaction data
      "peers" : [               (json array) Per-peer send and acknowledgment information for this transaction
        {                       (json object)
          "address" : "str",    (string) The address of the peer to which the transaction was sent
          "sent" : xxx,         (numeric) The time this transaction was picked for sending to this peer via private broadcast (seconds since epoch)
          "received" : xxx      (numeric, optional) The time this peer acknowledged reception of the transaction (seconds since epoch)
        },
        ...
      ]
    },
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli getprivatebroadcastinfo
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getprivatebroadcastinfo", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
