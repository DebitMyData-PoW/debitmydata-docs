---
title: submitheader
description: "Decode the given hexdata as a header and submit it as a candidate chain tip if valid. DebitMyData Core RPC command."
coin: true
---

[Mining](/rpc/#mining) command of DebitMyData Core 1.3.5.

```text
submitheader "hexdata"
```

Decode the given hexdata as a header and submit it as a candidate chain tip if valid.\
Throws when the header is invalid.

## Arguments

```text
1. hexdata    (string, required) the hex-encoded block header data
```

## Result

```text
null    (json null) None
```

## Examples

```sh
debitmydata-cli submitheader "aabbcc"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "submitheader", "params": ["aabbcc"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
