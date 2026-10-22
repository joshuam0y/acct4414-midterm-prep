// Checks the site before publishing: `node verify.js`
// 1. Every drill answer is recomputed here with separate code (brackets are summed slice by slice instead of base + rate).
// 2. Every Form 1040 scenario grades its own true answers as fully correct, and the class demo return reproduces.
// 3. Content files are well formed: unique ids, 4 different options, no em or en dashes.
const fs = require("fs");
global.window = globalThis;
global.localStorage = null;
const files = ["js/core.js", "js/tables.js", ...fs.readdirSync("data").sort().map(f => "data/" + f), "js/drills.js", "js/form1040.js", "js/sheet.js"];
files.forEach(f => require("./" + f));
const A = globalThis.ACCT;
let fails = 0;
const fail = (...m) => { fails++; if (fails <= 30) console.log("FAIL", ...m); };

// ---------- independent tax: sum each bracket slice ----------
const RATES = [0.10, 0.12, 0.22, 0.24, 0.32];
const FLOORS = { 2025: { single: [0, 11925, 48475, 103350, 197300], mfj: [0, 23850, 96950, 206700, 394600] }, 2026: { single: [0, 12400, 50400, 105700, 201775], mfj: [0, 24800, 100800, 211400, 403550] } };
function taxBySlices(year, status, x) {
  const f = FLOORS[year][status];
  let t = 0;
  for (let i = 0; i < f.length; i++) { const top = i + 1 < f.length ? f[i + 1] : Infinity; if (x > f[i]) t += (Math.min(x, top) - f[i]) * RATES[i]; }
  return t;
}
const rateAt = (year, status, x) => { const f = FLOORS[year][status]; let r = RATES[0]; f.forEach((fl, i) => { if (x >= fl) r = RATES[i]; }); return r; };
const CEIL0 = { 2025: { single: 48350, mfj: 96700 }, 2026: { single: 49450, mfj: 98900 } };
const R2 = x => Math.round(x * 100) / 100;

const indep = {
  bracket: x => ({ tax: R2(taxBySlices(x.year, x.status, x.ti)) }),
  line16: x => {
    const ord = x.ti - x.qd, ordTax = taxBySlices(x.year, x.status, ord);
    const at0 = Math.max(0, Math.min(x.qd, CEIL0[x.year][x.status] - ord));
    const tax15 = (x.qd - at0) * 0.15;
    return { ord, ordTax: R2(ordTax), at0, tax15: R2(tax15), line16: R2(ordTax + tax15) };
  },
  setax: x => { const b = Math.round(x.profit * 0.9235); const se = Math.round(b * 0.124) + Math.round(b * 0.029); return { base: b, se, half: Math.round(se / 2) }; },
  rates: x => { const t = taxBySlices(2026, x.status, x.ti); return { tax: R2(t), marginal: rateAt(2026, x.status, x.ti) * 100, average: R2(t / x.ti * 100), effective: R2(t / (x.ti + x.exempt) * 100) }; },
  deduction: x => { const before = taxBySlices(2026, x.status, x.ti), after = taxBySlices(2026, x.status, x.ti - x.amt); return { save: R2(before - after), cost: R2(x.amt - (before - after)) }; },
  usetax: x => ({ use: R2(x.price * (x.home - x.paid) / 100) }),
  gain: x => { const ar = x.cash + x.debt - x.costs, b = x.cost + x.improve - x.dep; return { ar, basis: b, realized: ar - b, recognized: ar - b }; },
  caploss: x => { const d = Math.min(x.loss, x.mfs ? 1500 : 3000); return { ded: d, carry: x.loss - d }; },
  kiddie: x => { const std = Math.min(16100, Math.max(1350, x.earned + 450)), ti = Math.max(0, x.earned + x.unearned - std); return { std, ti, nui: Math.min(ti, Math.max(0, x.unearned - 2700)) }; },
  prepaid: x => { const months = Math.min(x.months, 12 - x.start + 1); return { y1: months * x.fee, y2: (x.months - months) * x.fee }; },
  scholarship: x => ({ taxable: Math.max(0, x.award - x.tuition - x.fees - x.books) + x.ta }),
  cod: x => {
    let f = x.forgiven; const o = { nol: x.nol, cap: x.cap, basis: x.basis };
    (x.elect ? ["basis", "nol", "cap"] : ["nol", "cap", "basis"]).forEach(k => { const c = Math.min(o[k], f); o[k] -= c; f -= c; });
    return o;
  },
  grouplife: x => {
    const t = [[24, 0.60], [29, 0.72], [34, 0.96], [39, 1.08], [44, 1.20], [49, 1.80], [54, 2.76], [59, 5.16], [64, 7.92], [69, 15.24], [999, 24.72]];
    const rate = t.find(([hi]) => x.age <= hi)[1];
    return { inc: R2((x.cov - 50000) / 1000 * rate) };
  },
  discount: x => ({ tax: R2(x.price * Math.max(0, x.disc - (x.goods ? x.gp : 20)) / 100) }),
  stditem: x => { const base = { single: 16100, mfj: 32200 }[x.status], per = { single: 2050, mfj: 1650 }[x.status], std = base + per * x.extras; return { std, take: Math.max(std, x.item) }; },
  medical: x => { const q = x.doctor + x.rx + x.dental + x.premiums; return { qual: q, ded: Math.max(0, q - x.reimb - Math.round(x.agi * 0.075)) }; },
  salt: x => { const total = Math.max(x.inc, x.sales) + x.re + x.pp; let cap = 40400; if (x.magi > 505000) cap -= 0.3 * (x.magi - 505000); cap = Math.max(10000, cap); return { total, cap: R2(cap), ded: R2(Math.min(total, cap)) }; },
  charity: x => { const d = Math.round(x.agi * 0.6) - Math.round(x.agi * 0.005); return { ded: d, carry: x.gift - d }; },
  casualty: x => { const l = Math.max(0, Math.min(x.before - x.after, x.basis) - x.ins - 100); return { loss: l, ded: Math.max(0, l - Math.round(x.agi * 0.1)) }; },
  invint: x => { const lim = x.nii + (x.elect ? x.qd : 0), d = Math.min(x.ii, lim); return { ded: d, carry: x.ii - d }; },
  distrib: x => { const div = Math.min(x.dist, x.ep), back = Math.min(x.dist - div, x.basis); return { div, basis: x.basis - back, gain: x.dist - div - back }; },
  wash: x => { const loss = x.n * (x.basisPS - x.sell), def = R2(loss * x.mm / x.n); return { deferred: def, allowed: R2(loss - def), basis: R2(x.mm * x.buy + def) }; },
  related: x => { const dis = x.basis - x.price, g = x.later - x.price; return { disallowed: dis, buyer: g < 0 ? g : Math.max(0, g - dis) }; },
  home: x => { const real = x.price - x.costs - x.basis, lim = (x.joint ? 500000 : 250000) * (x.partial ? x.months / 24 : 1), ex = Math.min(real, Math.round(lim)); return { realized: real, excl: ex, rec: real - ex }; }
};

// ---------- 1. drills ----------
const SEEDS = 2500;
for (const d of A.drills) {
  if (!indep[d.id]) { fail("no independent check for drill", d.id); continue; }
  for (let s = 1; s <= SEEDS; s++) {
    const inst = A.makeDrill(d, s * 7919);
    const want = indep[d.id](inst.inputs);
    for (const f of inst.fields) {
      const got = inst.answers[f.k];
      if (typeof got !== "number" || !isFinite(got)) { fail(d.id, s, f.k, "not a number"); continue; }
      if (Math.abs(got - want[f.k]) > 0.011) fail(d.id, "seed", s, f.k, "site", got, "check", want[f.k]);
    }
    const text = JSON.stringify([inst.prompt, inst.steps, inst.fields]);
    if (/NaN|undefined|Infinity|[–—]/.test(text)) fail(d.id, s, "bad text", text.slice(0, 120));
    if (A.checkDrill(inst, Object.fromEntries(inst.fields.map(f => [f.k, String(inst.answers[f.k])]))) && inst.fields.some(f => !A.checkDrill(inst, Object.fromEntries(inst.fields.map(g => [g.k, String(inst.answers[g.k])])))[f.k])) fail(d.id, s, "true answers not accepted");
  }
}
// line 16 class example from the guide
const ex = A.line16(2026, "single", 50500, 3000);
if (Math.abs(ex.total - 5609.5) > 0.001) fail("class line 16 example", ex.total);

// ---------- 2. Form 1040 ----------
const F = A.form1040;
const demo = F.solve({ status: "mfj", wages: 32000, interest: 3200, muni: 0, ordDiv: 0, qualDiv: 0, profit: 147345, qbi: 27387, medical: 0, stateTax: 0, propTax: 0, mortgage: 0, gifts: 0, withheld: 9600, estimates: 33000 }, {});
const expect = { l9: 182545, l10: 10410, l11: 172135, l12e: 31500, l15: 113248, l23: 20819, l33: 42600 };
for (const k in expect) if (demo[k].v !== expect[k]) fail("demo return", k, demo[k].v, "expected", expect[k]);
if (Math.abs(demo.l16.v - 14743) > 1) fail("demo line 16", demo.l16.v);
for (let s = 1; s <= 1500; s++) {
  const x = F.scenario(s * 104729);
  const L = F.solve(x, {});
  const typed = {}; for (const k in L) typed[k] = String(L[k].v);
  const g = F.grade(x, typed);
  if (g.right !== g.total) fail("1040 scenario", s, "true answers graded", g.right, "of", g.total);
  if (L.l15.v - x.qualDiv >= A.tableLimit(2025, x.status)) fail("1040 scenario beyond the guide's table", s);
  const t = taxBySlices(2025, x.status, L.l15.v - x.qualDiv), at0 = Math.max(0, Math.min(x.qualDiv, CEIL0[2025][x.status] - (L.l15.v - x.qualDiv)));
  if (Math.abs(L.l16.v - R2(t + (x.qualDiv - at0) * 0.15)) > 0.02) fail("1040 line 16 independent", s);
  if (JSON.stringify(F.facts(x)).match(/NaN|undefined|[–—]/)) fail("1040 facts text", s);
}

// ---------- 3. content ----------
const ids = new Set();
for (const c of A.chapters) {
  if (c.cards.length < 15 || c.mc.length < 10) fail("thin chapter", c.ch);
  for (const x of [...c.cards, ...c.mc]) { if (ids.has(x.id)) fail("duplicate id", x.id); ids.add(x.id); }
  for (const k of c.cards) if (!k.front || !k.back) fail("empty card", k.id);
  for (const q of c.mc) {
    if (!Array.isArray(q.opts) || q.opts.length !== 4 || new Set(q.opts).size !== 4) fail("options", q.id);
    if (!q.q || !q.why) fail("missing text", q.id);
    if (q.opts.some(o => /all of the above|none of the above/i.test(o))) fail("unshuffleable option", q.id);
  }
}
const all = files.map(f => fs.readFileSync(f, "utf8")).join("\n") + fs.readFileSync("index.html", "utf8") + fs.readFileSync("js/app.js", "utf8") + fs.readFileSync("css/styles.css", "utf8");
if (/[–—]/.test(all)) fail("an em or en dash is in the site text");

console.log(`${A.chapters.length} chapters, ${A.allCards().length} cards, ${A.allMC().length} questions, ${A.drills.length} drills x ${SEEDS} seeds, 1,500 returns.`);
console.log(fails ? `${fails} problem(s).` : "All checks passed.");
process.exit(fails ? 1 : 0);
