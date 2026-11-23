---
title: getmempoolancestors
description: "If txid is in the mempool, returns all in-mempool ancestors. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getmempoolancestors "txid" ( verbose )
```

If txid is in the mempool, returns all in-mempool ancestors.

## Arguments

```text
1. txid       (string, required) The transaction id (must be in mempool)
2. verbose    (boolean, optional, default=false) True for a json object, false for array of transaction ids
```

## Results

### For verbose = false

```text
[           (json array)
  "hex",    (string) The transaction id of an in-mempool ancestor transaction
  ...
]
```

### For verbose = true

```text
{                                         (json object)
  "transactionid" : {                     (json object)
    "vsize" : n,                          (numeric) virtual transaction size as defined in BIP 141. This is different from actual serialized size for witness transactions as witness data is discounted.
    "weight" : n,                         (numeric) transaction weight as defined in BIP 141.
    "time" : xxx,                         (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT
    "height" : n,                         (numeric) block height when transaction entered pool
    "descendantcount" : n,                (numeric) number of in-mempool descendant transactions (including this one)
    "descendantsize" : n,                 (numeric) virtual transaction size of in-mempool descendants (including this one)
    "ancestorcount" : n,                  (numeric) number of in-mempool ancestor transactions (including this one)
    "ancestorsize" : n,                   (numeric) virtual transaction size of in-mempool ancestors (including this one)
    "chunkweight" : n,                    (numeric) sigops-adjusted weight (as defined in BIP 141 and modified by '-bytespersigop') of this transaction's chunk
    "wtxid" : "hex",                      (string) hash of serialized transaction, including witness data
    "fees" : {                            (json object)
      "base" : n,                         (numeric) transaction fee, denominated in DMD
      "modified" : n,                     (numeric) transaction fee with fee deltas used for mining priority, denominated in DMD
      "ancestor" : n,                     (numeric) transaction fees of in-mempool ancestors (including this one) with fee deltas used for mining priority, denominated in DMD
      "descendant" : n,                   (numeric) transaction fees of in-mempool descendants (including this one) with fee deltas used for mining priority, denominated in DMD
      "chunk" : n                         (numeric) transaction fees of chunk, denominated in DMD
    },
    "depends" : [                         (json array) unconfirmed transactions used as inputs for this transaction
      "hex",                              (string) parent transaction id
      ...
    ],
    "spentby" : [                         (json array) unconfirmed transactions spending outputs from this transaction
      "hex",                              (string) child transaction id
      ...
    ],
    "bip125-replaceable" : true|false,    (boolean) Whether this transaction signals BIP125 replaceability or has an unconfirmed ancestor signaling BIP125 replaceability. (DEPRECATED)

    "unbroadcast" : true|false            (boolean) Whether this transaction is currently unbroadcast (initial broadcast not yet acknowledged by any peers)
  },
  ...
}
```

## Examples

```sh
debitmydata-cli getmempoolancestors "mytxid"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getmempoolancestors", "params": ["mytxid"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
