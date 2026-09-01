# POF

[![CI](https://github.com/nicetry-works/pof/actions/workflows/ci.yml/badge.svg)](https://github.com/nicetry-works/pof/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Portable Organization Format** — a content format for the knowledge and
execution layers of any organization: plain Markdown files with a YAML
frontmatter block, conformant to [OKF](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
(Open Knowledge Format) v0.2, meant to be read equally well by a person, a
script, or an agent.

**📖 Full documentation: [pof.dev](https://pof.dev)**

## What this repo is

This repo is the documentation site for POF — the format's spec, the
thinking behind it, and how a reference implementation exposes it to
agents over [WebMCP](https://webmachinelearning.github.io/webmcp/),
delegated access, and a remote [MCP](https://modelcontextprotocol.io)
server. It's a static [Nextra](https://nextra.site) site with no backend
of its own; every claim it makes about the format is checked against a
real, working implementation, not invented for illustration.

Here's the shape of one POF document — a Role:

```yaml
---
type: Role
title: Customer Support Lead
name: customer-support-lead
team: support
---

# Identity
The first point of contact for anything a customer brings up...

# Operating frame
Works out of the shared support inbox and the team's running Notebook...

# Purpose
Keep the gap between "a customer said something" and "someone
acknowledged it" as short as it can reasonably be...

# Rules
Never close a ticket without a reply the customer can actually read
as an answer...
```

Start with [pof.dev](https://pof.dev) for the overview, the full format
spec (Roles, Skills, Notebooks, Wiki objects), and how the three access
surfaces (WebMCP, delegated access, remote MCP) each work.

## Local development

```bash
npm install
npm run dev    # http://localhost:3003
```

```bash
npm run build  # production build
npm run lint   # eslint
```

## Deployment

`pof.dev` is deployed manually via the Vercel CLI (`npm run deploy`), not
on every push to `main` — this repo lives under `nicetry-works`, the
Vercel project under a personal account, and connecting the two for
auto-deploy needs a one-time GitHub App authorization outside this repo's
control. A push here updates the source of truth; publishing it is a
separate, deliberate step.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Most useful contributions here
are corrections — if a page claims something about the format that
doesn't match reality, that's a real bug in documentation, not a
nitpick.

## License

[MIT](LICENSE)
