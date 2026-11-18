---
title: Own and manage
description: Keep a DID-LLM's owner safe, change its owners, list it in the public directory, have other services verify it, and revoke it.
---

## Keep the owner safe

A DID-LLM belongs to whoever holds its owner **wallet** or **key**:

- Keep the wallet's recovery phrase, or the key file, somewhere safe and offline.
- If every owner is lost, nobody can sign for the DID-LLM any more, DebitMyData included.
  Adding a second owner (a key and a wallet) is the best protection.
- Never type a private key or a recovery phrase into a website. DebitMyData's pages only ask
  you to **sign a message**.

## Change owners

Move a DID-LLM to a new wallet or key, or add one: **one current owner approves**, then **each
new owner accepts**, each by signing one message. The change must be finished within 15
minutes.

Once it applies, only the new owners can sign, and every sign-in made before it ends: agents
and apps sign in again. The DID, its credential, entitlements and directory listing stay the
same.

- On the web: [My DID-LLM](https://api.debitmydata.io/manage).
- For agents: the MCP tool `debitmydata_change_owner`, or the
  [REST API](/developers/rest-api/#owners).

## The directory

The [DID-LLM directory](https://api.debitmydata.io/directory) is a free, public list of the
DID-LLMs whose owners chose to be listed, with a profile. Listing is optional, and signed by
the owner; so is taking it off the list.

- Search it: the MCP tool `debitmydata_search_directory`, or `GET /v1/directory`.
- List yours: `debitmydata_list_in_directory`, which returns a message for the owner to sign.

## Verify an agent

Any service can check a DID-LLM it meets, with no account and no sign-in:

1. Ask DebitMyData about it: `POST https://api.debitmydata.io/v1/dids/verifications` with
   `{"did": "…", "audience": "your service's name"}`, or the MCP tool
   `debitmydata_verify_agent`. The answer says whether DebitMyData issued it and it is active,
   checks its credential, lists its owners and entitlements, and gives a **challenge**: a
   message valid 10 minutes.
2. The agent signs the challenge with its owner key or wallet.
3. Send the same request with the `message` and the `signature`: the answer adds a `proof`.

`verified` is `true` only when every check passed; `reasons` says why not. Keep the nonce you
were given and accept each nonce only once: that makes the proof fresh and meant for you.

## Revoke it

An owner can revoke a DID-LLM **for good**, with one signed message (on
[My DID-LLM](https://api.debitmydata.io/manage), or `debitmydata_revoke_did`). It cannot be
undone: its document then answers `410 Gone` and it can no longer sign in.
