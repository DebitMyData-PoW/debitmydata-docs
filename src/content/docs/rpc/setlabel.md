---
title: setlabel
description: "Sets the label associated with the given address. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
setlabel "address" "label"
```

Sets the label associated with the given address.

## Arguments

```text
1. address    (string, required) The debitmydata address to be associated with a label.
2. label      (string, required) The label to assign to the address.
```

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli setlabel "bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl" "tabby"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "setlabel", "params": ["bc1q09vm5lfy0j5reeulh4x5752q25uqqvz34hufdl", "tabby"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
