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

Structure set by Hansen (Nov 2026), standardized for analysis (charts, maps). Ten fields, in this order (Hansen: amount and currency in separate columns so downloaded data is usable; the source is the first part of `notes`).

| Field | Definition | Example |
|---|---|---|
| `id` | `ALD-` + the source citation + `-` + the loan's number within that source (1, 2, 3, ... in the order the loans appear in the source). In the citation, spaces become dots and superscript digits plain digits. Fixed at entry: never changed (even if the source is later re-edited or renumbered) and never reused (Hansen, Nov 2026) | `ALD-P.Oxy.3.506-1`, `ALD-P.Oxy.3.506-2`, `ALD-IG.I3.369-14`, `ALD-Dem.35.10-1` |
| `borrower` | Name(s) of the borrower(s), in Latinized English form, `X son of Y` / `X daughter of Y`, `alias Z`; separate several with `; ` | `Tryphon`, `Dioscorus son of Sarapion` |
| `lender` | Name(s) of the lender(s), in the same form as `borrower` | `Thaisous` |
| `amount` | Principal lent, number only: whole number or fraction in lowest terms, never decimals, never converted. A sum in several units: one number per unit, separated by `; `, in the source's order, matching `currency` position by position. Lost part: `[...]` where the loss is | `100`, `12 1/6`, `2/3`, `2; 4800`, `53; 2`, `1 [...]` |
| `currency` | Currency or unit of `amount`, singular, lowercase, as the source gives it; commodity of a loan in kind, or the metal the source names, in brackets; several units separated by `; `, matching `amount` | `drachma`, `artaba (wheat)`, `talent; drachma`, `drachma; obol`, `drachma (silver)` |
| `interest` | Interest as stated: the formula, then the rate as a percentage in brackets. `interest-bearing (rate not stated)` if the source calls the loan interest-bearing without a rate; `interest-bearing (rate lost)` if the rate is in a lost part of the text. Empty if no interest is stated | `1 drachma per mina per month (1% per month)` |
| `date` | Year the loan was made, `AD n` or `n BC` (no year 0); uncertain: the range of possible years `AD 101-200`, `24-23 BC`, `30 BC-AD 14`. An earlier loan named in a later document gets its own year; if the source does not date the loan, the document's year | `AD 57`, `100 BC`, `AD 101-200` |
| `duration` | Term of the loan as stated; a date as the document writes it, followed by its BC/AD equivalent in brackets | `6 months`, `until Phamenoth 30, year 20 of Antoninus Pius (= 26 March AD 157)` |
| `place` | Where the loan was made, by its ancient name, Latinized (`Heracleopolis`); a village may name its district in brackets | `Oxyrhynchus`, `Sinary (Oxyrhynchite nome)` |
| `notes` | Three sections, in this order, separated by a blank line (Hansen, Nov 2026): (1) `Source: <citation> (<link>)`: the citation of the primary source in standard form (papyri: Checklist, arabic volume numbers; inscriptions: corpus citation; literary texts: author, work, passage), required, followed by the link to its online edition in brackets if there is one; shown on the loan's page as a link; (2) `Original Text:` and the original text, line by line, as in the edition; (3) `English translation:` and a faithful translation. Shown only on the loan's own page | `Source: P.Oxy. 3 506 (https://papyri.info/ddbdp/p.oxy;3;506)`<br><br>`Original Text:`<br>`...`<br><br>`English translation:`<br>`...` |
