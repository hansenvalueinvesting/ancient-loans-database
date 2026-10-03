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
  `loans` to CSV from the database (secret `SUPABASE_DB_URL`).
- Site reads Supabase's REST API with the public key in `docs/config.js`; RLS is read-only.

## Data standards
- Follow `codebook.md` exactly. One table, `loans`; one row per loan.
- Fields: id, year, place, amount, currency, borrower, lender, interest, duration,
  source (required citation), source_url. Nothing else is collected for now (Hansen's
  decision: no data on documents, people, places yet).
- IDs ALD-00001… assigned by sequence; never changed or reused.
- Verified data only; empty = unknown; record what the source says.
- `year`: integer, negative = BCE, no year 0 (enforced); displayed as '57 CE' / '100 BCE'.
  No date field (Hansen's decision: year is enough).
- Everything displayed must be true and academically accepted; check conventions before adding.
- Plain SQL only (portable); no Supabase-only features in the schema.
- `schema.sql` is a one-time setup script. Never re-run it against the live database.
  Apply schema changes as `ALTER` statements and update `schema.sql`, `codebook.md`, and
  `docs/app.js` to match.

## Current phase
Schema v0.2 (single `loans` table) applied; `date` column removed from schema.sql →
Hansen drops it in SQL Editor → next: begin data entry.

## Status
- Supabase project ref `zzlrdlkdngxkkcrtolpx`; URL + publishable key set in `docs/config.js`.
- Live DB = `schema.sql` v0.2 (migration `ald_schema_v0_2`; earlier migrations belong to
  removed schemas). Verified: 1 table, RLS on, SELECT-only "public read" policy; anon has
  SELECT only (no insert/update/delete grants). Table empty.
- Advisor: 2 WARN on `public.rls_auto_enable()` (Supabase's auto-enable-RLS event trigger,
  not part of schema.sql). Left as is.
- Destructive SQL via the Supabase MCP needs approval that cannot appear in cloud
  sessions; Hansen runs such statements in the SQL Editor. Inserts work via MCP.
- Site (`docs/`): table of all fields (source linked when source_url set), filters (search,
  place, currency, year range), sorting, CSV download. Browser-tested with mock data.
- `release.yml` exports `loans` as CSV. `SUPABASE_DB_URL` secret untested until first tag.
- Supabase connected to Claude as a claude.ai connector (MCP); use it for all data entry.
- Pending (Hansen): GitHub Pages source must be `main` / `/docs`.

## Working rules
- Work on `main`; commit directly as you go.
- Start simple; build step by step with Hansen. Do nothing without explicit instruction.
- Be concise and organized.
