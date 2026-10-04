# ALD Codebook

Field definitions for the Ancient Loans Database. The structure is defined in `schema.sql`.

## General rules

- **What counts.** Every loan transaction a source documents, none missed and none repeated: loan contracts (in money or in kind), loans mentioned in petitions or letters, earlier loans a document refers to as loans (including loans it annuls or replaces), and loans recorded in accounts, registers and abstracts of contracts. Not loans: advances (*prochreia*) the source does not call a loan, and debts known only from the word "lender" (*daneistes*). A loan already recorded from another document is not entered again.
- **One row per loan.** A loan is one credit transaction. If a source records several loans, each gets its own row. A contract that lends both money and goods (e.g. drachmas and wheat) gets one row per part.
- **Stable IDs.** IDs are sequential (`ALD-000001`, `ALD-000002`, ...), assigned automatically in order of entry, never changed and never reused. The number carries no meaning; year, place and source are in their own fields. Gaps in the sequence are normal.
- **Empty means unknown.** Leave a field empty when the source does not say. Never guess.
- **Record what the source says.** Do not convert or interpret values beyond what each field asks for.

## loans

| Field | Definition | Example |
|---|---|---|
| `id` | Assigned automatically | `ALD-000001` |
| `year` | Year of the loan, written `AD n` or `n BC` (AD before the number, BC after). There is no year 0: 1 BC is followed by AD 1. If the year is not certain, give the range of possible years: `AD 101-200`, `24-23 BC`, `30 BC-AD 14` | `AD 57`, `100 BC`, `AD 101-200` |
| `place` | Where the loan was made, followed by the region or province it belonged to at the time (in its standard English name), so every place can be located and grouped. A village may also name its district in brackets | `Oxyrhynchus, Egypt`, `Sinary (Oxyrhynchite nome), Egypt` |
| `amount` | Amount lent (the principal), as written in the source: a whole number, or a fraction in lowest terms (`whole num/den`). Never decimals | `100`, `12 1/6`, `2/3` |
| `currency` | Currency or unit of `amount`, singular. For loans in kind, add the commodity in brackets | `drachma`, `artaba (wheat)` |
| `borrower` | Name(s) of the borrower(s); separate several with `;` | `Tryphon` |
| `lender` | Name(s) of the lender(s); separate several with `;` | `Thaisous` |
| `interest` | Interest as stated: the formula, then the rate as a percentage in brackets. `interest-bearing (rate not stated)` if the source calls the loan interest-bearing without a rate; `interest-bearing (rate lost)` if the rate is in a lost part of the text. Empty if no interest is stated | `1 drachma per mina per month (1% per month)` |
| `duration` | Term of the loan as stated. A date is given as the document writes it, with the emperor named unambiguously (Augustus, Antoninus Pius, Marcus Aurelius and Lucius Verus, ...), followed by its BC/AD equivalent in brackets: a day converts to its Julian date; an Egyptian month (which straddles two Roman months) to the pair of Roman months it covers; a regnal year to the BC/AD years it spans. If the document can belong to more than one reign, all are given (`year 12 of Claudius or Nero (= AD 51/52 or AD 65/66)`); if no emperor is named or datable, `(emperor not named)` | `6 months`, `until Phamenoth 30, year 20 of Antoninus Pius (= 26 March AD 157)`, `until Payni, year 2 of Tiberius (= May/June AD 16)` |
| `source` | Citation of the primary source, in standard form (papyri: *Checklist of Editions of Greek, Latin, Demotic and Coptic Papyri, Ostraca and Tablets*). Required | `P.Oxy. 3 506` |
| `source_url` | Link to the source online, if available | `https://papyri.info/...` |
| `notes` | The original text of the document (Greek or Latin, in Leiden notation as in the edition cited) and an English translation, in two sections headed `Original Text:` and `English translation:`. Shown only on the loan's own page, not in the main table | |
| `year_sort` | Filled automatically from `year`, for sorting (`100 BC` = `-100`, `AD 57` = `57`; a range sorts by its first year). Never entered by hand | `-100` |
