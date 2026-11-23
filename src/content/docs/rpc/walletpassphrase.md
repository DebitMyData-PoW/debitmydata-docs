---
title: walletpassphrase
description: "Stores the wallet decryption key in memory for 'timeout' seconds. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
walletpassphrase "passphrase" timeout
```

Stores the wallet decryption key in memory for 'timeout' seconds.\
This is needed prior to performing transactions related to private keys such as sending debitmydatas

Note:\
Issuing the walletpassphrase command while the wallet is already unlocked will set a new unlock time that overrides the old one.

## Arguments

```text
1. passphrase    (string, required) The wallet passphrase
2. timeout       (numeric, required) The time to keep the decryption key in seconds; capped at 100000000 (~3 years).
```

## Result

```text
null    (json null)
```

## Examples

Unlock the wallet for 60 seconds

```sh
debitmydata-cli walletpassphrase "my pass phrase" 60
```

Lock the wallet again (before 60 seconds)

```sh
debitmydata-cli walletlock
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "walletpassphrase", "params": ["my pass phrase", 60]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
