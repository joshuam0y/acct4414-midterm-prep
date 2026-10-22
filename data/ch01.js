ACCT.addChapter({
  ch: 1,
  title: "Planning, rates and policy",
  cards: [
    { id: "1c01", front: "Goal of tax planning", back: "Maximize after-tax income, not just minimize tax. Count non-tax costs as well as tax costs.", star: false },
    { id: "1c02", front: "Marginal tax rate", back: "The rate on the next dollar of income or deduction. Use it for every planning decision: a deduction saves amount x marginal rate.", star: false, trap: true },
    { id: "1c03", front: "Average tax rate", back: "Total tax divided by taxable income.", star: false },
    { id: "1c04", front: "Effective tax rate", back: "Total tax divided by total income, including tax-exempt income. It is lower than the average rate when some income is not taxed.", star: false },
    { id: "1c05", front: "Individual brackets", back: "Seven brackets from 10% to 37%: 10, 12, 22, 24, 32, 35 and 37. The individual income tax is progressive.", star: false },
    { id: "1c06", front: "Rates rising next year", back: "Accelerate income into this year and defer deductions to next year, when they save more.", star: false },
    { id: "1c07", front: "Rates falling or flat", back: "Defer income and accelerate deductions. With flat rates, time value of money alone makes paying tax later better.", star: false },
    { id: "1c08", front: "Time value of money", back: "A dollar today is worth more than a dollar later, so saving tax now beats saving it later, and paying tax later beats paying it now.", star: false },
    { id: "1c09", front: "Jurisdiction as a planning lever", back: "Rates vary by state and locality. Nine states do not tax wages; California, Hawaii and New York have the highest individual rates.", star: false },
    { id: "1c10", front: "Type of income as a planning lever", back: "Qualified dividends and long-term capital gains are taxed at 0%, 15% or 20%; municipal bond interest is exempt. Planners try to convert ordinary income into long-term capital gain.", star: false },
    { id: "1c11", front: "Type of taxpayer as a planning lever", back: "C corporations pay a flat 21%, but dividends are taxed again to shareholders. Estates and trusts reach the top bracket at low income.", star: false },
    { id: "1c12", front: "Family as a planning lever", back: "Shift income or investment assets to lower-bracket family members. The kiddie tax limits this.", star: false },
    { id: "1c13", front: "Closed vs open transaction", back: "Closed: the facts are set, so the work is compliance (report correctly). Open: not yet done, so the work is planning (structure it for the best result).", star: false },
    { id: "1c14", front: "Static vs dynamic forecasting", back: "Static assumes behavior does not change when rates change. Dynamic includes behavioral responses that can shrink or grow the tax base.", star: false },
    { id: "1c15", front: "Income effect", back: "Taxpayers respond to higher taxes by working more to keep the same after-tax income.", star: false },
    { id: "1c16", front: "Substitution effect", back: "Taxpayers respond to higher taxes by working less, because leisure became relatively cheaper.", star: false },
    { id: "1c17", front: "Tax avoidance vs tax evasion", back: "Avoidance is legally arranging your affairs to lower tax; there is no duty to pay more than the law requires. Evasion is reducing tax illegally, such as omitting cash income.", star: false },
    { id: "1c18", front: "What is not evasion", back: "A transposition error, a de minimis omission (such as $8 of interest) and a good-faith, researched deduction the IRS later disallows. Inadvertent underpayment of a real amount can still be evasion.", star: false },
    { id: "1c19", front: "Tax gap and compliance", back: "About $1 of every $6 owed goes unpaid. Compliance is highest where a third party reports (W-2 wages) and lowest for cash receipts.", star: false },
    { id: "1c20", front: "GAAP vs tax purpose", back: "GAAP informs investors (matching, conservatism). Tax law raises revenue and pursues policy, so a bribe reduces book income but is never deductible.", star: false },
    { id: "1c21", front: "Tax rule on estimated expenses", back: "Tax law generally will not allow a deduction until the amount is known with certainty, unlike GAAP conservatism.", star: false },
    { id: "1c22", front: "Policy goals of tax law", back: "Revenue (individual income and payroll taxes raise the most), social (charitable deduction), economic (bonus depreciation), equity and political.", star: false },
    { id: "1c23", front: "Horizontal vs vertical equity", back: "Horizontal: taxpayers in similar situations pay similar tax. Vertical: those with greater ability to pay pay more.", star: false },
    { id: "1c24", front: "Tax expenditure", back: "Revenue the government gives up through exclusions, deductions, deferrals and credits. Largest for 2026: the employer-sponsored health insurance exclusion, $295 billion.", star: false },
    { id: "1c25", front: "Proportional, progressive, regressive", back: "Proportional: one flat rate (corporate 21%, a flat sales tax). Progressive: rate rises with the base (federal income tax). Regressive: rate falls as the base grows (Social Security).", star: false },
    { id: "1c26", front: "Why Social Security tax is regressive", back: "The 6.2% applies only up to $184,500 of wages in 2026, so it is a smaller share of income for higher earners.", star: false, trap: true },
    { id: "1c27", front: "Employment tax rates", back: "Employee and employer each pay 6.2% Social Security plus 1.45% Medicare (no cap), 15.3% combined; the self-employed pay both halves. Extra 0.9% Medicare on wages over $250,000 MFJ or $200,000 others.", star: false },
    { id: "1c28", front: "Use tax", back: "Owed to your home state on goods bought out of state, to the extent you paid less sales tax than your home-state rate.", star: false, trap: true },
    { id: "1c29", front: "Implicit tax", back: "The lower pre-tax return on a tax-favored asset, such as a municipal bond. It is not paid to any government and never appears on a return.", star: false },
    { id: "1c30", front: "Excise and transfer taxes", back: "Excise taxes are per unit (gasoline, alcohol, tobacco). Transfer taxes are estate and gift taxes; the gift tax exists so people cannot dodge the estate tax by giving property away before death.", star: false }
  ],
  mc: [
    {
      id: "1q01",
      q: "Ava is in the 22% marginal bracket; her average rate is 15%. She pays a $5,000 deductible expense. What is its after-tax cost?",
      opts: ["$3,900", "$1,100", "$5,000", "$4,250"],
      why: "The deduction saves 5,000 x 22% = 1,100, so the cost is 5,000 - 1,100 = 3,900. $4,250 uses the average rate, but a deduction comes off the top dollars, which are taxed at the marginal rate.",
      star: false,
      trap: true
    },
    {
      id: "1q02",
      q: "Carlos and Jenna file jointly for 2026 with taxable income of 150,000. What is their tax?",
      opts: ["$22,424", "$33,000", "$10,824", "$28,598"],
      why: "11,600 + 22% x (150,000 - 100,800) = 11,600 + 10,824 = 22,424. $33,000 applies the marginal rate to all income; $28,598 uses the single schedule.",
      star: false
    },
    {
      id: "1q03",
      q: "Ethan is single for 2026 with taxable income of 80,000, so his tax is 12,312. His total economic income, including tax-exempt municipal interest, is 100,000. What is his average tax rate?",
      opts: ["15.39%", "12.31%", "22%", "12%"],
      why: "Average rate = 12,312 / 80,000 = 15.39%. 12.31% divides by total income, which is the effective rate; 22% is his marginal rate.",
      star: false
    },
    {
      id: "1q04",
      q: "Using the same facts (tax 12,312, taxable income 80,000, total income 100,000), what is Ethan's effective tax rate?",
      opts: ["12.31%", "15.39%", "22%", "12%"],
      why: "Effective rate = total tax / total income including tax-exempt income = 12,312 / 100,000 = 12.31%. 15.39% divides by taxable income, which is the average rate.",
      star: false
    },
    {
      id: "1q05",
      q: "Maya rents for $1,600 a month. Buying a home would cost $1,900 a month, of which $1,500 is deductible mortgage interest. She itemizes and is in the 22% bracket. What is the after-tax monthly cost of owning?",
      opts: ["$1,570", "$1,900", "$330", "$1,482"],
      why: "Only the interest is deductible: 1,500 x 22% = 330 saved, so 1,900 - 330 = 1,570, which is $30 less than rent before non-tax costs like property tax and repairs. $1,482 wrongly applies the rate to the whole payment, including principal.",
      star: false
    },
    {
      id: "1q06",
      q: "Luke lives in a state with a 6.25% sales tax. He buys a $20,000 car in a neighboring state and pays its 4% sales tax. How much use tax does he owe his home state?",
      opts: ["$450", "$1,250", "$800", "$0"],
      why: "Use tax covers only the difference: (6.25% - 4%) x 20,000 = 450. $1,250 ignores the credit for the 4% already paid; $0 assumes buying out of state avoids the home-state tax.",
      star: false,
      trap: true
    },
    {
      id: "1q07",
      q: "Grace earns $200,000 of wages in 2026. How much Social Security tax (not Medicare) is withheld from her pay?",
      opts: ["$11,439", "$12,400", "$22,878", "$15,300"],
      why: "The employee pays 6.2% only up to the 184,500 wage base: 184,500 x 6.2% = 11,439. $12,400 ignores the cap; $22,878 adds the employer's matching half.",
      star: false
    },
    {
      id: "1q08",
      q: "A client expects her marginal rate to rise sharply next year. Which plan best fits?",
      opts: ["Accelerate income into this year and defer deductions to next year", "Defer income to next year and accelerate deductions into this year", "Defer both income and deductions to next year", "Accelerate both income and deductions into this year"],
      why: "Income is cheaper to report while rates are low, and deductions are worth more when rates are high. Deferring income is the right move only when rates are falling or flat.",
      star: false
    },
    {
      id: "1q09",
      q: "Which of the following is tax evasion?",
      opts: ["A contractor leaves $22,000 of cash receipts off his return", "A taxpayer transposes two digits of his W-2 wages", "A taxpayer forgets to report $6 of savings interest", "A taxpayer claims a deduction after careful research, and the IRS later disallows it"],
      why: "Omitting a significant amount of income is evasion. A transposition error, a de minimis omission and a good-faith researched position that loses are not.",
      star: false
    },
    {
      id: "1q10",
      q: "Which tax is regressive?",
      opts: ["Social Security tax", "Federal individual income tax", "A flat 6.25% state sales tax", "The 21% corporate income tax"],
      why: "Social Security stops at the wage base, so its share of income falls as income rises. The income tax is progressive; flat taxes like a 6.25% sales tax or 21% corporate rate are proportional.",
      star: false,
      trap: true
    },
    {
      id: "1q11",
      q: "A business pays $10,000 in bribes to speed up permits. How are the payments treated?",
      opts: ["Expensed under GAAP but never deductible for tax", "Deductible for both GAAP and tax", "Not expensed under GAAP but deductible for tax", "Capitalized for both GAAP and tax"],
      why: "GAAP reports the expense because it reduces economic income, but tax law denies deductions that violate public policy. Assuming book and tax treatment match is the trap.",
      star: false
    },
    {
      id: "1q12",
      q: "Two taxpayers with the same income and circumstances pay the same tax. Which policy idea does this describe?",
      opts: ["Horizontal equity", "Vertical equity", "Proportional tax", "Tax expenditure"],
      why: "Horizontal equity means similar situations pay similar tax. Vertical equity is about those with more ability to pay paying more.",
      star: false
    },
    {
      id: "1q13",
      q: "Congress raises rates, and many taxpayers respond by working fewer hours. Which effect is this?",
      opts: ["Substitution effect", "Income effect", "Static effect", "Implicit tax effect"],
      why: "Under the substitution effect, leisure becomes relatively cheaper, so people work less. The income effect is the opposite: working more to keep after-tax income.",
      star: false
    },
    {
      id: "1q14",
      q: "Allowing businesses to deduct a large share of new equipment in the year of purchase to boost growth serves which policy goal?",
      opts: ["Economic", "Social", "Equity", "Revenue"],
      why: "Bonus depreciation is the standard example of an economic objective. The charitable deduction is the standard social example.",
      star: false
    },
    {
      id: "1q15",
      q: "Which of the following is NOT paid to any government?",
      opts: ["Implicit tax", "Use tax", "Excise tax", "Gift tax"],
      why: "An implicit tax is the lower pre-tax yield you accept on a tax-favored asset such as a municipal bond; no one remits it. Use, excise and gift taxes are all explicit taxes.",
      star: false
    },
    {
      id: "1q16",
      q: "Each of the following reflects sound tax planning EXCEPT:",
      opts: ["Choosing the option with the lowest tax even though it leaves less after-tax income", "Using the marginal rate to compare alternatives", "Counting non-tax costs along with tax costs", "Deferring income when rates are expected to stay flat"],
      why: "The goal is maximum after-tax income, not minimum tax. The other choices are all standard planning rules.",
      star: false
    },
    {
      id: "1q17",
      q: "A client has already sold stock and asks how to report it. What kind of work is this?",
      opts: ["Compliance on a closed transaction", "Planning on an open transaction", "Planning on a closed transaction", "Compliance on an open transaction"],
      why: "Once the facts are set, the transaction is closed and the task is reporting it correctly. Planning is possible only while a transaction is still open.",
      star: false
    },
    {
      id: "1q18",
      q: "Why does the federal gift tax exist?",
      opts: ["To keep wealthy people from avoiding the estate tax by giving property away before death", "To tax the recipient on gifts as income", "To raise more revenue than the income tax", "To tax per unit purchased, like an excise tax"],
      why: "The gift tax backs up the estate tax. Gifts are not income to the recipient, and transfer taxes raise far less than the income tax.",
      star: false
    }
  ]
});
