ACCT.addChapter({
  ch: 6,
  title: "Prizes, scholarships, divorce, damages, life insurance and forgiven debt",
  cards: [
    { id: "6c01", front: "Starting rule for personal receipts", back: "Every increase in wealth is income unless a specific exclusion applies.", star: false },
    { id: "6c02", front: "Taxable prizes and awards", back: "Included at FMV: gambling, lotteries, raffles and scratch tickets, game and reality shows, office pools, MVP awards, contest prizes. Costs of winning do not reduce the income.", star: false },
    { id: "6c03", front: "Bonus for winning a championship (such as a Super Bowl bonus)", back: "Taxable in full. Illegal income is taxable too.", star: false },
    { id: "6c04", front: "Civic, artistic, scientific or literary achievement award", back: "Excluded only if the winner was selected without applying, owes no future services, and has the award sent directly to a charity or government agency (the Nobel Prize is the classic case).", star: false },
    { id: "6c05", front: "Olympic medals and prize money", back: "Excluded, unless the athlete's AGI is more than 1 million.", star: false },
    { id: "6c06", front: "Scholarships: excluded portion", back: "For a degree candidate, only the part spent on tuition, required fees, and required books, supplies and equipment.", star: false },
    { id: "6c07", front: "Scholarships: taxable portion", back: "Room, board, travel, optional items and any excess are taxable, as is pay for services (such as cash wages to a graduate assistant).", star: false },
    { id: "6c08", front: "Graduate assistant tuition waiver", back: "Excluded, even though it is given for services. Payments under a required work-learning-service program are also excluded.", star: false },
    { id: "6c09", front: "Alimony: decree before 2019 vs 2019 or later", back: "Before 2019: the payer deducts it for AGI and the recipient includes it. 2019 or later: neither deducts nor includes.", star: false },
    { id: "6c10", front: "Requirements for payments to count as alimony", back: "Cash, required by a written decree or agreement, paid to or on behalf of the ex-spouse, ending at the recipient's death, and paid while the two do not share a household.", star: false },
    { id: "6c11", front: "Child support", back: "Never deductible by the payer and never income to the recipient. Any amount that drops when a child reaches a milestone (turns 18, leaves school) is child support.", star: false },
    { id: "6c12", front: "Short payment of alimony plus child support", back: "Payments count as child support first; only what is left over is alimony.", star: false },
    { id: "6c13", front: "Property transferred in a divorce", back: "Not a taxable event: no income, no deduction. The recipient takes the transferor's carryover basis.", star: false },
    { id: "6c14", front: "Damages for a physical injury or physical sickness", back: "Compensatory damages are excluded, including lost wages and emotional distress caused by the physical injury. The exclusion also covers awards to a family member of the injured person.", star: false },
    { id: "6c15", front: "Punitive damages", back: "Always taxable, even when tied to a physical injury.", star: false, trap: true },
    { id: "6c16", front: "Damages with no physical injury (discrimination, defamation)", back: "Lost wages and emotional distress awards are taxable.", star: false },
    { id: "6c17", front: "Damages that reimburse medical costs", back: "Excluded, except to the extent the costs were deducted earlier and that deduction gave a tax benefit.", star: false },
    { id: "6c18", front: "Wrongful death, wrongful incarceration and workers' compensation", back: "Excluded (for wrongful death, only the non-punitive part).", star: false },
    { id: "6c19", front: "Lawyer's contingent fee on a taxable award", back: "100% of the taxable award is income; the fee does not shrink it. Legal fees are deductible only for business claims, or for AGI on a discrimination claim.", star: false, trap: true },
    { id: "6c20", front: "Life insurance paid on the insured's death", back: "Excluded from income. One reason: the proceeds are generally subject to estate tax.", star: false },
    { id: "6c21", front: "Accelerated death benefits", back: "Excluded when paid to someone terminally ill (death expected within 24 months) or chronically ill (cannot do 2 of 6 daily activities for 90 days; up to 430 a day).", star: false },
    { id: "6c22", front: "Selling a life insurance policy or buying someone else's", back: "Treated like an investment: a gain is capital gain, a loss is not deductible.", star: false },
    { id: "6c23", front: "Employer death benefit paid to a deceased employee's family", back: "Taxable compensation, unlike life insurance proceeds.", star: false },
    { id: "6c24", front: "Annuitized life insurance proceeds", back: "Each payment is part return of the original amount and part earnings; only the earnings are taxed.", star: false },
    { id: "6c25", front: "Forgiven debt (COD): rule and exclusions", back: "Generally income. Excluded when it is a gift, in bankruptcy, while insolvent (up to the insolvency), for qualified real property business debt, for certain student loans, and for principal-residence acquisition debt up to 750,000.", star: false },
    { id: "6c26", front: "Insolvency exclusion", back: "Insolvency = liabilities minus assets. Forgiven debt is excluded only up to that amount; the rest is income.", star: false },
    { id: "6c27", front: "Tax attributes cut by excluded bankruptcy or insolvency COD", back: "In order: NOLs, capital loss carryovers, basis of property, passive losses. The taxpayer may elect to reduce depreciable basis first.", star: false },
    { id: "6c28", front: "Forgiven qualified real property business debt; forgiven home acquisition debt", back: "No income, even if solvent, but the property's basis is reduced by the forgiven amount.", star: false },
    { id: "6c29", front: "Forgiven student loans", back: "Excluded if forgiven because of the student's death or total and permanent disability, or for working a required period for certain employers (public service).", star: false },
    { id: "6c30", front: "Other inclusions and exclusions", back: "Taxable: unemployment compensation, jury duty pay, income in respect of a decedent. Excluded: welfare, foster-care reimbursements actually spent on the child, a minister's parsonage or housing allowance.", star: false }
  ],
  mc: [
    {
      id: "6q01",
      q: "Mia, a degree candidate, receives an 18,000 scholarship. She spends 11,000 on tuition and fees, 900 on required books, 1,200 on a laptop the school recommends but does not require, and 7,000 on a dorm room and meal plan. How much of the scholarship is taxable?",
      opts: ["$6,100", "$4,900", "$0", "$7,000"],
      why: "Only tuition, fees and required books are excluded: 18,000 - (11,000 + 900) = 6,100. 4,900 wrongly excludes the optional laptop; room and board never qualify.",
      star: false
    },
    {
      id: "6q02",
      q: "Nina wins a vacation worth 4,000 on a game show, 600 on scratch tickets (she spent 40 on tickets) and 250 in an office pool. How much must she include in income?",
      opts: ["$4,850", "$4,810", "$4,000", "$850"],
      why: "All prizes are income at FMV: 4,000 + 600 + 250 = 4,850. Costs of winning do not reduce the income, so 4,810 is wrong, and a noncash prize counts just like cash.",
      star: false
    },
    {
      id: "6q03",
      q: "Which achievement award is excluded from the winner's income?",
      opts: ["A science prize the winner never applied for, requiring no future services, paid directly to a charity at the winner's direction", "A science prize the winner applied for and donated to charity after receiving it", "A literary prize paid to the author, who must give three lectures for the sponsor", "A 10,000 MVP award at a sporting event"],
      why: "All three conditions must hold: no action to enter, no future services, and the award goes straight to a charity or government unit. Receiving it first and then donating fails the test.",
      star: false
    },
    {
      id: "6q04",
      q: "Under a 2016 divorce decree, Paul pays his ex-wife 2,000 a month. The payment drops to 1,500 a month when their daughter turns 18. How much of a full year's payments is taxable alimony to the ex-wife?",
      opts: ["$18,000", "$24,000", "$0", "$6,000"],
      why: "The 500 a month that drops at the child's milestone is child support: 500 x 12 = 6,000. Alimony = 24,000 - 6,000 = 18,000, taxable because the decree is before 2019.",
      star: false,
      trap: true
    },
    {
      id: "6q05",
      q: "Under a divorce decree finalized in 2021, Kevin pays his ex-husband 30,000 of cash alimony during 2026. What are the tax results?",
      opts: ["Kevin deducts nothing and his ex-husband includes nothing", "Kevin deducts 30,000 for AGI and his ex-husband includes 30,000", "Kevin deducts 30,000 and his ex-husband includes nothing", "Kevin deducts nothing and his ex-husband includes 30,000"],
      why: "For decrees in 2019 or later, alimony is neither deductible nor income. The deduct-and-include treatment applies only to decrees before 2019.",
      star: false
    },
    {
      id: "6q06",
      q: "A 2017 decree requires Dana to pay 10,000 of alimony and 10,000 of child support for the year. She pays only 14,000. How much alimony does the recipient include in income?",
      opts: ["$4,000", "$10,000", "$7,000", "$14,000"],
      why: "Short payments go to child support first: 14,000 - 10,000 = 4,000 of alimony. 10,000 treats the payments as alimony first; 7,000 splits them pro rata.",
      star: false
    },
    {
      id: "6q07",
      q: "For a pre-2019 decree, all of the following are requirements for payments to count as alimony EXCEPT:",
      opts: ["Payments must continue to the recipient's estate after death", "Payments must be in cash", "Payments must be required by a written decree or agreement", "The payer and recipient may not live in the same household"],
      why: "Alimony must END at the recipient's death; a payment that continues after death fails. The other three are true requirements.",
      star: false
    },
    {
      id: "6q08",
      q: "In a divorce, Aaron receives the family's vacation cabin, which had a basis of 200,000 and is worth 350,000. What is Aaron's income and basis?",
      opts: ["No income; basis 200,000", "150,000 of income; basis 350,000", "No income; basis 350,000", "350,000 of income; basis 350,000"],
      why: "A property transfer in a divorce is not taxable, and the recipient takes the carryover basis of 200,000. A stepped-up basis to FMV is the tempting mistake.",
      star: false
    },
    {
      id: "6q09",
      q: "Luis is hurt in a car crash and receives: medical costs 20,000 (never deducted), lost wages 30,000, emotional distress from the injury 15,000 and punitive damages 40,000. How much is taxable?",
      opts: ["$40,000", "$70,000", "$105,000", "$0"],
      why: "With a physical injury, all compensatory damages (medical, lost wages, emotional distress) are excluded. Punitive damages are always taxable, so 40,000. 70,000 wrongly taxes the lost wages.",
      star: false,
      trap: true
    },
    {
      id: "6q10",
      q: "Erin wins a workplace discrimination suit (no physical injury): back pay 60,000, emotional distress 25,000 and punitive damages 15,000. Her lawyer keeps a 30,000 contingent fee. How much gross income does Erin report?",
      opts: ["$100,000", "$70,000", "$15,000", "$75,000"],
      why: "With no physical injury, every part of the award is taxable: 60,000 + 25,000 + 15,000 = 100,000. The lawyer's fee does not shrink the income (it is instead deductible for AGI on a discrimination claim), so 70,000 is wrong.",
      star: false,
      trap: true
    },
    {
      id: "6q11",
      q: "Talia is injured on the job and receives workers' compensation 18,000, emotional distress from the injury 6,000, punitive damages 20,000 and a 9,000 medical payment. Earlier she took a medical deduction for these costs that gave her a 7,000 tax benefit. She pays 10,000 in personal attorney fees. What is her taxable income from these items?",
      opts: ["$27,000", "$29,000", "$33,000", "$17,000"],
      why: "Punitive 20,000 plus the medical payment to the extent of the earlier benefit, 7,000: 27,000. Workers' comp and injury-related distress are excluded, and personal attorney fees are not deductible, so 17,000 is wrong.",
      star: false
    },
    {
      id: "6q12",
      q: "When Gwen's husband dies, she receives 300,000 from his life insurance policy and a 20,000 death benefit from his employer. How much is taxable to Gwen?",
      opts: ["$20,000", "$0", "$320,000", "$300,000"],
      why: "Life insurance paid on death is excluded, but an employer's death benefit is taxable compensation. Treating both as tax-free insurance is the trap.",
      star: false
    },
    {
      id: "6q13",
      q: "Which receipt from a life insurance policy is excluded from income?",
      opts: ["Benefits paid to the insured, whose doctor certifies death is expected within 18 months", "The gain an investor makes by selling a policy bought from its original owner", "The earnings portion of each annuitized payment to a beneficiary", "A death benefit paid by an employer to an employee's family"],
      why: "A terminally ill person (death expected within 24 months) excludes accelerated benefits. Sale gains are capital gain, annuity earnings are taxed, and employer death benefits are pay.",
      star: false
    },
    {
      id: "6q14",
      q: "Jordan is not in bankruptcy. A lender forgives 30,000 of his debt when his liabilities are 90,000 and his assets are 70,000. How much forgiven debt is income?",
      opts: ["$10,000", "$0", "$30,000", "$20,000"],
      why: "He is insolvent by 90,000 - 70,000 = 20,000, so 20,000 is excluded and the other 10,000 is income. 20,000 is the excluded part, not the taxable part.",
      star: false
    },
    {
      id: "6q15",
      q: "In bankruptcy, 40,000 of Sofia's debt is forgiven. She has an NOL of 15,000, a capital loss carryover of 10,000 and property basis of 30,000, and makes no election. What is her property basis afterward?",
      opts: ["$15,000", "$0", "$30,000", "$20,000"],
      why: "Default order: NOL 15,000 to 0, capital loss 10,000 to 0, then the remaining 15,000 cuts basis from 30,000 to 15,000. Basis falls to 0 only if she elects to reduce basis first.",
      star: false
    },
    {
      id: "6q16",
      q: "Same facts (40,000 forgiven in bankruptcy; NOL 15,000; capital loss carryover 10,000; depreciable property basis 30,000), but Sofia elects to reduce basis first. What NOL remains?",
      opts: ["$5,000", "$0", "$15,000", "$10,000"],
      why: "Basis absorbs 30,000 and drops to 0; the other 10,000 cuts the NOL from 15,000 to 5,000, and the capital loss carryover survives. 0 is the default-order result.",
      star: false
    },
    {
      id: "6q17",
      q: "All of the following forgiven debts are excluded from income EXCEPT:",
      opts: ["A credit card balance a bank forgives for a solvent cardholder", "A loan a parent forgives out of love for an adult child", "Debt discharged in bankruptcy", "A student loan forgiven because the student became totally and permanently disabled"],
      why: "Forgiven debt is income unless an exclusion applies. A solvent taxpayer's credit card debt fits none; gift, bankruptcy and disability forgiveness are all excluded.",
      star: false
    },
    {
      id: "6q18",
      q: "Owners of their main home, Ali and Hana have 60,000 of acquisition debt forgiven by the lender. What is the result?",
      opts: ["No income; the home's basis drops by 60,000", "60,000 of income", "No income and no basis change", "No income; the forgiveness counts as a gift"],
      why: "Principal-residence acquisition debt forgiveness is excluded up to 750,000, but the basis of the home is reduced by the amount forgiven.",
      star: false
    },
    {
      id: "6q19",
      q: "During the year Theo receives jury duty pay he keeps of 400, unemployment compensation of 5,000, SNAP benefits of 3,000, a 1,000 gift from his uncle and 2,000 of foster-care reimbursements, all spent on the child. How much is included in income?",
      opts: ["$5,400", "$11,400", "$5,000", "$6,400"],
      why: "Jury pay 400 + unemployment 5,000 = 5,400. Welfare, gifts and foster-care reimbursements are excluded; 6,400 wrongly taxes the gift.",
      star: false
    },
    {
      id: "6q20",
      q: "Which of the following is NOT excluded from income?",
      opts: ["Unemployment compensation", "Welfare payments", "A minister's parsonage housing allowance", "Foster-care reimbursements spent on the child"],
      why: "Unemployment compensation replaces wages, so it is taxable. The other three are excluded.",
      star: false
    }
  ]
});
