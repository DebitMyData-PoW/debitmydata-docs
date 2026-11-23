---
title: backupwallet
description: "Safely copies the current wallet file to the specified destination, which can either be a directory or a path with a filename. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
backupwallet "destination"
```

Safely copies the current wallet file to the specified destination, which can either be a directory or a path with a filename.

## Arguments

```text
1. destination    (string, required) The destination directory or file
```

## Result

```text
null    (json null)
```

## Examples

```sh
debitmydata-cli backupwallet "backup.dat"
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "backupwallet", "params": ["backup.dat"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
