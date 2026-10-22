ACCT.addChapter({
  ch: 8,
  title: "Framework for deductions",
  cards: [
    { id: "8c01", front: "Three questions for any expense", back: "1. Was it for a business, investment or personal activity? 2. Is it deductible? 3. If so, is it for AGI or itemized, and on which form?", star: false },
    { id: "8c02", front: "Trade or business expenses: where reported", back: "Any activity carried on to earn a profit, such as selling goods or performing services. Expenses go on Schedule C (or F for farming), are deductions for AGI, and the net profit flows to Schedule 1.", star: false },
    { id: "8c03", front: "Ordinary, necessary, reasonable", back: "Ordinary: common and accepted in the industry. Necessary: helpful and appropriate for the business. Reasonable: the amount is not exorbitant.", star: false },
    { id: "8c04", front: "Investment activity", back: "Buying an asset expecting it to rise in value or produce income without the taxpayer's own effort.", star: false },
    { id: "8c05", front: "Rental property expenses", back: "Reported on Schedule E, netted against rent, and deducted for AGI. A rental's expenses never go on Schedule A.", star: false },
    { id: "8c06", front: "Investment expenses on Schedule A", back: "Only investment (margin) interest and property tax on investment land that is not rented. Other investment expenses are not deductible.", star: false },
    { id: "8c07", front: "Costs of determining, collecting or refunding a tax", back: "Deductible for businesses, but never for individuals, whatever the type of tax.", star: false },
    { id: "8c08", front: "Personal expenses", back: "Not deductible unless the law specifically allows them, such as charitable gifts, home mortgage interest, state and local taxes and medical costs (mostly Schedule A). Commuting is never deductible.", star: false },
    { id: "8c09", front: "Personal homes: property tax vs mortgage interest", back: "Real estate taxes are deductible on any number of personal homes. Mortgage interest is deductible on two homes at most: the main home plus one other.", star: false },
    { id: "8c10", front: "Hobby income and expenses", back: "Hobby income is taxable; hobby expenses are not deductible.", star: false },
    { id: "8c11", front: "Capital expenditures", back: "Costs that benefit more than one accounting period must be capitalized and depreciated, not deducted now.", star: false },
    { id: "8c12", front: "Public policy disallowance", back: "Fines and penalties paid to a government and bribes or kickbacks to U.S. government officials are never deductible. A payment to a foreign official that does not violate the Foreign Corrupt Practices Act is deductible.", star: false },
    { id: "8c13", front: "Illegal businesses", back: "A drug-trafficking business deducts only cost of goods sold (and only with documentation). Other illegal businesses deduct ordinary, necessary and reasonable expenses normally.", star: false },
    { id: "8c14", front: "Expenses of earning tax-exempt income", back: "Not deductible. Examples: interest on money borrowed to buy municipal bonds, and costs tied to tax-exempt key-employee life insurance proceeds. Margin interest is prorated between taxable and tax-exempt uses.", star: false },
    { id: "8c15", front: "Lobbying, political contributions and entertainment", back: "Never deductible, even when business related (e.g. taking a client to a show).", star: false },
    { id: "8c16", front: "Adequate substantiation", back: "Receipts, paid bills or similar evidence of the amount, date, place and business purpose; mileage needs a log. Only the substantiated amount is deductible.", star: false },
    { id: "8c17", front: "Cohan rule and lost records", back: "A court may accept a reasonable estimate when records are missing, but never for meals. If records are destroyed (e.g. in a fire), the taxpayer must make reasonable efforts to recreate them.", star: false },
    { id: "8c18", front: "Paying someone else's expense", back: "Deductible only if the taxpayer was liable for it or it benefits the taxpayer (or the spouse on a joint return). Exception: medical costs paid for a dependent.", star: false },
    { id: "8c19", front: "For-AGI vs itemized deductions", back: "Deductions for AGI are always deductible. Itemized deductions help only when their total exceeds the standard deduction.", star: false },
    { id: "8c20", front: "Cash method timing", back: "Deduct an expense when it is paid, whether by cash, check or credit card.", star: false },
    { id: "8c21", front: "12-month rule (cash method prepaid expenses)", back: "A prepaid expense is deductible now if its benefit does not extend beyond the earlier of 12 months after the benefit begins or the end of the year after the payment year. Otherwise spread it over the benefit period.", star: false },
    { id: "8c22", front: "Prepaid interest", back: "The 12-month rule never applies. Prepaid interest is always spread over the life of the loan.", star: false },
    { id: "8c23", front: "All-events test (accrual method)", back: "Deduct only when the liability is established, the amount can be determined with reasonable accuracy, and economic performance has occurred.", star: false },
    { id: "8c24", front: "Economic performance", back: "Occurs when the taxpayer receives the services or property, or uses the property another party provides.", star: false },
    { id: "8c25", front: "Accrual items deductible only when paid", back: "Refunds, rebates, awards, prizes, taxes, workers' compensation, tort liabilities, and insurance, warranty and service contracts covering the taxpayer.", star: false },
    { id: "8c26", front: "Recurring-item exception", back: "A recurring liability that is immaterial or better matched to this year's revenue can be deducted this year if economic performance occurs within 8.5 months after year-end.", star: false },
    { id: "8c27", front: "Accrued bonuses", back: "Deductible this year only if paid within 2.5 months after year-end; otherwise deducted when paid.", star: false },
    { id: "8c28", front: "Related-party payment rule", back: "An accrual-method business paying a cash-method related party deducts only when the recipient includes the payment in income. Related means a more-than-50% owner of a C corporation, or any owner of a partnership or S corporation.", star: false },
    { id: "8c29", front: "Capitalize vs repair", back: "Capitalize a cost that increases value, substantially extends useful life, or adapts the asset to a new use. Deduct a repair that only keeps the asset in normal operating condition.", star: false },
    { id: "8c30", front: "Repair planning: own home vs rental", back: "On a personal home, capitalizing is better because it raises basis (home repairs are not deductible). On a rental, repair treatment is better because it gives an immediate deduction.", star: false }
  ],
  mc: [
    {
      id: "8q01",
      q: "Rhea pays property taxes of $4,000 on a rental duplex, $6,000 on her home, and $1,500 on vacant land held for investment. How much goes on Schedule A?",
      opts: ["$7,500", "$11,500", "$6,000", "$5,500"],
      why: "Tax on the home and the investment land goes on Schedule A: 6,000 + 1,500 = 7,500. The rental's 4,000 goes on Schedule E, never Schedule A.",
      star: false
    },
    {
      id: "8q02",
      q: "Which of the following is deductible?",
      opts: ["Interest on a loan used to buy corporate bonds", "The cost of taking a client to a concert", "Lobbying a city council on a zoning change", "A penalty for filing a tax return late"],
      why: "Interest on money borrowed to buy taxable bonds is deductible investment interest. Entertainment, lobbying and government penalties are never deductible.",
      star: false
    },
    {
      id: "8q03",
      q: "All of the following are nondeductible EXCEPT:",
      opts: ["A payment to a foreign official that does not violate the Foreign Corrupt Practices Act", "A speeding fine paid by a delivery business", "A contribution to a political campaign", "Interest on money borrowed to buy municipal bonds"],
      why: "A foreign payment that does not violate the FCPA is deductible. Fines, political contributions and the cost of earning tax-exempt municipal interest are all disallowed.",
      star: false
    },
    {
      id: "8q04",
      q: "An illegal drug-trafficking business has documented cost of goods sold of $40,000, rent of $12,000 and wages of $30,000. How much can it deduct?",
      opts: ["$40,000", "$82,000", "$0", "$42,000"],
      why: "A drug-trafficking business may deduct only documented cost of goods sold, so 40,000. Deducting everything (82,000) is the rule for other illegal businesses, not drug trafficking.",
      star: false
    },
    {
      id: "8q05",
      q: "Talia, who runs a consulting business, spends $6,200 on a business trip but has receipts for only $4,750. How much can she deduct?",
      opts: ["$4,750", "$6,200", "$1,450", "$5,475"],
      why: "Only substantiated expenses are deductible, so 4,750. $1,450 is the unsupported part and $5,475 is an average with no basis in the rules.",
      star: false
    },
    {
      id: "8q06",
      q: "A hair salon buys a farm tractor through the business. Why is the cost not deductible as a salon expense?",
      opts: ["It is not necessary (helpful and appropriate) for a hair salon", "It is not reasonable because tractors are expensive", "It is a hobby expense", "Only personal-use items can fail the deduction tests"],
      why: "A tractor is not helpful or appropriate to running a salon, so it fails the necessary test. Reasonableness is about the size of an otherwise proper expense, not whether it fits the business.",
      star: false
    },
    {
      id: "8q07",
      q: "Quinn's cafe, a cash-method taxpayer, pays $9,000 on December 1, 2026 for rent from January 1, 2027 through September 30, 2027. How much can it deduct in 2026?",
      opts: ["$9,000", "$0", "$1,000", "$3,000"],
      why: "The benefit ends September 30, 2027, before both 12 months after it begins and the end of 2027, so the 12-month rule allows all 9,000 in 2026. Waiting until 2027 ignores the 12-month rule.",
      star: false
    },
    {
      id: "8q08",
      q: "A cash-method business pays $24,000 on July 1, 2026 for 24 months of rent starting that day. How much can it deduct in 2026?",
      opts: ["$6,000", "$24,000", "$12,000", "$0"],
      why: "The benefit runs past 12 months, so the payment is spread: 24,000 / 24 = 1,000 a month x 6 months in 2026 = 6,000. Deducting all 24,000 misapplies the 12-month rule.",
      star: false
    },
    {
      id: "8q09",
      q: "A cash-method borrower pays $3,600 of interest on December 1, 2026 covering December 2026 through November 2027. How much is deductible in 2026?",
      opts: ["$300", "$3,600", "$0", "$1,800"],
      why: "The 12-month rule never applies to prepaid interest; it is spread over the loan period: 3,600 / 12 = 300 for December. Deducting all 3,600 treats interest like prepaid rent.",
      star: false
    },
    {
      id: "8q10",
      q: "An accrual-method company signs a contract in December 2026 for a one-time $5,000 repair job that is performed in March 2027. When is the cost deductible?",
      opts: ["2027, when the work is performed", "2026, when the contract is signed", "2026, because the amount is known", "Whenever the company pays, even before the work"],
      why: "The all-events test also requires economic performance, which happens when the services are received in 2027. A fixed amount alone is not enough.",
      star: false
    },
    {
      id: "8q11",
      q: "A calendar-year accrual business has a recurring, immaterial liability from 2026. By what date must economic performance occur for the business to deduct it in 2026?",
      opts: ["September 15, 2027", "March 15, 2027", "December 31, 2027", "June 30, 2027"],
      why: "The recurring-item exception allows 8.5 months after year-end, which is September 15, 2027. March 15 is the 2.5-month deadline for accrued bonuses.",
      star: false
    },
    {
      id: "8q12",
      q: "An accrual-method corporation accrues $50,000 of bonuses to non-owner employees at December 31, 2026. It pays $30,000 on March 1, 2027 and $20,000 on May 10, 2027. How much is deductible in 2026?",
      opts: ["$30,000", "$50,000", "$20,000", "$0"],
      why: "Accrued bonuses count this year only if paid within 2.5 months after year-end (by March 15), so only the 30,000. The 20,000 paid in May is deducted in 2027.",
      star: false
    },
    {
      id: "8q13",
      q: "Ava, a cash-method taxpayer, owns 60% of an accrual-method C corporation. It accrues $20,000 of salary to her in December 2026 and pays it in January 2027. When does the corporation deduct it?",
      opts: ["2027, when Ava includes it in income", "2026, when it is accrued", "2026, because it is paid within 2.5 months", "Never, because she is an owner"],
      why: "Ava owns more than 50%, so the corporation must wait until she reports the income in 2027. The 2.5-month rule for bonuses does not override the related-party rule.",
      star: false
    },
    {
      id: "8q14",
      q: "Which statement about the related-party payment rule is NOT correct?",
      opts: ["For an S corporation, the rule applies only to shareholders who own more than 50%", "It applies when an accrual-method payer owes a cash-method related recipient", "The payer deducts the payment in the year the recipient includes it in income", "For a C corporation, a related party is a more-than-50% owner"],
      why: "For partnerships and S corporations the rule reaches every owner, however small the stake. The more-than-50% test applies only to C corporations.",
      star: false
    },
    {
      id: "8q15",
      q: "A store owner spends $1,200 replacing a few loose shingles and $25,000 adding a storage room to the building. How much can be deducted now?",
      opts: ["$1,200", "$26,200", "$25,000", "$0"],
      why: "Replacing a few shingles keeps the roof in normal condition, a repair, so 1,200 is deducted. The added room is a betterment that must be capitalized.",
      star: false
    },
    {
      id: "8q16",
      q: "Why would a homeowner prefer that a cost on her own home be capitalized rather than treated as a repair?",
      opts: ["Capitalizing raises her basis, which reduces gain on a later sale; a home repair gives no deduction anyway", "Capitalized home costs create an immediate itemized deduction", "Capitalized home costs are depreciated each year", "Capitalized home costs can be reported on Schedule E"],
      why: "Repairs on a personal home are not deductible, so capitalizing at least adds to basis. A personal home is not depreciated and does not belong on Schedule E.",
      star: false
    },
    {
      id: "8q17",
      q: "Sam owns three personal homes and names the second as his other qualified home. Property taxes are $3,000, $2,000 and $1,500, and mortgage interest is $9,000, $4,000 and $2,500. What is his total Schedule A deduction for these items?",
      opts: ["$19,500", "$22,000", "$18,000", "$13,000"],
      why: "Taxes on all three homes count (3,000 + 2,000 + 1,500 = 6,500), but interest only on two (9,000 + 4,000 = 13,000), so 19,500. Limiting taxes to two homes gives 18,000.",
      star: false
    },
    {
      id: "8q18",
      q: "Nell pays $2,000 of margin interest on a loan she used half to buy taxable corporate bonds and half to buy municipal bonds. How much is potentially deductible as investment interest?",
      opts: ["$1,000", "$2,000", "$0", "$500"],
      why: "Interest tied to tax-exempt income is not deductible, so the margin interest is prorated: 2,000 x 50% = 1,000. Deducting all 2,000 ignores the municipal half.",
      star: false
    },
    {
      id: "8q19",
      q: "Which payment of another person's expense is deductible by the payer?",
      opts: ["Medical bills Grace pays for her dependent mother", "Property tax Grace pays on a friend's house", "Mortgage interest Grace pays on her adult, nondependent son's house", "Credit card interest Grace pays on her sister's card"],
      why: "Medical costs paid for a dependent are the stated exception. Otherwise a deduction requires that the payer be liable or directly benefit.",
      star: false
    },
    {
      id: "8q20",
      q: "Which of the following is NOT a deduction for AGI?",
      opts: ["Medical expenses", "Traditional IRA contribution", "Educator expenses", "Student loan interest"],
      why: "Medical expenses are an itemized deduction on Schedule A. IRA contributions, educator expenses and student loan interest are all above the line.",
      star: false
    }
  ]
});
