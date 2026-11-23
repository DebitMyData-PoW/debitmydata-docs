---
title: submitblock
description: "Attempts to submit new block to network. DebitMyData Core RPC command."
coin: true
---

[Mining](/rpc/#mining) command of DebitMyData Core 1.3.5.

```text
submitblock "hexdata" ( "dummy" )
```

Attempts to submit new block to network.\
See <https://en.bitcoin.it/wiki/BIP_0022> for full specification.

## Arguments

```text
1. hexdata    (string, required) the hex-encoded block data to submit
2. dummy      (string, optional, default=ignored) dummy value, for compatibility with BIP22. This value is ignored.
```

## Results

### If the block was accepted

```text
null    (json null)
```

### Otherwise

```text
"str"    (string) According to BIP22
```

## Examples

```sh
debitmydata-cli submitblock "mydata"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "submitblock", "params": ["mydata"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
