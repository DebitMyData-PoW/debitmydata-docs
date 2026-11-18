---
title: Wallets
description: Where to keep DMD. DebitMyData Core for Windows, Linux and macOS, the mydmd.io web wallet and the DMD Secure Wallet for Android, and how to check a download.
coin: true
---

Every DMD wallet below is **non-custodial**: you hold the keys, and nobody else, DebitMyData
included, can move your coins or recover them for you.

| Wallet | For | Keys |
| --- | --- | --- |
| [DebitMyData Core](#debitmydata-core) | Windows, Linux, macOS. A full node: it checks every block itself | On your computer |
| [mydmd.io](#web-wallet-mydmdio) | Any browser, nothing to install | In your browser |
| [DMD Secure Wallet](#dmd-secure-wallet-android) | Android phones | On your phone |

:::caution[Your recovery phrase is your money]
Write your recovery phrase (seed words) on paper and keep it offline. Anyone who has it can
take your DMD. DebitMyData will never ask for it.
:::

## DebitMyData Core

The reference wallet and full node, version 1.3.5.

| System | Download | SHA-256 |
| --- | --- | --- |
| Windows (64-bit) | [debitmydata-1.3.5-win64.zip](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core/releases/download/v1.3.5/debitmydata-1.3.5-win64.zip) | `b7f26737cc63a3224a3e1b4816b6f722cb020a051605292d2e02fd9adbaad8ce` |
| Linux (x86_64) | [debitmydata-1.3.5-x86_64-linux-gnu.tar.gz](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core/releases/download/v1.3.5/debitmydata-1.3.5-x86_64-linux-gnu.tar.gz) | `de0d55fd37650ed50b03d9de4297e65c31d88450abbf448b4f66bbcf413033ca` |
| macOS (Intel) | [debitmydata-1.3.5-x86_64-apple-darwin.tar.gz](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core/releases/download/v1.3.5/debitmydata-1.3.5-x86_64-apple-darwin.tar.gz) | `cde90061cbd6dce13936af8a684306cc093bd2301d1f75536cfce992c21b52f2` |

All versions: [DebitMyData Core releases](https://github.com/DebitMyData-PoW/DebitMyData-PoW-Core/releases).

### Check the download

Before opening it, make sure the file is exactly the one published: its SHA-256 must match the
table above.

- **Windows** (Command Prompt, in the folder of the file):
  ```
  certutil -hashfile debitmydata-1.3.5-win64.zip SHA256
  ```
- **Linux**:
  ```
  sha256sum debitmydata-1.3.5-x86_64-linux-gnu.tar.gz
  ```
- **macOS** (Terminal):
  ```
  shasum -a 256 debitmydata-1.3.5-x86_64-apple-darwin.tar.gz
  ```

If the result is different, delete the file and download it again from the link above.

### First start

1. Extract the archive and open **DebitMyData Core**: `debitmydata-qt` (on Windows,
   `bin\debitmydata-qt.exe`).
2. Choose where it keeps the chain (the default is fine), then let it download and check every
   block. The progress shows at the bottom of the window.
3. Create a wallet, then **Settings, Encrypt Wallet** to protect it with a passphrase.
4. **File, Backup Wallet** to save a copy somewhere safe, away from your computer.
5. **Receive** shows a new `dm1…` address to get DMD.

To run it on a server without a window, see [Run a node](/coin/node/).

## Web wallet: mydmd.io

[mydmd.io](https://mydmd.io/) is a wallet in your browser, with nothing to install:

- a new wallet with a 12-word recovery phrase, or restore one you have;
- a password protects it in this browser;
- send and receive DMD, an address book, the history of your transactions (with a CSV export);
- your keys are made and kept in your browser, and transactions are signed there: they never
  leave it.

Because the wallet lives in that browser, clearing the browser's data removes it: keep your
recovery phrase to restore it anywhere.

## DMD Secure Wallet (Android)

The DMD wallet for Android phones, on
[Google Play](https://play.google.com/store/apps/details?id=com.debitmydatapow.wallet).
It makes a recovery phrase when you create a wallet: write it down before you receive any DMD.

## Paying with DMD

DebitMyData Core opens `debitmydata:` payment links: a link such as
`debitmydata:dm1…?amount=25000` fills in the address and the amount for you. The
[Get a DID-LLM](https://id.debitmydata.io/) page shows its DMD payment as such a link and as a
QR code.
