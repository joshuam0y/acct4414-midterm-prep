# ACCT 4414 Midterm Prep

A study site for the ACCT 4414 midterm (Oct 30, 2026): chapters 1 to 9, 12 and 15, plus the 2025 Form 1040 problem.

- **Flashcards** with spaced repetition, by chapter, plus exam-flagged and trap decks.
- **Multiple choice** with shuffled options and an explanation of the trap after every answer. Missed questions come back under "My mistakes".
- **Calculation drills** that make new numbers every time, with a worked solution: line 16 with qualified dividends, SE tax, the three tax rates, gains and basis, kiddie tax, wash and related-party sales, the home sale exclusion, and the itemized deduction limits.
- **Form 1040 trainer**: a 2025 return with Schedules 1, 2 and A, checked line by line. A line also counts as right when it follows correctly from your own earlier lines.
- **Mock midterm**: timed, with multiple choice, three problems and a forms problem.
- **Progress** by chapter and a printable **one-page sheet** of the rules worth handwriting.

Progress is saved in the browser only; nothing is sent anywhere.

The content follows the course study guide and lecture slides. Where they disagree, the slides and class win. It is a study aid, so check anything doubtful with the professor.

## Working on it

Plain HTML, CSS and JavaScript, no build step. Open `index.html` through any static server, for example `python3 -m http.server`.

Content lives in `data/chNN.js` (one file per chapter; in each question the first option is the correct one, and the site shuffles them). Drills are in `js/drills.js`, the 1040 trainer in `js/form1040.js`, rate tables in `js/tables.js`.

Before publishing a change, run `node verify.js`. It recomputes every drill answer with separate code, checks that the 1040 trainer reproduces the class demo return, and checks the content files.
