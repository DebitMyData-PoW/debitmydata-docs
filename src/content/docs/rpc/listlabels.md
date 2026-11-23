---
title: listlabels
description: "Returns the list of all labels, or labels that are assigned to addresses with a specific purpose. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
listlabels ( "purpose" )
```

Returns the list of all labels, or labels that are assigned to addresses with a specific purpose.

## Arguments

```text
1. purpose    (string, optional) Address purpose to list labels for ('send','receive'). An empty string is the same as not providing this argument.
```

## Result

```text
[           (json array)
  "str",    (string) Label name
  ...
]
```

## Examples

List all labels

```sh
debitmydata-cli listlabels
```

List labels that have receiving addresses

```sh
debitmydata-cli listlabels receive
```

List labels that have sending addresses

```sh
debitmydata-cli listlabels send
```

As a JSON-RPC call

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "listlabels", "params": [receive]}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
