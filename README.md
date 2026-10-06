# The Ancient Loans Database (ALD)

A systematic, standardized record of every documented loan in the ancient world, for scholars to search, compare and analyze ancient credit. Each row is one loan, with its date, place, amount, currency, parties, interest, term, source, and the original text with an English translation. Created and maintained by Hansen Zheng.

## Change log

**2026-10-06**
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
