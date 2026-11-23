---
title: signmessage
description: "Sign a message with the private key of an address Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
signmessage "address" "message"
```

Sign a message with the private key of an address Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.

## Arguments

```text
1. address    (string, required) The debitmydata address to use for the private key.
2. message    (string, required) The message to create a signature of.
```

## Result

```text
"str"    (string) The signature of the message encoded in base 64
```

## Examples

Unlock the wallet for 30 seconds

```sh
debitmydata-cli walletpassphrase "mypassphrase" 30
```

Create the signature

```sh
debitmydata-cli signmessage "1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX" "my message"
```

Verify the signature

```sh
debitmydata-cli verifymessage "1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX" "signature" "my message"
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "signmessage", "params": ["1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX", "my message"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
