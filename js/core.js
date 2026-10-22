/* Shared helpers: the chapter registry, saved progress, number formatting and a seeded random generator. */
(function (root) {
  const ACCT = root.ACCT || (root.ACCT = {});

  // ---------- chapters (data/chNN.js files call ACCT.addChapter) ----------
  ACCT.chapters = [];
  ACCT.addChapter = function (c) {
    c.cards = c.cards || [];
    c.mc = c.mc || [];
    c.cards.forEach(x => { x.ch = c.ch; });
    c.mc.forEach(x => { x.ch = c.ch; });
    ACCT.chapters.push(c);
    ACCT.chapters.sort((a, b) => a.ch - b.ch);
  };
  ACCT.chapterName = ch => {
    const c = ACCT.chapters.find(x => x.ch === ch);
    if (ch === 0) return "Tax formula and the 1040";
    return c ? `Ch ${ch}: ${c.title}` : `Ch ${ch}`;
  };
  ACCT.shortName = ch => (ch === 0 ? "1040" : `Ch ${ch}`);
  ACCT.allCards = () => ACCT.chapters.flatMap(c => c.cards);
  ACCT.allMC = () => ACCT.chapters.flatMap(c => c.mc);

  // ---------- numbers ----------
  ACCT.round = (x, d = 0) => {
    const f = Math.pow(10, d);
    return Math.round((x + Number.EPSILON) * f) / f;
  };
  ACCT.money = (x, d) => {
    const dec = d === undefined ? (Math.abs(x - Math.round(x)) > 0.004 ? 2 : 0) : d;
    return (x < 0 ? "-" : "") + Math.abs(x).toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  };
  ACCT.pct = (x, d = 2) => `${ACCT.round(x * 100, d)}%`;
  // read what a student typed: "12,400", "$12400.50", "-300", "24%", "(300)"
  ACCT.parseNum = s => {
    if (s === null || s === undefined) return NaN;
    let t = String(s).trim();
    if (!t) return NaN;
    let neg = false;
    if (/^\(.*\)$/.test(t)) { neg = true; t = t.slice(1, -1); }
    t = t.replace(/[$,\s%]/g, "");
    if (t.startsWith("-")) { neg = !neg; t = t.slice(1); }
    if (!/^\d*\.?\d+$/.test(t)) return NaN;
    const v = parseFloat(t);
    return neg ? -v : v;
  };

  // ---------- random ----------
  // mulberry32: small seeded generator, so a drill can be regenerated from its seed
  ACCT.rng = function (seed) {
    let a = seed >>> 0;
    const next = () => {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const r = {
      next,
      int: (lo, hi) => lo + Math.floor(next() * (hi - lo + 1)),
      // a whole number in [lo, hi] that is a multiple of step
      step: (lo, hi, step) => step * (Math.ceil(lo / step) + Math.floor(next() * (Math.floor(hi / step) - Math.ceil(lo / step) + 1))),
      pick: arr => arr[Math.floor(next() * arr.length)],
      chance: p => next() < p,
      shuffle: arr => {
        const a2 = arr.slice();
        for (let i = a2.length - 1; i > 0; i--) { const j = Math.floor(next() * (i + 1)); [a2[i], a2[j]] = [a2[j], a2[i]]; }
        return a2;
      }
    };
    return r;
  };
  ACCT.newSeed = () => Math.floor(Math.random() * 2147483647);
  ACCT.names = ["Avery", "Jordan", "Priya", "Mateo", "Leila", "Owen", "Sofia", "Malik", "Hana", "Diego", "Nora", "Theo", "Imani", "Rafael", "Grace", "Kenji", "Amara", "Luca", "Zoe", "Samir", "Elena", "Marcus", "Yara", "Felix"];

  // ---------- saved progress (this browser only) ----------
  const KEY = "acct4414-prep-v1";
  const blank = () => ({ cards: {}, mc: {}, drills: {}, form: { tries: 0, perfect: 0 }, mocks: [], settings: {} });
  let state = blank();
  try {
    const raw = root.localStorage && root.localStorage.getItem(KEY);
    if (raw) state = Object.assign(blank(), JSON.parse(raw));
  } catch (e) { /* private mode or blocked storage: progress just isn't kept */ }
  ACCT.state = () => state;
  ACCT.save = () => {
    try { root.localStorage && root.localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  };
  ACCT.resetProgress = () => { const s = state.settings; state = blank(); state.settings = s; ACCT.save(); };
})(typeof window !== "undefined" ? window : globalThis);
