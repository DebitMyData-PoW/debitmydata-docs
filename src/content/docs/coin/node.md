---
title: Run a node
description: Run DebitMyData Core on a computer or a server. Data folder, the debitmydata.conf settings file, ports, a Linux service and the debitmydata-cli commands you'll use most.
coin: true
---

A node keeps its own copy of the chain and checks every block and transaction itself. It
helps the network, and it is what wallets, explorers, pools and services build on.

## Install

Download DebitMyData Core from [Wallets](/coin/wallets/#debitmydata-core) and check its
SHA-256. The archive holds:

| Program | What it is |
| --- | --- |
| `debitmydata-qt` | The desktop wallet, with a window |
| `debitmydatad` | The node, without a window: for servers |
| `debitmydata-cli` | Sends commands to a running `debitmydatad` or `debitmydata-qt` |

On a Linux server, copy the node and its command tool to `/usr/local/bin`:

```sh
tar -xzf debitmydata-1.3.5-x86_64-linux-gnu.tar.gz
sudo install -m 0755 debitmydata-1.3.5-x86_64-linux-gnu/debitmydatad \
  debitmydata-1.3.5-x86_64-linux-gnu/debitmydata-cli /usr/local/bin/
```

Then start it, either for a quick try:

```sh
debitmydatad -daemon
debitmydata-cli getblockchaininfo
```

or, on a server, [as a service](#as-a-linux-service) that starts with the server.
`getblockchaininfo` shows `blocks` growing and `verificationprogress` going up to 1 while the
node catches up.

To build it yourself, see the
[source code](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core) and its `doc/` folder.

## Data folder

| System | Folder |
| --- | --- |
| Windows | `%LOCALAPPDATA%\DebitMyData` |
| Linux | `~/.debitmydata` |
| macOS | `~/Library/Application Support/DebitMyData` |

It holds the chain, the wallets (`wallets/`), the log (`debug.log`) and the settings file,
`debitmydata.conf`.

## Settings: debitmydata.conf

Create `debitmydata.conf` in the data folder. A good start for a server:

```ini
# Accept commands from debitmydata-cli on this computer only
server=1
rpcbind=127.0.0.1
rpcallowip=127.0.0.1

# Optional: look up any transaction by its ID (uses more disk)
txindex=1
```

`debitmydata-cli` signs in to the node on its own (with the `.cookie` file in the data
folder), so no RPC password is needed on the same computer.

:::danger[Never open the RPC port]
Port 18557 controls the node and its wallets. Keep it bound to `127.0.0.1` and closed in
your firewall.
:::

## Ports

| Port | Use | Open it? |
| --- | --- | --- |
| 18556 | P2P: other nodes connect here | Yes, to help the network (optional) |
| 18557 | RPC: commands to the node | **No**, this computer only |
| 18558 | Tor (onion) P2P | Only if you run the node over Tor |

## As a Linux service

So the node starts with the server and restarts if it stops. Make a user for it, then save
this as `/etc/systemd/system/debitmydatad.service`:

```ini
[Unit]
Description=DebitMyData node
After=network-online.target
Wants=network-online.target

[Service]
User=debitmydata
ExecStart=/usr/local/bin/debitmydatad
Restart=on-failure
TimeoutStopSec=600

[Install]
WantedBy=multi-user.target
```

```sh
sudo useradd --system --create-home debitmydata
sudo systemctl daemon-reload
sudo systemctl enable --now debitmydatad
sudo -u debitmydata -H debitmydata-cli getblockchaininfo
```

The service's data folder is `/home/debitmydata/.debitmydata`: its `debitmydata.conf` goes
there (without `daemon=1`, since the service keeps it running). Its log is in
`journalctl -u debitmydatad`, and `sudo systemctl stop debitmydatad` stops it cleanly.

## Commands

Run each one as `debitmydata-cli <command>`. `help` lists them all, and `help <command>`
explains one. The [RPC reference](/rpc/) has every command, with its arguments, results and
examples.

### The chain and the network

| Command | Shows |
| --- | --- |
| `getblockchaininfo` | Height, sync progress, difficulty, disk used |
| `getblockcount` | The current height |
| `getbestblockhash` | The hash of the newest block |
| `getblockhash <height>` | The hash of the block at that height |
| `getblock <hash>` | A block: its time, transactions and more |
| `getmininginfo` | Difficulty and the network's hashrate |
| `getnetworkhashps` | The network's hashrate, in hashes per second |
| `getnetworkinfo` | Version, connections, encrypted (v2) transport |
| `getpeerinfo` | The nodes you're connected to |
| `getmempoolinfo` | Transactions waiting for a block |
| `gettxoutsetinfo` | Every unspent coin: the DMD in existence |

### The wallet

| Command | Does |
| --- | --- |
| `createwallet "main"` | Makes a wallet named `main` |
| `listwallets` | Wallets that are loaded |
| `getnewaddress` | A new `dm1…` address to receive DMD |
| `getbalances` | Confirmed, pending and immature (mined, under 250 blocks) DMD |
| `listtransactions` | The latest transactions |
| `sendtoaddress <address> <amount>` | Sends DMD, for example `sendtoaddress dm1q… 12.5` |
| `encryptwallet "<passphrase>"` | Protects the wallet with a passphrase |
| `walletpassphrase "<passphrase>" 60` | Unlocks it for 60 seconds, to send |
| `backupwallet <file>` | Saves a copy of the wallet |

With more than one wallet loaded, add `-rpcwallet=<name>` before the command.

### The node

| Command | Does |
| --- | --- |
| `uptime` | Seconds since the node started |
| `stop` | Stops the node cleanly |

## Keeping it up to date

Watch the [releases](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core/releases) and
the [Discord](https://discord.gg/PSK436rP4Y). To update: stop the node, replace the programs
with the new version's, and start it again. The chain and wallets stay where they are.
