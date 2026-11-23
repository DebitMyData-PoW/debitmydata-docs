---
title: signmessagewithprivkey
description: "Sign a message with the private key of an address DebitMyData Core RPC command."
coin: true
---

[Utility](/rpc/#utility) command of DebitMyData Core 1.3.5.

```text
signmessagewithprivkey "privkey" "message"
```

Sign a message with the private key of an address

## Arguments

```text
1. privkey    (string, required) The private key to sign the message with.
2. message    (string, required) The message to create a signature of.
```

## Result

```text
"str"    (string) The signature of the message encoded in base 64
```

## Examples

Create the signature

```sh
debitmydata-cli signmessagewithprivkey "privkey" "my message"
```

Verify the signature

```sh
debitmydata-cli verifymessage "1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX" "signature" "my message"
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "signmessagewithprivkey", "params": ["privkey", "my message"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
