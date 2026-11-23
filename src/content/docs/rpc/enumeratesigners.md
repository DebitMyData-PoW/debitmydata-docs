---
title: enumeratesigners
description: "Returns a list of external signers from -signer. DebitMyData Core RPC command."
coin: true
---

[Signer](/rpc/#signer) command of DebitMyData Core 1.3.5.

```text
enumeratesigners
```

Returns a list of external signers from -signer.

## Result

```text
{                               (json object)
  "signers" : [                 (json array)
    {                           (json object)
      "fingerprint" : "hex",    (string) Master key fingerprint
      "name" : "str"            (string) Device name
    },
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli enumeratesigners
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "enumeratesigners", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
