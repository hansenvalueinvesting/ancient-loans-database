# The Ancient Loans Database (ALD)

A systematic, standardized record of every documented loan in the ancient world, for scholars to search, compare and analyze ancient credit. Each row is one loan, with its date, place, amount, currency, parties, interest, term, source, and the original text with an English translation. Created and maintained by Hansen Zheng.

Data: `ald.csv` (one row per loan). Field definitions: `reference/codebook.md`. Viewer: `docs/` (GitHub Pages).

## Change log

**2026-11-10 (Latin full reading, first stop: 126 works)**
- The 16 loans reported by the full reading of 126 Latin works (see coverage_log.md) checked against the texts, ald.csv and need_review.md: 12 already in the data; 2 already in need_review.md (Verr. 2.3.165, the tax companies not named; Caesar's claim on Cicero, Att. 5.1.2 / 7.3.11); 2 added to need_review.md (Verr. 2.1.100-102, Att. 11.11.2). No rows added.
- ALD-Cic.Flac.51-1: borrower corrected from "Apollonides" to Lysanias ("abduxisti Temno Apollonidem" = took him from Temnus to the town of Apollonis).

**2026-11-09 (specific loans only)**
- Removed 10 literary rows that mention borrowing without a specific loan (Hansen: "i only want you to include specific loans, not literally any mention of lending"): ALD-Caes.BC.1.39.3-1, ALD-Caes.BC.3.60.5-1, ALD-Cic.Att.8.6.4-1, ALD-Cic.Att.11.13.4-2, ALD-Cic.Att.16.15.5-1, ALD-Cic.Verr.2.1.28-1, ALD-Liv.31.13.2-1, ALD-Liv.32.2.2-1, ALD-Plin.Ep.3.11.2-2, ALD-Sall.Cat.24-1. Database: 230 loans.

**2026-11-09 (Latin authors)**
- Added 11 loans from Latin authors other than Cicero (Perseus, CC BY-SA 4.0): ALD-Caes.BC.1.39.3-1 - ALD-Sen.Ben.4.39.1-1 (Caesar, Nepos, Sallust, Livy, Seneca, Gellius, Pliny the Younger; 210 BC - AD 107). 9 entries added to `need_review.md`. Database: 240 loans.

**2026-11-09 (spouses)**
- Husbands, wives and mothers identified by a named person stand without "(unnamed)" (Hansen), as patronymics: 25 rows of the Michigan registers (P.Mich. 2 121 Vo, 5 237, 238 Ro, 240, 2 128), e.g. "Orseus; wife of Orseus". Database: 229 loans.

**2026-11-09 (unnamed parties)**
- Unnamed parties keep the form "others (unnamed)" (Hansen): ALD-Cic.Att.8.6.4-1, ALD-Cic.Att.11.13.4-2, ALD-Cic.Verr.2.1.28-1. Patronymics and matronymics count as names, "(unnamed)" dropped: ALD-Cic.Att.10.11.2-1 (son of Quintus Axius), ALD-P.Mich.5.238.Ro-7 (son of Thenkebkis). Database: 229 loans.

**2026-11-09 (Cicero)**
- Added 16 loans from Cicero (all works in the Perseus Latin texts, 281 passages with loan vocabulary read; texts CC BY-SA 4.0): ALD-Cic.Att.5.21.10-1 - ALD-Cic.Verr.2.1.28-1 (letters to Atticus, Pro Flacco, In Pisonem, Pro Rabirio Postumo, De haruspicum responso, In Verrem; 73-44 BC). 10 entries added to `need_review.md`. Map: Rome located (Pleiades). Database: 229 loans.

**2026-11-09 (Murecine tablets)**
- Added 10 loans from the Murecine tablets (archive of the Sulpicii, Puteoli, AD 37-52; all 127 tablets of TPSulp. reviewed, texts from EDCS via LIST, CC BY 4.0): ALD-TPSulp.51-1 - ALD-TPSulp.67-1. 9 entries added to `need_review.md`. Map: Puteoli located (Pleiades). Database: 213 loans.

**2026-11-09 (Michigan series done)**
- Reviewed the remaining Michigan series: O.Mich. 1-4 (1,142 numbers), P.Cair.Mich. 1-3 (60), P.Mich.Aphrod. (1), P.Mich.Mchl. (28), O.Mich.Copt. (1, no text); 14 candidates read, no loans. 3 entries added to `need_review.md`. Database: 203 loans (unchanged).

**2026-11-09 (P.Mich. registers)**
- Added 71 loans from the record-office registers and abstracts of Tebtunis (Hansen: "enter them"): ALD-P.Mich.2.121.Vo-1 - 27 (AD 42), ALD-P.Mich.5.237-1 - 2 (AD 43), ALD-P.Mich.5.238.Ro-1 - 36 (AD 46), ALD-P.Mich.5.240-1 - 3, ALD-P.Mich.2.128-1 (AD 46), ALD-P.Mich.5.241-1 - 2 (AD 16). One row per loan entry; entries repeated in other registers (P.Mich. 2 124, 128; 5 239, 240) entered once, variants in the notes; loans with habitation in place of interest left out. 6 entries added to `need_review.md`. Database: 203 loans.

**2026-11-09 (P.Mich.)**
- Added 15 loans from the Michigan papyri (P.Mich. 1-21; 866 numbers reviewed, 787 with a text online): ALD-C.Epist.Lat.154-1, ALD-P.Mich.1.32-1 - ALD-P.Mich.12.633-1. The record-office registers (P.Mich. 2, 5) are not yet entered. 7 entries added to `need_review.md`. Map: seven Egyptian places located (Pleiades). `coverage_log.md` (Hansen) restructured. Database: 132 loans.

**2026-11-08 (P.Oxy. 72-88)**
- Added 16 loans from P.Oxy. 72-88, the last volumes on papyri.info (all 595 numbers reviewed; 444 with a text): ALD-P.Oxy.72.4896-1 - ALD-P.Oxy.87.5592-1. 7 entries added to `need_review.md`. P.Oxy. series complete. Database: 117 loans.

**2026-11-08 (P.Oxy. 62-71)**
- Added 11 loans from P.Oxy. 62-71 (all 526 numbers reviewed; 270 with a text on papyri.info): ALD-P.Oxy.63.4394-1 - ALD-P.Oxy.71.4835-1. 4 entries added to `need_review.md`. Map: Alexandria and Constantinople located (Pleiades). Database: 101 loans.

**2026-11-08 (column order)**
- Columns reordered (Hansen): id, place, date, duration (years), borrower, lender, volume, currency, interest (%), notes; same order on the site. No data changed. Database: 90 loans.

**2026-11-08 (P.Oxy. 52-61)**
- Added 4 loans from P.Oxy. 52-61 (all 486 numbers reviewed; 294 with a text on papyri.info): ALD-P.Oxy.55.3798-1, ALD-P.Oxy.61.4120-1, ALD-P.Oxy.61.4124-1, ALD-P.Oxy.61.4125-1. 5 entries added to `need_review.md`. Database: 90 loans.

**2026-11-08 (P.Oxy. 48 3393)**
- Added ALD-P.Oxy.48.3393-1 (Hansen: "add"; loan from unnamed moneylenders, sum not given), moved from `need_review.md`. Database: 86 loans.

**2026-11-08 (P.Oxy. 42-51)**
- Added 10 loans from P.Oxy. 42-51 (all 640 numbers reviewed; 499 with a text on papyri.info): ALD-P.Oxy.44.3198-1 - ALD-P.Oxy.50.3599-1. 8 entries added to `need_review.md`. Map: Sinary located (Pleiades). Database: 85 loans.

**2026-11-07 (decisions)**
- P.Oxy. 36 2773 (loom used in place of interest) removed from `need_review.md`: excluded entirely (Hansen). ALD-SB.14.11847-1 stays in the data. Database: 75 loans.

**2026-11-07 (P.Oxy. 32-41)**
- Added 7 loans from P.Oxy. 32-41 (all 379 numbers reviewed; 249 with a text on papyri.info): ALD-P.Oxy.34.2722-1, ALD-P.Oxy.36.2774-1, ALD-P.Oxy.36.2775-1 - 2 (estate seed loans), ALD-P.Oxy.38.2834-1, ALD-P.Oxy.38.2848.Vo-1, ALD-P.Oxy.41.2956-1 (state seed loan). 1 text added to `need_review.md`. Database: 75 loans.

**2026-11-07 (lenders)**
- Lenders that are not named persons now in a standard form (Hansen): `state (public granary)` (ALD-P.Oxy.7.1024-1, 10.1262.Ro-1, 18.2185-1), `Oxyrhynchus (city council)` (12.1501-1), `Apion (heirs)` (16.1976-1), `friends (unnamed)` (14.1665-1). Translation of ALD-SB.14.11847-1 corrected ("lent" in l. 4). Database: 68 loans.

**2026-11-07 (P.Oxy. 22-31)**
- Added 2 loans from P.Oxy. 22-31 (all 293 numbers reviewed; 105 with a text on papyri.info): ALD-P.Oxy.22.2350-1, ALD-P.Oxy.27.2471-1. 3 texts added to `need_review.md`. Database: 68 loans.

**2026-11-07 (P.Oxy. 19-21)**
- Added 1 loan from P.Oxy. 19-21 (all 101 numbers reviewed; 42 with a text on papyri.info): ALD-P.Oxy.19.2237-1. Database: 66 loans.

**2026-11-07 (P.Oxy. 15-18)**
- Added 8 loans from P.Oxy. 15-18 (all 409 numbers reviewed; 307 with a text on papyri.info): ALD-P.Oxy.16.1891-1 - ALD-P.Oxy.18.2185-1. 4 texts added to `need_review.md`. Database: 65 loans.

**2026-11-07 (P.Oxy. 12-14)**
- Added 13 loans from P.Oxy. 12-14 (all 377 numbers reviewed; 345 with a text on papyri.info): ALD-P.Oxy.12.1471-1 - ALD-P.Oxy.14.1724-2, ALD-SB.30.17614-1. 10 texts added to `need_review.md`. Database: 57 loans.

**2026-11-07 (P.Oxy. 9-11)**
- Added 3 loans from P.Oxy. 9-11 (all 229 numbers reviewed; 140 with a text on papyri.info): ALD-P.Oxy.10.1262.Ro-1 (state seed loan), ALD-P.Oxy.10.1282-1, ALD-SB.14.11847-1. 3 texts added to `need_review.md`. Database: 44 loans.

**2026-11-07 (state seed loans)**
- State seed loans kept, noted as such (Hansen): added ALD-P.Oxy.7.1024-1; P.Oxy. 7 1031 (application only) added to `need_review.md`. Database: 41 loans.

**2026-11-07 (P.Oxy. 6-8)**
- Added 4 loans from P.Oxy. 6-8 (all 325 numbers reviewed; 232 with a text on papyri.info): ALD-P.Oxy.7.1040-1, ALD-P.Oxy.7.1042-1, ALD-P.Oxy.8.1118-1, ALD-P.Oxy.8.1132-1. 10 texts added to `need_review.md` (incl. P.Oxy. 8 1130). Database: 40 loans.

**2026-11-07 (interest method)**
- ALD-P.Oxy.1.98-1: calculated interest now (extra sum / sum lent / years) = 1.68-1.75 (was 3.29, a rate on the balance still owed). Database: 36 loans.

**2026-11-07 (calculated interest)**
- Calculated rates where no rate is stated but the sums and dates are given, with the working in the notes: ALD-P.Oxy.1.98-1 (3.29), ALD-SB.14.11491-1 (72.25). Database: 36 loans.

**2026-11-07 (interest)**
- Columns renamed `interest (%)` and `duration (years)`. Interest is now the rate in percent per year (simple, monthly rate x 12): 6 loans with a rate (12, 6 or 8); the rate as written and loans called interest-bearing without a rate are in the notes (`Interest: ...`). Database: 36 loans.

**2026-11-07 (duration)**
- `duration` is now the term in years as a number (e.g. `0.28`, `1.92-2.00` when a date is known only to the month); the term as written moved to the notes (`Term: ...`). 14 loans have a computed duration; 2 terms are not computable (dates lost). Database: 36 loans.

**2026-11-07 (IDs, final)**
- The 11 texts only described in P.Oxy. now carry the citation of the edition that prints their text, as scholars cite them (Hansen): ALD-P.Oxy.2.304-1 -> ALD-SB.10.10246-1, 2.305-1 -> ALD-SB.10.10222-1, 2.319-1 -> ALD-SB.10.10238-1, 2.320-1 -> ALD-SB.14.11491-1, 2.323-1 -> ALD-SB.10.10234-1, 2.343-1 -> ALD-P.Dubl.6-1, 2.362-1 -> ALD-SB.20.14096-1, 2.373-1 -> ALD-ZPE.222.179-1, 3.592-1 -> ALD-SB.12.10781.Ro-1, 3.636-1 -> ALD-Stud.Pal.4.p.114-1, 4.836-1 -> ALD-SB.26.16745-1 (all old IDs ALD-P.Oxy.). Source lines read e.g. "SB 10 10246 (= P.Oxy. 2 304 descr.)"; same in `need_review.md`. Database: 36 loans.

**2026-11-07 (IDs)**
- The 11 re-edited texts from P.Oxy. 2-4 now carry their P.Oxy. number (Hansen): ALD-P.Dubl.6-1 -> ALD-P.Oxy.2.343-1, ALD-SB.10.10246-1 -> ALD-P.Oxy.2.304-1, ALD-SB.10.10222-1 -> 2.305-1, ALD-SB.10.10238-1 -> 2.319-1, ALD-SB.14.11491-1 -> 2.320-1, ALD-SB.10.10234-1 -> 2.323-1, ALD-SB.20.14096-1 -> 2.362-1, ALD-ZPE.222.179-1 -> 2.373-1, ALD-SB.12.10781r-1 -> 3.592-1, ALD-Stud.Pal.4.p.114-1 -> 3.636-1, ALD-SB.26.16745-1 -> 4.836-1 (all ALD-P.Oxy.). Source lines now read e.g. "P.Oxy. 2 304 (= SB 10 10246)". Database: 36 loans.

**2026-11-07 (P.Oxy. 2-5)**
- Added 30 loans from P.Oxy. 2-5 (all 599 numbers reviewed; 401 with a text on papyri.info): ALD-P.Oxy.2.237-1 - ALD-P.Oxy.4.836-1 (IDs as corrected below). 16 loan-like texts added to `need_review.md`. Note of ALD-P.Oxy.1.133-1 re-rendered (spacing of illegible letters in l. 28). Database: 36 loans.

**2026-11-07 (notes)**
- Notes of the 6 P.Oxy. 1 loans: remarks shortened, no "Notes:" heading, nothing repeated from the fields.

**2026-11-07 (rename)**
- `semi_loans.md` renamed `need_review.md`.

**2026-11-07 (P.Oxy. 1)**
- Added ALD-P.Oxy.1.68-1 - ALD-P.Oxy.1.133-1 (6 loans): P.Oxy. 1, all 211 numbers reviewed (177 with a text on papyri.info). 4 loan-like texts not entered listed in `need_review.md`. Notes now end with a Notes section and the credit line. Database: 6 loans.

**2026-11-07 (restart)**
- New structure: 10 fields (id, borrower, lender, volume, currency, interest, date, duration, place, notes); notes = hyperlinked source, original text, English translation; period, source and source_url columns dropped; year renamed date. New IDs: `ALD-` + source citation + loan number, e.g. `ALD-P.Oxy.3.506-1`. Codebook and website updated.
- Database restarted. `ald.csv` emptied (header only); all 1,349 previous loans (ALD-000001 - 001802) moved unchanged to `ald1.csv` as an archive. Database: 0 loans.

**2026-10-18 (data moved from Supabase to `ald.csv`)**
- The data now lives in `ald.csv` in this repository, like the Ancient Taxation Database; the website reads the CSV. Exported from Supabase and checked field by field (checksums of all fields and notes identical). Supabase schema file and release workflow removed; the period table is now in the codebook.
- The export holds 1,349 loans, not the 944 last logged: 405 of the 555 rows removed by the formal-loan audit only for a missing borrower, lender or principal had been put back in the database (a restore Hansen approved) without a change-log entry. The other 150 of those 555 were not restored: ALD-000703, 000705 - 000706, 000708, 000713 - 000715, 000718 - 000720, 000724 - 000725, 000733, 000735, 000740, 000746, 000753 - 000756, 000758, 000765, 000769, 000772, 000780, 000785 - 000786, 000790, 000793, 000796, 000806, 000816, 000829 - 000830, 000832, 000835 - 000836, 000840, 000842, 000845, 000858, 000860 - 000863, 000985, 000987 - 000989, 000993 - 000997, 001001, 001008, 001010, 001012, 001015, 001019 - 001021, 001032, 001035 - 001037, 001039, 001041, 001045, 001048, 001052, 001064, 001067 - 001071, 001256 - 001257, 001266, 001272, 001280 - 001281, 001284 - 001285, 001290 - 001301, 001304 - 001310, 001313, 001315 - 001316, 001318 - 001319, 001321, 001324 - 001327, 001330, 001334, 001337, 001343 - 001344, 001349 - 001352, 001359, 001369 - 001370, 001372, 001374, 001377, 001380 - 001381, 001383 - 001384, 001388 - 001395, 001411 - 001412, 001414 - 001419, 001426. Database: 1,349 loans.

**2026-10-07 (re-check of excluded debts under the current rule)**
- Added ALD-001681 - 001802 (122 loans, 113 documents): papyri previously excluded as debt acknowledgements, advances repaid in money, or earlier loans named in receipts, re-read under Hansen's current rule (every unique debt transaction where money or goods were received to be returned). Ptolemaic, Roman, Late Roman and Early Islamic Egypt, plus one each from Nessana, Constantinople and the Euphrates. Database: 944 loans.

**2026-10-07 (Coptic loans, Crum 1909)**
- Added ALD-001670 - 001680 (11 loans): P.Ryl.Copt. 191-207, Coptic loan and debt acknowledgements from the Hermopolite nome (Early Islamic Egypt). Original text unavailable; English from W. E. Crum, Catalogue of the Coptic Manuscripts in the John Rylands Library (1909). Database: 822 loans.

**2026-10-07 (Early Islamic Egypt pass)**
- Added ALD-001666 - 001669 (4 loans): Greek and Coptic papyri from Egypt dated AD 642-800 (DDbDP; Early Islamic Egypt). Database: 811 loans.

**2026-10-07 (removal)**
- Removed ALD-001607 (Plin. HN 9.171, Hirrius's moray eels for Caesar): not a loan (Hansen). Database: 807 loans.

**2026-10-07 (Late Antique full-text pass)**
- Added ALD-001659 - 001665 (7 loans): Late Antique Egypt (AD 284-641), full-text search of the papyri not tagged as loans in HGV (383 documents with loan vocabulary reviewed under the formal-loan rule, 6 with loans): Hermopolis, Arsinoite nome, Oxyrhynchus, and two loans made at Constantinople (P.Oxy. 63 4397). Database: 808 loans.

**2026-10-07 (formal-loan audit)**
- Hansen's rule applied to the whole database: a row must formally be one individual loan (loan contract, acknowledgement, loan-register entry, or a text stating the loan), not a sale, lease, advance, deposit, debt, treasury payment, gift or other transaction, with borrower, lender and principal given. Removed 643 rows (run by Hansen in the SQL Editor, verified). Database: 801 loans.
- Removed, borrower, lender or principal not given or not one individual loan (555): ALD-000005, 000008, 000017, 000019, 000022 - 000024, 000028, 000044, 000049, 000055, 000057, 000072, 000077, 000083 - 000084, 000089, 000092 - 000093, 000096, 000107, 000111, 000114 - 000115, 000125, 000132, 000151 - 000153, 000156, 000160, 000164, 000166, 000168 - 000169, 000171, 000173, 000175, 000178 - 000179, 000188 - 000189, 000193, 000197, 000208 - 000209, 000211, 000217, 000226, 000230, 000233, 000243 - 000245, 000249, 000251 - 000252, 000256, 000258, 000260 - 000263, 000287 - 000288, 000294, 000297, 000303, 000310 - 000311, 000313, 000316, 000323 - 000325, 000329, 000332, 000339, 000347 - 000349, 000352, 000354, 000363, 000367, 000370, 000372 - 000373, 000376, 000380, 000382, 000384, 000387, 000389, 000396 - 000397, 000399 - 000406, 000409, 000416 - 000418, 000420 - 000421, 000423 - 000424, 000433, 000435 - 000437, 000441, 000446, 000451, 000456, 000463, 000466 - 000467, 000474, 000477 - 000478, 000493, 000495, 000502 - 000505, 000514, 000518 - 000520, 000522, 000524 - 000525, 000528, 000531, 000534, 000536 - 000540, 000547 - 000550, 000553, 000557, 000560 - 000561, 000567 - 000568, 000572, 000581 - 000582, 000586 - 000591, 000593, 000604 - 000608, 000610, 000613, 000615, 000617, 000620 - 000621, 000637 - 000639, 000646 - 000647, 000654, 000661, 000678, 000680, 000686, 000688, 000690, 000692, 000695, 000697 - 000698, 000702 - 000703, 000705 - 000706, 000708, 000713 - 000715, 000718 - 000720, 000724 - 000725, 000733, 000735, 000740, 000746, 000753 - 000756, 000758, 000765, 000769, 000772, 000780, 000785 - 000786, 000790, 000793, 000796, 000806, 000816, 000829 - 000830, 000832, 000835 - 000836, 000840, 000842, 000845, 000858, 000860 - 000863, 000985, 000987 - 000989, 000993 - 000997, 001001, 001008, 001010, 001012, 001015, 001019 - 001021, 001032, 001035 - 001037, 001039, 001041, 001045, 001048, 001052, 001064, 001067 - 001074, 001077 - 001078, 001082, 001086, 001088, 001090, 001092 - 001093, 001095 - 001096, 001101 - 001102, 001104 - 001105, 001110, 001120 - 001125, 001127 - 001128, 001132 - 001134, 001136 - 001137, 001141 - 001145, 001150 - 001152, 001155 - 001156, 001158 - 001159, 001168 - 001169, 001176, 001181 - 001183, 001194 - 001196, 001198, 001201, 001203 - 001204, 001215 - 001216, 001218, 001223, 001230, 001232 - 001234, 001245, 001249, 001256 - 001257, 001266, 001272, 001280 - 001281, 001284 - 001285, 001290 - 001301, 001304 - 001310, 001313, 001315 - 001316, 001318 - 001319, 001321, 001324 - 001327, 001330, 001334, 001337, 001343 - 001344, 001349 - 001352, 001359, 001369 - 001370, 001372, 001374, 001377, 001380 - 001381, 001383 - 001384, 001388 - 001395, 001411 - 001412, 001414 - 001419, 001426 - 001428, 001430 - 001435, 001439 - 001440, 001444 - 001445, 001448 - 001458, 001460, 001470, 001472 - 001473, 001475, 001477 - 001478, 001482, 001484 - 001485, 001487 - 001488, 001490 - 001494, 001496 - 001498, 001505 - 001528, 001545, 001547 - 001559, 001562 - 001564, 001566, 001568 - 001569, 001571, 001576 - 001579, 001582, 001584, 001589, 001591 - 001597, 001599 - 001606, 001608 - 001614, 001616, 001620 - 001624, 001627, 001635, 001638 - 001647, 001649 - 001656, 001658.
- Removed, not formally an individual loan (88): ALD-000102, 000108, 000130, 000185, 000207, 000239, 000255, 000264, 000278, 000280, 000298, 000369, 000386, 000393, 000443, 000445, 000465, 000492, 000494, 000497, 000507, 000574, 000592, 000603, 000643, 000650, 000701, 000707, 000768, 000808, 000850, 000867, 000873, 000984, 000990, 001038, 001087, 001126, 001131, 001139 - 001140, 001147 - 001149, 001171, 001199, 001202, 001205, 001207, 001213, 001219 - 001222, 001231, 001235, 001242, 001258 - 001265, 001267 - 001271, 001273 - 001274, 001341, 001387, 001396 - 001399, 001467 - 001469, 001471, 001480 - 001481, 001489, 001590, 001628, 001630.

**2026-10-07 (Greek and Roman world)**
- Added ALD-001258 - 001556 (299 loans): Greek inscriptions, all regions and periods (PHI Searchable Greek Inscriptions; 959 texts with loan vocabulary reviewed, 98 with loans): Delian temple loans, Athenian loans from the treasuries of Athena, eranos loans on Attic mortgage stones (horoi), city loans (Arcesine, Carthaea, Coresia, Miletus, Orchomenus-Nicarete, Simena and others), loans named in honorific decrees.
- Added ALD-001557 - 001658 (102 loans): literary sources (Perseus Digital Library; 2,559 passages with loan vocabulary reviewed, 100 loans), chiefly Demosthenes' private speeches, Isocrates, Aeschines, Xenophon, Plutarch, Josephus and Cicero; and two Dacian wax-tablet loans of AD 162 (CIL 3 p. 930 no. 3 and p. 934 no. 5: ALD-001625, 001626).
- New periods (standard periodization): Archaic, Classical and Hellenistic Greece, Achaemenid and Hellenistic Asia Minor, Roman Asia, Classical and Hellenistic Black Sea and Sicily, Roman Sicily, Roman Macedonia, Roman Bithynia, Roman Africa, Roman Dacia, Late Period Egypt. Database: 1,444 loans.

**2026-10-07**
- Added ALD-000978 - 001257 (280 loans): Late Antique Egypt (AD 284-641), papyri tagged as loans in HGV (652 documents reviewed, 265 with loans), plus loans from Nessana (Palaestina) and Constantinople; periods Late Roman, Sasanian and Early Islamic Egypt. Database: 1,043 loans.

**2026-10-06**
- Period: one period per loan (a year range gets the period covering most of it); Roman Egypt split into Early Roman Egypt (30 BC-AD 284) and Late Roman Egypt. Place: region removed (e.g. `Oxyrhynchus, Egypt` -> `Oxyrhynchus`), since the period gives it; the one place known only as `Egypt` is now empty.
- New column `period` (historical period: who ruled the place at the time, e.g. Ptolemaic Egypt, Roman Egypt), computed automatically from year and place; first column of the catalogue and the loan tables, with a Period filter.
- Place names: always the ancient name, Latinized (66 rows changed: Herakleopolis/Herakleopolite -> Heracleopolis/Heracleopolite, Herakleia -> Heraclea, Akoris -> Acoris, Ankyron -> Ancyron, Krokodilo -> Crocodilo, En-gedi -> Engaddi; modern site names Ghoran and Raima replaced by the ancient district / region).
- Removed 104 rows from the alimentary tables of Veleia (CIL 11 1147; ALD-000849, 000876 - 000927) and the Ligures Baebiani (CIL 9 1455; ALD-000864, 000928 - 000977): Trajan's alimentary obligations are not loans (no repayment of the capital). Database: 763 loans.

**2026-10-05**
- Added ALD-000848 - 000977 (130 loans): the Roman world in Latin and Greek documents and inscriptions - wax tablets of the Sulpicii (Puteoli) and of Herculaneum, the alimentary tables of Veleia and the Ligures Baebiani (Trajan's loans to landowners), loans to the city of Gytheum, a Vindonissa tablet, and Latin papyri from Egypt. Sources: Latin papyri in the DDbDP, Epigraphic Database Heidelberg (EDH) and Epigraphic Database Roma (EDR). Database: 867 loans.
- Added ALD-000838 - 000847: Ptolemaic Egypt (332 - 30 BC), full-text search of the Greek papyri for loan vocabulary (191 further documents reviewed, 10 loans). Database: 737 loans.
- Repository cleaned up: `codebook.md` and `schema.sql` moved to `reference/`; review ledger `reviewed.md` removed.
- Substance check of all 770 rows: removed 43 rows that are not loans (advance sales and credit sales, pay for work, rent, dowry, pawns, old debts rewritten as loans, service paying off the money, texts too fragmentary to show a borrowing): ALD-000003, 000011, 000026, 000033, 000060, 000062, 000101, 000105, 000133, 000187, 000253, 000271, 000272, 000274, 000279, 000341, 000350, 000351, 000398, 000414, 000469, 000544, 000563, 000583, 000624, 000625, 000626, 000627, 000641, 000653, 000662, 000665, 000672, 000721, 000734, 000736, 000742, 000747, 000775, 000776, 000782, 000818, 000834. Database: 727 loans.
- Definition of a loan adopted: someone borrows money or goods with the intention of returning it, with or without interest; payments for goods or services are not loans, whatever they are called.
- Added ALD-000837: the second 120-drachma loan of ZPE 199 (2016) 150 (wrongly removed as ALD-000475).
- Loan audit of all 835 rows against the original text: 87 field fixes; removed 66 rows (64 not shown to be a loan by the preserved text, 2 duplicates): ALD-000043, 000056, 000100, 000118, 000124, 000126, 000140, 000149, 000161, 000163, 000167, 000174, 000181, 000183, 000194, 000195, 000198, 000212, 000220, 000225, 000231, 000232, 000277, 000286, 000320, 000335, 000336, 000355, 000371, 000394, 000407, 000408, 000410, 000411, 000425, 000439, 000442, 000482, 000498, 000511, 000517, 000521, 000529, 000530, 000532, 000533, 000546, 000554, 000562, 000571, 000573, 000584, 000585, 000598, 000599, 000600, 000601, 000602, 000609, 000612, 000614, 000649, 000651, 000689, 000704, 000741.
- Added ALD-000615 - 000836: Ptolemaic Egypt (332 - 30 BC), papyri tagged as loans in HGV (361 documents reviewed).
- No currency conversion: 12 rows put back into the document's own units.
- Removed ALD-000475 as a duplicate of ALD-000454 (re-added later as ALD-000837).
- Loan-year check: 24 rows set to the year the loan was made; 10 undated earlier loans given ranges from the text.
- Added ALD-000480 - 000614: Roman Egypt, full-text search of the papyri for loan vocabulary (549 further documents reviewed).

**2026-10-04**
- Field audit of all rows: 96 corrections. Durations standardized with BC/AD equivalents.
- Added ALD-000021 - 000479: Roman Egypt (30 BC - AD 284), papyri tagged as loans in HGV (932 documents reviewed).
- Schema v0.3: year ranges, amounts as written fractions, notes with original text and English translation.
- Added ALD-000001 - 000020: pilot loans, Roman Egypt.

**2026-10-03**
- Database created (Supabase): one table `loans`, one row per loan. Public website launched (`docs/`).
