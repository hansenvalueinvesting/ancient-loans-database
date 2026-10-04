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
- DB: 479 rows (ALD-000001-000479; 449-479 = commodity parts and earlier loans found by the every-transaction review). 932 documents reviewed: 439 included, 493 excluded
  (receipts/cancellations 168, state seed grain 109, too fragmentary 57, no text 39,
  deposits 37, registers/abstracts 30, court 10, duplicates 6, other 37). Review log
  (CSV, per document) was sent to Hansen; it is not in the repo (repo holds no data).
- Year (Hansen): uncertain years as ranges ("AD 101-200"; alternatives -> span), from HGV,
  unless the loan itself is dated differently. Live (173 ranges).
- Inclusion rule (Hansen, in codebook.md): every loan transaction, none missed, none repeated:
  contracts (money or kind), loans in petitions/letters, earlier loans a document calls loans.
  Money + goods in one contract = one row per part.
- Notes (Hansen): only original text + English translation (Leiden as in DDbDP; AI-drafted
  translations), headed "Original Text:" and "English translation:". Done for all 448 rows.
- Duration dates (Hansen; academic convention): original dating, then BC/AD in brackets:
  "Phamenoth 30, year 10 of Antoninus (= 26 March AD 147)". Day -> Julian date; Egyptian month
  -> Roman month pair ("(= May/June AD 146)"); regnal year -> "(= AD 146/147)". Done (294 rows).
  Emperor always named, unambiguously (Hansen): Caesar -> Augustus, Antoninus -> Antoninus Pius,
  Antoninus and Verus -> Marcus Aurelius and Lucius Verus; HGV alternative dates -> all reigns
  given ("of Claudius or Nero (= AD 51/52 or AD 65/66)"); unknown -> "(emperor not named)".
  Open: ALD-000001 (P.Oxy. 3 507) dating formula names Marcus Aurelius (= AD 169) but HGV and
  the year field say AD 146 (Antoninus Pius). Honorific months: Sebastos (Eusebeios) = Thoth, Soter = Phaophi (Gaius/Claudius),
  Domitianos = Phaophi, Neos Sebastos = Hathyr, Neroneios = Choiak, Hadrianos = Choiak,
  Theogeneios = Tybi, Germanikeios = Pachon, Soterios = Payni (Domitian), Drousieus = Epeiph,
  Kaisareios = Mesore. Undatable year (uncertain document date) stays relative ("of the current year").
- Amounts (Hansen): fractions, never decimals ("12 1/6"); talents converted at 6,000 dr., obols at 6 per drachma.
- Audit vs the Greek (Hansen: correct anything that doesn't match): all rows checked; 96 field
  corrections applied (interest-bearing loans, names, amounts, durations, places). Partial names as "[...]eles son of X".
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

## Next (handoff)
- Hansen: finish Roman Egypt, exactly as the first pass was done: find DDbDP texts dated
  30 BC - AD 284 containing loan vocabulary (δαν-, χρῆσις/χρήσ-, ἔντοκ-, προχρ-) that are not in
  `reviewed.md` (sparse clone of idp.data), then the same steps: extraction against codebook.md,
  second pass for missed loans, original text + translation, audit of every field against the
  Greek, insert, verify. Working scripts stay in the scratch folder; do not add tools to the repo.
- Do not change inclusion rules, the codebook or formats without Hansen's explicit instruction in
  the conversation; raise questions with Hansen instead of deciding them.
- Record every reviewed document in `reviewed.md` (Hansen's tracking file; keep its Coverage table
  current).
- Repo also holds `reviewed.md` (review ledger) at Hansen's request.
- `.claude/settings.json` allows `mcp__Supabase__execute_sql` without prompts (new sessions).
- Database reads can also use the public REST API (curl with the key in docs/config.js).

## Status
- Notes = original text + English translation (Hansen's decision); AI-drafted translations.
- Supabase project ref `zzlrdlkdngxkkcrtolpx`; URL + publishable key set in `docs/config.js`.
- Live DB = `schema.sql` v0.3 (year ranges, amount = text fractions; run by Hansen in the SQL Editor). Base migration `ald_schema_v0_2`; earlier migrations belong to
  removed schemas). Verified: 1 table, RLS on, SELECT-only "public read" policy; anon has
  SELECT only (no insert/update/delete grants). 479 rows (see Current phase).
  Migrations since v0.2: `add_loans_notes`, `year_as_bc_ad_text`, `six_digit_ids`; `date`
  dropped by Hansen.
- Advisor: 2 WARN on `public.rls_auto_enable()` (Supabase's auto-enable-RLS event trigger,
  not part of schema.sql). Left as is.
- Destructive SQL via the Supabase MCP needs approval that cannot appear in cloud
  sessions; Hansen runs such statements in the SQL Editor. Inserts work via MCP.
- Site (`docs/`): main page = catalogue tree under "All loans" (Time period by century |
  Location: region > place | Currency: Coinage (list COINAGE in app.js) / Commodity (all other) > currency, side by side, counts from view `loan_catalogue`,
  migration `loan_catalogue_view`); a node (URL hash, e.g. #period=2) loads only its loans,
  without notes. Table of all fields except notes (ID links to `loan.html?id=…`,
  source linked when source_url set), filters (search, place, currency, year range),
  sorting, CSV download (fetches notes for the selection). Year filter hints show the earliest and latest year
  on record. `loan.html` shows every field incl. notes.
  Browser-tested with mock data.
- `release.yml` exports `loans` as CSV. `SUPABASE_DB_URL` secret untested until first tag.
- Supabase connected to Claude as a claude.ai connector (MCP); use it for all data entry.
- Pending (Hansen): GitHub Pages source must be `main` / `/docs`.

## Working rules
- Work on `main`; commit directly as you go.
- Start simple; build step by step with Hansen. Do nothing without explicit instruction.
- Be concise and organized.
