# The Ancient Loans Database (ALD)
Created and maintained by Hansen Zheng.

## Purpose
A systematic, standardized record of every documented loan in the ancient world, for scholars
to search, compare and analyze ancient credit. Started with Roman Egypt (papyri); the method
below applies to any source as the database expands.

## Working rules (read first)
- Hansen decides. Do only what Hansen asks in the conversation. Start simple; build step by step.
- Errors (Hansen, Nov 2026): "if you ever notice something is wrong, look into it and correct it, don't need to ask me" -> fix it, log it in the README change log, and report it.
- Scope (Hansen, Oct 2026): "this is a classics focused project, meaning greco roman". No cuneiform or
  other Near Eastern corpora.
- Never change inclusion rules, `reference/codebook.md`, field formats or the schema on your own. If a
  source raises a question the rules do not answer, ask Hansen; do not decide it and do not label
  your own choices as Hansen's.
- Do not add tools, scripts or data files to the repo other than `ald.csv`, `need_review.md`, `coverage_log.md` and the archive `ald1.csv`. Working files live in the
  session's scratch folder (they are lost when the session ends, so record results in `ald.csv` and
  the README change log).
- Work on `main`; commit and push directly to `main` (Hansen, Oct 2026). Be concise and organized.
- Only one session should write to `ald.csv` at a time.
- Keep this file current: when Hansen decides something, record it here (and in `reference/codebook.md`
  if it concerns a field). Log every data change in the README change log, most recent first (Hansen, Oct 2026).

## Architecture
- **Data: `ald.csv`** in the repo root, the only home of the data (Hansen, Oct 2026: moved from
  Supabase, like the taxation database). Columns in this order (Hansen, Nov 2026, standardized for analysis:
  charts, maps): id, place, date, duration (years), borrower, lender, volume, currency, interest (%), notes (order set by
  Hansen, Nov 2026, on the site too; volume = the principal;
  volume and currency separate so downloaded data is usable; a sum in several units: `2; 4800` / `talent; drachma`;
  source column removed: notes = hyperlinked source, original text, English translation, notes, credit line). ID = `ALD-<citation>-<n>`, e.g. `ALD-P.Oxy.3.506-1` (Hansen, Nov 2026). Formats: `reference/codebook.md`. UTF-8, RFC 4180 quoting,
  rows sorted by id in natural order (numbers compared as numbers: P.Oxy. 1 68 before 1 130). Edit it with a script in the scratch folder; commit with the README change-log entry.
  The old Supabase project (`zzlrdlkdngxkkcrtolpx`, paused): Hansen asked to delete it (Nov 2026); the connector has no
  delete tool, so Hansen deletes it in the Supabase dashboard.
- **Need review: `need_review.md`** (Hansen, Nov 2026: "keep track of these 'semi loans' that we do not formally
  include. i can review them by hand"): loan-like transactions not entered. Format (Hansen, Nov 2026): only a table, no
  description, columns Source | Lines | Text (the passage: original, line by line with line numbers, copied by script from
  the edition, then an English translation) | Flagged for review (reason); one row per document or passage; most recent first.
- **Coverage log: `coverage_log.md`** (Hansen, Nov 2026): only a plain list of the names of completed texts, one "- " item per line (as Hansen formatted it)
  ("Author, Title"), texts in progress marked "(IN PROGRESS)"; no table, heading or other formatting ("i want the coverage
  log to be only this altogether"). Update it with every batch.
- **Archive: `ald1.csv`** (Hansen, Nov 2026: "empty out ald.csv so it starts blank, and move all current data into
  ald1.csv just so we don't lose it in case i decide to shift back"): the 1,349 rows as of the restart, unchanged.
  Not read by the site; do not edit it.
- **Repo**: `README.md` (brief description + change log), `ald.csv`, `docs/` (GitHub Pages site),
  `reference/codebook.md`. The review ledger `reviewed.md` was removed (Hansen, Oct 2026); its last
  version is in git history (`git show 4d2672d:reviewed.md`).
- Site: plain HTML + `docs/app.js`, no CSS (Hansen's preference). Reads `ald.csv` from the main
  branch (`CSV_URL` in `docs/config.js`). Main page = filters like the taxation database (Hansen,
  Oct 2026: "build the loans database filters to be like the taxation database"; catalogue tree
  removed): year range (from/to; a loan matches if its year range overlaps), Period, Place and
  Currency (type to search, Enter or pick from the list; several values each, "any of"; blanks as
  "(period unknown)" etc.), free-text search; filters kept in the URL hash
  (`#from=100 BC&to=AD 100&period=Early Roman Egypt&place=Oxyrhynchus|Karanis`). Table sortable by every
  column (notes not in the table); CSV download of the filtered rows. `loan.html` shows one loan incl. notes.
  Script tags carry a version (`app.js?v=2026-10-18`): change it in `index.html` and `loan.html` whenever
  `app.js` or `config.js` changes (GitHub Pages lets browsers cache files 10 minutes; an old cached script
  with a new page breaks the site).
  Tab icon (Hansen, Nov 2026): `docs/favicon.png`, Hansen's GitHub profile picture cut to a circle (64 px).
  Map and chart (Hansen, Nov 2026: "first have a map, where we plot the locations of the loans on the map. and we
  also have a chart showing loans over time"): on the main page above the table, both follow the filters. Map: Leaflet
  (cdnjs) on Digital Atlas of the Roman Empire tiles (CC BY 4.0). Opens on the whole Mediterranean at any screen width (Hansen, Nov 2026): fitBounds 27-50 N, 9 W-44 E, zoomSnap 0.25 (zoom 4 on desktop, about 3.25 on phones). Every loan individually, no aggregates (Hansen,
  Nov 2026: "i want to see every single individual loan, not aggreagates"): one dot per loan, loans at one place
  spread around it in a sunflower pattern (fixed pixel spacing, redone on zoom); hover = loan summary, click = loan page. Zoomed out, a place's
  dots merge into one blob sized by its number of loans (Hansen, Nov 2026: "the big circles are too big"; "cap it at this size, and just have everything scale relatively": the largest place shown
  gets 10 px radius (Hansen, Nov 2026: "no bigger than what we have for puteoli"), the others scale by area, sqrt(n / largest), minimum 5 px) (Hansen, Nov 2026: "when we zoom out ... merge them into one big
  blob"): blob whenever the dots would spread more than 2 km (`SPREAD_KM`) from the place; click the blob = zoom in
  until the dots show (tiles enlarged beyond their native zoom 11, up to 15). Coordinates: lookup `PLACES` in `docs/app.js` from Pleiades reprPoint (Hansen chose a lookup in the site code
  over new columns); a new place in `ald.csv` needs a line there, else it is counted as "not on the map". Chart:
  Chart.js (cdnjs) scatter as a timeline, one dot per loan at its exact date (a date range at its midpoint, Hansen);
  stacked only when loans have the same date (Hansen, Nov 2026: "no stacking unless its genuinely in the same time
  range"; not by 25-year periods); hover = loan summary, click = loan page; undated loans not shown.
  Map "Reset zoom" button under the map (Hansen, Nov 2026), back to the opening view. Interactive (Hansen, Nov 2026: "i can zoom in and out of it"): chartjs-plugin-zoom + hammer.js (cdnjs); wheel or
  pinch zooms the timeline, drag pans, limited to the full range; "Reset zoom" button; filters reset the zoom.
  Heading "Loans Over Time" (Hansen).
  Map and chart side by side under the filters (Hansen, Nov 2026: "can the two visuals be side by side"): an HTML table
  with two 50% cells (no CSS); both 420 px high (heights set in app.js).
  Loan page: a map under the location, the place marked (Hansen, Nov 2026). The place column is shown on the site as
  "Location" (Hansen, Nov 2026: "call it location instead of place"; `colLabel` in app.js); the ald.csv column and the
  URL key stay `place`.
  Search (Hansen, Nov 2026): `,` narrows (all terms of a group: `X,y` = loans with X and y), `;` adds groups
  (`X;y` = loans with X plus loans with y); the box shows how.
  Phones (Hansen, Nov 2026: "the interface is a mess on mobile"): one small <style> in index.html, for screens up to
  700 px only (the only CSS on the site): inputs no wider than the screen, map and chart stacked (320 px high), the loans
  table scrolls sideways.
  Filters in one row, wrapping as needed (Hansen, Nov 2026); `<nobr>` keeps each label with its box.
  Historical period (Hansen, Oct 2026: "add it in front of everything, and make it filterable";
  "always classify into one thing"; Early/Late Roman Egypt): column `period`, entered with each row
  from the table of periods in `reference/codebook.md` (periods per region with date limits; a range
  gets the period covering most of it). A new region needs a line there.

## Data standards
- Follow `reference/codebook.md` exactly. One row per loan in `ald.csv`. Fields: id, period, year, place,
  amount, currency, borrower, lender, interest, duration, source, source_url, notes. Nothing else is
  collected (Hansen).
- id (old build): `ALD-` + 6 digits (ALD-001802 the last); superseded by `ALD-<citation>-<n>` (Nov 2026).
- Formats the old database enforced (keep them): year matches `AD n`, `n BC`, `AD n-m`, `n-m BC`,
  `n BC-AD m`; amount = numbers / fractions / `[...]` / unit words separated by spaces, with at least
  one digit; source required.
- Everything recorded must be true and verifiable in the source; empty = unknown; never guess.

### What counts (Hansen)
WORKING DEFINITION (Hansen, Nov 2026: "apply your definition of a loan in our database ... and apply your method moving forward"; supersedes every rule below where they differ; shown on the site under "What is a loan?", `docs/index.html`: a small popup (native <dialog>, max 640 px wide, 80% of the screen high, scrolls inside) whose text is Hansen's draft (Nov 2026): definition, Testing Criteria, interest note, Evidence Standard; no table of borderline cases on the site):
a loan = the lender transfers money or other fungible goods to the borrower, who takes ownership and may spend or consume them,
and is obliged to return an equivalent quantity of the same kind later, with or without interest (Roman mutuum, Greek daneion).
Test, all four: (1) transfer actually made (not promised, requested, planned); (2) the borrower may use/consume (loan of a specific
object for use = commodatum, not a loan); (3) obligation to repay an equivalent (not work or other goods); (4) deferral. Interest not
required, may be replaced by use of property (antichresis, incl. habitation) or a person's service (paramone); wording irrelevant;
parties may be persons, groups, cities, states, temples, rulers. YES: loan contracts/acknowledgements of money or goods received;
interest-free and eranos loans; secured loans (mortgage, pledge or pawn, surety, sale with right of redemption) = the loan itself;
antichresis and paramone where the principal is repaid; maritime loans; state/temple seed or grain loans; money paid on someone's
behalf at their request, to be reimbursed; cash advances repaid in money (incl. inside leases and work contracts). NO: paramone where
the service pays off the principal; advances repaid in goods or work; credit sales/deferred prices; deposits; loans for use; pledge
or pawn with no loan shown; debts of unstated origin (unless money/goods received are shown); rent, wages, tax, tribute, fine, gift,
bribe, dowry; forced levies (unless repayment stated); old debts restated (no new loan); requested/promised/planned loans;
generalisations, hypotheticals, metaphors, fiction. Evidence: specific (one transaction, or an identifiable set by one lender or to
one borrower), real (not fiction), shown in the preserved text (not only in editorial restoration), one record per transaction
(money and goods parts separately; the same loan in several sources once). Scholarly basis: Gaius Inst. 3.90 (mutuum vs commodatum,
depositum, pignus); Finley 1952 (security); Millett 1991 (eranos, friendly loans); Migeotte 1984 (public loans); papyrological loan
law (Kuhnert, Rupprecht, Taubenschlag). Applied Nov 2026: the 285 rows audited (all meet it, none removed); need_review.md re-judged: 16 rows added (301 rows). Done under it (342 rows): 31 habitation register entries and 10 antichretic documents (P.Oxy. 8 1105 and P.Mich. 9 570 to need_review.md); formerly listed as next: the antichretic loans excluded earlier as rent (habitation, loom, bread-dole in place of interest: P.Oxy. 2 339 = 8 1105, SB 20 14097, SB 8 9765, P.Oxy. 36 2773, 47 3355, 63 4395, P.Mich. 3 188, 189, 9 570, 10 585, 11 605, 12 635, and the register entries of habitation agreements with a sum).
PRINCIPLE (Hansen, Oct 2026): "the idea for the database is just that every loan should be an unique, seperate debt
transaction being recorded" (one row = one distinct debt transaction; no totals, no duplicates).
CURRENT RULE (Hansen, Oct 2026, supersedes the formal-loan rule below): "lets remove my rule for that. the only
standing rule is that it has to be a loan, which i've defined for you" (said of debt acknowledgements, "I owe you
... I will repay"). Definition: a loan is when someone borrows money (or goods) from a lender with the intention of
returning it, with or without interest; trades/payments for goods or services are not loans. Applies going forward;
earlier removals and skipped cases stay as they are unless Hansen says otherwise ("skip what you skipped").
Sources without an open original text (Hansen, Oct 2026): note reads "Original Text:\noriginal text unavailable" and
the English translation is the editor's published translation (e.g. Crum 1909 for P.Ryl.Copt.).
FORMER RULE (Hansen, Oct 2026): "for a loan to be
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
7. **Insert.** Append the rows to `ald.csv` by script (Python `csv` module), with the next free IDs
   and the period from the codebook table; keep rows sorted by id. Key later updates by id.
8. **Verify.** After every write: row count, the formats above, and md5 of each note against the
   expected text (text copied through agents can lose or alter characters). Fix mismatches.
9. **Record.** Add a README change-log entry (ranges, not one line per loan: "Added
   ALD-XXXXXX - XXXXXX: <corpus, place, period>"; removals with their IDs); update the status
   below; commit.

## Status
- Nov 2026 RESTART (Hansen): "clear all the data ... and restart building it in a more organized way". `ald.csv`
  emptied (header only); all previous data in `ald1.csv`. New structure (Hansen): 10 fields, see Architecture and
  the codebook (period, source, source_url dropped; source now in notes; year renamed date). Site updated (place
  filter only; notes on the loan page, source line linked). New ID system decided (see Architecture).
  Building order (Hansen, Nov 2026): series by series, volume by volume; started with P.Oxy. 1. Source: papyri.info
  data (github.com/papyri/idp.data; texts now under `DDbDP/<n>/<id>.xml`, find a volume by `ddb-hybrid` idno; the
  `Historical/<series>/<vol>/` stubs list every number with `reprint-in` pointers to later re-editions).
  Decisions (Hansen, Nov 2026, P.Oxy. 1): loan in progress / not shown to be made -> excluded, listed in
  `need_review.md`; advances (προχρεία) with no repayment stated -> not loans for now; undated loan -> document's
  year, said in notes; loan place not stated -> document's place (HGV), said in notes; credit line always.
  Decisions (Hansen, Nov 2026, P.Oxy. 2-4): IDs and Source use the edition that prints the text, as scholars cite it
  (Hansen: "change the entire IDs and everything to those correct places"), the first publication in brackets
  (`SB 10 10246 (= P.Oxy. 2 304 descr.)`); the P.Oxy. order is only the order of work; loans whose interest is paid by living in a house (ἐνοίκησις / ἐνοικισμός ἀντὶ τῶν
  τόκων) are not loans ("that isn't a loan, that's rent"; P.Oxy. 2 339 = P.Oxy. 8 1105, SB 20 14097, SB 8 9765 left
  out; the same for use of other property in place of interest, e.g. a loom, P.Oxy. 36 2773: excluded entirely,
  Hansen: "exclude"); advances inside leases, even when repaid -> need_review.md. A long document: only the loan passage in the
  notes, marked as an excerpt (P.Oxy. 2 237).
  Crossed-out contracts stay in the data for now, flagged in the notes (Hansen, Nov 2026: "this is okay for now";
  SB 14 11491).
  Columns are standardized for a spreadsheet; the notes hold everything else (Hansen, Nov 2026). duration = years
  as a number (two decimals; range if a date is uncertain; empty if not computable); the written term goes in the
  notes as `Term: ...`. Column names `duration (years)` and `interest (%)` (Hansen); interest = % per year (simple, monthly
  rate x 12), the written rate in the notes as `Interest: ...`; no stated rate but sums and dates given -> calculated
  rate (extra sum / sum lent / years, also for instalments: Hansen chose the straightforward method), working in the notes.
  Done: P.Oxy. 1 (211 numbers; 177 with text; 30 candidates read): 6 rows (68-1, 68-2, 70-1, 98-1, 130-1, 133-1);
  4 in need_review.md. P.Oxy. 2-5 (599 numbers; 401 with text; 81 candidates read): 30 rows from 26 documents;
  16 in need_review.md. P.Oxy. 6-8 (325 numbers; 232 with text; 41 candidates read): 4 rows (7 1040, 7 1042, 8 1118,
  8 1132); 10 in need_review.md (8 1130 moved there by Hansen: possibly an advance purchase of flax). State seed
  loans are kept, described as such in the notes (Hansen, Nov 2026: "we can keep state seed loans, just add a note in
  the description"): P.Oxy. 7 1024 entered; 7 1031 (application only) in need_review.md. P.Oxy. 9-11 (229 numbers; 140 with text; 20 candidates read; vol. 11
  almost all literary): 3 rows (10 1262 Ro, 10 1282, SB 14 11847); 3 in need_review.md. P.Oxy. 12-14 (377 numbers; 345 with text; 49 candidates read; vol. 13 literary): 13 rows
  (12 1471, 1473, 1474, 1501, SB 30 17614, 14 1640, 1648, 1665, 1711, 1715, 1716, 1724 x2); 10 in need_review.md;
  interest-free loans = 0 in interest (%) (Hansen: "show 0 if interest free explicitly"). P.Oxy. 15-18 (409 numbers; 307 with text; 53 candidates read;
  vol. 15 literary): 8 rows (16 1891, 1892, 1969, 1970, 1971, 1976, 17 2134 Ro, 18 2185); 4 in need_review.md. P.Oxy. 19-21 (101 numbers; 42 with text; 5 candidates read;
  vol. 21 literary): 1 row (19 2237; "6 solidi less 6 carats" entered as 5 3/4, Hansen: "sure"). Lenders that are not named
  persons: standard form with a qualifier in brackets (Hansen: "add parentheses after the name as needed as long as it
  can be standardized"): `state (public granary)`, `Oxyrhynchus (city council)`, `Apion (heirs)`, `friends (unnamed)`.
  P.Oxy. 22-31 (293 numbers; 105 with text; 14 candidates read; vols. 23, 25, 26, 28-30 literary): 2 rows
  (22 2350, 27 2471); 3 in need_review.md. P.Oxy. 32-41 (379 numbers; 249 with text; 18 candidates read; vols. 32, 35,
  37, 39 literary): 7 rows (34 2722, 36 2774, 36 2775 x2, 38 2834, 38 2848 Vo, 41 2956); 36 2773 (use of a loom in place of interest)
  excluded entirely (Hansen, Nov 2026: "exclude"; like rent paid by habitation). ALD-SB.14.11847-1 stays in the
  data (Hansen: not moved to need_review.md). P.Oxy. 42-51 (640 numbers; 499 with text; 40 candidates read; the
  idp sparse checkout needs `Historical/p.oxy/<vol>` added per volume): 10 rows (44 3198, 45 3266, 47 3351, 49 3468,
  3485, 3487, 3490, 50 3557, 3560, 3599; plus 48 3393, a loan with no sum from unnamed moneylenders, added by Hansen:
  "add"); 7 in need_review.md (43 3134 deposit, 3146 fund transfer, 49 3466 pledge, 3474 seed-loan application, 3493/3494 mirror acknowledgements, 50 3560 earlier lien,
  3589 advance in lease); 47 3355 excluded (habitation in place of interest). P.Oxy. 52-61 (486 numbers; 294 with text;
  29 candidates read; vols. 52-53 almost all literary): 4 rows (55 3798, 61 4120, 4124, 4125); 5 in need_review.md (56 3863,
  57 3902-3906 seed applications, 58 3938 debt fragment, 58 3943-3946 advance fragments, 61 4117 possible writing
  exercise). P.Oxy. 62-71 (526 numbers; 270 with text; 28 candidates read): 11 rows (63 4394, 4397 x2, 4398, 64 4439,
  66 4532, 70 4772, 71 4826, 4828, 4831, 4835); 4 in need_review.md (63 4353, 4393, 67 4596, 68 4690); 63 4395 excluded
  (bread-dole rights used in place of interest, like rent). P.Oxy. 72-88 (595 numbers; 444 with text; 37 candidates read;
  vol. 88 has no texts yet; the series on papyri.info ends here): 16 rows (72 4896, 4897, 4902, 4903, 4904, 4907, 4918, 4921,
  75 5052, 77 5109, 5122, 5124, 78 5173, 79 5211, 85 5520, 87 5592); 7 in need_review.md (72 4891, 4922, 4930 + 75 5070
  + 83 5368 "I have and owe" acknowledgements, 74 4984, 75 5052 unwritten debt, 78 5169 paramone loan, 82 5320).
  P.Oxy. done (87 volumes with texts; vol. 88 folder empty). Michigan papyri (Hansen, Nov 2026: "lets work next on the
  UMich collection"): P.Mich. 1-21 (866 numbers; 787 with text; 87 candidates read): 15 rows (1 32, 3 182, 190, 5 232, 328,
  332, 335, 336, C.Epist.Lat. 154 = 7 438, 9 566, 567, 11 606, 607, 614, 12 633); 7 in need_review.md; excluded as rent
  (habitation in place of interest): 3 188, 189, 9 570, 10 585, 11 605, 12 635. Record-office registers and abstracts entered (Hansen, Nov 2026: "enter them, yes"): 71 rows (P.Mich. 2 121 Vo x27, 5 237 x2,
  5 238 Ro x36, 5 240 x3, 2 128 x1, 5 241 x2); one row per entry; "loan of X to Y" = X lent to Y, the sum in the genitive ("of n drachmas") = the loan's amount (volume), a second sum after it = the office's fee (P.Mich. 2 121 Vo, the list of contracts, has no fees; notes corrected Nov 2026);
  repeated entries (P.Mich. 2 124, 128; 5 239, 240) once, variant readings in the notes; habitation-in-place-of-interest
  pairs ("of the same capital" after an ἐνοικήσεως) excluded; sum lost -> volume empty; 6 in need_review.md. Rest of the Michigan
  collection (Hansen, Nov 2026: "finish the UMich data"): O.Mich. 1-4, P.Cair.Mich. 1-3, P.Mich.Aphrod., P.Mich.Mchl.,
  O.Mich.Copt. (1,232 numbers; 14 candidates read): no loans; 3 in need_review.md (P.Mich.Aphrod. 1 settlement,
  P.Mich.Mchl. 17 repaid advance, O.Mich. 1 148 debt). Michigan series done. Coverage is counted series by series (Hansen, Nov 2026: "just treat it as series by series"):
  a collection's texts published in other series (SB, journals) are covered with those series, not as part of the collection.
  Roman loans outside Egypt (Hansen, Nov 2026: "i want to see roman"; "without consulting our old data"; order agreed:
  Murecine tablets, then Cicero and the other Latin and Greek authors, Iucundus last). Source for Latin tablets: EDCS
  (edcs.hist.uzh.ch; open JSON: /data/indexes/citations/<source id>.json lists a publication's records, /data/monument/
  <first 3 digits>/<8-digit id>.json gives the text; TPSulp. = source id 3751), credited via LIST (Zenodo 10473706, CC BY 4.0),
  which holds the same texts. Notes: lines split at the EDCS line divisions, (n) = one face or copy of the tablet; source
  link = https://edcs.hist.uzh.ch/monument/<id>; date = consuls and Roman day converted, year as EDCS dates it.
  Currency `sestertius`; place `Puteoli` (Pleiades 432815). Done: TPSulp. (127 tablets): 10 rows (51-57, 60, 63, 67);
  cash-book entries (nomina arcaria: sum "paid out" at the borrower's request) counted as loans (60, 63; Hansen, Nov 2026:
  "for the decisions, yes"; also the EDCS year for undated-consul tablets, TPSulp. 57; "use EDCS as needed"); loan wording
  wholly restored (50), "received and owe" without a loan word (59), heading lost (61, 62, 64, 65), balance of loans
  restated (68), debts, receipts, a freight-contract sum (78), pledge/fiducia notices -> need_review.md; leases of
  granaries, mandates, court papers excluded. Cicero (Hansen, Nov 2026: "begin cicero"): Perseus canonical-latinLit (CC BY-SA 4.0; git clone works, the GitHub web pages do
  not), all 58 works; passages = the smallest citable sections containing loan words (mutu-, faen-/fen-, usur-, versur-,
  creditor, debitor, syngraph-, chirograph-, aes alienum, credid-, centesim-), editors' apparatus notes stripped; 281 read.
  Kept: specific loans only (Hansen, Nov 2026: "i only want you to include specific loans, not literally any mention of
  lending"): one identifiable transaction whose lender and borrower are both identified (named, or a named city, state or
  king); a passing mention of borrowing from unnamed others or a group, with no sum (Caesar borrowing from his officers,
  Tiro or Catilina borrowing "from others", Rome borrowing from private citizens) is not entered (10 such rows removed);
  a single loan with a sum and one unnamed party stays (Sen. Ben. 4.39.1, Zeno's 500 denarii to "a certain man"); debts not called loans, planned borrowing, lending by many unnamed parties -> need_review.md.
  RULE CHANGE (Hansen, Nov 2026, supersedes the strict rules above and below where they differ): "a loan doesn't need to be named a loan explicitly if it literally is a loan. that's for you to judge. if there is money being lent, returned (with or without interest), it basically is a loan, and you will take it that way. groups are fine, they function as lenders or borrowers." -> money (or goods) handed over to be returned = loan, whatever the wording; groups (unnamed or named: friends, tax companies, a city's citizens) are valid lenders/borrowers. Applied (Nov 2026, Hansen: "rejudge"): the 10 dropped literary rows restored; 23 literary rows added from need_review.md (266 rows); papyrus and tablet entries re-judged: 14 rows added (280 rows); "received/have and owe" acknowledgements and advances repaid in money (outside leases) counted as loans; Hansen (Nov 2026) on lease advances: "it is a loan if money is given, but not goods"; paramone loans (a person's service in place of interest, principal repaid in money): "yes" -> entered with interest (%) blank and the service in the notes; cases needing explanation stay in need_review.md (Hansen: "leave the ones needing explanation in need review"); 285 rows. Place Aphrodito has no map coordinates yet (not in Pleiades search). Repeated or group lending is entered as one row when the source gives no individual loans (e.g. Nep. Att. 2, Suet. Aug. 41.1); a total out at interest is the volume when that is all the source gives (Val. Max. 4.8.3).
  Notes: the passage section by section (label = section number), own translation; source link = Scaife reader URL;
  credit = edition + Perseus licence; ID = ALD-Cic.<work>.<first section>-<n> (Att., Fam., Flac., Pis., Rab.Post.,
  Har.resp., Verr.). Date = the year the loan was made where the text shows it (Salamis loan 56 BC, under Lentulus and
  Philippus), otherwise the year of the letter or speech, said in the notes; a reign or term as a range (80-58 BC).
  Hansen (Nov 2026): "for data you can't get, leave the box blank. leave notes if specific clarification is needed, but don't if it
  isn't needed"; parties the source mentions but does not name keep the descriptive form with "(unnamed)" (Hansen: "i think
  "friends (unnamed)" is a great way to do this. lets do that for all, incl cicero too"): `others (unnamed)`, `friends (unnamed)`,
  `another (unnamed)`; a party the source does not mention at all -> empty; patronymics and matronymics count as names
  (Hansen: "matronymics and patronymics technically do count as names"): `son of Quintus Axius`, no "(unnamed)"; the same for husband, wife and mother (Hansen: "take husband or wife the
  same way ... since it is specific enough to trace to a name"): `wife of Orseus`, `husband of Thermouthis`, `mother of Harmaeis`; undated loans take the speech's or letter's year, and the
  note always says how the date was found ("the year of the speech"; or e.g. "two years ago" -> speech year minus 2).
  Kings and cities as parties: `Ariobarzanes III (king of Cappadocia)`, `Salamis (city)`. 16 rows; place `Rome` (Pleiades 423025). Other Latin authors (Hansen, Nov 2026: "go on to the other authors"): same method; 1,668 passages
  with loan words in 45 authors; read: histories, biographies, letters, essays, anecdote collections (525 passages, shown as
  keyword windows, full sections pulled for candidates); set aside unread as not reporting real loans: poetry, comedy,
  novels, declamations, Quintilian, technical works, Christian authors (say so if Hansen wants them read). 11 rows (Caes.,
  Nep., Sall., Liv., Sen., Gell., Plin.); state and city parties `Rome (state)`, `Carthage (city)`; a source with no date ->
  date empty (Sen. Ben. 4.39.1); a text error in the digital edition is kept and noted (Plin. Ep. 6.8.4 "Konjunktivs").
  Method change (Hansen, Nov 2026: "lets read in full, that's the only way to do this for any text"): every text is read in
  full, not selected by keyword; the Cicero and Latin passes above were keyword-based and are to be redone in full. Hansen (Nov
  2026): "yes, absolutely use helper agents"; "go in whatever order makes sense, without referencing anything we've done so far,
  so you are actually just reading the whole thing"; papyri already reviewed by keyword/tag (P.Oxy., P.Mich.) are to be
  reread in full too, after the Roman and Greek literature ("go for the roman and greek ones first. make sure we don't have
  any dupes"). Method: every work split into chunks; helper agents read each chunk completely and report specific loans;
  each report checked against the text before entry; new rows matched against existing rows so no loan is entered twice. Progress is counted by texts read (Hansen, Nov 2026: "i want to think about this as reading texts"; work in small steps): coverage_log.md is the list of texts read (see Architecture). First stop: 126 Latin works; 16 loans reported: 12 already in the data, 2 already in need_review.md, 2 added there, none added to the data; ALD-Cic.Flac.51-1 borrower corrected to Lysanias; the 94 borderline cases reviewed (28 to need_review.md, 16 already there or in the data, 50 dropped as not loans). New finds are checked against need_review.md too. Works of fiction are not read (Hansen, Nov 2026: "stories like the aeneid are not going to have any real loans in them ... make sure to not be reviewing works of fiction"): epic, mythological and fable poetry, drama, novels; the Aeneid dropped unfinished. Rule (Hansen, Nov 2026: "if they are real, record, if not, dont. the point of this database is to have real data economic historians can analyze"): read whatever can report real events (incl. satire and occasional poetry: Horace, Juvenal, Martial, Ausonius, Claudian, Prudentius) and record only real loans; skip invented material (epic, myth, drama, novels, fables, the elder Seneca's declamations). Latin literature in Perseus read in full by Nov 2026 (works listed in coverage_log.md); rows added from the full reading: ALD-Apul.Apol.76-1, ALD-Aug.Ep.61.1-1, ALD-Sid.Ep.4.24-1, plus the Flac. 51 fix; many entries to need_review.md. Next: Greek literature (Perseus canonical-greekLit, then First1KGreek), then the papyri reread in full. Everything else in
  this file (Data standards, Method, Status below) describes the old build and is history unless Hansen carries
  a rule over.
- Oct 2026 (Hansen: "i want to pivot from using supabase to doing the data like the taxation database"):
  data moved from Supabase to `ald.csv`; site reads the CSV; `reference/schema.sql`, the release workflow
  and the Supabase permission removed. Notes below about SQL, the connector and `U&` literals are history.
- Data: 1,349 rows at the move to `ald.csv` (Oct 2026; 944 + 405 restored, see below). Before: 944 rows (ALD-000001 to 001802, with gaps; ALD-001607 Hirrius' eels removed, Hansen: not a loan), after the formal-loan audit (Oct 2026; IDs in the README
  change log), the Late Antique full-text pass and the Early Islamic Egypt pass.
- Done (Oct 2026, Hansen: "yes" / "do it"): re-check of excluded debts/advances under the current rule: 301 papyri
  previously excluded (debt acknowledgements, advances, debts named in receipts; from the old ledger, Late Antique,
  full-text and post-641 passes; allowance advances, work pay, rent, seed grain, sales left out); extraction + second
  check + translation; 113 documents, 122 rows (ALD-001681 to 001802; notes md5-verified). Kept out: pawns (Hansen:
  "pawns ... not loans in substance"; P.Cair.Zen. 1 59120, P.Lond. 7 2006, SB 22 15237, P.Strasb. 1 56,
  P.Cair.Masp. 2 67151 silver plate, PSI 10 1122 oxen), loan wording wholly restored (P.Oxy. 14 1712, PSI 7 828,
  P.Heid.Kopt. 16), P.Alex. 8 (paramone advance), SPP 3 2.2 169. Currency `drachma (silver)` where the text names
  silver (codebook), so some Roman rows differ from older plain `drachma` rows.
- Restore of the 555 rows removed only for a missing party/principal (Hansen said yes, Oct 2026): found partly
  done at the move to `ald.csv` (Oct 2026): 405 back in the data, 150 not (IDs in the README change log, 2026-10-18).
  The backup (`fa/backup_all.json`) was in a lost session scratch folder; the 150 can be re-extracted only from the
  sources. Ask Hansen before doing so.
- Done (Oct 2026, Hansen: "just say 'original text unavailable' and then use crums translation"): P.Ryl.Copt. 156,
  191-213 from Crum 1909 (archive.org cu31924099175329; source_url = that scan): 10 documents, 11 rows (ALD-001670 to
  001680; debt acknowledgements counted as loans under the current rule; rows may lack parties or sum). Excluded:
  156 (repayment), 196/198/199/202-204 (debts from grain/donkey prices, payments), 200 (object lent, lost), 208-212
  (delivery contracts), 213 (loan or price of shirts, left open by Crum). Kept with doubt: 206 and 207 (wine and
  wine-jars "to repay"; could be delivery contracts).
- Hansen (Oct 2026), on all borderline cases set aside under the formal-loan rule: "skip what you skipped. that is okay."
- Done (Oct 2026, Hansen: "sure, go for all of these too"): three passes, no qualifying loan, no data change:
  - EDCS (Latin inscriptions) via the LIST dataset (Zenodo 10473706, CC BY 4.0; EDCS + EDH): 542 texts with Latin
    loan words not reviewed in the EDH/EDR passes; all excluded (epitaphs with figurative debitum/pignus/credidit,
    foundations living on interest, laws, alimentary tables, Sulpicii/Herculaneum/Iucundus/Dacian/Britain tablets
    already reviewed). Closest (Hansen may revisit): EDCS-05200035 (Pompeii, tabellae of L. Cominius Primus,
    expensilatio to Pompeia Anthis, sum lost), EDCS-31500014 (Pompeii AD 61, fiducia of Dicidia Margaris, sum
    restored), EDCS-14000148/149 (Trebula Suffenas, debts of C. Caesius Bassus paid by A. Furius Rufus, HS 12,000
    and 58,000, not called loans), EDCS-80200137 (Herculaneum, "debere", sum restored).
  - Greek EpiDoc corpora outside PHI: I.Sicily, IOSPE (Black Sea), IIP (Israel/Palestine) (GitHub clones): 13
    texts with loan vocabulary, none a loan (ISic030061, land mortgaged epi lysei = security only). IG online
    (ig.bbaw.de) and IAph reachable but largely duplicate PHI; not scanned.
  - Egypt after 641, the 44 HGV loan-tagged records without DDbDP text: no open text. P.Ryl.Copt. 191-213 are in
    Crum's 1909 Rylands catalogue (archive.org cu31924099175329) with English summaries/translations, but the
    Coptic OCR is unreadable, so no faithful original text; P.Bal. 2 102-118 are repayments; SB 1 5586-5588,
    SPP 3 354 have metadata only. Open for Hansen: whether rows may use Crum's English with no original text.
- Done (Oct 2026, Hansen: "go for what you recommend": Egypt after 641): Early Islamic Egypt pass:
  106 DDbDP papyri dated (partly) AD 642-900, not reviewed before (85 HGV loan-tagged, 21 by loan vocabulary);
  formal-loan rule; 4 rows (ALD-001666 to 001669; Coptic acknowledgements "you gave me ... I will repay" counted
  as loans). 44 loan-tagged HGV records have no DDbDP text (mostly Coptic; not covered). Excluded by the rule (Hansen
  may revisit): P.Ness. 3 55 (taxes paid by Georgius for Sergius, acknowledged and to be repaid; not called a loan),
  P.Michael. 35 ("loan or advance sale of crop", repaid in wheat), P.Gen. 4 196 (53 solidi, lender lost), SPP 3.2
  Elias wheat notes (HGV "Schuldschein"; no lending or repayment).
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
