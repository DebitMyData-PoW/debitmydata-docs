---
title: abortprivatebroadcast
description: "Abort private broadcast attempts for a transaction currently being privately broadcast. DebitMyData Core RPC command."
coin: true
---

[Raw transactions](/rpc/#raw-transactions) command of DebitMyData Core 1.3.5.

```text
abortprivatebroadcast "id"
```

Abort private broadcast attempts for a transaction currently being privately broadcast.\
The transaction will be removed from the private broadcast queue.

## Arguments

```text
1. id    (string, required) A transaction identifier to abort. It will be matched against both txid and wtxid for all transactions in the private broadcast queue.
         If the provided id matches a txid that corresponds to multiple transactions with different wtxids, multiple transactions will be removed and returned.
```

## Result

```text
{                               (json object)
  "removed_transactions" : [    (json array) Transactions removed from the private broadcast queue
    {                           (json object)
      "txid" : "hex",           (string) The transaction hash in hex
      "wtxid" : "hex",          (string) The transaction witness hash in hex
      "hex" : "hex"             (string) The serialized, hex-encoded transaction data
    },
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli abortprivatebroadcast "id"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "abortprivatebroadcast", "params": ["id"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
