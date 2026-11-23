---
title: restorewallet
description: "Restores and loads a wallet from backup. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
restorewallet "wallet_name" "backup_file" ( load_on_startup )
```

Restores and loads a wallet from backup.

The rescan is significantly faster if block filters are available (using startup option "-blockfilterindex=1").

## Arguments

```text
1. wallet_name        (string, required) The name that will be applied to the restored wallet
2. backup_file        (string, required) The backup file that will be used to restore the wallet.
3. load_on_startup    (boolean, optional) Save wallet name to persistent settings and load on startup. True to add wallet to startup list, false to remove, null to leave unchanged.
```

## Result

```text
{                    (json object)
  "name" : "str",    (string) The wallet name if restored successfully.
  "warnings" : [     (json array, optional) Warning messages, if any, related to restoring and loading the wallet.
    "str",           (string)
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli restorewallet "testwallet" "home\backups\backup-file.bak"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "restorewallet", "params": ["testwallet" "home\backups\backup-file.bak"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
debitmydata-cli -named restorewallet wallet_name=testwallet backup_file='home\backups\backup-file.bak"' load_on_startup=true
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "restorewallet", "params": {"wallet_name":"testwallet","backup_file":"home\\backups\\backup-file.bak\"","load_on_startup":true}}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
