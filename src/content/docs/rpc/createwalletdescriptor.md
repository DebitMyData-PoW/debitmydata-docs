---
title: createwalletdescriptor
description: "Creates the wallet's descriptor for the given address type. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
createwalletdescriptor "type" ( {"internal":bool,"hdkey":"str",...} )
```

Creates the wallet's descriptor for the given address type. The address type must be one that the wallet does not already have a descriptor for.\
Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted.

## Arguments

```text
1. type       (string, required) The address type the descriptor will produce. Options are "legacy", "p2sh-segwit", "bech32", "bech32m".
2. options    (json object, optional) Options object that can be used to pass named arguments, listed below.
```

## Named Arguments

```text
internal    (boolean, optional, default=Both external and internal will be generated unless this parameter is specified) Whether to only make one descriptor that is internal (if parameter is true) or external (if parameter is false)
hdkey       (string, optional, default=The HD key used by all other active descriptors) The HD key that the wallet knows the private key of, listed using 'gethdkeys', to use for this descriptor's key
```

## Result

```text
{                (json object)
  "descs" : [    (json array) The public descriptors that were added to the wallet
    "str",       (string)
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli createwalletdescriptor bech32m
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "createwalletdescriptor", "params": [bech32m]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
