---
title: abortrescan
description: "Stops current wallet rescan triggered by an RPC call, e.g. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
abortrescan
```

Stops current wallet rescan triggered by an RPC call, e.g. by a rescanblockchain call.\
Note: Use "getwalletinfo" to query the scanning progress.

## Result

```text
true|false    (boolean) Whether the abort was successful
```

## Examples

Import a private key

```sh
debitmydata-cli rescanblockchain
```

Abort the running wallet rescan

```sh
debitmydata-cli abortrescan
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "abortrescan", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
