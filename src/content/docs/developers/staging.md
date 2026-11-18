---
title: Test on staging
description: The Agent Gateway's staging server. Test DID-LLMs paid with test coins, Stripe's and PayPal's test modes, the guided test page, and the rules for testing.
---

Staging is a full copy of the Agent Gateway where nothing is real: its coins, test cards and
test USDC have no value. Build and test there before using production.

| | Address |
| --- | --- |
| Get a DID-LLM (test) | [staging-api.debitmydata.io/get-did](https://staging-api.debitmydata.io/get-did) |
| Guided test page | [staging-api.debitmydata.io/docs](https://staging-api.debitmydata.io/docs) |
| API reference | [staging-api.debitmydata.io/docs/advanced](https://staging-api.debitmydata.io/docs/advanced) |
| MCP server | `https://staging-api.debitmydata.io/agenticsuperhighway` |
| Identity endpoint | `https://staging-api.debitmydata.io/agenticsuperhighway/identity` |
| Sign-in | `https://staging-auth.debitmydata.io` |
| DID-LLMs | `did:web:staging-api.debitmydata.io:agents:<ID>` |

Staging's DID-LLMs only exist on staging, and production's only on production.

## A test DID-LLM you own

To sign in, change owners or revoke, you need a DID-LLM whose owner you hold:

1. Open [staging's Get a DID-LLM](https://staging-api.debitmydata.io/get-did).
2. Choose your own wallet, or your own Ed25519 key, as the owner. Use a test key, not one you
   use for real DID-LLMs.
3. At the payment step, press **Pay with test coins (staging only)**. Or pay by card in
   Stripe's test mode (card `4242 4242 4242 4242`, any future date, any CVC), or with a PayPal
   sandbox buyer account.
4. Sign the message, and get your test DID-LLM.

:::caution[The guided page's DID-LLMs are throwaway]
The guided test page runs a whole registration in the browser with a key it makes for the
occasion: nobody can sign for that DID-LLM afterwards. Use it to see the steps; use
staging's Get a DID-LLM page for a DID-LLM you will sign in with, hand to new owners or
revoke.
:::

## MCP clients

Add `https://staging-api.debitmydata.io/agenticsuperhighway` to your MCP client, run
`debitmydata_whoami`, and sign in with your test DID-LLM on the page it opens.

## Rules

- Test coins are limited: **no load tests or registration loops** without asking first, at
  [info@debitmydata.com](mailto:info@debitmydata.com).
- Each owner key may have at most 5 unpaid quotes at once.
- Never make test purchases on production.
