# The Ancient Loans Database (ALD)
Created and maintained by Hansen Zheng.

## Purpose
A systematic, standardized record of every documented loan in the ancient world, for
scholars to search, compare, and analyze ancient credit. Starts with Roman Egypt
(papyri); the schema extends to all regions.

## Architecture
- **Supabase (Postgres)**: the only home of the data. The repo contains no data.
- **Repo** = publication only: `docs/` (GitHub Pages site), `schema.sql`, `codebook.md`.
- **Releases**: pushing tag `vX.Y` runs `.github/workflows/release.yml`, which exports all
  tables to CSV from the database (secret `SUPABASE_DB_URL`).
- Site reads Supabase's REST API with the public key in `docs/config.js`; RLS is read-only.

## Data standards
- Follow `codebook.md` exactly. Loan ≠ document. Tables: documents, editions, parties,
  loans, loan_parties.
- Stable IDs, never changed or reused: ALD-00001, DOC-00001, ED-00001, PTY-00001.
- Verified data only; null = unknown; mark uncertainty (certain/damaged/restored/inferred).
- Plain SQL only (portable); no Supabase-only features in the schema.
- `schema.sql` is a one-time setup script. Never re-run it against the live database.
  Apply schema changes as `ALTER` statements and update `schema.sql`, `codebook.md`, and
  `docs/app.js` to match.

## Status
- Done: schema, website, release workflow, docs.
- Pending (Hansen): create the Supabase project, run `schema.sql`, fill `docs/config.js`,
  enable GitHub Pages (main, /docs), add the `SUPABASE_DB_URL` secret.

## Working rules
- Work on `main`; commit directly as you go.
- Start simple; build step by step with Hansen. Do nothing without explicit instruction.
- Be concise and organized.
