---
title: REST API
description: The Agent Gateway's REST API. Buying a DID-LLM step by step, looking up DID-LLMs and credentials, owner changes, the directory, verification and the reference price.
---

The Agent Gateway's REST API is at `https://api.debitmydata.io/v1/`. It answers in JSON and
needs no API key. Its full reference:

- [API reference](https://api.debitmydata.io/docs/advanced), to try each request in the browser
- [ReDoc](https://api.debitmydata.io/redoc), easier to read
- [OpenAPI description](https://api.debitmydata.io/openapi.json), to generate a client

The MCP tools call this same API, so both give the same results and error codes.

## Buy a DID-LLM

| Step | Request |
| --- | --- |
| 1. The offer and the payment options open now | `GET /v1/discovery`, `GET /v1/payment-options` |
| 2. A quote: $25.00, the exact amount in the payment option chosen | `POST /v1/dids/registration-quotes` |
| 3. Pay, then follow the payment | `GET /v1/payments/{payment_intent_id}` |
| (optional) Report the payment's transaction, as a hint | `POST /v1/payments/{payment_intent_id}/references` |
| 4. A one-time message for the owner to sign | `POST /v1/dids/registrations/{registration_intent_id}/controller-challenges` |
| 5. The signature | `POST /v1/dids/registrations/{registration_intent_id}/controller-proofs` |
| What is still missing | `GET /v1/dids/registrations/{registration_intent_id}` |
| 6. The DID-LLM, its credential and entitlements | `POST /v1/dids/registrations` |

Pay only the amount the quote gives, to the address it gives, before it expires. Card and
PayPal quotes come with a `payment_url`, a Stripe or PayPal page where a person pays.

## Look up

| | Request |
| --- | --- |
| A DID-LLM | `GET /v1/dids/{identity_id}` (its ID or the DID itself) |
| Its credential | `GET /v1/credentials/{credential_id}` |
| Its entitlements | `GET /v1/entitlements/{identity_id}` |
| Its DID document | `GET /agents/{id}/did.json` |
| DebitMyData's issuer DID and keys | `GET /.well-known/did.json` |
| The policies, with each version's SHA-256 | `GET /v1/policies` |
| The DMD reference price | `GET /v1/prices/dmd-usd` ([details](/data/reference-price/)) |

## Verify

| | Request |
| --- | --- |
| Check a DID-LLM and get a challenge | `POST /v1/dids/verifications` with `did` and `audience` |
| Check its proof | the same, with `message` and `signature` |

See [Verify an agent](/did-llm/own-and-manage/#verify-an-agent).

## Owners

| | Request |
| --- | --- |
| Start an owner change: every owner it will have afterwards | `POST /v1/dids/{identity}/owner-changes` |
| Where it stands, and who still has to sign | `GET /v1/dids/{identity}/owner-changes/{change_id}` |
| One signature at a time: a current owner approves, each new owner accepts | `POST /v1/dids/{identity}/owner-changes/{change_id}/signatures` |
| Start a revocation | `POST /v1/dids/{identity}/revocations` |
| Its signature: revoked for good | `POST /v1/dids/{identity}/revocations/{challenge_id}/signature` |

## Directory

| | Request |
| --- | --- |
| Read the directory | `GET /v1/directory` |
| List or unlist a DID-LLM: the message to sign | `POST /v1/directory/{did}/challenges` |
| The owner's signature | `POST /v1/directory/{did}/proofs` |

## Errors and limits

Errors come with a code and a sentence that says what to do. Each address may send about 20
reads a second and 60 quotes, challenges, proofs and registrations a minute; above that the
answer is `429` with a `Retry-After` header. Build and test against
[staging](/developers/staging/) first.
