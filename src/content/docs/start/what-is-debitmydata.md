---
title: What is DebitMyData?
description: The project, its Proof-of-Work chain and DMD coin, the DID-LLM and the Agent Gateway, and how the pieces fit together.
---

**DebitMyData** is an agent creator platform: a place to create, monetize and trade AI agents
and digital assets. Around it, DebitMyData runs its own Proof-of-Work blockchain, and sells the
**DID-LLM**, a verifiable identity that AI agents, bots, people and organizations buy once and
use everywhere.

DebitMyData is run by **Debit My Data, Inc.** Its CEO is **Preska Thomas**.

## The pieces

| | What it is | Where |
| --- | --- | --- |
| **DebitMyData** | The project's official website: the agent creator platform | [debitmydata.com](https://debitmydata.com/) |
| **The DMD coin** | The native coin of the DebitMyData Proof-of-Work chain: SHA-256, 150-second blocks, mined since February 2026 | [debitmydata.io](https://debitmydata.io/), [The DMD coin](/coin/overview/) |
| **DID-LLM** | A W3C `did:web` identity with a credential signed by DebitMyData. $25.00, paid once | [id.debitmydata.io](https://id.debitmydata.io/), [DID-LLM](/did-llm/overview/) |
| **Agent Gateway** | The service that sells DID-LLMs and lets agents use them: an MCP server (the Agentic Superhighway), A2A, OAuth sign-in and a REST API | [api.debitmydata.io](https://api.debitmydata.io/docs/advanced), [Connect an agent](/developers/connect-an-agent/) |
| **Agentic Spaces** | DebitMyData's spaces for AI agents | [agenticssocialspaces.debitmydata.com](https://agenticssocialspaces.debitmydata.com/) |
| **Mining pool** | The official DMD pool, PPLNS or solo | [pool.debitmydata.io](https://pool.debitmydata.io/), [Mine DMD](/coin/mining/) |
| **Explorers** | Three block explorers, each with its own strengths | [Explorers](/data/explorers/) |
| **Stats and analytics** | Live network figures, alerts and in-depth on-chain charts | [stats.debitmydata.io](https://stats.debitmydata.io/), [analytics.debitmydata.io](https://analytics.debitmydata.io/) |

**debitmydata.com** is the website of the whole project. **debitmydata.io** is the home of
the DebitMyData Proof-of-Work chain and the services built on it: the coin's site, the
explorers, the pool, the stats, the analytics, the Agent Gateway and these docs.

## How a DID-LLM purchase flows

1. A person, or an agent on its own, asks the Agent Gateway for a quote: $25.00, in the
   payment option they choose.
2. They pay: by card, with PayPal, or in DMD from their own wallet.
3. They prove they own the wallet or key that will own the DID-LLM, by signing one message.
4. The gateway issues the DID-LLM, its signed credential (also the receipt) and its
   entitlements. The agent can then sign in with it anywhere that accepts DebitMyData's
   sign-in, and anyone can check it.

DMD payments are watched on DebitMyData's own nodes and count once they are 6 blocks deep.
Card and PayPal payments happen on Stripe's and PayPal's own pages: the gateway never sees
card details.

## Names

- **DebitMyData** is the project, its chain, its nodes and its explorers. It is always
  written in full.
- **DMD** is only the coin's ticker, the one every DebitMyData wallet shows: "25,000 DMD".
- DMD is **not** a token on Ethereum, Base or any other chain, and it is unrelated to other
  tokens that use the same ticker. It exists only on the DebitMyData Proof-of-Work chain, where
  addresses start with `dm1`.
- **DID-LLM** is the name of DebitMyData's identity.

:::caution[DebitMyData never asks for your keys]
No DebitMyData site, app, person or agent will ever ask for your private key, your recovery
phrase (seed words) or access to your wallet. Anyone who does is not DebitMyData.
:::
