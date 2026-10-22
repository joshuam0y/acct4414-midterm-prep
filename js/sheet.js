/* What is worth copying onto the one-sided handwritten sheet (the rate tables are handed out). */
window.ACCT_SHEET = [
  { h: "Line 16 with qualified dividends", items: [
    "Ordinary income = taxable income - QD - net LTCG. Look up ORDINARY income in the table.",
    "0% room = 0% ceiling - ordinary income (0 if negative). QD at 0% = smaller of QD or room.",
    "Rest of QD x 15%. Line 16 = tax on ordinary + 15% part. Show every step.",
    "QD (3a) is inside ordinary dividends (3b). Non-qualified = 3b - 3a, ordinary rates."
  ] },
  { h: "Form 1040 flow", items: [
    "Line 9 = 1z + 2b + 3b + 8 (Sch 1 line 10). 2a (muni) never added.",
    "AGI (11) = 9 - 10 (Sch 1 line 26). 15 = 11 - 12e (larger of std or Sch A) - 13a (QBI).",
    "SE tax = Sch C profit x 92.35% x 15.3% to Sch 2 line 4, line 21, 1040 line 23. Half to Sch 1 line 15.",
    "24 = 16 + 23 - credits. 33 = 25d + 26. 34 overpaid or 37 owed. Nothing stays on Sch 1, 2 or 3."
  ] },
  { h: "Rates and planning", items: [
    "Plan with the MARGINAL rate: deduction saves amount x marginal rate.",
    "Average = tax / taxable income. Effective = tax / total economic income (lowest).",
    "Credit cuts tax dollar for dollar; deduction cuts income. Credit beats an equal deduction.",
    "Use tax = home rate - out-of-state rate paid. Social Security is regressive (wage cap)."
  ] },
  { h: "Gains and basis", items: [
    "Amount realized = cash + FMV received + debt assumed by buyer - SELLING COSTS.",
    "Adjusted basis = cost + improvements - depreciation. Realized = AR - adjusted basis.",
    "Recognized = part taxed now (after exclusion or deferral). Both appear as answer choices.",
    "Long-term = held MORE than 1 year (starts day after purchase). Net capital loss: $3,000 ($1,500 MFS)."
  ] },
  { h: "Dependents and filing status", items: [
    "QC: relationship, residence > half year, under 19 (under 24 student = 23 or younger), child not over half own support.",
    "QR: you provide over half support, gross income under $5,300 (2026) / $5,200 (2025). Not cousins.",
    "MFS: if one spouse itemizes, both must. QSS needs a dependent child.",
    "Kiddie: unearned over $2,700 taxed at parent's rate. Dependent std = greater of $1,350 or earned + $450."
  ] },
  { h: "Timing (Ch 5)", items: [
    "Constructive receipt: check in mailbox Dec 31 = income. Post-dated check is not.",
    "Tax benefit rule: refund taxable only to extent deduction helped. Claim of right: deduct repayment in repayment year.",
    "Prepaid rent and interest taxed when received. Refundable deposit not income. AFS deferral: year 1 earned part, year 2 rest."
  ] },
  { h: "Exclusions (Ch 6, 7)", items: [
    "Scholarship excluded only for tuition, required fees, required books. Room and board taxable.",
    "Physical injury damages excluded; punitive always taxable. Alimony: pre-2019 decree only.",
    "Group-term life: (coverage - 50,000) / 1,000 x age rate. Employer premiums excluded except short-term disability.",
    "Section 119: employer's convenience + on premises; meals in kind; lodging as condition of employment.",
    "Gift cards, movie passes: never de minimis. Discount: services 20%, goods gross profit %."
  ] },
  { h: "Sales (Ch 15)", items: [
    "Related party (spouse, ancestors, descendants, siblings, >50% entity): loss gone; offsets buyer's later gain only.",
    "Wash sale: buy within 30 days before or after. Deferred = loss x shares bought / sold; add to new basis.",
    "Home: 2 of 5 years, $250k / $500k. Job, health, unforeseen: prorate months / 24."
  ] },
  { h: "Deductions (Ch 8, 9)", items: [
    "Medical > 7.5% AGI after reimbursement. No OTC drugs, cosmetic surgery, bottled water.",
    "SALT cap $40,400 (2026), minus 30% of MAGI over $505,000, floor $10,000. Greater of income or sales tax.",
    "Charity: cash 60% AGI, LTCG property FMV 30%, carry 5 years; 2026 floor 0.5% AGI. Quid pro quo: excess only.",
    "Casualty: lesser of FMV decline or basis - insurance - $100 - 10% AGI; declared disaster only.",
    "Investment interest up to net investment income (QD only with election). 12-month rule for prepaids.",
    "Extra std deduction only 65+ or blind (not deaf): $2,050 single, $1,650 each MFJ (2026)."
  ] },
  { h: "Authority and procedure (Ch 3)", items: [
    "Code > regs > rulings; court cases usually outweigh regs and revenue rulings. Golsen: Tax Court follows taxpayer's circuit.",
    "SOL: 3 years; 6 if omitted income > 25% of gross income reported; no limit for fraud or no return.",
    "Refund claim: later of 3 years from filing or 2 years from payment. Tax Court: 90 days, no prepayment."
  ] }
];
