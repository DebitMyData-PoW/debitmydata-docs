---
title: loadwallet
description: "Loads a wallet from a wallet file or directory. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
loadwallet "filename" ( load_on_startup )
```

Loads a wallet from a wallet file or directory.\
Note that all wallet command-line options used when starting debitmydatad will be applied to the new wallet.

## Arguments

```text
1. filename           (string, required) The path to the directory of the wallet to be loaded, either absolute or relative to the "wallets" directory. The "wallets" directory is set by the -walletdir option and defaults to the "wallets" folder within the data directory.
2. load_on_startup    (boolean, optional) Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged.
```

## Result

```text
{                    (json object)
  "name" : "str",    (string) The wallet name if loaded successfully.
  "warnings" : [     (json array, optional) Warning messages, if any, related to loading the wallet.
    "str",           (string)
    ...
  ]
}
```

## Examples

Load wallet from the wallet dir:

```sh
debitmydata-cli loadwallet "walletname"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "loadwallet", "params": ["walletname"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```

Load wallet using absolute path (Unix):

```sh
debitmydata-cli loadwallet "/path/to/walletname/"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "loadwallet", "params": ["/path/to/walletname/"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```

Load wallet using absolute path (Windows):

```sh
debitmydata-cli loadwallet "DriveLetter:\path\to\walletname\"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "loadwallet", "params": ["DriveLetter:\path\to\walletname\"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
