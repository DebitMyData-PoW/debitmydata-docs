---
title: getreceivedbyaddress
description: "Returns the total amount received by the given address in transactions with at least minconf confirmations. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
getreceivedbyaddress "address" ( minconf include_immature_coinbase )
```

Returns the total amount received by the given address in transactions with at least minconf confirmations.

## Arguments

```text
1. address                      (string, required) The debitmydata address for transactions.
2. minconf                      (numeric, optional, default=1) Only include transactions confirmed at least this many times.
3. include_immature_coinbase    (boolean, optional, default=false) Include immature coinbase transactions.
```

## Result

```text
n    (numeric) The total amount in DMD received at this address.
```

## Examples

The amount from transactions with at least 1 confirmation

```sh
debitmydata-cli getreceivedbyaddress "bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl"
```

The amount including unconfirmed transactions, zero confirmations

```sh
debitmydata-cli getreceivedbyaddress "bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl" 0
```

The amount with at least 6 confirmations

```sh
debitmydata-cli getreceivedbyaddress "bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl" 6
```

The amount with at least 6 confirmations including immature coinbase outputs

```sh
debitmydata-cli getreceivedbyaddress "bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl" 6 true
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getreceivedbyaddress", "params": ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", 6]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
