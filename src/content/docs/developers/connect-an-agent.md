---
title: Connect an agent
description: The DebitMyData Agent Gateway for AI agents. The MCP server (the Agentic Superhighway) and its tools, the identity endpoint, A2A, the agent skill and the discovery files.
---

The **Agent Gateway** is how AI agents use DebitMyData: they find it, buy a DID-LLM, sign in
with it and check other agents. Everything below is public and needs no API key.

## Addresses

| | Address |
| --- | --- |
| MCP server, the Agentic Superhighway | `https://api.debitmydata.io/agenticsuperhighway` |
| Identity endpoint (MCP, sign-in only) | `https://api.debitmydata.io/agenticsuperhighway/identity` |
| A2A (Agent2Agent) | `https://api.debitmydata.io/agenticsuperhighway/a2a` |
| REST API | `https://api.debitmydata.io/v1/` |
| Sign-in (OAuth 2.1) | `https://auth.debitmydata.io` |
| Guide for agents | [api.debitmydata.io/llms.txt](https://api.debitmydata.io/llms.txt) |

The staging server has the same addresses on `staging-api.debitmydata.io` and
`staging-auth.debitmydata.io`, with test coins: see [Test on staging](/developers/staging/).
Each DID-LLM belongs to the server that issued it: a staging DID-LLM is unknown to production,
and the other way round.

## The MCP server

Add `https://api.debitmydata.io/agenticsuperhighway` to any MCP client as a remote server
(Streamable HTTP). Most tools need no sign-in; `debitmydata_whoami` asks the client to sign in
with a DID-LLM, which is what makes MCP clients show their **Connect** button.

| Tool | What it does |
| --- | --- |
| `debitmydata_discover` | What DebitMyData offers, its prices and how to pay |
| `debitmydata_get_did_registration_offer` | The DID-LLM's price and the payment options open now |
| `debitmydata_list_supported_payment_options` | The payment options, with their details |
| `debitmydata_open_checkout` | The page where a person buys a DID-LLM, and the steps for an agent that pays by itself |
| `debitmydata_create_did_payment_quote` | A quote: the exact amount, where to pay it, until when |
| `debitmydata_submit_payment_reference` | Optional: the payment's transaction, as a hint |
| `debitmydata_get_payment_status` | Where a payment stands, until `settled` |
| `debitmydata_prove_wallet_control` | The message to sign, then the signature: proves the future owner |
| `debitmydata_register_did` | Issues the DID-LLM, its credential and entitlements |
| `debitmydata_get_registration_status` | What a registration still needs |
| `debitmydata_verify_agent` | Checks another agent's DID-LLM, and its proof of control |
| `debitmydata_whoami` | Which DID-LLM you are signed in as (needs sign-in) |
| `debitmydata_search_directory` | Searches the public DID-LLM directory |
| `debitmydata_list_in_directory` | Lists or unlists your DID-LLM, signed by its owner |
| `debitmydata_change_owner` | Moves a DID-LLM to new owners, signed by them |
| `debitmydata_revoke_did` | Revokes a DID-LLM for good, signed by its owner |
| `debitmydata_catalog`, `debitmydata_get_purchase_quote`, `debitmydata_purchase`, `debitmydata_complete_purchase` | Other products and add-ons for a DID-LLM, when they are on sale |
| `debitmydata_marketplace_provider_requirements` | What a provider needs to sell through DebitMyData |

The server describes every tool and its arguments itself (`tools/list`). DebitMyData never
asks an agent for its private keys, seed phrases or wallet access: an agent pays from its own
wallet and only sends signatures.

## The identity endpoint

`/agenticsuperhighway/identity` is a second, separate MCP server for apps that only need to
know **who** signed in, such as a sign-in button. It has three read-only tools and nothing
else: nothing can be bought, registered or changed through it.

| Tool | Answers |
| --- | --- |
| `debitmydata_whoami` | The signed-in DID-LLM: its ID, name, type, status, owners, entitlements and the session |
| `debitmydata_get_profile` | The signed-in DID-LLM's profile |
| `debitmydata_verify_agent` | Another DID-LLM's public record |

Every request there needs a sign-in token issued for it. See [Sign in with a DID-LLM](/developers/sign-in/).

## A2A

Agents that speak A2A (Agent2Agent, versions 1.0 and 0.3) get the same tools as the MCP
server's public ones, as A2A skills with the same names and arguments, at
`https://api.debitmydata.io/agenticsuperhighway/a2a`. Send a message with a data part such as
`{"skill": "debitmydata_get_did_registration_offer", "arguments": {}}`; a message without a
skill gets the list of skills. Every answer is immediate.

## Agent skill

The gateway publishes its own agent skill, `debitmydata-did-llm`, for agents that use
SKILL.md skills: it is listed at
[`/.well-known/agent-skills/index.json`](https://api.debitmydata.io/.well-known/agent-skills/index.json).

## Discovery files

On `https://api.debitmydata.io`:

| File | What |
| --- | --- |
| [`/llms.txt`](https://api.debitmydata.io/llms.txt) | The whole service in plain words, for agents |
| [`/.well-known/agent-card.json`](https://api.debitmydata.io/.well-known/agent-card.json) | The A2A Agent Card |
| [`/.well-known/mcp/server-card.json`](https://api.debitmydata.io/.well-known/mcp/server-card.json) | The MCP server card: tools and sign-in |
| [`/.well-known/ai-catalog.json`](https://api.debitmydata.io/.well-known/ai-catalog.json) | The AI catalog, listing the server card |
| [`/.well-known/api-catalog`](https://api.debitmydata.io/.well-known/api-catalog) | The API catalog (RFC 9727) |
| [`/.well-known/did.json`](https://api.debitmydata.io/.well-known/did.json) | DebitMyData's issuer DID and the keys that sign credentials |
| [`/openapi.json`](https://api.debitmydata.io/openapi.json) | The REST API's OpenAPI description |
| [`/v1/discovery`](https://api.debitmydata.io/v1/discovery) | Services, prices and payment options, live |

## Limits

Each address is limited, for example to 5 MCP calls a second; above that the answer is `429`
with `Retry-After`. **Ask before any load test or bulk run**: write to
[info@debitmydata.com](mailto:info@debitmydata.com). Test on [staging](/developers/staging/),
never with real purchases.
