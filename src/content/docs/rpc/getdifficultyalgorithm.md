---
title: getdifficultyalgorithm
description: "Returns the current difficulty adjustment algorithm used to calculate the next block difficulty. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
getdifficultyalgorithm
```

Returns the current difficulty adjustment algorithm used to calculate the next block difficulty.

:::note[DebitMyData only]
DebitMyData Core has this command and Bitcoin Core doesn't. It names the difficulty
algorithm that sets the next block's difficulty. DebitMyData adjusts the difficulty at every
block with LWMA (a linearly weighted moving average of the last 60 blocks) since block 120, so
on the main network it answers `LwmaCalculateNextWorkRequired`. Before block 120 it answered
`CalculateNextWorkRequired`, Bitcoin's adjustment. An answer starting with
`Unknown Algorithm` means the node's two calculations disagree: tell the DebitMyData team.
:::

## Result

```text
{                                 (json object)
  "current_algorithm" : "str"     (string) The active difficulty algorithm
}
```

## Examples

```sh
debitmydata-cli getdifficultyalgorithm
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "getdifficultyalgorithm", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
