ACCT.addChapter({
  ch: 12,
  title: "Interest and dividends",
  cards: [
    { id: "12c01", front: "Interest income: general rule", back: "Interest is ordinary income unless a specific exclusion applies. A cash-basis taxpayer reports it when received; prepaid interest is taxed when received even under the accrual method.", star: false },
    { id: "12c02", front: "Common sources of taxable interest", back: "Bank accounts, CDs, corporate bonds, U.S. Treasury bills, notes and bonds, and money loaned to others.", star: false },
    { id: "12c03", front: "U.S. Treasury bills, notes and bonds", back: "Interest is taxable on the federal return. It is exempt from state income tax.", star: false },
    { id: "12c04", front: "Municipal bond interest", back: "Interest on bonds issued by state or local governments or U.S. possessions (such as Guam) is exempt from federal income tax.", star: false },
    { id: "12c05", front: "Where tax-exempt interest goes on Form 1040", back: "Line 2a. It is reported but never added to total income; only taxable interest on line 2b is added.", star: false },
    { id: "12c06", front: "Selling a municipal bond", back: "The interest is exempt, but a gain on selling the bond is taxable. Exempt interest is still used in other calculations, such as the alternative minimum tax and the taxable portion of Social Security benefits.", star: false },
    { id: "12c07", front: "Credit union and mutual savings bank dividends", back: "Reported as interest income, not as dividends.", star: false },
    { id: "12c08", front: "Series EE and Series I savings bonds: timing", back: "Interest is taxable but usually deferred until the bonds mature or are cashed in. The owner may elect to report the yearly increase in value each year instead.", star: false },
    { id: "12c09", front: "Savings bond education exclusion: who qualifies", back: "Interest can be excluded when the proceeds pay qualified higher-education costs (tuition, fees, required books) for the taxpayer, spouse or a dependent. The owner must have been at least 24 when buying the bonds, and income limits apply.", star: false },
    { id: "12c10", front: "Savings bond education exclusion: formula", back: "Excluded interest = total interest x (qualified expenses not covered by scholarships / total proceeds). Example: proceeds 15,000, interest 3,000, tuition 14,000: 3,000 x 14,000 / 15,000 = 2,800 excluded.", star: false },
    { id: "12c11", front: "Principal returned when savings bonds are redeemed", back: "Never income. It is a recovery of the original investment; only the interest portion can be taxed.", star: false },
    { id: "12c12", front: "Below-market loan", back: "When a loan charges less than the applicable federal rate, the borrower is treated as paying the missing interest. Lender reports actual plus hypothetical interest; the borrower's side is compensation (employer loan), a dividend (corporation to shareholder) or a nontaxable gift (family or friend).", star: false },
    { id: "12c13", front: "Dividend", back: "A distribution of cash or property from a corporation to shareholders, to the extent it comes from the corporation's earnings and profits (E&P).", star: false },
    { id: "12c14", front: "Earnings and profits (E&P)", back: "The corporation's cumulative taxable income not yet paid out to shareholders. Similar to retained earnings, but a tax measure kept at the corporate level.", star: false },
    { id: "12c15", front: "Order for taxing a corporate distribution", back: "First a dividend up to E&P, then a tax-free return of stock basis, then capital gain once basis hits zero. Example: 3,750 paid, E&P 1,800, basis 1,000: 1,800 dividend, basis to 0, 950 capital gain.", star: false },
    { id: "12c16", front: "Ordinary vs qualified dividends", back: "Ordinary dividends are taxed at ordinary income rates. Qualified dividends are a subset taxed at the long-term capital gain rates of 0%, 15% or 20%.", star: true },
    { id: "12c17", front: "Requirements for a qualified dividend", back: "Paid by a domestic corporation (or a qualified foreign corporation), on stock held more than 60 days during the 121-day period that starts 60 days before the ex-dividend date.", star: true },
    { id: "12c18", front: "Form 1040 lines 3a and 3b", back: "Line 3b is all ordinary dividends; line 3a is the qualified part already inside 3b, so 3a can never exceed 3b. A problem that gives only 5,000 of qualified dividends means 5,000 on both lines.", star: true, trap: true },
    { id: "12c19", front: "Non-qualified dividends", back: "Line 3b minus line 3a. Taxed at ordinary rates, never at 15%.", star: true, trap: true },
    { id: "12c20", front: "Line 16 step 1: ordinary income", back: "Taxable income minus qualified dividends minus net long-term capital gain. Look up THIS number in the rate table, never total taxable income.", star: true, trap: true },
    { id: "12c21", front: "Line 16: the 0% room", back: "0% room = 0% ceiling - ordinary income (zero if negative). Qualified dividends taxed at 0% = the smaller of the dividends or the room; the rest is taxed at 15% (20% only far above 500,000).", star: true },
    { id: "12c22", front: "2026 qualified dividend 0% ceilings", back: "Single 49,450. Married filing jointly 98,900. Head of household 66,200. (2025: single 48,350, MFJ 96,700.)", star: true },
    { id: "12c23", front: "Line 16 worked example (2026 single, taxable income 50,500 including 3,000 qualified dividends)", back: "Ordinary 47,500: 1,240 + 12% x 35,100 = 5,452. Room 49,450 - 47,500 = 1,950 at 0%. Rest 1,050 x 15% = 157.50. Line 16 = 5,609.50.", star: true },
    { id: "12c24", front: "When dividends are recognized", back: "Cash-basis taxpayers report dividends when received. Accrual-basis taxpayers report them as of the record date.", star: false },
    { id: "12c25", front: "Nontaxable stock dividend", back: "A proportionate stock dividend issued only to common shareholders is not income. Spread the old basis over all the shares now held.", star: false },
    { id: "12c26", front: "Stock dividend with a cash option", back: "If shareholders can choose cash instead of stock, the stock dividend is taxable dividend income.", star: false },
    { id: "12c27", front: "Constructive dividend", back: "A corporate benefit to a shareholder in a form other than a declared dividend: salary above a reasonable amount, personal use of corporate assets, paying the shareholder's expenses, or a loan that is not bona fide. Taxed as a dividend and not deductible by the corporation.", star: false },
    { id: "12c28", front: "Mutual fund distributions", back: "The fund labels each distribution as an ordinary dividend, a qualified dividend or a capital gain, and each is taxed by its label.", star: false }
  ],
  mc: [
    {
      id: "12q01",
      q: "Priya is single and has 2026 taxable income of 48,000, which includes 2,000 of qualified dividends. What is her line 16 tax?",
      opts: ["$5,272", "$5,572", "$5,512", "$5,354.50"],
      why: "Ordinary income 46,000: 1,240 + 12% x (46,000 - 12,400) = 5,272. Room is 49,450 - 46,000 = 3,450, which covers all 2,000 of dividends at 0%. 5,572 taxes the dividends at 15%; 5,354.50 measures the room from total taxable income instead of ordinary income.",
      star: true,
      trap: true
    },
    {
      id: "12q02",
      q: "Marcus is single with 2026 taxable income of 60,000, including 4,000 of qualified dividends. What is his line 16 tax?",
      opts: ["$7,632", "$7,912", "$7,032", "$8,512"],
      why: "Ordinary income 56,000: 5,800 + 22% x (56,000 - 50,400) = 7,032. Ordinary income already exceeds the 49,450 ceiling, so there is no 0% room: 4,000 x 15% = 600, total 7,632. 7,912 taxes everything at ordinary rates; 7,032 wrongly puts the dividends at 0%.",
      star: true
    },
    {
      id: "12q03",
      q: "Ben and Rosa file jointly for 2026. Taxable income is 105,000, including 10,000 of qualified dividends. What is their line 16 tax?",
      opts: ["$11,819", "$12,404", "$12,524", "$10,904"],
      why: "Ordinary 95,000: 2,480 + 12% x 70,200 = 10,904. Room 98,900 - 95,000 = 3,900 at 0%; the other 6,100 x 15% = 915; total 11,819. 12,404 skips the 0% fill-up and taxes all 10,000 at 15%; 12,524 runs all 105,000 through the ordinary table.",
      star: true
    },
    {
      id: "12q04",
      q: "Leah is single with 2026 taxable income of 52,000, including 5,000 of qualified dividends. What is her line 16 tax?",
      opts: ["$5,774.50", "$6,142", "$6,152", "$5,392"],
      why: "Ordinary 47,000: 1,240 + 12% x 34,600 = 5,392. Room 49,450 - 47,000 = 2,450 at 0%; the other 2,550 x 15% = 382.50; total 5,774.50. 6,142 computes the room from taxable income (52,000 is over the ceiling, so it finds no room).",
      star: true,
      trap: true
    },
    {
      id: "12q05",
      q: "In the line 16 computation for a taxpayer with qualified dividends, which amount is looked up in the ordinary rate table?",
      opts: ["Taxable income minus qualified dividends and net long-term capital gain", "Total taxable income", "AGI minus qualified dividends", "The qualified dividends alone"],
      why: "Only ordinary income goes through the rate table; the dividends then fill whatever 0% room is left. Looking up total taxable income is the classic bracket mistake.",
      star: true,
      trap: true
    },
    {
      id: "12q06",
      q: "Owen is single with 2026 taxable income of 40,000. His Form 1099-DIV shows ordinary dividends of 5,000, of which 3,000 are qualified. What is his line 16 tax?",
      opts: ["$4,192", "$3,952", "$4,252", "$4,552"],
      why: "Only the 3,000 qualified comes out: ordinary 37,000, tax 1,240 + 12% x 24,600 = 4,192, and the 3,000 fits in the 12,450 of 0% room. 3,952 treats all 5,000 as qualified; 4,252 taxes the 2,000 non-qualified dividends at 15% instead of ordinary rates.",
      star: true,
      trap: true
    },
    {
      id: "12q07",
      q: "A problem says only that a taxpayer received 4,000 of qualified dividends. What goes on Form 1040 lines 3a and 3b?",
      opts: ["4,000 on line 3a and 4,000 on line 3b", "4,000 on line 3a and 0 on line 3b", "0 on line 3a and 4,000 on line 3b", "4,000 on line 3a and 8,000 on line 3b"],
      why: "Qualified dividends are a subset of ordinary dividends, so the same 4,000 appears on both lines and 3a can never exceed 3b. Only 3b is added into total income.",
      star: true,
      trap: true
    },
    {
      id: "12q08",
      q: "Nora has owned her stock for 3 years with a basis of 2,000. The corporation distributes 6,000 to her when its E&P is 2,500. How much capital gain does Nora report?",
      opts: ["$1,500", "$3,500", "$4,000", "$0"],
      why: "2,500 is a dividend (up to E&P), the next 2,000 recovers basis tax-free, and the last 1,500 (6,000 - 2,500 - 2,000) is long-term capital gain. 3,500 forgets the basis recovery; 4,000 ignores E&P.",
      star: false
    },
    {
      id: "12q09",
      q: "Caleb paid 8,000 for Series EE bonds and redeems them for 10,000, using 7,500 of the proceeds for his dependent son's tuition (no scholarships). He meets the age and income rules. How much interest is taxable?",
      opts: ["$500", "$2,000", "$1,500", "$2,500"],
      why: "Interest is 10,000 - 8,000 = 2,000. Excluded = 2,000 x 7,500 / 10,000 = 1,500, so 500 is taxable. 1,500 is the excluded part, and 2,500 is the unspent proceeds, which include principal.",
      star: false
    },
    {
      id: "12q10",
      q: "Interest from which investment is exempt from federal income tax?",
      opts: ["A bond issued by a city school district", "A U.S. Treasury note", "A bank certificate of deposit", "A corporate bond"],
      why: "Interest on state and local (municipal) bonds is federally exempt. Treasury interest is the common mix-up: it is exempt from state tax but taxable federally.",
      star: false
    },
    {
      id: "12q11",
      q: "All of the following produce taxable interest income EXCEPT:",
      opts: ["Bonds issued by the government of Guam", "U.S. Treasury bonds", "Dividends paid by a credit union on a savings account", "A personal loan made to a friend at a market rate"],
      why: "Bonds of U.S. possessions such as Guam are treated like municipal bonds, so the interest is exempt. Credit union dividends are reported as interest, and Treasury interest is federally taxable.",
      star: false
    },
    {
      id: "12q12",
      q: "Which statement about municipal bonds is NOT true?",
      opts: ["A gain on selling a municipal bond is tax-exempt", "The interest is reported on Form 1040 line 2a", "The interest is not added into total income", "The interest can still affect other calculations, such as taxable Social Security benefits"],
      why: "Only the interest is exempt; a gain on selling the bond is taxable. The other three statements are true.",
      star: false
    },
    {
      id: "12q13",
      q: "Hannah buys shares 10 days before the ex-dividend date and sells them 20 days after it. The dividend comes from a domestic corporation. How is the dividend taxed?",
      opts: ["As a non-qualified dividend at ordinary rates", "As a qualified dividend at 0%, 15% or 20%", "As a tax-free return of capital", "As a short-term capital gain"],
      why: "A qualified dividend needs stock held more than 60 days in the 121-day window around the ex-dividend date; about 30 days fails. The dividend is still a dividend, just taxed at ordinary rates rather than 15%.",
      star: true,
      trap: true
    },
    {
      id: "12q14",
      q: "Grace owns 400 shares with a total basis of 10,000. The corporation issues a proportionate 25% stock dividend to all common shareholders with no cash option. What is the result?",
      opts: ["No income; basis is $20 per share on 500 shares", "No income; basis stays $25 per share on the original 400 and $0 on the new 100", "Dividend income equal to the value of the 100 new shares", "No income; basis is $25 per share on all 500 shares"],
      why: "A pro-rata stock dividend is not taxable, and the old 10,000 basis is spread over all 500 shares: 10,000 / 500 = 20. A cash option would have made it taxable.",
      star: false
    },
    {
      id: "12q15",
      q: "Felix owns all the stock of his corporation, which pays him a 180,000 salary. A reasonable salary for his work is 100,000. How is the extra 80,000 treated?",
      opts: ["Dividend income to Felix, not deductible by the corporation", "Wages to Felix, deductible by the corporation", "Dividend income to Felix, deductible by the corporation", "A tax-free return of capital to Felix"],
      why: "Pay above a reasonable amount is a constructive dividend: taxed to the shareholder as a dividend and not deductible by the corporation. Only the reasonable 100,000 is deductible salary.",
      star: false
    },
    {
      id: "12q16",
      q: "A corporation declares a dividend on December 10, 2026, with a record date of December 28 and a payment date of January 8, 2027. A cash-basis shareholder reports it in:",
      opts: ["2027, when received", "2026, the declaration year", "2026, the record-date year", "Half in each year"],
      why: "Cash-basis taxpayers report dividends when received. The record date controls only for accrual-basis taxpayers.",
      star: false
    },
    {
      id: "12q17",
      q: "How is interest on a U.S. Treasury bond taxed?",
      opts: ["Taxable federally, exempt from state income tax", "Exempt federally, taxable by the state", "Exempt from both federal and state tax", "Taxable federally only once the bond matures"],
      why: "Treasury interest is federally taxable when received; states cannot tax it. Municipal interest is the one that is federally exempt.",
      star: false
    }
  ]
});
