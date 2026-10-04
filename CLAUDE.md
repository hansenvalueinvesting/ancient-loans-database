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
Data entry. First full pass done: Roman Egypt (30 BC - AD 284), all HGV records tagged
"Darlehen" or titled "loan" (932 documents). Texts read from papyri.info's open data
(github.com/papyri/idp.data, CC BY 3.0: DDbDP texts, HGV metadata), because papyri.info's
site has a bot check. Network: papyri.info + aquila reachable; trismegistos.org has an
incomplete TLS chain; quod.lib.umich.edu blocked by Cloudflare.
- DB: 448 rows (ALD-000001-000448). 932 documents reviewed: 439 included, 493 excluded
  (receipts/cancellations 168, state seed grain 109, too fragmentary 57, no text 39,
  deposits 37, registers/abstracts 30, court 10, duplicates 6, other 37). Review log
  (CSV, per document) was sent to Hansen; it is not in the repo (repo holds no data).
- Year (Hansen): uncertain years as ranges ("AD 101-200"; alternatives -> span), from HGV,
  unless the loan itself is dated differently. Pending migration (see Status).
- Inclusion rule (Hansen, in codebook.md): every loan transaction, none missed, none repeated:
  contracts (money or kind), loans in petitions/letters, earlier loans a document calls loans.
  Money + goods in one contract = one row per part.
- Notes (Hansen): only original text + English translation (Leiden as in DDbDP; AI-drafted
  translations). Done for all 448 rows. Pipeline: scratchpad tbuild.py/TRANSLATE.md/tcheck.py.
- Place rule (Hansen, in codebook.md): place + region/province at the time ("Oxyrhynchus,
  Egypt", "Sinary (Oxyrhynchite nome), Egypt"; Dura = "Parthian Empire" before c. 165).
- Formats used (not yet in codebook.md, awaiting Hansen): interest as formula + % ("1 drachma
  per mina per month (1% per month)"; "interest-bearing (rate not stated)"); duration as
  stated; names "X son of Y", Latinized; empty interest when none stated; source in Checklist
  form (journal first editions "ZPE 222 (2022) 179").
- Coordinator decisions awaiting Hansen: prochreia (advance loans in leases) included; a
  separate loan mentioned inside a contract gets its own row only if called a loan with its
  amount; letters asking for /
  instructing a loan not shown to be made excluded; crossed-out contracts included.
- Next candidates: loans HGV does not tag (search Greek texts for loan wording); Ptolemaic
  and later periods. Also open: crediting idp.data (CC BY) on the site.

## Status
- PENDING (Hansen): run `year_ranges.sql` (scratchpad; migration to schema v0.3 = year ranges, + year updates) in the SQL Editor. schema.sql/codebook.md already describe v0.3. Then insert 31 new rows (newrows.sql: commodity parts + earlier loans named as loans).
- Notes = original text + English translation (Hansen's decision); AI-drafted translations.
- Supabase project ref `zzlrdlkdngxkkcrtolpx`; URL + publishable key set in `docs/config.js`.
- Live DB = `schema.sql` v0.2 (migration `ald_schema_v0_2`; earlier migrations belong to
  removed schemas). Verified: 1 table, RLS on, SELECT-only "public read" policy; anon has
  SELECT only (no insert/update/delete grants). 448 rows (see Current phase).
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
