---
title: getmempoolinfo
description: "Returns details on the active state of the TX memory pool. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getmempoolinfo
```

Returns details on the active state of the TX memory pool.

## Result

```text
{                                       (json object)
  "loaded" : true|false,                (boolean) True if the initial load attempt of the persisted mempool finished
  "size" : n,                           (numeric) Current tx count
  "bytes" : n,                          (numeric) Sum of all virtual transaction sizes as defined in BIP 141. Differs from actual serialized size because witness data is discounted
  "usage" : n,                          (numeric) Total memory usage for the mempool
  "total_fee" : n,                      (numeric) Total fees for the mempool in DMD, ignoring modified fees through prioritisetransaction
  "maxmempool" : n,                     (numeric) Maximum memory usage for the mempool
  "mempoolminfee" : n,                  (numeric) Minimum fee rate in DMD/kvB for tx to be accepted. Is the maximum of minrelaytxfee and minimum mempool fee
  "minrelaytxfee" : n,                  (numeric) Current minimum relay fee for transactions
  "incrementalrelayfee" : n,            (numeric) minimum fee rate increment for mempool limiting or replacement in DMD/kvB
  "unbroadcastcount" : n,               (numeric) Current number of transactions that haven't passed initial broadcast yet
  "fullrbf" : true|false,               (boolean) True if the mempool accepts RBF without replaceability signaling inspection (DEPRECATED)
  "permitbaremultisig" : true|false,    (boolean) True if the mempool accepts transactions with bare multisig outputs
  "maxdatacarriersize" : n,             (numeric) Maximum number of bytes that can be used by OP_RETURN outputs in the mempool
  "limitclustercount" : n,              (numeric) Maximum number of transactions that can be in a cluster (configured by -limitclustercount)
  "limitclustersize" : n,               (numeric) Maximum size of a cluster in virtual bytes (configured by -limitclustersize)
  "optimal" : true|false                (boolean) If the mempool is in a known-optimal transaction ordering
}
```

## Examples

```sh
debitmydata-cli getmempoolinfo
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getmempoolinfo", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
