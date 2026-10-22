/* Rate tables and limits from the study guide. Tax = base + rate x (income - floor).
   Only the 10% to 32% rows are listed in the guide, so drills keep ordinary income below the 32% floor. */
(function (root) {
  const ACCT = root.ACCT || (root.ACCT = {});
  const T = {
    // [floor, base tax at the floor, rate]
    brackets: {
      2025: {
        single: [[0, 0, 0.10], [11925, 1192.5, 0.12], [48475, 5578.5, 0.22], [103350, 17651, 0.24], [197300, 40199, 0.32]],
        mfj: [[0, 0, 0.10], [23850, 2385, 0.12], [96950, 11157, 0.22], [206700, 35302, 0.24], [394600, 80398, 0.32]]
      },
      2026: {
        single: [[0, 0, 0.10], [12400, 1240, 0.12], [50400, 5800, 0.22], [105700, 17966, 0.24], [201775, 41024, 0.32]],
        mfj: [[0, 0, 0.10], [24800, 2480, 0.12], [100800, 11600, 0.22], [211400, 35932, 0.24], [403550, 82048, 0.32]]
      }
    },
    standard: { 2025: { single: 15750, mfj: 31500, hoh: 23625 }, 2026: { single: 16100, mfj: 32200, hoh: 24150 } },
    extraStd: { 2025: { single: 2000, mfj: 1600 }, 2026: { single: 2050, mfj: 1650 } },
    zeroCeiling: { 2025: { single: 48350, mfj: 96700, hoh: 64750 }, 2026: { single: 49450, mfj: 98900, hoh: 66200 } },
    fifteenEnds: { 2025: { single: 533400, mfj: 600050 }, 2026: { single: 545500, mfj: 613700 } },
    ssWageBase: { 2025: 176100, 2026: 184500 },
    groupTermRates: [[0, 24, 0.60], [25, 29, 0.72], [30, 34, 0.96], [35, 39, 1.08], [40, 44, 1.20], [45, 49, 1.80], [50, 54, 2.76], [55, 59, 5.16], [60, 64, 7.92], [65, 69, 15.24], [70, 200, 24.72]],
    salt2026: { cap: 40400, capMFS: 20200, phaseStart: 505000, floor: 10000 },
    kiddie: { minStd: 1350, earnedAdd: 450, threshold: 2700 },
    statusName: { single: "single", mfj: "married filing jointly", hoh: "head of household" }
  };
  ACCT.T = T;

  // tax on ordinary income from the table (base + rate x excess)
  ACCT.taxOrdinary = (year, status, income) => {
    const rows = T.brackets[year][status];
    let row = rows[0];
    for (const r of rows) if (income >= r[0]) row = r;
    return { tax: row[1] + row[2] * (income - row[0]), floor: row[0], base: row[1], rate: row[2] };
  };
  ACCT.marginalRate = (year, status, income) => ACCT.taxOrdinary(year, status, income).rate;
  // the top of the 24% bracket, as far as the guide's table reaches
  ACCT.tableLimit = (year, status) => T.brackets[year][status][4][0];

  // line 16 with preferential income (qualified dividends + net LTCG), using the 0% fill-up
  ACCT.line16 = (year, status, taxable, pref) => {
    const ordinary = taxable - pref;
    const ord = ACCT.taxOrdinary(year, status, ordinary);
    const room = Math.max(0, T.zeroCeiling[year][status] - ordinary);
    const at0 = Math.min(pref, room);
    const at15 = pref - at0;
    const tax15 = at15 * 0.15;
    return { ordinary, ord, room, at0, at15, tax15, total: ord.tax + tax15 };
  };
})(typeof window !== "undefined" ? window : globalThis);
