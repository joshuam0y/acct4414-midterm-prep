ACCT.addChapter({
  ch: 0,
  title: "Tax formula and the 1040",
  cards: [
    { id: "0c01", front: "Total income (2025 Form 1040 line 9)", back: "Wages (1z) + taxable interest (2b) + ordinary dividends (3b) + Schedule 1 additional income (line 8). Tax-exempt interest and qualified dividends are not added separately.", star: false },
    { id: "0c02", front: "Tax-exempt interest (line 2a)", back: "Reported on the return but never added into total income.", star: false, trap: true },
    { id: "0c03", front: "Qualified dividends (line 3a) vs ordinary dividends (line 3b)", back: "Qualified dividends are a subset of ordinary dividends, already inside 3b. Line 3a can never exceed 3b, and you never add both.", star: false, trap: true },
    { id: "0c04", front: "Problem says only \"5,000 of qualified dividends\"", back: "Enter 5,000 on both line 3a and line 3b, since qualified dividends are part of ordinary dividends.", star: false },
    { id: "0c05", front: "Non-qualified dividends", back: "Line 3b minus line 3a. Taxed at ordinary rates, not 15%. Example: 7,000 ordinary with 5,000 qualified leaves 2,000 at ordinary rates.", star: true, trap: true },
    { id: "0c06", front: "Adjusted gross income (lines 11a and 11b)", back: "Total income (line 9) minus the Schedule 1 Part II adjustments (line 10).", star: false },
    { id: "0c07", front: "Line 12e", back: "The larger of the standard deduction or Schedule A itemized deductions.", star: false },
    { id: "0c08", front: "Line 13a QBI deduction", back: "Given as a number in the problem; the QBI computation itself is not tested. Subtract it along with line 12e.", star: false },
    { id: "0c09", front: "Taxable income (line 15)", back: "AGI minus line 12e minus the QBI deduction (13a).", star: false },
    { id: "0c10", front: "Line 16", back: "The tax on taxable income, with qualified dividends and net long-term capital gain split out from ordinary income.", star: true },
    { id: "0c11", front: "Line 23", back: "Other taxes from Schedule 2 (line 21), such as self-employment tax.", star: false },
    { id: "0c12", front: "Total tax (line 24)", back: "Line 16 tax plus Schedule 2 taxes such as SE tax, minus credits.", star: false },
    { id: "0c13", front: "Total payments (line 33)", back: "Withholding (25a, carried to 25d) + estimated payments (26) + refundable credits.", star: false },
    { id: "0c14", front: "Line 34 vs line 37", back: "If total payments (33) exceed total tax (24), the difference is overpaid on line 34. Otherwise the shortfall is owed on line 37.", star: false },
    { id: "0c15", front: "Schedules 1, 2 and 3 on the forms problem", back: "Carry every schedule total to the 1040. Nothing stays on Schedule 1, 2 or 3.", star: false },
    { id: "0c16", front: "Where Schedule C profit goes", back: "To Schedule 1 line 3 (then 1040 line 8) and to Schedule SE for self-employment tax.", star: false },
    { id: "0c17", front: "Self-employment tax formula", back: "Schedule C profit x 92.35% x 15.3%. The 15.3% is 12.4% Social Security plus 2.9% Medicare.", star: false },
    { id: "0c18", front: "SE tax caps", back: "The 12.4% Social Security part applies only up to the wage base ($176,100 in 2025). The 2.9% Medicare part has no cap.", star: false },
    { id: "0c19", front: "Path of SE tax on the forms", back: "Schedule 2 line 4, totaled on Schedule 2 line 21, then 1040 line 23.", star: false },
    { id: "0c20", front: "Half of SE tax", back: "A deduction for AGI on Schedule 1 Part II (line 15). It lowers AGI; it is not an itemized deduction.", star: false },
    { id: "0c21", front: "Line 16 step 1: ordinary income", back: "Taxable income minus qualified dividends minus net long-term capital gain.", star: true },
    { id: "0c22", front: "Line 16 step 2: bracket lookup", back: "Look up the ORDINARY income, not total taxable income, in the rate table: base + rate x (ordinary income - bracket floor).", star: true, trap: true },
    { id: "0c23", front: "Line 16 step 3: 0% room", back: "0% room = 0% ceiling - ordinary income (zero if negative). Qualified dividends taxed at 0% = the smaller of the dividends or the room.", star: true },
    { id: "0c24", front: "Line 16 steps 4 and 5", back: "Tax the rest of the qualified dividends at 15% (20% only far above $500,000). Line 16 = tax on ordinary income + the 15% piece.", star: true },
    { id: "0c25", front: "QD and LTCG 0% ceilings", back: "2025: single 48,350, MFJ 96,700, HoH 64,750. 2026: single 49,450, MFJ 98,900, HoH 66,200.", star: true },
    { id: "0c26", front: "Showing line 16 on the forms problem", back: "Show each step of the line 16 computation; a bare number loses credit. Dollar signs are not needed.", star: true },
    { id: "0c27", front: "Deductions for AGI vs from AGI", back: "For-AGI deductions come before AGI and everyone gets them. From-AGI deductions (standard or itemized, QBI) come after AGI.", star: false },
    { id: "0c28", front: "Credit vs deduction", back: "A credit cuts tax dollar for dollar; a deduction only cuts the income the rate applies to. A $1,000 credit beats a $1,000 deduction at every rate.", star: false, trap: true }
  ],
  mc: [
    {
      id: "0q01",
      q: "Hannah is single for 2026 with taxable income of 45,000, which includes 4,000 of qualified dividends. What is her line 16 tax?",
      opts: ["4,672", "5,272", "5,152", "3,432"],
      why: "Ordinary income is 45,000 - 4,000 = 41,000, taxed 1,240 + 12% x (41,000 - 12,400) = 4,672. The 0% room is 49,450 - 41,000 = 8,450, so all 4,000 of dividends are taxed at 0%. 5,272 wrongly taxes the dividends at 15%.",
      star: true
    },
    {
      id: "0q02",
      q: "Derek is single for 2026 with taxable income of 52,000, including 6,000 of qualified dividends and no capital gains. What is his line 16 tax?",
      opts: ["5,654.50", "6,172", "5,272", "6,152"],
      why: "Ordinary income 46,000 is taxed 1,240 + 12% x 33,600 = 5,272. Room is 49,450 - 46,000 = 3,450 at 0%, and the other 2,550 x 15% = 382.50, so line 16 = 5,654.50. 6,172 skips the 0% fill-up and taxes all 6,000 at 15%.",
      star: true,
      trap: true
    },
    {
      id: "0q03",
      q: "Rosa and Miguel file jointly for 2026. Taxable income is 104,000, including 8,000 of qualified dividends. What is their line 16 tax?",
      opts: ["11,789", "12,224", "12,304", "11,024"],
      why: "Ordinary income 96,000 is taxed 2,480 + 12% x 71,200 = 11,024. Room is 98,900 - 96,000 = 2,900 at 0%; the other 5,100 x 15% = 765, for 11,789. 12,304 looks up the full 104,000 in the 22% bracket, the classic lookup mistake.",
      star: true,
      trap: true
    },
    {
      id: "0q04",
      q: "On a 2025 return, Priya is single with taxable income of 55,000, including 9,000 of qualified dividends. How much of the dividends is taxed at 15%?",
      opts: ["6,650", "9,000", "2,350", "5,550"],
      why: "Ordinary income is 46,000, so the 2025 0% room is 48,350 - 46,000 = 2,350 and the remaining 9,000 - 2,350 = 6,650 is taxed at 15%. 5,550 uses the 2026 ceiling of 49,450 on a 2025 return.",
      star: true
    },
    {
      id: "0q05",
      q: "Using the same 2025 facts (single, taxable income 55,000 including 9,000 of qualified dividends), what is Priya's line 16 tax?",
      opts: ["6,279", "6,631.50", "7,014", "5,281.50"],
      why: "Tax on ordinary income 46,000 = 1,192.50 + 12% x (46,000 - 11,925) = 5,281.50. Add 6,650 x 15% = 997.50 for 6,279. 6,631.50 taxes all 9,000 at 15% and ignores the 2,350 of 0% room.",
      star: true
    },
    {
      id: "0q06",
      q: "Kevin is single for 2026 with taxable income of 40,000. Line 3b shows 5,000 of ordinary dividends, of which 3,000 are qualified (line 3a). What is his line 16 tax?",
      opts: ["4,192", "4,252", "3,952", "4,552"],
      why: "Only the 3,000 qualified dividends come out: ordinary income 37,000 is taxed 1,240 + 12% x 24,600 = 4,192, and the 3,000 fits in the 0% room. 4,252 pulls the 2,000 non-qualified dividends out of ordinary income and taxes them at 15%; 3,952 treats all 5,000 as qualified.",
      star: true,
      trap: true
    },
    {
      id: "0q07",
      q: "When computing line 16 for a return with qualified dividends, which amount do you look up in the rate table?",
      opts: ["Taxable income minus qualified dividends and net long-term capital gain", "Total taxable income on line 15", "Adjusted gross income on line 11", "Taxable income minus only the non-qualified dividends"],
      why: "The bracket is found with ordinary income alone; the dividends then fill any room left under the 0% ceiling. Looking up total taxable income is the most common error and can push the lookup into the wrong bracket.",
      star: true,
      trap: true
    },
    {
      id: "0q08",
      q: "Tyler has 80,000 of Schedule C profit in 2025 and no wages. What is his self-employment tax, rounded to the nearest dollar?",
      opts: ["11,304", "12,240", "5,652", "9,161"],
      why: "80,000 x 92.35% = 73,880, and 73,880 x 15.3% = 11,304. 12,240 skips the 92.35% step and multiplies the full profit by 15.3%.",
      star: false
    },
    {
      id: "0q09",
      q: "For 2025, Lena has wages of 20,000, taxable interest of 1,500 and Schedule C profit of 50,000. Her SE tax is 7,065, and she has no other adjustments. What is her AGI?",
      opts: ["67,967.50", "64,435", "71,500", "75,032.50"],
      why: "Total income is 20,000 + 1,500 + 50,000 = 71,500. Only half of SE tax (3,532.50) is a for-AGI deduction, so AGI = 67,967.50. 64,435 wrongly subtracts the full SE tax.",
      star: false
    },
    {
      id: "0q10",
      q: "Marcus has wages of 45,000, taxable interest of 800, tax-exempt interest of 1,200, ordinary dividends of 2,500 (including 1,500 qualified) and 3,000 of Schedule 1 additional income. What is his total income on line 9?",
      opts: ["51,300", "52,500", "52,800", "54,000"],
      why: "45,000 + 800 + 2,500 + 3,000 = 51,300. Tax-exempt interest is only reported, and the qualified dividends are already inside the 2,500; 52,800 double counts them.",
      star: false,
      trap: true
    },
    {
      id: "0q11",
      q: "Nina's total tax on line 24 is 9,400. Her withholding is 6,000 and she made 2,500 of estimated payments. What is the result on her return?",
      opts: ["900 owed on line 37", "900 overpaid on line 34", "3,400 owed on line 37", "6,900 owed on line 37"],
      why: "Total payments are 6,000 + 2,500 = 8,500, which is less than 9,400, so 900 is owed on line 37. 3,400 forgets that estimated payments count toward line 33.",
      star: false
    },
    {
      id: "0q12",
      q: "On a 2025 return, Owen is single with AGI of 70,000, itemized deductions of 13,000 and no QBI deduction. What is his taxable income?",
      opts: ["54,250", "57,000", "41,250", "53,900"],
      why: "Line 12e takes the larger of the 15,750 standard deduction or 13,000 itemized, so 70,000 - 15,750 = 54,250. 41,250 subtracts both; 53,900 uses the 2026 standard deduction.",
      star: false
    },
    {
      id: "0q13",
      q: "Sophie is in the 22% bracket. How much more does a $1,000 credit save her than a $1,000 deduction?",
      opts: ["780", "220", "1,000", "0"],
      why: "The credit saves 1,000; the deduction saves 1,000 x 22% = 220; the difference is 780. 220 is only the deduction's saving.",
      star: false,
      trap: true
    },
    {
      id: "0q14",
      q: "Where does the deduction for half of self-employment tax appear?",
      opts: ["Schedule 1 Part II, as a deduction for AGI", "Schedule A, as an itemized deduction", "Schedule 3, as a nonrefundable credit", "Schedule 2, netted against the SE tax"],
      why: "Half of SE tax is an adjustment on Schedule 1 Part II, so it lowers AGI whether or not the taxpayer itemizes. The full SE tax itself sits on Schedule 2 and is never reduced there.",
      star: false
    },
    {
      id: "0q15",
      q: "Each of the following is added in computing total income on line 9 EXCEPT:",
      opts: ["Tax-exempt interest on line 2a", "Taxable interest on line 2b", "Ordinary dividends on line 3b", "Schedule 1 additional income on line 8"],
      why: "Tax-exempt interest is reported on line 2a but never added. Interest on 2b, dividends on 3b and Schedule 1 income all flow into line 9.",
      star: false,
      trap: true
    },
    {
      id: "0q16",
      q: "Which statement about lines 3a and 3b is correct?",
      opts: ["Line 3a can never exceed line 3b because qualified dividends are part of ordinary dividends", "Lines 3a and 3b are added together to get total dividend income", "Line 3b minus line 3a is taxed at 15%", "A problem that gives only qualified dividends leaves line 3b blank"],
      why: "Qualified dividends are a subset of ordinary dividends, so 3a is inside 3b. The difference (3b - 3a) is non-qualified and taxed at ordinary rates, not 15%.",
      star: true,
      trap: true
    },
    {
      id: "0q17",
      q: "Which of the following is NOT a deduction for AGI?",
      opts: ["The standard deduction", "Half of self-employment tax", "Self-employed health insurance premiums", "A deductible traditional IRA contribution"],
      why: "The standard deduction is taken from AGI on line 12e. The other three are Schedule 1 Part II adjustments that come before AGI.",
      star: false
    },
    {
      id: "0q18",
      q: "A sole proprietor reports a profit on Schedule C. Where is that profit carried?",
      opts: ["To Schedule 1 line 3 and to Schedule SE", "Only to Schedule SE", "To Schedule 2 line 4 only", "To Schedule A as other income"],
      why: "The profit is income on Schedule 1 line 3 (then 1040 line 8) and is also the base for SE tax on Schedule SE. Schedule 2 receives the SE tax, not the profit.",
      star: false
    },
    {
      id: "0q19",
      q: "A single filer has 2026 ordinary income of 50,000 and 2,000 of qualified dividends. How much of the dividends is taxed at 0%?",
      opts: ["0", "2,000", "550", "1,450"],
      why: "0% room = 49,450 - 50,000, which is negative, so the room is zero and all 2,000 is taxed at 15%. 550 reverses the subtraction instead of treating a negative room as zero.",
      star: true
    }
  ]
});
