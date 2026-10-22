ACCT.addChapter({
  ch: 3,
  title: "Tax authority, courts, practice and ethics",
  cards: [
    { id: "3c01", front: "Primary vs secondary authority", back: "Primary authority comes from Congress, the Treasury and IRS, and the courts, and only it can be cited as support. Secondary authority is commentary and is never cited as support.", star: false },
    { id: "3c02", front: "Examples of secondary authority", back: "Commercial tax services, textbooks, journal articles, IRS publications and form instructions. Use them to find primary authority.", star: false, trap: true },
    { id: "3c03", front: "U.S. Constitution as tax authority", back: "The only source that outranks the Internal Revenue Code. The 16th Amendment (ratified 1913) gives Congress the power to tax income.", star: false },
    { id: "3c04", front: "Code vs tax treaty in conflict", back: "They carry equal weight; the one later in time wins.", star: false },
    { id: "3c05", front: "Committee reports", back: "Reports of the House Ways and Means, Senate Finance and Joint Conference committees. Useful to show what Congress intended.", star: false },
    { id: "3c06", front: "Final, temporary and proposed regulations", back: "Final and temporary regulations have the force of law; temporary ones expire after 3 years and carry a T in the citation. Proposed regulations do not have the force of law and cannot be relied on.", star: false, trap: true },
    { id: "3c07", front: "Regulation types by weight", back: "Legislative outrank interpretive, which outrank procedural.", star: false },
    { id: "3c08", front: "Revenue ruling vs revenue procedure", back: "A revenue ruling is the IRS answer for a specific fact pattern (the why). A revenue procedure explains how to comply (the how).", star: false },
    { id: "3c09", front: "Private letter ruling", back: "Issued at a taxpayer's request on a proposed transaction and binding only for that taxpayer. Costs roughly $28,000 to $30,000.", star: false },
    { id: "3c10", front: "Lower-weight IRS guidance", back: "Technical advice memoranda, general counsel memoranda and notices carry less weight than regulations and rulings.", star: false },
    { id: "3c11", front: "Federal tax law hierarchy", back: "The Code outranks even a Supreme Court opinion if the law is constitutional. Court decisions usually outweigh regulations and revenue rulings.", star: false },
    { id: "3c12", front: "Weighing a court decision", back: "Consider the level of court, the taxpayer's circuit, whether the IRS acquiesced, the date, and whether later decisions agreed.", star: false },
    { id: "3c13", front: "Reading tax citations", back: "Regulation prefix: 1 income tax, 20 estate, 25 gift, 301 procedure. PLR 200948009 = year 2009, week 48, ruling 9.", star: false },
    { id: "3c14", front: "Courts of original jurisdiction and their appeals", back: "Tax Court and District Court appeal to the Court of Appeals for the taxpayer's own circuit. The Court of Federal Claims appeals to the Federal Circuit.", star: false },
    { id: "3c15", front: "Golsen rule", back: "The Tax Court follows the precedent of the Court of Appeals circuit the case would be appealed to, which is set by the taxpayer's residence.", star: true },
    { id: "3c16", front: "Golsen rule when the taxpayer's circuit has not ruled", back: "Weigh the Tax Court decisions. To rely on a favorable case from another circuit, distinguish your facts from any unfavorable case and show the favorable one is closer.", star: true },
    { id: "3c17", front: "Acquiescence vs nonacquiescence", back: "After losing a case, the IRS announces whether it will follow the decision for similar facts (acquiescence) or not (nonacquiescence).", star: false },
    { id: "3c18", front: "Tax Court vs District Court", back: "Tax Court: expert tax judges, no prepayment, no jury; pick it when the law is on your side. District Court: pay first and sue for a refund, jury available; pick it when the facts are sympathetic.", star: false },
    { id: "3c19", front: "90-day letter", back: "The statutory notice of deficiency. The taxpayer has 90 days to petition the Tax Court, a strict deadline, or else pays and sues for a refund. A deposit with the IRS stops interest while litigating.", star: false },
    { id: "3c20", front: "Burden of proof", back: "The IRS is presumed correct and the taxpayer must prove otherwise, except in fraud cases, where the IRS carries the burden.", star: false },
    { id: "3c21", front: "Seven research steps", back: "Identify facts; state the problem; locate authority; evaluate relevance and weight; identify alternatives; identify the most appropriate solution (the client decides); communicate results.", star: false },
    { id: "3c22", front: "On all fours", back: "An authority whose facts match the client's facts, making it highly relevant.", star: false },
    { id: "3c23", front: "Statute of limitations on assessment", back: "Normally 3 years from the later of the due date or the filing date. 6 years if omitted gross income exceeds 25% of gross income reported. No limit for fraud or no return. There is no 7-year rule.", star: false, trap: true },
    { id: "3c24", front: "Refund claim deadline", back: "The later of 3 years from filing or 2 years from paying the tax.", star: false },
    { id: "3c25", front: "Reasonable cause", back: "Can excuse a penalty, but never the tax or the interest.", star: false },
    { id: "3c26", front: "Who can represent a client before the IRS", back: "Only CPAs, attorneys and enrolled agents, using a Form 2848 power of attorney. A paid preparer without one of these credentials cannot represent a client at an audit.", star: false },
    { id: "3c27", front: "Finding an error on a client's past return", back: "Tell the client promptly, in writing, with the consequences. Never tell the IRS without the client's consent, and do not just fix or file it yourself.", star: false, trap: true },
    { id: "3c28", front: "Contingent fees and other practice rules", back: "No contingent fees on original returns (exceptions include IRS exams). Return client records when asked. No false advertising, no endorsing or negotiating a client's refund check, no practicing law.", star: false },
    { id: "3c29", front: "Types of audits", back: "Correspondence (by mail), office (at an IRS office) and field (at the taxpayer's business). Returns are selected by document matching and DIF scores.", star: false },
    { id: "3c30", front: "Audit and appeals path", back: "Revenue agent's report (Form 4549), then a 30-day letter (appeal inside the IRS; Form 870-AD settles), then the 90-day letter. Spouses on a joint return are jointly and severally liable.", star: false }
  ],
  mc: [
    {
      id: "3q01",
      q: "Which of the following is NOT primary tax authority?",
      opts: ["Instructions to an IRS form", "A tax treaty", "A revenue procedure", "A final Treasury regulation"],
      why: "Form instructions, like IRS publications, are secondary authority and cannot be cited as support. Treaties, revenue procedures and final regulations are all primary.",
      star: false,
      trap: true
    },
    {
      id: "3q02",
      q: "Researching a deduction, you find only a proposed regulation that supports your client. Can you rely on it?",
      opts: ["No, proposed regulations do not have the force of law", "Yes, all regulations have the force of law", "Yes, but only for 3 years", "Only if the client requests a private letter ruling first"],
      why: "Proposed regulations show how the IRS is thinking but are not law. The 3-year limit belongs to temporary regulations, which do have the force of law until they expire.",
      star: false,
      trap: true
    },
    {
      id: "3q03",
      q: "A Code section and a later tax treaty conflict. Which controls?",
      opts: ["The treaty, because it is later in time", "The Code, because it always outranks treaties", "The treaty, because treaties outrank the Code", "Whichever favors the taxpayer"],
      why: "The Code and treaties have equal weight, so the later-enacted one wins. Neither automatically outranks the other.",
      star: false
    },
    {
      id: "3q04",
      q: "Another company received a private letter ruling on facts almost identical to your client's. How does the ruling apply to your client?",
      opts: ["It is binding only on the taxpayer who requested it", "It binds the IRS for all taxpayers with similar facts", "It has the same weight as a revenue ruling", "It has the force of law like a final regulation"],
      why: "A PLR binds the IRS only for the taxpayer who asked for it. A revenue ruling, by contrast, is the IRS position for everyone with that fact pattern.",
      star: false
    },
    {
      id: "3q05",
      q: "Under the Golsen rule, what precedent does the Tax Court follow?",
      opts: ["The Court of Appeals for the circuit where the taxpayer resides", "Only its own prior decisions", "The circuit that ruled most recently", "The Court of Appeals for the Federal Circuit"],
      why: "The Tax Court follows the circuit its decision would be appealed to, and that circuit is set by the taxpayer's residence. The Federal Circuit hears appeals only from the Court of Federal Claims.",
      star: true
    },
    {
      id: "3q06",
      q: "Julia lives in Circuit A, whose Court of Appeals has ruled for taxpayers on her issue. Circuit B has ruled for the IRS on the same issue. Julia petitions the Tax Court. What will the Tax Court do?",
      opts: ["Follow Circuit A's ruling", "Follow Circuit B's ruling because the IRS won there", "Ignore both rulings and decide on its own view", "Send the case to the Supreme Court to resolve the split"],
      why: "Under the Golsen rule the Tax Court follows the circuit the case would be appealed to, which is Julia's home circuit. The Tax Court does not send cases to the Supreme Court.",
      star: true
    },
    {
      id: "3q07",
      q: "Your client's Court of Appeals has not ruled on an issue. The Tax Court ruled for a taxpayer in another circuit and against a taxpayer in your client's circuit. What must you do to rely on the favorable case?",
      opts: ["Distinguish your client's facts from the unfavorable case and show they match the favorable case more closely", "Nothing; any favorable Tax Court decision can be relied on", "Cite the favorable case as binding precedent in every circuit", "Request acquiescence from the IRS before filing"],
      why: "With no ruling from the client's circuit, the Tax Court decisions must be weighed, and the case from the client's own circuit cuts against you. You have to show why its facts do not fit your client.",
      star: true
    },
    {
      id: "3q08",
      q: "Which court's decisions are appealed to the Court of Appeals for the Federal Circuit?",
      opts: ["The Court of Federal Claims", "The Tax Court", "U.S. District Courts", "The Tax Court's Small Cases Division"],
      why: "Only the Court of Federal Claims appeals to the Federal Circuit. The Tax Court and District Courts appeal to the taxpayer's regional circuit.",
      star: false
    },
    {
      id: "3q09",
      q: "Ben's case has sympathetic facts and he wants a jury. Which court should he choose?",
      opts: ["A U.S. District Court, after paying the tax and suing for a refund", "The Tax Court, without paying first", "The Court of Federal Claims, without paying first", "The Tax Court, after paying the tax"],
      why: "Only District Court offers a jury, and it requires paying the deficiency first. The Tax Court needs no prepayment but has no jury, so it suits cases where the law is on your side.",
      star: false
    },
    {
      id: "3q10",
      q: "Olivia's 2026 return was due April 15, 2027. She filed it early on February 20, 2027, with no fraud and no large omission. When does the normal assessment period end?",
      opts: ["April 15, 2030", "February 20, 2030", "April 15, 2033", "April 15, 2034"],
      why: "The 3 years run from the later of the due date or the filing date, so an early return starts on April 15, 2027 and ends April 15, 2030. April 15, 2034 reflects the nonexistent 7-year rule.",
      star: false,
      trap: true
    },
    {
      id: "3q11",
      q: "Sam filed his 2026 return late, on August 10, 2027, without fraud. When does the normal assessment period end?",
      opts: ["August 10, 2030", "April 15, 2030", "August 10, 2033", "It never ends because the return was late"],
      why: "The later of the due date (April 15, 2027) or the filing date (August 10, 2027) starts the clock, so 3 years later is August 10, 2030. The unlimited period applies only to fraud or no return at all.",
      star: false
    },
    {
      id: "3q12",
      q: "Rachel reported gross income of 200,000 but omitted another 60,000. There was no fraud. How long does the IRS have to assess?",
      opts: ["6 years", "3 years", "No time limit", "7 years"],
      why: "25% of 200,000 is 50,000, and the 60,000 omission exceeds it, so the period stretches to 6 years. An unlimited period needs fraud or no return.",
      star: false
    },
    {
      id: "3q13",
      q: "Aaron reported gross income of 200,000 but omitted 45,000. There was no fraud. How long does the IRS have to assess?",
      opts: ["3 years", "6 years", "No time limit", "7 years"],
      why: "45,000 is 22.5% of 200,000, which does not exceed the 25% threshold of 50,000, so the normal 3 years applies. Jumping to 6 years for any sizable omission is the trap.",
      star: false,
      trap: true
    },
    {
      id: "3q14",
      q: "Maria filed her 2026 return on time on April 15, 2027. After an audit she paid additional tax on June 1, 2029. What is the last day to claim a refund of that payment?",
      opts: ["June 1, 2031", "April 15, 2030", "June 1, 2032", "April 15, 2033"],
      why: "The refund deadline is the later of 3 years from filing (April 15, 2030) or 2 years from payment (June 1, 2031). April 15, 2030 is the earlier date, not the later.",
      star: false
    },
    {
      id: "3q15",
      q: "In a civil tax case, who carries the burden of proof?",
      opts: ["The taxpayer, except in fraud cases, where the IRS does", "The IRS in every case", "The taxpayer in every case, including fraud", "Whichever party filed the petition"],
      why: "The IRS is presumed correct, so the taxpayer must prove otherwise. Fraud is the exception: the IRS must prove it.",
      star: false
    },
    {
      id: "3q16",
      q: "A tax practitioner may do each of the following EXCEPT:",
      opts: ["Endorse a client's IRS refund check", "Publish an accurate schedule of fees", "Rely in good faith on information the client provides", "Keep a copy of client records after returning the originals"],
      why: "Endorsing or negotiating a client's refund check is prohibited. Accurate fee advertising, good-faith reliance (while still asking about red flags) and keeping copies are all allowed.",
      star: false
    },
    {
      id: "3q17",
      q: "While preparing this year's return, a CPA finds an error on the client's return from two years ago. What should the CPA do?",
      opts: ["Tell the client promptly in writing, with the consequences", "Report the error to the IRS right away", "File an amended return for the client without asking", "Ignore it because the year is past"],
      why: "The CPA must inform the client and explain the consequences, but cannot tell the IRS without the client's consent. Contacting the IRS directly is the tempting wrong answer.",
      star: false,
      trap: true
    },
    {
      id: "3q18",
      q: "Which of the following could NOT represent a client at an IRS audit?",
      opts: ["An accounting student who prepares returns for pay but holds no credential", "A CPA with a Form 2848 power of attorney", "An attorney with a Form 2848 power of attorney", "An enrolled agent with a Form 2848 power of attorney"],
      why: "Representation is limited to CPAs, attorneys and enrolled agents. Being paid to prepare returns does not give the right to represent.",
      star: false
    },
    {
      id: "3q19",
      q: "When may a practitioner charge a contingent fee?",
      opts: ["When representing a client in an IRS examination", "When preparing an original return", "Whenever the client agrees in writing", "Never, under any circumstances"],
      why: "Contingent fees are barred on original returns, but exceptions such as IRS exams allow them. Client consent does not override the rule.",
      star: false
    },
    {
      id: "3q20",
      q: "A taxpayer receives a 30-day letter and does not respond. What happens next?",
      opts: ["The IRS issues a 90-day letter, the statutory notice of deficiency", "The case is closed in the taxpayer's favor", "The IRS signs Form 870-AD on the taxpayer's behalf", "The case goes directly to the Court of Appeals"],
      why: "Silence after the 30-day letter leads to the 90-day letter, which starts the strict window to petition the Tax Court. Form 870-AD is a settlement the taxpayer signs after an appeals conference.",
      star: false
    }
  ]
});
