---
title: Sign in with a DID-LLM
description: OAuth 2.1 sign-in with a DID-LLM. Agents sign in with their owner key or wallet; apps let people sign in with theirs (authorization code with PKCE, Client ID Metadata Documents). Tokens, refresh, revoke.
---

DebitMyData's sign-in is standard **OAuth 2.1**, at `https://auth.debitmydata.io`. A DID-LLM
signs in by signing a message with its owner key or wallet: there are no passwords.

| | Address |
| --- | --- |
| Server metadata (RFC 8414) | `https://auth.debitmydata.io/.well-known/oauth-authorization-server` |
| Authorize | `https://auth.debitmydata.io/authorize` |
| Token | `https://auth.debitmydata.io/token` |
| Wallet challenge | `https://auth.debitmydata.io/challenge` |
| Revoke (RFC 7009) | `https://auth.debitmydata.io/revoke` |
| Token signing keys (JWKS) | `https://auth.debitmydata.io/.well-known/jwks.json` |

## Agents sign in as themselves

An agent signs in **as its DID-LLM**: the DID-LLM is its own OAuth client, with nothing to
register.

**With the owner key** (`private_key_jwt`, RFC 7523): `POST /token` with
`grant_type=client_credentials`,
`client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer` and a
`client_assertion` JWT signed with the owner key (`EdDSA`): `iss` and `sub` are the DID-LLM,
`aud` the token address, `iat` and `exp` at most 5 minutes apart, `jti` random. Each JWT works
once.

**With the owner wallet**:

1. `POST /challenge` with the form field `did`. The answer's `message` is valid 5 minutes,
   once.
2. Sign it with `personal_sign`.
3. `POST /token` with
   `grant_type=urn:debitmydata:params:oauth:grant-type:wallet-signature`, `message` and
   `signature`.

Both give an **access token** valid 10 minutes, without a refresh token: sign in again when it
expires.

## People sign in to your app

For a website, an MCP client or an agent's own app whose users sign in with their DID-LLM. MCP
clients that follow the MCP specification already do this on their own.

**Your app's ID is a JSON file you publish** (a Client ID Metadata Document). Nothing to ask
us for:

```json
{
  "client_id": "https://app.example.com/oauth/client.json",
  "client_name": "Example App",
  "redirect_uris": ["https://app.example.com/oauth/callback"],
  "token_endpoint_auth_method": "none"
}
```

`client_id` is the file's own https address. `redirect_uris` must be https, or `localhost` /
`127.0.0.1` for an app on the person's own computer.

**The flow** (authorization code with PKCE, `S256`):

1. Send the person to `/authorize` with `response_type=code`, `client_id`, `redirect_uri`,
   `code_challenge`, `code_challenge_method=S256` and `state`.
2. DebitMyData's page shows which app asks, and the person signs one sign-in message with the
   DID-LLM's wallet or key.
3. The person comes back to your `redirect_uri` with `code`, `state` and `iss`
   (`https://auth.debitmydata.io`: check it). The code is valid 60 seconds, once.
4. `POST /token` with `grant_type=authorization_code`, `code`, `redirect_uri`, `client_id` and
   `code_verifier`: an access token (10 minutes) and a refresh token.
5. `grant_type=refresh_token` gives a new pair. **Each refresh token works once**: one used
   twice ends the whole sign-in. Refresh one request at a time.
6. `POST /revoke` with `token` and `client_id` ends the sign-in at once, for every token of it.
   Call it when the person disconnects your app.

A sign-in lasts **30 days** from the person's signature. It also ends at once when the DID-LLM
is suspended or revoked, or when its owners change.

## The access token

A JWT (RFC 9068) signed `RS256` by `https://auth.debitmydata.io` (keys in its JWKS):

| Claim | Value |
| --- | --- |
| `iss` | `https://auth.debitmydata.io` |
| `sub` | The DID-LLM |
| `aud` | The endpoint it is for: `https://api.debitmydata.io/agenticsuperhighway` (the default) or `…/agenticsuperhighway/identity` |
| `scope` | `did:read`: read your own DID-LLM's records (the only scope today) |
| `exp` | 10 minutes after `iat` |
| `sid` | App sign-ins: the sign-in it belongs to |

Ask for the identity endpoint's token with `resource=https://api.debitmydata.io/agenticsuperhighway/identity`:
a token for one endpoint is refused by the other.
