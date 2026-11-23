---
title: verifychain
description: "Verifies blockchain database. DebitMyData Core RPC command."
coin: true
---

[Blockchain](/rpc/#blockchain) command of DebitMyData Core 1.3.5.

```text
verifychain ( checklevel nblocks )
```

Verifies blockchain database.

## Arguments

```text
1. checklevel    (numeric, optional, default=3, range=0-4) How thorough the block verification is:
                 - level 0 reads the blocks from disk
                 - level 1 verifies block validity
                 - level 2 verifies undo data
                 - level 3 checks disconnection of tip blocks
                 - level 4 tries to reconnect the blocks
                 - each level includes the checks of the previous levels
2. nblocks       (numeric, optional, default=6, 0=all) The number of blocks to check.
```

## Result

```text
true|false    (boolean) Verification finished successfully. If false, check debug.log for reason.
```

## Examples

```sh
debitmydata-cli verifychain
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "verifychain", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
