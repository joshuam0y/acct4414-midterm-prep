ACCT.addChapter({
  ch: 7,
  title: "Wages, tips and fringe benefits",
  cards: [
    { id: "7c01", front: "Fringe benefits: general rule", back: "Every form of pay is taxable at FMV as wages unless a specific exclusion applies.", star: false },
    { id: "7c02", front: "Cash, gift cards and gift certificates from an employer", back: "Never qualify for a fringe-benefit exclusion; taxable at any amount.", star: false, trap: true },
    { id: "7c03", front: "Form W-2 box 1", back: "Taxable wages, tips and other compensation. Traditional 401(k) and 403(b) deferrals are already left out; personal use of a company car is included.", star: false },
    { id: "7c04", front: "Tip income", back: "All tips are taxable, reported or not. Tips of 20 or more in a month must be reported to the employer by the 10th of the next month; unreported tips go on Form 4137.", star: false },
    { id: "7c05", front: "Employer-paid insurance premiums that are excluded", back: "Health, long-term care and long-term disability premiums are excluded from the employee's income and deductible by the employer.", star: false },
    { id: "7c06", front: "Employer-paid short-term disability premiums", back: "The exception: included in the employee's income.", star: false, trap: true },
    { id: "7c07", front: "Disability benefits received", back: "Taxable if the employer paid the premiums tax-free; tax-free if the employee paid the premiums with after-tax money. If costs are shared, split by the percentage each paid.", star: false },
    { id: "7c08", front: "Health insurance benefits", back: "Excluded when they reimburse qualified medical expenses, even if the employer paid the premiums. A reimbursement above the qualified expenses is taxable.", star: false },
    { id: "7c09", front: "Long-term care insurance benefits", back: "Excluded up to 430 a day in 2026, and above that if used for actual long-term care services.", star: false },
    { id: "7c10", front: "Group-term life insurance", back: "The cost of the first 50,000 of coverage is excluded. Taxable amount = (coverage - 50,000) / 1,000 x the annual rate for the employee's age.", star: false },
    { id: "7c11", front: "Group-term life annual rates per 1,000 of excess coverage", back: "Under 25: 0.60. 25 to 29: 0.72. 30 to 34: 0.96. 35 to 39: 1.08. 40 to 44: 1.20. 45 to 49: 1.80. 50 to 54: 2.76. 55 to 59: 5.16. 60 to 64: 7.92. 65 to 69: 15.24. 70 and over: 24.72.", star: false },
    { id: "7c12", front: "Employer-paid premiums on whole-life insurance the employee owns", back: "Taxable to the employee. Only group-term coverage gets the 50,000 exclusion.", star: false },
    { id: "7c13", front: "Corporate-owned life insurance on an employee", back: "No tax to the employee, who cannot name the beneficiary. Proceeds are tax-free to the employer, and its premiums are not deductible.", star: false },
    { id: "7c14", front: "Employer-provided meals: tests for exclusion", back: "Excluded only if furnished for the employer's convenience, on the business premises, and in kind. Fail any test and the meals are taxable.", star: true },
    { id: "7c15", front: "Employer-provided lodging: tests for exclusion", back: "Excluded only if furnished for the employer's convenience, on the business premises, and accepted as a condition of employment.", star: true },
    { id: "7c16", front: "Convenience of the employer", back: "There is a business reason for providing the meals or lodging other than paying the employee.", star: true },
    { id: "7c17", front: "Meals provided in kind", back: "The employer provides the food itself. A cash allowance to buy meals is not in kind and is taxable.", star: true, trap: true },
    { id: "7c18", front: "Meals and lodging: excluded examples", back: "A hotel manager required to live at the hotel, firefighters' meals at the station, hospital cafeteria meals for on-call staff, and occasional supper money for overtime (de minimis).", star: true },
    { id: "7c19", front: "Meals and lodging: taxable example", back: "A university president's apartment off campus fails the business-premises test, so its value is taxable.", star: true },
    { id: "7c20", front: "Personal expenses the employer pays", back: "Always taxable: loans to the employee, a child's private-school tuition, the employee's vacation.", star: false },
    { id: "7c21", front: "Working condition fringe", back: "Excluded if the cost would have been deductible as a business expense had the employee paid it as a self-employed business owner.", star: false },
    { id: "7c22", front: "De minimis fringe", back: "Small and infrequent: office snacks and coffee, occasional personal copier or phone use, an annual holiday party. Never cash, gift cards or gift certificates; even 25 movie passes are taxable.", star: false, trap: true },
    { id: "7c23", front: "Nominal gifts to employees", back: "Excluded up to 25 per employee, as long as the gift is not cash, a gift card or a gift certificate.", star: false },
    { id: "7c24", front: "No-additional-cost services", back: "Excluded when the employer incurs no substantial added cost (an empty airline seat), in the line of business the employee works in. Covers the employee, spouse and dependents.", star: false },
    { id: "7c25", front: "Employee discounts", back: "Excluded up to 20% of the price for services, or up to the employer's gross profit percentage for goods. Never for real estate or securities.", star: false },
    { id: "7c26", front: "Safety and length-of-service achievement awards", back: "Excluded if tangible property (not cash), given for length of service or safety, with no similar award in the past 5 years. Limit 400, or 1,600 under a qualified plan; the excess is taxable.", star: false },
    { id: "7c27", front: "Educational assistance", back: "Up to 5,250 a year excluded for undergraduate or graduate tuition, fees, books and supplies, including employer payments on the employee's student loans.", star: false },
    { id: "7c28", front: "Moving reimbursements, on-site gym, retirement advice", back: "Moving reimbursements are excluded only for the military under orders. An on-site athletic facility and employer-provided retirement-planning advice are excluded.", star: false },
    { id: "7c29", front: "Flexible spending accounts and cafeteria plans", back: "FSA: salary set aside pre-tax for medical, dependent care or adoption costs; unused money is forfeited at year-end. Cafeteria plan: cash taken is taxable wages; qualified benefits chosen stay tax-free.", star: false }
  ],
  mc: [
    {
      id: "7q01",
      q: "Darnell, age 52, receives 150,000 of group-term life coverage from his employer. How much must he include in gross income for the year?",
      opts: ["$276", "$414", "$180", "$23"],
      why: "(150,000 - 50,000) / 1,000 = 100 units x 2.76 (ages 50 to 54) = 276. 414 forgets the 50,000 exclusion; 23 uses the monthly rate instead of the annual one.",
      star: false
    },
    {
      id: "7q02",
      q: "Kim, age 36, has 80,000 of employer-provided group-term life coverage. How much is taxable?",
      opts: ["$32.40", "$86.40", "$28.80", "$0"],
      why: "(80,000 - 50,000) / 1,000 = 30 x 1.08 (ages 35 to 39) = 32.40. 86.40 applies the rate to all 80,000; 28.80 uses the 30 to 34 rate.",
      star: false
    },
    {
      id: "7q03",
      q: "Which employer-provided meal is excluded from the employee's income?",
      opts: ["Free hospital cafeteria meals for on-call nurses who must stay on the premises", "A $15 daily cash allowance for lunch", "Vouchers for meals at a restaurant down the street", "Weekend restaurant dinners the employer buys for staff families"],
      why: "Meals are excluded only if for the employer's convenience, on the premises, and in kind. A cash allowance fails the in-kind test, and off-premises meals fail the premises test.",
      star: true,
      trap: true
    },
    {
      id: "7q04",
      q: "Which employer-provided lodging is taxable to the employee?",
      opts: ["A university-owned apartment off campus that the university president lives in", "A room at the hotel where the manager is required to live to handle emergencies", "An apartment in the building a resident manager must live in, as a condition of the job, to handle tenant emergencies", "A bunk at the fire station for firefighters on 24-hour shifts"],
      why: "Lodging must be on the business premises, for the employer's convenience and a condition of employment. The off-campus apartment fails the premises test.",
      star: true
    },
    {
      id: "7q05",
      q: "To exclude employer-provided lodging, all of the following must be true EXCEPT:",
      opts: ["The employer must also provide the employee's meals in kind", "The lodging is furnished for the employer's convenience", "The lodging is on the employer's business premises", "The employee must accept the lodging as a condition of employment"],
      why: "Lodging has its own three tests: convenience, premises and condition of employment. The in-kind test applies to meals, not lodging.",
      star: true
    },
    {
      id: "7q06",
      q: "Ray is a firefighter. Meals worth 3,000 for the year are served to him at the station during shifts. He also receives a 1,200 cash meal allowance. How much is taxable?",
      opts: ["$1,200", "$4,200", "$0", "$3,000"],
      why: "Station meals are on the premises, in kind and for the employer's convenience, so excluded. The cash allowance fails the in-kind test: 1,200 is taxable.",
      star: true,
      trap: true
    },
    {
      id: "7q07",
      q: "Joy's employer pays these premiums for her: health 6,000, long-term disability 800, short-term disability 400 and long-term care 500. How much is included in her income?",
      opts: ["$400", "$1,200", "$0", "$7,700"],
      why: "Employer-paid health, long-term disability and long-term care premiums are excluded; short-term disability is the exception, so 400. 1,200 lumps both disability policies together.",
      star: false,
      trap: true
    },
    {
      id: "7q08",
      q: "Ivan's employer paid 60% of his disability insurance premiums and Ivan paid 40% with after-tax money. He receives 20,000 of disability benefits. How much is taxable?",
      opts: ["$12,000", "$20,000", "$8,000", "$0"],
      why: "Benefits are taxed in proportion to the premiums the employer paid: 20,000 x 60% = 12,000. The 40% bought with after-tax money produces tax-free benefits.",
      star: false
    },
    {
      id: "7q09",
      q: "Lena's employer-paid health plan reimburses her 5,500 for qualified medical expenses that totaled 5,000. How much is taxable?",
      opts: ["$500", "$5,500", "$0", "$5,000"],
      why: "Health benefits are excluded up to qualified medical expenses; the 500 excess (5,500 - 5,000) is taxable.",
      star: false
    },
    {
      id: "7q10",
      q: "Carlos earns a 30,000 salary as a server, reports 9,000 of tips to his employer and keeps 1,500 of cash tips he never reported. What is his gross income from the job?",
      opts: ["$40,500", "$39,000", "$30,000", "$31,500"],
      why: "All tips are income whether or not reported: 30,000 + 9,000 + 1,500 = 40,500. Unreported tips go on Form 4137; leaving them out gives 39,000.",
      star: false
    },
    {
      id: "7q11",
      q: "Alana's salary is 80,000 and she defers 6,000 into a traditional 401(k). What appears in box 1 of her Form W-2?",
      opts: ["$74,000", "$80,000", "$86,000", "$68,000"],
      why: "Traditional 401(k) deferrals are left out of box 1: 80,000 - 6,000 = 74,000. Do not subtract the deferral again on the return.",
      star: false
    },
    {
      id: "7q12",
      q: "An electronics store with a 25% gross profit percentage sells Tyler, an employee, a 2,000 TV for 1,200. How much of the discount is taxable?",
      opts: ["$300", "$0", "$800", "$400"],
      why: "For goods the exclusion is capped at the gross profit percentage: 25% x 2,000 = 500. The discount is 800, so 300 is taxable. 400 wrongly uses the 20% cap that applies to services.",
      star: false
    },
    {
      id: "7q13",
      q: "Sam receives a watch worth 1,000 for 10 years of service under a nonqualified plan. He has had no similar award in the past 5 years. How much is taxable?",
      opts: ["$600", "$0", "$1,000", "$400"],
      why: "A tangible length-of-service award is excluded up to 400 under a nonqualified plan: 1,000 - 400 = 600. The 1,600 limit applies only under a qualified plan.",
      star: false
    },
    {
      id: "7q14",
      q: "Hailey's employer pays 8,000 of her graduate tuition this year. How much is taxable?",
      opts: ["$2,750", "$0", "$8,000", "$5,250"],
      why: "Educational assistance is excluded up to 5,250 a year: 8,000 - 5,250 = 2,750. 5,250 is the excluded part.",
      star: false
    },
    {
      id: "7q15",
      q: "Which of the following is NOT excluded as a de minimis fringe benefit?",
      opts: ["A $20 gift card handed out at the holidays", "Free coffee and snacks in the break room", "Occasional personal use of the office copier", "The annual company holiday party"],
      why: "Cash equivalents such as gift cards are never de minimis, no matter how small. The other three are small, infrequent benefits that are excluded.",
      star: false,
      trap: true
    },
    {
      id: "7q16",
      q: "A company runs both an airline and a hotel chain. Mei works for the airline. Which benefit is taxable to her?",
      opts: ["A free room at the company's hotel chain", "A free standby seat that would otherwise fly empty", "A free standby seat for her spouse", "A free standby seat for her dependent child"],
      why: "No-additional-cost services are excluded only in the line of business the employee works in. Empty airline seats for her, her spouse and dependents qualify; the hotel room does not.",
      star: false
    },
    {
      id: "7q17",
      q: "Which fringe benefit is always taxable to the employee?",
      opts: ["The employer paying the tuition for the employee's child at a private elementary school", "Meals furnished in kind on the premises for the employer's convenience", "A working condition fringe", "Employer-paid long-term care premiums"],
      why: "Personal expenses the employer pays are compensation and always taxable. The other benefits can be excluded when their tests are met.",
      star: false
    },
    {
      id: "7q18",
      q: "Rita receives: salary 90,000, employer-paid health premiums 7,000, 50,000 of group-term life coverage, a 50 holiday gift card, use of the on-site gym and an employer-paid vacation worth 3,000. What is her gross income?",
      opts: ["$93,050", "$100,050", "$93,000", "$90,000"],
      why: "90,000 + 50 gift card + 3,000 vacation = 93,050. Health premiums, the first 50,000 of group-term coverage and the on-site gym are excluded; 93,000 wrongly treats the gift card as a nominal gift.",
      star: false,
      trap: true
    },
    {
      id: "7q19",
      q: "Under a cafeteria plan, Ellie's employer gives her 6,000 to spend on benefits. She takes 2,000 in cash and uses 4,000 for health coverage. How much is taxable?",
      opts: ["$2,000", "$6,000", "$0", "$4,000"],
      why: "Cash taken from a cafeteria plan is taxable wages; qualified benefits chosen (health coverage) stay tax-free. So only 2,000 is taxable.",
      star: false
    }
  ]
});
