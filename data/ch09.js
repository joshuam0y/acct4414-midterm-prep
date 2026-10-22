ACCT.addChapter({
  ch: 9,
  title: "Deductions for AGI and itemized deductions",
  cards: [
    { id: "9c01", front: "Standard deduction vs itemizing", back: "Take the larger of the standard deduction or total itemized deductions. Deductions for AGI count either way.", star: false },
    { id: "9c02", front: "Married filing separately and itemizing", back: "If one spouse itemizes, the other must itemize too, even if that spouse's standard deduction would be larger.", star: true, trap: true },
    { id: "9c03", front: "2026 standard deduction", back: "Single or MFS $16,100; MFJ or QSS $32,200; head of household $24,150.", star: false },
    { id: "9c04", front: "2026 extra standard deduction", back: "For each taxpayer or spouse who is 65 or older or blind: $1,650 (MFJ or QSS) or $2,050 (single or HoH). Deafness or other conditions do not qualify.", star: false, trap: true },
    { id: "9c05", front: "Educator expenses", back: "K-12 teachers deduct up to $350 for AGI (2026) of unreimbursed books, supplies, equipment and related professional development. From 2026 the excess is an itemized deduction.", star: false },
    { id: "9c06", front: "HSA eligibility and 2026 limits", back: "Requires a high-deductible plan: deductible at least $1,700 self-only or $3,400 family; out-of-pocket max $8,500 or $17,000. Contribution limit $4,400 self-only or $8,750 family, deducted for AGI.", star: false },
    { id: "9c07", front: "HSA withdrawals", back: "Tax-free if used only for qualified medical costs (not insurance premiums). Non-medical withdrawals are taxed plus a 20% penalty. Medical costs paid from the HSA cannot also be itemized.", star: false },
    { id: "9c08", front: "Moving expenses", back: "Deductible for AGI only for armed forces members moving under military orders (and certain intelligence community moves). Covers moving belongings and travel such as airfare, not meals or lodging.", star: false },
    { id: "9c09", front: "Self-employed health insurance", back: "100% deductible for AGI for the taxpayer, spouse, dependents and children under 27, if not eligible for an employer-subsidized plan; capped at self-employment income. Half of SE tax is also for AGI.", star: false },
    { id: "9c10", front: "Self-employed long-term care premium caps by age", back: "40 or under $500; 41 to 50 $930; 51 to 60 $1,860; 61 to 70 $4,960; over 70 $6,200.", star: false },
    { id: "9c11", front: "Traditional IRA deduction (2026)", back: "Up to $7,500, plus $1,100 more for those 50 or older. Deducted for AGI.", star: false },
    { id: "9c12", front: "Other deductions for AGI", back: "Penalty on early withdrawal of savings (in full); alimony paid under a pre-2019 decree; attorney fees in a discrimination suit up to the award included in income; jury pay handed over to the employer.", star: false },
    { id: "9c13", front: "Student loan interest", back: "Up to $2,500 for AGI. Phased out over MAGI $85,000 to $100,000 (unmarried) or $175,000 to $205,000 (married). If the student is a dependent, the parent deducts it.", star: false },
    { id: "9c14", front: "Medical expense floor and timing", back: "Deductible only above 7.5% of AGI, after insurance reimbursements. Deduct when paid; prepaid amounts wait until care is given unless the provider requires prepayment.", star: false },
    { id: "9c15", front: "Qualified medical expenses", back: "Doctors, hospitals, dental, prescriptions, eyeglasses, health insurance paid with after-tax money, medical mileage (20.5 cents a mile in 2026) and lodging up to $50 a night; for the taxpayer, spouse and dependents.", star: false },
    { id: "9c16", front: "Nondeductible medical items", back: "Over-the-counter drugs (except insulin), cosmetic surgery, bottled water, gyms and spas, funeral costs, medical marijuana, meals while traveling for care, and premiums paid pre-tax through a cafeteria plan.", star: false },
    { id: "9c17", front: "Deductible state and local taxes", back: "The greater of state and local income tax or sales tax, plus real property taxes, plus personal property taxes based on value.", star: false },
    { id: "9c18", front: "SALT cap (2026)", back: "$40,400 ($20,200 MFS), reduced by 30% of MAGI over $505,000 but never below $10,000. Business taxes on Schedules C, E or F are not capped.", star: false },
    { id: "9c19", front: "Taxes that are not deductible", back: "Federal income tax, estate and gift taxes, employee Social Security and Medicare taxes, foreign real property tax, special assessments, and flat fees or licenses such as dog tags.", star: false },
    { id: "9c20", front: "Home mortgage interest", back: "Main home plus one other, on up to $750,000 of acquisition debt ($375,000 MFS). Home equity interest counts only if the loan bought, built or improved the home.", star: false },
    { id: "9c21", front: "Points and mortgage insurance", back: "Points on a purchase are deductible when paid; refinancing points are spread over the loan. Qualified mortgage insurance premiums are deductible again from 2026, subject to a phaseout.", star: false },
    { id: "9c22", front: "Investment interest expense", back: "Deductible only up to net investment income; the excess carries forward. Qualified dividends and long-term gains count as investment income only if the taxpayer elects to tax them at ordinary rates.", star: false },
    { id: "9c23", front: "Qualified charitable recipients", back: "Only qualified U.S. charities (501(c)(3) organizations). Gifts to individuals, crowdfunding for a person, political groups and foreign charities are not deductible. Time is not deductible; out-of-pocket costs and 14 cents a mile are.", star: false },
    { id: "9c24", front: "Valuing donated property", back: "Long-term capital gain property: FMV, limited to 30% of AGI. Ordinary-income property: FMV minus the gain that a sale would produce. If FMV is below basis, the deduction is FMV.", star: false },
    { id: "9c25", front: "Quid pro quo gifts and records", back: "Deduct only the excess over the value received back. Written acknowledgment for a gift of $250 or more; extra paperwork for property over $500; qualified appraisal over $5,000; appraisal attached over $500,000.", star: false },
    { id: "9c26", front: "Charitable AGI limits and floor", back: "Limits of 60% (cash to public charities), 50%, 30% and 20% of AGI by gift and charity type. From 2026, a floor of 0.5% of AGI applies. Excess carries forward 5 years.", star: false },
    { id: "9c27", front: "What counts as a personal casualty", back: "Sudden, unexpected damage in a declared disaster area. Not termites, gradual wear and tear, a pet breaking china, or temporary housing costs.", star: false },
    { id: "9c28", front: "Casualty loss computation", back: "Lesser of the FMV decline or adjusted basis, minus insurance, minus $100 per casualty; then subtract 10% of AGI from the year's total.", star: false },
    { id: "9c29", front: "Gambling losses and other itemized deductions", back: "Gambling losses: 90% of losses, and only up to winnings. Also claim-of-right repayments and work expenses of taxpayers with disabilities.", star: false },
    { id: "9c30", front: "Former 2% miscellaneous deductions", back: "No longer deductible: unreimbursed employee expenses, tax-preparation fees, investment fees, hobby expenses and an employee's home office.", star: false }
  ],
  mc: [
    {
      id: "9q01",
      q: "Ana and Leo file separate returns for 2026. Ana itemizes $21,000 of deductions. Leo's own itemized deductions total $4,000. What deduction does Leo take?",
      opts: ["$4,000 of itemized deductions", "The $16,100 standard deduction", "The $32,200 standard deduction", "$10,500, half of Ana's itemized deductions"],
      why: "When one spouse filing separately itemizes, the other must itemize too, so Leo takes his 4,000 even though 16,100 is larger. The standard deduction is not available to him.",
      star: true,
      trap: true
    },
    {
      id: "9q02",
      q: "Which statement about spouses filing separately is correct?",
      opts: ["If one spouse itemizes, the other must also itemize", "Each spouse chooses the standard deduction or itemizing independently", "The spouse with fewer itemized deductions gets the MFJ standard deduction", "Only the higher-income spouse may itemize"],
      why: "Separate filers must make the same choice: if one itemizes, both itemize. Assuming each spouse picks independently is the classic mistake.",
      star: true,
      trap: true
    },
    {
      id: "9q03",
      q: "Rosa is single, 68 and deaf. Her 2026 itemized deductions are $17,800. What deduction should she take?",
      opts: ["$18,150 standard deduction", "$17,800 itemized deductions", "$20,200 standard deduction", "$16,100 standard deduction"],
      why: "She gets one add-on for age: 16,100 + 2,050 = 18,150, which beats 17,800. Deafness earns no add-on, so 20,200 (two add-ons) is wrong.",
      star: false,
      trap: true
    },
    {
      id: "9q04",
      q: "Jenna, a K-12 teacher, spent $520 on classroom supplies. Her spouse, in the Army, moved the family under military orders: movers $3,100, airfare $900, hotel $400, meals $150. They file jointly. What is the total deduction for AGI for these costs?",
      opts: ["$4,350", "$4,520", "$4,900", "$5,070"],
      why: "Educator expenses are capped at 350, and military moving covers movers and airfare only: 350 + 3,100 + 900 = 4,350. Including the hotel and meals gives 4,900.",
      star: false
    },
    {
      id: "9q05",
      q: "Omar, 45 and self-employed with no access to an employer plan, pays $12,000 of SE tax, $6,500 of health insurance and $1,400 of long-term care premiums. What is his deduction for AGI for these items?",
      opts: ["$13,430", "$13,900", "$19,430", "$14,360"],
      why: "Half of SE tax 6,000 + health insurance 6,500 + long-term care capped at 930 for ages 41 to 50 = 13,430. Taking the full 1,400 gives 13,900; deducting all the SE tax gives 19,430.",
      star: false
    },
    {
      id: "9q06",
      q: "Mila is single with MAGI of $91,000 and paid $2,000 of student loan interest in 2026. What is her deduction?",
      opts: ["$1,200", "$2,000", "$800", "$0"],
      why: "Phaseout = (91,000 - 85,000) / 15,000 = 40%, so 2,000 x 60% = 1,200. $800 is the amount phased out, not the deduction.",
      star: false
    },
    {
      id: "9q07",
      q: "Wren withdraws $2,000 from her HSA to pay for a vacation. What is the result?",
      opts: ["Include $2,000 in income and pay a $400 penalty", "Include $2,000 in income with no penalty", "No tax, because HSA money is always tax-free", "Pay a $200 penalty but no income tax"],
      why: "A non-medical HSA withdrawal is taxable and carries a 20% penalty: 2,000 x 20% = 400. A 10% figure is the wrong penalty rate.",
      star: false
    },
    {
      id: "9q08",
      q: "Which of the following is NOT a deduction for AGI?",
      opts: ["Child support paid", "Half of self-employment tax", "Penalty on early withdrawal of savings", "Alimony paid under a 2016 divorce decree"],
      why: "Child support is never deductible. Alimony under a pre-2019 decree, half of SE tax and the early withdrawal penalty are all for AGI.",
      star: false
    },
    {
      id: "9q09",
      q: "Lucia has AGI of $80,000. She paid doctors $4,200, a hospital $5,500, prescriptions $900, after-tax health insurance $2,400, over-the-counter drugs $300 and teeth whitening $600. Insurance reimbursed $2,000. What is her medical deduction?",
      opts: ["$5,000", "$5,900", "$7,000", "$11,000"],
      why: "Qualified costs 4,200 + 5,500 + 900 + 2,400 = 13,000; minus 2,000 reimbursement = 11,000; minus 7.5% x 80,000 = 6,000 gives 5,000. Counting the OTC drugs and whitening gives 5,900; skipping the reimbursement gives 7,000.",
      star: false
    },
    {
      id: "9q10",
      q: "Felix, single with MAGI of $300,000, paid state income tax $18,000, sales tax $4,500, real estate tax $15,000, a value-based car tax $600, a dog license $50 and federal income tax $50,000. What is his SALT deduction?",
      opts: ["$33,600", "$38,100", "$33,650", "$40,400"],
      why: "Greater of income or sales tax 18,000 + real estate 15,000 + value-based personal property tax 600 = 33,600, under the cap. Adding the sales tax too gives 38,100; the dog license is a flat fee.",
      star: false
    },
    {
      id: "9q11",
      q: "Gia is single with MAGI of $565,000 and paid $48,000 of state and local taxes in 2026. What is her SALT deduction?",
      opts: ["$22,400", "$40,400", "$30,000", "$10,000"],
      why: "Cap reduction = 30% x (565,000 - 505,000) = 18,000, so the cap is 40,400 - 18,000 = 22,400, still above the 10,000 floor. Subtracting 18,000 from her 48,000 of taxes gives the wrong 30,000.",
      star: false
    },
    {
      id: "9q12",
      q: "Dante paid main-home mortgage interest $9,500, home equity interest $2,000 (loan used for a vacation), investment interest $1,500 (net investment income is $900 of taxable interest) and credit card interest $700. What is his deductible interest?",
      opts: ["$10,400", "$13,700", "$12,400", "$11,000"],
      why: "Mortgage 9,500 + investment interest limited to 900 = 10,400; the other 600 carries forward. Home equity interest on a loan not used for the home and credit card interest are not deductible.",
      star: false
    },
    {
      id: "9q13",
      q: "Iris paid $3,000 of investment interest. Her only investment income is $2,000 of qualified dividends, and she makes no election. How much investment interest can she deduct this year?",
      opts: ["$0; all $3,000 carries forward", "$2,000", "$3,000", "$1,000"],
      why: "Qualified dividends count as investment income only if she elects to tax them at ordinary rates. With no election, net investment income is 0, so nothing is deducted now.",
      star: false
    },
    {
      id: "9q14",
      q: "Paige pays $400 for a ticket to a charity dinner. The meal is worth $90. What is her charitable deduction?",
      opts: ["$310", "$400", "$90", "$490"],
      why: "A quid pro quo gift is deductible only above the value received: 400 - 90 = 310. Deducting the full 400 ignores the meal.",
      star: false
    },
    {
      id: "9q15",
      q: "Hector has 2026 AGI of $200,000 and gives $150,000 cash to a public charity. How much can he deduct in 2026?",
      opts: ["$119,000", "$120,000", "$150,000", "$100,000"],
      why: "60% x 200,000 = 120,000 limit, minus the 0.5% floor of 1,000 = 119,000; the other 31,000 carries forward. $120,000 forgets the new floor, and $100,000 uses the 50% limit.",
      star: false
    },
    {
      id: "9q16",
      q: "Bianca gives a public charity stock she has held for 3 years (basis $4,000, FMV $10,000). How is the gift measured and limited?",
      opts: ["$10,000 at FMV, limited to 30% of AGI", "$4,000 at basis, limited to 60% of AGI", "$6,000, the unrealized gain, limited to 30% of AGI", "$10,000 at FMV, limited to 60% of AGI"],
      why: "Long-term capital gain property is deducted at FMV with a 30% of AGI limit, and the gain is never taxed. The 60% limit applies to cash gifts.",
      star: false
    },
    {
      id: "9q17",
      q: "Noah's home in a federally declared disaster area (basis $220,000) drops in value from $300,000 to $120,000. Insurance pays $140,000 and his AGI is $90,000. What is his casualty loss deduction?",
      opts: ["$30,900", "$70,900", "$40,000", "$31,000"],
      why: "Lesser of the 180,000 decline or 220,000 basis = 180,000; minus 140,000 insurance, minus 100, minus 10% x 90,000 = 9,000 gives 30,900. Forgetting the $100 floor gives 31,000.",
      star: false
    },
    {
      id: "9q18",
      q: "Which loss can qualify as a personal casualty loss?",
      opts: ["Tornado damage to a home in a federally declared disaster area", "Termite damage discovered in the attic", "A dog knocking over and breaking china", "Hotel bills while a storm-damaged home is repaired"],
      why: "A casualty must be sudden and unexpected and, for personal property, in a declared disaster area. Termites are gradual, pet breakage does not count, and temporary housing is not part of the loss.",
      star: false
    },
    {
      id: "9q19",
      q: "Ivan wins $6,000 gambling during the year and loses $5,000. How much can he deduct as an itemized deduction?",
      opts: ["$4,500", "$5,000", "$1,000", "$0"],
      why: "Only 90% of losses count: 5,000 x 90% = 4,500, which is below his 6,000 of winnings. Deducting the full 5,000 ignores the 90% rule.",
      star: false
    },
    {
      id: "9q20",
      q: "All of the following are no longer deductible as itemized deductions EXCEPT:",
      opts: ["Gambling losses up to gambling winnings", "Tax-preparation fees", "Unreimbursed employee business expenses", "Investment advisory fees"],
      why: "Gambling losses remain an itemized deduction. Tax-prep fees, unreimbursed employee expenses and investment fees were former 2% items that are gone.",
      star: false
    }
  ]
});
