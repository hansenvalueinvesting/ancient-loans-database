# ALD Codebook

Field definitions for the Ancient Loans Database. The structure is defined in `schema.sql` (this folder).

## General rules

- **What is a loan.** A loan is when someone borrows money (or goods) from a lender with the intention of returning it, with or without interest. Whether a transaction is a loan depends on the transaction itself, not on whether the source uses the word for loan: payments for goods or services (sales on credit, wages, work advances) are not loans even when called so.
- **What counts.** The database is a ledger of loans actually made: every loan transaction a source documents, none missed and none repeated, each individual loan recorded separately. Loan contracts (in money or in kind), loans mentioned in petitions or letters, loans copied or abstracted in contract registers, and earlier loans a document refers to (including loans it annuls or replaces). Court records only where they clearly show a loan not otherwise recorded. Not included: state loans of grain to cultivators, and arrangements not called a loan (pawns, loans of animals or tools, advances for work, antichretic leases). The source need not use the word "loan": what decides is whether the text shows a loan that was actually made. A loan already recorded from another document is not entered again.
- **One row per loan.** A loan is one credit transaction. If a source records several loans, each gets its own row. A contract that lends both money and goods (e.g. drachmas and wheat) gets one row per part.
- **Stable IDs.** IDs are sequential (`ALD-000001`, `ALD-000002`, ...), assigned automatically in order of entry, never changed and never reused. The number carries no meaning; year, place and source are in their own fields. Gaps in the sequence are normal.
- **Empty means unknown.** Leave a field empty when the source does not say. Never guess.
- **Record what the source says.** Do not convert or interpret values beyond what each field asks for.

## loans

| Field | Definition | Example |
|---|---|---|
| `id` | Assigned automatically | `ALD-000001` |
| `year` | Year the loan was made (an earlier loan named in a later document gets its own year, not the document's; if the source does not date the loan at all, the document's year is kept, as the year the loan is recorded), written `AD n` or `n BC` (AD before the number, BC after). There is no year 0: 1 BC is followed by AD 1. If the year is not certain, give the range of possible years: `AD 101-200`, `24-23 BC`, `30 BC-AD 14` | `AD 57`, `100 BC`, `AD 101-200` |
| `place` | Where the loan was made, followed by the region or province it belonged to at the time (in its standard English name), so every place can be located and grouped. A village may also name its district in brackets | `Oxyrhynchus, Egypt`, `Sinary (Oxyrhynchite nome), Egypt` |
| `amount` | Amount lent (the principal), as written in the source, in the unit(s) the source uses: a whole number, or a fraction in lowest terms (`whole num/den`). Never decimals, never converted into another unit. If the source states the sum in several units, each number is followed by its unit, in the source's order. Where part of the sum is lost, `[...]` stands where the loss is. If the source states the sum only together with the interest (e.g. "with the half"), the sum as written | `100`, `12 1/6`, `2/3`, `2 talents 4800 drachmas`, `53 drachmas 2 obols`, `1 [...]`, `[...] 45` |
| `currency` | Currency or unit of `amount` as the source gives it, singular; several units separated by `; `. For loans in kind, add the commodity in brackets; if the source names the metal of the money, add it in brackets | `drachma`, `talent`, `talent; drachma`, `drachma (copper)`, `artaba (wheat)` |
| `borrower` | Name(s) of the borrower(s), in Latinized English form, `X son of Y` / `X daughter of Y`, `alias Z`; separate several with `;` | `Tryphon`, `Dioscorus son of Sarapion` |
| `lender` | Name(s) of the lender(s), in the same form as `borrower`; separate several with `;` | `Thaisous` |
| `interest` | Interest as stated: the formula, then the rate as a percentage in brackets. `interest-bearing (rate not stated)` if the source calls the loan interest-bearing without a rate; `interest-bearing (rate lost)` if the rate is in a lost part of the text. Empty if no interest is stated | `1 drachma per mina per month (1% per month)` |
| `duration` | Term of the loan as stated. A date is given as the document writes it, with the emperor named unambiguously (Augustus, Antoninus Pius, Marcus Aurelius and Lucius Verus, ...), followed by its BC/AD equivalent in brackets: a day converts to its Julian date; an Egyptian month (which straddles two Roman months) to the pair of Roman months it covers; a regnal year to the BC/AD years it spans. If the document can belong to more than one reign, all are given (`year 12 of Claudius or Nero (= AD 51/52 or AD 65/66)`); if no emperor is named or datable, `(emperor not named)` | `6 months`, `until Phamenoth 30, year 20 of Antoninus Pius (= 26 March AD 157)`, `until Payni, year 2 of Tiberius (= May/June AD 16)` |
| `source` | Citation of the primary source, in standard form (papyri: *Checklist of Editions of Greek, Latin, Demotic and Coptic Papyri, Ostraca and Tablets*, arabic volume numbers; journal first editions as journal, volume, (year), page). Required | `P.Oxy. 3 506`, `ZPE 222 (2022) 179` |
| `source_url` | Link to the source online, if available | `https://papyri.info/...` |
| `notes` | The original text of the document (Greek or Latin, in Leiden notation as in the edition cited) and an English translation, in two sections headed `Original Text:` and `English translation:`, followed by a credit line for the text's source and licence. Shown only on the loan's own page, not in the main table | |
| `year_sort` | Filled automatically from `year`, for sorting (`100 BC` = `-100`, `AD 57` = `57`; a range sorts by its first year). Never entered by hand | `-100` |
