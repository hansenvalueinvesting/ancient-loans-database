# The Ancient Loans Database (ALD)
Created and maintained by Hansen Zheng.

## Purpose
A systematic, standardized record of every documented loan in the ancient world, for
scholars to search, compare, and analyze ancient credit. Starts with Roman Egypt
(papyri); the schema extends to all regions.

## Architecture
- **Supabase (Postgres)**: the only home of the data. The repo contains no data.
- **Repo** = publication only: `docs/` (GitHub Pages site), `schema.sql`, `codebook.md`.
- Site is plain HTML + one JS file (`app.js` serves `index.html` and `loan.html`). No CSS,
  no styling (Hansen's preference).
- **Releases**: pushing tag `vX.Y` runs `.github/workflows/release.yml`, which exports all
  `loans` to CSV from the database (secret `SUPABASE_DB_URL`).
- Site reads Supabase's REST API with the public key in `docs/config.js`; RLS is read-only.

## Data standards
- Follow `codebook.md` exactly. One table, `loans`; one row per loan.
- Fields: id, year, place, amount, currency, borrower, lender, interest, duration,
  source (required citation), source_url, notes (+ automatic year_sort). Nothing else is collected for now (Hansen's
  decision: no data on documents, people, places yet).
- IDs: sequential 6-digit `ALD-000001`… (Hansen's decision; no meaning encoded), assigned
  by sequence, format enforced; never changed or reused.
- Verified data only; empty = unknown; record what the source says.
- `year`: text 'AD 57' / '100 BC' (format enforced; no year 0). `year_sort` integer is
  generated automatically from it for sorting/filtering. No date field (year is enough).
- Everything displayed must be true and academically accepted; check conventions before adding.
- Plain SQL only (portable); no Supabase-only features in the schema.
- `schema.sql` is a one-time setup script. Never re-run it against the live database.
  Apply schema changes as `ALTER` statements and update `schema.sql`, `codebook.md`, and
  `docs/app.js` to match.

## Current phase
Data entry, pilot: Greek loan contracts from P.Oxy. (Roman Egypt). Texts are read from
papyri.info's open data (github.com/papyri/idp.data, CC BY 3.0: DDbDP texts, HGV metadata),
because papyri.info's site has a bot check. Network: papyri.info + aquila reachable;
trismegistos.org has an incomplete TLS chain; quod.lib.umich.edu blocked by Cloudflare.
- Inserted: 20 rows. ALD-000001 = P.Oxy. 3 507, ALD-000002 = P.Oxy. 44 3198 (both AD 146,
  Hansen's decision; date issues in notes); ALD-000003–000020 = 18 rows from 17 P.Oxy. texts
  (AD 21–258, chronological; P.Oxy. 3 506 has 2 loans). P.Oxy. 14 1710 left out (only names
  survive).
- Formats used in the pilot (not yet in codebook.md, awaiting Hansen): interest as formula +
  % ; duration as stated (length + exact date in notes); names "X son of Y", edition spelling;
  empty interest when none stated; one row per loan mentioned; place "Oxyrhynchus, Egypt"
  (2 rows "Sinary (Oxyrhynchite nome)" unchanged). Also open: crediting idp.data
  (CC BY) on the site.

## Status
- Supabase project ref `zzlrdlkdngxkkcrtolpx`; URL + publishable key set in `docs/config.js`.
- Live DB = `schema.sql` v0.2 (migration `ald_schema_v0_2`; earlier migrations belong to
  removed schemas). Verified: 1 table, RLS on, SELECT-only "public read" policy; anon has
  SELECT only (no insert/update/delete grants). 20 rows (see Current phase).
  Migrations since v0.2: `add_loans_notes`, `year_as_bc_ad_text`, `six_digit_ids`; `date`
  dropped by Hansen.
- Advisor: 2 WARN on `public.rls_auto_enable()` (Supabase's auto-enable-RLS event trigger,
  not part of schema.sql). Left as is.
- Destructive SQL via the Supabase MCP needs approval that cannot appear in cloud
  sessions; Hansen runs such statements in the SQL Editor. Inserts work via MCP.
- Site (`docs/`): main table of all fields except notes (ID links to `loan.html?id=…`,
  source linked when source_url set), filters (search, place, currency, year range),
  sorting, CSV download (includes notes). `loan.html` shows every field incl. notes.
  Browser-tested with mock data.
- `release.yml` exports `loans` as CSV. `SUPABASE_DB_URL` secret untested until first tag.
- Supabase connected to Claude as a claude.ai connector (MCP); use it for all data entry.
- Pending (Hansen): GitHub Pages source must be `main` / `/docs`.

## Working rules
- Work on `main`; commit directly as you go.
- Start simple; build step by step with Hansen. Do nothing without explicit instruction.
- Be concise and organized.
