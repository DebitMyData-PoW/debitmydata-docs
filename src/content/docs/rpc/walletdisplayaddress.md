---
title: walletdisplayaddress
description: "Display address on an external signer for verification. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
walletdisplayaddress "address"
```

Display address on an external signer for verification.

## Arguments

```text
1. address    (string, required) debitmydata address to display
```

## Result

```text
{                       (json object)
  "address" : "str"     (string) The address as confirmed by the signer
}
```
