---
title: getmempoolcluster
description: "Returns mempool data for given cluster DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getmempoolcluster "txid"
```

Returns mempool data for given cluster

## Arguments

```text
1. txid    (string, required) The txid of a transaction in the cluster
```

## Result

```text
{                           (json object)
  "clusterweight" : n,      (numeric) total sigops-adjusted weight (as defined in BIP 141 and modified by '-bytespersigop')
  "txcount" : n,            (numeric) number of transactions
  "chunks" : [              (json array) chunks in this cluster (in mining order)
    {                       (json object)
      "chunkfee" : n,       (numeric) fees of the transactions in this chunk
      "chunkweight" : n,    (numeric) sigops-adjusted weight of all transactions in this chunk
      "txs" : [             (json array) transactions in this chunk in mining order
        "hex",              (string) transaction id
        ...
      ]
    },
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli getmempoolcluster txid
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getmempoolcluster", "params": [txid]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
