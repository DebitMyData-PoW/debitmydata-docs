---
title: walletpassphrasechange
description: "Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
walletpassphrasechange "oldpassphrase" "newpassphrase"
```

Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'.

## Arguments

```text
1. oldpassphrase    (string, required) The current passphrase
2. newpassphrase    (string, required) The new passphrase
```

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli walletpassphrasechange "old one" "new one"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "walletpassphrasechange", "params": ["old one", "new one"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
