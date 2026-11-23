---
title: encryptwallet
description: "Encrypts the wallet with 'passphrase'. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
encryptwallet "passphrase"
```

Encrypts the wallet with 'passphrase'. This is for first time encryption.\
After this, any calls that interact with private keys such as sending or signing will require the passphrase to be set prior to making these calls.\
Use the walletpassphrase call for this, and then walletlock call.\
If the wallet is already encrypted, use the walletpassphrasechange call.\
\*\* IMPORTANT \*\* For security reasons, the encryption process will generate a new HD seed, resulting in the creation of a fresh set of active descriptors. Therefore, it is crucial to securely back up the newly generated wallet file using the backupwallet RPC.

## Arguments

```text
1. passphrase    (string, required) The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.
```

## Result

```text
"str"    (string) A string with further instructions
```

## Examples

Encrypt your wallet

```sh
debitmydata-cli encryptwallet "my pass phrase"
```

Now set the passphrase to use the wallet, such as for signing or sending debitmydata

```sh
debitmydata-cli walletpassphrase "my pass phrase"
```

Now we can do something like sign

```sh
debitmydata-cli signmessage "address" "test message"
```

Now lock the wallet again by removing the passphrase

```sh
debitmydata-cli walletlock
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "encryptwallet", "params": ["my pass phrase"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
