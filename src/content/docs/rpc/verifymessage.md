---
title: verifymessage
description: "Verify a signed message. DebitMyData Core RPC command."
coin: true
---

[Utility](/rpc/#utility) command of DebitMyData Core 1.3.5.

```text
verifymessage "address" "signature" "message"
```

Verify a signed message.

## Arguments

```text
1. address      (string, required) The debitmydata address to use for the signature.
2. signature    (string, required) The signature provided by the signer in base 64 encoding (see signmessage).
3. message      (string, required) The message that was signed.
```

## Result

```text
true|false    (boolean) If the signature is verified or not.
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
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "verifymessage", "params": ["1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX", "signature", "my message"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
