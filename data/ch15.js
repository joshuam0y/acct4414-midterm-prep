ACCT.addChapter({
  ch: 15,
  title: "Related-party sales, wash sales and home sales",
  cards: [
    { id: "15c01", front: "Sale to a related party: gains vs losses", back: "A gain is realized and recognized as usual. A loss is realized but NOT recognized, whether the asset was business, investment or personal-use property.", star: true },
    { id: "15c02", front: "Family members who are related parties", back: "Spouse, ancestors (parents, grandparents), descendants (children, grandchildren) and siblings.", star: false },
    { id: "15c03", front: "Who is NOT a related party for the loss rule", back: "Aunts, uncles, cousins, in-laws and ex-spouses. A loss on a sale to any of them is recognized normally.", star: false, trap: true },
    { id: "15c04", front: "Entities as related parties", back: "An individual and a corporation or partnership in which the individual owns, directly or indirectly, more than 50%. Some entity-to-entity pairs with the same majority owner also count.", star: false },
    { id: "15c05", front: "Right of offset", back: "When the related buyer later sells to an outsider, the seller's disallowed loss reduces the buyer's realized gain. It can never create or increase a loss, and any unused part is lost for good.", star: false },
    { id: "15c06", front: "Related-party buyer's basis and holding period", back: "Basis is what the buyer paid. The holding period begins the day after the purchase; the seller's holding period does not carry over.", star: false },
    { id: "15c07", front: "Planning with loss property and relatives", back: "Do not sell, give or donate loss property to a relative. Sell it to an unrelated party, take the loss, and give the cash.", star: false },
    { id: "15c08", front: "Four steps for a related-party sale", back: "1. Compute realized gain or loss. 2. If a loss, ask whether buyer and seller are related; if not, recognize it. 3. If related, the right of offset equals the realized loss. 4. Buyer's holding period starts the day after purchase.", star: false },
    { id: "15c09", front: "Wash sale", back: "A loss on stock or securities is deferred if substantially identical stock or securities are bought within 30 days before or after the sale: a 61-day window including the sale date.", star: false },
    { id: "15c10", front: "Substantially identical (wash sale)", back: "Stock or securities issued by the same corporation.", star: false },
    { id: "15c11", front: "Wash sale rule and gains", back: "Gains are never affected. A gain on a sale is recognized even if the same stock is bought back the next day.", star: false },
    { id: "15c12", front: "Partial wash sale: deferred loss", back: "Deferred loss = realized loss x shares repurchased / shares sold. Recognized loss = realized loss - deferred loss.", star: false },
    { id: "15c13", front: "Basis of replacement shares after a wash sale", back: "Cost of the new shares + the deferred loss.", star: false },
    { id: "15c14", front: "Holding period of replacement shares after a wash sale", back: "It includes (tacks on) the holding period of the shares that were sold.", star: false },
    { id: "15c15", front: "Related-party loss vs wash-sale loss", back: "Related-party loss: gone for the seller, surviving only as an offset against the buyer's later gain. Wash-sale loss: deferred into the basis of the new shares, so it is recovered later.", star: false, trap: true },
    { id: "15c16", front: "Personal-use asset: gain or loss on sale", back: "An asset not used in a business or for the production of income. A loss is never deductible, but a gain is taxable.", star: false, trap: true },
    { id: "15c17", front: "Why personal-use losses are disallowed", back: "Cars, furniture and computers lose value quickly and cannot be depreciated, so nearly every personal-use sale would produce a loss. Allowing them would cost the Treasury heavily.", star: false },
    { id: "15c18", front: "Principal residence", back: "The home where the taxpayer lives most of the time, usually where registered to vote and licensed to drive. Only one at a time. A loss on its sale is never deductible.", star: false },
    { id: "15c19", front: "Ownership and use tests (home sale)", back: "Owned the home and lived in it as the main home for at least 2 of the last 5 years (730 days each). The periods need not be continuous or overlap.", star: false },
    { id: "15c20", front: "Home sale exclusion amounts", back: "$250,000 of gain for a single filer; $500,000 on a joint return.", star: false },
    { id: "15c21", front: "Requirements for the $500,000 joint exclusion", back: "Either spouse meets the ownership test, both meet the use test, and neither used the exclusion in the past 2 years. If only one spouse meets the use test, the limit is $250,000.", star: false },
    { id: "15c22", front: "Surviving spouse and the home sale exclusion", back: "A surviving spouse who sells no later than 2 years after the death can still exclude up to $500,000.", star: false },
    { id: "15c23", front: "Frequency test (home sale)", back: "The exclusion can be used only once every 2 years.", star: false },
    { id: "15c24", front: "Prorated home sale exclusion", back: "If a test is failed because of a job change, health or another unforeseen event: exclusion x qualifying months / 24. Qualifying months = the lesser of months of ownership and use or months since the last excluded sale. Any other reason: no exclusion.", star: false },
    { id: "15c25", front: "Recognized gain on a home sale", back: "Amount realized (price - selling costs) - adjusted basis = realized gain. Realized gain - exclusion = recognized gain. Selling costs reduce amount realized; they are not added to basis.", star: true, trap: true },
    { id: "15c26", front: "Home office or rental depreciation on a home sale", back: "Depreciation taken is recaptured: that part of the gain is taxed and is not eligible for the exclusion.", star: false },
    { id: "15c27", front: "Basis and holding period of a new home after an excluded sale", back: "Basis is the new home's cost. Its holding period starts the day after purchase. Nothing carries over because the gain was excluded, not deferred.", star: false },
    { id: "15c28", front: "3.8% net investment income tax and a home sale", back: "It does not apply to gain excluded from income. It can apply to any gain that is not excluded.", star: false }
  ],
  mc: [
    {
      id: "15q01",
      q: "Priya sells investment land with an adjusted basis of $80,000 to her brother Marco for $65,000. What are Priya's realized and recognized results?",
      opts: ["Realized loss $15,000; recognized loss $0", "Realized loss $15,000; recognized loss $15,000", "Realized loss $0; recognized loss $0", "Realized loss $15,000; recognized loss $3,000"],
      why: "65,000 - 80,000 = 15,000 realized loss, but a brother is a related party, so none of it is recognized. The $3,000 choice confuses this with the capital loss limit.",
      star: true
    },
    {
      id: "15q02",
      q: "Marco bought land from his sister for $65,000; her $15,000 loss on the sale was disallowed. Two years later he sells the land to an unrelated buyer for $90,000. What is Marco's recognized gain?",
      opts: ["$10,000", "$25,000", "$40,000", "$15,000"],
      why: "Realized gain is 90,000 - 65,000 = 25,000; the sister's 15,000 disallowed loss offsets it, so 25,000 - 15,000 = 10,000 is recognized. $25,000 is the realized gain, not the recognized gain.",
      star: true
    },
    {
      id: "15q03",
      q: "Carla sells stock with a basis of $40,000 to her daughter Ivy for $28,000. Ivy later sells the stock to an outsider for $33,000. What is Ivy's recognized gain or loss?",
      opts: ["$0; the remaining $7,000 of offset is lost", "$0; the remaining $7,000 passes back to Carla", "A $7,000 loss", "$5,000"],
      why: "Ivy's realized gain is 33,000 - 28,000 = 5,000, and Carla's 12,000 disallowed loss can offset only that 5,000. The other 7,000 cannot create a loss and is lost; it never returns to Carla.",
      star: false
    },
    {
      id: "15q04",
      q: "Hugo sells investment land with a basis of $50,000 to his son Leo for $42,000. Leo later sells it to an unrelated buyer for $39,000. What is Leo's recognized gain or loss?",
      opts: ["A $3,000 loss", "An $11,000 loss", "$0", "An $8,000 loss"],
      why: "Leo's own loss is 39,000 - 42,000 = 3,000, measured from his own cost basis. Hugo's 8,000 disallowed loss can only reduce a gain, so it cannot increase Leo's loss to 11,000.",
      star: false
    },
    {
      id: "15q05",
      q: "All of the following are related parties to Dana for the related-party loss rule EXCEPT:",
      opts: ["Her sister-in-law", "Her grandson", "Her brother", "A corporation in which she owns 60% of the stock"],
      why: "In-laws are not related parties under the loss rule, so a loss on a sale to a sister-in-law is recognized. Descendants, siblings and a more-than-50%-owned corporation are all related.",
      star: false,
      trap: true
    },
    {
      id: "15q06",
      q: "Nora buys stock from her father on March 4. He had held the shares for six years and sold them to her at a loss. When does Nora's holding period begin?",
      opts: ["March 5, the day after she buys the shares", "The date her father originally bought the shares", "March 4, the day she buys the shares", "Only when she resells the shares to an outsider"],
      why: "In a related-party purchase the buyer's holding period starts the day after purchase and the seller's holding period does not tack on. Tacking applies to wash sales, not to related-party sales.",
      star: false
    },
    {
      id: "15q07",
      q: "Owen bought 200 shares for $9,000. On December 10 he sells all 200 for $6,600, and on December 30 he buys 200 shares of the same stock for $6,800. What is Owen's basis in the new shares?",
      opts: ["$9,200", "$6,800", "$9,000", "$4,400"],
      why: "The 9,000 - 6,600 = 2,400 loss is deferred because he bought back within 30 days, so basis = 6,800 + 2,400 = 9,200. Subtracting the loss (4,400) moves basis the wrong way.",
      star: false
    },
    {
      id: "15q08",
      q: "Sara sells 400 shares at a realized loss of $6,000 and buys 100 shares of the same stock 20 days later. How much of the loss is recognized now?",
      opts: ["$4,500", "$1,500", "$6,000", "$0"],
      why: "Deferred loss = 6,000 x 100 / 400 = 1,500, so 6,000 - 1,500 = 4,500 is recognized now. $1,500 is the deferred part, and $6,000 is the realized loss.",
      star: true
    },
    {
      id: "15q09",
      q: "Mateo sells stock at a loss on June 15. Which purchase of the same company's stock makes the sale a wash sale?",
      opts: ["A purchase on May 20", "A purchase on July 17", "A purchase on May 10", "A purchase of a different company's stock on June 16"],
      why: "May 20 is 26 days before the sale, inside the 30-days-before window. July 17 is 32 days after and May 10 is 36 days before, both outside, and another company's stock is not substantially identical.",
      star: false
    },
    {
      id: "15q10",
      q: "Lena sells shares at a $3,000 gain and buys the same stock back 10 days later. What gain does she recognize on the sale?",
      opts: ["$3,000, because the wash sale rule applies only to losses", "$0, because the gain is deferred into the new shares", "$1,500, because half the gain is deferred", "$0 until the new shares are sold"],
      why: "The wash sale rule defers losses only; a gain is recognized in full. Deferring a gain into the new shares is a common mix-up.",
      star: false
    },
    {
      id: "15q11",
      q: "Which statement about a wash sale is NOT correct?",
      opts: ["The disallowed loss is gone for good unless the stock is later sold at a gain", "The deferred loss is added to the basis of the replacement shares", "The holding period of the sold shares carries over to the replacement shares", "The window runs from 30 days before to 30 days after the sale"],
      why: "A wash-sale loss is not lost; it moves into the new shares' basis. The gone-unless-offset idea describes the related-party loss rule instead.",
      star: false,
      trap: true
    },
    {
      id: "15q12",
      q: "Gabe sells the car he used only for personal driving for $9,500. He paid $22,000 for it. What loss can he recognize?",
      opts: ["$0", "$12,500", "$3,000", "$9,500"],
      why: "The realized loss is 22,000 - 9,500 = 12,500, but a loss on a personal-use asset is never deductible. The $3,000 choice wrongly treats it as a deductible capital loss.",
      star: false,
      trap: true
    },
    {
      id: "15q13",
      q: "Hana sells a painting she kept at home for her own enjoyment. Her basis was $2,000 and she sells it for $5,000. What is the result?",
      opts: ["A $3,000 gain is taxed", "$0; personal-use gains and losses are both ignored", "A $5,000 gain is taxed", "A $3,000 gain that is excluded like a home sale"],
      why: "Personal-use assets are one-sided: losses are disallowed but gains are taxable, so 5,000 - 2,000 = 3,000 is taxed. The home sale exclusion covers only a principal residence.",
      star: false,
      trap: true
    },
    {
      id: "15q14",
      q: "Tessa, single, has owned and lived in her home for 8 years. She sells it for $520,000 and pays $30,000 in commissions. Her adjusted basis is $190,000. What is her recognized gain?",
      opts: ["$50,000", "$300,000", "$80,000", "$0"],
      why: "Amount realized = 520,000 - 30,000 = 490,000; realized gain = 490,000 - 190,000 = 300,000; minus the 250,000 exclusion = 50,000 recognized. $300,000 is the realized gain, and $80,000 ignores the commissions.",
      star: true,
      trap: true
    },
    {
      id: "15q15",
      q: "Ken and Ruth file jointly and have both owned and lived in their home for 4 years. They sell it for $900,000, pay $54,000 in selling costs, and have an adjusted basis of $296,000. What are their realized and recognized gains?",
      opts: ["Realized $550,000; recognized $50,000", "Realized $604,000; recognized $104,000", "Realized $550,000; recognized $300,000", "Realized $50,000; recognized $550,000"],
      why: "Amount realized = 900,000 - 54,000 = 846,000; realized gain = 846,000 - 296,000 = 550,000; recognized = 550,000 - 500,000 = 50,000. Forgetting the selling costs gives 604,000 and 104,000.",
      star: true,
      trap: true
    },
    {
      id: "15q16",
      q: "Jordan, single, bought a home and lived in it for 9 months, then sold it because of a new job in another state. Realized gain is $120,000 and no other home sale exclusion was used. What is his recognized gain?",
      opts: ["$26,250", "$0", "$120,000", "$82,500"],
      why: "A job change allows a prorated exclusion: 250,000 x 9 / 24 = 93,750, so 120,000 - 93,750 = 26,250 is recognized. Prorating over 60 months (37,500) gives the wrong 82,500.",
      star: true
    },
    {
      id: "15q17",
      q: "Mia has owned and lived in her home for 6 years. Eli moved in when they married 1 year ago. They sell the home this year and file jointly. What is their maximum exclusion?",
      opts: ["$250,000", "$500,000", "$125,000", "$375,000"],
      why: "The $500,000 limit needs both spouses to meet the use test, and Eli has lived there only 1 year. Mia qualifies on her own, so the limit is $250,000.",
      star: false
    },
    {
      id: "15q18",
      q: "To exclude the full $500,000 of gain on a joint return, all of the following must be true EXCEPT:",
      opts: ["Both spouses meet the ownership test", "Both spouses meet the use test", "Neither spouse used the exclusion on another sale in the past 2 years", "At least one spouse meets the ownership test"],
      why: "Only one spouse needs to meet the ownership test, but both must meet the use test. Mixing up which test needs both spouses is the usual error.",
      star: false
    },
    {
      id: "15q19",
      q: "Hal, single, meets every test for the home sale exclusion. His $100,000 realized gain includes $6,000 of depreciation he claimed on a home office. How much gain is taxed?",
      opts: ["$6,000; the recaptured depreciation cannot be excluded", "$0", "$94,000", "$100,000; the home office makes the whole gain taxable"],
      why: "Depreciation claimed on the home office is recaptured and cannot be excluded, so 6,000 is taxed; the other 94,000 falls under the 250,000 exclusion. Treating the whole gain as excluded misses the recapture.",
      star: false
    }
  ]
});
