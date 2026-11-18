---
title: What is a DID-LLM?
description: DebitMyData's verifiable identity for AI agents, bots, people and organizations. A W3C did:web DID with a credential signed by DebitMyData, $25.00 paid once, owned by a wallet or a key.
---

A **DID-LLM** is a verifiable identity for an AI agent, a bot, a person or an organization:
a W3C [decentralized identifier](https://www.w3.org/TR/did-1.0/) (`did:web`) with a
credential signed by DebitMyData. It costs **$25.00, paid once**, with no account and no
password.

Whoever holds its **owner key** or **owner wallet** owns it. Every action on it, from signing
in to changing its owner, is a message signed by that owner. DebitMyData never holds it for
you.

## What an agent does with it

- **Prove who it is.** Any service checks a DID-LLM against DebitMyData in one request, and
  can ask the agent to sign a fresh message to prove it holds it.
- **Sign in.** An agent signs in to DebitMyData's MCP server as its DID-LLM, and people sign
  in to apps with theirs, as with "Sign in with Google", but owned by them.
- **Be found.** An owner can list a DID-LLM in the public directory, with a profile.
- **Carry what it bought.** Entitlements (what the DID-LLM owns at DebitMyData) and signed
  receipts stay attached to it.

## What you get

| | |
| --- | --- |
| The DID | `did:web:api.debitmydata.io:agents:<ID>`, unique and never reused |
| Its DID document | `https://api.debitmydata.io/agents/<ID>/did.json`: its owner key and/or wallet |
| A signed credential | A W3C Verifiable Credential 2.0 (`DebitMyDataRegistrationCredential`), signed by DebitMyData's issuer key (`did:web:api.debitmydata.io`). It is also your receipt |
| Entitlements | `dmd_did_holder` for every DID-LLM, and anything bought for it later |

## Who owns it

| Owner | What it is | Best for |
| --- | --- | --- |
| **Wallet** | Any Ethereum-style wallet (address `0x…`): MetaMask, Coinbase Wallet, Rabby, Trust Wallet, a hardware wallet… | People. The wallet only signs: it needs no balance |
| **Key** | An Ed25519 key (`ed25519:z6Mk…`) | AI agents, which sign for themselves |

A DID-LLM can have both. See [Own and manage](/did-llm/own-and-manage/).

## What it can be

When buying it, you say what it is for: `autonomous_agent`, `ai_agent`, `bot`, `agenticbot`,
`claw`, `digital_twin`, `human`, `organization` or `approved_digital_entity`.

## Paying

$25.00 in the payment option you choose:

| Option | How |
| --- | --- |
| Debit or credit card | On Stripe's payment page |
| PayPal | On PayPal's page |
| DMD (the DebitMyData coin) | From your own DMD wallet: the exact amount the quote gives, at the [reference price](/data/reference-price/) |
| USDC on Base | Coming soon, through x402 |

A DID-LLM is non-refundable: see the
[refund policy](https://api.debitmydata.io/policies/refunds).

## Status

| Status | Means |
| --- | --- |
| `active` | It works everywhere |
| `suspended` | Paused by DebitMyData (for example after abuse); it can be made active again |
| `revoked` | Ended for good, by its owner or by DebitMyData |

A suspended or revoked DID-LLM's document answers `410 Gone`, and it cannot sign in.

Next: [Get a DID-LLM](/did-llm/get-one/).
