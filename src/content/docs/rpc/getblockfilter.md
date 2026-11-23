---
title: getblockfilter
description: "Retrieve a BIP 157 content filter for a particular block. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getblockfilter "blockhash" ( "filtertype" )
```

Retrieve a BIP 157 content filter for a particular block.

## Arguments

```text
1. blockhash     (string, required) The hash of the block
2. filtertype    (string, optional, default="basic") The type name of the filter
```

## Result

```text
{                      (json object)
  "filter" : "hex",    (string) the hex-encoded filter data
  "header" : "hex"     (string) the hex-encoded filter header
}
```

## Examples

```sh
debitmydata-cli getblockfilter "00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09" "basic"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getblockfilter", "params": ["00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09", "basic"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
