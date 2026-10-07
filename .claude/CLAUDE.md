# The Ancient Loans Database (ALD)
Created and maintained by Hansen Zheng.

## Purpose
A systematic, standardized record of every documented loan in the ancient world, for scholars
to search, compare and analyze ancient credit. Started with Roman Egypt (papyri); the method
below applies to any source as the database expands.

## Working rules (read first)
- Hansen decides. Do only what Hansen asks in the conversation. Start simple; build step by step.
- Never change inclusion rules, `reference/codebook.md`, field formats or the schema on your own. If a
  source raises a question the rules do not answer, ask Hansen; do not decide it and do not label
  your own choices as Hansen's.
- Do not add tools, scripts or data files to the repo. Working files live in the session's
  scratch folder (they are lost when the session ends, so record results in the database and
  the README change log).
- Work on `main`; commit and push directly to `main` (Hansen, Oct 2026). Be concise and organized.
- Only one session should write to the database at a time.
- Keep this file current: when Hansen decides something, record it here (and in `reference/codebook.md`
  if it concerns a field). Log every data change in the README change log, most recent first (Hansen, Oct 2026).

## Architecture
- **Supabase (Postgres)**: the only home of the data. Project ref `zzlrdlkdngxkkcrtolpx`.
  Use the Supabase connector (MCP `execute_sql`) for inserts/updates; `.claude/settings.json`
  allows it without prompts. Reads can also use the public REST API (curl with the publishable key
  in `docs/config.js`). Destructive SQL (drop, alter type) cannot be approved in cloud sessions:
  give Hansen a short SQL file to run in the Supabase SQL Editor.
- **Repo** = publication only: `README.md` (brief description + change log), `docs/` (GitHub
  Pages site), `reference/` (`schema.sql`, `codebook.md`). No data. The review ledger
  `reviewed.md` was removed (Hansen, Oct 2026); its last version is in git history
  (`git show 4d2672d:reviewed.md`).
- Site: plain HTML + `docs/app.js`, no CSS (Hansen's preference). Main page = one catalogue tree
  under "All loans" (Hansen, Oct 2026): ruling power > region > period (only where a region has
  several) > century, earliest first, "Period unknown" last; counts from view `loan_catalogue`; a
  node (URL hash `#era=Roman/Egypt&c=2`) loads only its loans, without notes; Place / Currency /
  Period / year filters and search on the loan list. `loan.html` shows one loan incl. notes.
  Historical period (Hansen, Oct 2026: "add it in front of everything, and make it filterable";
  "always classify into one thing"; Early/Late Roman Egypt): column `period` (plain text, set at
  insert). Helper SQL function `loan_period(year, region)` gives it (e.g. `loan_period('AD 57',
  'Egypt')`): periods per region with date limits, a range gets the period covering most of it.
  Egypt: Ptolemaic Egypt (332-31 BC), Early Roman Egypt (30 BC-AD 284), Late Roman Egypt
  (285-618, 629-641), Sasanian Egypt (619-628, Persian occupation), Early Islamic Egypt (642-868);
  Roman <region>, Nabataean/Roman Arabia (106), Late Roman / Early Islamic Palaestina (637),
  Late Roman Thracia, Parthian Empire, India; Greek world: Archaic/Classical/Hellenistic Greece then Roman Achaea
  (146 BC), Roman Macedonia, Achaemenid/Hellenistic Asia Minor, Roman Asia (133 BC), Classical/Hellenistic Black Sea
  and Sicily, Roman Sicily (241 BC), Roman Bithynia, Roman Africa, Roman Dacia, Late Period Egypt. A new region
  needs a line in `loan_period` (apply_migration works for additive DDL). Table: ID, Period, ...; Period filter.
- Releases: pushing tag `vX.Y` runs `.github/workflows/release.yml` (CSV export, secret
  `SUPABASE_DB_URL`, untested until first tag).
- Schema: `reference/schema.sql` (v0.3) is a one-time setup script; never re-run it. Schema changes =
  `ALTER` statements (run by Hansen) + update `reference/schema.sql`, `reference/codebook.md`, `docs/app.js`.

## Data standards
- Follow `reference/codebook.md` exactly. One table `loans`, one row per loan. Fields: id, year, place,
  amount, currency, borrower, lender, interest, duration, source, source_url, notes (+ generated
  year_sort, period). Nothing else is collected (Hansen).
- Everything recorded must be true and verifiable in the source; empty = unknown; never guess.

### What counts (Hansen)
STANDING RULE (Hansen, Oct 2026; supersedes everything below where they differ): "for a loan to be
registered, it has to be precisely an individual loan contract"; "a loan has to be a loan, not a trade,
lease, or anything else. it has to formally be a loan"; applied to the entire database ("do it for the
entire database"). A row needs: (1) the text formally records a loan (loan contract or acknowledgement,
loan register entry, or a text stating this loan was lent/borrowed); (2) not a sale, lease (incl.
habitation/antichretic lease), advance (προχρεία, πρόχρησις) not called a loan, deposit, pledge, debt or
debt acknowledgement not called a loan, treasury payment, transfer between public funds, gift,
contribution, old debt restated; (3) one individual loan (no totals, no fund portions of one contract);
(4) borrower, lender and principal given (partly preserved acceptable). Antichretic/paramone LOANS that
are formally loans with the principal repaid stay. Audit (Oct 2026): 643 rows removed (555 lacking a
party or principal, 88 not formally individual loans; run by Hansen, verified); 801 rows remain.
STANDING RULE (Hansen, Oct 2026, supersedes the detailed rules below where they differ): "the only
standing rule is to record transactions that are strictly loans. loans are financial arrangements
where an entity provides money to another with the expectation of repayment over time, often
including interest as a cost of borrowing." -> cash advances repaid in money (προχρεία) count.
Loans in kind and rows whose currency is lost: "keep all these loans for now" (Hansen, Oct 2026).
STANDING RULE (Hansen, Oct 2026): follow the formal ways of academia; historical periods "however
[they] are academically defined".
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
Definition (Hansen, Oct 2026): a loan is when someone BORROWS money (or goods) from a lender with
the intention of returning it, with or without interest. Exchanges (trades) where one party pays
for a good or a service are not loans, whatever they are called. Pawns, antichretic leases and
debt acknowledgements are not loans in substance (Hansen).
Hansen (Oct 2026, Ptolemaic full-text pass): "exclude all the ones where there isn't an obvious
"loan" transaction, as in money being lent and expected to return" (bare loan words with no
amount, unclear whether a borrowing, unnamed lenders that may be the estate or the state).

Hansen (Oct 2026, Roman world): "just go through everything, make your own decisions. the goal is
to have a record of every loan transaction where money is being lent in antiquity." Decisions taken
by Claude under that grant (Roman-world pass):
- documents and inscriptions only at that stage (literary sources added later, see Status); Late Antique (after AD 284) left for
  its own step;
- cash paid out at the borrower's request and owed back (expensilatio, "numeratos accepit", wax
  tablets) = loan; balances of old accounts restated (TPSulp. 68), pawns (CIL 4 8203/8204),
  foundations whose capital is to be lent in future, debt-only texts: excluded;
- alimentary tables (Veleia, Ligures Baebiani): first entered, then removed: Hansen (Oct 2026):
  "these are not loans" (perpetual obligations, capital not repaid);
- notes from inscriptions carry their source's licence in the credit line: EDH (CC BY-SA 4.0),
  EDR (CC BY-NC-SA 4.0); source_url = the EDH/EDR record; Sulpicii tablets cited `TPSulp. N`,
  Herculaneum `TH2 N`.

### Field formats (as used in all 479 rows)
- **year**: from the document's date (for papyri: HGV). Certain year `AD 57` / `100 BC`;
  uncertain = full range of possible years `AD 101-200`, `24-23 BC`, `30 BC-AD 14`
  (alternative dates -> span from earliest to latest). An earlier loan named in a document gets
  the year it was made (Hansen: always the year the loan was made; uncertain = range). If the
  text gives no date for the loan at all, keep the document's year (the year it is recorded).
- **place**: where the loan was made, ancient name only, no region (Hansen, Oct 2026: "just
  "Oxyrhynchus" would be sufficient, since we also have the historical period"): `Oxyrhynchus`,
  `Tebtunis (Arsinoite nome)`, `Arsinoite nome`; keep a "(?)" doubt. Always the ancient name
  (Hansen: "lets stick with the ancient names ... follow this moving forward"), Latinized like
  personal names (`Heracleopolis`, `Heraclea`, `Acoris`, `Ancyron`, `Crocodilo`, `Engaddi`);
  Greek-phrase village names keep their standard form (`Soknopaiou Nesos`); only a modern site
  name known -> the ancient district or empty. Never modern names.
- **period**: who ruled the place at the time (see Architecture); one value per loan.
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
   blocked).
2. **Candidates.** Select documents in scope (period, place) by metadata tags (e.g. HGV
   "Darlehen" or a title with "loan") and by full-text search for loan vocabulary (Greek:
   δαν-, χρῆσις/χρήσ-, ἔντοκ-, προχρ-; accent-insensitive). Drop every document already in
   the database (`source`) or in the old ledger (`git show 4d2672d:reviewed.md`).
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
9. **Record.** Add a README change-log entry (ranges, not one line per loan: "Added
   ALD-XXXXXX - XXXXXX: <corpus, place, period>"; removals with their IDs); update the status
   below; commit.

## Status
- DB: 811 rows (ALD-000001 to 001669, with gaps; ALD-001607 Hirrius' eels removed, Hansen: not a loan), after the formal-loan audit (Oct 2026; IDs in the README
  change log), the Late Antique full-text pass and the Early Islamic Egypt pass.
- Done (Oct 2026, Hansen: "go for what you recommend": Egypt after 641, then cuneiform): Early Islamic Egypt pass:
  106 DDbDP papyri dated (partly) AD 642-900, not reviewed before (85 HGV loan-tagged, 21 by loan vocabulary);
  formal-loan rule; 4 rows (ALD-001666 to 001669; Coptic acknowledgements "you gave me ... I will repay" counted
  as loans). 44 loan-tagged HGV records have no DDbDP text (mostly Coptic; not covered). Excluded by the rule (Hansen
  may revisit): P.Ness. 3 55 (taxes paid by Georgius for Sergius, acknowledged and to be repaid; not called a loan),
  P.Michael. 35 ("loan or advance sale of crop", repaid in wheat), P.Gen. 4 196 (53 solidi, lender lost), SPP 3.2
  Elias wheat notes (HGV "Schuldschein"; no lending or repayment). Next: cuneiform (CDLI).
- Done (Oct 2026): Roman writing tablets from Britain, RIB Online (romaninscriptionsofbritain.org, CC BY 4.0):
  Tab.Lond.Bloomberg and Tab.Vindol. (876 pages), 186 with loan/debt vocabulary read under the formal-loan rule:
  no qualifying loan. Closest (Hansen may revisit): Tab.Lond.Bloomberg 55 (cancelled loan note, Narcissus slave
  of Rogatus to Atticus, sum lost), 44 (105 denarii owed for goods sold = credit sale), 61/56 (loan-note
  formulae, parties and sum lost), Tab.Vindol. 190 / 193 (account entries "mutuo"). No data change.
- Done (Oct 2026): Greek literary texts outside Perseus: First1KGreek (OpenGreekAndLatin, CC BY-SA), works
  not in Perseus, 1,200 passages with loan vocabulary; scholia, medical, astrological, lexical, commentary and
  fiction authors set aside; 409 read under the formal-loan rule: no qualifying loan (closest: Theodoret, Hist.
  rel. 17, Abraames borrows 100 solidi at Emesa from unnamed acquaintances; Polyaenus 8.23, Caesar borrows
  from the Milesians, no sum). No data change.
- Done (Oct 2026, Hansen: "let's put a focus on greco roman period ones"): Late Antique Egypt full-text pass:
  383 papyri dated AD 285-641 with loan vocabulary, not tagged as loans, not reviewed before; formal-loan rule;
  6 documents, 7 rows (ALD-001659 to 001665). Excluded by the rule (Hansen may revisit): P.Mert. 2 91 (sums
  "in writing and without writing", possibly several loans), P.Ross.Georg. 5 31 (delivery contract with
  advance), P.Charite 33 / P.Bad. 6 173 / P.Heid. 7 401 / P.Köln 13 545 (party unclear), advances (προχρεία)
  repaid in money (P.Würzb. 2 44, P.Prag. 1 34, P.Köln 2 102), loan entries in accounts. Notes verified by md5.
  Long notes: write U& chunks of ~300 characters with every character escaped (a safety filter interrupts
  long escaped strings copied by agents). `note_stage` dropped. Counts in the passes below are before this audit.
- Done (Oct 2026, Hansen: "yeah, do it all. just put down every individual loan transaction you find"):
  Greek inscriptions, literary sources, Dacian tablets. Decisions taken under that grant:
  - Greek inscriptions: PHI texts via the Stoicheia dataset (huggingface.co/datasets/Ericu950/Inscriptions_2;
    PHI site itself blocked; no line divisions; no open licence asserted, credited to PHI) and I.PHI metadata
    for citations (`PHI <n>` where none); source_url = inscriptions.packhum.org/text/<n>. 959 candidates
    (δαν-, τόκ-, χρε-, ἐπὶ λύσει, ὑποκειμ-, ἐρανιστ-), extraction + independent review: 98 documents,
    299 rows (ALD-001258 to 001556). Horoi count only if they name a loan or eranos (security-only horoi
    excluded, 183); promises/future loans, advances (προχρ-, προεισ-), remissions, aggregates of unnamed
    loans, loan words wholly restored, interest-only entries excluded; one row per loan in Delian and other
    loan registers; duplicate PHI editions kept once; interest only as written (no computed rates);
    long accounts: note holds only the loan passages. 𐅂 = one-drachma sign (value 1).
  - Literary: Perseus canonical-greekLit/latinLit (CC BY-SA 4.0), 2,559 passages with loan vocabulary
    (excerpts around hits; coverage limited to Perseus texts and these words). Kept: specific loans actually
    made, at least one identified party, reported as fact (speeches, letters, histories); dropped: fiction,
    myth, examples, general practice, aggregates, forced levies/seizures, bribes, promises. One row per loan
    across all passages; source = main passage (`Dem. 35.10`), source_url = scaife.perseus.org reader URL;
    note = the passages + translation. 100 rows (ALD-001557 to 001658 with the 2 Dacian rows).
  - Dacian tablets: The Roman Law Library (droitromain.univ-grenoble-alpes.fr) gives CIL III tablet texts;
    2 loans (TC III Deusara, TC V Alburnus Maior, AD 162: ALD-001625, 001626); TC XII (deposit) and TC XIII
    (partnership) excluded.
  - Periods added to `loan_period` (regions Greece, Macedonia, Asia Minor, Black Sea, Sicily, Bithynia,
    Africa, Dacia; Late Period Egypt). Rows without year or place have no period (122 of the new rows).
  - Open for Hansen: security-only horoi (prasis epi lysei) and the Delian loans whose heading is restored
    were excluded; repayment-only entries naming earlier loans (secondary lists) not entered.
  Gaps: Greek inscriptions not in PHI, literary texts outside Perseus, Demotic.
- Done (Oct 2026): Late Antique Egypt (AD 284-641), HGV records tagged as loans (Darlehen / loan in
  title, not in the old ledger): 652 texts reviewed (extraction + second check), 265 included
  (ALD-000978 to 001257, 280 rows; rows with no amount and no parties dropped; cash advances
  repaid in money included per the standing rule). Notes verified by md5. Places normalized to
  existing forms (Karanis (Arsinoite nome) etc.). Helper table `note_stage` still in the database
  (drop needs Hansen: `drop table public.note_stage;`). Next: Late Antique full-text pass.
- Before the Late Antique pass: 763 rows (ALD-000001 to 000977, with gaps). Column `period` added; places without region (Oct 2026). Place names set to ancient names (66 rows, Oct 2026). Alimentary tables removed (104 rows, Hansen,
  run by Hansen in the SQL Editor, verified); `note_stage` dropped.
- Done (Oct 2026): Roman world (to AD 284), Latin/Greek documents and inscriptions: Latin papyri in
  the DDbDP (75 candidates; Greek papyri outside Egypt were already covered by the date-based
  passes), EDH (155 inscriptions + 43 wooden/wax tablets), EDR (528 Italian records: Sulpicii and
  Herculaneum tablets, alimentary tables, loan vocabulary). 24 documents included, 26 rows
  kept (ALD-000848 to 000875; the alimentary tables' 104 rows were removed). Notes verified by md5. Gaps: Dacian wax tablets (no open text found),
  Greek inscriptions (PHI blocks access), literary sources (not started).
- Writing long or non-ASCII notes (Oct 2026): text sent through the connector is NFC-normalized and
  large statements time out. Write every string as an ASCII `U&'...'` literal (all non-ASCII as
  `\XXXX`), keep statements under ~5 KB, stage long notes in chunks in a helper table and set them
  with one small `update ... set notes = (select string_agg(...))`, then check md5.
- Before the Roman-world pass: 737 rows (ALD-000001 to 000847, with gaps).
- Done (Oct 2026): Ptolemaic full-text pass: 191 documents not tagged as loans in HGV but
  containing loan vocabulary (δαν-, χρῆσις, ἔντοκ-, προχρ-, εὐχρηστ-; ending by 30 BC; not in the
  old ledger); 10 included (ALD-000838 to 000847, one row each), 181 excluded (accounts, advances,
  state seed grain, land cessions for εὐχρηστία, letters using χρῆσθαι = "use", bare loan words).
  Notes verified by md5. Remaining for Ptolemaic Egypt: Demotic texts (no open full-text source:
  TLA website has a bot check; its Hugging Face dataset holds isolated sentences only).
- Before the full-text pass: 727 rows (ALD-000001 to 000837, with gaps). Substance check (Oct 2026, Hansen: "delete
  anything that isn't a loan"; on the unclear cases Hansen said "follow your instincts"): all 770
  rows checked against the loan definition; 43 removed (advance and credit sales, work pay, rent,
  dowry, pawn, old debts rewritten as loans, paramone where service pays off the money, Mons
  Claudianus pay/food advances, mirror acknowledgements P.Oxy. 49 3493/3494, maintenance capital
  UPZ 1 118, too fragmentary); IDs in the README change log. Kept: antichretic loans whose
  principal is repaid (use replaces only the interest), ALD-000347 (money borrowed on a pledged
  slave), ALD-000697. Run by Hansen, verified.
- Before that: 770 rows. Loan audit (Oct 2026, Hansen): all 835 rows
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
  440 included, 492 excluded (old ledger, see Architecture). Notes, durations, audit (96 corrections) done
  for all rows.
- Done (Oct 2026): Roman Egypt full-text pass: 549 further documents reviewed, 117 included
  (ALD-000480 to 000614, 135 rows), 432 excluded (old ledger, see Architecture). Original rules kept;
  creditor-word-only rows and advances outside leases inserted at Hansen's OK.
- Plan (Hansen, Oct 2026): Ptolemaic Egypt first (332-30 BC; same method: 355 HGV records tagged
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
  Hansen; see the old ledger). Notes (original text + translation),
  audit and md5 checks done; 53 Egyptian-calendar terms converted (wandering calendar, regnal
  epochs; checked against the loan year). Loan acknowledgements ("I have from you ... I will
  repay") counted as loans; debt acknowledgements (ὀφείλημα) not. Full-text pass done (above);
  Demotic texts need an open source.
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
- No-conversion fix (Oct 2026): 12 rows put back into the document's units (ALD-000078, 187, 201,
  244, 427, 444, 465, 554, 576, 580, 592, 603); amount check widened for sums in several units
  (run by Hansen in the SQL Editor, verified). Rows written in drachmas with a talent equivalent
  (ALD-000012, 237, 364, 445, 448) keep drachmas.
- GitHub Pages source is `main` / `/docs` (Hansen confirmed).
- Advisor: 2 WARN on `public.rls_auto_enable()` (Supabase's own trigger, not ours). Left as is.
