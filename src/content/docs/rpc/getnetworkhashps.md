---
title: getnetworkhashps
description: "Returns the estimated network hashes per second based on the last n blocks. DebitMyData Core RPC command."
coin: true
---

[Mining](/rpc/#mining) command of DebitMyData Core 1.3.5.

```text
getnetworkhashps ( nblocks height )
```

Returns the estimated network hashes per second based on the last n blocks.\
Pass in \[blocks\] to override # of blocks, -1 specifies since last difficulty change.\
Pass in \[height\] to estimate the network speed at the time when a certain block was found.

## Arguments

```text
1. nblocks    (numeric, optional, default=120) The number of previous blocks to calculate estimate from, or -1 for blocks since last difficulty change.
2. height     (numeric, optional, default=-1) To estimate at the time of the given height.
```

## Result

```text
n    (numeric) Hashes per second estimated
```

## Examples

```sh
debitmydata-cli getnetworkhashps
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getnetworkhashps", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
