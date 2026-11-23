---
title: abandonforkedtransactions
description: "Mark unconfirmed, mempool-absent in-wallet transactions as abandoned if they are no longer valid against the current chain (e.g. DebitMyData Core RPC command."
coin: true
---

[Wallet](/rpc/#wallet) command of DebitMyData Core 1.3.5.

```text
abandonforkedtransactions
```

Mark unconfirmed, mempool-absent in-wallet transactions as abandoned if they are no longer valid against the current chain (e.g. their inputs no longer exist after a chain reorg). Intended for cleanup after this node has invalidated and rewound past a mandatory chain anchor, leaving wallet transactions stranded from an orphaned fork.\
Each eligible transaction is dry-run through mempool acceptance; only those rejected for missing or already-spent inputs are abandoned. Transactions that are still valid but simply not yet accepted (e.g. low fee) are left untouched.

:::note[DebitMyData only]
DebitMyData Core has this command and Bitcoin Core doesn't. It tidies a wallet after the
node has left a fork: transactions that can never confirm (their inputs no longer exist on
the chain) are marked abandoned, so the wallet stops counting them and stops sending them
again. Transactions that are still valid are left alone. It takes no arguments and needs a
loaded wallet.
:::

## Result

```text
{                    (json object)
  "abandoned" : [    (json array) Transaction ids that were marked abandoned
    "hex",           (string)
    ...
  ]
}
```

## Examples

```sh
debitmydata-cli abandonforkedtransactions
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "curltest", "method": "abandonforkedtransactions", "params": []}' -H 'content-type: application/json' http://127.0.0.1:18557/
```
