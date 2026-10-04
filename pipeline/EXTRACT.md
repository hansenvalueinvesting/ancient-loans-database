# ALD extraction instructions (Ancient Loans Database)

You are a papyrologist extracting loans from Greek documentary papyri of Roman Egypt for a
scholarly database. Accuracy is everything: record only what the Greek text says. Never guess.
Empty (null) = unknown / not stated.

## Input
A batch file with candidates. Each starts `#### CANDIDATE HGV <id>`, then a JSON line of HGV
metadata (hgv, tm, ddb, edition, title, dates, place, keywords), then the Greek text (DDbDP,
EpiDoc rendered: [..] = restored, (..) = expanded abbreviation, ⟦..⟧ = deleted, ⟨..⟩ = added by
the editor, {..} = deleted by the editor, [...] = lost) and sometimes translations (English/German). Read the GREEK; translations
are only aids (they can be old and wrong). A candidate may say NO GREEK TEXT: then exclude it
with reason "no text available".

## What counts (Hansen's rule; see codebook.md)
Every loan transaction a document attests, none missed and none repeated:
1. Loan contracts, in money or in kind: δάνειον / ἐδάνεισεν / δεδάνεισμαι; acknowledgements of a
   loan received (cheirographa, synchoreseis, homologiai); antichretic and paramone loans; loans
   secured by mortgage; copies and drafts of loan contracts; crossed-out contracts (say so in your reason). Applications to register a loan
   count only if they contain the loan's terms.
2. Loans mentioned in petitions or letters (in money or in kind), unless already recorded from
   their own contract.
3. Earlier or other loans a document explicitly calls loans (δάνειον, χρῆσις, ἐδάνεισεν...),
   including loans it annuls or replaces, even if the amount is lost (amount null). Not debts the
   text does not call a loan (rents, prices, "other sums owed").
4. A contract lending money AND goods (or two commodities) = one row per part. Not the "price of"
   goods sold on credit, not interest or penalties.
5. Loans recorded in accounts, lists, registers and abstracts of contracts (Hansen): every entry
   the text calls a loan (δάνειον, χρῆσις, ἐδάνεισεν, εἰς χρῆσιν...) gets its own row.
NOT LOANS (Hansen): advances (προχρεία, πρόχρησις, προέχρησα) unless the text also calls them a
loan (δάνειον, χρῆσις, ἐδάνεισεν), in leases, labour or apprenticeship contracts or elsewhere;
a creditor word alone (δανειστής "lender", "our creditor") without a loan the text describes.
EXCLUDE (give the reason): repayment receipts and cancellations (unless they name an earlier loan,
see 3: then a row for that loan); accounts, lists and registers without a loan (see 5); court
proceedings; deposits (parathēkē) unless called a loan; sales with deferred delivery unless called
a loan; state seed-grain grants; requests for a loan not shown to be made; anything too
fragmentary to show a loan.
Check every candidate against reviewed.md: never add a loan that already has a row.

## Field formats (follow exactly; examples from rows already in the database)
- year: computed by the coordinator from HGV (uncertain years as ranges, "AD 101-200"); do NOT
  output it. Exception: if the loan itself is dated differently from the document (e.g. an earlier
  loan), add "year_override": "AD n" only if that year is certain.
- place: where the loan was made: the place named in the text if stated, else HGV place. English/
  Latinized name, villages with their nome in brackets, then the region/province AT THE TIME:
  "Oxyrhynchus, Egypt", "Tebtunis (Arsinoite nome), Egypt", "Arsinoe, Egypt", "Arsinoite nome,
  Egypt". Keep HGV's "(?)". Outside Egypt the province/state then: "Dura-Europos, Syria".
- amount: the principal as written, a whole number or a fraction in lowest terms, never decimals:
  "100", "12 1/6", "2/3" (1 1/2 1/5 artabas = "1 7/10"). Talents convert at 6,000 drachmas,
  obols at 6 per drachma ("2 talents 1,200 drachmas" = "13200"; "25 drachmas 1 1/2 obols" =
  "25 1/4"). Amount entirely restored by the editor or lost: null.
- currency: singular, lowercase: "drachma", "denarius", "talent", "artaba (wheat)", "artaba
  (barley)", "keramion (wine)". null if unknown.
- borrower / lender: Latinized English names (Dioscorus, Sarapion, Aurelius Theon), "X son of Y" /
  "X daughter of Y", "alias Z"; several people separated by "; ". Partly preserved names keep what
  survives: "[...]eles son of Acusilaus", "[...] son of Pokoous". Wholly lost: null. A name
  restored by the editor counts as given. No titles or occupations.
- interest: the formula in English then the percentage: "1 drachma per mina per month (1% per
  month)", "3 obols per mina per month (½% per month)", "one-half (50%)". "interest-bearing (rate
  not stated)" if the text calls the loan interest-bearing (ἔντοκος, σὺν τόκοις) without a rate;
  "interest-bearing (rate lost)" if the rate stood in a lost part; "interest-free" only if the text
  says so (ἄτοκος); null if no interest is stated. Penalty interest is not the loan's interest.
- duration: the term as the document writes it, each date followed by its BC/AD equivalent in
  brackets (codebook.md): "until Payni, year 16 of Hadrian (= May/June AD 132)", "until Phamenoth
  30, year 10 of Antoninus Pius (= 26 March AD 147)", "6 months". Emperor always named
  unambiguously (Caesar = Augustus, Antoninus = Antoninus Pius). null if lost.
- source: the principal edition in Checklist form: series abbreviation, volume in ARABIC
  numerals, number: "P.Oxy. 3 506", "BGU 1 101", "P.Mich. 2 121", "SB 6 9109", "P.Fay. 11",
  "P.Tebt. 2 384", "CPR 1 12", "SPP 20 15", "O.Claud. 2 230". Use the HGV `edition` field
  (convert Roman volume numerals). Keep side/letter suffixes (e.g. "P.Mich. 9 567 r"). For
  journal first editions use e.g. "ZPE 222 (2022) 179" unless HGV gives an SB number.
- source_url: computed by the coordinator; do NOT output it.
- notes: do NOT output; the coordinator fills notes with the original text and its English
  translation (TRANSLATE.md).

## Output
Write a JSON file (path given in your task) — a list with ONE object per candidate, in order:
{"hgv": "<id>", "decision": "include" | "exclude", "reason": "<short; for excludes the category,
 e.g. 'receipt for repayment', 'register of contracts', 'loan in kind in a letter', 'too
 fragmentary'>", "doc_type": "contract" | "petition" | "letter" | "other",
 "loans": [ {"place":..., "amount": number|null, "currency":..., "borrower":..., "lender":...,
   "interest":..., "duration":..., "source":...} ] }
For excludes, loans = []. Valid JSON only (use null, not "—"). Then reply with one line:
counts of included documents, loan rows, excluded documents.
