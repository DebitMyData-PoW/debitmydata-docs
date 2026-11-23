---
title: RPC reference
description: Every command of DebitMyData Core's RPC interface (debitmydatad, debitmydata-qt and debitmydata-cli), by group, with its arguments, results and examples.
coin: true
sidebar:
  label: All commands
---

DebitMyData Core takes commands through its **RPC interface** (JSON-RPC over HTTP): the node
(`debitmydatad`), or the wallet app (`debitmydata-qt`) started with `server=1`, answers them, and
`debitmydata-cli` sends them. This reference lists every command with its arguments, its result
and examples. Each page shows the same text as the node's own `help <command>`.

To read the chain's public figures without running a node (supply, hashrate, difficulty, the
rich list), use the [coin data API](/api/coin-data/) instead.

## Sending a command

On the computer running the node, `debitmydata-cli` signs in by itself, with the `.cookie` file
in the data folder (see [Run a node](/coin/node/)):

```sh
debitmydata-cli getblockcount
debitmydata-cli getblock 00000000000008bbfc334e8e443c16b4e9356452d7c363a7605a0f7d9f695a01
debitmydata-cli help getblock
```

Programs send the same commands as JSON-RPC requests to port **18557** on the same computer.
Give them their own user with an `rpcauth=` line in `debitmydata.conf` (made by `share/rpcauth`
in the DebitMyData Core source), never the cookie's contents:

```sh
curl --user myusername --data-binary '{"jsonrpc": "2.0", "id": "docs", "method": "getblockcount", "params": []}' \
  -H 'content-type: application/json' http://127.0.0.1:18557/
```

:::danger[Keep port 18557 closed]
The RPC port controls the node and its wallets. Keep it bound to `127.0.0.1` and closed in the
firewall. A program on another server reaches it through an SSH tunnel or a VPN, never across
the internet.
:::

Good to know:

- **Arguments by name.** `debitmydata-cli -named getblock blockhash=HASH verbosity=2` names the
  arguments instead of giving them in order.
- **Wallets.** With more than one wallet loaded, wallet commands need the wallet's name:
  `debitmydata-cli -rpcwallet=NAME getbalance`, or the address `http://127.0.0.1:18557/wallet/NAME`
  for JSON-RPC.
- **Amounts** are in DMD, with 8 decimals. Fee rates are in DMD/kvB or in data/vB. Where a
  command's help still says *satoshis*, read **data** (1/100,000,000 DMD).
- **Two commands are DebitMyData's own**: [`getdifficultyalgorithm`](/rpc/getdifficultyalgorithm/)
  and [`abandonforkedtransactions`](/rpc/abandonforkedtransactions/). The others work as in
  Bitcoin Core, which DebitMyData Core is built from.
- Commands kept for testing and development, which `help` doesn't list, aren't listed here either.

<!-- rpc-commands:start -->

DebitMyData Core 1.3.5 has 153 commands, in 9 groups. This list and the pages it leads to come from the node's own help.

## Blockchain

| Command | What it does |
| --- | --- |
| [`dumptxoutset`](/rpc/dumptxoutset/) | Write the serialized UTXO set to a file. |
| [`getbestblockhash`](/rpc/getbestblockhash/) | Returns the hash of the best (tip) block in the most-work fully-validated chain. |
| [`getblock`](/rpc/getblock/) | If verbosity is 0, returns a string that is serialized, hex-encoded data for block 'hash'. |
| [`getblockchaininfo`](/rpc/getblockchaininfo/) | Returns an object containing various state info regarding blockchain processing. |
| [`getblockcount`](/rpc/getblockcount/) | Returns the height of the most-work fully-validated chain. |
| [`getblockfilter`](/rpc/getblockfilter/) | Retrieve a BIP 157 content filter for a particular block. |
| [`getblockfrompeer`](/rpc/getblockfrompeer/) | Attempt to fetch block from a given peer. |
| [`getblockhash`](/rpc/getblockhash/) | Returns hash of block in best-block-chain at height provided. |
| [`getblockheader`](/rpc/getblockheader/) | If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'. |
| [`getblockstats`](/rpc/getblockstats/) | Compute per block statistics for a given window. |
| [`getchainstates`](/rpc/getchainstates/) | Return information about chainstates. |
| [`getchaintips`](/rpc/getchaintips/) | Return information about all known tips in the block tree, including the main chain as well as orphaned branches. |
| [`getchaintxstats`](/rpc/getchaintxstats/) | Compute statistics about the total number and rate of transactions in the chain. |
| [`getdeploymentinfo`](/rpc/getdeploymentinfo/) | Returns an object containing various state info regarding deployments of consensus changes. |
| [`getdescriptoractivity`](/rpc/getdescriptoractivity/) | Get spend and receive activity associated with a set of descriptors for a set of blocks. |
| [`getdifficulty`](/rpc/getdifficulty/) | Returns the proof-of-work difficulty as a multiple of the minimum difficulty. |
| [`getdifficultyalgorithm`](/rpc/getdifficultyalgorithm/) | Returns the current difficulty adjustment algorithm used to calculate the next block difficulty. **(DebitMyData only)** |
| [`getmempoolancestors`](/rpc/getmempoolancestors/) | If txid is in the mempool, returns all in-mempool ancestors. |
| [`getmempoolcluster`](/rpc/getmempoolcluster/) | Returns mempool data for given cluster |
| [`getmempooldescendants`](/rpc/getmempooldescendants/) | If txid is in the mempool, returns all in-mempool descendants. |
| [`getmempoolentry`](/rpc/getmempoolentry/) | Returns mempool data for given transaction |
| [`getmempoolinfo`](/rpc/getmempoolinfo/) | Returns details on the active state of the TX memory pool. |
| [`getrawmempool`](/rpc/getrawmempool/) | Returns all transaction ids in memory pool as a json array of string transaction ids. |
| [`gettxout`](/rpc/gettxout/) | Returns details about an unspent transaction output. |
| [`gettxoutproof`](/rpc/gettxoutproof/) | Returns a hex-encoded proof that "txid" was included in a block. |
| [`gettxoutsetinfo`](/rpc/gettxoutsetinfo/) | Returns statistics about the unspent transaction output set. |
| [`gettxspendingprevout`](/rpc/gettxspendingprevout/) | Scans the mempool (and the txospenderindex, if available) to find transactions spending any of the given outputs |
| [`importmempool`](/rpc/importmempool/) | Import a mempool.dat file and attempt to add its contents to the mempool. |
| [`loadtxoutset`](/rpc/loadtxoutset/) | Load the serialized UTXO set from a file. |
| [`preciousblock`](/rpc/preciousblock/) | Treats a block as if it were received before others with the same work. |
| [`pruneblockchain`](/rpc/pruneblockchain/) | Attempts to delete block and undo data up to a specified height or timestamp, if eligible for pruning. |
| [`savemempool`](/rpc/savemempool/) | Dumps the mempool to disk. |
| [`scanblocks`](/rpc/scanblocks/) | Return relevant blockhashes for given descriptors (requires blockfilterindex). |
| [`scantxoutset`](/rpc/scantxoutset/) | Scans the unspent transaction output set for entries that match certain output descriptors. |
| [`verifychain`](/rpc/verifychain/) | Verifies blockchain database. |
| [`verifytxoutproof`](/rpc/verifytxoutproof/) | Verifies that a proof points to a transaction in a block, returning the transaction it commits to and throwing an RPC error if the block is not in our best chain |
| [`waitforblock`](/rpc/waitforblock/) | Waits for a specific new block and returns useful info about it. |
| [`waitforblockheight`](/rpc/waitforblockheight/) | Waits for (at least) block height and returns the height and hash of the current tip. |
| [`waitfornewblock`](/rpc/waitfornewblock/) | Waits for any new block and returns useful info about it. |

## Control

| Command | What it does |
| --- | --- |
| [`getmemoryinfo`](/rpc/getmemoryinfo/) | Returns an object containing information about memory usage. |
| [`getrpcinfo`](/rpc/getrpcinfo/) | Returns details of the RPC server. |
| [`help`](/rpc/help/) | List all commands, or get help for a specified command. |
| [`logging`](/rpc/logging/) | Gets and sets the logging configuration. |
| [`stop`](/rpc/stop/) | Request a graceful shutdown of DebitMyData PoW. |
| [`uptime`](/rpc/uptime/) | Returns the total uptime of the server. |

## Mining

| Command | What it does |
| --- | --- |
| [`getblocktemplate`](/rpc/getblocktemplate/) | If the request parameters include a 'mode' key, that is used to explicitly select between the default 'template' request or a 'proposal'. |
| [`getmininginfo`](/rpc/getmininginfo/) | Returns a json object containing mining-related information. |
| [`getnetworkhashps`](/rpc/getnetworkhashps/) | Returns the estimated network hashes per second based on the last n blocks. |
| [`getprioritisedtransactions`](/rpc/getprioritisedtransactions/) | Returns a map of all user-created (see prioritisetransaction) fee deltas by txid, and whether the tx is present in mempool. |
| [`prioritisetransaction`](/rpc/prioritisetransaction/) | Accepts the transaction into mined blocks at a higher (or lower) priority |
| [`submitblock`](/rpc/submitblock/) | Attempts to submit new block to network. |
| [`submitheader`](/rpc/submitheader/) | Decode the given hexdata as a header and submit it as a candidate chain tip if valid. |

## Network

| Command | What it does |
| --- | --- |
| [`addnode`](/rpc/addnode/) | Attempts to add or remove a node from the addnode list. |
| [`clearbanned`](/rpc/clearbanned/) | Clear all banned IPs. |
| [`disconnectnode`](/rpc/disconnectnode/) | Immediately disconnects from the specified peer node. |
| [`getaddednodeinfo`](/rpc/getaddednodeinfo/) | Returns information about the given added node, or all added nodes (note that onetry addnodes are not listed here) |
| [`getaddrmaninfo`](/rpc/getaddrmaninfo/) | Provides information about the node's address manager by returning the number of addresses in the \`new\` and \`tried\` tables and their sum for all networks. |
| [`getconnectioncount`](/rpc/getconnectioncount/) | Returns the number of connections to other nodes. |
| [`getnettotals`](/rpc/getnettotals/) | Returns information about network traffic, including bytes in, bytes out, and current system time. |
| [`getnetworkinfo`](/rpc/getnetworkinfo/) | Returns an object containing various state info regarding P2P networking. |
| [`getnodeaddresses`](/rpc/getnodeaddresses/) | Return known addresses, after filtering for quality and recency. |
| [`getpeerinfo`](/rpc/getpeerinfo/) | Returns data about each connected network peer as a json array of objects. |
| [`listbanned`](/rpc/listbanned/) | List all manually banned IPs/Subnets. |
| [`ping`](/rpc/ping/) | Requests that a ping be sent to all other nodes, to measure ping time. |
| [`setban`](/rpc/setban/) | Attempts to add or remove an IP/Subnet from the banned list. |
| [`setnetworkactive`](/rpc/setnetworkactive/) | Disable/enable all p2p network activity. |

## Raw transactions

| Command | What it does |
| --- | --- |
| [`abortprivatebroadcast`](/rpc/abortprivatebroadcast/) | Abort private broadcast attempts for a transaction currently being privately broadcast. |
| [`analyzepsbt`](/rpc/analyzepsbt/) | Analyzes and provides information about the current status of a PSBT and its inputs |
| [`combinepsbt`](/rpc/combinepsbt/) | Combine multiple partially signed DebitMyData transactions into one transaction. |
| [`combinerawtransaction`](/rpc/combinerawtransaction/) | Combine multiple partially signed transactions into one transaction. |
| [`converttopsbt`](/rpc/converttopsbt/) | Converts a network serialized transaction to a PSBT. |
| [`createpsbt`](/rpc/createpsbt/) | Creates a transaction in the Partially Signed Transaction format. |
| [`createrawtransaction`](/rpc/createrawtransaction/) | Create a transaction spending the given inputs and creating new outputs. |
| [`decodepsbt`](/rpc/decodepsbt/) | Return a JSON object representing the serialized, base64-encoded partially signed DebitMyData transaction. |
| [`decoderawtransaction`](/rpc/decoderawtransaction/) | Return a JSON object representing the serialized, hex-encoded transaction. |
| [`decodescript`](/rpc/decodescript/) | Decode a hex-encoded script. |
| [`descriptorprocesspsbt`](/rpc/descriptorprocesspsbt/) | Update all segwit inputs in a PSBT with information from output descriptors, the UTXO set or the mempool. |
| [`finalizepsbt`](/rpc/finalizepsbt/) | Finalize the inputs of a PSBT. |
| [`fundrawtransaction`](/rpc/fundrawtransaction/) | If the transaction has no inputs, they will be automatically selected to meet its out value. |
| [`getprivatebroadcastinfo`](/rpc/getprivatebroadcastinfo/) | Returns information about transactions that are currently being privately broadcast. |
| [`getrawtransaction`](/rpc/getrawtransaction/) | By default, this call only returns a transaction if it is in the mempool. |
| [`joinpsbts`](/rpc/joinpsbts/) | Joins multiple distinct PSBTs with different inputs and outputs into one PSBT with inputs and outputs from all of the PSBTs No input in any of the PSBTs can be in more than one of the PSBTs. |
| [`sendrawtransaction`](/rpc/sendrawtransaction/) | Submit a raw transaction (serialized, hex-encoded) to the network. |
| [`signrawtransactionwithkey`](/rpc/signrawtransactionwithkey/) | Sign inputs for raw transaction (serialized, hex-encoded). |
| [`submitpackage`](/rpc/submitpackage/) | Submit a package of raw transactions (serialized, hex-encoded) to local node. |
| [`testmempoolaccept`](/rpc/testmempoolaccept/) | Returns result of mempool acceptance tests indicating if raw transaction(s) (serialized, hex-encoded) would be accepted by mempool. |
| [`utxoupdatepsbt`](/rpc/utxoupdatepsbt/) | Updates all segwit inputs and outputs in a PSBT with data from output descriptors, the UTXO set, txindex, or the mempool. |

## Signer

| Command | What it does |
| --- | --- |
| [`enumeratesigners`](/rpc/enumeratesigners/) | Returns a list of external signers from -signer. |

## Utility

| Command | What it does |
| --- | --- |
| [`createmultisig`](/rpc/createmultisig/) | Creates a multi-signature address with n signatures of m keys required. |
| [`deriveaddresses`](/rpc/deriveaddresses/) | Derives one or more addresses corresponding to an output descriptor. |
| [`estimatesmartfee`](/rpc/estimatesmartfee/) | Estimates the approximate fee per kilobyte needed for a transaction to begin confirmation within conf\_target blocks if possible and return the number of blocks for which the estimate is valid. |
| [`getdescriptorinfo`](/rpc/getdescriptorinfo/) | Analyses a descriptor. |
| [`getindexinfo`](/rpc/getindexinfo/) | Returns the status of one or all available indices currently running in the node. |
| [`signmessagewithprivkey`](/rpc/signmessagewithprivkey/) | Sign a message with the private key of an address |
| [`validateaddress`](/rpc/validateaddress/) | Return information about the given debitmydata address. |
| [`verifymessage`](/rpc/verifymessage/) | Verify a signed message. |

## Wallet

| Command | What it does |
| --- | --- |
| [`abandonforkedtransactions`](/rpc/abandonforkedtransactions/) | Mark unconfirmed, mempool-absent in-wallet transactions as abandoned if they are no longer valid against the current chain (e.g. **(DebitMyData only)** |
| [`abandontransaction`](/rpc/abandontransaction/) | Mark in-wallet transaction &lt;txid&gt; as abandoned This will mark this transaction and all its in-wallet descendants as abandoned which will allow for their inputs to be respent. |
| [`abortrescan`](/rpc/abortrescan/) | Stops current wallet rescan triggered by an RPC call, e.g. |
| [`backupwallet`](/rpc/backupwallet/) | Safely copies the current wallet file to the specified destination, which can either be a directory or a path with a filename. |
| [`bumpfee`](/rpc/bumpfee/) | Bumps the fee of a transaction T, replacing it with a new transaction B. |
| [`createwallet`](/rpc/createwallet/) | Creates and loads a new wallet. |
| [`createwalletdescriptor`](/rpc/createwalletdescriptor/) | Creates the wallet's descriptor for the given address type. |
| [`encryptwallet`](/rpc/encryptwallet/) | Encrypts the wallet with 'passphrase'. |
| [`getaddressesbylabel`](/rpc/getaddressesbylabel/) | Returns the list of addresses assigned the specified label. |
| [`getaddressinfo`](/rpc/getaddressinfo/) | Return information about the given debitmydata address. |
| [`getbalance`](/rpc/getbalance/) | Returns the total available balance. |
| [`getbalances`](/rpc/getbalances/) | Returns an object with all balances in DMD. |
| [`gethdkeys`](/rpc/gethdkeys/) | List all BIP 32 HD keys in the wallet and which descriptors use them. |
| [`getnewaddress`](/rpc/getnewaddress/) | Returns a new DebitMyData address for receiving payments. |
| [`getrawchangeaddress`](/rpc/getrawchangeaddress/) | Returns a new DebitMyData address, for receiving change. |
| [`getreceivedbyaddress`](/rpc/getreceivedbyaddress/) | Returns the total amount received by the given address in transactions with at least minconf confirmations. |
| [`getreceivedbylabel`](/rpc/getreceivedbylabel/) | Returns the total amount received by addresses with &lt;label&gt; in transactions with at least \[minconf\] confirmations. |
| [`gettransaction`](/rpc/gettransaction/) | Get detailed information about in-wallet transaction &lt;txid&gt; |
| [`getwalletinfo`](/rpc/getwalletinfo/) | Returns an object containing various wallet state info. |
| [`importdescriptors`](/rpc/importdescriptors/) | Import descriptors. |
| [`importprunedfunds`](/rpc/importprunedfunds/) | Imports funds without rescan. |
| [`keypoolrefill`](/rpc/keypoolrefill/) | Refills each descriptor keypool in the wallet up to the specified number of new keys. |
| [`listaddressgroupings`](/rpc/listaddressgroupings/) | Lists groups of addresses which have had their common ownership made public by common use as inputs or as the resulting change in past transactions |
| [`listdescriptors`](/rpc/listdescriptors/) | List all descriptors present in a wallet. |
| [`listlabels`](/rpc/listlabels/) | Returns the list of all labels, or labels that are assigned to addresses with a specific purpose. |
| [`listlockunspent`](/rpc/listlockunspent/) | Returns list of temporarily unspendable outputs. |
| [`listreceivedbyaddress`](/rpc/listreceivedbyaddress/) | List balances by receiving address. |
| [`listreceivedbylabel`](/rpc/listreceivedbylabel/) | List received transactions by label. |
| [`listsinceblock`](/rpc/listsinceblock/) | Get all transactions in blocks since block \[blockhash\], or all transactions if omitted. |
| [`listtransactions`](/rpc/listtransactions/) | If a label name is provided, this will return only incoming transactions paying to addresses with the specified label. |
| [`listunspent`](/rpc/listunspent/) | Returns array of unspent transaction outputs with between minconf and maxconf (inclusive) confirmations. |
| [`listwalletdir`](/rpc/listwalletdir/) | Returns a list of wallets in the wallet directory. |
| [`listwallets`](/rpc/listwallets/) | Returns a list of currently loaded wallets. |
| [`loadwallet`](/rpc/loadwallet/) | Loads a wallet from a wallet file or directory. |
| [`lockunspent`](/rpc/lockunspent/) | Updates list of temporarily unspendable outputs. |
| [`migratewallet`](/rpc/migratewallet/) | Migrate the wallet to a descriptor wallet. |
| [`psbtbumpfee`](/rpc/psbtbumpfee/) | Bumps the fee of a transaction T, replacing it with a new transaction B. |
| [`removeprunedfunds`](/rpc/removeprunedfunds/) | Deletes the specified transaction from the wallet. |
| [`rescanblockchain`](/rpc/rescanblockchain/) | Rescan the local blockchain for wallet related transactions. |
| [`restorewallet`](/rpc/restorewallet/) | Restores and loads a wallet from backup. |
| [`send`](/rpc/send/) | EXPERIMENTAL warning. |
| [`sendall`](/rpc/sendall/) | EXPERIMENTAL warning. |
| [`sendmany`](/rpc/sendmany/) | Send multiple times. |
| [`sendtoaddress`](/rpc/sendtoaddress/) | Send an amount to a given address. |
| [`setlabel`](/rpc/setlabel/) | Sets the label associated with the given address. |
| [`setwalletflag`](/rpc/setwalletflag/) | Change the state of the given wallet flag for a wallet. |
| [`signmessage`](/rpc/signmessage/) | Sign a message with the private key of an address Requires wallet passphrase to be set with walletpassphrase call if wallet is encrypted. |
| [`signrawtransactionwithwallet`](/rpc/signrawtransactionwithwallet/) | Sign inputs for raw transaction (serialized, hex-encoded). |
| [`simulaterawtransaction`](/rpc/simulaterawtransaction/) | Calculate the balance change resulting in the signing and broadcasting of the given transaction(s). |
| [`unloadwallet`](/rpc/unloadwallet/) | Unloads the wallet referenced by the request endpoint or the wallet\_name argument. |
| [`walletcreatefundedpsbt`](/rpc/walletcreatefundedpsbt/) | Creates and funds a transaction in the Partially Signed Transaction format. |
| [`walletdisplayaddress`](/rpc/walletdisplayaddress/) | Display address on an external signer for verification. |
| [`walletlock`](/rpc/walletlock/) | Removes the wallet encryption key from memory, locking the wallet. |
| [`walletpassphrase`](/rpc/walletpassphrase/) | Stores the wallet decryption key in memory for 'timeout' seconds. |
| [`walletpassphrasechange`](/rpc/walletpassphrasechange/) | Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'. |
| [`walletprocesspsbt`](/rpc/walletprocesspsbt/) | Update a PSBT with input information from our wallet and then sign inputs that we can sign for. |

## ZMQ

| Command | What it does |
| --- | --- |
| [`getzmqnotifications`](/rpc/getzmqnotifications/) | Returns information about the active ZeroMQ notifications. |

<!-- rpc-commands:end -->
