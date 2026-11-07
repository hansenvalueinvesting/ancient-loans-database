# ALD Codebook

Field definitions for the Ancient Loans Database. The data is `ald.csv` (repository root), one row per loan, columns in the order below. The previous build (13 fields incl. period, currency, source_url, notes) is archived in `ald1.csv`; its codebook is in git history.

## General rules

- **Standing rules.** Periods and other classifications follow their academic definitions (Hansen, Oct 2026). Only transactions that are strictly loans are recorded: financial arrangements where an entity provides money to another with the expectation of repayment over time, often including interest as a cost of borrowing (Hansen, Oct 2026).
- **What is a loan.** A loan is when someone borrows money (or goods) from a lender with the intention of returning it, with or without interest. Whether a transaction is a loan depends on the transaction itself, not on whether the source uses the word for loan: payments for goods or services (sales on credit, wages, work advances) are not loans even when called so.
- **What counts.** The database is a ledger of loans actually made: every loan transaction a source documents, none missed and none repeated, each individual loan recorded separately. Loan contracts (in money or in kind), loans mentioned in petitions or letters, loans copied or abstracted in contract registers, and earlier loans a document refers to (including loans it annuls or replaces). Court records only where they clearly show a loan not otherwise recorded. Not included: state loans of grain to cultivators, and arrangements not called a loan (pawns, loans of animals or tools, advances for work, antichretic leases). The source need not use the word "loan": what decides is whether the text shows a loan that was actually made. A loan already recorded from another document is not entered again.
- **One row per loan.** A loan is one credit transaction. If a source records several loans, each gets its own row. A contract that lends both money and goods (e.g. drachmas and wheat) gets one row per part.
- **Empty means unknown.** Leave a field empty when the source does not say. Never guess.
- **Record what the source says.** Do not convert or interpret values beyond what each field asks for.

## loans

Structure set by Hansen (Nov 2026), standardized for analysis (charts, maps). Nine fields, in this order.

| Field | Definition | Example |
|---|---|---|
| `id` | ID system being decided with Hansen | |
| `borrower` | Name(s) of the borrower(s), in Latinized English form, `X son of Y` / `X daughter of Y`, `alias Z`; separate several with `; ` | `Tryphon`, `Dioscorus son of Sarapion` |
| `lender` | Name(s) of the lender(s), in the same form as `borrower` | `Thaisous` |
| `amount` | Principal lent, with its currency or unit: each number (whole number or fraction in lowest terms, never decimals) followed by its unit, singular, lowercase, as the source gives it, never converted; commodity of a loan in kind, or the metal the source names, in brackets after the unit; several units in the source's order. Lost part: `[...]` where the loss is | `100 drachma`, `12 1/6 artaba (wheat)`, `2 talent 4800 drachma`, `53 drachma 2 obol`, `1 [...] talent`, `200 drachma (silver)` |
| `interest` | Interest as stated: the formula, then the rate as a percentage in brackets. `interest-bearing (rate not stated)` if the source calls the loan interest-bearing without a rate; `interest-bearing (rate lost)` if the rate is in a lost part of the text. Empty if no interest is stated | `1 drachma per mina per month (1% per month)` |
| `date` | Year the loan was made, `AD n` or `n BC` (no year 0); uncertain: the range of possible years `AD 101-200`, `24-23 BC`, `30 BC-AD 14`. An earlier loan named in a later document gets its own year; if the source does not date the loan, the document's year | `AD 57`, `100 BC`, `AD 101-200` |
| `duration` | Term of the loan as stated; a date as the document writes it, followed by its BC/AD equivalent in brackets | `6 months`, `until Phamenoth 30, year 20 of Antoninus Pius (= 26 March AD 157)` |
| `place` | Where the loan was made, by its ancient name, Latinized (`Heracleopolis`); a village may name its district in brackets | `Oxyrhynchus`, `Sinary (Oxyrhynchite nome)` |
| `source` | Citation of the primary source in standard form (papyri: Checklist, arabic volume numbers; inscriptions: corpus citation; literary texts: author, work, passage). Required | `P.Oxy. 3 506`, `IG I³ 369`, `Dem. 35.10` |
