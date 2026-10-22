/* The site: home, flashcards, multiple choice, drills, the 1040 trainer, a timed mock midterm, progress and a fact sheet. */
(function () {
  const A = window.ACCT;
  const S = A.state;
  const EXAM = new Date(2026, 9, 30, 9, 0, 0); // Oct 30, 2026
  const DAY = 86400000;
  const BOX_DAYS = [0, 1, 2, 4, 7];

  // ---------- tiny DOM helper ----------
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      const v = attrs[k];
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") el.className = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else if (k === "html") el.innerHTML = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat()) if (kid !== null && kid !== undefined && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    return el;
  }
  const $main = () => document.getElementById("main");
  const mount = (...nodes) => { const m = $main(); m.replaceChildren(...nodes); window.scrollTo(0, 0); };
  let keyHandler = null;
  document.addEventListener("keydown", e => { if (keyHandler && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) keyHandler(e); });

  // in-page confirmation (no browser dialogs)
  function confirmBox(text, yesLabel, onYes) {
    const back = h("div", { class: "modal-back" });
    const close = () => back.remove();
    back.append(h("div", { class: "modal", role: "dialog", "aria-modal": "true" },
      h("p", null, text),
      h("div", { class: "row end" },
        h("button", { class: "btn ghost", onclick: close }, "Cancel"),
        h("button", { class: "btn primary", onclick: () => { close(); onYes(); } }, yesLabel))));
    document.body.append(back);
  }

  // ---------- chapter picker shared by several pages ----------
  function chapterChips(settingKey, onChange) {
    const st = S().settings;
    const all = A.chapters.map(c => c.ch);
    if (!Array.isArray(st[settingKey])) st[settingKey] = all.slice();
    const sel = new Set(st[settingKey]);
    const wrap = h("div", { class: "chips" });
    const draw = () => {
      wrap.replaceChildren(
        h("button", { class: "chip" + (sel.size === all.length ? " on" : ""), "aria-pressed": sel.size === all.length, onclick: () => { if (sel.size === all.length) sel.clear(); else all.forEach(c => sel.add(c)); commit(); } }, "All"),
        ...A.chapters.map(c => h("button", {
          class: "chip" + (sel.has(c.ch) ? " on" : ""), "aria-pressed": sel.has(c.ch), title: A.chapterName(c.ch),
          onclick: () => { sel.has(c.ch) ? sel.delete(c.ch) : sel.add(c.ch); commit(); }
        }, A.shortName(c.ch))));
    };
    const commit = () => { st[settingKey] = [...sel]; A.save(); draw(); onChange && onChange(); };
    draw();
    return { el: wrap, selected: () => new Set(st[settingKey]) };
  }

  // ---------- progress maths ----------
  const cardRec = id => S().cards[id] || { box: 0, due: 0, seen: 0 };
  const mcRec = id => S().mc[id] || { seen: 0, right: 0, wrong: 0, lastWrong: false };
  function chapterStats(ch) {
    const c = A.chapters.find(x => x.ch === ch);
    const cards = c.cards.length, mastered = c.cards.filter(k => cardRec(k.id).box >= 3).length;
    let seen = 0, right = 0, tried = 0;
    c.mc.forEach(q => { const r = mcRec(q.id); if (r.seen) { tried++; seen += r.seen; right += r.right; } });
    const dr = A.drills.filter(d => d.ch === ch).map(d => S().drills[d.id] || { tries: 0, right: 0 });
    const dTries = dr.reduce((s, x) => s + x.tries, 0), dRight = dr.reduce((s, x) => s + x.right, 0);
    const mcAcc = seen ? right / seen : null;
    const mastery = (cards ? mastered / cards : 0) * 0.4 + (mcAcc === null ? 0 : mcAcc * (tried / Math.max(1, c.mc.length))) * 0.6;
    return { cards, mastered, mcTried: tried, mcTotal: c.mc.length, mcAcc, dTries, dRight, mastery };
  }
  const dueCards = chs => A.allCards().filter(k => chs.has(k.ch) && cardRec(k.id).due <= Date.now());

  // ---------- header ----------
  const ROUTES = [["home", "Home"], ["cards", "Flashcards"], ["quiz", "Quiz"], ["drills", "Drills"], ["form", "Form 1040"], ["mock", "Mock exam"], ["progress", "Progress"], ["sheet", "Sheet"]];
  function nav(active) {
    const n = document.getElementById("nav");
    n.replaceChildren(...ROUTES.map(([k, label]) => h("a", { href: `#/${k}`, class: k === active ? "on" : null, "aria-current": k === active ? "page" : null }, label)));
  }
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    S().settings.theme = t; A.save();
    document.getElementById("theme").textContent = t === "dark" ? "Light" : "Dark";
  }

  // ================= HOME =================
  function home() {
    const days = Math.ceil((EXAM - Date.now()) / DAY);
    const all = new Set(A.chapters.map(c => c.ch));
    const due = dueCards(all).length;
    const stats = A.chapters.map(c => ({ ch: c.ch, ...chapterStats(c.ch) }));
    const weakest = stats.slice().sort((a, b) => a.mastery - b.mastery)[0];
    const totalCards = A.allCards().length, totalMC = A.allMC().length;
    const tile = (route, title, text) => h("a", { class: "tile", href: `#/${route}` }, h("strong", null, title), h("span", null, text));
    mount(
      h("section", { class: "hero" },
        h("p", { class: "eyebrow" }, "ACCT 4414 · Midterm, Friday Oct 30"),
        h("h1", null, days > 0 ? `${days} day${days === 1 ? "" : "s"} to the midterm` : (days === 0 ? "Midterm today. You've got this." : "Midterm done")),
        h("p", { class: "muted" }, `Chapters 1 to 9, 12 and 15, plus the guaranteed 2025 Form 1040 problem. ${totalCards} flashcards, ${totalMC} multiple-choice questions, ${A.drills.length} calculation drills with unlimited numbers.`)),
      h("section", { class: "panel" },
        h("h2", null, "Today's plan"),
        h("ol", { class: "plan" },
          h("li", null, due ? `Review ${Math.min(due, 40)} flashcards that are due (${due} waiting). ` : "No flashcards due. Learn some new ones. ", h("a", { href: "#/cards" }, "Flashcards")),
          h("li", null, "Take a smart quiz: 20 questions aimed at your weak spots and past mistakes. ", h("a", { href: "#/quiz?smart=1" }, "Smart quiz")),
          h("li", null, `Weakest area right now: ${A.chapterName(weakest.ch)}. Drill it. `, h("a", { href: `#/quiz?ch=${weakest.ch}` }, "Quiz this chapter")),
          h("li", null, "Do one full Form 1040 problem every day until the exam; it is guaranteed to be on it. ", h("a", { href: "#/form" }, "Form 1040")),
          h("li", null, days <= 4 ? "Take a timed mock exam today. " : "Take a mock exam this weekend. ", h("a", { href: "#/mock" }, "Mock exam")))),
      h("section", { class: "tiles" },
        tile("cards", "Flashcards", "Spaced repetition by chapter. Space to flip, 1 to 3 to rate."),
        tile("quiz", "Multiple choice", "Exam-style questions with the trap explained after each answer."),
        tile("drills", "Calculation drills", "New numbers every time, with the worked solution."),
        tile("form", "Form 1040 trainer", "2025 return with Schedules 1, 2 and A, checked line by line."),
        tile("mock", "Mock midterm", "Timed: multiple choice, problems and a forms problem."),
        tile("sheet", "One-page sheet", "The rules worth writing on your handwritten sheet.")),
      h("p", { class: "muted small" }, "★ marks topics flagged in class as on the exam. Progress is saved in this browser only."));
  }

  // ================= FLASHCARDS =================
  function cards(params) {
    const deckKind = params.get("deck") || "all";
    let picker;
    const body = h("div");
    const start = () => {
      const chs = picker.selected();
      let pool = A.allCards().filter(k => chs.has(k.ch));
      if (deckKind === "star") pool = pool.filter(k => k.star);
      if (deckKind === "trap") pool = pool.filter(k => k.trap);
      const now = Date.now();
      const due = pool.filter(k => cardRec(k.id).seen && cardRec(k.id).due <= now).sort((a, b) => cardRec(a.id).due - cardRec(b.id).due);
      const fresh = A.rng(A.newSeed()).shuffle(pool.filter(k => !cardRec(k.id).seen));
      let queue = [...due, ...fresh].slice(0, 40);
      if (!queue.length) queue = A.rng(A.newSeed()).shuffle(pool).slice(0, 20); // nothing due: free review
      session(queue, pool.length);
    };
    function session(queue, poolSize) {
      let i = 0, flipped = false, done = 0;
      const total = queue.length;
      const draw = () => {
        if (i >= queue.length) {
          keyHandler = null;
          body.replaceChildren(h("div", { class: "panel center" }, h("h2", null, "Session done"), h("p", null, `${done} card reviews.`), h("button", { class: "btn primary", onclick: start }, "Another round")));
          return;
        }
        const k = queue[i], rec = cardRec(k.id);
        const card = h("button", { class: "flashcard" + (flipped ? " flipped" : ""), onclick: () => { flipped = !flipped; draw(); }, "aria-label": "Flip card" },
          h("span", { class: "card-meta" }, `${A.shortName(k.ch)}${k.star ? " ★" : ""}${k.trap ? " · trap" : ""}`),
          h("span", { class: "card-face" }, flipped ? k.back : k.front),
          h("span", { class: "card-hint" }, flipped ? "How well did you know it?" : "Tap or press space to flip"));
        const rate = g => {
          const r = cardRec(k.id);
          r.seen = (r.seen || 0) + 1;
          if (g === 1) { r.box = 0; r.due = Date.now(); queue.splice(Math.min(queue.length, i + 4), 0, k); }
          else { r.box = Math.min(4, (r.box || 0) + (g === 3 ? 2 : 1)); r.due = Date.now() + BOX_DAYS[r.box] * DAY; }
          S().cards[k.id] = r; A.save(); done++; i++; flipped = false; draw();
        };
        body.replaceChildren(
          h("div", { class: "row between small muted" }, h("span", null, `Card ${Math.min(i + 1, total)} of ${queue.length}`), h("span", null, `Box ${rec.box || 0} of 4`)),
          card,
          flipped ? h("div", { class: "row center gap" },
            h("button", { class: "btn bad", onclick: () => rate(1) }, "1 Again"),
            h("button", { class: "btn", onclick: () => rate(2) }, "2 Good"),
            h("button", { class: "btn good", onclick: () => rate(3) }, "3 Easy")) : h("div", { class: "row center" }, h("button", { class: "btn primary", onclick: () => { flipped = true; draw(); } }, "Show answer")));
        keyHandler = e => {
          if (e.key === " ") { e.preventDefault(); flipped = !flipped; draw(); }
          else if (flipped && ["1", "2", "3"].includes(e.key)) rate(Number(e.key));
        };
      };
      draw();
    }
    picker = chapterChips("cardCh", start);
    const deckBtn = (k, label) => h("a", { class: "chip" + (deckKind === k ? " on" : ""), href: `#/cards?deck=${k}` }, label);
    mount(h("h1", null, "Flashcards"),
      h("p", { class: "muted" }, "Due cards come back first; a card you know moves to a later box and returns after 1, 2, 4 or 7 days. \"Again\" brings it back in a few cards."),
      h("div", { class: "chips" }, deckBtn("all", "Every card"), deckBtn("star", "★ Exam-flagged"), deckBtn("trap", "Traps")),
      picker.el, body);
    start();
  }

  // ================= QUIZ =================
  function pickQuestions(pool, n, seed) {
    const r = A.rng(seed);
    return r.shuffle(pool).sort((a, b) => mcRec(a.id).seen - mcRec(b.id).seen).slice(0, n);
  }
  // Smart quiz: weight every question by how weak its chapter is, past misses, exam flags and
  // whether it has been seen, then draw without replacement, at most 4 per chapter.
  function smartPick(n) {
    const r = A.rng(A.newSeed());
    const chAcc = {};
    A.chapters.forEach(c => { const s = chapterStats(c.ch); chAcc[c.ch] = s.mcAcc === null ? 0.35 : s.mcAcc; });
    let pool = A.allMC().map(q => {
      const rec = mcRec(q.id);
      const w = 1 + (1 - chAcc[q.ch]) * 3 + (rec.lastWrong ? 3 : 0) + (q.star ? 1.5 : 0) + (rec.seen ? 0 : 1) - Math.min(rec.right, 3) * 0.4;
      return { q, w: Math.max(0.15, w) };
    });
    const out = [], perCh = {};
    while (out.length < n && pool.length) {
      const total = pool.reduce((s, x) => s + x.w, 0);
      let t = r.next() * total, i = 0;
      while (i < pool.length - 1 && (t -= pool[i].w) > 0) i++;
      const pick = pool.splice(i, 1)[0].q;
      if ((perCh[pick.ch] || 0) >= 4 && pool.some(x => (perCh[x.q.ch] || 0) < 4)) continue;
      perCh[pick.ch] = (perCh[pick.ch] || 0) + 1;
      out.push(pick);
    }
    return out;
  }
  function quiz(params) {
    if (params.get("smart")) return runQuiz(smartPick(20));
    const only = params.get("ch");
    if (only !== null) { S().settings.quizCh = [Number(only)]; A.save(); }
    const st = S().settings;
    st.quizMode = st.quizMode || "fresh"; st.quizN = st.quizN || 15;
    const picker = chapterChips("quizCh");
    const modes = [["fresh", "Least seen first"], ["star", "★ Exam-flagged"], ["miss", "My mistakes"], ["trap", "Traps"]];
    const modeRow = h("div", { class: "chips" });
    const nRow = h("div", { class: "chips" });
    const drawOpts = () => {
      modeRow.replaceChildren(...modes.map(([k, l]) => h("button", { class: "chip" + (st.quizMode === k ? " on" : ""), onclick: () => { st.quizMode = k; A.save(); drawOpts(); } }, l)));
      nRow.replaceChildren(...[10, 15, 25, 40].map(n => h("button", { class: "chip" + (st.quizN === n ? " on" : ""), onclick: () => { st.quizN = n; A.save(); drawOpts(); } }, `${n} questions`)));
    };
    drawOpts();
    const startBtn = h("button", { class: "btn primary big", onclick: () => {
      const chs = picker.selected();
      let pool = A.allMC().filter(q => chs.has(q.ch));
      if (st.quizMode === "star") pool = pool.filter(q => q.star);
      if (st.quizMode === "miss") pool = pool.filter(q => mcRec(q.id).lastWrong);
      if (st.quizMode === "trap") pool = pool.filter(q => q.trap);
      if (!pool.length) { startBtn.textContent = st.quizMode === "miss" ? "No mistakes saved yet. Pick another mode." : "No questions match. Pick more chapters."; return; }
      runQuiz(pickQuestions(pool, st.quizN, A.newSeed()));
    } }, "Start quiz");
    mount(h("h1", null, "Multiple choice"),
      h("p", { class: "muted" }, "Options are shuffled every time. After each answer you get the reasoning and the trap behind the tempting wrong choice."),
      h("div", { class: "panel smart" },
        h("div", null, h("strong", null, "Smart quiz"), h("p", { class: "muted small" }, "20 questions picked for you: mostly your weakest chapters, questions you missed, and exam-flagged topics, with every chapter still in the mix.")),
        h("button", { class: "btn primary big", onclick: () => runQuiz(smartPick(20)) }, "Start smart quiz")),
      h("h3", null, "Or build your own: chapters"), picker.el, h("h3", null, "Questions"), modeRow, nRow, h("div", { class: "row" }, startBtn));
  }
  function shuffledOptions(q, seed) {
    const order = A.rng(seed).shuffle([0, 1, 2, 3]);
    return { order, correct: order.indexOf(0) };
  }
  function runQuiz(qs) {
    let i = 0, score = 0;
    const log = [];
    const seed = A.newSeed();
    const draw = () => {
      if (i >= qs.length) return quizResults(qs, log, score);
      const q = qs[i], { order, correct } = shuffledOptions(q, seed + i);
      let answered = false;
      const fb = h("div");
      const opts = order.map((oi, pos) => h("button", { class: "option", "data-pos": pos, onclick: () => choose(pos) }, h("span", { class: "opt-key" }, "ABCD"[pos]), h("span", null, q.opts[oi])));
      const choose = pos => {
        if (answered) return;
        answered = true;
        const ok = pos === correct;
        const r = mcRec(q.id);
        r.seen++; ok ? r.right++ : r.wrong++; r.lastWrong = !ok;
        S().mc[q.id] = r; A.save();
        if (ok) score++;
        log.push({ q, ok, picked: order[pos] });
        opts.forEach((b, p) => { b.disabled = true; if (p === correct) b.classList.add("right"); else if (p === pos) b.classList.add("wrong"); });
        fb.replaceChildren(h("div", { class: "feedback " + (ok ? "ok" : "no") }, h("strong", null, ok ? "Correct. " : "Not quite. "), q.why),
          h("div", { class: "row end" }, h("button", { class: "btn primary", onclick: () => { i++; draw(); } }, i + 1 < qs.length ? "Next (Enter)" : "See results")));
      };
      mount(
        h("div", { class: "row between small muted" }, h("span", null, `Question ${i + 1} of ${qs.length} · ${A.chapterName(q.ch)}${q.star ? " · ★" : ""}`), h("span", null, `Score ${score}`)),
        h("div", { class: "panel" }, h("p", { class: "qtext" }, q.q), h("div", { class: "options" }, opts), fb));
      keyHandler = e => {
        const k = e.key.toLowerCase();
        if (!answered && ["1", "2", "3", "4", "a", "b", "c", "d"].includes(k)) choose("1234".includes(k) ? Number(k) - 1 : "abcd".indexOf(k));
        else if (answered && e.key === "Enter") { i++; draw(); }
      };
    };
    draw();
  }
  function quizResults(qs, log, score) {
    keyHandler = null;
    mount(h("h1", null, `${score} of ${qs.length} correct`),
      h("p", { class: "muted" }, "Missed questions are saved to \"My mistakes\" until you get them right."),
      h("div", { class: "row gap" }, h("a", { class: "btn primary", href: "#/quiz" }, "New quiz"), h("button", { class: "btn", onclick: () => runQuiz(log.filter(x => !x.ok).map(x => x.q)) , disabled: log.every(x => x.ok) }, "Retry the misses")),
      h("div", { class: "review" }, log.map(x => h("details", { class: "panel " + (x.ok ? "ok-edge" : "no-edge") },
        h("summary", null, `${x.ok ? "✓" : "✗"} ${x.q.q}`),
        h("p", null, h("strong", null, "Answer: "), x.q.opts[0]),
        x.ok ? null : h("p", null, h("strong", null, "You chose: "), x.q.opts[x.picked]),
        h("p", { class: "muted" }, x.q.why)))));
  }

  // ================= DRILLS =================
  function drillCard(inst, onDone) {
    const inputs = {};
    const out = h("div");
    const marks = {};
    const form = h("form", { class: "fields", onsubmit: e => { e.preventDefault(); check(); } },
      inst.fields.map(f => {
        const inp = h("input", { inputmode: "decimal", autocomplete: "off", id: `f-${f.k}`, "aria-label": f.label });
        inputs[f.k] = inp;
        marks[f.k] = h("span", { class: "mark" });
        return h("label", { class: "field" }, h("span", null, f.label), h("span", { class: "inrow" }, inp, marks[f.k]));
      }),
      h("div", { class: "row gap" }, h("button", { class: "btn primary", type: "submit" }, "Check"), h("button", { class: "btn", type: "button", onclick: () => reveal() }, "Show solution")));
    let checked = false;
    const check = () => {
      const typed = {};
      for (const k in inputs) typed[k] = inputs[k].value;
      const res = A.checkDrill(inst, typed);
      let allOk = true;
      for (const f of inst.fields) { marks[f.k].textContent = res[f.k] ? "✓" : "✗"; marks[f.k].className = "mark " + (res[f.k] ? "ok" : "no"); if (!res[f.k]) allOk = false; }
      if (!checked) { checked = true; onDone && onDone(allOk, res); }
      if (allOk) reveal(true);
    };
    const reveal = ok => {
      out.replaceChildren(h("div", { class: "solution" },
        h("h3", null, ok ? "All correct. Worked solution:" : "Worked solution"),
        h("ol", null, inst.steps.map(s => h("li", null, s))),
        h("p", { class: "answers" }, inst.fields.map(f => h("span", null, `${f.label}: `, h("strong", null, A.money(inst.answers[f.k], f.dec === 2 ? 2 : undefined)))))));
    };
    return h("div", { class: "panel" }, inst.prompt.map(p => h("p", { class: "qtext" }, p)), form, out);
  }
  function drills(params) {
    const id = params.get("d");
    const list = h("div", { class: "drill-list" });
    const groups = {};
    A.drills.forEach(d => { (groups[d.ch] = groups[d.ch] || []).push(d); });
    Object.keys(groups).map(Number).sort((a, b) => a - b).forEach(ch => {
      list.append(h("div", { class: "drill-group" }, h("h3", null, A.chapterName(ch)),
        groups[ch].map(d => {
          const r = S().drills[d.id];
          return h("a", { class: "drill-link" + (d.id === id ? " on" : ""), href: `#/drills?d=${d.id}` }, d.title, d.star ? " ★" : "", r ? h("span", { class: "muted small" }, ` ${r.right}/${r.tries}`) : null);
        })));
    });
    const pickWeak = () => {
      const scored = A.drills.map(d => { const r = S().drills[d.id] || { tries: 0, right: 0 }; return { d, s: r.tries ? r.right / r.tries + r.tries * 0.02 : -1 + Math.random() * 0.1 }; });
      scored.sort((a, b) => a.s - b.s);
      location.hash = `#/drills?d=${scored[0].d.id}`;
    };
    if (!id) {
      mount(h("h1", null, "Calculation drills"),
        h("p", { class: "muted" }, "Every drill makes new numbers. Type your answers (commas and $ are fine), check, then read the worked solution. ★ = exam-flagged."),
        h("div", { class: "row" }, h("button", { class: "btn primary", onclick: pickWeak }, "Give me my weakest drill")), list);
      return;
    }
    const d = A.drillById(id);
    const inst = A.makeDrill(d, A.newSeed());
    const rec = (ok) => { const r = S().drills[d.id] || { tries: 0, right: 0 }; r.tries++; if (ok) r.right++; S().drills[d.id] = r; A.save(); };
    mount(h("div", { class: "row between" }, h("a", { href: "#/drills" }, "All drills"), h("span", { class: "muted small" }, A.chapterName(d.ch))),
      h("h1", null, d.title, d.star ? " ★" : ""),
      drillCard(inst, ok => rec(ok)),
      h("div", { class: "row gap" }, h("button", { class: "btn primary", onclick: () => drills(params) }, "New numbers"), h("button", { class: "btn", onclick: pickWeak }, "Weakest drill")));
  }

  // ================= FORM 1040 =================
  function formView(x, opts) {
    const F = A.form1040;
    const inputs = {}, marks = {}, sols = {};
    const sections = F.SECTIONS.map(s => h("fieldset", { class: "form-sec" }, h("legend", null, s.title),
      s.lines.map(([k, label]) => {
        inputs[k] = h("input", { inputmode: "decimal", autocomplete: "off", "aria-label": label });
        if (opts.saved && opts.saved[k] !== undefined) inputs[k].value = opts.saved[k];
        if (opts.onInput) inputs[k].addEventListener("input", () => opts.onInput(k, inputs[k].value));
        marks[k] = h("span", { class: "mark" });
        sols[k] = h("span", { class: "sol muted small" });
        return h("label", { class: "form-line" + (k === "l16" ? " key" : "") }, h("span", { class: "fl-label" }, label), h("span", { class: "inrow" }, inputs[k], marks[k]), sols[k]);
      })));
    const typedNow = () => { const t = {}; for (const k in inputs) t[k] = inputs[k].value; return t; };
    const showGrade = (withSolution) => {
      const g = F.grade(x, typedNow());
      for (const k in g.res) {
        const st = g.res[k];
        marks[k].textContent = st === "right" ? "✓" : st === "follow" ? "✓*" : st === "wrong" ? "✗" : "";
        marks[k].className = "mark " + (st === "wrong" ? "no" : st === "blank" ? "" : "ok");
        marks[k].title = st === "follow" ? "Correct given your earlier lines" : "";
        sols[k].textContent = withSolution ? `Answer: ${A.money(g.L[k].v)}` : "";
      }
      return g;
    };
    return { sections, showGrade, typedNow };
  }
  function form1040() {
    const F = A.form1040;
    const x = F.scenario(A.newSeed());
    const v = formView(x, {});
    const result = h("div");
    mount(h("h1", null, "Form 1040 trainer ★"),
      h("p", { class: "muted" }, "The forms problem is guaranteed: a 2025 return with Schedules 1, 2, 3 and A. Carry every schedule total to the 1040, and always show the line 16 computation. ✓* means the line is right given your own earlier lines."),
      h("div", { class: "panel facts" }, h("h2", null, "The facts"), h("ul", null, F.facts(x).map(f => h("li", null, f)))),
      h("div", { class: "form-grid" }, v.sections),
      h("div", { class: "row gap sticky-actions" },
        h("button", { class: "btn primary", onclick: () => { const g = v.showGrade(false); S().form.tries++; if (g.right === g.total) S().form.perfect++; A.save(); result.replaceChildren(h("p", { class: "feedback " + (g.right === g.total ? "ok" : "no") }, `${g.right} of ${g.total} lines correct.`)); } }, "Check my return"),
        h("button", { class: "btn", onclick: () => v.showGrade(true) }, "Show answers"),
        h("button", { class: "btn", onclick: form1040 }, "New return")),
      result);
  }

  // ================= MOCK EXAM =================
  function mockSetup() {
    const live = S().mockLive;
    const st = S().settings;
    st.mockMC = st.mockMC || 30; st.mockMin = st.mockMin || 90;
    const opt = (key, vals, label) => h("div", null, h("h3", null, label), h("div", { class: "chips" }, vals.map(v => h("button", { class: "chip" + (st[key] === v ? " on" : ""), onclick: () => { st[key] = v; A.save(); mockSetup(); } }, `${v}`))));
    mount(h("h1", null, "Mock midterm"),
      h("p", { class: "muted" }, "Closed book, like the real one: multiple choice across every chapter, three calculation problems, and one Form 1040 problem. The timer keeps running if you leave the page; your answers are saved."),
      live ? h("div", { class: "panel" }, h("p", null, "You have a mock exam in progress."), h("div", { class: "row gap" }, h("button", { class: "btn primary", onclick: () => runMock() }, "Resume"), h("button", { class: "btn", onclick: () => confirmBox("Throw away the mock exam in progress?", "Discard", () => { delete S().mockLive; A.save(); mockSetup(); }) }, "Discard"))) : null,
      opt("mockMC", [20, 30, 40], "Multiple-choice questions"),
      opt("mockMin", [60, 90, 120], "Minutes"),
      h("div", { class: "row" }, h("button", { class: "btn primary big", disabled: !!live, onclick: newMock }, "Start the mock exam")),
      S().mocks.length ? h("div", { class: "panel" }, h("h2", null, "Past mocks"), h("ul", null, S().mocks.slice(-8).reverse().map(mk => h("li", null, `${new Date(mk.date).toLocaleDateString()}: ${mk.pct}% (${A.round(mk.score, 1)} of ${mk.max} points)`)))) : null);
  }
  function newMock() {
    const st = S().settings, seed = A.newSeed(), r = A.rng(seed);
    // spread multiple choice across chapters, favoring flagged items a little
    const byCh = A.chapters.map(c => r.shuffle(c.mc).sort((a, b) => (b.star ? 1 : 0) - (a.star ? 1 : 0)));
    const mc = [];
    for (let round = 0; mc.length < st.mockMC && round < 50; round++) for (const list of r.shuffle(byCh)) if (list[round] && mc.length < st.mockMC) mc.push(list[round].id);
    const drillIds = [];
    const prefer = r.shuffle(A.drills.filter(d => d.star)).slice(0, 1).concat(r.shuffle(A.drills.filter(d => !d.star)));
    for (const d of prefer) if (drillIds.length < 3 && !drillIds.includes(d.id) && !drillIds.some(id => A.drillById(id).ch === d.ch)) drillIds.push(d.id);
    S().mockLive = { seed, start: Date.now(), minutes: st.mockMin, mc: mc.map(id => ({ id, pick: null })), drills: drillIds.map((id, i) => ({ id, seed: seed + 100 + i, typed: {} })), formSeed: seed + 999, formTyped: {}, tab: "mc" };
    A.save();
    runMock();
  }
  let mockTimer = null;
  function runMock() {
    const mk = S().mockLive;
    if (!mk) return mockSetup();
    clearInterval(mockTimer);
    const timer = h("span", { class: "timer" });
    const endAt = mk.start + mk.minutes * 60000;
    const tick = () => {
      const left = endAt - Date.now();
      if (left <= 0) { clearInterval(mockTimer); finishMock(); return; }
      const mm = Math.floor(left / 60000), ss = Math.floor((left % 60000) / 1000);
      timer.textContent = `${mm}:${String(ss).padStart(2, "0")} left`;
      timer.classList.toggle("late", left < 10 * 60000);
    };
    tick(); mockTimer = setInterval(tick, 1000);
    const tabs = [["mc", `Multiple choice (${mk.mc.length})`], ["prob", "Problems (3)"], ["form", "Form 1040"]];
    const body = h("div");
    const tabBar = h("div", { class: "chips" });
    const drawTabs = () => tabBar.replaceChildren(...tabs.map(([k, l]) => h("button", { class: "chip" + (mk.tab === k ? " on" : ""), onclick: () => { mk.tab = k; A.save(); drawTabs(); drawBody(); } }, l)));
    const drawBody = () => {
      if (mk.tab === "mc") {
        body.replaceChildren(...mk.mc.map((item, i) => {
          const q = A.allMC().find(z => z.id === item.id);
          if (!q) return null;
          const { order } = shuffledOptions(q, mk.seed + i);
          return h("div", { class: "panel" }, h("p", { class: "qtext" }, `${i + 1}. ${q.q}`),
            h("div", { class: "options" }, order.map((oi, pos) => h("button", { class: "option" + (item.pick === oi ? " picked" : ""), onclick: () => { item.pick = oi; A.save(); drawBody(); } }, h("span", { class: "opt-key" }, "ABCD"[pos]), h("span", null, q.opts[oi])))));
        }));
      } else if (mk.tab === "prob") {
        body.replaceChildren(...mk.drills.map((p, i) => {
          const inst = A.makeDrill(A.drillById(p.id), p.seed);
          return h("div", { class: "panel" }, h("h3", null, `Problem ${i + 1}: ${inst.drill.title}`), inst.prompt.map(t => h("p", { class: "qtext" }, t)),
            h("div", { class: "fields" }, inst.fields.map(f => {
              const inp = h("input", { inputmode: "decimal", autocomplete: "off", value: p.typed[f.k] || "", "aria-label": f.label });
              inp.addEventListener("input", () => { p.typed[f.k] = inp.value; A.save(); });
              return h("label", { class: "field" }, h("span", null, f.label), inp);
            })));
        }));
      } else {
        const x = A.form1040.scenario(mk.formSeed);
        const v = formView(x, { saved: mk.formTyped, onInput: (k, val) => { mk.formTyped[k] = val; A.save(); } });
        body.replaceChildren(h("div", { class: "panel facts" }, h("h2", null, "The facts"), h("ul", null, A.form1040.facts(x).map(f => h("li", null, f)))), h("div", { class: "form-grid" }, v.sections));
      }
    };
    drawTabs(); drawBody();
    mount(h("div", { class: "row between sticky-top" }, h("strong", null, "Mock midterm"), timer, h("button", { class: "btn primary", onclick: () => confirmBox("Submit the mock exam now? You can't change answers after this.", "Submit", () => { clearInterval(mockTimer); finishMock(); }) }, "Submit")), tabBar, body);
  }
  function finishMock() {
    const mk = S().mockLive;
    if (!mk) return;
    keyHandler = null;
    const byCh = {};
    let score = 0, max = 0;
    const mcRows = mk.mc.map(item => {
      const q = A.allMC().find(z => z.id === item.id);
      const ok = item.pick === 0;
      const r = mcRec(q.id); r.seen++; ok ? r.right++ : r.wrong++; r.lastWrong = !ok; S().mc[q.id] = r;
      (byCh[q.ch] = byCh[q.ch] || { right: 0, n: 0 }).n++; if (ok) { byCh[q.ch].right++; score++; }
      max++;
      return { q, ok, pick: item.pick };
    });
    const probRows = mk.drills.map(p => {
      const inst = A.makeDrill(A.drillById(p.id), p.seed), res = A.checkDrill(inst, p.typed);
      const frac = inst.fields.filter(f => res[f.k]).length / inst.fields.length;
      score += frac * 4; max += 4;
      return { inst, frac };
    });
    const x = A.form1040.scenario(mk.formSeed), g = A.form1040.grade(x, mk.formTyped);
    score += g.right / g.total * 12; max += 12;
    const pctv = Math.round(score / max * 100);
    S().mocks.push({ date: Date.now(), score, max, pct: pctv });
    delete S().mockLive; A.save();
    mount(h("h1", null, `Mock result: ${pctv}%`),
      h("p", { class: "muted" }, `${A.round(score, 1)} of ${max} points. Multiple choice 1 point each, each problem 4, the 1040 problem 12.`),
      h("div", { class: "panel" }, h("h2", null, "By chapter (multiple choice)"),
        h("table", { class: "tbl" }, h("tbody", null, Object.keys(byCh).map(Number).sort((a, b) => a - b).map(ch => h("tr", null, h("td", null, A.chapterName(ch)), h("td", null, `${byCh[ch].right} / ${byCh[ch].n}`)))))),
      h("div", { class: "panel" }, h("h2", null, "Problems"), probRows.map(p => h("details", null, h("summary", null, `${p.inst.drill.title}: ${Math.round(p.frac * 100)}%`), h("ol", null, p.inst.steps.map(s => h("li", null, s)))))),
      h("div", { class: "panel" }, h("h2", null, `Form 1040: ${g.right} of ${g.total} lines`), h("p", { class: "muted" }, "Practice more returns in the Form 1040 trainer.")),
      h("div", { class: "review" }, mcRows.map(rw => h("details", { class: "panel " + (rw.ok ? "ok-edge" : "no-edge") }, h("summary", null, `${rw.ok ? "✓" : "✗"} ${rw.q.q}`), h("p", null, h("strong", null, "Answer: "), rw.q.opts[0]), rw.ok || rw.pick === null ? null : h("p", null, h("strong", null, "You chose: "), rw.q.opts[rw.pick]), h("p", { class: "muted" }, rw.q.why)))),
      h("div", { class: "row" }, h("a", { class: "btn primary", href: "#/mock" }, "Back to mock exams")));
  }

  // ================= PROGRESS =================
  function progress() {
    const rows = A.chapters.map(c => ({ c, s: chapterStats(c.ch) }));
    const bar = v => h("span", { class: "bar" }, h("span", { style: `width:${Math.round(v * 100)}%` }));
    mount(h("h1", null, "Progress"),
      h("div", { class: "panel" }, h("table", { class: "tbl" },
        h("thead", null, h("tr", null, h("th", null, "Chapter"), h("th", null, "Mastery"), h("th", null, "Cards known"), h("th", null, "Quiz"), h("th", null, "Drills"))),
        h("tbody", null, rows.map(({ c, s }) => h("tr", null,
          h("td", null, h("a", { href: `#/quiz?ch=${c.ch}` }, A.chapterName(c.ch))),
          h("td", null, bar(s.mastery)),
          h("td", null, `${s.mastered} / ${s.cards}`),
          h("td", null, s.mcAcc === null ? "not started" : `${Math.round(s.mcAcc * 100)}% (${s.mcTried} of ${s.mcTotal} seen)`),
          h("td", null, s.dTries ? `${s.dRight} / ${s.dTries}` : "none")))))),
      h("div", { class: "panel" }, h("p", null, `Form 1040 returns checked: ${S().form.tries} (${S().form.perfect} perfect). Mock exams taken: ${S().mocks.length}.`)),
      h("button", { class: "btn bad", onclick: () => confirmBox("Erase all progress in this browser? This can't be undone.", "Erase", () => { A.resetProgress(); progress(); }) }, "Reset progress"));
  }

  // ================= SHEET =================
  function sheet() {
    const items = window.ACCT_SHEET || [];
    mount(h("div", { class: "row between no-print" }, h("h1", null, "One-page sheet"), h("button", { class: "btn primary", onclick: () => window.print() }, "Print")),
      h("p", { class: "muted no-print" }, "You get one side of one 8.5x11 sheet in your own handwriting. The rate tables are handed out, so skip them. These are the rules and numbers most worth copying."),
      h("div", { class: "sheet" }, items.map(sec => h("div", { class: "sheet-sec" }, h("h3", null, sec.h), h("ul", null, sec.items.map(t => h("li", null, t)))))));
  }

  // ---------- router ----------
  function route() {
    keyHandler = null;
    clearInterval(mockTimer);
    const raw = location.hash.replace(/^#\/?/, "");
    const [path, qs] = raw.split("?");
    const params = new URLSearchParams(qs || "");
    const page = path || "home";
    nav(page);
    ({ home, cards, quiz, drills, form: form1040, mock: () => (S().mockLive ? runMock() : mockSetup()), progress, sheet }[page] || home)(params);
  }
  window.addEventListener("hashchange", route);
  document.addEventListener("DOMContentLoaded", () => {
    const t = S().settings.theme || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(t);
    document.getElementById("theme").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
    route();
  });
})();
