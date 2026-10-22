ACCT.addChapter({
  ch: 4,
  title: "Dependents, filing status and the kiddie tax",
  cards: [
    { id: "4c01", front: "Order of the dependency tests", back: "Test for a qualifying child first. Only if that fails, test for a qualifying relative. The tests are applied each year, as of the last day of the year.", star: false },
    { id: "4c02", front: "Qualifying child: the six tests", back: "Relationship, residence, age, support (not self-supporting), joint return, and citizenship.", star: false },
    { id: "4c03", front: "Qualifying child: relationship test", back: "Your child, stepchild, adopted or foster child, sibling, half or step sibling, or a descendant of any of them. Cousins do NOT qualify.", star: false },
    { id: "4c04", front: "Qualifying child: residence test", back: "The child lived with you for more than half the year.", star: false },
    { id: "4c05", front: "Qualifying child: age test", back: "Under 19 at year-end, or under 24 and a full-time student; any age if permanently and totally disabled. The child must also be younger than you.", star: false },
    { id: "4c06", front: "What does \"under 24\" mean?", back: "23 or younger. A 24-year-old full-time student fails the qualifying child age test.", star: false, trap: true },
    { id: "4c07", front: "Support test: qualifying child vs qualifying relative", back: "Qualifying child: the child must NOT provide over half of their own support. Qualifying relative: YOU must provide over half of their support.", star: false, trap: true },
    { id: "4c08", front: "Joint return test", back: "The dependent cannot file a joint return, unless it is filed only to claim a refund.", star: false },
    { id: "4c09", front: "Citizenship test", back: "The dependent must be a U.S. citizen, or a resident of Canada or Mexico.", star: false },
    { id: "4c10", front: "Qualifying relative: the five tests", back: "Relationship (or household member all year), gross income, support, joint return, and citizenship. No age test, and no residence test except on the household-member route.", star: false },
    { id: "4c11", front: "Qualifying relative: relationship test", back: "Wider than for a qualifying child: also parents, grandparents, aunts, uncles, nieces, nephews, step-relatives and in-laws. Not cousins, unless they lived with you all year as a household member.", star: false },
    { id: "4c12", front: "Qualifying relative: gross income test", back: "Gross income must be under $5,300 for 2026 ($5,200 for 2025). Tax-exempt income does not count, and gross income is not reduced by expenses.", star: false },
    { id: "4c13", front: "Multiple support agreement", back: "When a group together provides over 50% of someone's support but no one person does, any member who provided over 10% may claim the dependent if the other over-10% members sign off (Form 2120).", star: false },
    { id: "4c14", front: "Can a spouse be a dependent?", back: "Never.", star: false },
    { id: "4c15", front: "Qualifying child tiebreakers", back: "A parent beats a non-parent. Between two parents: the one the child lived with longer, then the higher AGI. If no parent claims the child: the highest AGI wins.", star: false },
    { id: "4c16", front: "Divorced parents and Form 8332", back: "The custodial parent can release the dependency claim to the other parent on Form 8332, but head of household status stays with the custodial parent.", star: false },
    { id: "4c17", front: "When is filing status determined?", back: "On December 31 (or the date of death), with marital status set by state law. A common-law marriage counts as a marriage.", star: false },
    { id: "4c18", front: "Divorce nisi vs legal separation", back: "A Massachusetts divorce nisi leaves the couple married for its 90 days. A decree of legal separation makes them unmarried, so each files single (or head of household if eligible).", star: false },
    { id: "4c19", front: "Filing statuses, best to worst", back: "MFJ and qualifying surviving spouse, then head of household, then single, then married filing separately.", star: false },
    { id: "4c20", front: "MFS: one spouse itemizes", back: "The other spouse must itemize too, even if that spouse's itemized deductions are smaller than the standard deduction.", star: true, trap: true },
    { id: "4c21", front: "Other MFS restrictions", back: "No earned income credit, child and dependent care credit, education credits, or adoption credit or exclusion. The net capital loss deduction drops to $1,500.", star: false },
    { id: "4c22", front: "Head of household requirements", back: "Unmarried (or an abandoned spouse) on Dec 31, paid over half the cost of the home, and a qualifying child or qualifying relative lived there more than half the year.", star: false },
    { id: "4c23", front: "Head of household: dependent parent exception", back: "A dependent parent need not live with you (e.g. a nursing home) if you pay over half the cost of the parent's home.", star: false },
    { id: "4c24", front: "Dependents who do NOT give head of household status", back: "A non-relative who qualifies only as a household member (you file single and still claim the dependent), and anyone claimed only through a multiple support agreement.", star: false },
    { id: "4c25", front: "Costs of maintaining a household", back: "Rent, mortgage interest, utilities, repairs and maintenance, property insurance, and food eaten in the home.", star: false },
    { id: "4c26", front: "Abandoned spouse", back: "Still legally married, but the spouse did not live in the home during the last 6 months of the year, your dependent child lived there, and you paid over half the cost: file head of household. Contact with the spouse does not matter.", star: false, trap: true },
    { id: "4c27", front: "Qualifying surviving spouse (QSS)", back: "MFJ in the year of death. QSS for the next 2 years only if a dependent child lives with you, tested each year; then head of household if still eligible. With no dependent child, file single after the year of death.", star: false, trap: true },
    { id: "4c28", front: "Dependent's standard deduction (2026)", back: "The greater of $1,350 or earned income + $450, but no more than the regular $16,100 single standard deduction.", star: false },
    { id: "4c29", front: "Kiddie tax", back: "A child's unearned income above $2,700 (net unearned income) is taxed at the parent's rate. Earned income is never kiddie-taxed. Applies to a child under 18, or a child who is 18 (or a full-time student 19 to 23) whose earned income is less than half of their support.", star: false },
    { id: "4c30", front: "Who must file a return?", back: "Anyone whose gross income is at least their standard deduction, counting the 65-or-older add-on but not the blindness add-on. MFS: as little as $5. Net self-employment earnings of $400 or more: always. Number of dependents does not matter.", star: false, trap: true }
  ],
  mc: [
    {
      id: "4q01",
      q: "Which of these people can NEVER be your dependent through the relationship test alone (that is, without living with you all year)?",
      opts: ["Your first cousin", "Your stepbrother", "Your niece", "Your father-in-law"],
      why: "Cousins fail both relationship tests and can qualify only as a household member who lived with you all year. Stepsiblings and nieces can be qualifying children, and in-laws are qualifying relatives.",
      star: false
    },
    {
      id: "4q02",
      q: "Raul's son turned 24 in 2026, was a full-time student all year, lived at home and had no income. Is he Raul's qualifying child?",
      opts: ["No, he fails the age test, so test him as a qualifying relative instead", "Yes, full-time students qualify through age 24", "Yes, because he has no income", "No, because full-time students can never be dependents"],
      why: "Under 24 means 23 or younger, so a 24-year-old student fails the qualifying child age test. He may still be a qualifying relative, which has no age test.",
      star: false,
      trap: true
    },
    {
      id: "4q03",
      q: "Which statement about the support tests is correct?",
      opts: ["A qualifying child must not provide over half of their own support; for a qualifying relative, the taxpayer must provide over half", "A qualifying child must receive over half of their support from the taxpayer; a qualifying relative must not provide over half of their own", "Both categories require the taxpayer to provide over half of the support", "Neither category has a support test"],
      why: "The qualifying child test looks at the child's own support; the qualifying relative test looks at what the taxpayer provided. Swapping the two is the standard trap.",
      star: false,
      trap: true
    },
    {
      id: "4q04",
      q: "Lena provides over half the support of her 70-year-old mother, who lives in her own apartment. In 2026 her mother has $4,900 of taxable pension income and $8,000 of municipal bond interest. Can Lena claim her mother as a dependent?",
      opts: ["Yes, tax-exempt interest is not gross income, so her gross income is under $5,300", "No, her total income of $12,900 is over $5,300", "No, a parent must live with the taxpayer", "No, a dependent relative must be under 19"],
      why: "Only the 4,900 pension is gross income, which is under the 5,300 limit for 2026. A qualifying relative has no residence or age test.",
      star: false
    },
    {
      id: "4q05",
      q: "Jada, 16, is claimed as a dependent by her parents. In 2026 she earns $3,000 of wages and has no other income. What is her standard deduction?",
      opts: ["$3,450", "$1,350", "$3,000", "$16,100"],
      why: "Greater of 1,350 or earned income + 450 = 3,000 + 450 = 3,450. Forgetting the $450 gives 3,000, and 16,100 is the regular deduction a dependent cannot use here.",
      star: false
    },
    {
      id: "4q06",
      q: "Theo, 14, is a dependent. In 2026 he earns $600 of wages and $1,500 of interest. What is his standard deduction?",
      opts: ["$1,350", "$1,050", "$2,550", "$16,100"],
      why: "Earned income + 450 = 600 + 450 = 1,050, which is below the 1,350 floor, so he gets 1,350. 2,550 wrongly adds the interest, which is not earned income.",
      star: false
    },
    {
      id: "4q07",
      q: "Lucy, 22, is a full-time student whose parents provide over half her support and claim her. In 2026 she earns $17,000 of wages. What is her standard deduction?",
      opts: ["$16,100", "$17,450", "$1,350", "$17,000"],
      why: "Earned income + 450 = 17,450, but the dependent's deduction is capped at the regular 16,100. 17,450 forgets the cap.",
      star: false
    },
    {
      id: "4q08",
      q: "Owen, 13, is a dependent with $4,100 of interest and dividends in 2026 and no earned income. How much of his income is taxed at his parents' rate?",
      opts: ["$1,400", "$2,750", "$4,100", "$50"],
      why: "Net unearned income = 4,100 - 2,700 = 1,400, taxed at the parents' rate. His taxable income is 4,100 - 1,350 = 2,750, but only the excess over 2,700 of unearned income is kiddie-taxed.",
      star: false
    },
    {
      id: "4q09",
      q: "Ruby, 15, is a dependent. In 2026 she has $3,200 of dividends and $5,000 of babysitting earnings. What are her taxable income and the amount taxed at her parents' rate?",
      opts: ["Taxable income $2,750; $500 at the parents' rate", "Taxable income $6,850; $500 at the parents' rate", "Taxable income $2,750; $2,750 at the parents' rate", "Taxable income $2,750; $5,500 at the parents' rate"],
      why: "Standard deduction = 5,000 + 450 = 5,450, so taxable income = 8,200 - 5,450 = 2,750; only 3,200 - 2,700 = 500 is taxed at the parents' rate. 6,850 uses the 1,350 floor by mistake, and 5,500 wrongly kiddie-taxes her earned income.",
      star: false
    },
    {
      id: "4q10",
      q: "Dana and Chris file separate returns for 2026. Chris itemizes $22,000 of deductions. Dana's own itemized deductions total $4,000. What deduction does Dana take?",
      opts: ["$4,000", "$16,100", "$20,100", "$11,000"],
      why: "If one spouse filing separately itemizes, the other must itemize too, so Dana deducts only her 4,000. Taking the 16,100 standard deduction is the trap this rule targets.",
      star: true,
      trap: true
    },
    {
      id: "4q11",
      q: "Which statement about married couples filing separately is correct?",
      opts: ["If one spouse itemizes, the other spouse must also itemize", "Each spouse may choose the standard deduction or itemize independently", "The spouse with the larger itemized total itemizes, and the other takes the standard deduction", "The spouses split one $32,200 standard deduction however they like"],
      why: "MFS spouses must be consistent: one itemizes, both itemize. Choosing independently is the mistake the exam is built around.",
      star: true,
      trap: true
    },
    {
      id: "4q12",
      q: "Each of the following applies to a couple filing married filing separately EXCEPT:",
      opts: ["Each spouse may still claim the education credits", "Neither spouse can claim the earned income credit", "Each spouse's net capital loss deduction is limited to $1,500", "Neither spouse can claim the child and dependent care credit"],
      why: "MFS filers lose the education credits, along with the earned income, dependent care and adoption benefits. The $1,500 capital loss limit is a real MFS rule.",
      star: false
    },
    {
      id: "4q13",
      q: "Ana is still legally married, but her husband moved out in March 2026. Her 8-year-old son, her dependent, lives with her, and she pays all the costs of the home. They talk every week. What is her best 2026 filing status?",
      opts: ["Head of household", "Married filing separately, because she is still married", "Single, because her husband left", "Qualifying surviving spouse"],
      why: "As an abandoned spouse (spouse gone the last 6 months, dependent child at home, over half the costs paid) she files head of household. Contact with the spouse does not matter.",
      star: false,
      trap: true
    },
    {
      id: "4q14",
      q: "Ben's wife died in 2024. Every year since, his dependent daughter has lived with him and he has paid all the costs of the home. What is his filing status for 2026?",
      opts: ["Qualifying surviving spouse", "Head of household", "Married filing jointly", "Single"],
      why: "He files MFJ in 2024, the year of death, then QSS for 2025 and 2026 because a dependent child lives with him. Head of household would start in 2027.",
      star: false,
      trap: true
    },
    {
      id: "4q15",
      q: "Carla's husband died in 2025. She has no dependents and did not remarry. What is her filing status for 2026?",
      opts: ["Single", "Qualifying surviving spouse", "Head of household", "Married filing jointly"],
      why: "QSS requires a dependent child; without one, she files single after the year of death. MFJ was available only for 2025.",
      star: false,
      trap: true
    },
    {
      id: "4q16",
      q: "Nora is unmarried and pays all the costs of her home. Her friend, who is not related to her, lived with her all year, had no income and is Nora's dependent. What is Nora's filing status?",
      opts: ["Single, while still claiming the friend as a dependent", "Head of household, because she supports a dependent in her home", "Qualifying surviving spouse", "Head of household, but only if the friend is over 65"],
      why: "A non-relative who qualifies only as a household member can be a qualifying relative dependent but does not give head of household status.",
      star: false
    },
    {
      id: "4q17",
      q: "Ivan is unmarried and pays over half the cost of the nursing home where his dependent mother lives. She does not live with him. What is his filing status?",
      opts: ["Head of household", "Single, because his mother does not live with him", "Married filing separately", "Single, unless his mother moves in for over half the year"],
      why: "A dependent parent may live in their own home, including a nursing home, if the taxpayer pays over half its cost. Requiring the parent to live with him is the trap.",
      star: false
    },
    {
      id: "4q18",
      q: "Each of the following affects whether a person must file a return EXCEPT:",
      opts: ["The number of dependents", "Filing status", "Being age 65 or older", "Having $400 or more of net self-employment earnings"],
      why: "The filing threshold depends on filing status, the 65-or-older add-on and self-employment earnings. The number of dependents does not change it.",
      star: false
    },
    {
      id: "4q19",
      q: "Hal is 68, single and blind. His 2026 gross income is $17,500, with no self-employment income. Must he file?",
      opts: ["No, his threshold is $18,150 and his income is below it", "Yes, his income exceeds the $16,100 standard deduction", "No, his threshold is $20,200 including the blindness add-on", "Yes, because anyone 65 or older must file"],
      why: "Only the age add-on counts for the filing test: 16,100 + 2,050 = 18,150, and 17,500 is below it. Adding the blindness amount too (20,200) is the trap.",
      star: false,
      trap: true
    },
    {
      id: "4q20",
      q: "Kim and Jordan are both 66 and file jointly for 2026. What is their filing threshold (the gross income at which they must file)?",
      opts: ["$35,500", "$32,200", "$33,850", "$36,300"],
      why: "Threshold = 32,200 + 2 x 1,650 = 35,500, since each spouse gets the 65-or-older add-on. 36,300 wrongly uses the 2,050 single amount, and 33,850 counts only one spouse.",
      star: false
    }
  ]
});
