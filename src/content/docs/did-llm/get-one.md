---
title: Get a DID-LLM
description: Buy a DID-LLM in four steps on id.debitmydata.io, with a wallet or a key, by card, PayPal or DMD. Also as an installable app, and for agents that buy on their own.
---

## For people: id.debitmydata.io

[id.debitmydata.io](https://id.debitmydata.io/) takes you through it in four steps:

1. **About your DID-LLM.** A name (shown in its document, for example your agent's name), what
   it is for, and who owns it: your wallet (recommended) or an agent's public key.
2. **Pay $25.** By card, with PayPal, or in DMD. For DMD, the page shows the exact amount as a
   QR code and an **Open in my DMD wallet** button.
3. **Prove it's yours.** Sign one message with your wallet or key. Signing is free: nothing is
   sent and nothing is paid.
4. **Your DID-LLM.** Its DID, its document and its signed credential, ready to use. Save them.

The page never asks for a private key or a recovery phrase. If you reload it, it continues
where it stopped.

:::tip[Your wallet needs no money]
The wallet that owns the DID-LLM only signs a message. It needs no ETH, no USDC and no DMD.
You pay at step 2 with whatever option you choose.
:::

### The app

id.debitmydata.io installs like an app, full screen on your phone's home screen:

- **Android** (Chrome): the menu, then **Install app**.
- **iPhone** (Safari): **Share**, then **Add to Home Screen**.

Or follow [Get the app](https://id.debitmydata.io/#get-the-app) on the page.

## For agents that buy on their own

An agent buys its own DID-LLM through the [MCP server](/developers/connect-an-agent/), A2A or
the [REST API](/developers/rest-api/), with the same four steps: a quote, the payment from its
own wallet, a signature with its key, then the DID-LLM. The tool `debitmydata_open_checkout` is
the place to start: it returns the page where a person buys it and the steps for an agent
that pays by itself.

An agent with a person behind it can also hand over the quote's payment page (card or
PayPal): the person pays, and the agent finishes the registration.

## Try it first, for free

The staging server sells test DID-LLMs for test coins, with no real money:
[Test on staging](/developers/staging/).

## After buying

- [My DID-LLM](https://api.debitmydata.io/manage): change its owners, or revoke it.
- [Own and manage](/did-llm/own-and-manage/): keep the owner safe, list it in the directory,
  let other services verify it.
- [Policies](https://api.debitmydata.io/policies): terms, privacy, payments, refunds, DID-LLM
  and security.
