---
title: getblockfrompeer
description: "Attempt to fetch block from a given peer. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getblockfrompeer "blockhash" peer_id
```

Attempt to fetch block from a given peer.

We must have the header for this block, e.g. using submitheader.\
The block will not have any undo data which can limit the usage of the block data in a context where the undo data is needed.\
Subsequent calls for the same block may cause the response from the previous peer to be ignored.\
Peers generally ignore requests for a stale block that they never fully verified, or one that is more than a month old.\
When a peer does not respond with a block, we will disconnect.\
Note: The block could be re-pruned as soon as it is received.

Returns an empty JSON object if the request was successfully scheduled.

## Arguments

```text
1. blockhash    (string, required) The block hash to try to fetch
2. peer_id      (numeric, required) The peer to fetch it from (see getpeerinfo for peer IDs)
```

## Result

```text
{}    (empty JSON object)
```

## Examples

```sh
debitmydata-cli getblockfrompeer "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09" 0
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getblockfrompeer", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09" 0]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
