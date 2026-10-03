# The Ancient Loans Database (ALD)
Created and maintained by Hansen Zheng.

## Purpose
A systematic, standardized record of every documented loan in the ancient world, for
scholars to search, compare, and analyze ancient credit. Starts with Roman Egypt
(papyri); the schema extends to all regions.

## Architecture
- **Supabase (Postgres)**: the only home of the data. The repo contains no data.
- **Repo** = publication only: `docs/` (GitHub Pages site), `schema.sql`, `codebook.md`.
- Site is plain HTML + one JS file. No CSS, no styling (Hansen's preference).
- **Releases**: pushing tag `vX.Y` runs `.github/workflows/release.yml`, which exports all
  tables to CSV from the database (secret `SUPABASE_DB_URL`).
- Site reads Supabase's REST API with the public key in `docs/config.js`; RLS is read-only.

## Data standards
- Follow `codebook.md` exactly. Loan ≠ document. Tables: documents, editions, parties,
  loans, loan_parties.
- Stable IDs, never changed or reused: ALD-00001, DOC-00001, ED-00001, PTY-00001.
- Verified data only; null = unknown; mark uncertainty (certain/damaged/restored/inferred).
- Years: historical integers, no year 0 (100 BC = -100, AD 57 = 57). Displayed as BC/AD.
- Everything displayed must be true and academically accepted; check conventions before adding.
- Plain SQL only (portable); no Supabase-only features in the schema.
- `schema.sql` is a one-time setup script. Never re-run it against the live database.
  Apply schema changes as `ALTER` statements and update `schema.sql`, `codebook.md`, and
  `docs/app.js` to match.

## Status
- Done: schema, website, release workflow, docs.
- Supabase project ref `zzlrdlkdngxkkcrtolpx`; URL + publishable key set in `docs/config.js`.
- Live DB matches `schema.sql` (migrations applied via Supabase MCP: `academic_conventions`,
  `rename_is_principal_to_is_reference`).
- Verified: schema applied; RLS on; anon/authenticated have SELECT only; security
  advisor clean. Tables empty.
- Supabase connected to Claude as a claude.ai connector (MCP); use it for all data entry.
- Pending (Hansen): GitHub Pages source must be `main` / `/docs` (currently shows README).
  `SUPABASE_DB_URL` secret reported added; untested until first release tag.

## Working rules
- Work on `main`; commit directly as you go.
- Start simple; build step by step with Hansen. Do nothing without explicit instruction.
- Be concise and organized.
