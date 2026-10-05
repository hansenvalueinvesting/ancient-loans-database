# Review ledger

Every document reviewed for the Ancient Loans Database, with the decision taken. Use it to see
what is covered, what was left out and why, and what has not been looked at yet. Update it with
every new batch of documents.

## Coverage

| Corpus | Scope | Reviewed | Included | Excluded | Status |
|---|---|---|---|---|---|
| Roman Egypt, papyri (DDbDP texts, HGV metadata via papyri.info / idp.data) | HGV records dated 30 BC - AD 284 tagged "Darlehen" (loan) or titled as a loan | 932 | 440 | 492 | Done |
| Roman Egypt, papyri | All other texts dated 30 BC - AD 284 containing loan vocabulary (full-text search: δαν-, χρῆσις, ἔντοκ-, προχρ-) | 549 | 117 | 432 | Done |
| Ptolemaic Egypt, papyri (DDbDP texts, HGV metadata via idp.data) | HGV records dated 332-30 BC tagged "Darlehen" (loan) or titled as a loan | 361 | 189 | 168 | Done (4 pending Hansen; full-text pass and Demotic texts not started) |
| Late Antique Egypt (AD 284-641), outside Egypt | - | 0 | 0 | 0 | Not started |

Excluded documents fall outside the inclusion rule in `codebook.md` (e.g. repayment receipts,
state seed-grain loans, deposits, registers, texts too fragmentary to identify a loan).

## Documents

One row per document, sorted by date (HGV date of the document), then edition. Edition = citation
as in the database's `source`. TM = Trismegistos number of the papyrus. HGV = the document's HGV
record: one papyrus can hold several documents (e.g. a loan and its repayment receipt), each with its
own HGV record (`18597a`, `18597b`) and its own row; a row covering several records lists them all.
ALD IDs = rows in the database.

| Edition | TM | HGV | Date | Decision | Reason | ALD IDs |
|---|---|---|---|---|---|---|
| P.Athen. 6 | 77952 | 77952 | 325-1 BC | excluded | petition fragment; mentions interest and repayment but too fragmentary to show a loan |  |
| BGU 3 1005 | 56470 | 56470 | 300-201 BC | included | loan contract (wheat, interest-free) | ALD-000615 |
| BGU 6 1246 | 7322 | 7322 | 300-201 BC | excluded | petition; loans of unspecified cash (κέρματα), no amount or unit; skipped (Hansen) |  |
| BGU 6 1279 | 7330 | 7330 | 300-201 BC | excluded | too fragmentary to show a loan (only interest and security clauses survive) |  |
| P.Hal. 17 | 78265 | 78265 | 300-201 BC | excluded | draft letter; too fragmentary to show a loan |  |
| P.Yale 1 26 | 8263 | 8263 | 300-276 BC | excluded | too fragmentary (only paramone clauses survive) |  |
| P.Zen. Pestm. 57 | 1888 | 1888 | 300-201 BC | excluded | letter; mentions grain being lent out, no specific loan shown |  |
| P.Zen. Pestm. 73 | 1904 | 1904 | 300-201 BC | excluded | too fragmentary; no loan |  |
| SB 22 15531 | 47375 | 47375 | 300-101 BC | included | loan contract fragment (copper money to a man and his wife) | ALD-000621 |
| P. XV. Congr. 9 | 78819 | 78819 | 275-226 BC | excluded | memorandum about money; no loan |  |
| P.Cair. Zen. 4 59798 | 1423 | 1423 | 275-226 BC | excluded | account naming a loan; accounts excluded |  |
| P.Col. 4 114 c | 2341 | 2341 | 275-226 BC | excluded | letter fragment; too fragmentary to show a loan |  |
| P.Hamb. 4 239 | 43305 | 43305 | 275-226 BC | excluded | lease with prodoma (advance on rent), not called a loan |  |
| P.Lond. 7 2066 | 1627 | 1627 | 275-226 BC | excluded | letter about grain-measurement accounts; mentions a register of loans, no specific loan |  |
| P.Lond. 7 2161 | 1721 | 1721 | 275-226 BC | excluded | account/list of grain loans at one-half interest; accounts excluded |  |
| PSI 4 417 ll. 17-39 | 2430 | 2430 | 275-226 BC | excluded | letter about a debt of grain (ὀφείλημα) for Zenon's farms; not a loan |  |
| P.Cair. Zen. 1 59001 | 663 | 663 | 274-273 BC | included | loan contract (double document) | ALD-000616 |
| SB 12 11054 | 4385 | 4385 | 272-266 BC | included | contract prescript; names a loan made by Hermias son of Pyrrhias | ALD-000617 |
| P.Sorb. 3 71 | 121853 | 121853 | 268-267 BC | included | loan contract of hay (double document) | ALD-000618 |
| P.Hib. 1 88 | 2819 | 2819 | 263 BC | included | loan contract (money) | ALD-000619 |
| P.Hib. 1 150 | 2830 | 2830 | 261 BC | excluded | no text available (duplicate of P.Hib. 1 85; only a lacuna in DDbDP) |  |
| P.Hib. 1 85 | 2818 | 2818 | 261 BC | excluded | state seed-grain grant (seed for royal land via the nomarch), not a loan |  |
| P.Petr. 3 89 | 7544 | 7544 | 261 BC | excluded | state seed-grain loan; excluded |  |
| P.Hib. 2 207 | 5191 | 5191 | 260-245 BC | included | letter; orders repayment of a loan by contract with interest from Sostratus (100 dr.) | ALD-000620 |
| P.Cair. Zen. 1 59010 | 671 | 671 | 259 BC | excluded | account naming a loan; accounts excluded |  |
| PSI 6 554 | 2174 | 2174 | 258 BC | excluded | report in letter form about complaints against Melas; no loan shown |  |
| P.Cair. Zen. 1 59074 | 729 | 729 | 257 BC | excluded | letter about silver plates and small change (κερμάτιον); no loan |  |
| P.Cair. Zen. 1 59113 | 762 | 762 | 257 BC | excluded | state-type grain advance to a cultivator (Zenon estate): seed barley and barley δάνειον for his land |  |
| P.Cair. Zen. 1 59114 | 763 | 763 | 257 BC | excluded | receipt for seed wheat (σπέρμα) for the recipient's land; not called a loan |  |
| P.Cair. Zen. 1 59115 | 764 | 764 | 257 BC | included | acknowledgement of a money loan (duplicate text) | ALD-000623 |
| P.Cair. Zen. 4 59549 | 1184 | 1184 | 257 BC | included | acknowledgement of a money loan for clearing brushwood (duplicate text) | ALD-000624 |
| P.Lond. 7 1953 | 1516 | 1516 | 257 BC | excluded | state-type grain loans to cultivators (δάνειον εἰς τὸ κάτεργον) with seed wheat; order to measure out |  |
| P.Sorb. 1 17 | 3132 | 3132 | 257 BC | excluded | state seed-grain loan: 40 art. of wheat from the royal grain (ἀπὸ τοῦ βασιλικοῦ σίτου) for sowing a kleros |  |
| P.Cair. Zen. 1 59120 | 769 | 769 | 256 BC | excluded | letter; small change (κερμάτιον, no amount) taken in advance against pledged cups; not called a loan |  |
| P.Cair. Zen. 4 59656 | 1287 | 1287 | 256-248 BC | excluded | memorandum requesting a seed loan (δάνεισον); not shown to be made |  |
| P.Col. 3 22 | 1742 | 1742 | 256 BC | excluded | payment for wood-cutting (3 dr. 2 ob.); not called a loan |  |
| P.Col. 3 23 | 1743 | 1743 | 256 BC | included | acknowledgement of a money loan for wood-cutting (duplicate text) | ALD-000625 |
| P.Col. 3 24 | 1744 | 1744 | 256 BC | included | acknowledgement of a money loan for wood-cutting (duplicate text) | ALD-000626 |
| P.Col. 3 25 | 1745 | 1745 | 256 BC | excluded | payment for weeding; not called a loan |  |
| P.Col. 3 27 | 1746 | 1746 | 256 BC | excluded | wages for wood-cutting and burning (25 dr.); not a loan |  |
| P.Col. 3 28 | 1747 | 1747 | 256 BC | excluded | wages for wood-cutting; not a loan |  |
| P.Köln 16 642 | 754285 | 754285 | 256 BC | included | loan contract (novation of an earlier debt under another contract) | ALD-000627 |
| P.Köln 16 643 | 754286 | 754286 | 256 BC | excluded | draft of P.Köln 16 642; duplicate of HGV 754285 |  |
| P.Petr. 2 5 (b) | 2905 | 2905 | 256-255 BC | excluded | no text available |  |
| P.Cair. Zen. 2 59182 | 828 | 828 | 255 BC | excluded | money from Zenon to farmers for clearing brushwood on leased land; advance for work, not called a loan |  |
| P.Iand. Zen. 2 | 819 | 819 | 255 BC | included | loan contract: money lent to nine farmers for buying draught animals (double document) | ALD-000628, ALD-000629, ALD-000630, ALD-000631, ALD-000632, ALD-000633, ALD-000634, ALD-000635, ALD-000636 |
| P.Petr. 3 53 (j) | 7476 | 7476 | 255-237 BC | excluded | letter; mentions creditors (δανειστάς) generally, no specific loan |  |
| SB 14 11590 | 2431 | 2431 | 255-247 BC | included | acknowledgement of receipt of a loan by contract (fragment) | ALD-000637 |
| SB 16 12812 | 4173 | 4173 | 255 BC | included | loan contract fragment (wheat) | ALD-000638 |
| P.Cair. Zen. 3 59417 | 1057 | 1057 | 254 BC | excluded | letter with account of money received and paid out; no loan |  |
| P.Col. 3 41 | 1758 | 1758 | 254 BC | excluded | letter; request to raise an eranos for Metrodorus, loan not shown to be made |  |
| P.Köln 17 653 | 703400 | 703400 | 253 BC | included | loan contract (homologia with oath) | ALD-000639 |
| P.Lond. 7 1986 | 1548 | 1548 | 252 BC | included | loan contract | ALD-000640 |
| P.Lond. 7 2160 | 1720 | 1720 | 252-251 BC | excluded | account fragments, no loan record |  |
| P.Zen. Pestm. 20 | 1851 | 1851 | 252 BC | included | advance of rent called a loan (δάνειον) | ALD-000641 |
| P.Cair. Zen. 2 59265 | 909 | 909 | 251 BC | included | borrower's acknowledgement of receipt of a loan under a deposited contract | ALD-000642 |
| P.Cair. Zen. 2 59278 | 922 | 922 | 251-250 BC | excluded | letter fragment mentioning 'the loan' (τοῦ δανείου); too fragmentary to show a loan |  |
| P.Cair. Zen. 2 59293 | 937 | 937 | 251 BC | excluded | account of barley, no loan record (one entry 'Κοροιβίδηι δάνειον κρ(ιθῆς) ψ'; accounts stay excluded) |  |
| P.Hamb. 2 183 | 4337 | 4337 | 251 BC | included | loan of hay (inner and outer text, one loan) | ALD-000643 |
| P.Lille 1 39 | 3241 | 3241 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Lille 1 40 | 3242 | 3242 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Lille 1 41 | 3243 | 3243 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Lille 1 42 | 3244 | 3244 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Lille 1 43 | 3245 | 3245 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Lille 1 49 | 3250 | 3250 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Lille 1 50 | 3251 | 3251 | 251-250 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Lille 1 51 | 3252 | 3252 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Sorb. 1 23 | 3138 | 3138 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Sorb. 1 24 | 3139 | 3139 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Sorb. 1 25 | 3140 | 3140 | 251 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Sorb. 1 27 | 3142 | 3142 | 251-250 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Sorb. 1 28 | 3143 | 3143 | 251-250 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Sorb. 1 29 | 3144 | 3144 | 251-250 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Sorb. 1 30 | 3145 | 3145 | 251-250 BC | excluded | state loan of grain to cultivators/cleruchs (δάνειον εἰς κάτεργον, order of Diogenes), excluded (owner decision 1) |  |
| P.Cair. Zen. 3 59306 | 950 | 950 | 250 BC | excluded | letter about rent payments; lentils given to Theopompus not called a loan |  |
| P.Hib. 1 124 | 7825 | 7825 | 250 BC | excluded | not called a loan; too fragmentary to show a loan (undertaking by Menonides to repay 18 3/4 artabas of olyra to Zenodorus the oikonomos 'according to this symbolon', execution 'as for royal dues'; the part stating what he received is lost) |  |
| P.Hib. 1 125 | 8253 | 8253 | 250 BC | excluded | too fragmentary to show a loan (verso docket only) |  |
| P.Hib. 1 126 | 8254 | 8254 | 250 BC | excluded | too fragmentary to show a loan |  |
| P.Hib. 2 210 | 5193 | 5193 | 250-240 BC | excluded | sale with deferred delivery not called a loan (price of 9 1/4 artabas of olyra received from Zenodorus the oikonomos, grain to be delivered in Pharmouthi) |  |
| P.Lille 1 44 | 3246 | 3246 | 250 BC | excluded | state grain loan to a royal cultivator (δάνειον εἰς κάτεργον, order to measure out 120 art. wheat to Socmenis son of Collouthus) |  |
| P.Lille 1 45 | 3247 | 3247 | 250 BC | excluded | state grain loan to royal cultivators (δάνειον εἰς κάτεργον, 60 and 40 art. wheat-barley to Socnouchis and Petesouchus) |  |
| P.Lille 1 46 | 3248 | 3248 | 250 BC | excluded | state grain loan to a royal cultivator (δάνειον εἰς κάτεργον, 40 art. to Demetrius) |  |
| P.Lille 1 47 | 3249 | 3249 | 250 BC | excluded | state grain loan to royal cultivators of Theogonis, Talithis and Kerkeosiris (δάνειον εἰς κάτεργον καὶ ποιολογίαν) |  |
| P.Sorb. 1 26 | 3141 | 3141 | 250 BC | excluded | state grain loan to royal cultivators (δάνειον εἰς κάτεργον, 100 art. to Pasis, 50 art. to Horus son of Scosothes) |  |
| P.Sorb. 1 31 | 3146 | 3146 | 250 BC | excluded | state grain loan (order to measure out a δάνειον of 60 art. old barley to Melanippus per the prostagma of Aristandrus) |  |
| P.Cair. Zen. 3 59327 | 971 | 971 | 249 BC | excluded | account; pawns not called a loan (list of silver vessels held as pledges, with interest reckonings) |  |
| P.Corn. 2 | 2302 | 2302 | 249 BC | excluded | sale with deferred delivery not called a loan (20 silver dr. received from Zenon against delivery of 40 artabas of wheat in Payni, year 37) |  |
| P.Lond. 7 2002 | 970 | 970c | 249 BC | excluded | account, no loan record (Zenon's disbursement account; entry 'δάνειον ἀργυρίου 20 dr.' to Ammonius and several πρόχρησις advances) |  |
| P.Hib. 1 86 | 8233 | 8233 | 248 BC | included | loan of olyra (acknowledgement, two copies on one sheet) | ALD-000644 |
| P.Lond. 7 2006 | 1568 | 1568 | 248 BC | excluded | pawn not called a loan (letter: garments pledged in Choiak with Theodorus the money-lender for 80 silver dr., interest 1/2 + 1/4 obol per 4 dr.) |  |
| P.Cair. Zen. 3 59341 a | 984 | 984a | 247 BC | excluded | no text available |  |
| SB 12 10782 | 4346 | 4346 | 247-246 BC | included | loan of olyra (acknowledgement) | ALD-000645 |
| BGU 10 1966 | 5002 | 5002 | 246-221 BC | included | loan contract (end only; 'ἔγγυος τοῦ δανείου' preserved) | ALD-000646 |
| P.Cair. Zen. 3 59504 | 1142 | 1142 | 246-243 BC | included | bank notice of a loan on mortgage of a vineyard at Philadelphia | ALD-000647 |
| BGU 10 1981 | 2692 | 2692 | 245-244 BC | pending | pending Hansen: possibly the same contract as SB 12 11058 (TM 2931) |  |
| P.Col. 4 83 | 1796 | 1796 | 245-244 BC | included | petition; mentions a loan of 70 silver dr. by Nicon to Simon and the 115-dr. loan contract that replaced it | ALD-000648, ALD-000649 |
| P.Cair. Zen. 3 59355 | 998 | 998 | 244 BC | included | statement to arbitrators (court-type document) naming a loan contract not recorded elsewhere | ALD-000622 |
| P.Ross. Georg. 2 1 + 2 | 2931 | 2931a | 244 BC | excluded | duplicate of HGV 2931b (same contract, TM 2931; this record holds only the prescript, ll. 1-3) |  |
| P.Strasb. 2 92 | 3919 | 3919 | 244-243 BC | included | lease of rooms with an interest-bearing loan explicitly called δάνειον ἔντοκον (use of the rooms in place of interest) | ALD-000650 |
| SB 12 11058 | 2931 | 2931b | 244 BC | included | loan contract (interest-free, repayable in yearly instalments) | ALD-000651 |
| SB 12 11059 | 4390 | 4390 | 244 BC | included | loan contract | ALD-000652 |
| SB 22 15237 | 1850 | 1850 | 244-242 BC | excluded | pawn (hoes pledged for 12 copper drachmas), not called a loan |  |
| PSI 4 389 | 2073 | 2073 | 243 BC | included | loan contract | ALD-000653 |
| P.Hib. 2 261 | 2834 | 2834 | 240 BC | included | loan contract (beginning only; borrower and amount lost) | ALD-000654 |
| P.Hib. 2 262 | 2835 | 2835 | 240 BC | excluded | too fragmentary to show a loan ('ἐδάνεισεν' wholly restored); possible duplicate of HGV 2834 |  |
| P.Lille 1 56 | 3261 | 3261 | 239 BC | included | loan note | ALD-000655 |
| SB 6 8969 | 5718 | 5718 | 237 BC | excluded | Greek deposit docket under a Demotic mortgage-loan contract; the loan text (Demotic) is not in this edition |  |
| P.Petr. 3 8 | 2904 | 2904 | 236 BC | excluded | no text available |  |
| P.Petr. 3 55 (a) | 2917 | 2917 | 235-234 BC | excluded | no text available |  |
| CPR 18 24 | 7765 | 7765 | 232 BC | excluded | too fragmentary to show a loan (register entry; all loan words restored) |  |
| P.Petr. 2 21 (a) | 7402 | 7402a | 232-231 BC | excluded | court proceedings; fragmentary (same dispute as HGV 7402c) |  |
| P.Petr. 2 21 (b) plus (d) | 7402 | 7402b | 232-231 BC | excluded | court proceedings; too fragmentary |  |
| P.Petr. 2 21 (c)-(d) | 7402 | 7402c | 232-231 BC | included | court document naming a loan | ALD-000656 |
| SB 6 8970 | 5719 | 5719 | 232 BC | excluded | Greek deposit docket under a Demotic mortgage-loan contract; the loan text (Demotic) is not in this edition |  |
| CPR 18 14 | 7799 | 7799 | 231 BC | included | register entry: loan contract (Theogonis contract register) | ALD-000657 |
| CPR 18 16 | 7759 | 7759 | 231 BC | included | register entry: loan contract (Theogonis contract register) | ALD-000658 |
| CPR 18 18 | 7763 | 7763 | 231 BC | included | register entry: paramone loan contract (Theogonis contract register) | ALD-000659 |
| SB 18 13255 | 2540 | 2540 | 231 BC | included | loan contract (inner and outer text = one loan) | ALD-000660 |
| BGU 14 2367 | 2698 | 2698 | 225-201 BC | excluded | fragment of a law on loan contracts; no loan |  |
| P.Ryl. 4 584 | 43475 | 43475 | 225-201 BC | included | mortgage loan (renewal undertaking; vineyard mortgaged by Arsinoe to Demetrius) | ALD-000661 |
| PUG 3 119 | 8150 | 8150 | 225-201 BC | excluded | too fragmentary to show a loan (register of contract abstracts; no loan wording preserved) |  |
| P.Sorb. 1 38 | 3153 | 3153 | 224 BC | excluded | letter about the state barley loan to farmers; no individual loan |  |
| P.Tebt. 3.1 815 | 7752 | 7752 | 223-222 BC | included | register of contract abstracts; loan entries | ALD-000662, ALD-000663, ALD-000664, ALD-000665, ALD-000666, ALD-000667, ALD-000668, ALD-000669, ALD-000670, ALD-000671, ALD-000672 |
| P.Enteux. 45 | 3320 | 3320 | 222 BC | included | petition; mentions loan of 150 copper drachmas by Philon to Apollonius and his mother Philotis | ALD-000675 |
| P.Sorb. 1 41 | 3156 | 3156 | 222 BC | excluded | letter about state loans measured out to cleruchs; no individual loan |  |
| P.Sorb. 1 49 | 3164 | 3164 | 222 BC | excluded | letter; price of grain paid in advance, not called a loan |  |
| BGU 10 1964 | 4342 | 4342 | 221-214 BC | excluded | antichretic arrangement framed as a lease (500 dr. 'rent'), not called a loan |  |
| BGU 14 2395 | 2669 | 2669b | 221 BC | included | loan contract (inner and outer text), interest partly paid by lease of a tower | ALD-000676 |
| BGU 6 1273 | 2669 | 2669a | 221 BC | excluded | no text available; same contract as HGV 2669b |  |
| P.Enteux. 41 | 3316 | 3316 | 221 BC | excluded | petition; loan for use of a she-ass (χρησάμενος ὄνον), not a loan of money or goods |  |
| P.Enteux. 42 | 3317 | 3317 | 221 BC | included | petition; mentions loan (χρησάμενος) of 4 dr. copper to Dositheus | ALD-000677 |
| P.Enteux. 44 | 3319 | 3319 | 221 BC | included | petition; mentions two loans of copper drachmas to Nephorsuchis (10 dr. from Dioscurides, 14 dr. from Nicanor) | ALD-000673, ALD-000674 |
| P.Enteux. 46 | 3321 | 3321 | 221 BC | excluded | petition; barley owed 'through the hand' (ὀφείλων διὰ χερός), not called a loan |  |
| P.Enteux. 49 | 3324 | 3324 | 221 BC | excluded | petition; loan contract of 1000 dr. alleged fictitious (no χρῆσις took place), loan not shown to be made |  |
| P.Enteux. 50 | 3325 | 3325 | 221 BC | excluded | petition; alleged Egyptian contract of 420 dr. denied, not called a loan |  |
| P.Sorb. 3 111 | 2604 | 2604 | 221 BC | included | petition; mentions loan of 200 dr. at interest (contract deposited with Calliphon) between the petitioner and Antilochus | ALD-000678 |
| P.Enteux. 104 | 3368 | 3368 | 219-217 BC | excluded | official's report on a petition (procès-verbal); a loan of copper is mentioned (δανεισαμένου αὐτοῦ χαλκοῦ) but parties and sum are lost |  |
| BGU 6 1274 | 2670 | 2670 | 218-217 BC | included | loan contract | ALD-000679 |
| BGU 14 2394 | 4008 | 4008 | 216-215 BC | excluded | receipt for repayment of grain (olyra 81 art., wheat); the preserved text does not call the debt a loan |  |
| BGU 10 1969 | 2687 | 2687 | 215-214 BC | included | loan of wheat (inner and outer text) | ALD-000680 |
| BGU 14 2393 | 2703 | 2703 | 215-214 BC | included | loan of olyra | ALD-000681 |
| BGU 6 1275 | 2671 | 2671 | 215-214 BC | included | loan of olyra | ALD-000682 |
| BGU 6 1276 | 2672 | 2672 | 215-214 BC | included | loan contract, interest-free | ALD-000683 |
| BGU 6 1277 | 2673 | 2673 | 215-214 BC | excluded | copy of the loan in HGV 2703 (same parties, date, 50 art. olyra, terms) |  |
| BGU 6 1278 | 2674 | 2674 | 215-214 BC | included | loan of olyra (inner and outer text) | ALD-000684 |
| P.Köln 5 218 | 3179 | 3179 | 215-214 BC | included | loan contract of money (fragmentary) | ALD-000685 |
| BGU 10 1945 | 2678 | 2678 | 214-213 BC | excluded | too fragmentary to show a loan (lease or grain loan?) |  |
| BGU 10 1960 | 2684 | 2684 | 214-213 BC | included | loan contract of copper money (fragmentary) | ALD-000686 |
| BGU 10 1961 | 5001 | 5001 | 213-212 BC | included | loan contract | ALD-000687 |
| BGU 10 1970 | 2688 | 2688 | 213-212 BC | excluded | too fragmentary to show a loan: ἐδάνεισεν and ἀποδότω wholly restored; only 'olyra artabas ... this grain in [month]' survives, no parties or amount |  |
| BGU 14 2396 | 2704 | 2704 | 213-212 BC | included | loan contract | ALD-000688 |
| P.Frankf. 1 | 2790 | 2790 | 213 BC | excluded | lease of a cleruchic plot with an interest-free advance (πρόδομα) of 60 copper dr.; not called a loan (antichretic lease) |  |
| BGU 10 1963 | 2685 | 2685 | 212-211 BC | included | loan contract | ALD-000689 |
| BGU 10 1965 | 2686 | 2686 | 212-211 BC | included | loan contract (fragment) | ALD-000690 |
| BGU 6 1280 | 4551 | 4551 | 210 BC | excluded | antichretic lease of a dwelling (μίσθωσις) securing 70 dr.; not called a loan in the preserved text |  |
| P.Petr. 2 47 | 2903 | 2903 | 210-209 BC | excluded | settlement/quittance between Donomazis and Histiaeus (330 dr.); no loan shown |  |
| P.Köln 5 220 | 3181 | 3181 | 208 BC | excluded | acknowledgement of apomoira wine owed to tax farmers, commuted to money; not called a loan |  |
| BGU 7 1505 | 4755 | 4755 | 206 BC | excluded | account, no loan record |  |
| P.Trier 1 11 | 703248 | 703248 | 205-180 BC | included | court document naming a loan | ALD-000691 |
| P.Heid. 8 420 | 47298 | 47298 | 201 BC | excluded | pawnbroker's account (pledges); pawns not called a loan |  |
| BGU 6 1281 | 7331 | 7331 | 200-101 BC | excluded | too fragmentary to show a loan |  |
| P.Amh. 2 161 | 77943 | 77943 | 200-101 BC | excluded | too fragmentary to show a loan (only 'συγγραφοφύλαξ') |  |
| P.Amh. 2 32 R | 44032 | 44032 | 200-101 BC | excluded | official report on cleruchic land; no loan in this text |  |
| P.Dura 15 | 78173 | 78173 | 200-101 BC | excluded | sale subject to redemption; the loan word is wholly restored (δανεισθῆ]ναι), so not called a loan in the preserved text |  |
| P.Hamb. 1 28 | 43857 | 43857 | 200-151 BC | included | mortgage loan (slave as security) | ALD-000692 |
| P.Leid.Inst. 2 25 | 971473 | 971473 | 200-101 BC | included | receipt for repayment; names the earlier loan of 4 copper talents | ALD-000693 |
| P.Ryl. 4 585 | 8144 | 8144 | 200-176 BC | included | loan contract with assignment of salary on oath | ALD-000694 |
| P.Ryl. 4 670 | 78760 | 78760 | 200-176 BC | included | loan contract (fragment; ὁμολογῶ ἔχειν τὸ δάνειον) | ALD-000695 |
| P.Tebt. 3.2 970 | 7992 | 7992 | 200-176 BC | included | mortgage loan contract (slave as security) | ALD-000696 |
| PSI 1 64 | 78828 | 78828 | 200-1 BC | included | oath of a woman to her partner; mentions a loan of 5 copper talents to her | ALD-000697 |
| SB 10 10226 | 5914 | 5914 | 200-101 BC | excluded | letter ordering a payment of 1060 copper dr.; no loan |  |
| SB 10 10228 | 5916 | 5916 | 200-101 BC | included | loan contract (fragment) | ALD-000698 |
| SB 18 13154 | 2528 | 2528 | 200-1 BC | included | antichretic loan (called δάνειον; lender lives in the house rent-free) | ALD-000699 |
| SB 24 16166 | 45407 | 45407 | 200-176 BC | excluded | letter; request for a loan of 3 minas (interest 20 dr.) not shown to be made |  |
| SB 3 7169 | 7272 | 7272 | 200-101 BC | included | maritime loan contract (voyage to the Aromatophoros) | ALD-000702 |
| SB 3 7170 | 78882 | 78882 | 200-101 BC | included | loan contract fragment; parties, amount and terms lost | ALD-000703 |
| SB 30 17368 | 372 | 372 | 200-101 BC | excluded | too fragmentary to show a loan (only penalty clauses survive) |  |
| SB 30 17369 | 385 | 385 | 200-101 BC | excluded | too fragmentary to show a loan (only a repayment clause for wheat; loan wording wholly restored) |  |
| SPP 1 1 - 2 I | 79440 | 79440 | 200-101 BC | excluded | petition about money and the price of wine owed to Platon; no loan shown |  |
| SB 24 16295 | 8810 | 8810 | 199 BC | included | petition; names money and wheat given by Theambesis to Heliodorus at interest | ALD-000700, ALD-000701 |
| BGU 10 1967 | 5003 | 5003 | 193-192 BC | included | loan acknowledgement (money); lender, interest and term lost | ALD-000704 |
| JJP 42 (2012) 36 no. 1 | 43252 | 43252 | 193 BC | excluded | contract for transport work with an advance (προδοῦναι) of 1 talent; not called a loan (owner rule 4) |  |
| P.Köln 14 562 | 697570 | 697570 | 192-176 BC | excluded | summons over the price of wine; no loan |  |
| P.Lond. 2 223 (S. 3) | 78456 | 78456 | 190-189 BC | excluded | account/land list; no loan |  |
| P.Trier 1 9 | 703246 | 703246 | 187 BC | included | court document naming a loan (syngraphophylax's testimony with copy of a loan contract in kind) | ALD-000708 |
| P.Heid. 8 412 | 47290 | 47290 | 186 BC | included | court document naming a loan (application for retrial on a loan contract for 100 artabas of wheat) | ALD-000709 |
| BGU 10 1968 | 5004 | 5004 | 184 BC | included | loan contract (money, interest-free) | ALD-000714 |
| P.Trier 1 1 | 703238 | 703238 | 184 BC | included | court document naming a loan (summons for non-repayment of a copper loan by Protion to Archepolis) | ALD-000705 |
| P.Trier 1 2 | 703239 | 703239 | 184 BC | included | court document naming a loan (summons for non-repayment of 4000 copper drachmas) | ALD-000715 |
| P.Trier 1 4 | 703241 | 703241 | 184-183 BC | included | court document naming a loan (summons for non-repayment of 5 artabas of arakos) | ALD-000706 |
| P.Trier 1 5 | 703242 | 703242 | 184-183 BC | included | court document naming a loan (summons for non-repayment of 120 artabas of wheat) | ALD-000707 |
| P.Trier 1 3 | 128461 | 128461 | 183 BC | included | court document naming a loan (summons for non-repayment of 2000 copper drachmas by Anicetus to Ptolemaeus) | ALD-000711 |
| P.Trier 1 6 | 703243 | 703243 | 183 BC | included | court document naming a loan (summons for non-repayment of a wheat loan to Ptolemaeus) | ALD-000713 |
| P.Tebt. 3.1 817 | 5396 | 5396 | 182 BC | included | loan contract on mortgage (copper money, interest-free) | ALD-000716 |
| SB 24 16296 | 79429 | 79429 | 182 BC | excluded | acknowledgements of sums received 'from the common funds', not called a loan (owner rule 4) |  |
| P.Trier 1 10 | 703247 | 703247 | 181 BC | included | court document naming a loan (syngraphophylax's testimony with copy of a loan contract of 3000 copper drachmas) | ALD-000712 |
| P.Köln Sarapion 4 | 977101 | 977101 | 180 BC | included | petition; names a loan of 7 copper talents by Sarapion to Petosiris | ALD-000710 |
| P.Strasb. 9 882 | 3982 | 3982 | 180 BC | excluded | too fragmentary to show a loan (mortgage and sums only, no loan wording) |  |
| P.Amh. 2 42 | 2649 | 2649 | 179 BC | included | receipt for repayment; names the earlier loan of 900 artabas of wheat | ALD-000717 |
| P.Freib. 3 36-37 | 43915 | 43915 | 179-178 BC | included | mortgage loan from Epigenes named in a registered acknowledgement (year 3) | ALD-000718 |
| P.Tebt. 3.2 851 | 5420 | 5420 | 177-176 BC | excluded | account of receipts in kind, no loan record |  |
| BGU 10 1971 | 8313 | 8313 | 175-126 BC | included | receipt for repayment of a wheat loan; earlier loan named | ALD-000719 |
| CdE 89 (2014) 351 | 489701 | 489701 | 175-126 BC | included | royal oath confirming a loan of 300 artabas | ALD-000720 |
| P.Erasm. 1 14 | 44711 | 44711 | 175-126 BC | excluded | advance for freight (prochresis), not called a loan; only penalty clause survives |  |
| UPZ 1 124 | 3516 | 3516 | 175 BC | excluded | petition; 6 art. wheat owed under a contract, not called a loan |  |
| P.Tebt. 3.1 818 | 2945 | 2945 | 174 BC | included | loan contract (renewal of a debt from a partnership as a loan) | ALD-000721 |
| SB 30 17332 | 246 | 246 | 174 BC | included | loan of wheat | ALD-000722 |
| BGU 6 1272 | 2668 | 2668 | 173 BC | excluded | too fragmentary to show a loan (lease or loan; loan word restored) |  |
| P.Amh. 2 43 | 2650 | 2650 | 173 BC | included | loan of wheat | ALD-000723 |
| P.Freib. 3 12 b | 58490 | 58490 | 172-162 BC | included | loan contract fragment (end of contract; parties and amount lost) | ALD-000724 |
| P.Köln 14 561 | 697569 | 697569 | 172 BC | included | court document naming a loan | ALD-000725 |
| P.Mich. 3 190 | 2888 | 2888 | 172 BC | included | loan of money | ALD-000726 |
| P.Tebt. 3.2 850 | 5419 | 5419 | 170 BC | excluded | account of corn (seed grain), no loan record |  |
| P.David 4 | 5045 | 5045 | 167 BC | included | acknowledgement of a loan of wine (with the hemiolia) | ALD-000727 |
| SB 16 12372 | 4109 | 4109 | 161 BC | included | loan of money | ALD-000728 |
| SB 22 15240 | 8348 | 8348 | 156 BC | included | loan of seed wheat (private) | ALD-000729 |
| BGU 6 1258 A | 4545 | 4545 | 154-153 BC | included | register of contracts; three loan entries | ALD-000730, ALD-000731, ALD-000732 |
| UPZ 1 65 | 3456 | 3456 | 154 BC | excluded | letter; asks how much certain persons have, no loan shown |  |
| P.Tebt. 3.2 980 | 5481 | 5481 | 153 BC | excluded | too fragmentary to show a loan (only penalty clause survives) |  |
| P.Erasm. 1 12 | 5056 | 5056 | 152 BC | excluded | advance for freight (prochresis), not called a loan |  |
| P.Erasm. 1 13 | 5057 | 5057 | 152 BC | excluded | advance for freight, not called a loan |  |
| P.Erasm. 1 15 | 5058 | 5058 | 152 BC | excluded | advance for freight (prochresis), not called a loan |  |
| UPZ 1 68 | 3459 | 3459 | 152 BC | included | letter; mentions copper money lent by Ptolemaeus to Petosiris, Semphthes and Sarapion | ALD-000733 |
| BGU 10 2006 | 8330 | 8330 | 150-101 BC | included | letter fragment; mentions a loan (δάνειον) to/from Polycritus | ALD-000734 |
| UPZ 1 118 | 3510 | 3510 | 147 BC | included | court document naming a loan | ALD-000736 |
| SB 8 9679 | 5791 | 5791 | 146 BC | excluded | too fragmentary to show a loan |  |
| P.Giss. Bibl. 1 1 | 44587 | 44587 | 144 BC | excluded | too fragmentary to show a loan (no loan word preserved) |  |
| P.Köln 8 350 | 41541 | 41541 | 143 BC | included | loan of wheat | ALD-000738 |
| P.Yale 4 139 | 873594 | 873594 | 137 BC | excluded | petition about a balance of account for farmed land, not called a loan |  |
| P.Yale 4 141 | 873596 | 873596 | 137 BC | included | petition; mentions loan of 10 1/2 art. wheat by contract | ALD-000737 |
| P.Yale 4 144 | 873599 | 873599 | 137 BC | excluded | too fragmentary to show a loan (no loan word preserved) |  |
| P.Yale 4 147 | 873587 | 873587 | 137 BC | included | petition; mentions loan of wheat by Straton to Perses (six-witness contract) | ALD-000740 |
| P.Amh. 2 44 | 2651 | 2651 | 136 BC | included | loan of wheat (inner and outer copy, one loan) | ALD-000741 |
| P.Grenf. 2 17 | 60 | 60 | 136 BC | excluded | pawn (iron cone held in pledge), not called a loan |  |
| PSI 13 1311 | 2934 | 2934 | 136 BC | included | loan contract (inner and outer copy, one loan); dowry balance recast as a loan | ALD-000742 |
| SB 26 16637 | 662 | 662 | 136-97 BC | included | loan of wheat (fragment) | ALD-000743 |
| P.Lond. 2 220 R (S. 5) | 5888 | 5888 | 133 BC | excluded | surety for producing a man from prison, no loan |  |
| P.Polit. Iud. 8 | 44624 | 44624 | 133 BC | included | petition; mentions mortgage loan of 12 tal. copper (year 33) | ALD-000739 |
| P.Köln 9 366 | 47501 | 47501 | 132 BC | included | receipt for repayment; names earlier loan of 15 talents copper | ALD-000744 |
| P.Dryton 16 | 254 | 254 | 131 BC | included | loan of wheat | ALD-000745 |
| P.Dryton 30 | 4198 | 4198 | 131-113 BC | included | loan contract (fragment; end only) | ALD-000746 |
| VBP 2 2 | 8140 | 8140 | 130 BC | included | loan contract (six-witness, inner and outer copy, one loan) | ALD-000748 |
| P.Dryton 17 | 255 | 255 | 129 BC | included | loan of money | ALD-000749 |
| SB 6 9420 | 5774 | 5774 | 129 BC | included | petition; price of 100 art. wheat recorded as an (Egyptian) contract of loan | ALD-000747 |
| P.Dryton 19 | 257 | 257 | 127 BC | included | loan of money | ALD-000750 |
| P.Grenf. 2 18 | 61 | 61 | 127 BC | included | loan of money | ALD-000751 |
| P.Dion. 33 | 3114 | 3114 | 125-101 BC | included | loan acknowledgement (wheat) | ALD-000752 |
| P.Tebt. 3.2 972 | 7993 | 7993 | 125-101 BC | included | abstracts of contracts; loan entries included (owner rule 3) | ALD-000753, ALD-000754, ALD-000755 |
| SB 16 12985 | 4197 | 4197 | 125-101 BC | included | receipt for repayment; names earlier loan contract | ALD-000756 |
| SB 22 15537 | 79082 | 79082 | 124 BC | included | loan of wheat (fragment, two women borrowers) | ALD-000757 |
| SB 30 17333 | 133407 | 133407 | 124 BC | included | loan contract (fragment) | ALD-000758 |
| SB 6 9366 | 5738 | 5738 | 124 BC | included | loan contract in wheat and money (copy) | ALD-000759, ALD-000760 |
| P.Grenf. 2 19 | 238 | 238 | 118 BC | included | receipt for repayment; names earlier loan of 120 art. barley (year 50, Choiak) | ALD-000762 |
| P.Lond. 2 225 | 5889 | 5889 | 118 BC | included | loan contract of wheat (fragment) | ALD-000765 |
| P.Dryton 25 | 215 | 215 | 117 BC | included | loan of wheat | ALD-000767 |
| P.Dion. 26 | 3110 | 3110 | 116 BC | included | loan of wheat (novation) replacing an earlier loan contract | ALD-000768, ALD-000769 |
| P.Dion. 34 | 3115 | 3115 | 116 BC | excluded | acknowledgement of receiving the price of wheat for later delivery (sale with deferred delivery, not called a loan) |  |
| P.Fay. 11 | 8084 | 8084 | 116 BC | included | petition; mentions three loans of wheat (7 1/2, 45, 25 art.) by Demetrius to Theotimus son of Phileas | ALD-000761, ALD-000763, ALD-000764 |
| P.Tebt. 1 111 | 3747 | 3747 | 116 BC | excluded | state grain from the sitologoi's granary (state loan, owner rule 1) |  |
| P.Amh. 2 32 V | 44082 | 44082 | 114 BC | included | loan acknowledgement (wheat) | ALD-000771 |
| P.Tebt. 4 1136 | 3900 | 3900 | 114 BC | excluded | account of (state) grain loans |  |
| SB 18 13847 | 279 | 279 | 114-97 BC | included | loan contract (fragment; only execution clause) | ALD-000772 |
| P.Amh. 2 46 | 121 | 121 | 113 BC | included | loan of wheat | ALD-000773 |
| P.Amh. 2 47 | 122 | 122 | 113 BC | included | loan of wheat | ALD-000774 |
| P.Dion. 21 | 3105 | 3105 | 113 BC | included | loan of wheat | ALD-000775 |
| P.Dion. 27 | 3111 | 3111 | 113-112 BC | included | loan of wheat (novation) | ALD-000776 |
| P.Grenf. 2 21 | 218 | 218 | 113 BC | included | loan of money | ALD-000777 |
| P.Lond. 3 1203 (S. 9) | 90 | 90 | 113 BC | excluded | debt acknowledgement (ὀφείλημα) not called a loan (owner rule 4) |  |
| P.Tebt. 1 89 | 3725 | 3725 | 113 BC | excluded | account (grain report of the komogrammateus), no loan record |  |
| P.Tebt. 3.1 792 | 5378 | 5378 | 113 BC | excluded | petition; mentions only state seed-grain loans |  |
| P.Dion. 13 | 3096 | 3096 | 112 BC | included | loan of wheat | ALD-000778 |
| P.Oslo 3 140 | 5252 | 5252 | 112 BC | excluded | too fragmentary to show a loan (recto only end of a paramone/apprenticeship contract) |  |
| P.Bingen 39 | 8351 | 8351 | 111 BC | included | loan of wheat | ALD-000779 |
| P.Bingen 40 | 654 | 654 | 111-110 BC | included | loan of wheat(?) (fragment) | ALD-000780 |
| P.Cair. Goodsp. 8 | 203 | 203 | 111 BC | included | loan of money | ALD-000781 |
| P.Dion. 22 | 3106 | 3106 | 111 BC | included | loan of wheat (interest-free) | ALD-000782 |
| P.Dion. 28 | 3102 | 3102 | 111 BC | included | receipt for repayment; names earlier loan of 250 art. wheat by Didymus (year 7, Thoth 9) | ALD-000783 |
| P.Dion. 35 | 3116 | 3116 | 111 BC | included | receipt for repayment; names earlier loan of 45 art. wheat on a double symbolon (year 54 = 1) | ALD-000766 |
| P.Lond. 2 218 | 213 | 213 | 111 BC | included | loan of wheat | ALD-000784 |
| SB 28 17265 | 645 | 645 | 111-110 BC | excluded | register of contracts; no text available |  |
| P.Cair. Goodsp. 8 (fragment pg. 12) | 204 | 204 | 110 BC | included | loan by Panobchounis son of Nechoutes on a fragment of P.Cair. Goodsp. 8 (text in DDbDP under HGV 203) | ALD-000785 |
| P.Dion. 14 | 3097 | 3097 | 110 BC | included | loan of wheat | ALD-000786 |
| P.Dion. 29 | 3103 | 3103 | 110 BC | included | receipt for repayment; names earlier loan of 40 art. wheat by Andron (year 7, Tybi 17) | ALD-000787 |
| P.Adler 4 | 3 | 3 | 109 BC | excluded | debt acknowledgement for sums additionally owed under the contract of Taisis; not called a loan (owner decision 4) |  |
| P.Dion. 15 | 3098 | 3098 | 109 BC | included | loan of wheat | ALD-000788 |
| P.Dion. 16 | 3099 | 3099 | 109 BC | included | loan of wheat | ALD-000789 |
| P.Dion. 41 | 3122 | 3122 | 109 BC | excluded | too fragmentary to show a loan |  |
| P.Grenf. 1 26 | 48348 | 48348 | 109 BC | included | release (repayment) of a loan; names earlier loan of 56 art. wheat (year 3, Thoth) | ALD-000770 |
| P.Amh. 2 49 | 211 | 211 | 108 BC | included | loan contract (fragment; borrowers called οἱ δεδανεισμένοι) | ALD-000790 |
| P.Dion. 11 | 3094 | 3094 | 108 BC | pending | pending Hansen: petition; unclear whether the 150-artaba loan was actually paid out |  |
| P.Dion. 12 | 3095 | 3095 | 108 BC | excluded | duplicate of HGV 3094 (copy of the same petition; loan entered there) |  |
| P.Dion. 17 | 3100 | 3100 | 108 BC | included | loan of wheat | ALD-000791 |
| P.Dion. 23 | 3107 | 3107 | 108 BC | included | loan of wheat | ALD-000792 |
| P.Dion. 3 | 3086 | 3086 | 108 BC | excluded | too fragmentary to show a loan (only the date line survives) |  |
| P.Grenf. 1 28 | 220 | 220 | 108 BC | included | loan of wheat (fragment) | ALD-000793 |
| P.Dion. 18 | 3101 | 3101 | 107 BC | included | loan of wheat | ALD-000795 |
| P.Dion. 32 | 3113 | 3113 | 107 BC | included | loan of wheat (cheirographon, with one-half interest) | ALD-000796 |
| P.Lips. 1 7 | 82 | 82 | 107 BC | included | receipt for repayment; names an earlier loan contract issued by Patus to Neandrus (year 33, Choiak 1) | ALD-000735 |
| P.Par. 9 | 43645 | 43645 | 107 BC | excluded | account of deliveries and debts, no loan record |  |
| SB 18 13846 | 89 | 89 | 107 BC | included | receipt for repayment; names earlier loan of 8 copper talents (year 9, Mecheir) | ALD-000794 |
| P.Adler 6 | 5 | 5 | 106 BC | included | loan of castor seed | ALD-000797 |
| P.Amh. 2 48 | 123 | 123 | 106 BC | included | loan of wine | ALD-000798 |
| P.Amh. 2 50 | 124 | 124 | 106 BC | included | loan of money | ALD-000799 |
| P.Dion. 24 | 3108 | 3108 | 106 BC | included | loan of wheat | ALD-000800 |
| PSI 9 1023 | 5575 | 5575 | 106 BC | included | receipt for partial repayment; names earlier loan of 4 talents | ALD-000801 |
| P.Dion. 19 | 2847 | 2847 | 105 BC | included | loan of wheat | ALD-000802 |
| P.Dion. 20 | 2848 | 2848 | 105 BC | pending | pending Hansen: possibly the same loan as P.Dion. 19 restated the next day |  |
| P.Dion. 30 | 3104 | 3104 | 105 BC | excluded | receipt for the loan in HGV 3108 (P.Dion. 24) |  |
| P.Dryton 29 | 66 | 66 | 105 BC | included | loan of salt | ALD-000803 |
| P.Grenf. 2 24 | 68 | 68 | 105 BC | included | loan of wine | ALD-000804 |
| P.Dion. 25 | 3109 | 3109 | 104 BC | included | loan of wheat | ALD-000805 |
| P.Dion. 31 | 3112 | 3112 | 104 BC | excluded | receipt for the loan in HGV 3109 (P.Dion. 25) |  |
| P.Grenf. 2 31 | 75 | 75 | 104 BC | included | receipt for a share of a loan; names earlier loan | ALD-000806 |
| P.Grenf. 2 26 | 70 | 70 | 103 BC | excluded | settlement among heirs about debts paid to creditors; no specific loan |  |
| P.Grenf. 2 27 | 71 | 71 | 103 BC | included | loan of money; names earlier loan guaranteed by borrowers | ALD-000807, ALD-000808 |
| P.Grenf. 2 28 | 72 | 72 | 103 BC | excluded | cession (ἀφίσταται) of land bought; no loan |  |
| P.Grenf. 2 29 | 73 | 73 | 102 BC | included | loan of wheat and barley (two rows) | ALD-000810, ALD-000811 |
| P.Grenf. 2 30 | 74 | 74 | 102 BC | included | receipt for repayment; names earlier loan of 2 talents | ALD-000809 |
| P.Adler 10 | 10 | 10 | 101 BC | included | loan of money | ALD-000812 |
| P.Grenf. 1 31 | 48349 | 48349 | 101-100 BC | included | loan of barley (beginning lost) | ALD-000813 |
| BGU 6 1255 | 7326 | 7326 | 100-1 BC | excluded | petition; claim for a share of the father's debts paid, not a loan |  |
| P.Adler 15 | 15 | 15 | 100 BC | included | loan of wheat and barley (two rows) | ALD-000814, ALD-000815 |
| P.Rainer Cent. 50 | 8604 | 8604 | 100-51 BC | excluded | petition, too fragmentary to show a loan |  |
| P.Lond. 3 1205 | 92 | 92 | 99 BC | included | loan of wheat (rest lost) | ALD-000816 |
| P.Ryl. 4 586 | 5736 | 5736a | 99 BC | excluded | no text available |  |
| SB 6 9255 | 5736 | 5736b | 99 BC | excluded | no text available |  |
| P.Adler 19 | 19 | 19 | 98 BC | included | loan of iron (homologia at the agoranomus' office) | ALD-000817 |
| UPZ 2 190 | 3592 | 3592 | 98 BC | included | loan of wheat (novation of an earlier debt) | ALD-000818 |
| P.Tebt. 1 110 | 3746 | 3746 | 92 BC | included | loan of wheat (acknowledgement) | ALD-000819 |
| UPZ 1 125 | 3517 | 3517 | 89 BC | included | loan contract (money) | ALD-000820 |
| BGU 14 2374 | 3994 | 3994 | 88-81 BC | included | petition; mentions a loan contract (δανείσας, κατὰ συγγραφὴν δανείου) of 22 1/2 choes and 26 copper talents | ALD-000821, ALD-000822 |
| P.Bour. 12 | 305 | 305 | 88 BC | excluded | letter (political news), no loan |  |
| BGU 18 .1 2732 | 69806 | 69806 | 87-85 BC | excluded | petition requesting state seed-grain loan (εἰς δάνεια τοῦ ... σπόρου), not shown made |  |
| P.Ryl. 4 587 | 5303 | 5303 | 87 BC | included | loan contract (copper money) | ALD-000823 |
| BGU 18 .1 2734 | 69808 | 69808 | 86-85 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Berl. Salm. 14 | 78012 | 78012 | 86 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Berl. Salm. 3 | 78001 | 78001 | 86 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Berl. Salm. 4 | 78002 | 78002 | 86 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Berl. Salm. 5 | 78003 | 78003 | 86 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Berl. Salm. 9 | 78007 | 78007 | 86-85 BC | excluded | state seed-grain grant (request by a private landowner for seed from the state) |  |
| BGU 18 .1 2758 | 69831 | 69831 | 85-84 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Hamb. 1 58 | 5131 | 5131 | 83 BC | included | loan of wheat (subscriptions of a six-witness contract) | ALD-000825 |
| BGU 18 .1 2754 | 47218 | 47218 | 78 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Berl. Salm. 18 | 47215 | 47215 | 78 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Berl. Salm. 20 | 47217 | 47217 | 78 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Ryl. 4 588 | 5304 | 5304 | 78 BC | included | receipt for repayment; names the earlier loan of 8 talents 2500 copper drachmas | ALD-000824 |
| SB 5 8755 | 5712 | 5712 | 78 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| SB 5 8756 | 5713 | 5713 | 78 BC | excluded | state seed-grain loan (royal granary, εἰς δάνεια σπέρματα / τοῦ εἰς τὸ ... σπόρου) |  |
| P.Mert. 1 6 | 5239 | 5239 | 77 BC | included | loan of wheat | ALD-000826 |
| BGU 10 1972 | 7812 | 7812 | 75-26 BC | included | loan of grain (acknowledgement) | ALD-000827 |
| SB 6 9405 | 5768 | 5768 | 75 BC | included | receipt for repayment; names earlier loan of 13 art. barley (Petesuchus to Pacrates and Thais) | ALD-000828 |
| JJP 44 (2014) 104 no. 1 | 43045 | 43045 | 74 BC | included | loan of radish seed | ALD-000829 |
| SB 5 7532 | 5697 | 5697 | 74 BC | included | loan contract (double document) | ALD-000830 |
| JJP 44 (2014) 108 no. 2 | 700717 | 700717 | 71 BC | included | loan of money | ALD-000831 |
| BGU 20 2844 | 316207 | 316207 | 68 BC | included | receipt for repayment; names earlier loan by Agathodorus to Theodorus and Heraclea | ALD-000832 |
| SB 26 16745 | 5907 | 5907 | 66-65 BC | included | loan of wheat | ALD-000833 |
| P.Oxy. 14 1644 | 5258 | 5258 | 63-62 BC | pending | pending Hansen: δάνειον ἔντοκον within the family, possibly a fictitious contract |  |
| BGU 8 1818 | 4897 | 4897 | 60-59 BC | included | petition; mentions loan contract for 150 art. wheat | ALD-000834 |
| BGU 8 1823 | 4902 | 4902 | 60-55 BC | included | petition; mentions loan of copper by petitioner to three persons | ALD-000835 |
| P.Bingen 57 | 44501 | 44501 | 50-1 BC | excluded | too fragmentary to show a loan |  |
| SB 8 9764 | 5793 | 5793 | 49 BC | included | loan of wheat (acknowledgement) | ALD-000836 |
| BGU 16 2577 | 23299 | 23299 | 30 BC-AD 14 | excluded | tax list (laographia), no loan |  |
| SB 16 12700 | 17452 | 17452 | 30 BC-AD 14 | included | loan contract | ALD-000021 |
| BGU 16 2665 | 23389 | 23389 | 28-27 BC | excluded | private letter; χρῆσις = use, no loan |  |
| P.Ryl. 4 602 | 13021 | 13021 | 25 BC | included | loan contract | ALD-000022 |
| BGU 4 1161 | 18611 | 18611 | 24-23 BC | included | loan contract | ALD-000023 |
| BGU 4 1118 | 18560 | 18560 | 22 BC | included | garden lease with interest-free advance (προχρῆσις) of 2,500 drachmas received by the lessees | ALD-000482 |
| BASP 53 (2016) 95 | 703270 | 703270 | 20-19 BC | included | loan contract | ALD-000025 |
| P.Lips. 2 127 | 44411 | 44411 | 20 BC | included | loan contract | ALD-000024 |
| P.Lips. 2 128 | 44409 | 44409 | 19 BC | included | loan contract | ALD-000026 |
| BGU 4 1124 | 18566 | 18566 | 18 BC | included | cancellation of apprenticeship contract; names two earlier loans of Nilus: 100 dr. lent under the apprenticeship synchoresis (Pachon yr 12, repaid here) and the 700 dr. synchoresis 'of loan' (Epeiph yr 12) that stays valid | ALD-000483, ALD-000484 |
| P.Oxy. 78 5169 | 170053 | 170053 | 18 BC | excluded | receipt for repayment |  |
| BGU 4 1162 | 18612 | 18612 | 17-16 BC | included | loan contract | ALD-000027 |
| P.Eirene 4 21 | 704212 | 704212 | 17-16 BC | included | loan contract | ALD-000028 |
| BGU 4 1156 | 18606 | 18606 | 16-15 BC | included | loan contract | ALD-000029, ALD-000476 |
| BGU 4 1103 | 18542 | 18542 | 14-13 BC | excluded | no text available |  |
| BGU 4 1132 | 18576 | 18576 | 14 BC | included | synchoresis reciting earlier synchoreseis: loans of Ammonius to Theodorus: 500 dr. (Thoth yr 15), further 500 dr. (Phaophi yr 15), further 200 dr. (Hathyr) and 200 dr. (Pachon), total 1,200 | ALD-000485, ALD-000486, ALD-000487, ALD-000488 |
| BGU 4 1147 | 18593 | 18593 | 14-13 BC | included | loan contract | ALD-000031 |
| BGU 4 1153 | 18603 | 18603b | 14 BC | excluded | receipt for repayment and cancellation of loan |  |
| BGU 4 1165 | 18615 | 18615 | 14-13 BC | excluded | receipt for repayment and cancellation of loan |  |
| BGU 4 1176 | 18633 | 18633 | 14-13 BC | excluded | too fragmentary |  |
| BGU 4 1177 | 18634 | 18634 | 14-13 BC | excluded | too fragmentary |  |
| ZPE 217 (2021) 160 | 111086 | 111086 | 14-13 BC | included | loan contract | ALD-000030 |
| BGU 4 1052 | 58091 | 58091 | 13 BC | included | loan contract (synchoresis) | ALD-000041 |
| BGU 4 1055 | 18499 | 18499 | 13 BC | included | loan contract | ALD-000033 |
| BGU 4 1056 | 18500 | 18500 | 13 BC | included | loan contract | ALD-000034 |
| BGU 4 1057 | 18502 | 18502a, 18502b | 13 BC | included | loan contract | ALD-000035 |
| BGU 4 1058 | 18503 | 18503 | 13 BC | excluded | wet-nurse contract, no loan |  |
| BGU 4 1115 | 18556 | 18556 | 13 BC | included | loan contract | ALD-000036 |
| BGU 4 1117 | 18559 | 18559 | 13 BC | excluded | lease of a bakery; χρῆσις = use, no loan |  |
| BGU 4 1144 | 18588 | 18588 | 13 BC | included | agreement between co-borrowers that records the terms of their loan | ALD-000038 |
| BGU 4 1148 | 18594 | 18594 | 13 BC | included | receipt for repayment of two earlier loans (Phaophi yr 4: 150 dr.; Hathyr yr 7: 872 dr.) of Dionysius to Apollonia and Isidorus; rows for the earlier loans | ALD-000480, ALD-000481 |
| BGU 4 1149 | 18595 | 18595 | 13 BC | excluded | receipt for partial repayment (222 of 550 drachmas, two earlier loans) with a 2-month term and slave security for the balance of 328 drachmas |  |
| BGU 4 1150 | 18597 | 18597a | 13 BC | included | receipt for repayment of an earlier loan of 1,000 dr. (Artemis to Protarchus and Opora, 19 BC); row for the earlier loan | ALD-000464 |
| BGU 4 1150 | 18597 | 18597b | 13 BC | included | loan contract (synchoresis) | ALD-000039 |
| BGU 4 1151 | 18568 | 18568a, 18568b | 13 BC | excluded | not a loan: settlement of a legacy (100 of 200 drachmas paid, balance deferred 17 months); the loan in this papyrus is recorded under 18568d |  |
| BGU 4 1151 | 18568 | 18568c, 18568d | 13 BC | included | loan contract (synchoresis) | ALD-000037 |
| BGU 4 1164 | 18614 | 18614 | 13-12 BC | excluded | receipt for repayment |  |
| BGU 4 1166 | 18616 | 18616 | 13 BC | included | loan contract (synchoresis) | ALD-000040 |
| BGU 4 1167 | 18619 | 18619 | 13-12 BC | included | loan contract with mortgage (synchoresis), 120 dr. interest-free | ALD-000489 |
| ZPE 199 (2016) 150 | 18497 | 18497 | 13 BC | included | loan contract | ALD-000032, ALD-000454 |
| BGU 4 1167 | 18617 | 18617 | 12 BC | excluded | receipt for repayment |  |
| BGU 4 1167 | 18618 | 18618 | 12 BC | excluded | receipt for repayment |  |
| SB 20 14375 | 23723 | 23723 | 12 BC | included | loan contract (synchoresis) | ALD-000042 |
| BGU 4 1136 | 18580 | 18580 | 11-10 BC | included | loan from an eranos (cheirograph) | ALD-000043 |
| BGU 4 1152 | 18601 | 18601 | 11-10 BC | excluded | receipt for repayment |  |
| BGU 4 1157 | 18607 | 18607 | 11-10 BC | included | hire-sale of a boat reciting an earlier interest-bearing loan of 1,032 dr. (called δάνειον), repaid and annulled here | ALD-000491 |
| BGU 4 1168 | 18620 | 18620 | 11-10 BC | excluded | receipt for repayment |  |
| BGU 4 1169 | 18621 | 18621 | 11-10 BC | excluded | receipt for repayment |  |
| P.Leid.Inst. 2 27 | 971475 | 971475 | 11-5 BC | included | loan contract (fragmentary) | ALD-000044 |
| BGU 4 1154 | 18604 | 18604 | 10 BC | excluded | receipt for repayment |  |
| BGU 4 1170 | 18623 | 18623a | 10 BC | included | loan contract (synchoresis) | ALD-000045 |
| BGU 4 1170 | 18623 | 18623b | 10 BC | excluded | receipt for repayment |  |
| BGU 4 1171 | 18628 | 18628 | 10 BC | included | annulment of the cession of a loan; earlier loan of Stephanus to Herodes, 1,000 dr. (Mesore yr 17), with interest | ALD-000490 |
| BGU 4 1104 | 18544 | 18544c | 9-8 BC | excluded | note/abstract of a contract in a draft roll; too fragmentary to establish lender and borrower |  |
| BGU 4 1126 | 18569 | 18569 | 9 BC | included | paramone loan: 100 dr. (δάνειον), interest and principal paid off by 3 years' service (subscriptions crossed out) | ALD-000492 |
| BGU 4 1172 | 18629 | 18629 | 9 BC | included | loan contract (synchoresis) | ALD-000046 |
| BGU 16 2560 | 23282 | 23282 | 8-7 BC | excluded | state seed-grain order |  |
| BGU 16 2561 | 23283 | 23283 | 8-7 BC | excluded | state seed-grain order |  |
| BGU 16 2562 | 23284 | 23284 | 8-7 BC | excluded | state seed-grain order |  |
| BGU 16 2563 | 23285 | 23285 | 8 BC | excluded | state seed-grain order |  |
| BGU 16 2570 | 23292 | 23292 | 8-7 BC | excluded | state seed-grain order |  |
| BGU 16 2576 | 23298 | 23298 | 8-2 BC | excluded | state seed-grain order |  |
| SB 1 5244 | 13989 | 13989 | 8 BC | included | loan contract | ALD-000047 |
| BGU 16 2575 | 23297 | 23297 | 6-5 BC | excluded | state seed-grain order |  |
| P.Yale 1 60 | 16838 | 16838 | 6-5 BC | included | loan contract (cheirograph, cancelled) | ALD-000048 |
| P.Yale 4 155 | 974973 | 974973a | 6-5 BC | included | draft of a loan contract (cheirograph) | ALD-000049 |
| PSI 10 1099 | 17538 | 17538 | 6-5 BC | excluded | advance payment for wheat to be delivered (not called a loan) |  |
| SB 22 15333 | 41594 | 41594 | 6 BC | excluded | order to advance (πρόχρησον) 100 dr. to three farmers for seed; instruction, advance not shown to be made, not called a loan |  |
| SB 3 6663 | 18824 | 18824 | 6-5 BC | included | petition: loan (δανεισμός, δάνειον, with interest) of the late Ptolemaeus to thirteen borrowers, now to be exacted by his son Heraclides; amount and borrowers' names fragmentary | ALD-000493 |
| BGU 4 1120 | 18562 | 18562 | 5 BC | included | lease of gardens with an interest-free χρῆσις of 200 Ptolemaic dr. received by the lessees | ALD-000494 |
| BGU 4 1145 | 18589 | 18589 | 5 BC | included | loan contract (synchoresis) | ALD-000050 |
| BGU 4 1173 | 18630 | 18630 | 5-4 BC | excluded | receipt for repayment / cancellation of loan |  |
| BGU 4 1174 | 18631 | 18631 | 5 BC | excluded | receipt for repayment / cancellation of loan |  |
| BGU 4 1175 | 18632 | 18632 | 5 BC | included | loan contract (synchoresis) | ALD-000051 |
| P.Yale 4 155 | 974973 | 974973b | 5 BC | included | draft of a loan contract | ALD-000052 |
| BGU 16 2565 | 23287 | 23287 | 3-2 BC | excluded | state seed-grain order |  |
| BGU 20 2860 | 316223 | 316223 | 3 BC | excluded | state seed-grain order |  |
| BGU 11 2119 | 25124 | 25124 | AD 1-100 | excluded | receipt for repayment / cancellation of loan |  |
| CPR 1 220 | 25946 | 25946 | AD 1-100 | excluded | sale contract |  |
| ChLA 47 1443 | 70140 | 70140 | AD 1-400 | excluded | no text available |  |
| O.Bodl. 2 2544 | 73131 | 73131 | AD 1-400 | excluded | too fragmentary (mentions a lender, no loan shown) |  |
| P.Amst. 1 40 | 24938 | 24938 | AD 1-100 | excluded | dowry/settlement document; mentions unspecified paternal loans (plural, no parties or amounts) she paid off; no distinct loan transaction |  |
| P.Bas. 2 12 | 827775 | 827775 | AD 1-100 | excluded | too fragmentary |  |
| P.Bingen 66 | 44506 | 44506 | AD 1-200 | included | declaration (prosapographe) of land serving as security for a loan, with loan terms | ALD-000056 |
| P.Dub. 7 | 25917 | 25917 | AD 1-200 | excluded | abstract of contracts |  |
| P.Fouad 1 33 | 25717 | 25717 | AD 1-100 | included | donatio mortis causa mentioning a loan owed by Peto[...] (dáneion), half of which is disposed of | ALD-000495 |
| P.Freib. 4 56 | 24901 | 24901 | AD 1-200 | excluded | private letter asking to advance wages; not a loan |  |
| P.Harr. 1 84 | 25857 | 25857 | AD 1-200 | included | loan contract (cheirographon) | ALD-000055 |
| P.IFAO 3 30 | 25876 | 25876 | AD 1-50 | excluded | too fragmentary: only an acknowledgement of receiving 16 drachmas through a bank survives; no loan wording or repayment clause preserved |  |
| P.Leid.Inst. 1 26 | 25423 | 25423 | AD 1-100 | included | loan contract (cheirographon) | ALD-000054 |
| P.Oslo 3 114 | 25907 | 25907 | AD 1-125 | excluded | abstracts of contracts |  |
| P.Oxy. 4 799 | 20455 | 20455 | AD 1 | excluded | account |  |
| P.Oxy. 49 3468 | 24962 | 24962 | AD 1-100 | included | loan of 200 dr. mentioned in a petition to the prefect | ALD-000496 |
| P.Princ. 3 142 | 25152 | 25152 | AD 1-200 | included | loan contract (homologia) | ALD-000053 |
| P.Ryl. 2 327 | 25486 | 25486 | AD 1-100 | excluded | no text available |  |
| P.Ryl. 4 684 | 25162 | 25162 | AD 1-100 | excluded | too fragmentary |  |
| P.Strasb. 1 33 | 25435 | 25435 | AD 1-100 | included | cheirographon: interest-bearing loan of 100 dr. through the Hermes bank, Hermopolis | ALD-000497 |
| P.Tebt. 2 444 | 25695 | 25695 | AD 1-100 | excluded | no text available |  |
| P.Tebt.Quen. 20 | 738081 | 738081 | AD 1-100 | excluded | no text available |  |
| P.Vindob. Tandem 27 | 24928 | 24928 | AD 1-100 | excluded | donatio mortis causa; only a generic mention of loans (dáneia) among the estate, no specific loan |  |
| P.Wash. Univ. 2 78 | 25298 | 25298 | AD 1-50 | excluded | register of contracts |  |
| PSI 6 687 | 25446 | 25446 | AD 1-200 | excluded | register of contracts |  |
| PSI Com 12 3 | 700715 | 700715 | AD 1-100 | excluded | too fragmentary: petition mentions a debt under an Egyptian loan contract, but the text breaks off before showing whether it was a loan of money |  |
| SB 12 11021 | 25066 | 25066 | AD 1-200 | included | letter: Theon to collect from Euagrius the money of an advance loan (prochresis); amount unclear | ALD-000498 |
| SB 16 13041 | 25058 | 25058 | AD 1-200 | excluded | too fragmentary: the loan terms and the word 'loan' survive only in restorations (antichretic loan with right of habitation per the edition) |  |
| SB 26 16567 | 97128 | 97128 | AD 1-200 | included | loan contract (homologia) | ALD-000057 |
| SB 28 17097 | 383682 | 383682 | AD 1-125 | excluded | letter asking a friend to advance fodder; request for a loan not shown to be made |  |
| Tyche 37 (2022) 205 | 998117 | 998117 | AD 1-100 | excluded | model documents (formulary), not an actual loan |  |
| ZPE 227 (2023) 134 | 991141 | 991141 | AD 1-200 | excluded | record of execution (prosbole), not a loan contract |  |
| P.Berl. Möller 4 | 10235 | 10235 | AD 3 | included | loan contract (barley) | ALD-000058 |
| SPP 22 20 | 18241 | 18241 | AD 3 | excluded | sale of a donkey |  |
| BASP 53 (2016) 105 | 703272 | 703272 | AD 7 | included | paramone loan contract | ALD-000060 |
| BGU 1 189 | 8949 | 8949 | AD 7 | included | loan contract (cheirographon) | ALD-000061 |
| SB 1 5243 | 13988 | 13988 | AD 7 | included | loan contract | ALD-000059 |
| BGU 11 2047 | 9580 | 9580 | AD 8 | excluded | receipt for repayment / cancellation of loan |  |
| P.Fay. 89 | 10932 | 10932 | AD 9 | excluded | sale with deferred delivery (price of vegetable seed and barley received, delivery in Payni); not called a loan |  |
| BASP 53 (2016) 110 | 10554 | 10554 | AD 10 | included | paramone loan contract | ALD-000062 |
| P.Lond. 2 256 | 19975 | 19975 | AD 11 | excluded | state seed-grain grant (order to sitologos) |  |
| CPR 15 11 | 9901 | 9901 | AD 13-15 | excluded | petition on the same loan of Satabous to Harpagathes; loan recorded under HGV 11737 |  |
| CPR 15 8 | 9920 | 9920 | AD 13-15 | excluded | petition (draft) on the same loan of 325 dr. Satabous to Harpagathes; loan recorded under HGV 11737 |  |
| CPR 15 9 | 9921 | 9921 | AD 13-15 | excluded | petition (draft) on the same loan of 325 dr. Satabous to Harpagathes; loan recorded under HGV 11737 |  |
| CPR 15 10 | 11737 | 11737 | AD 14 | included | petition with copy of the loan syngraphe (Phamenoth, year 41 of Augustus): 325 dr. lent by Satabous to Harpagathes, interest fixed | ALD-000499 |
| PSI 9 1028 | 13758 | 13758 | AD 15 | included | loan contract in kind (wheat) | ALD-000063 |
| P.Lips. 2 130 | 44413 | 44413 | AD 16 | included | antichretic loan contract | ALD-000064 |
| P.Mich. 5 241 | 12082 | 12082 | AD 16 | excluded | abstracts of contracts |  |
| P.Corn. 6 | 10607 | 10607 | AD 17 | included | loan contract (later cancelled) | ALD-000065 |
| P.Dime 3 7 | 9411 | 9411 | AD 18 | included | loan contract with security, 84 dr. at 1 dr. per mina per month | ALD-000500 |
| BGU 3 987 | 9428 | 9428 | AD 19-45 | excluded | sale of a slave |  |
| SB 10 10222 | 16671 | 16671 | AD 20 | included | loan acknowledgement (cheirographon) via bank | ALD-000066 |
| SB 12 11041 | 14399 | 14399 | AD 20-21 | included | antichretic loan of 84 dr. (residence in house in lieu of interest); later returned/cancelled by the lender | ALD-000501 |
| SB 20 15028 | 23851 | 23851 | AD 20-37 | excluded | receipt for repayment |  |
| P.Oxy. 10 1281 | 21761 | 21761 | AD 21 | included | loan contract (pilot) | ALD-000003 |
| P.Lond. 2 277 | 11664 | 11664 | AD 23 | included | copy of loan contract with mortgage | ALD-000067 |
| SB 20 14394 | 23730 | 23730 | AD 23 | included | copy of bank diagraphe: interest-bearing loan of 336 dr.; crossed-out (cancelled) | ALD-000502 |
| P.Mich. 10 587 | 12274 | 12274 | AD 24-25 | included | paramone loan | ALD-000068 |
| P.Princ. 3 141 | 17265 | 17265 | AD 24 | excluded | receipt for repayment |  |
| P.Ryl. 2 326 | 12988 | 12988 | AD 24 | excluded | no text available |  |
| BGU 11 2116 | 9619 | 9619 | AD 25-26 | excluded | no text available |  |
| O.Bodl. 2 1978 | 72654 | 72654 | AD 25-26 | included | loan acknowledgement in kind (wheat) on ostracon | ALD-000069 |
| P.Oxy. 78 5173 | 170057 | 170057 | AD 25-26 | included | loan contract (pilot) | ALD-000004 |
| PSI 8 905 | 13804 | 13804 | AD 25-26 | excluded | cession (parachoresis) of catoecic land; 'parachresis' = parachoresis |  |
| P.Mich. 5 348 | 12158 | 12158 | AD 26 | included | partnership in a lease; the new partner remains responsible for 23 art. wheat he owes under a loan (earlier loan) | ALD-000503 |
| PSI 9 1051 | 13768 | 13768 | AD 26 | included | copy of loan contract | ALD-000070 |
| P.Mich. 5 336 | 12145 | 12145 | AD 27 | included | loan acknowledgement (cheirographon) | ALD-000071 |
| P.Lond. 3 1273 | 22866 | 22866 | AD 28-29 | included | loan contract | ALD-000072 |
| P.Mich. 5 328 | 15160 | 15160 | AD 29-30 | included | loan acknowledgement accompanying a sale (loan on security) | ALD-000073 |
| P.Oslo 2 33 | 12560 | 12560a | AD 29 | excluded | lease of land (recto); no loan |  |
| SB 16 13042 | 16356 | 16356 | AD 29 | included | antichretic loan contract | ALD-000074 |
| SB 8 9827 | 22908 | 22908 | AD 29 | excluded | receipt for repayment |  |
| P.Mich. 12 633 | 12297 | 12297 | AD 30 | included | lease of land mentioning an earlier contract of loan (syngraphe daneion) owed by the lessees to the lessor Kronion | ALD-000504 |
| P.Ryl. 2 160 | 12946 | 12946a | AD 32 | excluded | sale of a house (sale part of P.Ryl. 2 160; the loan on the same papyrus is recorded under HGV 12946b) |  |
| P.Ryl. 2 160 | 12946 | 12946b | AD 32 | included | loan contract (copy) | ALD-000075 |
| P.Ryl. 2 310 | 12984 | 12984 | AD 33 | excluded | too fragmentary |  |
| P.Tebt. Wall 9 | 13653 | 13653 | AD 33 | excluded | deposit (paratheke) |  |
| P.Oslo 2 33 | 12561 | 12561 | AD 34 | excluded | writing exercise / draft prescripts: only the opening 'Gaius Petronius, soldier, lent' with no borrower or amount; too fragmentary to show a loan |  |
| P.Oxy. 47 3351 | 22466 | 22466 | AD 34 | included | loan contract (pilot) | ALD-000005 |
| P.Ryl. 2 173 | 19519 | 19519 | AD 34 | included | loan through a bank (copy of bank diagraphe with borrower's subscription) | ALD-000076 |
| SB 10 10234 | 16673 | 16673 | AD 35 | included | loan contract (repayment acknowledged on the same papyrus) | ALD-000077 |
| P.Mich. 5 232 | 12073 | 12073 | AD 36 | included | loan of money mentioned in a petition | ALD-000078 |
| P.Lond. 3 1161 | 22812 | 22812 | AD 37-41 | excluded | no text available |  |
| P.Mich. 5 264 | 12098 | 12098 | AD 37 | excluded | sale of a slave (only 'free of mortgage' clause) |  |
| P.Mich. 5 265 | 12099 | 12099 | AD 37 | excluded | sale of a slave (duplicate of the same text; only 'free of mortgage' clause) |  |
| P.Oxy. 2 267 | 20538 | 20538 | AD 37 | excluded | marriage agreement: receipt of dowry in loan form, not called a loan |  |
| SB 10 10238 | 16676 | 16676 | AD 37 | included | loan contract (cheirograph) | ALD-000079 |
| P.Med. 1 7 | 11898 | 11898 | AD 38 | excluded | receipt for repayment and cancellation of earlier paramone and loan contracts |  |
| P.Oxy. 49 3485 | 15642 | 15642 | AD 38 | included | loan contract (pilot) | ALD-000006 |
| P.Ryl. 2 229 | 12977 | 12977 | AD 38 | excluded | letter; prochreson = 'make an advance' for fodder, no loan |  |
| P.Mich. 5 329 | 12138 | 12138 | AD 40-41 | included | loan contract with sale as security | ALD-000080 |
| P.Mich. 5 330 | 12139 | 12139 | AD 40-41 | excluded | no text available (duplicate of P.Mich. 5 329, HGV 12138) |  |
| BGU 4 1079 | 9456 | 9456 | AD 41 | excluded | letter; mentions 'many creditors' only, no specific loan |  |
| P.Louvre 1 16 | 11829 | 11829 | AD 41-54 | excluded | deposit (parathēkē), not called a loan |  |
| P.Mich. 5 331 | 12140 | 12140 | AD 41 | excluded | too fragmentary (beginning lost; surviving text does not show a loan) |  |
| P.Thomas 4 | 44492 | 44492 | AD 41-54 | included | antichretic loan contract | ALD-000083 |
| PSI 10 1131 | 13839 | 13839 | AD 41 | included | loan contract (later cancelled) | ALD-000081 |
| SB 10 10240 | 16678 | 16678 | AD 41 | included | letter: Papontos reports that the addressee Onnophris lent his own (money); further 1,000 dr. only offered | ALD-000505 |
| SB 16 12263 | 14565 | 14565 | AD 41-68 | included | antichretic loan contract | ALD-000082 |
| SB 26 16566 | 97130 | 97130 | AD 41-68 | included | loan contract | ALD-000084 |
| BGU 3 713 | 9312 | 9312 | AD 42 | included | loan contract | ALD-000086 |
| P.Dime 3 19 | 45838 | 45838a, 45838b | AD 42 | excluded | no text available (Greek text not in the data; only an English translation) |  |
| P.Mich. 2 121 | 11965 | 11965 | AD 42 | excluded | register of contracts (grapheion anagraphe) |  |
| P.Mich. 2 122 | 11966 | 11966 | AD 42 | excluded | forms for grapheion reports (register entries) |  |
| P.Oxy. 38 2834 | 22224 | 22224 | AD 42 | excluded | receipt for repayment |  |
| PSI 8 908 | 13808 | 13808 | AD 42-43 | included | loan contract (with sale of house in same document) | ALD-000085 |
| P.Mich. 5 237 | 12077 | 12077 | AD 43 | excluded | register of contracts (grapheion) |  |
| P.Brem. 67 | 19652 | 19652 | AD 44-58 | included | loan acknowledgement (cheirograph) | ALD-000087 |
| P.Fouad 1 44 | 20990 | 20990 | AD 44 | included | antichretic loan contract (synchoresis) | ALD-000088 |
| P.Mich. 2 123 | 11967 | 11967a | AD 45 | excluded | grapheion accounts/register of contracts |  |
| P.Mich. 2 123 | 11967 | 11967b | AD 45-46 | excluded | register of contracts (grapheion anagraphe) |  |
| P.Mich. 2 123 | 11968 | 11968 | AD 45-46 | excluded | grapheion accounts |  |
| P.Mich. 2 127 | 11972 | 11972 | AD 45-46 | excluded | expense account |  |
| BGU 11 2044 | 9578 | 9578 | AD 46 | included | loan contract | ALD-000089 |
| P.Bingen 60 | 44451 | 44451 | AD 46 | excluded | cession of catoecic land (only 'free of mortgage' clause) |  |
| P.Mich. 2 124 | 11969 | 11969 | AD 46-49 | excluded | grapheion register and accounts |  |
| P.Mich. 2 128 | 11974 | 11974 | AD 46-47 | excluded | grapheion register of contracts |  |
| P.Mich. 2 128 | 11975 | 11975 | AD 46 | excluded | grapheion register of contracts |  |
| P.Mich. 2 128 | 11976 | 11976 | AD 46 | excluded | grapheion register of contracts |  |
| P.Mich. 5 239 | 12080 | 12080 | AD 46 | excluded | register of contracts (grapheion notes) |  |
| P.Mich. 5 240 | 12081 | 12081 | AD 46-47 | excluded | register of contracts (grapheion register) |  |
| P.Dime 3 23 | 14341 | 14341 | AD 47 | included | loan contract with house-part as security | ALD-000506 |
| P.Fouad 1 47 | 11191 | 11191 | AD 47 | included | loan contract | ALD-000090 |
| P.Mich. 5 332 | 12141 | 12141 | AD 47-48 | included | loan contract secured by sale of house share (hypotheke) | ALD-000091 |
| PSI 8 910 | 13810 | 13810 | AD 47-48 | excluded | duplicate copy of the same loan as P.Mich. 5 332 (HGV 12141) |  |
| P.Strasb. 4 289 | 17000 | 17000 | AD 48 | included | loan contract | ALD-000092 |
| P.Monts. Roca 4 78 | 219248 | 219248 | AD 49-54 | included | antichretic loan contract | ALD-000093 |
| O.Ber. 2 131 | 89157 | 89157 | AD 50-75 | excluded | inventory of equipment ('used' = apo chreseos), no loan |  |
| P.Oxy. 27 2471 | 17006 | 17006 | AD 50 | excluded | cancellation of a loan (synchoresis) |  |
| P.Oslo 3 130 | 25909 | 25909 | AD 51-100 | excluded | receipt for repayment |  |
| P.Rein. 2 106 | 12877 | 12877 | AD 51-65 | included | loan contract (homologia) | ALD-000094 |
| CPR 1 4 | 9864 | 9864 | AD 52 | excluded | sale of land (only 'free of mortgage' clause) |  |
| P.Mich. 5 333 | 12142 | 12142 | AD 52 | included | loan contract | ALD-000095 |
| P.Mich. 5 334 | 12143 | 12143 | AD 52 | excluded | duplicate copy of P.Mich. 5 333 (same loan, recorded under HGV 12142); no separate Greek text in DDbDP |  |
| SB 5 8034 | 18009 | 18009 | AD 52 | excluded | receipt for repayment |  |
| P.Pintaudi 31 | 170022 | 170022 | AD 53 | included | draft of a loan contract | ALD-000096 |
| P.Dime 3 27 | 48588 | 48588a, 48588b | AD 54 | excluded | no text available |  |
| P.Oxy. Hels. 32 | 15814 | 15814 | AD 55-67 | included | loan contract | ALD-000097 |
| P.Wisc. 2 53 | 15896 | 15896 | AD 55 | excluded | receipt for (part-)repayment |  |
| SB 10 10246 | 16685 | 16685 | AD 55 | included | loan contract (cheirographon) | ALD-000098 |
| P.Alex. inv. 585 | 10091 | 10091 | AD 56 | excluded | too fragmentary (no loan terms survive in the Greek) |  |
| P.Mich. 5 335 | 12144 | 12144 | AD 56 | included | loan on security (mortgage by sale) | ALD-000099 |
| P.Oxy. 2 271 | 20542 | 20542 | AD 56 | included | copy of a cession of a debt: 200 dr. lent (daneistheison) to Pnepheros son of Papontos by synchoresis of the epagomenal days of year 1 of Nero; claim ceded to Herakleia, now to Papontos | ALD-000507 |
| PSI 8 911 | 13811 | 13811 | AD 56 | excluded | duplicate copy of P.Mich. 5 335 (same loan, recorded under HGV 12144) |  |
| P.Hamb. 1 1 | 21035 | 21035 | AD 57 | excluded | receipt for repayment (bank diagraphe) |  |
| P.Oxy. 2 269 | 20540 | 20540 | AD 57 | included | loan contract (pilot) | ALD-000007 |
| P.Strasb. 7 663 | 16504 | 16504 | AD 57-58 | included | loan acknowledgement (cheirographon) | ALD-000100 |
| ZPE 213 (2020) 192 | 832445 | 832445 | AD 57 | excluded | letter; chreseis = 'need', no loan |  |
| JJP 40 (2010) 268 | 244111 | 244111 | AD 58 | included | paramone loan contract (crossed out) | ALD-000102 |
| SB 10 10249 | 16687 | 16687 | AD 58-59 | included | loan contract | ALD-000101 |
| P.Cair. Preis. 43 | 20218 | 20218 | AD 59 | excluded | receipt for repayment |  |
| SB 14 11491 | 18137 | 18137 | AD 59 | included | loan contract (crossed out) | ALD-000103 |
| P.Mich. 3 191 | 21337 | 21337 | AD 60 | included | acknowledgement of money received, repayable (homologia) | ALD-000104 |
| P.Mich. 3 192 | 21338 | 21338 | AD 60 | excluded | no text available |  |
| SB 12 10788 | 16066 | 16066a | AD 60-61 | excluded | census declaration, no loan |  |
| P.Ryl. 2 119 | 19506 | 19506 | AD 62-66 | included | petition against 'our creditor (daneistes)' Musaeus, who holds a mortgage of 83 1/4 arouras for a capital of 4,800 dr. | ALD-000508 |
| P.IFAO 1 8 | 11505 | 11505 | AD 64 | included | loan contract (in kind) | ALD-000105 |
| P.Vindob. Tandem 22 | 13683 | 13683 | AD 64 | included | loan contract | ALD-000106 |
| P.Yale 1 63 | 16839 | 16839 | AD 64 | excluded | receipt for repayment |  |
| P.Oxy. 4 808 | 20459 | 20459 | AD 65-68 | excluded | register/abstracts of contracts (loan repayments) |  |
| P.Oxy. 49 3487 | 15644 | 15644 | AD 65 | excluded | receipt for repayment |  |
| P.Oxy. 2 272 | 20543 | 20543 | AD 66 | excluded | transfer of a claim (cession of debt owed by Heracleus); the preserved text does not call the debt a loan (chresis here = use of a share) |  |
| P.Oxy. 14 1641 | 21951 | 21951 | AD 68 | included | loan contract (pilot) | ALD-000008 |
| P.Alex. 10 | 10067 | 10067 | AD 69-79 | excluded | deposit (parathēkē) not called a loan |  |
| P.Turner 17 | 15687 | 15687 | AD 69 | excluded | receipt for repayment |  |
| P.Dime 3 31 | 9410 | 9410a, 9410b | AD 70 | excluded | no text available |  |
| SB 28 17164 | 16757 | 16757 | AD 70-132 | included | loan contract (cheirograph) | ALD-000107 |
| P.Freib. 4 55 | 11204 | 11204 | AD 71 | excluded | receipt for repayment |  |
| P.Mich. 12 635 | 12299 | 12299 | AD 71 | included | antichretic loan contract (copy) | ALD-000108 |
| P.Oxy. 34 2725 | 16596 | 16596 | AD 71 | excluded | letter; conditional mention of a chresis brought by Dionysius, no loan shown to be made, too fragmentary |  |
| P.Vars. 12 | 13667 | 13667 | AD 71 | excluded | register of contracts |  |
| P.Tebt. 2 387 | 13543 | 13543 | AD 73 | excluded | deposit (parathēkē) not called a loan |  |
| P.Yale 1 64 | 16840 | 16840 | AD 74-75 | included | loan contract | ALD-000109 |
| P.Amh. 2 110 | 10093 | 10093 | AD 75 | excluded | receipt for repayment |  |
| SB 20 14096 | 23675 | 23675 | AD 75 | excluded | receipt for repayment |  |
| SB 28 17081 | 13197 | 13197 | AD 75 | excluded | sale of part of a house |  |
| BASP 50 (2013) 89 | 25730 | 25730 | AD 76-200 | excluded | register (schedule) of contracts from a grapheion |  |
| P.Fouad 1 50 | 25718 | 25718 | AD 76-100 | included | loan contract (chresis) | ALD-000111 |
| P.Oxy. 2 299 | 25672 | 25672 | AD 76-100 | included | loan in money in a letter (kechreka: Horus lent 8 drachmas to Dionysius) | ALD-000509 |
| P.Oxy. 2 329 | 25675 | 25675 | AD 76-100 | excluded | application to register a loan contract without its terms |  |
| PSI 13 1319 | 13871 | 13871 | AD 76 | included | loan contract (with sale of house) | ALD-000110 |
| SB 20 14097 | 23676 | 23676 | AD 76-79 | excluded | receipt for repayment |  |
| P.Oxy. Hels. 30 | 12590 | 12590 | AD 77 | excluded | deposit (parathēkē) not called a loan |  |
| P.Mich. 10 583 | 12270 | 12270 | AD 78 | excluded | sale of a house |  |
| P.Mich. 9 567 | 12059 | 12059 | AD 78 | included | loan contract | ALD-000112 |
| P.Fouad 1 56 | 11194 | 11194 | AD 79 | excluded | receipt for repayment |  |
| ZPE 222 (2022) 179 | 20593 | 20593 | AD 79-80 | included | loan contract (secured on land) | ALD-000113 |
| BGU 11 2121 | 9622 | 9622 | AD 81-96 | excluded | receipt for repayment |  |
| P.Lond. 2 283 | 11668 | 11668 | AD 81 | excluded | no text available (DDbDP has a single word) |  |
| P.Oxy. 12 1471 | 21872 | 21872 | AD 81 | included | loan contract (pilot) | ALD-000009 |
| P.Oxy. 49 3466 | 15628 | 15628 | AD 81-96 | included | loan in a petition: Demetria to hold the gold until recovery of the loan (daneion) of 3,600 drachmas owed by Phanias | ALD-000511 |
| SB 8 9765 | 22900 | 22900 | AD 81 | excluded | receipt for repayment |  |
| P.Flor. 1 82 | 23583 | 23583 | AD 82-83 | included | loan in kind (cheirographon) | ALD-000114 |
| P.Oxy. 2 286 | 20557 | 20557 | AD 82 | included | earlier loan in a petition: Philumene lent 2,000 drachmas with interest to the petitioner and her mother Thaesis by contract of Pharmouthi, year 9 of Vespasian | ALD-000510 |
| P.Oxy. 36 2773 | 16564 | 16564 | AD 82 | included | loan contract (pilot) | ALD-000010 |
| BGU 11 2095 | 9606 | 9606 | AD 83 | excluded | sale of part of a house |  |
| P.Oxy. 10 1282 | 21767 | 21767 | AD 83 | excluded | receipt for repayment (and cancellation of loan contract) |  |
| P.Tebt. Wall 2 | 13647 | 13647 | AD 83-84 | included | loan of money | ALD-000115 |
| SPP 20 1 | 15005 | 15005 | AD 83-84 | excluded | cession of catoecic land; payment by cheirograph not called a loan |  |
| BGU 1 190 | 8951 | 8951 | AD 84-96 | included | loan of money | ALD-000116 |
| P.Flor. 1 61 | 23571 | 23571 | AD 85 | excluded | court proceedings (loan of wheat mentioned in a hearing before the prefect) |  |
| P.Oxy. 66 4532 | 78604 | 78604 | AD 85 | included | extract of a loan contract from the record office (full terms) | ALD-000117 |
| P.Athen. 28 | 10133 | 10133 | AD 86 | excluded | deposit (parathēkē), not called a loan |  |
| P.Flor. 1 86 | 23585 | 23585 | AD 86 | included | petition (application to the archidikastes) concerning unpaid money loans | ALD-000120, ALD-000121, ALD-000122, ALD-000123, ALD-000124 |
| P.Oxy. 75 5052 | 128893 | 128893 | AD 86-87 | included | acknowledgement of a money debt from a loan, with undertaking to repay | ALD-000118 |
| P.Oxy. Hels. 31 | 15813 | 15813 | AD 86 | included | copy of a loan contract on mortgage | ALD-000119 |
| PSI 12 1235 | 17404 | 17404 | AD 86-89 | excluded | extract from bank records: repayment and cancellation of a loan |  |
| P.Dura 18 | 17216 | 17216 | AD 87 | excluded | deed of gift (loan mentioned only in passing; Parthian Dura) |  |
| P.Mich. 10 585 | 12272 | 12272 | AD 87 | included | antichretic loan (habitation in lieu of interest) | ALD-000125 |
| SB 24 15920 | 25460 | 25460 | AD 87-103 | excluded | private account |  |
| O.Did. 330 | 144893 | 144893 | AD 88-96 | excluded | letter; no loan (chreia = need) |  |
| O.Did. 333 | 144896 | 144896 | AD 88-92 | excluded | letter; 'you are not my creditor', no loan |  |
| SB 16 12758 | 14661 | 14661 | AD 88 | excluded | sale of land |  |
| SB 20 14287 | 23707 | 23707 | AD 88-89 | excluded | state seed-grain loan (order to deliver seed) |  |
| BGU 13 2330 | 9721 | 9721 | AD 89 | included | loan of money (with advance payment for wheat) | ALD-000130 |
| P.Alex. 8 | 10073 | 10073 | AD 89 | included | paramone loan | ALD-000126 |
| P.Amh. 2 68 | 21673 | 21673 | AD 89-92 | excluded | official correspondence on purchase of state land; no loan |  |
| P.Hamb. 1 30 | 11378 | 11378 | AD 89 | included | antichretic loan (habitation in lieu of interest) | ALD-000127 |
| P.Mich. 9 566 r | 12058 | 12058 | AD 89 | included | loan of money with restraint on alienation of property | ALD-000128 |
| P.Tebt. Tait 49 | 13642 | 13642 | AD 89 | included | loan of money (crossed-out contract) | ALD-000129 |
| SB 1 5761 | 13999 | 13999 | AD 89-91 | excluded | court proceedings |  |
| P.Fouad 1 48 | 20993 | 20993 | AD 90 | included | loan of money and wheat | ALD-000131, ALD-000455 |
| P.Sarap. 61 | 17078 | 17078 | AD 90-133 | excluded | account of receipts and expenses |  |
| P.Sarap. 79 | 17142 | 17142 | AD 90-133 | excluded | account of expenses and workers |  |
| BASP 54 (2017) 105 | 704966 | 704966 | AD 91 | excluded | receipt for repayment |  |
| BGU 13 2331 | 9722 | 9722 | AD 91 | included | loan of money (with advance payment for barley and wheat) | ALD-000134 |
| SB 14 11600 | 14497 | 14497 | AD 91-96 | excluded | sale on credit / advance payment, not called a loan (terms largely lost) |  |
| SB 14 11847 | 18178 | 18178 | AD 91 | included | loan contract (beginning only) | ALD-000132 |
| SB 6 9569 | 19102 | 19102 | AD 91 | included | price of wine held as a loan (called daneion) | ALD-000133 |
| P.Fam. Tebt. 2 | 10737 | 10737 | AD 92 | excluded | deposit (paratheke), not called a loan |  |
| P.Mich. 9 568 | 12060 | 12060 | AD 92 | excluded | undertaking to pay a third party's existing debt, not a loan contract (debt not called a loan in the text) |  |
| P.Mich. 9 569 | 12061 | 12061 | AD 92 | excluded | undertaking to pay a third party's existing debt, not a loan contract (debt not called a loan in the text) |  |
| P.Michael. 9 | 21402 | 21402 | AD 92 | included | loan of money with forfeiture of house share | ALD-000135 |
| Peacock & Blue, Myos Hormos – Quseir al-Qadim 2, p. 336 | 749339 | 749339 | AD 93 | included | loan of money (chresis entokos) | ALD-000136 |
| O.Bodl. 2 1128 | 71815 | 71815 | AD 94 | excluded | tax receipt (prochreia payment) |  |
| P.Fam. Tebt. 4 | 10751 | 10751 | AD 94 | included | loan of wheat (chresis entokos) | ALD-000137 |
| P.Oxy. 2 270 | 20541 | 20541 | AD 94 | included | indemnification of a surety for a loan: Lucia alias Thaisas borrowed 3,500 drachmas from Heraclides under a loan contract (daneiou syngraphe) of the same month, on mortgage | ALD-000513 |
| P.Strasb. 5 382 | 18792 | 18792 | AD 94 | included | loan of money (chresis entokos) | ALD-000138 |
| P.Tebt. Wall 5 | 13650 | 13650 | AD 94 | excluded | receipt for repayment |  |
| P.Lond. 2 142 | 11627 | 11627 | AD 95 | included | receipt for repayment naming the earlier loan (daneion) of 1,240 drachmas with interest made through the Alexandrian grapheion, Pharmouthi 9, year 13 of Domitian | ALD-000512 |
| P.Gen. 1 24 | 11219 | 11219 | AD 96 | included | loan of money (with seed price and wheat) | ALD-000139, ALD-000469 |
| P.Mich. 21 847 | 383469 | 383469 | AD 96-97 | excluded | receipt for repayment |  |
| P.Mich. 9 571 | 12063 | 12063a | AD 96 | excluded | deposit (paratheke), not called a loan |  |
| P.Mich. 9 571 | 12063 | 12063b | AD 96-98 | excluded | receipt / withdrawal from a deposit (paratheke), not called a loan |  |
| P.Strasb. 9 826 | 13245 | 13245 | AD 96-98 | included | loan of money secured on land (very fragmentary) | ALD-000140 |
| P.Lond. 2 143 | 11628 | 11628 | AD 97 | excluded | receipt for repayment (acknowledgement of receipt of remaining 160 of 200 drachmas owed, with quitclaim) |  |
| P.Oxy. 2 274 | 20545 | 20545 | AD 97 | excluded | register of property (mentions three loan contracts securing a mortgage, without terms) |  |
| BASP 57 (2020) 27 no. 2 | 25611 | 25611 | AD 98 | included | loan of money | ALD-000152 |
| BGU 4 1065 | 9448 | 9448 | AD 98 | excluded | bank payment (diagraphe) of the price of gold bracelets made by a goldsmith; 'chresis' not a loan of money |  |
| O.Krok. 2 167 | 704452 | 704452 | AD 98-117 | excluded | request for a loan; no evidence it was made |  |
| O.Krok. 2 180 | 704465 | 704465 | AD 98-117 | included | loan of money mentioned in a letter | ALD-000154 |
| O.Krok. 2 230 | 704515 | 704515 | AD 98-117 | excluded | letter; offer to advance a price, no loan shown to be made |  |
| O.Krok. 2 286 | 704571 | 704571 | AD 98-117 | excluded | debt for the price of a jar, not a loan |  |
| O.Krok. 2 287 | 704572 | 704572 | AD 98-117 | excluded | debt for the price of a jar, not a loan |  |
| P.Brem. 69 | 19655 | 19655 | AD 98 | included | loan of money (copy of bank diagraphe) | ALD-000151 |
| P.Fam. Tebt. 6 | 10763 | 10763 | AD 98-99 | included | loan of money | ALD-000141 |
| P.IFAO 1 25 | 11496 | 11496 | AD 98-102 | included | loan of money (copy of homologia) | ALD-000142 |
| P.Lips. 2 135 | 78444 | 78444 | AD 98-99 | included | loan of money | ALD-000155 |
| P.Lond. 2 202 | 19967 | 19967 | AD 98-117 | excluded | account |  |
| P.Meyer 5 | 11959 | 11959 | AD 98-117 | included | loan of money | ALD-000143 |
| P.Münch. 3 94 | 12477 | 12477 | AD 98-102 | included | loan of money (draft/cancelled copy) | ALD-000144 |
| P.Oxy. 74 4984 | 128289 | 128289 | AD 98-100 | excluded | order to register a loan contract; no loan terms survive |  |
| P.Strasb. 3 147 | 16948 | 16948 | AD 98-117 | included | loan of money | ALD-000150 |
| P.Strasb. 6 525 | 13391 | 13391 | AD 98-117 | included | loan of money with hypallagma | ALD-000145 |
| P.Strasb. 9 807 | 13239 | 13239 | AD 98-117 | excluded | register of contracts |  |
| P.Strasb. 9 825 | 13244 | 13244 | AD 98 | excluded | too fragmentary (petition; loan relationship not clear) |  |
| P.Tebt. 2 388 | 13544 | 13544 | AD 98 | included | loan of wheat, money and lentils | ALD-000146, ALD-000462, ALD-000472 |
| P.Tebt. Pad. 1 20 | 412074 | 412074 | AD 98-117 | included | loan of money (copy from registry) | ALD-000153 |
| P.Tebt. Wall 1 | 13644 | 13644 | AD 98-138 | included | loan of money | ALD-000147 |
| PUG 2 62 | 15534 | 15534 | AD 98 | included | loan of money on mortgage | ALD-000148 |
| SB 10 10274 | 16751 | 16751 | AD 98 | included | advance loan (prochreia) in a land lease | ALD-000149 |
| SB 18 13234 | 8681 | 8681 | AD 98-99 | included | loan of money | ALD-000156 |
| P.Brem. 68 | 19654 | 19654a | AD 99 | included | loan contract on mortgage (with bank diagraphe of the same loan) | ALD-000159 |
| P.Brem. 68 | 19654 | 19654b | AD 99 | excluded | bank diagraphe for the same loan on the same papyrus (P.Brem. 68); recorded under HGV 19654a |  |
| P.Dub. 6 | 21604 | 21604 | AD 99 | included | loan in a letter: land mortgaged under a loan contract (daneiou syngraphe) through the mnemoneion this month | ALD-000514 |
| P.Hever 66 | 24328 | 24328 | AD 99-109 | included | loan contract with hypothec (fragmentary) | ALD-000160 |
| P.Oxy. 46 3274 | 15740 | 15740 | AD 99-117 | excluded | too fragmentary: petition on paying a brother's debts to creditors, particulars lost |  |
| P.Princ. 2 32 | 17358 | 17358 | AD 99-100 | included | loan of money and wheat | ALD-000158, ALD-000473 |
| P.Ryl. 2 173 | 12955 | 12955 | AD 99 | included | loan of money | ALD-000157 |
| P.Fouad 1 49 | 11192 | 11192 | AD 100 | included | loan contract of money and barley (crossed out) | ALD-000516, ALD-000517 |
| P.Strasb. 3 151 | 13173 | 13173 | AD 100 | excluded | sale of a house |  |
| AnalPap 28 (2016) 31 no. 1 | 704663 | 704663 | AD 101-200 | excluded | account/register of payments (entries 'for use' within an account) |  |
| BGU 1 185 | 28232 | 28232 | AD 101-200 | excluded | list of house owners |  |
| BGU 1 238 | 28238 | 28238 | AD 101-300 | included | loan acknowledgement (cheirographon, chresis) | ALD-000173 |
| BGU 11 2046 | 26946 | 26946 | AD 101-200 | included | loan contract (end with borrower's subscription) | ALD-000165 |
| BGU 11 2052 | 26948 | 26948 | AD 101-200 | excluded | sale (cession) of catoecic land |  |
| BGU 11 2055 | 26950 | 26950 | AD 101-200 | excluded | sale (cession) of catoecic land |  |
| BGU 2 567 | 28181 | 28181 | AD 101-200 | excluded | register of grapheion fees for contracts |  |
| BGU 3 813 | 28091 | 28091 | AD 101-200 | excluded | too fragmentary; concerns settlement/repayment of earlier loans (debt remainder), terms of no loan survive |  |
| BGU 3 893 | 28105 | 28105 | AD 101-300 | excluded | court proceedings |  |
| BGU 7 1643 | 27599 | 27599 | AD 101-200 | excluded | sale of part of a house |  |
| BGU 7 1651 | 27601 | 27601 | AD 101-200 | included | loan contract with mortgage (fragmentary) | ALD-000169 |
| CPR 1 119 | 29052 | 29052 | AD 101-200 | excluded | sale contract (remaining price with interest), no loan |  |
| CPR 7 8 | 26662 | 26662 | AD 101-300 | excluded | register of reed cultivation |  |
| CdE 86 (2011) 249 no. 5 | 140733 | 140733 | AD 101-150 | excluded | receipt for repayment (release for 78 drachmas with interest) |  |
| ChLA 5 294 | 69895 | 69895 | AD 101-200 | excluded | too fragmentary (Latin chirograph; loan not shown in surviving text) |  |
| O.Amst. 85 | 70432 | 70432 | AD 101-200 | excluded | too fragmentary (uncertain text mentioning 40 drachmas and interest) |  |
| O.Bodl. 2 1982 | 72658 | 72658 | AD 101-300 | excluded | receipt for repayment |  |
| O.Brux. 20 | 29912 | 29912 | AD 101-200 | excluded | wine account (entry 'for use' to a brother), not a loan record |  |
| O.Narm. 1 90 | 29619 | 29619 | AD 101-300 | excluded | too fragmentary (draft petition mentioning a creditor; no loan details) |  |
| O.Tebt. Pad. 52 | 45197 | 45197 | AD 101-300 | excluded | tax receipt (beer tax), no loan |  |
| P.Aberd. 20 | 28276 | 28276 | AD 101-200 | excluded | official undertaking (transport), no loan |  |
| P.Aberd. 69 | 28299 | 28299 | AD 101-200 | excluded | letter too fragmentary to show a loan (isolated χρῆσις) |  |
| P.Diog. 17 | 26616 | 26616 | AD 101-300 | included | loan in a petition: homologia of chresis of Julia Apollonarion, secured by mortgage, claimed by the former high priest | ALD-000518 |
| P.Dura 21 | 27074 | 27074 | AD 101-150 | included | antichretic loan (services in lieu of interest) | ALD-000167 |
| P.Erl. 60 | 28576 | 28576 | AD 101-200 | excluded | too fragmentary (mortgage of part of a house; loan not shown in surviving text) |  |
| P.Erl. 62 | 28578 | 28578 | AD 101-200 | included | loan contract with mortgage (fragment) | ALD-000175 |
| P.Flor. 3 316 | 27868 | 27868 | AD 101-200 | included | loan contract (money) | ALD-000172 |
| P.Flor. 3 385 | 27872 | 27872 | AD 101-300 | excluded | list of landed property, too fragmentary to show a loan |  |
| P.Gen. 1 2 | 32141 | 32141 | AD 101-300 | excluded | payment order for interest and principal of a debt not called a loan |  |
| P.Gron. 11 | 29209 | 29209 | AD 101-200 | excluded | private account (antichresis entries) |  |
| P.Hamb. 1 73 | 28697 | 28697 | AD 101-200 | excluded | testament; χρῆσις = usufruct, no loan |  |
| P.Hamb. 4 270 | 78286 | 78286 | AD 101-300 | excluded | application for a guardian (tutor ad actum) for an intended loan; not a loan contract |  |
| P.Harr. 1 141 | 28715 | 28715 | AD 101-200 | excluded | discharge of a loan |  |
| P.Haun. 2 22 | 26600 | 26600 | AD 101-300 | excluded | letter instructing an advance (prochresis) not shown to be made |  |
| P.IFAO 1 28 | 28735 | 28735 | AD 101-150 | included | loan acknowledgement (cheirographon) | ALD-000176 |
| P.Iand. 4 54 | 28203 | 28203 | AD 101-200 | excluded | sale contract |  |
| P.Kron. 22 | 28757 | 28757 | AD 101-200 | included | loan contract (homologia, chresis entokos) | ALD-000177 |
| P.Kron. 23 | 28758 | 28758 | AD 101-200 | excluded | receipt for repayment |  |
| P.Laur. 1 8 | 28761 | 28761 | AD 101-125 | excluded | eiromenon (register of contracts in abstract) |  |
| P.Lond. 2 442 | 28049 | 28049 | AD 101-200 | excluded | no text available |  |
| P.Louvre 1 17 | 29531 | 29531 | AD 101-200 | excluded | deposit (paratheke) not called a loan in the text |  |
| P.Mert. 3 109 | 28787 | 28787 | AD 101-200 | included | loan contract secured on land (fragment) | ALD-000178 |
| P.Mert. 3 111 | 28788 | 28788 | AD 101-200 | excluded | receipt for repayment |  |
| P.Mil. Vogl. 1 11 | 78532 | 78532 | AD 101-150 | excluded | private letter about books, no loan |  |
| P.Mil. Vogl. 3 146 | 28846 | 28846 | AD 101-200 | excluded | receipt for repayment |  |
| P.Münch. 3 68 | 28887 | 28887 | AD 101-200 | included | settlement fragment refers to the loan owed by [...] to Didymus | ALD-000519 |
| P.Münch. 3 85 | 28889 | 28889 | AD 101-150 | included | cession: Diogenes' debt to the lender (δανιστής) Kalletis to be paid from the ceded property | ALD-000520 |
| P.NYU 2 29 | 26671 | 26671 | AD 101-125 | included | loan contract with mortgage | ALD-000163 |
| P.Oslo 3 133 | 28912 | 28912 | AD 101-200 | excluded | sale of a crop with advance payment, not called a loan |  |
| P.Oxy. 3 510 | 20641 | 20641 | AD 101 | excluded | receipt for repayment and release of mortgage |  |
| P.Oxy. 3 526 | 28366 | 28366 | AD 101-150 | excluded | no loan (private letter with a saying about interest) |  |
| P.Oxy. 31 2583 | 26936 | 26936 | AD 101-200 | excluded | division of inherited property; advance (prochresis) for common farming not called a loan |  |
| P.Oxy. 50 3589 | 26536 | 26536 | AD 101-200 | included | loan (prochresis) of money within a land lease | ALD-000161 |
| P.Oxy. 58 3917 | 27301 | 27301 | AD 101-125 | excluded | no loan mentioned (letter about a court hearing concerning a mortgage) |  |
| P.Oxy. 8 1125 | 28982 | 28982 | AD 101-200 | included | loan (prochresis) in a land lease | ALD-000179 |
| P.Palau Rib. 9 | 29460 | 29460 | AD 101-200 | excluded | receipt for repayment |  |
| P.Ross. Georg. 2 35 | 12892 | 12892 | AD 101-200 | excluded | register of bank diagraphai |  |
| P.Ross. Georg. 5 4 | 27205 | 27205 | AD 101-200 | excluded | letter: offer of a future advance, not a loan |  |
| P.Ross. Georg. 5 54 | 27211 | 27211 | AD 101-200 | excluded | auction list |  |
| P.Ryl. 2 334 | 27929 | 27929 | AD 101-200 | excluded | too fragmentary (only the verso docket 'loan of Paopis son of Harpagathes' survives) |  |
| P.Ryl. 2 335 | 27930 | 27930 | AD 101-125 | excluded | too fragmentary |  |
| P.Ryl. 2 336 | 27931 | 27931 | AD 101-200 | excluded | abstracts of loans (register); no text available |  |
| P.Select 22 | 26922 | 26922 | AD 101-200 | excluded | contract of a secretary with tax collectors; prochresis = advance of payments, not a loan |  |
| P.Sijp. 49 | 110214 | 110214 | AD 101-200 | excluded | receipt for repayment (with cancellation of the bank cheirographon) |  |
| P.Strasb. 1 56 | 27754 | 27754 | AD 101-300 | included | report in a property dispute: house mortgaged for an advance loan (prochreia) of 1500 drachmas | ALD-000521 |
| P.Strasb. 4 231 | 26979 | 26979 | AD 101-150 | included | loan of wheat with interest (homologia) | ALD-000166 |
| P.Strasb. 5 344 | 27778 | 27778 | AD 101-150 | included | loan contract | ALD-000170 |
| P.Strasb. 5 374 | 27785 | 27785 | AD 101-200 | included | loan of money and wheat (cheirographon) | ALD-000171, ALD-000457 |
| P.Strasb. 8 746 | 26835 | 26835 | AD 101-200 | included | loan contract on security (fragmentary) | ALD-000164 |
| P.Strasb. 9 811 | 26520 | 26520 | AD 101-150 | excluded | sale of real estate (fragment) |  |
| P.Strasb. 9 854 | 26525 | 26525 | AD 101-300 | excluded | agricultural account |  |
| P.Tebt. 2 435 | 28429 | 28429 | AD 101-225 | included | money loan in a petition | ALD-000174 |
| P.Tebt. Wall 10 | 26611 | 26611 | AD 101-125 | excluded | sale of real estate |  |
| P.Vars. 38 | 27539 | 27539 | AD 101-300 | excluded | no text available |  |
| P.Wisc. 1 1 | 26917 | 26917 | AD 101-125 | excluded | court proceedings |  |
| P.Wisc. 2 49 | 26683 | 26683 | AD 101-300 | excluded | too fragmentary to show a loan |  |
| PSI 12 1259 | 27174 | 27174 | AD 101-225 | excluded | private letter without a loan (chresei = use) |  |
| PSI 13 1336 | 27126 | 27126 | AD 101-300 | excluded | private letter without a loan |  |
| PSI 14 1410 | 27052 | 27052 | AD 101-200 | excluded | account of receipts and expenses |  |
| PSI 17 1689 | 786107 | 786107 | AD 101-125 | included | petition: the petitioners' father borrowed (edaneisato) a money capital from Capitolinus and paid threefold interest | ALD-000522 |
| PSI 3 221 | 28068 | 28068 | AD 101-200 | excluded | register of contracts (lease abstract with seed prochreia) |  |
| PSI 4 281 | 27850 | 27850 | AD 101-200 | excluded | court proceedings (copied precedents; Diogenes' claimed loan to Philumene is in a court record) |  |
| PSI 4 281 | 27851 | 27851 | AD 101-200 | excluded | part of the same papyrus without a loan (account) |  |
| PSI 4 288 | 27852 | 27852 | AD 101-200 | excluded | too fragmentary: petition mentions loans (δανείων) but parties and number not recoverable |  |
| PSI 7 801 | 27238 | 27238 | AD 101-200 | excluded | list (private memoranda of sums and repayment dates) |  |
| SB 1 5166 | 29416 | 29416 | AD 101-300 | excluded | register/abstracts of contracts |  |
| SB 14 12023 | 26578 | 26578 | AD 101-200 | included | loan of wheat | ALD-000162 |
| SB 16 12421 | 26726 | 26726 | AD 101-200 | excluded | accounts (pawnbroker's ledger) |  |
| SB 18 13165 | 27665 | 27665 | AD 101-200 | excluded | receipt for repayment |  |
| SB 18 13742 | 27674 | 27674 | AD 101-150 | excluded | register of contracts (eiromenon of bank diagraphai) |  |
| SB 18 13766 | 27713 | 27713 | AD 101-300 | excluded | account of expenses (δανισ- only in an account entry) |  |
| SB 22 15385 | 26610 | 26610 | AD 101-125 | excluded | receipt for partial repayment (8 of 100 drachmas owed) |  |
| SB 24 15926 | 45370 | 45370 | AD 101-300 | excluded | lease fragment; prochreia mentioned but not shown as a loan, too fragmentary |  |
| SB 26 16385 | 40829 | 40829 | AD 101-300 | excluded | memorandum on inheritance, no loan |  |
| SB 26 16541 | 44740 | 44740a | AD 101-200 | excluded | sale contract fragment (ἀνεπιδάνειστον clause only) |  |
| SB 30 17689 | 27281 | 27281 | AD 101-200 | included | loan acknowledgement (cheirographon) of a cavalryman | ALD-000168 |
| SB 6 9025 | 27270 | 27270 | AD 101-200 | excluded | business letter: request for an advance (prochreia) not shown to be made |  |
| SPP 20 13 | 27758 | 27758 | AD 101-200 | excluded | register/abstracts of contracts (bibliophylakes notice) |  |
| SPP 22 24 | 27632 | 27632 | AD 101-200 | excluded | too fragmentary (only a repayment clause survives; no loan wording or terms) |  |
| SPP 22 82 | 27644 | 27644 | AD 101-200 | excluded | too fragmentary (surviving subscription acknowledges receipt, apechō, of 40 drachmas with no further claim; a loan is not shown) |  |
| T.Mom. Louvre 737 | 29398 | 29398 | AD 101-300 | excluded | mummy label, no loan |  |
| ZPE 183 (2012) 198 | 28459 | 28459 | AD 101-200 | excluded | donatio mortis causa; χρῆσις = use, no loan |  |
| BGU 1 44 | 9091 | 9091 | AD 102 | excluded | receipt for repayment |  |
| BGU 15 2473 | 9743 | 9743 | AD 102 | excluded | too fragmentary: official notification (via the archidikastes) of payment due under loan contracts secured by mesiteia and hypotheke; parties and amounts lost |  |
| BGU 2 415 | 20157 | 20157 | AD 102-106 | excluded | receipt for repayment (copy of bank diagraphe; repayment of 440 drachmas) |  |
| P.Oxy. 22 2342 | 22214 | 22214 | AD 102 | excluded | petition about a deceased partner's estate and wine trade debts; no transaction called a loan |  |
| P.Oxy. 3 508 | 20640 | 20640 | AD 102 | included | contract of surety for two earlier mortgage loans (daneia) by Heraclas; one row per loan | ALD-000515, ALD-000523 |
| P.Sarap. 13 | 17027 | 17027 | AD 102 | included | loan acknowledgement (chresis entokos) | ALD-000180 |
| SB 14 11284 | 18114 | 18114 | AD 102-116 | included | copy of a loan contract | ALD-000181 |
| SPP 4 p. 114 | 20693 | 20693 | AD 102 | included | supplementary property declaration: property devolved to the declarant's wife from an overdue loan (ekprothesmon daneion) contracted by Pauseiris and his wife Theodous through the Oxyrhynchus record office | ALD-000524 |
| AnalPap 30 (2018) 41 | 19310 | 19310 | AD 103 | included | cheirographon: interest-bearing loan of 8 artabas of wheat | ALD-000525 |
| BGU 1 281 | 9027 | 9027 | AD 103-116 | excluded | receipt for repayment (by heirs of the deceased borrower) |  |
| CPR 1 170 | 9828 | 9828 | AD 103-117 | excluded | sale (cession) of catoecic land |  |
| P.Athen. 22 | 10128 | 10128 | AD 103-122 | included | copy of a loan contract | ALD-000217 |
| P.Flor. 1 81 | 23582 | 23582 | AD 103 | included | additional loan of money on mortgage | ALD-000186, ALD-000456, ALD-000467 |
| P.Mert. 1 14 | 21294 | 21294 | AD 103 | included | loan of wheat (cheirographon) | ALD-000185 |
| P.Mil. Vogl. 2 108 | 12354 | 12354 | AD 103 | included | loan of money (cheirographon) | ALD-000182 |
| P.Münch. 3 95 | 12478 | 12478 | AD 103-115 | included | loan of money with mesiteia (fragment) | ALD-000183 |
| P.NYU 2 26 | 121973 | 121973 | AD 103 | excluded | receipt for (part-)repayment |  |
| P.Oxy. 3 511 | 20642 | 20642 | AD 103 | included | loan contract (pilot) | ALD-000011 |
| P.Sarap. 14 | 17028 | 17028 | AD 103 | included | loan of money (cheirographon) | ALD-000184 |
| P.Soterichos 22 | 13137 | 13137 | AD 103 | excluded | receipt for repayment |  |
| P.Strasb. 6 582 | 13405 | 13405 | AD 103 | excluded | receipt for repayment |  |
| P.Sarap. 15 | 17029 | 17029 | AD 104 | included | loan of money as advance on harvest wages (called chrēsis) | ALD-000187 |
| SB 10 10539 | 14316 | 14316 | AD 104 | excluded | receipt for repayment |  |
| BGU 11 2042 | 9576 | 9576 | AD 105 | excluded | deposit (parathēkē), not called a loan |  |
| P.Lond. 2 172 | 19956 | 19956 | AD 105 | excluded | receipt for partial repayment (of a deposit, parathēkē) |  |
| P.Mich. 9 570 | 12062 | 12062 | AD 105-106 | included | antichretic loan of money (habitation in lieu of interest); copy from a grapheion register | ALD-000188 |
| P.Sarap. 16 | 17030 | 17030 | AD 105-106 | included | loan of wheat (cheirographon) | ALD-000190 |
| SPP 22 76 | 15133 | 15133 | AD 105 | included | loan of money by bank diagraphe (copy) | ALD-000189 |
| BASP 59 (2022) 86 | 397807 | 397807 | AD 106 | included | loan of money (contract later cancelled, with repayment receipt) | ALD-000191 |
| BGU 11 2050 | 9581 | 9581 | AD 106 | excluded | sale (cession) of catoecic land |  |
| BGU 3 856 | 9384 | 9384 | AD 106 | excluded | deposit (parathēkē), not called a loan |  |
| CPR 1 188 | 9836 | 9836 | AD 106-107 | excluded | cession of catoecic land |  |
| P.Kron. 7 | 11592 | 11592 | AD 106 | included | loan of money by bank diagraphe (copy) | ALD-000192 |
| P.Soterichos 23 | 13138 | 13138 | AD 106 | excluded | receipt for repayment |  |
| P.Fam. Tebt. 9 | 10766 | 10766 | AD 107 | excluded | receipt for repayment |  |
| P.IFAO 3 13 | 11507 | 11507 | AD 107 | excluded | receipt for repayment |  |
| P.Fam. Tebt. 11 | 10728 | 10728a | AD 108-109 | included | loan of money on mesiteia (cheirographon) | ALD-000193 |
| O.Krok. 1 41 | 88630 | 88630 | AD 109 | excluded | official circulars, no loan |  |
| P.Kron. 8 | 11593 | 11593 | AD 109 | included | loan of money | ALD-000194 |
| P.Soterichos 25 | 13140 | 13140 | AD 109 | excluded | receipt for repayment |  |
| P.Strasb. 8 764 | 13438 | 13438 | AD 109-110 | excluded | no text available |  |
| SB 16 12611 | 14625 | 14625 | AD 109-112 | included | copy of a loan contract | ALD-000195 |
| SPP 4 pp. 116-117 | 14981 | 14981 | AD 109-110 | included | loan of money | ALD-000196 |
| CPR 1 28 | 9858 | 9858 | AD 110 | excluded | copy of a marriage contract, no loan |  |
| O.Claud. 1 172 | 24180 | 24180 | AD 110-120 | excluded | no loan survives (unspecified debt in a letter) |  |
| O.Claud. 1 173 | 24181 | 24181 | AD 110-120 | excluded | no loan survives (letter about sending money) |  |
| O.Did. 131 | 144697 | 144697 | AD 110-115 | excluded | too fragmentary |  |
| O.Krok. 2 268 | 704553 | 704553 | AD 110-117 | excluded | private letter, no loan |  |
| P.Lond. 3 837 | 22689 | 22689 | AD 110-111 | excluded | no text available |  |
| P.Yadin 1 5 | 23488 | 23488 | AD 110 | excluded | deposit (parathēkē) not called a loan |  |
| BASP 59 (2022) 70 no. 2 | 13600 | 13600 | AD 111 | excluded | sublease of royal land (crossed out); other debts mentioned only as owed under other (restored) loans, no terms |  |
| P.Fouad 1 57 | 11195 | 11195 | AD 111 | excluded | receipt for repayment |  |
| P.Kron. 9 | 11594 | 11594 | AD 111 | included | loan of 20 artabas of wheat and 20 artabas of barley (one row per commodity) | ALD-000526, ALD-000527 |
| P.Oslo 3 118 | 12568 | 12568 | AD 111-112 | excluded | tax receipt (loan only referred to) |  |
| PSI 8 929 | 13820 | 13820 | AD 111 | included | loan in kind | ALD-000197 |
| SPP 20 3 | 15017 | 15017 | AD 111 | included | acknowledgement of consolidated money debts with request for a new term | ALD-000198 |
| P.Fam. Tebt. 11 | 10728 | 10728b | AD 112 | excluded | deposit (parathēkē) not called a loan |  |
| P.Ryl. 2 174 | 12956 | 12956 | AD 112 | excluded | receipt for repayment |  |
| PSI 10 1153 | 13860 | 13860 | AD 112-113 | excluded | sale of a vineyard |  |
| BGU 3 857 | 20068 | 20068 | AD 113 | included | loan of money (cheirographon) | ALD-000200, ALD-000465 |
| P.Alex. 7 | 10072 | 10072 | AD 113 | included | loan of money | ALD-000199 |
| P.Alex. Giss. 48 | 27570 | 27570 | AD 113-120 | excluded | no loan survives |  |
| SB 26 16652 | 11763 | 11763 | AD 113 | excluded | account of city water-supply officials |  |
| P.Sarap. 17 | 17033 | 17033 | AD 114 | included | loan of money (cheirographon) | ALD-000201 |
| BGU 1 101 | 8876 | 8876 | AD 115 | included | antichretic loan (use of land in lieu of interest) | ALD-000202 |
| O.Berl. 33 | 24425 | 24425 | AD 116 | excluded | receipt for a prochreia payment (tax), no loan |  |
| P.Fam. Tebt. 16 | 10733 | 10733 | AD 116 | included | copy of a loan cheirographon; a second loan mentioned in it | ALD-000203, ALD-000204 |
| P.Kron. 15 | 11535 | 11535 | AD 116-136 | included | loan of wheat (amount lost) from Mysthus to Harphaesis | ALD-000528 |
| P.Oxy. 3 489 | 20625 | 20625 | AD 116-117 | excluded | will, no loan |  |
| P.Wisc. 2 54 | 13718 | 13718 | AD 116 | excluded | declaration to the property record office (hypallage of a slave for an existing debt); no loan terms |  |
| SB 16 12954 | 14684 | 14684 | AD 116 | included | loan of money | ALD-000205 |
| ZPE 194 (2015) 194 no. 1 | 397805 | 397805 | AD 116 | excluded | receipt for repayment |  |
| BGU 11 2062 | 9585 | 9585 | AD 117 | included | money loan mentioned in a petition | ALD-000209 |
| C.Pap.Gr. 1 29 | 13418 | 13418c | AD 117-138 | excluded | no loan (nursing contract) |  |
| CPR 1 223 | 9848 | 9848 | AD 117-137 | excluded | sale of house shares; ἀνεπιδάνιστα formula only, cheirograph mentioned not called a loan |  |
| O.Krok. 2 237 | 704522 | 704522 | AD 117-130 | excluded | private letter; χρῄζω = need, no loan |  |
| O.Krok. 2 238 | 704523 | 704523 | AD 117-130 | excluded | private letter; χρῄζω = need, no loan |  |
| O.Krok. 2 248 | 704533 | 704533 | AD 117-130 | excluded | private letter; χρῄζω = need, no loan |  |
| O.Krok. 2 262 | 704547 | 704547 | AD 117-130 | excluded | private letter; χρῄζω = need, no loan |  |
| O.Krok. 2 266 | 704551 | 704551 | AD 117-130 | excluded | private letter; χρῄζω = need, no loan |  |
| P.Alex. Giss. 35 | 18235 | 18235 | AD 117-118 | excluded | list of names and land, no loan |  |
| P.Bas. 1 7 | 10147 | 10147 | AD 117-138 | included | loan contract with mortgage | ALD-000206 |
| P.Harr. 1 85 | 21070 | 21070 | AD 117 | included | loan contract (cheirographon) paid through a bank | ALD-000208 |
| P.IFAO 3 54 | 21190 | 21190 | AD 117-161 | excluded | instruction fragment mentioning a creditor (daneistes) seizing property; too fragmentary to show a loan |  |
| P.Kron. 21 | 11545 | 11545 | AD 117 | excluded | receipt for repayment |  |
| P.Mich. 11 605 | 12282 | 12282 | AD 117 | included | antichretic loan (habitation in lieu of interest) | ALD-000207 |
| P.Rein. 1 44 | 23476 | 23476 | AD 117 | excluded | court proceedings |  |
| P.Sarap. 18 | 17034 | 17034 | AD 117 | excluded | too fragmentary to show it is a loan (edition: advance of wheat?) |  |
| P.Strasb. 7 605 | 13411 | 13411 | AD 117-138 | excluded | testamentary document, no loan |  |
| P.Strasb. 7 646 | 13418 | 13418a | AD 117-138 | excluded | abstracts of contracts |  |
| P.Tebt. Wall 6 | 13651 | 13651 | AD 117-138 | excluded | receipt for repayment |  |
| SB 16 12225 | 16215 | 16215 | AD 117-138 | excluded | too fragmentary |  |
| P.Alex. inv. 518 | 19562 | 19562 | AD 118 | excluded | too fragmentary |  |
| P.Brem. 43 | 19627 | 19627 | AD 118-119 | excluded | accounts of taxes in kind; προχρεία of komogrammateus in accounts, no loan |  |
| P.Fam. Tebt. 19 | 10736 | 10736 | AD 118 | excluded | no text available |  |
| P.Oslo 3 131 | 12570 | 12570 | AD 118 | included | loan contract (homologia) | ALD-000210 |
| P.Oxy. 1 105 | 20764 | 20764 | AD 118-138 | excluded | will; χρῆσις = usufruct, no loan |  |
| P.Sarap. 19 | 17035 | 17035 | AD 118 | included | loan contract (cheirographon) | ALD-000211 |
| SPP 22 46 | 15115 | 15115 | AD 118-151 | excluded | receipt for repayment |  |
| P.Oxy. 12 1547 | 21913 | 21913 | AD 119 | excluded | census return; the loan contract (δανείου συγγραφή) is entirely restored by the editor, too fragmentary to show a loan |  |
| P.Sijp. 43 | 20655 | 20655 | AD 119-120 | excluded | will; permission to borrow, no loan made |  |
| BGU 1 69 | 9113 | 9113 | AD 120 | included | loan contract (cheirographon) between soldiers | ALD-000214 |
| P.Hamb. 1 32 | 11381 | 11381 | AD 120 | included | acknowledgement of debt to be repaid (cheirographon; novation of price of wheat) | ALD-000212 |
| P.Mich. 3 188 | 11991 | 11991 | AD 120 | included | antichretic loan (habitation in lieu of interest) | ALD-000213 |
| SB 20 14338 | 23720 | 23720 | AD 120 | included | advance (πρόχρησις) of wheat in a land lease, repaid in two instalments | ALD-000529 |
| P.Athen. 29 | 10134 | 10134 | AD 121 | excluded | receipt for repayment |  |
| P.Dura 20 | 17218 | 17218 | AD 121 | included | antichretic paramone loan | ALD-000216 |
| P.Kron. 11 | 11531 | 11531 | AD 121 | excluded | receipt for repayment |  |
| P.Sarap. 20 | 17036 | 17036 | AD 121 | included | advance (προχρεία) of money repaid by 31 days of work | ALD-000530 |
| P.Strasb. 5 437 | 13334 | 13334 | AD 121 | included | loan contract with security | ALD-000215 |
| P.Fam. Tebt. 22 | 10740 | 10740 | AD 122 | included | loan contract (homologia), cancelled by crossing out | ALD-000218 |
| P.Ups. Frid 3 | 15678 | 15678a | AD 122 | included | loan contract (cheirographon), later crossed out with receipt of repayment | ALD-000219 |
| SB 12 10781 | 16063 | 16063 | AD 122-123 | included | loan of money mentioned in a petition | ALD-000220 |
| O.Bankes 1 | 699544 | 699544 | AD 123 | included | loan on mortgage (brief record on ostracon) | ALD-000223 |
| P.Fam. Tebt. 23 | 10741 | 10741 | AD 123 | excluded | sale (cession) of catoecic land; ἀνεπιδάνιστα formula only |  |
| P.Louvre 2 109 | 88776 | 88776 | AD 123-137 | excluded | cession of catoecic land; ἀνεπιδάνιστα formula only |  |
| P.Mich. 3 189 | 11992 | 11992 | AD 123 | included | antichretic loan contract (loan and lease of dwelling) | ALD-000221 |
| P.Sarap. 48 | 17065 | 17065 | AD 123 | excluded | no loan survives (cheirographon undertaking to deliver wheat rent on leased land) |  |
| P.Tebt. 2 312 | 13472 | 13472 | AD 123-124 | included | loan contract (homologia), cancelled by crossing out | ALD-000222 |
| P.Ups. Frid 3 | 15678 | 15678b | AD 123 | excluded | receipt for repayment (the loan itself is recorded under HGV 15678a) |  |
| SB 16 12610 | 14624 | 14624 | AD 123 | excluded | receipt for repayment (instalments) |  |
| SB 24 16202 | 79376 | 79376 | AD 123 | excluded | receipt for repayment; the loan wording (ἐδάνεισεν) is restored and the amount incomplete |  |
| P.Lond. 2 298 | 11680 | 11680 | AD 124 | excluded | deposit (parathēkē), not called a loan |  |
| P.Oxy. Hels. 18 | 15804 | 15804 | AD 124 | excluded | court proceedings (prochreia owed) |  |
| P.Yadin 1 11 | 23489 | 23489 | AD 124 | included | loan contract on hypothec | ALD-000224 |
| CPR 6 1 | 9871 | 9871 | AD 125 | included | will lists among debts owed to the testator a loan of his mother Isarous of 1,000 drachmas made in trust in the name of his brother Theon | ALD-000531 |
| P.Fouad 2 95 | 873626 | 873626 | AD 125-126 | excluded | no text available |  |
| P.Gen. 1 26 | 11221 | 11221 | AD 125 | excluded | receipt for repayment |  |
| P.Gen. 2 102 | 11250 | 11250 | AD 125-129 | excluded | cancellation/discharge of a loan |  |
| P.Heid. 10 448 | 381907 | 381907 | AD 125-126 | included | loan contract (cheirographon), annulled after repayment | ALD-000226 |
| P.Mil. Vogl. 6 267 | 12432 | 12432 | AD 125-126 | included | land lease with interest-free advance (προχρεία) of 50 drachmas for farm work | ALD-000532 |
| P.Oxy. 50 3557 | 15381 | 15381 | AD 125-126 | included | loan of money (debt under written security) mentioned in a petition for execution | ALD-000225 |
| P.Sarap. 51 | 17068 | 17068 | AD 125 | included | harvest contract with advance (προχρεία) of 40 drachmas to be repaid | ALD-000533 |
| O.Claud. 2 243 | 29663 | 29663 | AD 126-175 | excluded | private letter; προχρεία = advance payment for goods, no loan |  |
| O.Claud. 2 266 | 29686 | 29686 | AD 126-175 | included | loan of money mentioned in a private letter | ALD-000229 |
| P.Berl.Monte 9 | 869384 | 869384 | AD 126-175 | excluded | deposit (parathēkē), not called a loan (petition for execution) |  |
| P.Corn. 7 | 10608 | 10608 | AD 126 | excluded | abstracts of contracts |  |
| P.Fouad 1 51 | 11193 | 11193 | AD 126 | included | copy of a loan contract (homologia) | ALD-000227 |
| P.Princ. 2 33 | 17359 | 17359 | AD 126 | included | loan of wheat (cheirographon) | ALD-000228 |
| SB 18 13167 | 27666 | 27666 | AD 126-175 | included | maritime loan (Muziris papyrus): borrower's undertakings under the loan contracts made at Muziris; amount lost | ALD-000534 |
| ZPE 197 (2016) 205 | 697599 | 697599 | AD 126-200 | included | loan contract (money; beginning lost) | ALD-000230 |
| ZPE 214 (2020) 232 | 20683 | 20683 | AD 126 | excluded | will; χρῆσις = usufruct, no loan |  |
| P.Mil. Vogl. 1 25 | 12345 | 12345 | AD 127 | excluded | court proceedings (deposit, parathēkē) |  |
| P.Mil. Vogl. 2 104 | 12350 | 12350 | AD 127 | included | advance loan (prochreia) in a land-lease offer | ALD-000231 |
| SB 20 14635 | 23777 | 23777 | AD 127 | included | money loan mentioned in a petition | ALD-000232 |
| SPP 22 4 | 18239 | 18239 | AD 127-128 | included | bank order (diagraphe) paying out an interest-bearing loan (χρῆσις ἔντοκος) of 520 drachmas; col. 2 is payment of a price | ALD-000535 |
| BGU 1 339 | 9063 | 9063 | AD 128 | included | loan contract (homologia), antichretic on default | ALD-000234, ALD-000479 |
| P.Amh. 2 112 | 10095 | 10095 | AD 128 | excluded | receipt for repayment |  |
| P.Batav. 9 | 11871 | 11871 | AD 128 | excluded | surety for a debt owed for taxes, not a loan |  |
| P.Flor. 1 72 | 23577 | 23577 | AD 128-129 | included | loan contract (cheirographon) | ALD-000233, ALD-000477 |
| P.Mil. Vogl. 1 26 | 12346 | 12346 | AD 128 | excluded | cession of catoecic land; χρήσεις = uses, no loan |  |
| P.Mil. Vogl. 2 73 | 28840 | 28840 | AD 128-163 | excluded | petition about an inheritance; only says the deceased woman used to lend on pledges (no specific loan) |  |
| P.Sarap. 79 | 17137 | 17137 | AD 128 | excluded | account of receipts and expenses (entry 'for a loan' to a woman is an account item, not a loan record) |  |
| P.Yadin 1 17 | 23497 | 23497 | AD 128 | excluded | deposit (paratheke), not called a loan |  |
| SB 22 15386 | 43192 | 43192 | AD 128-135 | excluded | tax receipt |  |
| BGU 13 2342 | 9728 | 9728 | AD 129 | included | bank diagraphe of a loan | ALD-000235 |
| P.Oxy. 36 2774 | 16565 | 16565 | AD 129 | included | loan contract (pilot) | ALD-000012 |
| P.Oxy. 7 1024 | 20323 | 20323 | AD 129 | excluded | state seed-grain order |  |
| SB 14 12105 | 14544 | 14544 | AD 129 | excluded | deposit (paratheke), not called a loan; text cancelled (crossed out) |  |
| P.Mert. 2 67 | 11916 | 11916 | AD 130 | excluded | deposit (paratheke), not called a loan |  |
| P.Poethke 2 4 | 12989 | 12989 | AD 130 | excluded | too fragmentary (loan clause lost; only parties and mutual suretyship survive) |  |
| P.Ross. Georg. 2 36 | 41427 | 41427 | AD 130-150 | excluded | register of bank contracts |  |
| P.Ryl. 2 287 | 24348 | 24348 | AD 130 | excluded | no text available |  |
| SB 10 10538 | 14315 | 14315 | AD 130 | included | loan contract (homologia) | ALD-000237 |
| SB 14 11934 | 14533 | 14533 | AD 130 | excluded | receipt for repayment |  |
| BGU 1 70 | 9115 | 9115 | AD 131 | included | loan contract (bank diagraphe) | ALD-000242 |
| P.Athen. 21 | 10127 | 10127 | AD 131 | included | loan contract (homologia) with security on a house share | ALD-000238, ALD-000449 |
| P.Lond. 3 1177 | 29258 | 29258 | AD 131-132 | excluded | account (prochreia mentioned as an account item) |  |
| P.Mich. 9 572 | 12064 | 12064 | AD 131 | included | acknowledgement of grain received, to be repaid | ALD-000239 |
| P.Oxy. 1 68 | 20728 | 20728 | AD 131 | included | counter-statement to Theon's claim for an old loan (daneion, money principal) to Sarapion and his brother Dionysius; also Theon was Sarapion's lender (danistes) of other principal sums, repaid by Dionysius; both loans made c. 18 years or more before AD 131 | ALD-000536, ALD-000537 |
| P.Oxy. 3 486 | 20622 | 20622a | AD 131 | included | petition: land sold by Mnesitheus was held on mortgage by his creditors (danistai), who were paid from the price; earlier mortgage loan, lender and amount not stated | ALD-000538 |
| P.Tebt. Wall 4 | 13649 | 13649 | AD 131-150 | excluded | receipt for repayment |  |
| P.Wisc. 1 14 | 16820 | 16820 | AD 131 | included | agreement dividing a soldier's estate between widow and his creditors (danistai); the loan contracts (dania) of the two creditors are to be crossed out and returned: one row per creditor's earlier loan, amounts not stated | ALD-000539, ALD-000540 |
| PSI 8 962 | 17607 | 17607 | AD 131-132 | included | loan contract (synchoresis) | ALD-000240 |
| PSI 8 962 | 17609 | 17609 | AD 131-132 | excluded | too fragmentary |  |
| SB 6 9190 | 17866 | 17866 | AD 131 | included | loan contract (daneion) referring to an earlier loan | ALD-000236, ALD-000241 |
| BGU 2 664 | 25649 | 25649 | AD 132-151 | included | loan acknowledgement | ALD-000245 |
| O.Ont. Mus. 2 123 | 75142 | 75142 | AD 132 | excluded | tax receipt (merismos prochreias) |  |
| O.Wilck. 1577 | 77871 | 77871 | AD 132 | excluded | tax receipt (merismos prochreias) |  |
| O.Wilck. 549 | 77058 | 77058 | AD 132 | excluded | tax receipt (merismos prochreias) |  |
| O.Wilck. 551 | 77060 | 77060a | AD 132 | excluded | tax receipt (merismos prochreias) |  |
| O.Wilck. 551 | 77060 | 77060b | AD 132 | excluded | tax receipt (skopelos etc.), part of the same ostracon without a loan |  |
| P.Amh. 2 111 | 10094 | 10094 | AD 132 | excluded | receipt for repayment |  |
| P.Diog. 25 | 10697 | 10697 | AD 132 | included | loan contract (cheirograph) | ALD-000243 |
| P.Mil. Vogl. 2 105 | 12351 | 12351 | AD 132-133 | excluded | lease of pastures with rent paid in advance (not a loan) |  |
| P.Strasb. 4 256 | 16985 | 16985 | AD 132 | included | loan contract (cheirograph) | ALD-000244 |
| PSI 10 1159 | 13863 | 13863 | AD 132 | excluded | abstract from the strategus' archive (hypallagma); mentions loans only generically |  |
| BASP 61 (2024) 171 no. 3 | 12990 | 12990 | AD 133-134 | included | loan contract (homologia) | ALD-000246 |
| BGU 7 1654 | 9534 | 9534 | AD 133 | excluded | copy of a will; mentions debts under loans only generically, too fragmentary |  |
| P.Dura 22 | 17219 | 17219 | AD 133-134 | included | loan contract on security (mortgage) | ALD-000249 |
| P.Dura 23 | 17220 | 17220 | AD 133 | included | antichretic loan contract | ALD-000250 |
| P.Fam. Tebt. 29 | 10747 | 10747 | AD 133 | excluded | loan in kind in an official document (enforcement of a pledge) |  |
| SB 12 10786 | 14336 | 14336 | AD 133 | included | loan contract (homologia) with hypallagma | ALD-000247 |
| SB 12 10787 | 14337 | 14337 | AD 133 | included | loan contract (homologia) | ALD-000248 |
| SB 22 15611 | 43208 | 43208 | AD 133 | excluded | receipt for repayment |  |
| P.Fouad 1 41 | 11190 | 11190 | AD 134 | included | agreement: Sansneus owes Nemesas wheat under an agreement of loan (chresis), 6 2/3 artabas, payable in Payni of year 18; earlier loan | ALD-000541 |
| P.Lond. 3 907 | 11809 | 11809 | AD 134 | excluded | receipt for repayment (bank) |  |
| SB 22 15472 | 43198 | 43198a | AD 134 | excluded | sale of a house |  |
| SB 22 15472 | 43198 | 43198b | AD 134 | excluded | declaration of property acquired by purchase (part of the same papyrus without a loan) |  |
| SB 22 15472 | 43198 | 43198c | AD 134 | excluded | bank diagraphe for a purchase price (part of the same papyrus without a loan) |  |
| P.Oxy. 17 2111 | 17495 | 17495 | AD 135 | excluded | court proceedings |  |
| BGU 1 193 | 8954 | 8954 | AD 136 | excluded | sale of a slave |  |
| O.Brux. 13 | 24378 | 24378 | AD 136-181 | included | draft of a loan contract (cheirograph) | ALD-000253 |
| P.Strasb. 9 835 | 13253 | 13253 | AD 136-181 | included | loan contract (homologia) | ALD-000252 |
| SB 24 16173 | 79352 | 79352 | AD 136-146 | excluded | list of instructions/provisions (prochreia = advance on wages) |  |
| SB 30 17394 | 10791 | 10791 | AD 136 | included | loan contract (bank diagraphe) | ALD-000251 |
| BGU 2 465 | 20168 | 20168 | AD 137 | included | cheirographon (two copies): acknowledgement of a loan (chresis) of 148 drachmas, remainder of 300 drachmas received as price of wheat, repayable by Hathyr 5 | ALD-000544 |
| O.Claud. 3 432 | 73615 | 73615 | AD 137 | included | loan contract (cheirograph) | ALD-000254 |
| O.Claud. 3 456 | 73639 | 73639 | AD 137 | included | loan acknowledgement (advance of grain) | ALD-000255 |
| O.Claud. 3 458 | 73641 | 73641 | AD 137 | included | loan acknowledgement (advance of grain) | ALD-000256 |
| P.Kron. 13 | 11533 | 11533 | AD 137 | included | receipt for repayment of 50 artabas of wheat owed under an agreement of loan (chresis) made at the Tebtunis grapheion in Hathyr 16 of year 21 of Hadrian: row for that earlier loan | ALD-000543 |
| P.Kron. 14 | 11534 | 11534 | AD 137-138 | excluded | receipt for repayment |  |
| SB 12 11005 | 14390 | 14390 | AD 137 | excluded | receipt for repayment |  |
| APF 59 (2013) 139 | 28629 | 28629 | AD 138-161 | included | loan contract (wheat, with antichresis per HGV) | ALD-000262 |
| BGU 1 179 | 8941 | 8941 | AD 138-161 | excluded | acknowledgement of interest received and rescheduling of an existing loan (partial-payment receipt) |  |
| BGU 1 272 | 9020 | 9020 | AD 138-139 | included | loan contract (cheirograph) | ALD-000265 |
| BGU 1 85 | 9126 | 9126 | AD 138-161 | excluded | report/oath of state farmers; seed grain lent by the state (state seed-grain) |  |
| BGU 11 2120 | 9621 | 9621 | AD 138-161 | excluded | receipt for repayment |  |
| BGU 3 709 | 9309 | 9309 | AD 138-161 | excluded | cession of land; only the anepidaneistos formula |  |
| BGU 4 1014 | 9434 | 9434 | AD 138 | included | loan contract | ALD-000266 |
| BGU 7 1564 | 9473 | 9473 | AD 138 | excluded | bank payment order: advance (prochreia) on the price of military clothing; not a loan |  |
| CdE 86 (2011) 242 | 140731 | 140731 | AD 138 | included | loan contract (acknowledgement of debt, called a loan) | ALD-000259 |
| CdE 86 (2011) 224 | 99906 | 99906 | AD 138-161 | excluded | too fragmentary (petition; no loan details survive) |  |
| O.Claud. 3 467 | 73650 | 73650 | AD 138 | included | acknowledgement of a loan of grain | ALD-000263 |
| O.Claud. 3 614 | 73796 | 73796 | AD 138-160 | excluded | too fragmentary |  |
| O.Claud. 3 615 | 73797 | 73797 | AD 138-161 | excluded | too fragmentary |  |
| O.Claud. 3 616 | 73798 | 73798 | AD 138-161 | excluded | too fragmentary |  |
| O.Claud. 3 623 | 73805 | 73805 | AD 138-161 | excluded | too fragmentary (no loan visible in surviving text) |  |
| O.Claud. 3 625 | 73807 | 73807 | AD 138-161 | included | acknowledgement of a loan of one artaba with surety | ALD-000264 |
| O.Claud. 3 628 | 73810 | 73810 | AD 138-161 | excluded | too fragmentary |  |
| P.Bingen 73 | 44509 | 44509 | AD 138-150 | included | copy of a loan contract (chresis) of 500 drachmas | ALD-000545 |
| P.Bour. 15 | 10280 | 10280 | AD 138-161 | excluded | register of contract abstracts (anagraphe) |  |
| P.Flor. 1 51 | 10959 | 10959 | AD 138-161 | excluded | register of contracts; no text available |  |
| P.Hib. 2 277 | 21150 | 21150 | AD 138-160 | excluded | too fragmentary (no loan terms survive) |  |
| P.Köln 15 614 | 704871 | 704871 | AD 138-160 | excluded | deposit (paratheke), not called a loan in the text |  |
| P.Laur. 2 28 | 21242 | 21242 | AD 138-160 | included | loan contract (mortgage) | ALD-000261 |
| P.Lond. 2 196 | 19965 | 19965 | AD 138-161 | excluded | court proceedings |  |
| P.Mil. Vogl. 2 52 | 12356 | 12356 | AD 138 | excluded | account of receipts and expenses (entry 'of a loan' 20 drachmas is an account item) |  |
| P.Oxy. 4 729 | 20429 | 20429 | AD 138 | included | lease of a vineyard: lessor advances 3,000 drachmas to the lessees as prochreia, repayable interest-free (atokous) | ALD-000546 |
| P.Strasb. 1 13 | 13152 | 13152 | AD 138-161 | included | loan contract (homologia) | ALD-000257 |
| P.Strasb. 4 293 | 13234 | 13234 | AD 138-161 | included | loan contract (daneion) | ALD-000258 |
| P.Strasb. 6 509 | 13386 | 13386 | AD 138-161 | excluded | abstracts of contracts |  |
| P.Tebt. 2 286 | 13449 | 13449 | AD 138 | excluded | court proceedings (report of a trial) |  |
| P.Tebt. Pad. 1 21 | 412075 | 412075 | AD 138-161 | included | end of a loan contract (gramma tes chreseos, double copy); amount and parties lost | ALD-000547 |
| SB 14 11607 | 18157 | 18157 | AD 138-177 | included | loan of money mentioned in a petition | ALD-000260 |
| BASP 61 (2024) 160 no. 1 | 12987 | 12987 | AD 139 | excluded | deposit (paratheke), not called a loan in the text |  |
| BASP 61 (2024) 179 no. 4 | 12991 | 12991 | AD 139 | excluded | too fragmentary (text breaks off before the transaction; loan not shown in surviving text) |  |
| BGU 2 472 | 9195 | 9195 | AD 139 | included | loan contract | ALD-000267 |
| BGU 2 645 | 9284 | 9284 | AD 139-140 | excluded | no loan survives (bank payment for boat fare) |  |
| P.Louvre 2 110 | 88777 | 88777 | AD 139-160 | excluded | deposit (parakatatheke/paratheke), not called a loan in the text |  |
| P.Ryl. 2 174 | 12957 | 12957 | AD 139 | excluded | receipt for repayment |  |
| PSI 10 1140 | 13852 | 13852 | AD 139 | excluded | receipt for (partial) repayment |  |
| ChLA 5 303 | 69901 | 69901 | AD 140 | included | loan contract (Latin cheirograph with Greek subscription) | ALD-000270 |
| O.Claud. 3 495 | 73678 | 73678 | AD 140-141 | included | acknowledgement of a loan | ALD-000271 |
| O.Claud. 3 504 | 73687 | 73687 | AD 140-144 | included | acknowledgement of a loan | ALD-000272 |
| O.Claud. 3 540 | 73723 | 73723 | AD 140 | included | acknowledgement of a loan | ALD-000273 |
| O.Claud. 3 572 | 73755 | 73755 | AD 140 | included | acknowledgement of a loan | ALD-000274 |
| O.Claud. 3 599 | 73781 | 73781 | AD 140-145 | excluded | cession (parachoresis) of a loan note; loan terms not preserved |  |
| P.Gen. 1 8 | 11249 | 11249 | AD 140-141 | excluded | sale with advance payment, not called a loan |  |
| P.IFAO 1 14 | 21162 | 21162 | AD 140 | included | loan contract (holograph cheirograph) | ALD-000269 |
| P.Kron. 17 | 11538 | 11538 | AD 140 | included | loan contract | ALD-000268 |
| P.Oxy. 49 3490 | 15647 | 15647 | AD 140-141 | included | loan contract (pilot) | ALD-000013 |
| P.Strasb. 7 628 | 13416 | 13416 | AD 140 | excluded | register of contracts (copies of bank diagraphai) |  |
| P.Tebt. 2 341 | 13498 | 13498 | AD 140 | excluded | village scribe's request for state seed-grain loans (state seed-grain) |  |
| P.Wisc. 1 16 | 16822 | 16822 | AD 140 | included | petition: earlier loan (daneion) the petitioner's father contracted on his house from Horion, now repaid; amount not stated | ALD-000548 |
| BGU 2 472 | 9196 | 9196 | AD 141 | excluded | receipt for repayment |  |
| O.Claud. 3 466 | 73649 | 73649 | AD 141-144 | included | acknowledgement of a loan in kind (ostracon) | ALD-000278 |
| O.Claud. 3 492 | 73675 | 73675 | AD 141 | included | order to pay mentioning a money loan, with acknowledgement | ALD-000279 |
| O.Claud. 3 493 | 73676 | 73676 | AD 141 | excluded | duplicate copy of O.Claud. 3 492 (same loan, recorded there) |  |
| O.Claud. 3 494 | 73677 | 73677 | AD 141 | included | acknowledgement of a money loan (ostracon) | ALD-000280 |
| O.Claud. 3 541 | 73724 | 73724 | AD 141 | included | loan contract (ostracon) | ALD-000281 |
| O.Claud. 3 576 | 73759 | 73759 | AD 141-142 | included | acknowledgement of a loan (chresis) received from a tesserarius; amount partly lost | ALD-000549 |
| P.Gen. 1 8 | 11248 | 11248 | AD 141 | excluded | sale with advance payment (price of vegetable seed), not called a loan |  |
| P.Louvre 1 18 | 11830 | 11830 | AD 141 | included | loan contract (bank) | ALD-000275 |
| P.Oxy. 1 98 | 20757 | 20757 | AD 141-142 | excluded | receipt for repayment |  |
| P.Tebt. 2 389 | 13545 | 13545 | AD 141 | included | loan through a bank | ALD-000276 |
| P.Yale 1 65 | 16841 | 16841 | AD 141-144 | excluded | receipt for repayment |  |
| ZPE 206 (2018) 185 | 69890 | 69890 | AD 141 | included | acknowledgement of debt (Latin) | ALD-000277 |
| BGU 11 2070 | 26951 | 26951 | AD 142-144 | excluded | court proceedings |  |
| Chrest.Mitt. 372 | 9923 | 9923 | AD 142 | excluded | court proceedings (collection of precedents on soldiers' marriages) |  |
| Chrest.Mitt. 88 | 9924 | 9924 | AD 142 | included | petition narrating a lawsuit: the petitioner's father Iulius Agrippianus was lender (danistes) to Drusilla's husband Apollinarius since year 13 of Hadrian; capital and interest owed | ALD-000550 |
| O.Claud. 3 496 | 73679 | 73679 | AD 142 | included | acknowledgement of a loan in kind (ostracon) | ALD-000282 |
| P.Oxy. 85 5515 | 957525 | 957525 | AD 142 | excluded | surety for wheat taxes advanced (prochresthesas) by the tax collector; not called a loan |  |
| P.Tebt. 2 365 | 13522 | 13522 | AD 142 | excluded | receipt for grain paid to the sitologi (transport dues); advance by tax collector, not a loan |  |
| P.Tebt. 2 398 | 13554 | 13554 | AD 142 | excluded | release / no-claim declaration after payment |  |
| BGU 3 741 | 20057 | 20057 | AD 143 | included | loan contract (synchoresis) secured by mortgage | ALD-000285, ALD-000286 |
| O.Claud. 3 610 | 73792 | 73792 | AD 143-144 | included | acknowledgement of a money loan (ostracon) | ALD-000287 |
| O.Narm. 1 61 | 40908 | 40908 | AD 143-199 | excluded | account |  |
| P.Hamb. 4 251 | 41550 | 41550 | AD 143-144 | excluded | register of contracts |  |
| P.Oxy. 3 506 | 20638 | 20638 | AD 143 | included | loan contract (pilot) | ALD-000014, ALD-000015 |
| P.Strasb. 4 230 | 13205 | 13205 | AD 143-144 | included | loan contract (money and barley) | ALD-000283, ALD-000452 |
| P.Vindob. Tandem 26 | 13687 | 13687 | AD 143 | excluded | sale of a share of a house; only the anepidaneistos formula |  |
| P.Vindob. Worp 10 | 13693 | 13693 | AD 143-144 | included | loan contract secured by hypallagma | ALD-000284 |
| PSI 8 921 | 13813 | 13813 | AD 143-144 | excluded | register of bank transactions (diagraphai) |  |
| SB 1 5168 | 23159 | 23159 | AD 143-144 | excluded | register of contracts (Vertragsmelderolle) |  |
| BGU 4 1038 | 9441 | 9441 | AD 144 | included | petition for distraint: two loans (diagraphai, 'each loan') owed to Tryphon son of Apollonius by Sarapias | ALD-000551, ALD-000552 |
| O.Claud. 3 498 | 73681 | 73681 | AD 144 | excluded | acknowledgement of an advance of pay and rations (prokechresthai), not a loan |  |
| O.Claud. 3 515 | 73698 | 73698 | AD 144-145 | excluded | advance on wages and ration; amount lost, too fragmentary |  |
| O.Claud. 3 582 | 73765 | 73765 | AD 144 | included | acknowledgement of a loan in kind (ostracon) | ALD-000288 |
| P.Oxy. 55 3798 | 22521 | 22521 | AD 144 | excluded | receipt for repayment |  |
| P.Princ. 2 34 | 12830 | 12830 | AD 144 | excluded | receipt for repayment |  |
| CPR 1 187 | 9835 | 9835 | AD 145 | excluded | sale of a share of a house; only the anepidaneistos formula |  |
| CdE 86 (2011) 245 no. 4 | 140732 | 140732 | AD 145 | excluded | cancellation/discharge of a loan (perilysis) |  |
| P.Lond. 2 308 | 11687 | 11687 | AD 145 | included | loan contract (homologia), money and wheat | ALD-000289, ALD-000460 |
| P.Oxy. 44 3198 | 15961 | 15961 | AD 145-171 | included | loan contract (pilot) | ALD-000002 |
| SPP 22 36 | 15105 | 15105 | AD 145 | included | paramone/antichretic loan contract | ALD-000290 |
| SPP 22 72 | 15131 | 15131 | AD 145-156 | excluded | receipt for repayment |  |
| P.Col. 10 259 | 10559 | 10559 | AD 146 | included | loan contract through a bank | ALD-000291 |
| P.Gen. 1 6 | 11240 | 11240 | AD 146 | included | petition: loan of 1,500 drachmas by cheirographon of Epeiph year 18 of Hadrian, made by the petitioner's late father | ALD-000542 |
| P.Kron. 20 | 11544 | 11544 | AD 146 | included | copy of an antichretic loan contract | ALD-000292 |
| P.Lond. 2 310 | 11689 | 11689 | AD 146 | excluded | deposit (parathēkē), not called a loan; text crossed out |  |
| P.Lond. 3 1179 | 11764 | 11764 | AD 146-147 | excluded | register of contracts |  |
| P.Oslo 2 39 | 12565 | 12565 | AD 146 | included | loan contract (homologia) | ALD-000293 |
| P.Oxy. 3 507 | 20639 | 20639 | AD 146 | included | loan contract (pilot) | ALD-000001 |
| SB 14 11488 | 14464 | 14464 | AD 146-147 | excluded | receipt for repayment |  |
| SPP 22 83 | 15136 | 15136 | AD 146-156 | included | loan contract, fragmentary | ALD-000294 |
| BGU 2 378 | 9141 | 9141 | AD 147 | excluded | deposit (parathēkē), not called a loan; petition |  |
| O.Claud. 3 536 | 73719 | 73719 | AD 147 | included | acknowledgement of money received to be repaid (ostracon) | ALD-000298 |
| P.Coll. Youtie 1 25 | 10569 | 10569 | AD 147 | included | loan through a bank (diagraphe) | ALD-000295 |
| P.Oslo 3 132 | 12571 | 12571 | AD 147-156 | included | loan contract (homologia), fragmentary | ALD-000296 |
| P.Strasb. 5 383 | 13293 | 13293 | AD 147-155 | included | loan contract (homologia), fragmentary | ALD-000297 |
| PSI 13 1323 | 13873 | 13873 | AD 147-148 | excluded | no specific loan survives (general complaint against a moneylender) |  |
| SB 20 14303 | 14858 | 14858 | AD 147 | excluded | extracts from census declarations |  |
| SB 20 14401 | 14880 | 14880 | AD 147 | included | petition against the moneylender Ptolemaeus son of Pappus: his loan to the petitioner at a stater per mina, and 3 1/2 talents lent in one village | ALD-000553, ALD-000554 |
| Tyche 35 (2020) 196 | 321597 | 321597 | AD 147 | included | petition: the petitioners' father borrowed 3,500 drachmas from Capitolinus son of Diodorus in year 4 of Hadrian | ALD-000555 |
| BGU 2 445 | 9176 | 9176 | AD 148-149 | included | receipt for partial repayment (824 of 1,520 dr.); row for the loan it names (ἐδανίσατο), mortgage on catoecic land | ALD-000556 |
| O.Claud. 3 587 | 73770 | 73770 | AD 148-149 | included | acknowledgement of a loan (χρῆσις) on ostracon; object and amount lost | ALD-000557 |
| P.Cair. Mich. 2 16 | 397538 | 397538 | AD 148-149 | excluded | notification of death, no loan |  |
| P.Laur. 1 2 | 11599 | 11599 | AD 148 | excluded | register of the strategos' office; a copy of a loan (daneion) of year 5 of Antoninus Pius is cited as evidence, but its parties and terms are not recoverable (too fragmentary) |  |
| P.Oxy. 14 1710 | 21988 | 21988 | AD 148 | excluded | only names survive |  |
| P.Oxy. 41 2956 | 16519 | 16519 | AD 148 | excluded | state seed-grain grant order |  |
| P.Vindob. Sal. 11 | 17293 | 17293 | AD 148 | excluded | lease of half a street and a room (χρῆσις = use), not a loan |  |
| SB 18 13228 | 8673 | 8673 | AD 148-161 | excluded | abstracts of contracts (contract register) |  |
| SB 18 13764 | 14759 | 14759 | AD 148-161 | excluded | cession of catoecic land; only the anepidaneistos formula |  |
| BGU 5 1210 | 9472 | 9472 | AD 149 | excluded | Gnomon of the Idios Logos: regulations, no loan transaction |  |
| CPR 1 15 | 9822 | 9822 | AD 149 | included | loan contract through a bank | ALD-000304 |
| P.Heid. 7 399 | 11480 | 11480 | AD 149 | excluded | receipt for repayment (loan of oil) |  |
| P.Lond. 2 311 | 11690 | 11690 | AD 149 | included | loan contract with mortgage and sureties | ALD-000299 |
| P.Oxf. 11 | 12583 | 12583 | AD 149 | included | antichretic loan contract | ALD-000300 |
| SB 14 11850 | 14518 | 14518 | AD 149 | included | bank notice of payment of a maritime loan | ALD-000301 |
| SB 20 14970 | 14911 | 14911 | AD 149 | included | loan contract (homologia) | ALD-000302 |
| SPP 22 53 | 15122 | 15122 | AD 149 | included | acknowledgement of loan (borrowers' subscription) | ALD-000303 |
| BGU 1 290 | 9036 | 9036 | AD 150 | included | loan contract (homologia) | ALD-000307, ALD-000468 |
| BGU 11 2043 | 9577 | 9577 | AD 150 | included | loan contract with hypallagma | ALD-000308 |
| P.Lond. 2 358 | 11738 | 11738 | AD 150-154 | excluded | petition: loan document (400 dr.) extorted by force, no money paid; fictitious loan |  |
| P.Oslo 2 40 | 21517 | 21517 | AD 150 | included | loan contract (cheirographon) secured on a slave | ALD-000305 |
| P.Oslo 2 40 | 21518 | 21518 | AD 150 | included | loan contract (cheirographon) | ALD-000306 |
| BGU 3 702 | 9302 | 9302 | AD 151 | excluded | deposit (paratheke), not called a loan |  |
| O.Claud. 3 591 | 73773 | 73773 | AD 151 | included | acknowledgement of a loan received (ration) | ALD-000311 |
| O.Wilck. 1139 | 45129 | 45129 | AD 151-225 | excluded | receipt for soldier's grain ration paid in advance (prochreia), not a loan |  |
| O.Wilck. 1145 | 45135 | 45135 | AD 151-225 | excluded | too fragmentary (receipt, prochreia) |  |
| P.Kar. Goodsp. 46 | 42908 | 42908 | AD 151-152 | excluded | state seed-grain loan receipt |  |
| P.Leid.Inst. 2 32 | 971480 | 971480 | AD 151-200 | excluded | calculation at the end of a tax roll |  |
| P.Strasb. 1 52 | 18681 | 18681 | AD 151 | included | loan contract with mortgage (hypotheke) | ALD-000309 |
| P.Strasb. 4 225 | 26978 | 26978 | AD 151-200 | excluded | register of contracts |  |
| P.Strasb. 6 588 | 26915 | 26915 | AD 151-200 | included | loan contract (fragment; money repaid in produce with interest) | ALD-000310 |
| PSI 3 159 | 13751 | 13751 | AD 151 | excluded | receipt for repayment (bank diagraphe cancelling a loan contract) |  |
| Pylon 4 (2023) art. 5 no. 1 | 987701 | 987701 | AD 151-250 | included | letter/instruction to repay from soldier's pay drachmas received as a loan (εἰς χρῆσιν) from a beneficiarius; amount lost | ALD-000560 |
| SB 20 15163 | 29522 | 29522 | AD 151-200 | excluded | advance payment for delivery of produce, not called a loan (abbreviated copy; parties' roles unclear) |  |
| SPP 22 43 | 15111 | 15111 | AD 151 | excluded | receipt for repayment (cession of shares in a debt; refers to the loan in BGU 11 2043) |  |
| O.Claud. 3 556 | 73739 | 73739 | AD 152-153 | included | acknowledgement of a money loan received | ALD-000313 |
| P.Strasb. 4 209 | 13198 | 13198 | AD 152 | included | acknowledgement of a money loan received | ALD-000312 |
| PSI 8 878 | 17582 | 17582 | AD 152-153 | excluded | receipt for repayment |  |
| SB 12 11043 | 14401 | 14401 | AD 152 | excluded | no text available |  |
| BGU 1 155 | 8923 | 8923 | AD 153 | excluded | receipt for interest payment |  |
| O.Claud. 3 555 | 73738 | 73738 | AD 153 | included | acknowledgement of an advance (loan) of pay and ration | ALD-000316 |
| O.Claud. 3 596 | 73778 | 73778 | AD 153 | included | acknowledgement of a loan of wheat (εἰς χρῆσιν ... σίτου) to be repaid; amount and names lost | ALD-000561 |
| P.Flor. 1 1 | 23525 | 23525 | AD 153 | included | loan contract with mortgage (hypotheke) | ALD-000315 |
| P.Fouad 1 45 | 20991 | 20991 | AD 153 | excluded | no text available |  |
| P.Gen. 2 106 | 17387 | 17387 | AD 153-154 | included | loan contract (cheirographon) with antichresis on default | ALD-000314 |
| P.Kron. 46 | 11568 | 11568 | AD 153 | included | lease offer with advance (εἰς προχρείας λόγον) of 48 dr., repayable interest-free with 48 dr. for seed | ALD-000562 |
| P.Strasb. 1 54 | 18683 | 18683 | AD 153-154 | excluded | deposit (parathesis) of wheat, not called a loan |  |
| P.Horak 80 | 48168 | 48168 | AD 154 | included | loan contract with hypallagma (fragment) | ALD-000320 |
| P.Mert. 3 110 | 11946 | 11946 | AD 154 | included | loan contract (homologia) of money and barley | ALD-000317, ALD-000461 |
| P.Mich. 6 428 | 12266 | 12266 | AD 154 | excluded | sale of a house |  |
| P.Mil. Vogl. 2 68 | 12363 | 12363 | AD 154 | included | loan contract (crossed out, i.e. cancelled) | ALD-000318 |
| P.Oxy. 34 2722 | 16594 | 16594 | AD 154 | included | loan contract (pilot) | ALD-000016 |
| P.Ross. Georg. 2 22 | 12888 | 12888 | AD 154-159 | excluded | court proceedings |  |
| PSI 10 1142 | 13854 | 13854 | AD 154 | included | loan contract (homologia), later annotated as repaid | ALD-000319 |
| SB 16 12374 | 16227 | 16227 | AD 154 | excluded | official document on public works advance (prochreia from the state account) |  |
| SB 22 15384 | 13648 | 13648 | AD 154 | excluded | receipt for repayment |  |
| BGU 1 86 | 9127 | 9127 | AD 155 | excluded | will mentions Thases' loan of 2,500 dr. to Horus son of Satabous (Mecheir 1, year 17 of Antoninus Pius); already recorded as ALD-000320 (P.Horak 80, amount null there) |  |
| P.Coll. Youtie 1 63 | 10588 | 10588 | AD 155-156 | excluded | list of lessees and state seed loans by cleruchy (state seed-grain) |  |
| P.Select 3 | 13120 | 13120 | AD 155 | included | loan contract (homologia) | ALD-000321 |
| P.Vars. 10 | 13665 | 13665a | AD 155 | included | loan contract with mortgage (hypallagma), paid through a bank | ALD-000322, ALD-000323 |
| P.Vars. 10 | 13665 | 13665b | AD 155 | excluded | bank record (diagraphe) of the same loan as HGV 13665a (duplicate) |  |
| SB 10 10565 | 14327 | 14327 | AD 155 | included | loan paid through a bank (bank diagraphe) | ALD-000324 |
| SB 12 11006 | 14391 | 14391 | AD 155 | excluded | receipt for repayment |  |
| SB 14 11599 | 18155 | 18155 | AD 155 | included | loan acknowledgement (cheirograph) with repayment in instalments | ALD-000325 |
| BGU 1 171 | 8936 | 8936 | AD 156 | excluded | receipt for state seed-grain loan from the sitologoi |  |
| BGU 13 2268 | 9675 | 9675 | AD 156-157 | excluded | receipt for state seed grain (δάνεια σπερμάτων) |  |
| P.Coll. Youtie 1 26 | 15848 | 15848 | AD 156 | excluded | application for state seed loan |  |
| P.Ross. Georg. 2 25 | 12889 | 12889 | AD 156-159 | included | petition: the petitioner's pledges held by his lender (δανειστής); amount lost | ALD-000563 |
| SB 14 12017 | 14539 | 14539 | AD 156 | included | loan contract (homologia) with antichresis on default | ALD-000326 |
| BGU 1 301 | 9044 | 9044 | AD 157 | included | supplementary cheirograph to a loan of 900 dr. at 1% per month made the same day by homologia, on security of 4 arouras | ALD-000564 |
| P.Amh. 2 113 | 10096 | 10096 | AD 157 | excluded | receipt for repayment |  |
| P.Prag. 1 32 | 12766 | 12766 | AD 157 | included | loan contract (homologia) of money and wheat; text crossed out | ALD-000327, ALD-000471 |
| SB 26 16382 | 40917 | 40917 | AD 157-213 | excluded | draft/notes too fragmentary to show a loan: 25 artabas of wheat 'and their hundredths' owed under a symbolon, not called a loan; danistes refers to a creditor's distraint |  |
| BGU 1 172 | 8937 | 8937 | AD 158-159 | excluded | state seed-grain receipt |  |
| BGU 3 800 | 9357 | 9357 | AD 158 | included | loan contract (cheirographon, two copies) | ALD-000331, ALD-000458 |
| P.Aberd. 49 | 10007 | 10007 | AD 158-159 | excluded | receipt for state seed-grain from the sitologoi |  |
| P.Alex. Giss. 2 | 10077 | 10077 | AD 158-159 | excluded | receipt for state seed grain (prochreia of seed) |  |
| P.Flor. 1 44 | 10954 | 10954 | AD 158 | included | paramone loan paid through a bank | ALD-000328 |
| P.Fouad 1 26 | 11187 | 11187 | AD 158-159 | included | money loans mentioned in a petition | ALD-000329 |
| P.Kar. Goodsp. 1 | 42863 | 42863 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 10 | 42872 | 42872 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 11 | 42873 | 42873 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 12 | 42874 | 42874 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 13 | 42875 | 42875 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 14 | 42876 | 42876 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 15 | 42877 | 42877 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 16 | 42878 | 42878 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 17 | 42879 | 42879 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 18 | 42880 | 42880 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 19 | 42881 | 42881 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 2 | 42864 | 42864 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 20 | 42882 | 42882 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 21 | 42883 | 42883 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 22 | 42884 | 42884 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 23 | 42885 | 42885 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 24 | 42886 | 42886 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 25 | 42887 | 42887 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 26 | 42888 | 42888 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 27 | 42889 | 42889 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 28 | 42890 | 42890 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 29 | 42891 | 42891 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 3 | 42865 | 42865 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 30 | 42892 | 42892 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 31 | 42893 | 42893 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 32 | 42894 | 42894 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 33 | 42895 | 42895 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 34 | 42896 | 42896 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 35 | 42897 | 42897 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 36 | 42898 | 42898 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 37 | 42899 | 42899 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 38 | 42900 | 42900 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 39 | 42901 | 42901 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 4 | 42866 | 42866 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 40 | 42902 | 42902 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 41 | 42903 | 42903 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 42 | 42904 | 42904 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 43 | 42905 | 42905 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 44 | 42906 | 42906 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 45 | 42907 | 42907 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 47 | 42909 | 42909 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 48 | 42910 | 42910 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 49 | 42911 | 42911 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 5 | 42867 | 42867 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 50 | 42912 | 42912 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 51 | 42913 | 42913 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 52 | 42914 | 42914 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 53 | 42915 | 42915 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 54 | 42916 | 42916 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 55 | 42917 | 42917 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 56 | 42918 | 42918 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 57 | 42919 | 42919 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 58 | 42920 | 42920 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 59 | 42921 | 42921 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 6 | 42868 | 42868 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 60 | 42922 | 42922 | AD 158-159 | excluded | state seed-grain grant (receipt to sitologoi of Karanis for seed of year 22 of Antoninus Pius, by klerouchia/arouras) |  |
| P.Kar. Goodsp. 61 | 42923 | 42923 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 62 | 42924 | 42924 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 63 | 42925 | 42925 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 64 | 42926 | 42926 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 65 | 42927 | 42927 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 66 | 42928 | 42928 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 67 | 42929 | 42929 | AD 158-159 | excluded | no text available |  |
| P.Kar. Goodsp. 68 | 42930 | 42930 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 69 | 42931 | 42931 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 7 | 42869 | 42869 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 70 | 42932 | 42932 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 71 | 42933 | 42933 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 72 | 42934 | 42934 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 73 | 42935 | 42935 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 74 | 42936 | 42936 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 75 | 42937 | 42937 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 76 | 42938 | 42938 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 77 | 42939 | 42939 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 78 | 42940 | 42940 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 79 | 42941 | 42941 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 8 | 42870 | 42870 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 80 | 42942 | 42942 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 81 | 42943 | 42943 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 82 | 42944 | 42944 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 83 | 42945 | 42945 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 84 | 42946 | 42946 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 85 | 42947 | 42947 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 86 | 42948 | 42948 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 87 | 42949 | 42949 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 88 | 42950 | 42950 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 89 | 42951 | 42951 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 9 | 42871 | 42871 | AD 158-159 | excluded | state seed-grain advance (receipt to sitologoi) |  |
| P.Kar. Goodsp. 90 | 42952 | 42952 | AD 158-159 | excluded | state seed-grain loan (sitologoi receipt/docket for seed of year 22 of Antoninus); not a private loan contract |  |
| P.Kar. Goodsp. 91 | 42953 | 42953 | AD 158-159 | excluded | state seed-grain receipt |  |
| P.Münch. 3 96 | 12479 | 12479 | AD 158 | included | loan contract (bank diagraphe) | ALD-000330 |
| P.Oxy. 31 2591 | 16905 | 16905 | AD 158-159 | excluded | sitologus document: state grain advances |  |
| CPR 6 3 | 9874 | 9874 | AD 159 | included | loan of 200 dr. and 4 artabas of wheat (contract crossed out) | ALD-000565, ALD-000566 |
| O.Wilck. 240 | 76807 | 76807 | AD 159 | excluded | receipt for repayment |  |
| P.Ryl. 2 378 | 13004 | 13004 | AD 159-160 | excluded | no text available |  |
| BGU 15 2472 | 9742 | 9742 | AD 160 | excluded | enforcement proceedings (execution of a pledge); loan details lost |  |
| P.Col. 5 1 | 10471 | 10471 | AD 160 | excluded | list of (seed) loans |  |
| P.Col. 5 1 | 10475 | 10475 | AD 160-161 | excluded | account of money taxes and sitologos account |  |
| P.Giss. 1 96 | 19479 | 19479 | AD 160 | included | cheirograph: interest-bearing loan of 120 dr. | ALD-000567 |
| PSI 6 714 | 13786 | 13786 | AD 160-161 | included | receipt for repayment; row for the loan it names (κατὰ δάνειον, year 22 of Antoninus Pius = AD 158/159); principal lost | ALD-000568 |
| BGU 1 233 | 8995 | 8995 | AD 161-169 | excluded | cession of land (parachoresis); χρήσεις = uses, no loan |  |
| P.Münch. 3 97 | 12480 | 12480 | AD 161-180 | included | loan contract | ALD-000332 |
| P.Oxy. 3 653 | 20692 | 20692 | AD 161 | excluded | no text available (court proceedings) |  |
| P.Oxy. 77 5109 | 140175 | 140175 | AD 161-162 | included | loan contract in kind (barley) | ALD-000334 |
| P.Phil. 16 | 17562 | 17562 | AD 161 | included | money debt mentioned in a letter (procuration) | ALD-000335 |
| P.Princ. 2 35 | 12831 | 12831 | AD 161 | excluded | receipt for repayment |  |
| P.Strasb. 4 204 | 13196 | 13196 | AD 161-169 | included | loan contract (bank diagraphe) | ALD-000333 |
| P.Strasb. 5 303 | 18761 | 18761 | AD 161-169 | included | loan contract (fragment) | ALD-000336 |
| PSI 15 1527 | 16864 | 16864 | AD 161 | included | declaration of fiduciary title to a mortgage; earlier loan (ἐδάνεισα) by cheirographon of Phamenoth year 13 of Antoninus Pius | ALD-000559 |
| SB 10 10723 | 14332 | 14332 | AD 161 | excluded | receipt for repayment |  |
| SB 18 13895 | 14769 | 14769 | AD 161 | excluded | receipt for repayment |  |
| Das Fayyum in Hellenismus und Kaiserzeit (2013) | 15134 | 15134 | AD 162-163 | included | loan contract | ALD-000337 |
| P.Oxy. 3 653 | 20691 | 20691 | AD 162-163 | excluded | court proceedings (extract of minutes) about a loan and mortgages |  |
| P.Oxy. 8 1132 | 21749 | 21749 | AD 162 | excluded | receipt for repayment |  |
| CPR 1 16 | 9825 | 9825 | AD 163 | included | loan contract (bank diagraphe) | ALD-000340 |
| P.Heid. 3 239 | 11468 | 11468 | AD 163 | included | loan contract (cheirographon) | ALD-000338 |
| P.Mil. Vogl. 1 28 | 12348 | 12348 | AD 163 | excluded | estate account of barley; 'εἰς χρῆσιν' entry in an account |  |
| P.NYU 2 27 | 16771 | 16771 | AD 163 | included | loan contract (cheirographon) | ALD-000339 |
| P.Oxy. 50 3560 | 15383 | 15383 | AD 163-164 | included | application to register a lien containing the loan terms (κατὰ δάνειον ... ἐδάνεισα) | ALD-000569 |
| P.Hamb. 1 66 | 11407 | 11407 | AD 164-196 | excluded | state seed-grain receipt |  |
| P.Mert. 3 105 | 11942 | 11942c | AD 164-165 | included | paramone loan contract (draft) on a sheet of drafts | ALD-000341 |
| P.Oxy. 3 494 | 20630 | 20630 | AD 165 | excluded | will; χρῆσις = usufruct, no loan |  |
| SB 30 17371 | 99857 | 99857 | AD 166-199 | excluded | too fragmentary |  |
| SPP 22 172 | 15087 | 15087 | AD 166 | excluded | receipt for repayment (bank instrument; contract returned for cancellation) |  |
| SPP 22 45 | 15113 | 15113 | AD 166-169 | excluded | receipt for repayment |  |
| P.Berl. Leihg. 2 26 | 10218 | 10218 | AD 167 | excluded | state seed-grain order |  |
| P.Berl. Leihg. 2 27 | 10219 | 10219 | AD 167 | excluded | state seed-grain receipt |  |
| P.Lond. 2 336 | 11716 | 11716 | AD 167 | included | loan contract through a bank (cancelled by crossing out) | ALD-000342 |
| P.Oxy. Hels. 36 | 15819 | 15819 | AD 167 | included | loan of money with right to register a hold on the borrower's property | ALD-000344 |
| P.Tebt. 2 390 | 13546 | 13546 | AD 167 | included | loan on mortgage (antichretic right to land if unpaid) | ALD-000343 |
| P.Tebt. 2 505 | 13589 | 13589 | AD 167 | excluded | no text available |  |
| P.Fam. Tebt. 38 | 20967 | 20967 | AD 168 | included | money loan on security of a slave mentioned in a petition | ALD-000347 |
| P.Lond. 2 470 | 19994 | 19994 | AD 168 | excluded | release after repayment of a loan |  |
| P.Oxy. 67 4589 | 78622 | 78622a | AD 168-169 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Oxy. 67 4589 | 78622 | 78622b | AD 168-169 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Oxy. 67 4589 | 78622 | 78622g | AD 168-169 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Oxy. 71 4826 | 112441 | 112441 | AD 168-169 | included | loan of wheat (cheirographon) | ALD-000345 |
| P.Ryl. 2 175 | 12958 | 12958 | AD 168 | included | loan of money (homologia) | ALD-000346 |
| P.Oxy. 62 4336 | 21634 | 21634a | AD 169-171 | included | acknowledgement of a loan of money (among receipts) | ALD-000348 |
| P.Oxy. 67 4589 | 78622 | 78622h | AD 169-170 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Ryl. 2 153 | 19510 | 19510 | AD 169 | excluded | will; χρῆσις = use of a house, no loan |  |
| P.Strasb. 4 283 | 13232 | 13232 | AD 169-170 | excluded | state seed-grain order (too fragmentary) |  |
| P.Lond. 3 918 | 11813 | 11813 | AD 171 | excluded | receipt for repayment |  |
| P.Oxy. 67 4589 | 78622 | 78622i | AD 171-172 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| BGU 2 514 | 9209 | 9209 | AD 172 | excluded | receipt for repayment |  |
| BGU 2 520 | 9214 | 9214 | AD 172 | excluded | deposit (paratheke), not called a loan |  |
| P.Flor. 1 68 | 23576 | 23576 | AD 172 | included | notification to the strategus (petition to the archidikastes) on publication of cheirographa: Castor, Eudaemon and Demetria children of Antimachus borrowed from the petitioner's father (loan verb restored by the editor) | ALD-000571 |
| P.Oxy. 67 4589 | 78622 | 78622e | AD 172-173 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Oxy. 67 4589 | 78622 | 78622f | AD 172-173 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Oxy. 67 4589 | 78622 | 78622j | AD 172-173 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Brookl. 123 | 18101 | 18101 | AD 173-174 | excluded | receipt for repayment of a grain loan (fragmentary) |  |
| P.Fam. Tebt. 40 | 10752 | 10752 | AD 173-174 | excluded | agreement concerning a pledge; loan only mentioned, amount lost |  |
| P.Oxy. 24 2411 | 16927 | 16927 | AD 173-174 | included | money loan on security mentioned in a petition | ALD-000349, ALD-000463 |
| P.Oxy. 67 4589 | 78622 | 78622c | AD 173-174 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| PSI 13 1324 | 13874 | 13874 | AD 173 | excluded | receipt for repayment |  |
| PSI 5 473 | 19312 | 19312 | AD 173 | included | receipts for interest naming the earlier loan by syngraphe through the mnemoneion, Germanikeios year 7 | ALD-000570 |
| P.Oxy. 67 4589 | 78622 | 78622d | AD 174-175 | excluded | notices of transfer of grain credit (sitologos diastolai); προχρεία = state grain advance account, no private loan |  |
| P.Mich. 4 225 | 12000 | 12000 | AD 175 | excluded | tax rolls (list); 'τόκου δανείου' entries are payments in an account |  |
| P.Oxy. 49 3493 | 15650 | 15650 | AD 175 | included | loan contract (acknowledgement of wheat received, repayable on demand) | ALD-000350 |
| P.Oxy. 49 3494 | 15651 | 15651 | AD 175 | included | loan contract (acknowledgement of wheat received, repayable on demand) | ALD-000351 |
| SB 8 9923 | 14299 | 14299 | AD 175-176 | excluded | receipt for repayment |  |
| BGU 11 2117 | 26961 | 26961 | AD 176-200 | included | loan contract (cheirograph) | ALD-000352 |
| BGU 13 2338 | 9727 | 9727 | AD 176 | excluded | receipt for repayment |  |
| BGU 3 823 | 9370 | 9370 | AD 176-179 | excluded | other copy of the petition of Tapetheus (BGU 3 970); loan recorded under HGV 9420 |  |
| BGU 7 1574 | 9481 | 9481 | AD 176 | included | money loan mentioned in a petition (objection to a payment order) | ALD-000355 |
| P.Aberd. 56 | 10010 | 10010 | AD 176 | included | paramone contract: χρῆσις of 200 drachmas against service | ALD-000572 |
| P.Bour. 28 | 27306 | 27306 | AD 176-200 | excluded | receipt for repayment |  |
| P.Bour. 53 | 27322 | 27322 | AD 176-200 | excluded | too fragmentary (only one deleted word of text survives) |  |
| P.Med. 1 58 | 28772 | 28772 | AD 176-225 | included | loan contract (chresis) | ALD-000353 |
| P.Mert. 1 23 | 28779 | 28779 | AD 176-200 | excluded | letter instructing a loan; no evidence it was made |  |
| P.Mich. 8 503 | 27113 | 27113 | AD 176-200 | excluded | letter asking for a loan of three cows, not shown to be made |  |
| P.Oxy. 14 1648 | 29012 | 29012 | AD 176-200 | excluded | abstracts of contracts (register of an archive) |  |
| P.Oxy. 17 2112 | 27200 | 27200 | AD 176-200 | excluded | list of judicial decisions |  |
| P.Ryl. 2 75 | 27880 | 27880 | AD 176-200 | excluded | court proceedings (extracts of prefect's decisions) |  |
| P.Tebt. 2 342 | 28415 | 28415 | AD 176-200 | included | report on confiscated property quoting a pottery lease with an interest-free advance (προχρεία) of 640 drachmas to the lessees | ALD-000573 |
| P.Tebt.Quen. 26 | 738087 | 738087 | AD 176-225 | excluded | letter fragment; προχρῆσαι too fragmentary to show a loan |  |
| SB 1 4425 | 29414 | 29414 | AD 176-200 | excluded | estate accounts of oil and wine |  |
| SB 22 15325 | 43177 | 43177 | AD 176 | included | application to register a loan cheirograph (demosiosis), with the loan's terms | ALD-000354 |
| SB 24 15943 | 43027 | 43027 | AD 176-225 | excluded | eiromenon (register of contracts) |  |
| BGU 3 970 | 9420 | 9420 | AD 177 | included | copy of petition to the prefect: Tapetheus undertook to pay 100 drachmas to Sisois, the lender (δανιστής) of her husband Limnaeus, under his cheirographon | ALD-000574 |
| P.Flor. 1 28 | 23547 | 23547 | AD 177-179 | included | loan through a bank, secured by mortgage (bank diagraphe with borrower's subscription) | ALD-000356 |
| P.Hib. 2 278 | 21151 | 21151 | AD 177-180 | excluded | too fragmentary (loan or deposit; only the opening survives) |  |
| P.Oxy. 3 485 | 20621 | 20621 | AD 178 | included | petition to the archidikastes for repayment of a loan made by public deed through the mnemoneion | ALD-000575 |
| P.Oxy. 50 3562 | 15384 | 15384 | AD 178-179 | excluded | court proceedings |  |
| SB 16 12288 | 14567 | 14567c | AD 178 | excluded | sale of building plots (ἀνεπιδάνειστα clause) |  |
| CPR 1 154 | 9823 | 9823 | AD 179 | excluded | sale contract; 'anepidaneista' guarantee clause only |  |
| O.Wilck. 1131 | 45121 | 45121 | AD 179-211 | excluded | receipt for an advance (prochreia) of a soldier's monthly wheat ration, not called a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371a | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371b | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371c | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371d | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371e | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371f | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371g | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371h | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371i | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371j | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371k | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371l | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371m | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371n | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371o | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371p | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371q | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371r | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371s | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371t | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371u | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371v | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371w | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371x | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371y | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371z | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371za | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zb | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zc | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zd | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371ze | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zf | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zg | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zh | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zi | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zj | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zk | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zl | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zm | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zn | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zo | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zp | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zq | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zr | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zs | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zt | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zu | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zv | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zw | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zx | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zy | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zz | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zza | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzb | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzc | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzd | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zze | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzf | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzg | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzh | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzi | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzj | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzk | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzl | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzm | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzn | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| Rom.Mil.Rec. 76 | 44371 | 44371zzo | AD 179 | excluded | receipt for hay money paid in advance (ἐν προχρείᾳ) to cavalrymen; allowance advance, not a loan |  |
| O.Tebt. Pad. 32 | 45178 | 45178 | AD 180-212 | excluded | tax receipt (zytera / poll tax), no loan |  |
| P.Dura 17 | 17215 | 17215 | AD 180 | excluded | register of contracts (registry roll of copies/abstracts) |  |
| PSI 8 922 | 13814 | 13814 | AD 180-192 | excluded | register of contracts |  |
| ZPE 205 (2018) 221 | 749359 | 749359 | AD 180-181 | included | report/petition to the dioiketes: Ammonius son of Potamon claims a loan on mortgage (daneion epi hypotheke) of 1080 drachmas made since year 10 of Hadrian by Potamiaina alias Tapiomis to Heraclides son of Isidorus on security and occupation of a house and plot | ALD-000577 |
| BGU 3 782 | 9344 | 9344 | AD 182-183 | included | earlier antichretic loan mentioned in a contract | ALD-000358 |
| O.Tebt. Pad. 33 | 45179 | 45179 | AD 182-214 | excluded | tax receipt (zytera / poll tax), no loan |  |
| O.Tebt. Pad. 35 | 45205 | 45205 | AD 182-215 | excluded | tax receipt (zytera / poll tax), no loan |  |
| O.Tebt. Pad. 54 | 45199 | 45199 | AD 182-214 | excluded | tax receipt (phoretron), no loan |  |
| P.Fam. Tebt. 43 | 15173 | 15173 | AD 182 | included | money loan mentioned in a petition | ALD-000357 |
| O.Tebt. Pad. 34 | 45180 | 45180 | AD 183-215 | excluded | tax receipt (zytera / poll tax), no loan |  |
| P.Flor. 1 42 | 10953 | 10953 | AD 183 | included | loan contract (chresis) | ALD-000359 |
| P.Köln 16 652 | 754295 | 754295 | AD 183-185 | included | antichretic loan through a bank | ALD-000360 |
| P.Petaus 31 | 8850 | 8850 | AD 183-184 | included | cheirographon acknowledging a loan (chresis) of 100 drachmas | ALD-000578 |
| PSI 4 282 | 19277 | 19277 | AD 183 | excluded | too fragmentary to show a loan (application for entry into possession of building plots; only 'danist-' and 'katoche for the debt' survive) |  |
| BGU 11 2054 | 9584 | 9584 | AD 184-192 | excluded | sale of katoikic land; 'anepidaneista' guarantee clause only |  |
| CPR 1 29 | 9859 | 9859 | AD 184 | excluded | deposit (parathēkē), not called a loan |  |
| CPR 17 2 | 17746 | 17746a | AD 184-185 | excluded | too fragmentary (only isolated words survive; no loan terms, parties or amount) |  |
| CPR 17 3 | 17749 | 17749b | AD 184 | excluded | too fragmentary |  |
| CPR 17 37 | 17824 | 17824 | AD 184-218 | excluded | too fragmentary |  |
| CPR 17 4 | 17751 | 17751a, 17751b | AD 184-185 | excluded | too fragmentary to show whether a loan or a deposit |  |
| O.Tebt. Pad. 36 | 45181 | 45181 | AD 184-216 | excluded | tax receipt (zytera / poll tax), no loan |  |
| O.Tebt. Pad. 37 | 45182 | 45182 | AD 184-216 | excluded | tax receipt (zytera / poll tax), no loan |  |
| O.Tebt. Pad. 38 | 45183 | 45183 | AD 184-216 | excluded | tax receipt (zytera / poll tax), no loan |  |
| O.Tebt. Pad. 39 | 45184 | 45184 | AD 184-217 | excluded | tax receipt (zytera / poll tax), no loan |  |
| P.Petaus 32 | 69522 | 69522 | AD 184-185 | included | acknowledgement of a loan (chresis) of 1200 drachmas | ALD-000579 |
| P.Vindob. Sijp. 12 | 13679 | 13679 | AD 184 | included | loan contract | ALD-000361 |
| P.Bon. 25 | 17181 | 17181 | AD 185 | included | loan contract (homologia, hexamartyron) | ALD-000362 |
| P.Mich. 15 707 | 21386 | 21386 | AD 185 | excluded | sale of two slaves; guarantee clause only |  |
| O.Tebt. Pad. 40 | 45185 | 45185 | AD 186 | excluded | tax receipt (zytera / poll tax), no loan |  |
| P.Amh. 2 79 | 21678 | 21678 | AD 186-187 | included | petition to the prefect: Sarapammon son of Paniscus accused of having lent in one loan 72 talents to Claudius Eutychides from grain stolen from the granaries | ALD-000580 |
| P.Flor. 1 46 | 23559 | 23559 | AD 186 | included | loan contract (copy of a bank diagraphe) | ALD-000365 |
| P.Oxy. 2 237 | 20506 | 20506 | AD 186 | included | petition of Dionysia: col. vi mentions what her father Chaeremon borrowed (ha edaneisato) and, in year 24, a loan of talents made to him (auto daneisas) to pay off Asclepiades; amounts and lenders lost | ALD-000581, ALD-000582 |
| PSI 12 1253 | 17415 | 17415 | AD 186 | included | loan contract (cheirographon) | ALD-000364 |
| SB 24 16002 | 45395 | 45395 | AD 186-190 | excluded | sale of a slave and her daughter; guarantee clause only |  |
| SB 24 16009 | 18201 | 18201 | AD 186 | excluded | deposit (parathēkē), not called a loan |  |
| SPP 22 69 | 15130 | 15130 | AD 186-187 | included | loan contract (cheirographon) | ALD-000363 |
| SB 16 13070 | 14708 | 14708 | AD 187 | excluded | cancellation/discharge (partial release of mortgaged property by the creditor) |  |
| P.Tebt. 2 396 | 13552 | 13552 | AD 188 | excluded | receipt for repayment |  |
| PSI 12 1228 | 17398 | 17398 | AD 188 | excluded | sale of a half-share of a slave; includes a receipt for repayment of a debt on hypothec of the slave (no loan contract) |  |
| P.Oxy. 3 514 | 20645 | 20645 | AD 190-191 | excluded | receipt for salary; a deleted line mentions a prochreia (advance), no loan |  |
| P.Vindob. Sal. 6 | 17289 | 17289 | AD 190 | included | loan contract (homologia, hexamartyron) | ALD-000366 |
| P.Marm. | 22477 | 22477 | AD 191 | excluded | register of sequestrated property, no loan |  |
| P.Mert. 2 78 | 21318 | 21318 | AD 191 | included | loan contract (homologia, hexamartyron) | ALD-000367 |
| P.Cair. Goodspeed 30 | 10308 | 10308 | AD 192 | excluded | private account (chreseos entries are items in an account) |  |
| P.Tebt. 2 353 | 13507 | 13507 | AD 192 | excluded | tax receipt (crown tax paid 'by advance', not a loan) |  |
| SB 6 9618 | 14270 | 14270 | AD 192 | excluded | sale (cession) of catoecic land |  |
| O.Tebt. Pad. 41 | 45186 | 45186 | AD 193-222 | excluded | tax receipt |  |
| SB 8 9906 | 14293 | 14293 | AD 193-194 | excluded | cession of catoecic land |  |
| SPP 20 16 | 18688 | 18688 | AD 193 | included | loan contract (homologia, hexamartyron) | ALD-000368 |
| O.Bodl. 2 1030 | 71717 | 71717 | AD 194 | excluded | tax receipt |  |
| P.Köln 14 576 | 697583 | 697583 | AD 194 | excluded | no loan survives in the text (labour/apprenticeship contract for a minor) |  |
| SB 10 10571 | 14329 | 14329 | AD 194 | excluded | sale of a house |  |
| SB 26 16368 | 97322 | 97322 | AD 194-223 | excluded | tax receipt |  |
| O.Tebt. Pad. 42 | 45187 | 45187 | AD 195-225 | excluded | tax receipt |  |
| P.Oxy. 71 4828 | 112443 | 112443 | AD 195 | included | loan contract (pilot) | ALD-000017 |
| SB 12 11119 | 40820 | 40820 | AD 195 | excluded | receipt for repayment of an advance (prochreia), not called a loan |  |
| CPR 7 31 | 15838 | 15838 | AD 196-197 | included | acknowledgement of an interest-bearing loan (χρῆσις ἔντοκος) repayable in wheat; 248 dr. = capital and interest together | ALD-000583 |
| P.Oxy. 66 4531 | 78603 | 78603 | AD 196 | excluded | report to the strategus on public seed advances (prochreia); no loan |  |
| P.Tebt. 2 338 | 13496 | 13496 | AD 196 | included | sitologoi report of wheat repaid by Patron for a loan (χρῆσις, restored) he had received for collectors' rates; amount lost | ALD-000584 |
| O.Claud. 3 630 | 73812 | 73812 | AD 197 | included | acknowledgement of a loan (ostracon), fragmentary | ALD-000371 |
| P.IFAO 1 12 | 21160 | 21160 | AD 197 | included | loan contract (cheirographon), fragmentary | ALD-000370 |
| P.Oxy. 10 1262 | 21775 | 21775 | AD 197 | excluded | state seed-grain loan (receipt for seed) |  |
| P.Oxy. 49 3474 | 15634 | 15634 | AD 197-198 | excluded | state seed-grain loan (application for seed) |  |
| P.Oxy. 6 910 | 20373 | 20373 | AD 197 | included | lease of land with an advance of seed wheat (ἐν προχρείᾳ) to the lessee | ALD-000585 |
| P.Bodl. 1 19 | 22577 | 22577 | AD 198 | excluded | state seed-grain grant (strategos' order to sitologoi) |  |
| P.Oxy. 47 3363 | 22473 | 22473 | AD 198-200 | excluded | lease of taxes; fragmentary mention of interest, no loan |  |
| P.Tebt. 2 397 | 13553 | 13553 | AD 198 | included | settlement/receipt cancelling an earlier loan (the debtors called δεδανεισμένοι) made by agreement of Mesore 8, year 13 of Antoninus Pius | ALD-000558 |
| P.Tebt. Wall 7 | 13652 | 13652 | AD 198-210 | excluded | receipt for repayment |  |
| O.Tebt. Pad. 43 | 45188 | 45188 | AD 199-228 | excluded | tax receipt |  |
| O.Tebt. Pad. 44 | 45189 | 45189 | AD 199-228 | excluded | tax receipt |  |
| PSI 6 683 | 13784 | 13784 | AD 199 | excluded | official correspondence on annona; treasury advance (prochreia), no loan |  |
| P.Oxy. 6 899 | 20363 | 20363 | AD 200 | excluded | no text available |  |
| P.Oxy. 6 899 | 20362 | 20362 | AD 200 | excluded | petition about cultivation of public land; the court excerpt on the verso mentioning a loan (ἐδανεισάμην) is too fragmentary (no parties or amount) |  |
| P.Oxy. 6 899 | 20364 | 20364 | AD 200 | excluded | petition about cultivation of public land; part of the same papyrus without a loan |  |
| P.Oxy. 6 899 | 20365 | 20365 | AD 200 | excluded | declaration/report of land on the verso; part of the same papyrus without a loan |  |
| P.Ryl. 2 176 | 19520 | 19520 | AD 200-210 | excluded | cancellation/discharge (repayment of a loan through a bank) |  |
| SB 6 9526 | 14250 | 14250 | AD 200 | excluded | imperial rescripts; general ruling on women borrowing, no loan transaction |  |
| CPR 1 107 | 31862 | 31862 | AD 201-250 | included | fragmentary contract with subscription 'I have lent' (δεδάνικα); parties and amount lost | ALD-000586 |
| CPR 1 144 | 31884 | 31884 | AD 201-250 | included | sale contract; subscription refers to the rights of a loan (τὸ δίκαιον τοῦ δανείου) of [...]200 drachmas; thousands lost | ALD-000587 |
| CPR 1 203 | 31904 | 31904 | AD 201-300 | included | sale contract; buyer's subscription refers to the rights of a loan (τὸ δίκαιον τοῦ δανείου) of [2,]200 drachmas | ALD-000588 |
| CPR 1 82 | 31847 | 31847 | AD 201-225 | included | sale contract mentions a loan made by Aurelia Anabasis to the late father of the other party (ἐδάνισεν); amount lost | ALD-000589 |
| CPR 1 88 | 31849 | 31849 | AD 201-250 | included | house sale; part of the price paid to the seller's lender (δανειστής); amount lost | ALD-000590 |
| O.Mich. 1 148 | 41907 | 41907 | AD 201-300 | excluded | acknowledgement of debt in an account (not called a loan) |  |
| O.Tebt. Pad. 53 | 45198 | 45198 | AD 201-250 | excluded | tax receipt; no loan |  |
| P.Berl. Bibl. 24 | 31082 | 31082 | AD 201-300 | excluded | too fragmentary |  |
| P.Bingen 75 | 78043 | 78043 | AD 201-225 | excluded | slave sale; ἀνεπιδάνειστος clause only |  |
| P.Brookl. 18 | 30804 | 30804 | AD 201-300 | excluded | loan in kind in a letter |  |
| P.Cair. Isid. 132 | 30621 | 30621 | AD 201-300 | included | money loan mentioned in a private letter | ALD-000374 |
| P.Erl. 63 | 31401 | 31401 | AD 201-300 | excluded | settlement of a loan by cession of slaves; amount lost (not a loan contract) |  |
| P.Fuad I Univ. 41 | 31442 | 31442 | AD 201-300 | excluded | too fragmentary (council document mentioning a loan; parties and amount lost) |  |
| P.Fuad I Univ. App. II 118 | 31452 | 31452 | AD 201-300 | excluded | account; too fragmentary to show a loan |  |
| P.Hamb. 4 280 | 78290 | 78290 | AD 201-300 | excluded | application for a guardian (tutor ad actum) for an intended loan; not a loan contract, amount lost |  |
| P.Iand. 4 60 | 31281 | 31281 | AD 201-400 | excluded | too fragmentary (formula only, no loan survives) |  |
| P.Iand. 6 98 | 30600 | 30600 | AD 201-300 | excluded | private letter; hypothetical 'if you gave it to me as a loan'; no loan shown |  |
| P.Lips. 1 12 | 31906 | 31906 | AD 201-400 | included | loan contract (cheirograph) | ALD-000379 |
| P.Mich. 8 512 | 30512 | 30512 | AD 201-225 | included | letter mentions a loan (δάνειον) of which the writer is to receive a third; parties and amount not stated | ALD-000591 |
| P.NYU 2 24 | 121972 | 121972 | AD 201-300 | included | loan contract (money and barley), fragmentary | ALD-000372, ALD-000451 |
| P.NYU 2 50 | 121957 | 121957 | AD 201-400 | excluded | account of wine expenditure |  |
| P.Oslo 3 185 | 31645 | 31645 | AD 201-300 | excluded | too fragmentary |  |
| P.Oxf. 15 | 30579 | 30579 | AD 201-300 | excluded | settlement concerning an inheritance/dowry; ἀπὸ χρήσεως = 'used' (of clothing); no loan |  |
| P.Oxy. 12 1473 | 21874 | 21874 | AD 201 | included | marriage contract securing to Horion the sums he lent (ηὐχρήστησεν) Apollonarion in year 6, 2 talents 3,000 dr. with interest | ALD-000592 |
| P.Oxy. 12 1501 | 31750 | 31750 | AD 201-225 | excluded | receipt for repayment |  |
| P.Oxy. 14 1665 | 31776 | 31776 | AD 201-300 | included | letter: writer borrowed 40 metretai of oil from friends (ἔσχον ἐν χρήσει) to be returned | ALD-000593 |
| P.Oxy. 14 1726 | 31796 | 31796 | AD 201-225 | excluded | register of contracts (fees); not loan contracts |  |
| P.Oxy. 31 2599 | 30439 | 30439 | AD 201-400 | excluded | private letter; object given 'for use' (εἰς χρῆσιν) to be made into something or paid for; not a loan |  |
| P.Oxy. 44 3185 | 30213 | 30213 | AD 201-300 | excluded | order to pay lead (advance/prochreia of material), not a loan |  |
| P.Oxy. 51 3616 | 30071 | 30071 | AD 201-300 | excluded | wanted notice for a runaway slave |  |
| P.Oxy. 55 3813 | 31914 | 31914 | AD 201-400 | excluded | private letter; mentions creditors (δανεισταί) but no loan transaction |  |
| P.Oxy. 67 4625 | 78664 | 78664 | AD 201-300 | excluded | no loan clearly stated (letter asking payment of two minas) |  |
| P.Oxy. 8 1158 | 31724 | 31724 | AD 201-300 | excluded | private letter; four talents Aretion received from the writers, not called a loan |  |
| P.Strasb. 7 670 | 30369 | 30369 | AD 201-300 | excluded | slave sale (ἀνεπιδάνειστον clause only); no loan |  |
| P.Strasb. 8 748 | 30360 | 30360 | AD 201-300 | included | loan contract, fragmentary | ALD-000373 |
| P.Strasb. 9 898 | 30082 | 30082 | AD 201-300 | excluded | too fragmentary (mortgage clauses only; no loan wording, parties or amount survive) |  |
| P.Tebt. 2 443 | 31369 | 31369b | AD 201-300 | excluded | no text available |  |
| P.Vars. 37 | 30936 | 30936 | AD 201-300 | excluded | too fragmentary |  |
| P.Vars. 39 | 30937 | 30937 | AD 201-300 | excluded | no text available |  |
| P.Vindob. Sijp. 27 | 30478 | 30478 | AD 201-400 | excluded | private letter; use (χρῆσις) of an animal; not a loan |  |
| PSI 13 1328 | 17250 | 17250 | AD 201 | included | loan of money mentioned in a petition (enforcement of a cheirographon) | ALD-000369 |
| PSI 15 1556 | 30315 | 30315 | AD 201-300 | excluded | letter asking whether to lend money; loan not shown to be made |  |
| PSI 17 1707 | 786125 | 786125 | AD 201-300 | excluded | account |  |
| PSI 3 198 | 31221 | 31221 | AD 201-300 | excluded | receipt for repayment |  |
| PSI 6 700 | 31095 | 31095 | AD 201-300 | included | loan contract | ALD-000377 |
| PSI 6 701 | 31096 | 31096 | AD 201-300 | included | loan contract | ALD-000378 |
| PSI Com. 11 12 | 220378 | 220378 | AD 201-250 | excluded | deposit (parathēkē), not called a loan |  |
| SB 10 10569 | 30642 | 30642 | AD 201-300 | excluded | oracle question; no loan |  |
| SB 14 11598 | 30851 | 30851 | AD 201-300 | included | loan contract (cheirograph) | ALD-000375 |
| SB 16 12308 | 30268 | 30268 | AD 201-300 | excluded | account (moneylender's ledger) |  |
| SB 18 14016 | 30990 | 30990 | AD 201-300 | excluded | too fragmentary |  |
| SB 22 15327 | 43179 | 43179 | AD 201-400 | included | loan contract | ALD-000380 |
| SB 22 15738 | 79202 | 79202 | AD 201-202 | excluded | receipt for repayment |  |
| SB 24 15881 | 79221 | 79221 | AD 201-400 | excluded | deposit (parathēkē), not called a loan |  |
| SB 24 15965 | 45381 | 45381 | AD 201-400 | excluded | land cession (sale); ἀνεπιδάνειστος clause only |  |
| SB 26 16427 | 97334 | 97334 | AD 201-300 | excluded | state seed-grain application |  |
| SPP 20 23 | 31022 | 31022 | AD 201-300 | included | loan contract (cheirograph; cancelled draft) | ALD-000376 |
| P.Amst. 1 72 | 15496 | 15496 | AD 202-212 | excluded | list of names; no loan |  |
| P.Lond. 2 348 | 11728 | 11728 | AD 202-203 | excluded | receipt for repayment (with release of mortgage) |  |
| P.Oxy. 4 705 | 20404 | 20404 | AD 202 | excluded | petitions to the emperors about an endowment whose capital is to be lent out; no individual loan transaction |  |
| P.Giss. 1 48 | 19442 | 19442 | AD 203-204 | excluded | official letter on surcharges; no loan |  |
| P.Oxy. 1 56 | 20718 | 20718 | AD 203 | excluded | application for a guardian (kyrios) for an intended loan of 6,000 drachmas at interest; not a loan contract (as P.Hamb. 4 270) |  |
| SB 6 9201 | 17870 | 17870 | AD 203 | excluded | receipt for repayment |  |
| P.Flor. 1 62 | 23572 | 23572 | AD 204 | excluded | too fragmentary (end of a cheirograph; no loan terms survive) |  |
| SB 12 11228 | 16400 | 16400 | AD 204 | included | antichretic loan (loan with lease of land) | ALD-000381, ALD-000453 |
| SB 16 13030 | 16347 | 16347 | AD 205 | included | loan contract (cheirograph) | ALD-000382 |
| SPP 20 18 | 18690 | 18690 | AD 205 | excluded | receipt for (partial) repayment |  |
| P.Fuad I Univ. App. II 290 | 28685 | 28685 | AD 206-211 | excluded | too fragmentary (petition to the prefect Subatianus Aquila; only 'having received on loan' and 'cheirographa' survive, no amount or parties) |  |
| P.Diog. 16 | 10692 | 10692 | AD 207 | excluded | receipt for repayment (with application for a guardian); earlier paramone loan of 654 drachmas, service of a slave in lieu of interest, recorded only as repaid |  |
| BGU 3 990 | 9431 | 9431 | AD 208 | excluded | advance payment (price for cutting and carrying hay, 17 artabas of wheat), not called a loan |  |
| P.Oxy. 22 2341 | 22213 | 22213 | AD 208 | excluded | court proceedings (no loan) |  |
| SPP 22 41 | 15109 | 15109 | AD 208 | included | loan contract | ALD-000383 |
| P.Hamb. 1 14 | 11372 | 11372 | AD 209-210 | included | notice of intended sale of a mortgaged house share; names a mortgage loan of 1,500 dr. and a further unsecured loan (κατὰ ψιλὸν δάνειον) of 300 dr. from the same lender (δανιστής), interest at 1 drachma | ALD-000595, ALD-000596 |
| P.Hamb. 1 15 | 11373 | 11373 | AD 209 | excluded | sale of a house share (price paid to the sellers' creditor; no loan described) |  |
| P.Oxy. 7 1039 | 20334 | 20334 | AD 210 | excluded | deposit (parathēkē), not called a loan |  |
| SB 26 16423 | 97357 | 97357 | AD 210-211 | included | loan contract | ALD-000384 |
| BGU 1 98 | 9137 | 9137 | AD 211 | excluded | petition; guardian failed to sell or lend out grain (no loan made) |  |
| P.Lond. 3 932 | 22718 | 22718 | AD 211 | excluded | renunciation of inheritance; father's debts (δάνεια) mentioned only generically, no specific loan |  |
| P.Münch. 3 84 | 12476 | 12476 | AD 211 | excluded | sale contract |  |
| SB 18 13858 | 18344 | 18344 | AD 211-217 | included | notice of cession of a mortgage loan made in Phamenoth, year 14 of Severus and Caracalla | ALD-000594 |
| SB 28 17258 | 17856 | 17856 | AD 211 | excluded | application for a state seed-grain loan |  |
| BGU 2 637 | 9279 | 9279 | AD 212 | excluded | deposit (under the law of deposits), not called a loan in the surviving text |  |
| BGU 7 1652 | 9532 | 9532 | AD 212 | included | loan contract (fragmentary) | ALD-000387 |
| BGU 7 1653 | 9533 | 9533 | AD 212 | excluded | deposit (parathēkē), not called a loan |  |
| O.Strasb. 1 251 | 75848 | 75848 | AD 212 | excluded | tax receipt |  |
| O.Tebt. Pad. 46 | 45191 | 45191 | AD 212 | excluded | tax receipt |  |
| P.Bodl. 1 42 | 10262 | 10262 | AD 212-216 | included | loan contract | ALD-000385 |
| P.Harr. 1 66 | 21060 | 21060 | AD 212 | excluded | receipt for interest and partial repayment (application to register it); earlier loan of 3000 drachmas at 4 obols, year 10 of Antoninus Pius, through the grapheion of Sinary, recorded only as being repaid |  |
| P.Lond. 3 1164 | 22815 | 22815 | AD 212 | excluded | discharge/settlement of a loan debt (receipt through a bank) |  |
| P.Lond. 3 1164 | 22818 | 22818 | AD 212 | excluded | receipt for repayment and discharge of a loan (mortgage of a half house) |  |
| P.Lond. 3 1164 | 22817 | 22817 | AD 212 | excluded | sale of a house share |  |
| P.Lond. 3 1164 b | 22813 | 22813 | AD 212 | included | bank receipt for repayment that names the loan repaid (ἐδάνεισεν, Phamenoth 9 of the current year, at Memphis) | ALD-000597 |
| P.Oxy. 1 70 | 20730 | 20730 | AD 212-213 | included | money loan mentioned in a petition | ALD-000386 |
| P.Strasb. 5 336 | 13280 | 13280 | AD 212-213 | excluded | palm-grove lease; prochreia is advance payment of rent, not a loan |  |
| P.Strasb. 5 336 | 13281 | 13281 | AD 212-213 | excluded | palm-grove lease (duplicate of HGV 13280); prochreia is advance payment of rent, not a loan |  |
| SB 20 14957 | 14905 | 14905 | AD 212 | excluded | tax receipt |  |
| BGU 7 1656 | 9536 | 9536 | AD 213 | excluded | receipt for repayment |  |
| P.Diog. 27 | 10699 | 10699 | AD 213 | included | loan contract | ALD-000388, ALD-000459 |
| P.Oxy. 70 4772 | 92163 | 92163 | AD 213-214 | included | application to register a loan, with the loan's terms | ALD-000390 |
| P.Oxy. Hels. 23 | 15807 | 15807 | AD 213 | excluded | petition; camel driver's prochreia (wage advance) not called a loan, no amount |  |
| SB 14 11705 | 14507 | 14507 | AD 213 | included | copy of a mortgage loan contract | ALD-000389 |
| P.Mert. 1 25 | 21299 | 21299 | AD 214 | included | loan contract | ALD-000391 |
| P.Ryl. 2 337 | 12992 | 12992 | AD 214-216 | excluded | no text available |  |
| SB 10 10725 | 17430 | 17430 | AD 214 | excluded | letter; 'loan of the blank rolls' mentioned without parties or amount; too unclear |  |
| SB 6 9432 | 14228 | 14228 | AD 214 | excluded | state seed-grain loan receipt |  |
| SB 6 9432 | 14229 | 14229 | AD 214 | excluded | state seed-grain loan receipt |  |
| BGU 11 2045 | 9579 | 9579 | AD 215 | included | loan contract | ALD-000394 |
| BGU 2 362 | 9139 | 9139 | AD 215-216 | excluded | temple account (BGU 2 362); loans appear only as account entries |  |
| O.Tebt. Pad. 18 | 45164 | 45164 | AD 215 | excluded | tax receipt |  |
| O.Tebt. Pad. 19 | 45165 | 45165 | AD 215 | excluded | tax receipt |  |
| P.Giss. 1 40 | 19436 | 19436 | AD 215 | excluded | imperial edicts (no loan) |  |
| ZPE 208 (2018) 182 | 765549 | 765549 | AD 215 | included | loan acknowledgement in kind | ALD-000393 |
| O.Tebt. Pad. 20 | 45166 | 45166 | AD 216 | excluded | tax receipt |  |
| O.Tebt. Pad. 22 | 45168 | 45168 | AD 216 | excluded | tax receipt |  |
| P.Louvre 1 19 | 11831 | 11831 | AD 216 | included | loan contract | ALD-000395, ALD-000450 |
| P.Oxy. 12 1474 | 21875 | 21875 | AD 216 | included | application to register a loan, with a copy of the loan contract and its terms | ALD-000392 |
| P.Tebt. 2 333 | 13492 | 13492 | AD 216 | excluded | petition about missing persons (no loan) |  |
| BGU 11 2048 | 16910 | 16910 | AD 217 | included | loan acknowledgement in kind (wheat) | ALD-000396 |
| BGU 2 614 | 9264 | 9264 | AD 217 | included | petition: petitioner advanced (προχρεία, προέχρησα) 4,000 drachmas from his own funds at the request of his late wife's mother Longinia alias Thermutharion, and seeks repayment from her heirs | ALD-000598 |
| CPR 17 11 | 17772 | 17772c | AD 217-218 | excluded | too fragmentary to show it is a loan (CPR 17 11, lines 11-19: names, a bank payment (diagraphe) and a total of 940 drachmas survive, no loan wording) |  |
| CPR 17 11 | 17772 | 17772f | AD 217-218 | excluded | too fragmentary to show it is a loan (CPR 17 11, lines 29-35: address to the banker Aurelius Zoilus, names and 'silver drachmas' survive, amount and loan wording lost) |  |
| CPR 17 11 | 17772 | 17772g | AD 217-218 | included | loan contract (cheirograph) | ALD-000397 |
| CPR 17 11 | 17772 | 17772h | AD 217-218 | included | loan acknowledgement (cheirograph through a bank) | ALD-000398 |
| CPR 17 12 | 17774 | 17774a | AD 217-218 | excluded | receipt for repayment (of interest/part of a cheirograph debt) |  |
| CPR 17 12 | 17774 | 17774b | AD 217-218 | excluded | receipt for repayment and release of a debt (with interest) arising from a bank payment |  |
| CPR 17 13 | 17775 | 17775a | AD 217 | included | loan contract (end only) | ALD-000399, ALD-000474 |
| CPR 17 13 | 17775 | 17775b | AD 217-218 | included | loan contract (cheirograph through a bank) | ALD-000400 |
| CPR 17 13 | 17775 | 17775c | AD 217-218 | included | loan contract (cheirograph through a bank) | ALD-000401 |
| CPR 17 13 | 17775 | 17775d | AD 217-218 | included | loan contract (cheirograph through a bank) | ALD-000402 |
| CPR 17 13 | 17775 | 17775e | AD 217-218 | excluded | too fragmentary to show it is a loan (CPR 17 13, lines 27-34: a party aged 38, a payment on behalf of Aurelia Tsenpachnoumis and sums of 200, 600 and 86 drachmas survive, no loan wording) |  |
| CPR 17 14 | 17781 | 17781b | AD 217-218 | excluded | too fragmentary to show it is a loan (CPR 17 14, lines 9-13: several Aurelii from Panopolis and a total of 2320 drachmas survive; the repayment clause is restored) |  |
| CPR 17 15 | 17784 | 17784a | AD 217 | excluded | receipt for repayment |  |
| CPR 17 16 | 17786 | 17786a | AD 217-218 | excluded | receipt for repayment (discharge of a debt) |  |
| CPR 17 16 | 17786 | 17786b | AD 217-218 | excluded | too fragmentary (CPR 17 16, lines 6-9: only names and the address to the banker Aurelius Zoilus survive) |  |
| CPR 17 17 | 17792 | 17792a | AD 217 | excluded | too fragmentary to show it is a loan (CPR 17 17, lines 1-9: address to the banker, '[...]thousand two hundred' drachmas, a figure 208 and a damaged word for interest survive) |  |
| CPR 17 17 | 17792 | 17792b | AD 217 | included | loan contract (cheirograph through a bank) | ALD-000403 |
| CPR 17 17 | 17792 | 17792c | AD 217-218 | included | loan contract (cheirograph through a bank) | ALD-000404 |
| CPR 17 17 | 17792 | 17792d | AD 217-218 | excluded | too fragmentary to show it is a loan (CPR 17 17, lines 21-29: address to the banker, a sum of '[...]thousand four hundred and eighty' drachmas, a bank instruction (diastole) and a subscription by Aurelius Artemidorus for an illiterate party survive; no clear loan wording) |  |
| CPR 17 17 | 17792 | 17792f | AD 217 | included | bank loan contract (copy among several on one sheet) | ALD-000405 |
| CPR 17 18 | 17795 | 17795b | AD 217-218 | included | loan contract with mortgage (fragmentary) | ALD-000406 |
| CPR 17 19 | 17797 | 17797a, 17797b, 17797c | AD 217-218 | excluded | too fragmentary |  |
| CPR 17 23 | 17804 | 17804b | AD 217-218 | included | bank loan contract | ALD-000407 |
| CPR 17 25 | 17808 | 17808b | AD 217-218 | included | bank loan contract (fragmentary) | ALD-000408 |
| CPR 17 26 | 17810 | 17810a, 17810b | AD 217-218 | excluded | too fragmentary |  |
| CPR 17 27 | 17812 | 17812a | AD 217-218 | included | bank loan contract (fragmentary) | ALD-000409 |
| CPR 17 27 | 17812 | 17812b | AD 217-218 | included | bank loan contract (fragmentary) | ALD-000410 |
| CPR 17 43 | 17833 | 17833a, 17833b | AD 217-218 | excluded | too fragmentary |  |
| O.Tebt. Pad. 25 | 45171 | 45171 | AD 217 | excluded | tax receipt (laographia); no loan |  |
| O.Tebt. Pad. 27 | 45173 | 45173 | AD 217 | excluded | tax receipt (laographia); no loan |  |
| O.Tebt. Pad. 47 | 45192 | 45192 | AD 217-218 | excluded | tax receipt (zytera); no loan |  |
| P.Flor. 1 47 | 23560 | 23560 | AD 217 | excluded | exchange of real property (χρῆσις = use of rooms); no loan |  |
| P.Flor. 1 47 | 23561 | 23561 | AD 217 | excluded | second copy of the same property exchange; no loan |  |
| P.Harr. 1 69 | 21062 | 21062 | AD 217 | excluded | petition about a priest's estate; no loan (προχρονοῦντες = prior claimants) |  |
| SB 20 14958 | 14906 | 14906 | AD 217 | excluded | tax receipt (laographia); no loan |  |
| BGU 7 1650 | 9531 | 9531 | AD 218 | excluded | receipt for repayment |  |
| O.Tebt. Pad. 48 | 45193 | 45193 | AD 218-219 | excluded | tax receipt (zytera); no loan |  |
| P.Leit. 7 | 23655 | 23655 | AD 219-224 | included | petition: petitioner was forced to give the cooks 1,000 drachmas as an advance (εἰς προχρείας λόγον), to be credited back to him in his term of office | ALD-000599 |
| P.Louvre 3 193 | 140211 | 140211 | AD 219-221 | included | loan contract (cheirographon) | ALD-000412 |
| P.Princ. 3 144 | 12848 | 12848 | AD 219-240 | included | antichretic loan contract | ALD-000411 |
| SB 6 9432 | 14230 | 14230 | AD 220-224 | excluded | state seed-grain loan (receipt to sitologoi) |  |
| BGU 4 1015 | 18490 | 18490 | AD 221-222 | included | loan contract in kind | ALD-000414 |
| P.Harr. 2 227 | 11454 | 11454 | AD 221 | excluded | agreement to share expenses (no loan recorded) |  |
| P.Mich. 18 792 | 22197 | 22197 | AD 221 | included | receipt of an advance (προχρεία) under a vineyard irrigation lease: cattle valued at 1,500 drachmas, and the first instalment (500 dr.) of a 1,500-drachma money advance, to be repaid according to the lease; one row per part | ALD-000600, ALD-000601 |
| SB 4 7467 | 14023 | 14023 | AD 221 | included | loan contract (cheirographon) | ALD-000413 |
| ZPE 191 (2014) 251 | 371975 | 371975 | AD 221 | excluded | another copy of P.Mich. 18 792; loans recorded under HGV 22197 |  |
| BGU 2 667 | 9300 | 9300 | AD 222 | excluded | house sale (ἀνεπιδάνειστος clause only); no loan |  |
| P.Diog. 30 | 10702 | 10702 | AD 222-235 | included | loan contract in kind | ALD-000415 |
| P.Flor. 1 48 | 23562 | 23562 | AD 222 | excluded | receipt for repayment |  |
| P.Oxy. 14 1630 | 21941 | 21941 | AD 222-226 | included | lease at increased rent: the lessee Heron had given an advance (προχρεία) to the cultivators Hermogenes son of Petenephotes and Isidorus, which he tried to recover (with other expenses, 3 talents 400 dr. in all; advance alone not stated) | ALD-000602 |
| P.Oxy. 14 1634 | 21946 | 21946 | AD 222 | included | sale of a mortgaged house: part of the price (2 talents 3,600 dr.) offset against a debt owed to the buyer under a security of year 3, Thoth, which the text calls a loan (δεδανεικέναι, δανείου) | ALD-000603 |
| P.Prag. 2 163 | 21617 | 21617 | AD 222 | excluded | too fragmentary (only a surety clause survives) |  |
| P.Vet. Aelii 13 | 14679 | 14679 | AD 222-255 | included | application for demosiosis of a receipt: Aurelius Sarapodorus acknowledges repayment of the money he lent (ἐδάνισα) to Aelius Syrion by two cheirographa; two earlier loans, amounts lost | ALD-000604, ALD-000605 |
| SB 22 15326 | 43178 | 43178 | AD 222-235 | excluded | cession of catoecic land (ἀνεπιδάνειστος clause only); no loan |  |
| BGU 11 2118 | 16920 | 16920 | AD 223 | included | loan contract (cheirographon) | ALD-000417 |
| P.Oxy. 22 2350 | 22221 | 22221 | AD 223 | included | loan contract in kind (cheirographon) | ALD-000418 |
| SB 24 15968 | 23257 | 23257 | AD 223 | excluded | tax receipts (payments ἀπὸ προχρείας); no loan |  |
| SB 6 9155 | 14118 | 14118 | AD 223 | included | loan contract in kind | ALD-000416 |
| P.Bub. 1 2 | 23399 | 23399a | AD 224 | excluded | official correspondence/declarations; no loan |  |
| P.Bub. 1 2 | 23399 | 23399b | AD 224 | excluded | list of names in the same papyrus; no loan |  |
| P.Bub. 1 2 | 23399 | 23399c | AD 224 | excluded | official correspondence on purchases of state property; no loan |  |
| P.Bub. 1 3 | 45299 | 45299 | AD 224 | excluded | official correspondence of the dioiketes; no loan |  |
| P.Mich. 11 606 | 12283 | 12283 | AD 224 | included | loan contract | ALD-000419 |
| P.Oxy. 22 2350 | 22220 | 22220 | AD 224 | excluded | acknowledgement of debt for rent arrears, not a loan |  |
| P.Oxy. 6 988 | 20397 | 20397 | AD 224 | excluded | no text available |  |
| P.Pintaudi 32 | 170023 | 170023 | AD 224 | excluded | deposit (parathēkē), not called a loan |  |
| SB 24 16172 | 20396 | 20396 | AD 224 | included | loan contract in kind (cheirographon, two copies) | ALD-000420, ALD-000466 |
| P.Col. 10 277 | 22272 | 22272 | AD 225 | included | loan contract in kind | ALD-000421 |
| P.Hamb. 1 19 | 21042 | 21042 | AD 225 | excluded | state seed-grain application |  |
| P.Lond. 3 939 | 22723 | 22723 | AD 225 | included | loan contract (cheirographon) | ALD-000422 |
| P.Oxy. 38 2848 | 22235 | 22235 | AD 225 | excluded | extract from property register |  |
| P.Oxy. 7 1040 | 20335 | 20335 | AD 225 | included | loan contract (pilot) | ALD-000018 |
| P.Vindob. Tandem 23 | 15461 | 15461 | AD 225 | included | loan of 400 drachmas at 1 drachma per mina per month and of vegetable seed (amount lost), repayable in Epeiph year 5 (two copies of the cheirographon); one row per part | ALD-000606, ALD-000607 |
| BGU 3 989 | 20105 | 20105 | AD 226 | included | loan contract (six-witness contract) | ALD-000423 |
| CPR 1 3 | 31841 | 31841 | AD 226-275 | included | sale of a third of a house: the price of 2,000 drachmas was paid through the bank to the seller's creditor (δανιστής) Aurelius Heraclius alias Artemidorus; earlier loan, amount not stated | ALD-000608 |
| P.Euphr. 17 | 44675 | 44675 | AD 226-275 | included | money debt with interest mentioned in a private letter | ALD-000425 |
| P.Flor. 1 24 | 32135 | 32135 | AD 226-275 | excluded | register of contracts |  |
| P.Flor. 1 25 | 32137 | 32137 | AD 226-275 | excluded | no text available |  |
| P.Michael. 18 | 31558 | 31558 | AD 226-275 | excluded | inventory/account of goods (εἰς χρῆσιν = for use); no loan |  |
| P.Strasb. 5 391 | 31052 | 31052 | AD 226-275 | included | loan contract (fragmentary) | ALD-000424 |
| PSI Com. 9 5 | 140524 | 140524 | AD 226-275 | excluded | receipt for repayment (discharge of a loan) |  |
| O.Wilck. 282 | 76847 | 76847 | AD 227 | excluded | receipt for repayment |  |
| P.Dura 26 | 17223 | 17223 | AD 227 | excluded | sale of land (ἀνεπιδάνειστον clause only); no loan |  |
| P.Gen. 1 43 | 11237 | 11237 | AD 227 | included | loan contract (money and barley) | ALD-000426, ALD-000470 |
| P.Lond. 3 943 | 22727 | 22727 | AD 227 | excluded | deposit (parathēkē), not called a loan |  |
| P.Lond. 3 947 | 22732 | 22732 | AD 227 | excluded | no text available |  |
| P.Oxy. 12 1443 | 21846 | 21846 | AD 227 | excluded | sitologi's account of grain receipts (δανείων = repayments of seed loans) |  |
| P.Oxy. 82 5320 | 702461 | 702461 | AD 227-228 | excluded | lease of irrigation works; livestock handed over ἐν προχρείᾳ with valuation (inventory of the lease, not a loan; fragmentary) |  |
| P.Oxy. 7 1031 | 20327 | 20327 | AD 228 | excluded | application for state seed grain |  |
| P.Strasb. 8 732 | 16464 | 16464 | AD 228-229 | included | loan contract with hypallagma | ALD-000427 |
| PSI 15 1547 | 114325 | 114325 | AD 229 | excluded | praktor's report of receipts (προχρεία = collector's advance in an account) |  |
| SB 1 4370 | 23124 | 23124 | AD 229 | included | loan contract on mortgage (agoranomic) | ALD-000428 |
| SPP 20 30 | 15018 | 15018 | AD 230 | excluded | receipt for repayment |  |
| P.Mil. Vogl. 4 243 | 21434 | 21434 | AD 231-263 | included | loan contract (chresis) | ALD-000437 |
| P.Oxy. 67 4596 | 78638 | 78638 | AD 232-264 | included | apprenticeship contract with advance (προχρεία) of 400 dr., interest-free, repayable after the term | ALD-000609 |
| SPP 20 34 | 18699 | 18699 | AD 232 | excluded | state seed-grain application |  |
| BGU 7 1658 | 9538 | 9538 | AD 234 | excluded | receipt for repayment |  |
| P.Fay. 90 | 10933 | 10933 | AD 234 | included | loan contract (vegetable seed) | ALD-000429 |
| P.Dura 126 | 44860 | 44860 | AD 235 | excluded | court proceedings |  |
| PSI 7 733 | 17646 | 17646 | AD 235 | excluded | praktor's reports of receipts (accounts) |  |
| P.Nekr. 1 | 22582 | 22582 | AD 237 | excluded | no text available |  |
| SPP 20 45 | 18703 | 18703 | AD 237 | excluded | deposit (parathēkē), not called a loan |  |
| SPP 20 51 | 15023 | 15023 | AD 238 | included | loan contract (wheat) | ALD-000430 |
| P.Flor. 1 21 | 10948 | 10948 | AD 239 | excluded | no text available |  |
| P.Lips. 1 10 | 22330 | 22330 | AD 240 | included | application to register a mortgage loan cheirographon of 1 talent 2,000 dr. (copy included); later 4,000 dr. cheirographon not called a loan | ALD-000576 |
| P.Oxy. 61 4117 | 21619 | 21619 | AD 240 | excluded | writing exercise / draft, not a real loan |  |
| P.Euphr. 14 | 44672 | 44672 | AD 241 | excluded | cancellation of a loan |  |
| P.Hamb. 1 55 | 11401 | 11401 | AD 241 | included | loan contract (wheat, agoranomic) | ALD-000431 |
| P.Vindob. Tandem 11 | 15460 | 15460a | AD 241-242 | excluded | receipt of state seed grain (seed loans to farmers) |  |
| P.Vindob. Tandem 11 | 15460 | 15460b | AD 241-242 | excluded | receipt of state seed grain (seed loans to farmers) |  |
| P.Euphr. 13 | 44671 | 44671 | AD 243 | included | mortgage loan with antichresis | ALD-000432 |
| BGU 1 253 | 9009 | 9009 | AD 244-248 | excluded | house lease (χρῆσις = use) |  |
| P.Euphr. 2 | 23922 | 23922 | AD 244-250 | included | petition mentioning the female creditor (δανείστρια) of the petitioner's father, to whom the vineyard is pledged | ALD-000610 |
| PSI 12 1238 | 13866 | 13866 | AD 244 | excluded | receipt for repayment and cancellation of a mortgage |  |
| P.Ryl. 2 177 | 19521 | 19521 | AD 246 | included | loan contract on mortgage (hypallagma) | ALD-000434 |
| PSI 9 1068 | 17476 | 17476 | AD 246 | included | loan contract (money) | ALD-000433 |
| P.Lips. 1 11 | 22331 | 22331 | AD 247 | included | loan contract (cheirographon) | ALD-000435 |
| P.Oxy. 12 1418 | 21826 | 21826 | AD 247 | excluded | application to the council about liturgies (προχρεία of gymnasiarchy days, not a loan) |  |
| P.Rainer Cent. 69 | 15419 | 15419 | AD 248 | excluded | receipt for repayment and cancellation of a loan |  |
| P.Lond. 3 1157 | 22808 | 22808 | AD 249 | excluded | model petition with placeholders (τινι, ποσάς): no actual loan |  |
| SB 5 7634 | 17992 | 17992 | AD 249 | excluded | cancellation of loan (application to annul a loan contract after repayment) |  |
| SB 5 7696 | 14034 | 14034 | AD 249 | excluded | court proceedings |  |
| SB 18 13974 | 14784 | 14784 | AD 250 | included | application to register (demosiosis) a loan, with copy of the contract | ALD-000611 |
| P.Oxy. 20 2280 | 30491 | 30491 | AD 251-300 | excluded | court proceedings |  |
| P.Gen. 1 9 | 23600 | 23600a | AD 252 | included | loan contract (money and vegetable seed) | ALD-000436, ALD-000478 |
| P.Gen. 1 9 | 23600 | 23600b | AD 252 | excluded | no text available (second HGV entry for the same papyrus, P.Gen. 1 9; recorded under 23600a) |  |
| P.Oxy. 14 1640 | 21950 | 21950 | AD 252 | included | loan contract (pilot) | ALD-000019 |
| P.Flor. 2 215 | 11088 | 11088 | AD 253 | excluded | private letter, no loan |  |
| BGU 3 745 | 20060 | 20060 | AD 254-268 | excluded | too fragmentary (creditors and debts in general terms) |  |
| SPP 20 13 | 15009 | 15009 | AD 254 | excluded | receipt for repayment |  |
| BGU 1 14 | 20191 | 20191 | AD 255 | excluded | estate accounts (advances ἐν προχρείᾳ as expense entries) |  |
| P.Prag. 3 221 | 130546 | 130546 | AD 255 | excluded | accounts of expenses |  |
| P.Oxy. 43 3112 | 15990 | 15990 | AD 258 | excluded | too fragmentary |  |
| P.Oxy. 43 3134 | 16012 | 16012 | AD 258-259 | excluded | deposit (parathēkē), not called a loan |  |
| P.Oxy. 64 4439 | 23662 | 23662 | AD 258-259 | included | loan contract (pilot) | ALD-000020 |
| BASP 57 (2020) 72 | 874412 | 874412 | AD 260 | excluded | receipt for repayment |  |
| P.Athen. 56 | 17623 | 17623 | AD 260 | excluded | receipt for repayment |  |
| P.Gen. 1 44 | 11238 | 11238 | AD 260 | excluded | application for parathesis of a purchase; price goes to repay a creditor (δανειστής) of unnamed borrower, loan not described |  |
| P.Lond. 3 954 | 22747 | 22747 | AD 260 | excluded | lease of a plot (χρῆσις = use) |  |
| P.Oxy. 12 1527 | 21901 | 21901 | AD 261-262 | excluded | account of grain arrears |  |
| BGU 7 1649 | 9530 | 9530 | AD 264 | included | loan contract in kind (cheirographon) | ALD-000438 |
| P.Oxy. 31 2586 | 16900 | 16900 | AD 264 | included | apprenticeship contract with advance (προχρεία) of 400 dr., repayable at end of term | ALD-000612 |
| P.Nekr. 17 | 22626 | 22626 | AD 265 | excluded | receipt for repayment (copy) |  |
| CPR 35 35 | 22973 | 22973 | AD 266 | excluded | request to the council for an advance (prochreia) from city funds for buying timber; public advance, not a loan |  |
| SPP 5 23 | 22940 | 22940 | AD 266-268 | excluded | council proceedings, fragmentary (a loan from city funds mentioned) |  |
| PSI 4 295 | 19282 | 19282 | AD 268-269 | included | receipt for payment of the rest of capital and interest of an earlier loan (ἐδάνισεν κατὰ δάνιον) to the addressee's half-brother Heraclides; lender's name and amount lost | ALD-000613 |
| P.Col. 10 280 | 22273 | 22273 | AD 269-277 | included | advance loan (prochreia) in a vineyard lease: lessees acknowledge 1,200 drachmas on account, the rest in monthly instalments, from the prochreia for irrigation; total not certainly preserved | ALD-000614 |
| P.Erl. 101 | 20958 | 20958 | AD 269-270 | excluded | estate account (wheat ἐν χρήσει within an account) |  |
| P.Ryl. 2 117 | 19505 | 19505 | AD 269 | excluded | petition renouncing an inheritance; a man only claims to be the deceased's creditor (δανιστής), no loan specified |  |
| P.Fouad 1 52 | 20994 | 20994 | AD 272 | included | loan contract (advance, prochreia) | ALD-000439 |
| P.Oxy. 12 1413 | 21823 | 21823 | AD 272 | excluded | proceedings of the council; oil supplied 'ἐκ προχρείας' (in advance), not a loan transaction |  |
| P.Bingen 117 | 44516 | 44516 | AD 276-325 | excluded | list of household items (χρήσεως = for use) |  |
| P.Oxy. 12 1588 | 31770 | 31770 | AD 276-300 | excluded | letter about creditors' demands; money received not called a loan, borrowing only contemplated |  |
| P.Oxy. 14 1711 | 31794 | 31794 | AD 276-300 | included | loan contract (chresis) | ALD-000444 |
| P.Oxy. 36 2775 | 30384 | 30384 | AD 276-300 | included | acknowledgement of a seed-wheat loan (cheirographon) | ALD-000442 |
| P.Oxy. 6 907 | 20370 | 20370 | AD 276 | excluded | will (προχρεῖαι only among appurtenances of a vineyard) |  |
| P.Oxy. 75 5062 | 128903 | 128903 | AD 276-300 | excluded | letter about enforcing a bond against a debtor; debt not specified as a loan (only general 'debtors frighten the lenders') |  |
| P.Oxy. Hels. 43 | 30199 | 30199 | AD 276-300 | included | loan contract (chresis) | ALD-000440 |
| P.Ryl. 2 338 | 31183 | 31183 | AD 276-300 | excluded | too fragmentary |  |
| P.Strasb. 7 636 | 30366 | 30366 | AD 276-300 | included | loan contract (interest-bearing chresis with hypallagma) | ALD-000441 |
| SB 10 10265 | 30410 | 30410 | AD 276-300 | excluded | account (transport expenses) |  |
| SB 24 16214 | 31142 | 31142 | AD 276-325 | included | money loan mentioned in a private letter | ALD-000443 |
| SB 4 7358 | 14011 | 14011 | AD 277-282 | included | paramone loan contract | ALD-000445 |
| P.Oxy. 14 1713 | 21990 | 21990 | AD 279 | excluded | deposit (parathēkē), not called a loan (text cancelled by crossing out) |  |
| P.Wash. Univ. 1 22 | 32568 | 32568 | AD 280-281 | included | loan contract in kind (cheirographon) | ALD-000446 |
| P.Lond. 3 1243 | 22857 | 22857 | AD 281 | included | loan contract (interest-bearing chresis) | ALD-000447 |
| P.Cair. Isid. 93 | 10425 | 10425 | AD 282 | included | loan contract (chresis) | ALD-000448 |
