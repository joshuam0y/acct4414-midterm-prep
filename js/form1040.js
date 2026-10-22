/* Form 1040 trainer: a 2025 return with Schedules 1, 2 and A, graded line by line.
   A line counts as right if it matches the true answer, or if it follows correctly from the student's own earlier lines. */
(function (root) {
  const A = root.ACCT;
  const m = x => A.money(x);
  const YEAR = 2025;

  function scenario(seed) {
    const r = A.rng(seed);
    for (let tries = 0; tries < 200; tries++) {
      const status = r.pick(["single", "mfj"]);
      const hasBiz = r.chance(0.55), hasWages = !hasBiz || r.chance(0.6);
      const x = {
        seed, status, name: r.pick(A.names),
        wages: hasWages ? r.step(18000, status === "mfj" ? 160000 : 110000, 100) : 0,
        interest: r.chance(0.8) ? r.step(100, 6000, 10) : 0,
        muni: r.chance(0.35) ? r.step(200, 4000, 10) : 0,
        ordDiv: 0, qualDiv: 0,
        profit: hasBiz ? r.step(15000, 140000, 5) : 0,
        qbi: 0,
        medical: 0, stateTax: 0, propTax: 0, mortgage: 0, gifts: 0,
        withheld: 0, estimates: 0
      };
      if (r.chance(0.75)) {
        x.ordDiv = r.step(800, 14000, 10);
        x.qualDiv = r.chance(0.4) ? x.ordDiv : r.step(Math.round(x.ordDiv * 0.4), x.ordDiv, 10);
      }
      if (x.profit && r.chance(0.6)) x.qbi = r.step(1000, Math.round(x.profit * 0.18), 1);
      const itemize = r.chance(0.45);
      if (itemize) {
        x.stateTax = r.step(2000, 6000, 10); x.propTax = r.step(1500, 10000 - x.stateTax - 100, 10); // stays under 10,000, so no cap question
        x.mortgage = r.step(status === "mfj" ? 14000 : 7000, status === "mfj" ? 28000 : 15000, 10);
        x.gifts = r.step(500, 6000, 10);
        if (r.chance(0.4)) x.medical = r.step(6000, 22000, 10);
      } else if (r.chance(0.3)) {
        x.stateTax = r.step(1000, 4000, 10); x.mortgage = r.step(2000, 6000, 10);
      }
      const sol = solve(x, {});
      if (sol.l15.v <= 0) continue;
      if (sol.l15.v - x.qualDiv >= A.tableLimit(YEAR, status)) continue;
      if (Math.round(x.profit * 0.9235) >= A.T.ssWageBase[YEAR]) continue;
      // payments: sometimes a refund, sometimes a balance due
      const target = sol.l24.v;
      x.withheld = x.wages ? r.step(Math.round(x.wages * 0.06), Math.round(x.wages * 0.18), 10) : 0;
      x.estimates = x.profit ? r.step(0, Math.round(target * 0.9), 100) : 0;
      return x;
    }
    throw new Error("could not build a scenario");
  }

  // Every line as a function of earlier lines. `got` holds what the student typed (numbers); for a
  // follow-through check, each line is recomputed from the student's own earlier entries where present.
  function solve(x, got) {
    const L = {};
    const use = k => (got[k] !== undefined && !isNaN(got[k]) ? got[k] : L[k].v);
    const set = (k, v) => { L[k] = { v }; };
    const ft = (k, fn) => { set(k, fn(k2 => L[k2].v)); L[k].ft = fn(use); };

    // Schedule 1
    ft("s1_3", () => x.profit);
    ft("s1_10", g => g("s1_3"));
    const se = (() => { const base = Math.round(x.profit * 0.9235); return Math.round(base * 0.124) + Math.round(base * 0.029); })();
    // Schedule 2
    ft("s2_4", () => se);
    ft("s2_21", g => g("s2_4"));
    ft("s1_15", g => Math.round(g("s2_4") / 2));
    ft("s1_26", g => g("s1_15"));
    // Form 1040, income
    ft("l1z", () => x.wages);
    ft("l2a", () => x.muni);
    ft("l2b", () => x.interest);
    ft("l3a", () => x.qualDiv);
    ft("l3b", () => x.ordDiv);
    ft("l8", g => g("s1_10"));
    ft("l9", g => g("l1z") + g("l2b") + g("l3b") + g("l8"));
    ft("l10", g => g("s1_26"));
    ft("l11", g => g("l9") - g("l10"));
    // Schedule A
    ft("a_4", g => Math.max(0, x.medical - Math.round(g("l11") * 0.075)));
    ft("a_7", () => x.stateTax + x.propTax);
    ft("a_10", () => x.mortgage);
    ft("a_14", () => x.gifts);
    ft("a_17", g => g("a_4") + g("a_7") + g("a_10") + g("a_14"));
    // deductions and taxable income
    const std = A.T.standard[YEAR][x.status];
    ft("l12e", g => Math.max(std, g("a_17")));
    ft("l13a", () => x.qbi);
    ft("l15", g => Math.max(0, g("l11") - g("l12e") - g("l13a")));
    // line 16 worksheet
    ft("w_ord", g => g("l15") - g("l3a"));
    ft("w_ordtax", g => A.round(A.taxOrdinary(YEAR, x.status, Math.max(0, g("w_ord"))).tax, 2));
    ft("w_at0", g => Math.min(g("l3a"), Math.max(0, A.T.zeroCeiling[YEAR][x.status] - g("w_ord"))));
    ft("w_tax15", g => A.round((g("l3a") - g("w_at0")) * 0.15, 2));
    ft("l16", g => A.round(g("w_ordtax") + g("w_tax15"), 2));
    ft("l23", g => g("s2_21"));
    ft("l24", g => A.round(g("l16") + g("l23"), 2));
    ft("l25d", () => x.withheld);
    ft("l26", () => x.estimates);
    ft("l33", g => g("l25d") + g("l26"));
    ft("l34", g => A.round(Math.max(0, g("l33") - g("l24")), 2));
    ft("l37", g => A.round(Math.max(0, g("l24") - g("l33")), 2));
    return L;
  }

  const SECTIONS = [
    { title: "Schedule 1: Additional income and adjustments", lines: [
      ["s1_3", "Line 3: Business income (Schedule C, line 31)"],
      ["s1_10", "Line 10: Total additional income (to 1040 line 8)"],
      ["s1_15", "Line 15: Deductible part of self-employment tax"],
      ["s1_26", "Line 26: Total adjustments (to 1040 line 10)"]] },
    { title: "Schedule 2: Additional taxes", lines: [
      ["s2_4", "Line 4: Self-employment tax (Schedule SE)"],
      ["s2_21", "Line 21: Total other taxes (to 1040 line 23)"]] },
    { title: "Schedule A: Itemized deductions", lines: [
      ["a_4", "Line 4: Medical and dental, after 7.5% of AGI"],
      ["a_7", "Line 7: Taxes you paid"],
      ["a_10", "Line 10: Interest you paid"],
      ["a_14", "Line 14: Gifts to charity"],
      ["a_17", "Line 17: Total itemized deductions"]] },
    { title: "Form 1040: Income", lines: [
      ["l1z", "Line 1z: Wages"],
      ["l2a", "Line 2a: Tax-exempt interest"],
      ["l2b", "Line 2b: Taxable interest"],
      ["l3a", "Line 3a: Qualified dividends"],
      ["l3b", "Line 3b: Ordinary dividends"],
      ["l8", "Line 8: Additional income from Schedule 1"],
      ["l9", "Line 9: Total income"],
      ["l10", "Line 10: Adjustments from Schedule 1"],
      ["l11", "Line 11: Adjusted gross income"]] },
    { title: "Form 1040: Deductions and taxable income", lines: [
      ["l12e", "Line 12e: Standard deduction or itemized deductions"],
      ["l13a", "Line 13a: Qualified business income deduction"],
      ["l15", "Line 15: Taxable income"]] },
    { title: "Line 16 computation (show your work)", lines: [
      ["w_ord", "Ordinary income (line 15 - qualified dividends)"],
      ["w_ordtax", "Tax on ordinary income (2025 table)"],
      ["w_at0", "Qualified dividends taxed at 0%"],
      ["w_tax15", "Tax on the rest of the dividends at 15%"],
      ["l16", "Line 16: Tax"]] },
    { title: "Form 1040: Tax and payments", lines: [
      ["l23", "Line 23: Other taxes from Schedule 2"],
      ["l24", "Line 24: Total tax"],
      ["l25d", "Line 25d: Federal income tax withheld"],
      ["l26", "Line 26: Estimated tax payments"],
      ["l33", "Line 33: Total payments"],
      ["l34", "Line 34: Overpaid"],
      ["l37", "Line 37: Amount you owe"]] }
  ];

  function facts(x) {
    const who = x.status === "mfj" ? `${x.name} and spouse file a joint return` : `${x.name} files as single`;
    const f = [`${who} for 2025. No one is 65 or older or blind, and there are no dependents or credits.`];
    if (x.wages) f.push(`Form W-2: wages ${m(x.wages)}, federal income tax withheld ${m(x.withheld)}.`);
    if (x.interest) f.push(`Form 1099-INT: bank and corporate bond interest ${m(x.interest)}.`);
    if (x.muni) f.push(`Interest on a city of Springfield municipal bond: ${m(x.muni)}.`);
    if (x.ordDiv) f.push(`Form 1099-DIV: ordinary dividends ${m(x.ordDiv)}, of which ${m(x.qualDiv)} are qualified dividends.`);
    if (x.profit) f.push(`Schedule C net profit (line 31): ${m(x.profit)}. Compute self-employment tax with whole-dollar rounding at each step.`);
    if (x.qbi) f.push(`Qualified business income deduction (given): ${m(x.qbi)}.`);
    const it = [];
    if (x.medical) it.push(`unreimbursed doctor and hospital bills ${m(x.medical)}`);
    if (x.stateTax) it.push(`state income tax ${m(x.stateTax)}`);
    if (x.propTax) it.push(`real estate tax on the home ${m(x.propTax)}`);
    if (x.mortgage) it.push(`home mortgage interest ${m(x.mortgage)}`);
    if (x.gifts) it.push(`cash gifts to qualified charities ${m(x.gifts)}`);
    if (it.length) f.push(`Possible itemized deductions: ${it.join(", ")}. Fill in Schedule A even if the standard deduction turns out larger.`);
    if (x.estimates) f.push(`Estimated tax payments during 2025: ${m(x.estimates)}.`);
    f.push(`Use the 2025 rate table, the 2025 standard deduction (${m(A.T.standard[YEAR][x.status])}) and the 2025 qualified dividend 0% ceiling (${m(A.T.zeroCeiling[YEAR][x.status])}). Enter 0 for lines that don't apply.`);
    return f;
  }

  // typed: { key: string }. Returns { key: "right" | "follow" | "wrong" | "blank" } plus the score.
  function grade(x, typed) {
    const got = {};
    for (const k in typed) { const v = A.parseNum(typed[k]); if (!isNaN(v)) got[k] = v; }
    const L = solve(x, got), res = {};
    let right = 0, total = 0;
    for (const s of SECTIONS) for (const [k] of s.lines) {
      total++;
      const tol = ["l16", "w_ordtax", "w_tax15", "l24", "l34", "l37", "s2_4", "s2_21", "l23", "s1_15", "s1_26", "l10"].includes(k) ? 2 : 1;
      if (got[k] === undefined) { res[k] = "blank"; continue; }
      if (Math.abs(got[k] - L[k].v) <= tol) { res[k] = "right"; right++; }
      else if (Math.abs(got[k] - L[k].ft) <= tol) { res[k] = "follow"; right++; }
      else res[k] = "wrong";
    }
    return { res, right, total, L };
  }

  A.form1040 = { scenario, solve, facts, grade, SECTIONS, YEAR };
})(typeof window !== "undefined" ? window : globalThis);
