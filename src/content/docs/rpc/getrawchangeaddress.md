---
title: getrawchangeaddress
description: "Returns a new DebitMyData address, for receiving change. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
getrawchangeaddress ( "address_type" )
```

Returns a new DebitMyData address, for receiving change.\
This is for use with raw transactions, NOT normal use.

## Arguments

```text
1. address_type    (string, optional, default=set by -changetype) The address type to use. Options are "legacy", "p2sh-segwit", "bech32", "bech32m".
```

## Result

```text
"str"    (string) The address
```

## Examples

```sh
debitmydata-cli getrawchangeaddress
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getrawchangeaddress", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
