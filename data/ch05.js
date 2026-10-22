ACCT.addChapter({
  ch: 5,
  title: "When income is taxed",
  cards: [
    { id: "5c01", front: "Cash-basis individuals: when is income reported?", back: "When it is actually or constructively received.", star: false },
    { id: "5c02", front: "Constructive receipt", back: "Income is taxed when it is credited, set apart, or made available to you without substantial limits. Physical possession is not required.", star: false },
    { id: "5c03", front: "Check in the mailbox on Dec 31", back: "Income in that year, whether or not it is opened. Deliberately not collecting mail does not push the income into the next year.", star: false },
    { id: "5c04", front: "Post-dated check", back: "A substantial limit on use, so it is not constructively received when it is handed over.", star: false },
    { id: "5c05", front: "Substantial limitation (example)", back: "Having to give up future bonuses to get the money now. With a substantial limit or no legally enforceable right yet, there is no constructive receipt.", star: false },
    { id: "5c06", front: "Paycheck available Dec 31, but the employee asks for it to be mailed", back: "Constructively received on Dec 31: the employee could have collected it and chose not to.", star: false },
    { id: "5c07", front: "Tax benefit rule", back: "A recovery of something deducted earlier is income only to the extent the earlier deduction reduced your tax.", star: false },
    { id: "5c08", front: "Taxability of a state income tax refund", back: "Taxable only if you itemized in the prior year, and only up to the excess of itemized deductions over the standard deduction.", star: false },
    { id: "5c09", front: "When does a deduction give no tax benefit?", back: "When you took the standard deduction, the expense did not clear a threshold, a ceiling limited it, or it was phased out.", star: false },
    { id: "5c10", front: "Claim of right", back: "Income received with no restriction is taxed when received, even if you repay it later. Deduct the repayment in the year you repay it; never amend the earlier return.", star: false },
    { id: "5c11", front: "Tax benefit rule vs claim of right", back: "Tax benefit: getting back something you DEDUCTED is income only to the extent it helped. Claim of right: paying back income you REPORTED is a deduction in the repayment year.", star: false, trap: true },
    { id: "5c12", front: "Assignment of income: services", back: "Income from services is taxed to the person who earns it, even if it is paid to someone else (Lucas v. Earl).", star: false },
    { id: "5c13", front: "Assignment of income: property", back: "Income from property is taxed to its owner when the income accrues. To shift it, give away the property itself, not just the interest coupons (Helvering v. Horst).", star: false },
    { id: "5c14", front: "Treasure trove", back: "Found property you can legally keep is income at FMV in the year you take undisputed possession, e.g. cash found in a used piano.", star: false },
    { id: "5c15", front: "Forms of receipt that are income", back: "Cash, other property, services, forgiveness of debt, and someone else paying your expenses. Non-cash items count at FMV.", star: false },
    { id: "5c16", front: "Accounting period for individuals", back: "Individuals always use the calendar year.", star: false },
    { id: "5c17", front: "Accrual method: when is income recognized?", back: "When all events have occurred that fix the right to receive it and the amount can be determined with reasonable accuracy.", star: false },
    { id: "5c18", front: "Who may use the cash method for a business?", back: "A business whose average annual gross receipts for the prior 3 years are $32 million or less (2026). Above that, accrual is required. Accrual can always be elected.", star: false },
    { id: "5c19", front: "Personal and investment activities: method", back: "Cash method: wages, interest and dividends are income when received or constructively received.", star: false },
    { id: "5c20", front: "Changing an accounting method", back: "File Form 3115 and get IRS consent, even when moving from an impermissible to a permissible method.", star: false },
    { id: "5c21", front: "Prepaid rent, prepaid interest, nonrefundable deposits", back: "Taxed when received under either the cash or the accrual method.", star: false, trap: true },
    { id: "5c22", front: "Refundable security deposit", back: "Not income when received. It becomes income only when the landlord keeps it.", star: false, trap: true },
    { id: "5c23", front: "Prepaid services or goods: one-year deferral", back: "Accrual method with an applicable financial statement (AFS): year 1, the part the AFS shows as earned; year 2, all the rest. Without an AFS, taxed when received.", star: false },
    { id: "5c24", front: "Recovery of capital", back: "Amounts that are a return of your basis are not income.", star: false },
    { id: "5c25", front: "Renting out part of your home", back: "Deduct only the costs of the rented part. Split shared expenses by square footage.", star: false },
    { id: "5c26", front: "Schedule C", back: "Sole proprietorships and single-member LLCs owned by an individual, plus royalties from a business such as writing books or songs.", star: false },
    { id: "5c27", front: "Schedule E", back: "Page 1: rentals and investment royalties. Page 2: K-1 income from partnerships and S corporations. Rental net income flows to Schedule 1.", star: false },
    { id: "5c28", front: "Reporting a Schedule K-1 amount", back: "The K-1 already shows the owner's share, so never multiply it by the ownership percentage. Items keep their character (ordinary, capital gain) when they pass through.", star: false },
    { id: "5c29", front: "Pass-through entity", back: "A partnership, LLC or S corporation pays no income tax itself. Its income passes through to the owners, who report their K-1 shares.", star: false }
  ],
  mc: [
    {
      id: "5q01",
      q: "Felix, a cash-basis consultant, finds a client's check in his mailbox on December 31, 2026, but does not open the envelope until January 3, 2027. When is the payment income?",
      opts: ["2026", "2027, when the envelope is opened", "2027, when the check is deposited", "Whichever year Felix chooses"],
      why: "A check in the mailbox on Dec 31 is constructively received that day, opened or not. Waiting to open or deposit it does not defer the income.",
      star: false
    },
    {
      id: "5q02",
      q: "On December 26, 2026, a customer hands Gina, a cash-basis tutor, a check dated January 5, 2027. When is it income?",
      opts: ["2027", "2026, because Gina has the check in hand", "2026, under constructive receipt", "Split evenly between 2026 and 2027"],
      why: "A post-dated check cannot be cashed until its date, a substantial limit, so there is no receipt in 2026. Treating physical possession as receipt is the trap.",
      star: false
    },
    {
      id: "5q03",
      q: "In which situation is the money NOT constructively received in 2026?",
      opts: ["A bonus is offered on Dec 20, but only if the employee gives up all future bonuses", "Interest is credited on Dec 31 to a savings account that can be withdrawn at any time", "A paycheck is ready for pickup on Dec 31, but the employee asks for it to be mailed", "Customer checks wait in a post office box that the owner avoids checking Dec 29 to 31"],
      why: "Giving up future bonuses is a substantial limitation, so the bonus is not constructively received. In the other cases the money was available without limits.",
      star: false
    },
    {
      id: "5q04",
      q: "Hector, single, itemized $17,000 of deductions on his 2025 return, including state income tax. The 2025 standard deduction was $15,750. In 2026 he receives a $2,000 state tax refund. How much is taxable in 2026?",
      opts: ["$1,250", "$2,000", "$0", "$750"],
      why: "Under the tax benefit rule the refund is taxable only up to the benefit: 17,000 - 15,750 = 1,250. Including the full 2,000 ignores that he would have had a 15,750 deduction anyway.",
      star: false,
      trap: true
    },
    {
      id: "5q05",
      q: "Inez took the standard deduction on her 2025 return. In 2026 she receives a $900 refund of 2025 state income tax. How much is taxable?",
      opts: ["$0", "$900", "$450", "$900, but only if her AGI rose in 2026"],
      why: "She never deducted the state tax, so recovering it gave no tax benefit and none of it is income. The full 900 is the tempting wrong answer.",
      star: false
    },
    {
      id: "5q06",
      q: "Kurt receives a $6,000 bonus in 2026 with no restrictions. In 2027 his employer finds an error and he repays $2,500. How is this handled?",
      opts: ["Include $6,000 in 2026 and deduct $2,500 in 2027", "Amend the 2026 return to report $3,500", "Include only $3,500 in 2026", "Report nothing until 2027, when the amount is final"],
      why: "Under claim of right, income received without restriction is taxed when received, and the repayment is deducted in the year repaid. Amending the earlier return is the trap.",
      star: false,
      trap: true
    },
    {
      id: "5q07",
      q: "Mona, a graphic designer, tells a client to pay her $2,000 fee directly to her brother. Who is taxed on the $2,000?",
      opts: ["Mona", "Her brother", "Each of them on $1,000", "Neither, because it is a gift"],
      why: "Income from services is taxed to the person who earned it, even when it is redirected to someone else.",
      star: false
    },
    {
      id: "5q08",
      q: "Walt keeps his corporate bonds but gives his daughter the interest coupons that come due this year. Who is taxed on the interest?",
      opts: ["Walt, because he still owns the bonds", "His daughter, because she collects the interest", "Each of them on half", "Neither, because the coupons were a gift"],
      why: "Income from property is taxed to the owner of the property. To shift the income, Walt would have to give away the bonds themselves.",
      star: false
    },
    {
      id: "5q09",
      q: "In 2025 Pia buys a used piano for $300. In 2026 she finds $4,000 of cash hidden inside, and her right to keep it is undisputed that year. What does she report?",
      opts: ["$4,000 of income in 2026", "$3,700 of income in 2026, net of the piano's cost", "$4,000 of income in 2025, when she bought the piano", "Nothing, because found property is a gift"],
      why: "Treasure trove is income at FMV in the year of undisputed possession, so 4,000 in 2026. The piano's price is its own basis and does not offset the find.",
      star: false
    },
    {
      id: "5q10",
      q: "A sole proprietorship had gross receipts of $29 million, $31 million and $33 million over the last three years. Can it use the cash method in 2026?",
      opts: ["Yes, its average of $31 million is under the $32 million limit", "No, the latest year's $33 million is over the limit", "No, its three-year total of $93 million is over the limit", "Yes, because a sole proprietor may always use the cash method"],
      why: "The test uses the average: (29 + 31 + 33) / 3 = 31 million, which is $32 million or less. Looking only at the latest year is the common mistake.",
      star: false
    },
    {
      id: "5q11",
      q: "Quinn, an accrual-method business with an AFS, receives $4,800 on November 1, 2026 for 24 months of service starting that day and uses the one-year deferral. How is it taxed?",
      opts: ["$400 in 2026 and $4,400 in 2027", "$4,800 in 2026", "$400 in 2026, $2,400 in 2027 and $2,000 in 2028", "$2,400 in 2026 and $2,400 in 2027"],
      why: "4,800 / 24 = 200 a month; the AFS shows 2 x 200 = 400 earned in 2026, and all the rest, 4,400, is taxed in 2027. Following the financial statement spread into 2028 is the trap, because the deferral never goes past the next year.",
      star: false
    },
    {
      id: "5q12",
      q: "Sofia, an accrual-method landlord, signs a lease on December 1, 2026 and collects December's rent of $1,500, the last month's rent of $1,500, and a $1,500 refundable security deposit. How much is 2026 income?",
      opts: ["$3,000", "$1,500", "$4,500", "$1,500 now, and $3,000 when the lease ends"],
      why: "Prepaid rent is taxed when received under either method, so 1,500 + 1,500 = 3,000. The refundable deposit is not income unless she keeps it, so 4,500 is wrong.",
      star: false,
      trap: true
    },
    {
      id: "5q13",
      q: "Victor owns 40% of a partnership whose K-1 to him shows $30,000 of ordinary income. He also owns S corporation stock whose K-1 shows a $6,000 ordinary loss. What net amount does he report on Schedule E, page 2?",
      opts: ["$24,000", "$9,600", "$12,000", "$36,000"],
      why: "K-1 amounts are already his share, so net 30,000 - 6,000 = 24,000. Multiplying by 40% (9,600 or 12,000) is the mistake to avoid.",
      star: false
    },
    {
      id: "5q14",
      q: "Where does a professional author report royalties from the novels she writes?",
      opts: ["Schedule C", "Schedule E, page 1", "Schedule E, page 2", "Form 1040, line 2b"],
      why: "Royalties from writing as a business go on Schedule C. Schedule E page 1 is for investment royalties the taxpayer does not actively produce.",
      star: false
    },
    {
      id: "5q15",
      q: "All of the following are reported on Schedule E EXCEPT:",
      opts: ["Net profit of a single-member LLC owned by an individual", "Rent from a duplex held as an investment", "Royalties from oil rights the taxpayer does not manage", "K-1 income from an S corporation"],
      why: "A single-member LLC owned by an individual reports on Schedule C, like a sole proprietorship. Rentals, investment royalties and K-1 income all go on Schedule E.",
      star: false
    },
    {
      id: "5q16",
      q: "Tess rents out a 300 square foot room in her 1,500 square foot home. Her utilities for the year are $4,000. How much of the utilities can she deduct against the rent?",
      opts: ["$800", "$4,000", "$2,000", "$0"],
      why: "Shared costs are split by square footage: 300 / 1,500 = 20%, and 20% x 4,000 = 800. Deducting the full 4,000 includes her personal use of the home.",
      star: false
    },
    {
      id: "5q17",
      q: "A business wants to switch from an impermissible accounting method to a permissible one. What must it do?",
      opts: ["File Form 3115 and obtain IRS consent", "Simply start using the new method on its next return", "Amend every open year to the new method", "Nothing, because consent is needed only to switch away from a permissible method"],
      why: "Any change in accounting method needs IRS consent through Form 3115, even a change that fixes an impermissible method.",
      star: false
    },
    {
      id: "5q18",
      q: "Jules's landlord forgives $1,200 of rent in exchange for Jules painting the building. How much income does Jules have?",
      opts: ["$1,200", "$0, because no cash changed hands", "$600", "$1,200, but only if he paints professionally"],
      why: "Having an expense paid or canceled in exchange for services is income at its value, 1,200. Cash is not required for income.",
      star: false
    },
    {
      id: "5q19",
      q: "Theo's accrual-method business has no applicable financial statement. In December 2026 it receives $3,600 for 12 months of service starting December 1. How is the payment taxed?",
      opts: ["$3,600 in 2026", "$300 in 2026 and $3,300 in 2027", "$0 in 2026 and $3,600 in 2027", "$1,800 in each of 2026 and 2027"],
      why: "Without an AFS, the slides tax prepaid service income when received, so all 3,600 is 2026 income. The 300 and 3,300 split is the deferral that only a business with an AFS can use.",
      star: false
    }
  ]
});
