/* Calculation drills. Each drill makes new inputs from a seed, a prompt, the answer fields and a worked solution.
   verify.js recomputes every answer with separate code, so a change here that breaks the math fails the check. */
(function (root) {
  const A = root.ACCT;
  const m = (x, d) => A.money(x, d);
  const r2 = x => A.round(x, 2);
  const pct = x => `${A.round(x * 100, 2)}%`;
  const statusLabel = s => A.T.statusName[s];

  const D = [];
  const add = d => D.push(d);

  // ---------- 1040 / formula ----------
  add({
    id: "bracket", ch: 0, title: "Tax from the rate table",
    make(r) {
      const year = r.pick([2025, 2026]), status = r.pick(["single", "mfj"]);
      const lo = status === "single" ? 14000 : 28000;
      return { year, status, ti: r.step(lo, A.tableLimit(year, status) - 100, 50) };
    },
    prompt: x => [`Compute the regular tax for a ${statusLabel(x.status)} filer with ${x.year} taxable income of ${m(x.ti)} and no qualified dividends or capital gains.`],
    fields: () => [{ k: "tax", label: "Tax (line 16)", dec: 2 }],
    solve(x) {
      const o = A.taxOrdinary(x.year, x.status, x.ti);
      return {
        answers: { tax: r2(o.tax) },
        steps: [
          `Find the bracket: ${m(x.ti)} is at or above the ${pct(o.rate)} floor of ${m(o.floor)} in the ${x.year} ${statusLabel(x.status)} table.`,
          `Tax = base + rate x (income - floor) = ${m(o.base)} + ${pct(o.rate)} x (${m(x.ti)} - ${m(o.floor)}) = ${m(r2(o.tax), 2)}.`
        ]
      };
    }
  });

  add({
    id: "line16", ch: 0, star: true, title: "Line 16 with qualified dividends",
    make(r) {
      const year = r.pick([2025, 2026]), status = r.pick(["single", "mfj"]);
      const ceil = A.T.zeroCeiling[year][status];
      const qd = r.step(1000, 14000, 50);
      const kind = r.pick(["fill", "fill", "under", "over"]);
      let ord;
      if (kind === "fill") ord = r.step(ceil - qd + 100, ceil - 100, 50);          // dividends straddle the 0% ceiling
      else if (kind === "under") ord = r.step(Math.round(ceil * 0.45), ceil - qd - 100, 50);  // all dividends fit at 0%
      else ord = r.step(ceil + 500, Math.min(A.tableLimit(year, status) - qd - 500, ceil * 1.6), 50); // no room left
      return { year, status, qd, ti: ord + qd, name: r.pick(A.names) };
    },
    prompt: x => [
      `${x.name} files ${statusLabel(x.status)} for ${x.year}. Taxable income is ${m(x.ti)}, which includes ${m(x.qd)} of qualified dividends. There are no capital gains.`,
      `Show the line 16 computation the way it is taught: ordinary income, tax on ordinary income, the amount taxed at 0%, the tax at 15%, then line 16.`
    ],
    fields: () => [
      { k: "ord", label: "Ordinary income", dec: 0 },
      { k: "ordTax", label: "Tax on ordinary income", dec: 2 },
      { k: "at0", label: "Dividends taxed at 0%", dec: 0 },
      { k: "tax15", label: "Tax at 15%", dec: 2 },
      { k: "line16", label: "Line 16", dec: 2 }
    ],
    solve(x) {
      const c = A.line16(x.year, x.status, x.ti, x.qd);
      const ceil = A.T.zeroCeiling[x.year][x.status];
      return {
        answers: { ord: c.ordinary, ordTax: r2(c.ord.tax), at0: c.at0, tax15: r2(c.tax15), line16: r2(c.total) },
        steps: [
          `Ordinary income = taxable income - qualified dividends = ${m(x.ti)} - ${m(x.qd)} = ${m(c.ordinary)}.`,
          `Look up ordinary income, not total taxable income: ${m(c.ord.base)} + ${pct(c.ord.rate)} x (${m(c.ordinary)} - ${m(c.ord.floor)}) = ${m(r2(c.ord.tax), 2)}.`,
          `0% room = 0% ceiling - ordinary income = ${m(ceil)} - ${m(c.ordinary)}${c.room === 0 ? " is negative, so the room is 0" : ` = ${m(c.room)}`}. Dividends at 0% = the smaller of ${m(x.qd)} and the room = ${m(c.at0)}.`,
          `The rest, ${m(c.at15)}, is taxed at 15%: ${m(c.at15)} x 15% = ${m(r2(c.tax15), 2)}.`,
          `Line 16 = ${m(r2(c.ord.tax), 2)} + ${m(r2(c.tax15), 2)} = ${m(r2(c.total), 2)}.`
        ]
      };
    }
  });

  add({
    id: "setax", ch: 0, title: "Self-employment tax and its deduction",
    make(r) { return { year: r.pick([2025, 2026]), profit: r.step(18000, 150000, 5), name: r.pick(A.names) }; },
    prompt: x => [`${x.name}'s ${x.year} Schedule C shows a profit of ${m(x.profit)}. ${x.name} has no wages. Compute the self-employment tax and the for-AGI deduction for half of it. Round each step to whole dollars.`],
    fields: () => [
      { k: "base", label: "Net earnings (x 92.35%)", dec: 0 },
      { k: "se", label: "SE tax (Schedule 2, line 4)", dec: 0 },
      { k: "half", label: "Half of SE tax (Schedule 1)", dec: 0 }
    ],
    solve(x) {
      const base = Math.round(x.profit * 0.9235), ss = Math.round(base * 0.124), med = Math.round(base * 0.029);
      const se = ss + med, half = Math.round(se / 2);
      return {
        answers: { base, se, half },
        steps: [
          `Net earnings = ${m(x.profit)} x 92.35% = ${m(base)} (below the ${m(A.T.ssWageBase[x.year])} wage base, so all of it gets Social Security).`,
          `Social Security: ${m(base)} x 12.4% = ${m(ss)}. Medicare: ${m(base)} x 2.9% = ${m(med)}. SE tax = ${m(se)}, on Schedule 2 line 4, carried to 1040 line 23.`,
          `Half of SE tax = ${m(half)}, a for-AGI deduction on Schedule 1 Part II.`
        ]
      };
    }
  });

  // ---------- Ch 1 ----------
  add({
    id: "rates", ch: 1, title: "Marginal, average and effective rates",
    make(r) {
      const status = r.pick(["single", "mfj"]);
      const ti = r.step(status === "single" ? 30000 : 60000, A.tableLimit(2026, status) - 100, 50);
      const exempt = r.step(2000, 30000, 100);
      return { status, ti, exempt, name: r.pick(A.names) };
    },
    prompt: x => [
      `${x.name} files ${statusLabel(x.status)} for 2026 with taxable income of ${m(x.ti)} and no preferential income.`,
      `${x.name} also earned ${m(x.exempt)} of municipal bond interest, so total economic income is ${m(x.ti + x.exempt)}.`,
      `Give the marginal, average and effective tax rates as percentages, to two decimals.`
    ],
    fields: () => [
      { k: "tax", label: "Tax", dec: 2 },
      { k: "marginal", label: "Marginal rate (%)", dec: 2, tol: 0.02 },
      { k: "average", label: "Average rate (%)", dec: 2, tol: 0.02 },
      { k: "effective", label: "Effective rate (%)", dec: 2, tol: 0.02 }
    ],
    solve(x) {
      const o = A.taxOrdinary(2026, x.status, x.ti), econ = x.ti + x.exempt;
      return {
        answers: { tax: r2(o.tax), marginal: A.round(o.rate * 100, 2), average: A.round(o.tax / x.ti * 100, 2), effective: A.round(o.tax / econ * 100, 2) },
        steps: [
          `Tax = ${m(o.base)} + ${pct(o.rate)} x (${m(x.ti)} - ${m(o.floor)}) = ${m(r2(o.tax), 2)}.`,
          `Marginal = the bracket rate on the next dollar = ${pct(o.rate)}.`,
          `Average = tax / taxable income = ${m(r2(o.tax), 2)} / ${m(x.ti)} = ${A.round(o.tax / x.ti * 100, 2)}%.`,
          `Effective = tax / total economic income = ${m(r2(o.tax), 2)} / ${m(econ)} = ${A.round(o.tax / econ * 100, 2)}%. It is the lowest of the three because its denominator includes the tax-exempt interest.`
        ]
      };
    }
  });

  add({
    id: "deduction", ch: 1, title: "What a deduction really saves",
    make(r) {
      const status = r.pick(["single", "mfj"]);
      const rows = A.T.brackets[2026][status];
      const row = r.pick(rows.slice(1, 4)); // 12%, 22% or 24%
      const next = rows[rows.indexOf(row) + 1][0];
      const ti = r.step(row[0] + 6000, next - 500, 50);
      const amt = r.step(500, Math.min(6000, ti - row[0]), 50);
      return { status, ti, amt, kind: r.pick(["a cash gift to a qualified charity", "deductible mortgage interest", "a deductible state income tax payment"]), name: r.pick(A.names) };
    },
    prompt: x => [`${x.name} files ${statusLabel(x.status)} for 2026, itemizes, and has taxable income of ${m(x.ti)} before an extra ${m(x.amt)} of ${x.kind}. The extra amount stays in the same bracket. How much tax does it save, and what is its after-tax cost?`],
    fields: () => [{ k: "save", label: "Tax saved", dec: 2 }, { k: "cost", label: "After-tax cost", dec: 2 }],
    solve(x) {
      const rate = A.marginalRate(2026, x.status, x.ti);
      const save = r2(x.amt * rate);
      return {
        answers: { save, cost: r2(x.amt - save) },
        steps: [
          `Use the marginal rate, never the average rate: ${m(x.ti)} is in the ${pct(rate)} bracket.`,
          `Tax saved = ${m(x.amt)} x ${pct(rate)} = ${m(save, 2)}. After-tax cost = ${m(x.amt)} - ${m(save, 2)} = ${m(r2(x.amt - save), 2)}.`
        ]
      };
    }
  });

  add({
    id: "usetax", ch: 1, title: "Use tax on an out-of-state purchase",
    make(r) {
      const pairs = [[5, 6.25], [4, 6.25], [5.5, 7], [6, 7], [4.5, 6.5], [3, 6]];
      const [paid, home] = r.pick(pairs);
      return { price: r.step(4000, 60000, 100), paid, home, item: r.pick(["a boat", "a car", "a piano", "farm equipment", "a motorcycle"]), name: r.pick(A.names) };
    },
    prompt: x => [`${x.name} lives in a state with a ${x.home}% sales tax, but buys ${x.item} for ${m(x.price)} in a neighboring state and pays its ${x.paid}% sales tax there. How much use tax does ${x.name} owe the home state?`],
    fields: () => [{ k: "use", label: "Use tax owed", dec: 2 }],
    solve(x) {
      const use = r2(x.price * (x.home - x.paid) / 100);
      return { answers: { use }, steps: [`The home state charges the difference in rates: ${x.home}% - ${x.paid}% = ${A.round(x.home - x.paid, 2)}%.`, `${m(x.price)} x ${A.round(x.home - x.paid, 2)}% = ${m(use, 2)}. Buying out of state saved nothing.`] };
    }
  });

  // ---------- Ch 2 ----------
  add({
    id: "gain", ch: 2, star: true, title: "Amount realized, realized and recognized gain",
    make(r) {
      const cost = r.step(120000, 600000, 1000);
      const improve = r.chance(0.6) ? r.step(5000, 60000, 500) : 0;
      const dep = r.step(10000, Math.round(cost * 0.4), 500);
      const debt = r.chance(0.5) ? r.step(20000, 150000, 1000) : 0;
      const costs = r.step(4000, 30000, 500);
      const adj = cost + improve - dep;
      const cash = r.step(Math.max(20000, adj - debt + costs + 10000), adj + 250000, 1000);
      return { cost, improve, dep, debt, costs, cash, name: r.pick(A.names), asset: r.pick(["a warehouse", "an office building", "a rental duplex", "a delivery truck fleet", "a retail building"]) };
    },
    prompt: x => [
      `${x.name} sells ${x.asset} used in business. It cost ${m(x.cost)}${x.improve ? `, ${x.name} later added ${m(x.improve)} of improvements,` : ","} and ${m(x.dep)} of depreciation has been taken.`,
      `The buyer pays ${m(x.cash)} in cash${x.debt ? ` and takes over the ${m(x.debt)} mortgage on it` : ""}. ${x.name} pays ${m(x.costs)} of broker and closing costs. No exclusion or deferral applies.`
    ],
    fields: () => [
      { k: "ar", label: "Amount realized", dec: 0 },
      { k: "basis", label: "Adjusted basis", dec: 0 },
      { k: "realized", label: "Realized gain", dec: 0 },
      { k: "recognized", label: "Recognized gain", dec: 0 }
    ],
    solve(x) {
      const ar = x.cash + x.debt - x.costs, basis = x.cost + x.improve - x.dep, realized = ar - basis;
      return {
        answers: { ar, basis, realized, recognized: realized },
        steps: [
          `Amount realized = cash + liabilities the buyer assumes - selling costs = ${m(x.cash)} + ${m(x.debt)} - ${m(x.costs)} = ${m(ar)}. Selling costs reduce the amount realized; they are not added to basis.`,
          `Adjusted basis = cost + improvements - depreciation = ${m(x.cost)} + ${m(x.improve)} - ${m(x.dep)} = ${m(basis)}.`,
          `Realized gain = ${m(ar)} - ${m(basis)} = ${m(realized)}. With no exclusion or deferral, all of it is recognized.`
        ]
      };
    }
  });

  add({
    id: "caploss", ch: 2, title: "Net capital loss limit",
    make(r) { return { loss: r.step(3500, 40000, 100), mfs: r.chance(0.3), name: r.pick(A.names) }; },
    prompt: x => [`${x.name} files ${x.mfs ? "married filing separately" : "single"} and has a net capital loss of ${m(x.loss)} for the year, with no other capital transactions. How much is deductible this year, and how much carries forward?`],
    fields: () => [{ k: "ded", label: "Deductible this year", dec: 0 }, { k: "carry", label: "Carryforward", dec: 0 }],
    solve(x) {
      const lim = x.mfs ? 1500 : 3000, ded = Math.min(lim, x.loss);
      return { answers: { ded, carry: x.loss - ded }, steps: [`A net capital loss offsets only ${m(lim)} of other income a year${x.mfs ? " for MFS" : ""}.`, `Deduct ${m(ded)}; carry forward ${m(x.loss)} - ${m(ded)} = ${m(x.loss - ded)}.`] };
    }
  });

  // ---------- Ch 4 ----------
  add({
    id: "kiddie", ch: 4, title: "Dependent's standard deduction and kiddie tax",
    make(r) { return { earned: r.chance(0.3) ? 0 : r.step(200, 5000, 50), unearned: r.step(2800, 9000, 50), name: r.pick(A.names) }; },
    prompt: x => [
      `${x.name}, a 15-year-old dependent, has 2026 earned income of ${m(x.earned)} and unearned income (interest and dividends) of ${m(x.unearned)}.`,
      `Find the standard deduction, taxable income, and the net unearned income taxed at the parent's rate.`
    ],
    fields: () => [{ k: "std", label: "Standard deduction", dec: 0 }, { k: "ti", label: "Taxable income", dec: 0 }, { k: "nui", label: "Taxed at the parent's rate", dec: 0 }],
    solve(x) {
      const K = A.T.kiddie;
      const std = Math.min(Math.max(K.minStd, x.earned + K.earnedAdd), A.T.standard[2026].single);
      const ti = Math.max(0, x.earned + x.unearned - std);
      const nui = Math.min(Math.max(0, x.unearned - K.threshold), ti);
      return {
        answers: { std, ti, nui },
        steps: [
          `Dependent's standard deduction = the greater of ${m(K.minStd)} or earned income + ${m(K.earnedAdd)} (${m(x.earned + K.earnedAdd)}) = ${m(std)}.`,
          `Taxable income = ${m(x.earned)} + ${m(x.unearned)} - ${m(std)} = ${m(ti)}.`,
          `Unearned income over ${m(K.threshold)} is taxed at the parent's rate: ${m(x.unearned)} - ${m(K.threshold)} = ${m(nui)}. The other ${m(ti - nui)} is taxed at the child's rate. Earned income is never kiddie-taxed.`
        ]
      };
    }
  });

  // ---------- Ch 5 ----------
  add({
    id: "prepaid", ch: 5, title: "Prepaid service income with an AFS",
    make(r) {
      const fee = r.step(100, 600, 25), months = r.int(13, 24), start = r.int(2, 12);
      return { fee, months, start, name: r.pick(A.names), biz: r.pick(["a lawn care company", "a gym", "a software support firm", "a tutoring business", "a pest control company"]) };
    },
    prompt: x => {
      const mn = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][x.start];
      return [`${x.name} runs ${x.biz} on the accrual method with an applicable financial statement. On ${mn} 1 of year 1, a customer prepays ${m(x.fee * x.months)} for ${x.months} months of service (${m(x.fee)} a month) starting that day. How much income is taxed in year 1 and in year 2 using the deferral method?`];
    },
    fields: () => [{ k: "y1", label: "Year 1 income", dec: 0 }, { k: "y2", label: "Year 2 income", dec: 0 }],
    solve(x) {
      const earnedMonths = Math.min(x.months, 13 - x.start), total = x.fee * x.months, y1 = x.fee * earnedMonths;
      return {
        answers: { y1, y2: total - y1 },
        steps: [
          `Year 1: only the part the financial statement shows as earned: ${earnedMonths} months x ${m(x.fee)} = ${m(y1)}.`,
          `Year 2: all the rest, even though some service happens later: ${m(total)} - ${m(y1)} = ${m(total - y1)}. A cash-method taxpayer would report all ${m(total)} in year 1.`
        ]
      };
    }
  });

  // ---------- Ch 6 ----------
  add({
    id: "scholarship", ch: 6, title: "Taxable part of a scholarship",
    make(r) {
      const tuition = r.step(8000, 40000, 500), fees = r.step(300, 2500, 50), books = r.step(300, 1500, 50), room = r.step(4000, 14000, 100), travel = r.step(0, 1500, 100);
      const extra = r.chance(0.5) ? room + travel : r.step(500, room, 100);
      const ta = r.chance(0.5) ? r.step(2000, 9000, 100) : 0;
      return { tuition, fees, books, room, travel, award: tuition + fees + books + extra, ta, name: r.pick(A.names) };
    },
    prompt: x => [
      `${x.name}, a degree candidate, receives a ${m(x.award)} scholarship. ${x.name}'s costs are tuition ${m(x.tuition)}, required fees ${m(x.fees)}, required books and supplies ${m(x.books)}, room and board ${m(x.room)} and travel ${m(x.travel)}.${x.ta ? ` ${x.name} is also paid ${m(x.ta)} as a teaching assistant.` : ""}`,
      `How much is included in gross income?`
    ],
    fields: () => [{ k: "taxable", label: "Taxable amount", dec: 0 }],
    solve(x) {
      const qualified = x.tuition + x.fees + x.books, taxable = Math.max(0, x.award - qualified) + x.ta;
      return { answers: { taxable }, steps: [`Only tuition, required fees and required books are excluded: ${m(x.tuition)} + ${m(x.fees)} + ${m(x.books)} = ${m(qualified)}.`, `Scholarship over that is taxable: ${m(x.award)} - ${m(qualified)} = ${m(Math.max(0, x.award - qualified))}${x.ta ? `, plus the ${m(x.ta)} paid for services` : ""}. Total ${m(taxable)}.`] };
    }
  });

  add({
    id: "cod", ch: 6, title: "Forgiven debt: reducing tax attributes",
    make(r) {
      const nol = r.step(5000, 40000, 500), cap = r.step(1000, 9000, 500), basis = r.step(8000, 40000, 500);
      const elect = r.chance(0.45);
      let f = r.step(Math.round((nol + cap) * 0.6), nol + cap + basis - 500, 500);
      return { nol, cap, basis, forgiven: f, elect, name: r.pick(A.names) };
    },
    prompt: x => [
      `${x.name} is insolvent by more than the debt, and ${m(x.forgiven)} of debt is forgiven and excluded from income. ${x.name} has an NOL carryover of ${m(x.nol)}, a capital loss carryover of ${m(x.cap)} and depreciable property with a basis of ${m(x.basis)}.`,
      x.elect ? `${x.name} elects to reduce depreciable basis first. What is left of each attribute?` : `${x.name} makes no election. What is left of each attribute?`
    ],
    fields: () => [{ k: "nol", label: "NOL left", dec: 0 }, { k: "cap", label: "Capital loss left", dec: 0 }, { k: "basis", label: "Basis left", dec: 0 }],
    solve(x) {
      let left = x.forgiven;
      const out = { nol: x.nol, cap: x.cap, basis: x.basis };
      const order = x.elect ? ["basis", "nol", "cap"] : ["nol", "cap", "basis"];
      for (const k of order) { const cut = Math.min(out[k], left); out[k] -= cut; left -= cut; }
      return {
        answers: out,
        steps: [
          `Order: ${x.elect ? "basis first (the election), then the NOL, then the capital loss" : "NOL, then capital loss carryover, then basis of property"}.`,
          `Apply ${m(x.forgiven)} in that order until it runs out: NOL ${m(x.nol)} to ${m(out.nol)}, capital loss ${m(x.cap)} to ${m(out.cap)}, basis ${m(x.basis)} to ${m(out.basis)}.`
        ]
      };
    }
  });

  // ---------- Ch 7 ----------
  add({
    id: "grouplife", ch: 7, title: "Taxable group-term life insurance",
    make(r) { return { age: r.int(22, 72), cov: r.step(60000, 400000, 5000), name: r.pick(A.names) }; },
    prompt: x => [`${x.name}, age ${x.age}, has ${m(x.cov)} of employer-paid group-term life coverage all year. How much is included in income?`],
    fields: () => [{ k: "inc", label: "Taxable amount", dec: 2, tol: 0.01 }],
    solve(x) {
      const row = A.T.groupTermRates.find(t => x.age >= t[0] && x.age <= t[1]);
      const units = (x.cov - 50000) / 1000, inc = r2(units * row[2]);
      return { answers: { inc }, steps: [`The first ${m(50000)} is excluded: (${m(x.cov)} - ${m(50000)}) / 1,000 = ${A.round(units, 2)} units.`, `Annual rate for age ${x.age}: ${row[2].toFixed(2)} per ${m(1000)}. ${A.round(units, 2)} x ${row[2].toFixed(2)} = ${m(inc, 2)}.`] };
    }
  });

  add({
    id: "discount", ch: 7, title: "Employee discount over the limit",
    make(r) {
      const goods = r.chance(0.5);
      return { goods, price: r.step(400, 8000, 50), disc: r.int(10, 50), gp: r.int(25, 45), name: r.pick(A.names) };
    },
    prompt: x => [x.goods
      ? `${x.name} works for an electronics retailer whose gross profit percentage is ${x.gp}%. ${x.name} buys a laptop that sells for ${m(x.price)} at a ${x.disc}% employee discount. How much of the discount is taxable?`
      : `${x.name} works for an accounting firm and receives ${m(x.price)} of tax services from the firm at a ${x.disc}% employee discount. How much of the discount is taxable?`],
    fields: () => [{ k: "tax", label: "Taxable discount", dec: 2 }],
    solve(x) {
      const cap = x.goods ? x.gp : 20, tax = r2(Math.max(0, x.disc - cap) / 100 * x.price);
      return { answers: { tax }, steps: [x.goods ? `For goods, the excludable discount is capped at the employer's gross profit percentage, ${x.gp}%.` : `For services, the excludable discount is capped at 20% of the price.`, `Taxable = (${x.disc}% - ${cap}%, but not below 0) x ${m(x.price)} = ${m(tax, 2)}.`] };
    }
  });

  // ---------- Ch 9 ----------
  add({
    id: "stditem", ch: 9, title: "Standard deduction or itemize",
    make(r) {
      const status = r.pick(["single", "mfj"]);
      const extras = status === "single" ? r.int(0, 2) : r.int(0, 3);
      const deaf = r.chance(0.3);
      const std = A.T.standard[2026][status] + extras * A.T.extraStd[2026][status];
      const item = r.step(std - 4000, std + 4000, 50);
      return { status, extras, deaf, item, name: r.pick(A.names) };
    },
    prompt: x => {
      const who = x.status === "single" ? `${x.name}, who files single,` : `${x.name} and spouse, filing jointly,`;
      const detail = x.extras === 0 ? "No one is 65 or older or blind" : `They have ${x.extras} add-on condition${x.extras > 1 ? "s" : ""} in total (each counts once for being 65 or older and once for being blind)`;
      return [`${who} have ${m(x.item)} of itemized deductions for 2026. ${detail}.${x.deaf ? " One of them is deaf." : ""} What standard deduction is available, and what deduction should they take?`];
    },
    fields: () => [{ k: "std", label: "Standard deduction available", dec: 0 }, { k: "take", label: "Deduction to take", dec: 0 }],
    solve(x) {
      const per = A.T.extraStd[2026][x.status], std = A.T.standard[2026][x.status] + x.extras * per;
      return { answers: { std, take: Math.max(std, x.item) }, steps: [`Base ${m(A.T.standard[2026][x.status])} + ${x.extras} x ${m(per)} = ${m(std)}.${x.deaf ? " Deafness earns no add-on; only 65 or older and blindness do." : ""}`, `Take the larger: ${m(Math.max(std, x.item))} (${x.item > std ? "itemize" : "standard deduction"}).`] };
    }
  });

  add({
    id: "medical", ch: 9, title: "Medical expense deduction",
    make(r) {
      return {
        agi: r.step(40000, 180000, 1000), doctor: r.step(1000, 9000, 50), rx: r.step(200, 3000, 25), dental: r.step(0, 4000, 50),
        premiums: r.step(0, 6000, 50), cosmetic: r.chance(0.5) ? r.step(2000, 9000, 100) : 0, otc: r.step(50, 400, 5), water: r.chance(0.4) ? r.step(100, 600, 10) : 0,
        reimb: r.step(0, 4000, 50), name: r.pick(A.names)
      };
    },
    prompt: x => [
      `${x.name} has AGI of ${m(x.agi)} and pays: doctor and hospital bills ${m(x.doctor)}, prescriptions ${m(x.rx)}, dental work ${m(x.dental)}, health insurance premiums paid with after-tax money ${m(x.premiums)}${x.cosmetic ? `, cosmetic surgery ${m(x.cosmetic)}` : ""}, over-the-counter pain relievers ${m(x.otc)}${x.water ? ` and bottled water ${m(x.water)}` : ""}.`,
      `Insurance reimburses ${m(x.reimb)}. What are the qualifying expenses, and what is the medical deduction on Schedule A?`
    ],
    fields: () => [{ k: "qual", label: "Qualifying expenses", dec: 0 }, { k: "ded", label: "Medical deduction", dec: 0 }],
    solve(x) {
      const qual = x.doctor + x.rx + x.dental + x.premiums, floor = Math.round(x.agi * 0.075), ded = Math.max(0, qual - x.reimb - floor);
      return { answers: { qual, ded }, steps: [`Qualifying: doctor ${m(x.doctor)} + prescriptions ${m(x.rx)} + dental ${m(x.dental)} + premiums ${m(x.premiums)} = ${m(qual)}. Cosmetic surgery, over-the-counter drugs and bottled water don't count.`, `Deduction = ${m(qual)} - reimbursement ${m(x.reimb)} - 7.5% of AGI (${m(floor)}) = ${ded > 0 ? m(ded) : "below zero, so 0"}.`] };
    }
  });

  add({
    id: "salt", ch: 9, title: "State and local tax (SALT) deduction",
    make(r) {
      const high = r.chance(0.35);
      return {
        status: r.pick(["single", "mfj"]), inc: r.step(3000, 40000, 100), sales: r.step(1500, 9000, 100), re: r.step(3000, 30000, 100),
        pp: r.chance(0.5) ? r.step(200, 2000, 10) : 0, fee: r.chance(0.4) ? r.step(40, 300, 5) : 0,
        magi: high ? r.step(510000, 700000, 1000) : r.step(90000, 480000, 1000), name: r.pick(A.names)
      };
    },
    prompt: x => [
      `${x.name} (filing ${statusLabel(x.status)}, 2026, MAGI ${m(x.magi)}) itemizes and paid: state income tax ${m(x.inc)}, general sales tax ${m(x.sales)}, real estate tax on the home ${m(x.re)}${x.pp ? `, a value-based personal property tax on a car ${m(x.pp)}` : ""}${x.fee ? `, a flat vehicle registration fee ${m(x.fee)}` : ""}.`,
      `What are the deductible taxes before the cap, the cap that applies, and the SALT deduction?`
    ],
    fields: () => [{ k: "total", label: "Taxes before the cap", dec: 0 }, { k: "cap", label: "Cap that applies", dec: 0 }, { k: "ded", label: "SALT deduction", dec: 0 }],
    solve(x) {
      const S = A.T.salt2026, total = Math.max(x.inc, x.sales) + x.re + x.pp;
      const cap = Math.max(S.floor, S.cap - 0.3 * Math.max(0, x.magi - S.phaseStart));
      return {
        answers: { total, cap: r2(cap), ded: r2(Math.min(total, cap)) },
        steps: [
          `Take the greater of income tax or sales tax (${m(Math.max(x.inc, x.sales))}), plus real estate tax ${m(x.re)}${x.pp ? ` and the value-based property tax ${m(x.pp)}` : ""} = ${m(total)}.${x.fee ? " A flat registration fee is not a deductible tax." : ""}`,
          x.magi > S.phaseStart ? `Cap: ${m(S.cap)} - 30% x (${m(x.magi)} - ${m(S.phaseStart)}) = ${m(r2(S.cap - 0.3 * (x.magi - S.phaseStart)), 2)}, but never below ${m(S.floor)}, so ${m(r2(cap), 2)}.` : `MAGI is not over ${m(S.phaseStart)}, so the full ${m(S.cap)} cap applies.`,
          `Deduction = the smaller of ${m(total)} and the cap = ${m(r2(Math.min(total, cap)), 2)}.`
        ]
      };
    }
  });

  add({
    id: "charity", ch: 9, title: "Cash gift over the AGI limit",
    make(r) { const agi = r.step(100000, 800000, 10000); return { agi, gift: Math.round(agi * 0.6) + r.step(5000, 200000, 500), name: r.pick(A.names) }; },
    prompt: x => [`In 2026, ${x.name} (AGI ${m(x.agi)}) gives ${m(x.gift)} of cash to a public charity. Using the 60% limit and the 0.5%-of-AGI floor as taught, how much is deducted this year and how much carries forward?`],
    fields: () => [{ k: "ded", label: "Deducted this year", dec: 0 }, { k: "carry", label: "Carryforward", dec: 0 }],
    solve(x) {
      const lim = Math.round(x.agi * 0.6), floor = Math.round(x.agi * 0.005), ded = lim - floor;
      return { answers: { ded, carry: x.gift - ded }, steps: [`60% of AGI = ${m(lim)}; the 0.5% floor = ${m(floor)}. Deduction = ${m(lim)} - ${m(floor)} = ${m(ded)}.`, `Carryforward (5 years) = ${m(x.gift)} - ${m(ded)} = ${m(x.gift - ded)}.`] };
    }
  });

  add({
    id: "casualty", ch: 9, title: "Personal casualty loss",
    make(r) {
      const before = r.step(80000, 500000, 1000), after = r.step(0, Math.round(before * 0.5), 1000), basis = r.step(60000, 450000, 1000);
      const lesser = Math.min(before - after, basis);
      return { before, after, basis, ins: r.step(0, Math.round(lesser * 0.8), 1000), agi: r.step(40000, 200000, 1000), name: r.pick(A.names) };
    },
    prompt: x => [`A hurricane in a federally declared disaster area damages ${x.name}'s home. Value before ${m(x.before)}, after ${m(x.after)}; adjusted basis ${m(x.basis)}. Insurance pays ${m(x.ins)}. AGI is ${m(x.agi)}. What is the loss after insurance and the $100 floor, and the itemized deduction?`],
    fields: () => [{ k: "loss", label: "Loss after insurance and $100", dec: 0 }, { k: "ded", label: "Casualty deduction", dec: 0 }],
    solve(x) {
      const decline = x.before - x.after, lesser = Math.min(decline, x.basis), loss = Math.max(0, lesser - x.ins - 100), floor = Math.round(x.agi * 0.1), ded = Math.max(0, loss - floor);
      return { answers: { loss, ded }, steps: [`Start with the lesser of the decline in value (${m(decline)}) or basis (${m(x.basis)}): ${m(lesser)}.`, `Subtract insurance and the $100 floor: ${m(lesser)} - ${m(x.ins)} - 100 = ${m(loss)}.`, `Subtract 10% of AGI (${m(floor)}): deduction ${ded > 0 ? m(ded) : "0"}.`] };
    }
  });

  add({
    id: "invint", ch: 9, title: "Investment interest limit",
    make(r) {
      const ii = r.step(1500, 15000, 50), nii = r.step(300, 9000, 50), qd = r.step(500, 6000, 50);
      return { ii, nii, qd, elect: r.chance(0.5), name: r.pick(A.names) };
    },
    prompt: x => [`${x.name} pays ${m(x.ii)} of margin interest used to buy stocks. Net investment income from interest and non-qualified dividends is ${m(x.nii)}. ${x.name} also has ${m(x.qd)} of qualified dividends and ${x.elect ? "elects" : "does not elect"} to tax them at ordinary rates. How much investment interest is deductible, and how much carries forward?`],
    fields: () => [{ k: "ded", label: "Deductible", dec: 0 }, { k: "carry", label: "Carryforward", dec: 0 }],
    solve(x) {
      const lim = x.nii + (x.elect ? x.qd : 0), ded = Math.min(x.ii, lim);
      return { answers: { ded, carry: x.ii - ded }, steps: [`Limit = net investment income${x.elect ? " + the qualified dividends, because of the election" : " (qualified dividends count only with the election)"} = ${m(lim)}.`, `Deduct ${m(ded)}; carry forward ${m(x.ii - ded)}.`] };
    }
  });

  // ---------- Ch 12 ----------
  add({
    id: "distrib", ch: 12, title: "Distribution beyond earnings and profits",
    make(r) {
      const ep = r.step(1000, 20000, 100), basis = r.step(500, 15000, 50);
      return { ep, basis, dist: ep + r.step(200, basis + 6000, 50), name: r.pick(A.names) };
    },
    prompt: x => [`A corporation with ${m(x.ep)} of earnings and profits distributes ${m(x.dist)} to ${x.name}, its only shareholder, whose stock basis is ${m(x.basis)} and who has held the stock for years. Split the distribution.`],
    fields: () => [{ k: "div", label: "Dividend", dec: 0 }, { k: "basis", label: "Stock basis afterward", dec: 0 }, { k: "gain", label: "Capital gain", dec: 0 }],
    solve(x) {
      const div = Math.min(x.dist, x.ep), rest = x.dist - div, back = Math.min(rest, x.basis), gain = rest - back;
      return { answers: { div, basis: x.basis - back, gain }, steps: [`Dividend to the extent of E&P: ${m(div)}.`, `The next ${m(back)} is a tax-free return of basis, leaving basis of ${m(x.basis - back)}.`, `Anything beyond basis is capital gain: ${m(gain)}.`] };
    }
  });

  // ---------- Ch 15 ----------
  add({
    id: "wash", ch: 15, title: "Wash sale",
    make(r) {
      const n = r.step(100, 1000, 50), mFrac = r.pick([0.2, 0.4, 0.5, 0.6, 0.8, 1]);
      const basisPS = r.int(30, 120), sell = r.int(10, basisPS - 5), buy = r.int(Math.max(5, sell - 5), sell + 8);
      return { n, mm: Math.round(n * mFrac), basisPS, sell, buy, name: r.pick(A.names) };
    },
    prompt: x => [`${x.name} sells ${x.n} shares bought years ago at ${m(x.basisPS)} a share for ${m(x.sell)} a share. Twenty days later ${x.name} buys ${x.mm} shares of the same stock at ${m(x.buy)} a share. Find the deferred loss, the loss allowed now, and the basis of the new shares.`],
    fields: () => [{ k: "deferred", label: "Deferred loss", dec: 0 }, { k: "allowed", label: "Loss allowed now", dec: 0 }, { k: "basis", label: "Basis of new shares", dec: 0 }],
    solve(x) {
      const loss = x.n * (x.basisPS - x.sell), deferred = r2(loss * x.mm / x.n), allowed = r2(loss - deferred), basis = r2(x.mm * x.buy + deferred);
      return { answers: { deferred, allowed, basis }, steps: [`Realized loss = ${x.n} x (${m(x.basisPS)} - ${m(x.sell)}) = ${m(loss)}.`, `Deferred = ${m(loss)} x ${x.mm} / ${x.n} = ${m(deferred)}; allowed now = ${m(allowed)}.`, `New basis = cost ${m(x.mm * x.buy)} + deferred loss ${m(deferred)} = ${m(basis)}. The old holding period tacks on.`] };
    }
  });

  add({
    id: "related", ch: 15, title: "Sale to a related party",
    make(r) {
      const basis = r.step(20000, 300000, 500), price = r.step(Math.round(basis * 0.5), basis - 1000, 500), lossAmt = basis - price;
      const kind = r.pick(["over", "between", "under"]);
      let later;
      if (kind === "over") later = price + lossAmt + r.step(1000, 60000, 500);
      else if (kind === "between") later = price + r.step(0, lossAmt, 100);
      else later = Math.max(1000, price - r.step(500, Math.round(price * 0.4), 500));
      return { basis, price, later, name: r.pick(A.names), rel: r.pick(["daughter", "son", "brother", "sister", "father", "mother"]) };
    },
    prompt: x => [`${x.name} sells stock with a basis of ${m(x.basis)} to ${x.name}'s ${x.rel} for ${m(x.price)}, its fair market value. Later the ${x.rel} sells the stock to an unrelated buyer for ${m(x.later)}.`, `How much loss is disallowed for ${x.name}, and what gain or loss does the ${x.rel} recognize? (Enter a loss as a negative number.)`],
    fields: () => [{ k: "disallowed", label: "Seller's disallowed loss", dec: 0 }, { k: "buyer", label: "Buyer's recognized gain or loss", dec: 0 }],
    solve(x) {
      const dis = x.basis - x.price, raw = x.later - x.price;
      const buyer = raw >= 0 ? Math.max(0, raw - dis) : raw;
      return {
        answers: { disallowed: dis, buyer },
        steps: [
          `Related-party loss: ${m(x.basis)} - ${m(x.price)} = ${m(dis)} realized but not recognized. The ${x.rel}'s basis is what they paid, ${m(x.price)}.`,
          raw >= 0 ? `The ${x.rel}'s gain is ${m(raw)}. The disallowed loss offsets it, but can't create a loss: recognized ${m(buyer)}.` : `The ${x.rel} sold below their own basis, a ${m(-raw)} loss of their own. The offset only reduces gains, so ${x.name}'s disallowed loss is lost for good.`
        ]
      };
    }
  });

  add({
    id: "home", ch: 15, title: "Home sale exclusion",
    make(r) {
      const joint = r.chance(0.5), partial = r.chance(0.4);
      const basis = r.step(150000, 700000, 1000), costs = r.step(10000, 60000, 500);
      const realized = r.step(30000, joint ? 750000 : 450000, 1000);
      return { joint, partial, months: partial ? r.int(6, 23) : 0, basis, costs, price: basis + costs + realized, name: r.pick(A.names) };
    },
    prompt: x => [
      `${x.name}${x.joint ? " and spouse (filing jointly)" : " (filing single)"} sell their main home for ${m(x.price)} and pay ${m(x.costs)} of selling costs. Adjusted basis is ${m(x.basis)}.`,
      x.partial ? `They owned and lived in it for only ${x.months} months before selling because of a job transfer to another city, and have never used the exclusion.` : `They owned and lived in it for six years and have never used the exclusion.`,
      `Find the realized gain, the exclusion, and the recognized gain.`
    ],
    fields: () => [{ k: "realized", label: "Realized gain", dec: 0 }, { k: "excl", label: "Exclusion", dec: 0 }, { k: "rec", label: "Recognized gain", dec: 0 }],
    solve(x) {
      const realized = x.price - x.costs - x.basis, max = x.joint ? 500000 : 250000;
      const excl = Math.min(realized, x.partial ? Math.round(max * x.months / 24) : max);
      return {
        answers: { realized, excl, rec: realized - excl },
        steps: [
          `Realized gain = (${m(x.price)} - ${m(x.costs)}) - ${m(x.basis)} = ${m(realized)}.`,
          x.partial ? `They miss the 2-of-5-years test because of a job change, so prorate: ${m(max)} x ${x.months} / 24 = ${m(Math.round(max * x.months / 24))}.` : `Both tests are met, so the full ${m(max)} applies.`,
          `Exclusion = the smaller of the gain and that limit = ${m(excl)}. Recognized gain = ${m(realized - excl)}.`
        ]
      };
    }
  });

  A.drills = D;
  A.drillById = id => D.find(d => d.id === id);
  // build one drill instance from a seed
  A.makeDrill = (d, seed) => {
    const r = A.rng(seed), inputs = d.make(r);
    return { drill: d, seed, inputs, prompt: d.prompt(inputs), fields: d.fields(inputs), ...d.solve(inputs) };
  };
  // compare typed answers with the solution: returns { key: true/false }
  A.checkDrill = (inst, typed) => {
    const out = {};
    for (const f of inst.fields) {
      const v = A.parseNum(typed[f.k]);
      const tol = f.tol !== undefined ? f.tol : (f.dec === 2 ? 1 : 1);
      out[f.k] = !isNaN(v) && Math.abs(v - inst.answers[f.k]) <= tol + 1e-9;
    }
    return out;
  };
})(typeof window !== "undefined" ? window : globalThis);
