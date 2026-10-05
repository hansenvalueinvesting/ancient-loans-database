# The Ancient Loans Database (ALD)
Created and maintained by Hansen Zheng.

## Purpose
A systematic, standardized record of every documented loan in the ancient world, for scholars
to search, compare and analyze ancient credit. Started with Roman Egypt (papyri); the method
below applies to any source as the database expands.

## Working rules (read first)
- Hansen decides. Do only what Hansen asks in the conversation. Start simple; build step by step.
- Never change inclusion rules, `codebook.md`, field formats or the schema on your own. If a
  source raises a question the rules do not answer, ask Hansen; do not decide it and do not label
  your own choices as Hansen's.
- Do not add tools, scripts or data files to the repo. Working files live in the session's
  scratch folder (they are lost when the session ends, so record results in the database and
  `reviewed.md`).
- Work on `main`; commit and push directly to `main` (Hansen, Oct 2026). Be concise and organized.
- Only one session should write to the database at a time.
- Keep this file current: when Hansen decides something, record it here (and in `codebook.md` if
  it concerns a field).

## Architecture
- **Supabase (Postgres)**: the only home of the data. Project ref `zzlrdlkdngxkkcrtolpx`.
  Use the Supabase connector (MCP `execute_sql`) for inserts/updates; `.claude/settings.json`
  allows it without prompts. Reads can also use the public REST API (curl with the publishable key
  in `docs/config.js`). Destructive SQL (drop, alter type) cannot be approved in cloud sessions:
  give Hansen a short SQL file to run in the Supabase SQL Editor.
- **Repo** = publication only: `docs/` (GitHub Pages site), `schema.sql`, `codebook.md`,
  `reviewed.md` (review ledger). No data.
- Site: plain HTML + `docs/app.js`, no CSS (Hansen's preference). Main page = catalogue tree under
  "All loans": Time period (centuries) | Location (region > place) | Currency (Coinage / Commodity,
  list `COINAGE` in app.js), side by side; counts from view `loan_catalogue`; a node (URL hash,
  e.g. `#period=2`) loads only its loans, without notes. `loan.html` shows one loan incl. notes.
- Releases: pushing tag `vX.Y` runs `.github/workflows/release.yml` (CSV export, secret
  `SUPABASE_DB_URL`, untested until first tag).
- Schema: `schema.sql` (v0.3) is a one-time setup script; never re-run it. Schema changes =
  `ALTER` statements (run by Hansen) + update `schema.sql`, `codebook.md`, `docs/app.js`.

## Data standards
- Follow `codebook.md` exactly. One table `loans`, one row per loan. Fields: id, year, place,
  amount, currency, borrower, lender, interest, duration, source, source_url, notes (+ generated
  year_sort). Nothing else is collected (Hansen).
- Everything recorded must be true and verifiable in the source; empty = unknown; never guess.

### What counts (Hansen)
A ledger of loans actually made (Hansen, Oct 2026): every loan transaction a source documents,
none missed, none repeated, each individual loan separately. The text need not say "loan";
judge from the text whether a loan was actually made:
- loan contracts, in money or in kind (incl. acknowledgements, antichretic and paramone loans,
  mortgage loans, copies and drafts, crossed-out contracts, advance loans called a loan);
- loans mentioned in petitions or letters;
- earlier or other loans a document calls loans, incl. loans it annuls or replaces (amount may be
  lost);
- a contract lending money and goods (or two goods) = one row per part (not the "price of" goods
  sold on credit, not interest or penalties).
Excluded: repayment receipts and cancellations (except an earlier loan they name), accounts,
court proceedings, deposits not called a loan, sales with deferred delivery not called a loan,
state seed-grain grants, requests for a loan not shown to be made, texts too fragmentary to show
a loan. A loan already in the database is never entered again.
Hansen (Oct 2026, Ptolemaic pass):
- registers and abstracts of contracts: their individual loans ARE included ("keep these");
- court papers (summonses, witness statements, proceedings): excluded unless the text plainly
  shows a specific loan not already recorded;
- state loans of grain to cultivators (δάνειον εἰς κάτεργον etc.): excluded, like seed grain;
- not called a loan -> skipped: pawns, loans of animals or tools for use, advances for work or
  freight, debt acknowledgements, antichretic leases ("basically rent").
(Roman Egypt registers excluded earlier are not re-reviewed unless Hansen asks.)
Hansen (Oct 2026, loan audit): a row needs a loan shown by the PRESERVED text (loan wording or
the standard "I have from you ... I will repay" acknowledgement outside the editor's brackets);
advances (πρόχρησις, προχρεία) and debts (ὀφείλω) not called a loan are excluded everywhere,
superseding the earlier OKs for advances outside leases and the O.Claud. receipts.
Hansen (Oct 2026): the WORD does not decide. "Whether or not we count it as a loan depends on
whether the transaction itself is a loan", whether or not the text uses the word for loan
(e.g. work payments called δάνειον are payments for a service, not loans).

### Field formats (as used in all 479 rows)
- **year**: from the document's date (for papyri: HGV). Certain year `AD 57` / `100 BC`;
  uncertain = full range of possible years `AD 101-200`, `24-23 BC`, `30 BC-AD 14`
  (alternative dates -> span from earliest to latest). An earlier loan named in a document gets
  the year it was made (Hansen: always the year the loan was made; uncertain = range). If the
  text gives no date for the loan at all, keep the document's year (the year it is recorded).
- **place**: where the loan was made, then the region/province at the time: `Oxyrhynchus, Egypt`,
  `Tebtunis (Arsinoite nome), Egypt`, `Arsinoe, Egypt`, `Arsinoite nome, Egypt`; keep a "(?)"
  doubt; Dura = `Parthian Empire` before c. AD 165.
- **amount**: the principal as written; whole number or fraction in lowest terms, never decimals
  (`100`, `12 1/6`, `2/3`; 1 1/2 1/5 = `1 7/10`). Never convert currency (Hansen, Oct 2026): keep
  the unit(s) the document uses; a sum in several units follows the document, each number with
  its unit: `2 talents 4800 drachmas`, `53 drachmas 2 obols` (currency `talent; drachma`,
  `drachma; obol`). Lost, or wholly restored by the editor -> empty. Preserved part with more
  lost -> preserved part + ` [...]`: `1 [...]` (Hansen, Oct 2026: "keep 1 talent, but indicate
  that there is more missing"); generally `[...]` where the loss is: `[...] 45`,
  `2 talents 2000 [...] drachmas` (Hansen). Sum written only with the interest included
  ("with the half") -> the sum as written (Hansen: "follow what the original text says").
- **currency**: singular, lowercase: `drachma`, `denarius`, `talent`, `artaba (wheat)`,
  `keramion (wine)`; several units `talent; drachma`. Record whatever the source says (Hansen,
  Oct 2026): a metal the source names goes in brackets, `drachma (copper)`, `talent (copper)`,
  `stater (gold)`.
- **borrower / lender**: Latinized English names (Dioscorus, Sarapion, Aurelius Theon),
  `X son of Y` / `X daughter of Y`, `alias Z`; several people separated by `; `. Partly
  preserved: `[...]eles son of Acusilaus`. Wholly lost: empty. A name restored by the editor
  counts as given. No titles or occupations.
- **interest**: formula then percentage: `1 drachma per mina per month (1% per month)`,
  `3 obols per mina per month (½% per month)`, `one-half (50%)`; `interest-bearing (rate not
  stated)` (e.g. ἔντοκος without a rate); `interest-bearing (rate lost)`; `interest-free` only if
  the text says so; empty if none stated. Penalty interest is not the loan's interest.
- **duration**: the term as the document writes it, each date followed by its BC/AD equivalent:
  `until Payni, year 16 of Hadrian (= May/June AD 132)`, `until Phamenoth 30, year 20 of
  Antoninus Pius (= 26 March AD 157)`, `6 months`. Day -> Julian date; Egyptian month -> Roman
  month pair; regnal year -> `AD 146/147`. Emperor always named unambiguously (Caesar ->
  Augustus, Antoninus -> Antoninus Pius, Antoninus and Verus -> Marcus Aurelius and Lucius
  Verus); several possible reigns -> all given; none -> `(emperor not named)`; undatable stays
  relative (`of the current year`). Honorific months: Sebastos = Thoth, Soter = Phaophi,
  Domitianos = Phaophi, Neos Sebastos = Hathyr, Neroneios = Choiak, Hadrianos = Choiak,
  Theogeneios = Tybi, Germanikeios = Pachon, Soterios = Payni, Drousieus = Epeiph,
  Kaisareios = Mesore. A goods row shares the duration of the money row of the same contract.
  Ptolemaic kings and queens in standard form (`year 5 of Ptolemy III Euergetes`). Convert dates
  as the evidence allows (Hansen: "convert it however makes sense"); anything not properly
  identifiable stays blank (no equivalent given).
- **source**: standard citation (papyri: Checklist form, arabic volume numbers): `P.Oxy. 3 506`,
  `BGU 1 101`, `SB 6 9109`, journal first editions `ZPE 222 (2022) 179`.
- **source_url**: the online edition (papyri: `https://papyri.info/ddbdp/<ddb id>`).
- **notes**: two sections, then the credit line (Hansen):
  ```
  Original Text:
  <the original text, line by line with line numbers, copied exactly from the edition in its
  Leiden notation: [ ] restored, ( ) expanded, ⟦ ⟧ deleted, ⟨ ⟩ added, { } surplus, [...] lost>

  English translation:
  <faithful translation of exactly that text; lost text as [...]; uncertain words marked (?)>

  Original text: Duke Databank of Documentary Papyri (DDbDP); metadata: Heidelberger
  Gesamtverzeichnis der griechischen Papyrusurkunden Ägyptens (HGV); via papyri.info
  (github.com/papyri/idp.data), licensed CC BY 3.0.
  ```
  Whole text normally; if a sheet holds several unrelated documents, only the lines of the
  loan's document. All rows from one document share its note.

## Method (repeatable for any source)
1. **Source.** Use an open digital corpus with original texts and metadata (Roman Egypt:
   github.com/papyri/idp.data, CC BY 3.0, DDbDP texts + HGV metadata; papyri.info itself has a
   bot check). Check reachability first (trismegistos.org: TLS issue; quod.lib.umich.edu:
   blocked). Add the corpus to the Coverage table in `reviewed.md`.
2. **Candidates.** Select documents in scope (period, place) by metadata tags (e.g. HGV
   "Darlehen" or a title with "loan") and by full-text search for loan vocabulary (Greek:
   δαν-, χρῆσις/χρήσ-, ἔντοκ-, προχρ-; accent-insensitive). Drop every document already in
   `reviewed.md`.
3. **Extraction.** Subagents read the original text of each candidate (batches of ~25; render
   the edition faithfully, never regularize spellings or add numeral values) and return per
   document: include/exclude, reason, and loan rows in the formats above. Translations are aids
   only; the original text decides.
4. **Completeness pass.** A second pass per included document for loans the first pass missed:
   goods lent alongside money, earlier loans the text calls loans. Never duplicate.
5. **Notes.** Subagents produce the original text (copied by script from the rendered edition,
   never retyped) and an English translation. Check by script that every line of the original
   text appears in the source. Build the note in the format above.
6. **Audit.** Subagents check every field of every row against the original text and correct
   real mismatches (names, patronymics, amounts, interest, duration, place). Reject guesses
   (wholly restored amounts, inferred names or roles). Unclear cases go to Hansen.
7. **Insert.** Plain SQL `INSERT` via the connector, in large batches. IDs are assigned by the
   database. Insertion order is not batch order (rows were inserted by date), so key later
   updates by id or by source_url + a check value, never by assumed order.
8. **Verify.** After every write: row counts, and md5 of each note against the expected text
   (text copied through agents can lose or alter characters; private-use characters from the
   edition are dropped in transfer). Fix mismatches.
9. **Record.** Add every reviewed document to `reviewed.md`, one row per HGV record (included
   with its ALD IDs, or excluded with the reason) and update its Coverage table; update the status below; commit.

## Status
- DB: 770 rows (ALD-000001 to 000837, with gaps). Loan audit (Oct 2026, Hansen): all 835 rows
  read against the original text; 66 removed (64 not shown to be a loan: loan wording only in the
  editor's restoration, advances, debts not called a loan, deposit/credit sale/pledge, too
  fragmentary; 2 duplicates: ALD-000649, 651); 87 field fixes (amounts with `[...]`, restored
  rates/units/names emptied, missing years); ALD-000475 had been wrongly deleted (ZPE 199 (2016)
  150 names two 120-dr. loans) and was re-added as ALD-000837. SQL run by Hansen, verified.
  67 rows kept with only the loan word preserved (audit category B).
  Hansen kept the B rows for now and skipped all 5 extra-loan candidates found by the fix pass
  (P.Cair. Zen. 4 59549 and P.Col. 3 24 "burning" sums: "more like payments for a service";
  P.Michael. 9 200 dr.; SPP 22 83 second entry; P.Flor. 3 316 15 artabas). Schema v0.3 (year ranges; amount = text fraction).
  View `loan_catalogue` for the site. RLS on, public SELECT only.
- Done: Roman Egypt (30 BC - AD 284), HGV records tagged as loans: 932 documents reviewed,
  440 included, 492 excluded (see `reviewed.md`). Notes, durations, audit (96 corrections) done
  for all rows.
- Done (Oct 2026): Roman Egypt full-text pass: 549 further documents reviewed, 117 included
  (ALD-000480 to 000614, 135 rows), 432 excluded (see `reviewed.md`). Original rules kept;
  creditor-word-only rows and advances outside leases inserted at Hansen's OK.
- Next (Hansen, Oct 2026): Ptolemaic Egypt first (332-30 BC; same method: 355 HGV records tagged
  as loans, then a full-text pass, ~212 candidates), then the Roman world outside Egypt, then
  Late Antique Egypt. Language does not matter (Hansen): Demotic and other texts are included,
  with original text and English translation, from the primary source or its documentation.
  Batch 1 (25 docs) approved by Hansen; BGU 6 1246 skipped (Hansen); accounts, registers and
  state seed loans that mention a loan stay excluded (as in Roman Egypt). Ptolemaic currency:
  `drachma (silver)` / `drachma (copper)` etc. as the text says; Macedonian-month terms get no
  equivalent; Egyptian-calendar terms converted with the wandering calendar when the document's
  date is exact.
- Done (Oct 2026): Ptolemaic Egypt, HGV records tagged as loans: 361 documents reviewed, 189
  included (ALD-000615 to 000836, 222 rows), 172 excluded (incl. P.Dion. 20, BGU 10 1981,
  P.Dion. 11, P.Oxy. 14 1644: possible duplicates / loan not shown to be made, skipped by
  Hansen; see `reviewed.md`). Notes (original text + translation),
  audit and md5 checks done; 53 Egyptian-calendar terms converted (wandering calendar, regnal
  epochs; checked against the loan year). Loan acknowledgements ("I have from you ... I will
  repay") counted as loans; debt acknowledgements (ὀφείλημα) not. Next: Ptolemaic full-text
  pass (~212 candidates), then Demotic texts (need an open source).
- Hansen decisions (Oct 2026): amounts of BGU 4 1132, CPR 1 203, P.Oxy. 12 1473 kept as is;
  "Muziris, India" kept; ALD-000001 dated by HGV/BL (loan AD 146 under Antoninus Pius; l. 41
  titles of Marcus Aurelius are a later addition, BL I 325) -> duration fixed to Antoninus Pius.
- Done: loan-year check of all 614 rows: 24 rows set to the year the loan was made (ALD-000078,
  120-124, 209, 220, 225, 232, 332, 354, 358, 386, 467, 491, 499, 523, 550, 555, 568, 577, 592,
  603), plus ranges from textual evidence for 9 undated earlier loans (ALD-000229, 347, 355,
  442, 482, 552, 584, 595, 602) and ALD-000582 (AD 183-184); ALD-000260 kept HGV's AD 138-177.
  The other 63 undated earlier loans keep the document's year (Hansen).
- Hansen (Oct 2026): date conflicts -> HGV date (ALD-000128 AD 89, term adjusted; ALD-000217
  kept); the six O.Claud. receipts (ALD-000271, 273, 280, 287, 298, 371) kept; no re-review of
  excluded documents under the new rule; credit line added to all notes (Hansen, SQL Editor).
- Fixed: ALD-000464's note now holds lines 1-13 of BGU 4 1150 (its own 1,000-dr. loan; run by
  Hansen in the SQL Editor, verified). Note updates via the connector time out (approval
  prompt); give Hansen SQL for those.
- `reviewed.md` cleaned up (Oct 2026): HGV column added (one row per HGV record, no ambiguous
  repeats), editions written as in the database's `source`; BGU 4 1150 I (18597a) marked included
  with ALD-000464 (the earlier loan its receipt names).
- No-conversion fix (Oct 2026): 12 rows put back into the document's units (ALD-000078, 187, 201,
  244, 427, 444, 465, 554, 576, 580, 592, 603); amount check widened for sums in several units
  (run by Hansen in the SQL Editor, verified). Rows written in drachmas with a talent equivalent
  (ALD-000012, 237, 364, 445, 448) keep drachmas.
- GitHub Pages source is `main` / `/docs` (Hansen confirmed).
- Advisor: 2 WARN on `public.rls_auto_enable()` (Supabase's own trigger, not ours). Left as is.
