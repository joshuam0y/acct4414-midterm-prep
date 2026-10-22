ACCT.addChapter({
  ch: 2,
  title: "Activities, assets, basis and realization",
  cards: [
    { id: "2c01", front: "The three taxpayer activities", back: "Every transaction is business, investment or personal. The classification decides the tax effect of the transaction.", star: false },
    { id: "2c02", front: "Trade or business activity", back: "Profit motive plus regular and continuous effort. Losses are deductible. Being an employee is also a business activity; a hobby is not.", star: false },
    { id: "2c03", front: "Investment activity", back: "Profit motive (appreciation or an income stream) without regular and continuous effort, e.g. stocks, bonds, land, gold, art. Losses are deductible, subject to the capital-loss limits.", star: false },
    { id: "2c04", front: "Personal activity", back: "No profit motive, e.g. a hobby, a garage sale, selling your own car. Losses are never deductible, yet gains are taxed.", star: false, trap: true },
    { id: "2c05", front: "Rental real estate: business or investment?", back: "Either one, based on a facts-and-circumstances test (no bright line). Regular and continuous work with a profit intent makes it a business. Holding land is an investment.", star: false },
    { id: "2c06", front: "Ordinary assets", back: "Inventory, accounts and notes receivable, business property held 1 year or less, and creative works held by their creator. They produce ordinary income and ordinary losses.", star: false },
    { id: "2c07", front: "Section 1231 assets", back: "Depreciable property and real property used in a business and held more than 1 year (business land, buildings, equipment, furniture). Their own category, not capital assets.", star: false },
    { id: "2c08", front: "Capital assets", back: "Anything that is not ordinary or Section 1231: investment assets and personal-use property (also copyrights not held by the creator).", star: false },
    { id: "2c09", front: "Net capital loss limit", back: "A net capital loss offsets only $3,000 of ordinary income a year ($1,500 MFS). The excess carries forward to future years.", star: false },
    { id: "2c10", front: "Realty vs personalty", back: "Realty is land plus anything permanently attached (buildings, fences, silos). Personalty is everything else, tangible (cars, clothes) or intangible (patents, trademarks).", star: false },
    { id: "2c11", front: "Personalty vs personal-use property", back: "Not the same thing. Personalty means not realty; personal-use describes how the asset is used. A business truck is personalty but not personal-use property.", star: false, trap: true },
    { id: "2c12", front: "Holding period", back: "Starts the day after the asset is acquired and ends on the day it is sold. Long-term means held MORE than 1 year; 1 year or less is short-term.", star: false },
    { id: "2c13", front: "Basis of a purchased asset", back: "Cost plus everything spent to acquire it and place it in service: sales tax, shipping, installation, testing, surveys, appraisal fees, title insurance. Costs after the asset is in service are expensed.", star: false },
    { id: "2c14", front: "Adjusted basis formula", back: "Original basis + capital improvements - accumulated depreciation. Basis can never fall below zero.", star: false },
    { id: "2c15", front: "Capital improvement", back: "A cost that increases the asset's value, extends its life, or adapts it to a new use. It is added to basis rather than deducted.", star: false },
    { id: "2c16", front: "Recovering basis", back: "Basis is recovered only ONE time: by deducting the cost when bought, depreciating it, or offsetting it against the sale price. An item fully deducted or fully depreciated has zero basis.", star: false },
    { id: "2c17", front: "When is an increase in wealth taxable income?", back: "When all three hold: wealth has increased, the increase has been realized, and no provision excludes or defers it. Receiving cash is not required.", star: false },
    { id: "2c18", front: "Barter income", back: "Income equals the fair market value of the goods or services you RECEIVE, not the value of what you gave up.", star: false },
    { id: "2c19", front: "Income creates basis", back: "Whenever income is recognized, you get basis equal to that income in what you received. Property received as pay has basis equal to its FMV, which prevents double taxation.", star: false },
    { id: "2c20", front: "Exclusion vs deferral", back: "An excluded gain is never taxed. A deferred gain is taxed in a later year, with the deferred gain carried in the basis of the new property. Wherewithal to pay explains many deferrals.", star: false },
    { id: "2c21", front: "Ordinary, necessary and reasonable", back: "Ordinary: common and accepted in the industry. Necessary: helpful and appropriate. Reasonable: appropriate in amount. Business and investment expenses must meet all three.", star: false },
    { id: "2c22", front: "Personal expenses", back: "Not deductible unless a specific provision allows them, e.g. charitable gifts, home mortgage interest, state and local taxes, medical costs. The opposite of the all-inclusive income approach.", star: false },
    { id: "2c23", front: "For-AGI vs itemized deductions", back: "For-AGI deductions come above the line and always give a benefit. Itemized deductions come after AGI and help only if they exceed the standard deduction.", star: false },
    { id: "2c24", front: "Amount realized", back: "Cash + FMV of property or services received + liabilities the buyer assumes - selling expenses.", star: true },
    { id: "2c25", front: "Selling expenses (commissions, closing costs)", back: "They REDUCE the amount realized. They are never added to the basis of the property sold.", star: true, trap: true },
    { id: "2c26", front: "Realized gain or loss", back: "Amount realized - adjusted basis. It must be computed on every sale or disposition: sales, exchanges, trade-ins, casualties, thefts, condemnations, retirements.", star: true },
    { id: "2c27", front: "Recognized gain or loss", back: "The part of the realized gain or loss included in taxable income now. Assume everything realized is recognized unless a provision excludes or defers it.", star: true, trap: true },
    { id: "2c28", front: "Excluded gain on a principal residence sale", back: "An example of an exclusion: the excluded gain is never taxed. A new home's basis is its cost, and its holding period starts the day after it is acquired.", star: false }
  ],
  mc: [
    {
      id: "2q01",
      q: "Priya sells a rental building. She receives $150,000 cash, the buyer takes over her $250,000 mortgage, and she pays a $24,000 broker's commission. What is her amount realized?",
      opts: ["$376,000", "$400,000", "$424,000", "$126,000"],
      why: "Amount realized = 150,000 + 250,000 - 24,000 = 376,000. Adding the commission (424,000) or ignoring it (400,000) are the classic selling-expense mistakes; 126,000 leaves out the assumed mortgage.",
      star: true,
      trap: true
    },
    {
      id: "2q02",
      q: "Marcus bought a business building for $300,000, later added an addition for $30,000, and has taken $70,000 of depreciation. He sells it for $200,000 cash plus the buyer's assumption of his $180,000 mortgage, paying $20,000 in selling costs. What is his realized gain?",
      opts: ["$100,000", "$120,000", "$30,000", "$160,000"],
      why: "Adjusted basis = 300,000 + 30,000 - 70,000 = 260,000; amount realized = 200,000 + 180,000 - 20,000 = 360,000; gain = 360,000 - 260,000 = 100,000. 120,000 forgets the selling costs, 30,000 forgets the depreciation, and 160,000 subtracts the improvement instead of adding it.",
      star: true
    },
    {
      id: "2q03",
      q: "Nina sells her main home for $520,000 and pays $20,000 of selling costs. Her adjusted basis is $180,000, and $250,000 of the gain qualifies for exclusion. What is her RECOGNIZED gain?",
      opts: ["$70,000", "$320,000", "$90,000", "$340,000"],
      why: "Amount realized = 520,000 - 20,000 = 500,000; realized gain = 500,000 - 180,000 = 320,000; recognized = 320,000 - 250,000 = 70,000. 320,000 is the realized gain, the most common wrong pick; 90,000 forgets to subtract the selling costs.",
      star: true,
      trap: true
    },
    {
      id: "2q04",
      q: "Which statement about realized and recognized gain is correct?",
      opts: ["A realized gain is computed on every sale, and all of it is recognized unless a provision excludes or defers it", "Recognized gain always equals realized gain", "A gain is realized only when the seller receives cash", "A deferred gain is never taxed"],
      why: "Realized gain is computed on every disposition; recognized gain is the part taxed now, which is all of it unless the law says otherwise. Treating the two numbers as always equal is the trap, and a deferred gain is taxed later, not never.",
      star: true,
      trap: true
    },
    {
      id: "2q05",
      q: "Grace buys a machine for her business for $40,000, paying $2,400 sales tax, $600 shipping and $1,000 installation. She has since taken $12,000 of depreciation. What is her adjusted basis?",
      opts: ["$32,000", "$28,000", "$44,000", "$31,000"],
      why: "Basis = 40,000 + 2,400 + 600 + 1,000 = 44,000; adjusted basis = 44,000 - 12,000 = 32,000. 28,000 leaves out the costs to acquire and place the machine in service, and 44,000 forgets the depreciation.",
      star: false
    },
    {
      id: "2q06",
      q: "Tyler, a plumber, fixes a dentist's pipes (his usual fee is $900). In exchange, the dentist gives Tyler dental work worth $1,200. How much income does Tyler have?",
      opts: ["$1,200", "$900", "$0", "$300"],
      why: "Barter income is the FMV of what you receive, 1,200. Using the value of the services you gave (900) is the usual mistake, and no cash is required for income.",
      star: false
    },
    {
      id: "2q07",
      q: "Which of these is an investment activity?",
      opts: ["Buying gold coins in the hope they rise in value", "Running a food truck every weekend to earn a living", "Selling used furniture at a yard sale", "Writing a cooking blog purely as a hobby"],
      why: "An investment seeks appreciation or income without regular and continuous effort, like holding gold. The food truck is a business; the yard sale and the hobby blog are personal.",
      star: false
    },
    {
      id: "2q08",
      q: "Each of the following is a capital asset EXCEPT:",
      opts: ["A delivery van used in a bakery for three years", "Shares of stock held as an investment", "A family's personal-use car", "A painting held as an investment"],
      why: "Depreciable property used in a business for more than 1 year is a Section 1231 asset, not a capital asset. Investments and personal-use property are capital assets.",
      star: false
    },
    {
      id: "2q09",
      q: "A landscaping company buys a mower and sells it eight months later. How is the mower classified?",
      opts: ["Ordinary asset", "Section 1231 asset", "Capital asset", "Personal-use asset"],
      why: "Business property held 1 year or less is an ordinary asset. It would become Section 1231 only if held more than 1 year.",
      star: false
    },
    {
      id: "2q10",
      q: "How is a pickup truck used only in a roofing business classified?",
      opts: ["Personalty, but not personal-use property", "Realty, because it is used in a business", "Personal-use property, because it is personalty", "Neither personalty nor realty"],
      why: "Anything that is not land or attached to land is personalty, but personal-use describes how an asset is used. Mixing up personalty with personal-use property is the trap.",
      star: false,
      trap: true
    },
    {
      id: "2q11",
      q: "A single filer has a $7,000 net capital loss for 2026 and no capital gains. What is the result?",
      opts: ["$3,000 deducted; $4,000 carried forward", "$7,000 deducted", "$1,500 deducted; $5,500 carried forward", "$0 deducted; $7,000 carried forward"],
      why: "A net capital loss offsets only $3,000 of ordinary income a year, so 7,000 - 3,000 = 4,000 carries forward. The $1,500 limit applies only to married filing separately.",
      star: false
    },
    {
      id: "2q12",
      q: "Each of the following must be present before an increase in wealth is taxable EXCEPT:",
      opts: ["The taxpayer receives cash", "The taxpayer's wealth has increased", "The increase has been realized", "No provision excludes the increase"],
      why: "Income needs an increase in wealth, a realization event and no exclusion. Cash is not required: barter and property received are income at FMV.",
      star: false
    },
    {
      id: "2q13",
      q: "For a business expense to be deductible it must be ordinary. What does ordinary mean here?",
      opts: ["Common and accepted in the taxpayer's industry", "Helpful and appropriate for the business", "Appropriate in amount", "Paid on a routine, recurring schedule"],
      why: "Ordinary means common and accepted in the industry. Helpful and appropriate is the definition of necessary, and appropriate in amount is reasonable.",
      star: false
    },
    {
      id: "2q14",
      q: "In 2026 Leah sells her personal car at a $4,000 loss and her personal-use boat at a $2,500 gain. How are these treated?",
      opts: ["Report the $2,500 gain; the $4,000 loss is not deductible", "Net them for a $1,500 deductible loss", "Report neither, because both assets are personal", "Deduct the $4,000 loss, limited to $3,000 this year"],
      why: "Gains on personal-use property are taxed, but losses on it are never deductible, so the two cannot be netted. Applying the $3,000 capital-loss rule to a personal-use loss is the trap.",
      star: false,
      trap: true
    },
    {
      id: "2q15",
      q: "Basis in an asset can be recovered in each of these ways EXCEPT:",
      opts: ["Spending more on capital improvements", "Deducting the cost in the year of purchase", "Depreciating the cost over time", "Subtracting it from the sale price when the asset is sold"],
      why: "Basis is recovered once, by deducting, depreciating, or offsetting it at sale. Capital improvements add to basis; they do not recover it.",
      star: false
    },
    {
      id: "2q16",
      q: "Rosa sells investment land with a basis of $60,000. She receives $50,000 cash and a car worth $15,000, the buyer assumes her $35,000 loan on the land, and she pays $4,000 of closing costs. What is her realized gain?",
      opts: ["$36,000", "$40,000", "$44,000", "$21,000"],
      why: "Amount realized = 50,000 + 15,000 + 35,000 - 4,000 = 96,000; gain = 96,000 - 60,000 = 36,000. 40,000 ignores the closing costs, 44,000 adds them instead of subtracting, and 21,000 leaves out the car.",
      star: true,
      trap: true
    },
    {
      id: "2q17",
      q: "How do a seller's real estate commissions enter the gain computation?",
      opts: ["They reduce the amount realized", "They are added to the adjusted basis of the property sold", "They are deducted as a separate expense on Schedule A", "They are ignored because the buyer pays the price"],
      why: "Selling expenses come out of the amount realized. Adding them to basis is the mistake to avoid, even when it seems to give a similar answer.",
      star: true,
      trap: true
    },
    {
      id: "2q18",
      q: "Kofi accepts a laptop worth $3,000 as payment for consulting work and reports the $3,000 as income. What is his basis in the laptop?",
      opts: ["$3,000", "$0, because he paid no cash for it", "Whatever the client originally paid for it", "$3,000 less the tax he pays on the income"],
      why: "Recognized income gives you basis equal to that income, so his basis is 3,000. A zero basis would tax the same value twice when he sells the laptop.",
      star: false
    },
    {
      id: "2q19",
      q: "How does a deferred gain differ from an excluded gain?",
      opts: ["A deferred gain is taxed in a later year, carried in the new property's basis; an excluded gain is never taxed", "An excluded gain is taxed in a later year; a deferred gain is never taxed", "Both are taxed now, but at lower rates", "A deferred gain is taxed now and an excluded gain later"],
      why: "Deferral only postpones the tax by carrying the gain in basis; exclusion removes it for good. Swapping the two terms is the common mistake.",
      star: false
    }
  ]
});
