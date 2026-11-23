---
title: setwalletflag
description: "Change the state of the given wallet flag for a wallet. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
setwalletflag "flag" ( value )
```

Change the state of the given wallet flag for a wallet.

## Arguments

```text
1. flag     (string, required) The name of the flag to change. Current available flags: avoid_reuse
2. value    (boolean, optional, default=true) The new state.
```

## Result

```text
{                               (json object)
  "flag_name" : "str",          (string) The name of the flag that was modified
  "flag_state" : true|false,    (boolean) The new state of the flag
  "warnings" : "str"            (string, optional) Any warnings associated with the change
}
```

## Examples

```sh
debitmydata-cli setwalletflag avoid_reuse
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "setwalletflag", "params": ["avoid_reuse"]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
