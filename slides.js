/* Consulting-style slide mock-ups, drawn as SVG (1280×720) so they scale cleanly.
   All figures and names are illustrative; no client material is reproduced. */
(function () {
  const W = 1280, H = 720, L = 56, R = 1224;
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const wrap = (s, n) => {
    const out = []; let line = "";
    String(s).split(" ").forEach((w) => {
      if ((line + " " + w).trim().length > n) { if (line) out.push(line); line = w; } else line = (line + " " + w).trim();
    });
    if (line) out.push(line);
    return out;
  };
  const t = (x, y, s, cls, a = "") => `<text x="${x}" y="${y}" class="${cls}" ${a}>${esc(s)}</text>`;
  const tw = (x, y, s, n, lh, cls, a = "") =>
    `<text x="${x}" y="${y}" class="${cls}" ${a}>` + wrap(s, n).map((ln, i) => `<tspan x="${x}" dy="${i ? lh : 0}">${esc(ln)}</tspan>`).join("") + `</text>`;
  const r = (x, y, w, h, cls, a = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}" ${a}/>`;
  const ln = (x1, y1, x2, y2, cls, a = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}" ${a}/>`;
  const c = (x, y, rr, cls, a = "") => `<circle cx="${x}" cy="${y}" r="${rr}" class="${cls}" ${a}/>`;
  const arrow = (x1, y, x2) => ln(x1, y, x2 - 8, y, "sv-line") + `<polygon points="${x2},${y} ${x2 - 10},${y - 6} ${x2 - 10},${y + 6}" class="sv-ink"/>`;

  function frame(o) {
    const lines = wrap(o.title, 64);
    const title = lines.map((s, i) => t(L, 106 + i * 40, s, "sv-title sv-ink")).join("");
    const ruleY = 106 + (lines.length - 1) * 40 + 24;
    return `<svg viewBox="0 0 ${W} ${H}" class="slide-svg" role="img" aria-label="${esc(o.title)}" xmlns="http://www.w3.org/2000/svg">
      ${r(0, 0, W, H, "sv-bg")}
      ${r(L, 40, 26, 4, "sv-acc")}
      ${t(L + 38, 47, o.trk, "sv-trk sv-mute")}
      ${t(R, 47, "ILLUSTRATIVE", "sv-trk sv-mute", 'text-anchor="end"')}
      ${title}
      ${ln(L, ruleY, R, ruleY, "sv-rule")}
      ${o.body}
      ${ln(L, 668, R, 668, "sv-rule")}
      ${t(L, 695, o.src || "Source: illustrative mock-up recreated for portfolio use. Names and figures are anonymized and do not reflect client data.", "sv-foot sv-mute")}
      ${t(R, 695, o.page, "sv-foot sv-mute", 'text-anchor="end"')}
    </svg>`;
  }
  const panel = (x, y, w, h) => r(x, y, w, h, "sv-soft", 'rx="6"');
  const bullets = (x, y, items, n, lh = 22, gap = 18) => {
    let out = "", yy = y;
    items.forEach((s) => {
      out += c(x + 4, yy - 5, 3.5, "sv-acc") + tw(x + 18, yy, s, n, lh, "sv-b sv-ink");
      yy += wrap(s, n).length * lh + gap;
    });
    return out;
  };

  /* ---------------- The Dedham Group ---------------- */
  function dedhamTracker() {
    const states = ["CA", "NY", "TX", "FL", "IL", "PA", "OH", "GA", "NC", "MI", "NJ", "MA", "WA"];
    const cols = ["Medicaid policy", "Commercial PA", "Site of care", "Reimbursement", "Legislation"];
    const m = [[2,1,2,1,1],[2,2,1,2,0],[0,1,1,0,1],[0,0,1,1,0],[2,1,2,1,2],[1,1,0,1,1],[1,0,1,0,1],[0,1,0,1,2],[1,2,1,1,0],[2,1,1,2,1],[2,2,2,1,1],[2,2,1,2,0],[1,1,2,1,2]];
    const nb = m.filter((row) => row.filter((v) => v === 0).length >= 2).length;
    const np = m.filter((row) => row[4] === 0).length;
    const cls = ["sv-bad", "sv-warn", "sv-good"], word = ["Barrier", "Neutral", "Favorable"];
    let b = "";
    cols.forEach((h, j) => { b += t(126 + j * 140 + 70, 228, h, "sv-s sv-mute", 'text-anchor="middle"'); });
    states.forEach((s, i) => {
      const y = 244 + i * 31;
      const risky = m[i].filter((v) => v === 0).length >= 2;
      b += t(L + 4, y + 18, s, "sv-s " + (risky ? "sv-acc" : "sv-ink"), 'font-weight="600"');
      m[i].forEach((v, j) => {
        const x = 126 + j * 140;
        b += r(x + 4, y + 2, 132, 25, cls[v], 'rx="3" opacity=".9"');
        b += t(x + 70, y + 19, j === 4 && v === 0 ? "Pending" : word[v], "sv-xs sv-white", 'text-anchor="middle"');
      });
    });
    b += panel(870, 200, 354, 450);
    b += t(894, 236, "What it tells us", "sv-h sv-ink");
    b += bullets(894, 274, [
      `${nb} of 13 states show two or more access barriers; prioritize field and HUB support there.`,
      `Pending legislation in ${np} states could shift coverage within the next 12 months.`,
      `Refreshed every engagement as payer and policy changes land (10+ per engagement).`,
    ], 36);
    [["sv-good", "Favorable"], ["sv-warn", "Neutral"], ["sv-bad", "Barrier / pending"]].forEach(([k, l], i) => {
      b += r(894, 572 + i * 24, 16, 14, k, 'rx="2"') + t(918, 584 + i * 24, l, "sv-s sv-ink");
    });
    return { cap: "State-level access tracker", svg: frame({ trk: "MARKET ACCESS · POLICY TRACKER", title: `Coverage readiness varies sharply by state; ${nb} of 13 states carry most of the launch risk`, body: b, page: "1" }) };
  }

  function dedhamSegments() {
    const x0 = 120, x1 = 760, y0 = 212, y1 = 610;
    const X = (v) => x0 + (v / 10) * (x1 - x0), Y = (v) => y1 - (v / 10) * (y1 - y0);
    const pts = [
      ["Academic treatment centers", 7.4, 8.6, 24, "l"], ["Commercial payers", 5.8, 7.6, 22, "l"],
      ["Medicaid / state programs", 8.4, 6.2, 18, "l"], ["Community oncology", 6.2, 4.2, 18, "r"],
      ["HUB / patient services", 7.0, 2.4, 16, "r"], ["Specialty distributors", 2.4, 7.0, 16, "r"],
      ["Referring physicians", 2.2, 3.0, 14, "r"],
    ];
    let b = r(x0, y0, x1 - x0, y1 - y0, "sv-soft", 'opacity=".55"');
    b += ln(X(5), y0, X(5), y1, "sv-rule", 'stroke-dasharray="5 5"') + ln(x0, Y(5), x1, Y(5), "sv-rule", 'stroke-dasharray="5 5"');
    b += ln(x0, y1, x1, y1, "sv-line") + ln(x0, y0, x0, y1, "sv-line");
    b += t(x0 + 12, y0 + 22, "MAINTAIN", "sv-trk sv-mute") + t(x1 - 12, y0 + 22, "ENGAGE FIRST", "sv-trk sv-acc", 'text-anchor="end"');
    b += t(x0 + 12, y1 - 12, "MONITOR", "sv-trk sv-mute") + t(x1 - 12, y1 - 12, "SUPPORT", "sv-trk sv-mute", 'text-anchor="end"');
    b += t((x0 + x1) / 2, 646, "Severity of adoption barrier →", "sv-s sv-mute", 'text-anchor="middle"');
    b += t(84, (y0 + y1) / 2, "Influence on adoption →", "sv-s sv-mute", `text-anchor="middle" transform="rotate(-90 84 ${(y0 + y1) / 2})"`);
    pts.forEach(([n, x, y, rr, side]) => {
      const px = X(x), py = Y(y), hot = x > 5 && y > 5;
      b += c(px, py, rr, hot ? "sv-acc" : "sv-clay", 'opacity=".92"');
      b += t(side === "l" ? px - rr - 8 : px + rr + 8, py + 5, n, "sv-s sv-ink", side === "l" ? 'text-anchor="end"' : "");
    });
    const iv = [["Providers", 42], ["Payers", 24], ["Distributors", 18], ["HUBs", 16]];
    const tot = iv.reduce((a, d) => a + d[1], 0);
    b += panel(820, 200, 404, 450) + t(844, 236, "Interview base", "sv-h sv-ink");
    iv.forEach(([n, v], i) => {
      const y = 272 + i * 58;
      b += t(844, y, n, "sv-s sv-ink") + r(844, y + 10, (v / 42) * 260, 18, i === 0 ? "sv-acc" : "sv-clay", 'rx="2"') + t(844 + (v / 42) * 260 + 10, y + 25, v, "sv-s sv-ink");
    });
    b += t(844, 560, `${tot}+`, "sv-num sv-ink") + tw(844, 590, "interviews across 7 therapies and one digital platform", 40, 20, "sv-s sv-mute");
    return { cap: "Stakeholder segmentation", svg: frame({ trk: "COMMERCIAL STRATEGY · PRIMARY RESEARCH", title: "Treatment centers and payers hold the most influence and the steepest barriers, so launch plans engage them first", body: b, page: "2" }) };
  }

  function dedhamLLM() {
    const steps = ["Research", "Synthesis", "Drafting", "Review"], fills = ["sv-ink", "sv-clay", "sv-sand", "sv-acc"];
    const before = [10, 8, 8, 6], after = [3, 3.5, 3, 6.5];
    const sb = before.reduce((a, b) => a + b), sa = after.reduce((a, b) => a + b);
    const k = 520 / sb, x0 = 236;
    let b = "";
    [["Before", before, 262], ["With LLM", after, 378]].forEach(([lab, arr, y]) => {
      b += t(L, y + 34, lab, "sv-h sv-ink");
      let x = x0;
      arr.forEach((h, i) => {
        const w = h * k;
        b += r(x, y, w - 2, 56, fills[i], i === 2 ? 'style="fill:#cdbfb1"' : "");
        b += t(x + w / 2, y + 34, h + "h", "sv-s " + (i === 2 ? "sv-ink" : "sv-white"), 'text-anchor="middle"');
        x += w;
      });
      b += t(x + 12, y + 34, `${arr.reduce((a, b) => a + b)} h`, "sv-h sv-ink");
    });
    steps.forEach((s, i) => { b += r(x0 + i * 130, 470, 14, 14, fills[i], i === 2 ? 'style="fill:#cdbfb1"' : "") + t(x0 + i * 130 + 22, 482, s, "sv-s sv-ink"); });
    b += t(x0, 568, `−${Math.round((1 - sa / sb) * 100)}%`, "sv-num sv-acc") + tw(x0 + 170, 548, "cycle time per deliverable across 7+ deliverables. Review time held steady by design: every AI draft gets an analyst check.", 52, 20, "sv-s sv-ink");
    b += t(L, 230, "Analyst hours per deliverable (indexed example)", "sv-s sv-mute");
    b += panel(860, 200, 364, 450) + t(884, 236, "Rollout approach", "sv-h sv-ink");
    [["Scope use cases", "Repeatable, high-volume tasks: literature scans, policy summaries, first drafts."],
     ["Build in review", "Analyst checkpoints before any AI output enters a deliverable."],
     ["Pilot and iterate", "Weekly feedback to refine prompts and templates."],
     ["Roll out to the team", "Scaled to all 10 analysts with shared guidelines."]].forEach(([h, d], i) => {
      const y = 282 + i * 92;
      b += c(898, y - 6, 14, "sv-ink") + t(898, y - 1, i + 1, "sv-s sv-white", 'text-anchor="middle"');
      b += t(924, y, h, "sv-b sv-ink", 'font-weight="600"') + tw(924, y + 22, d, 34, 19, "sv-s sv-mute");
    });
    return { cap: "Internal LLM rollout", svg: frame({ trk: "OPERATIONS · AI ENABLEMENT", title: "Rolling out an internal LLM with analyst review cut deliverable cycle time in half", body: b, page: "3" }) };
  }

  function dedhamRoadmap() {
    const x0 = 120, x1 = 760, y0 = 212, y1 = 610;
    const X = (v) => x0 + (v / 10) * (x1 - x0), Y = (v) => y1 - (v / 10) * (y1 - y0);
    const f = [
      ["Real-time order status", 2.6, 8.6, "m", -18], ["Chain-of-identity checks", 4.4, 9.2, "r", 5],
      ["Cold-chain shipment tracking", 7.4, 8.0, "m", 28], ["Apheresis slot scheduling", 6.2, 6.6, "r", 5],
      ["Document upload & e-sign", 2.0, 6.0, "r", 5], ["Reinfusion / reorder requests", 3.6, 4.0, "r", 5],
      ["Site analytics dashboard", 7.2, 3.0, "m", 28],
    ];
    let b = r(x0, y0, x1 - x0, y1 - y0, "sv-soft", 'opacity=".55"');
    b += ln(X(5), y0, X(5), y1, "sv-rule", 'stroke-dasharray="5 5"') + ln(x0, Y(5), x1, Y(5), "sv-rule", 'stroke-dasharray="5 5"');
    b += ln(x0, y1, x1, y1, "sv-line") + ln(x0, y0, x0, y1, "sv-line");
    b += t(x0 + 12, y0 + 22, "QUICK WINS", "sv-trk sv-acc") + t(x1 - 12, y0 + 22, "STRATEGIC BETS", "sv-trk sv-mute", 'text-anchor="end"');
    b += t(x0 + 12, y1 - 12, "FILL-INS", "sv-trk sv-mute") + t(x1 - 12, y1 - 12, "DEPRIORITIZE", "sv-trk sv-mute", 'text-anchor="end"');
    b += t((x0 + x1) / 2, 646, "Build effort →", "sv-s sv-mute", 'text-anchor="middle"');
    b += t(84, (y0 + y1) / 2, "Partner impact →", "sv-s sv-mute", `text-anchor="middle" transform="rotate(-90 84 ${(y0 + y1) / 2})"`);
    const groups = { Launch: [], Next: [], Later: [] };
    f.forEach(([n, x, y, side, dy]) => {
      const px = X(x), py = Y(y);
      const g = y > 5 ? (x < 5 ? "Launch" : "Next") : "Later";
      groups[g].push(n);
      b += c(px, py, 9, g === "Launch" ? "sv-acc" : g === "Next" ? "sv-ink" : "sv-clay");
      b += side === "m" ? t(px, py + dy, n, "sv-s sv-ink", 'text-anchor="middle"') : t(px + 16, py + dy, n, "sv-s sv-ink");
    });
    b += panel(820, 200, 404, 450);
    b += t(844, 282, "95%", "sv-num sv-ink") + tw(844, 312, "of partner health systems satisfied at launch", 40, 20, "sv-s sv-mute");
    let y = 376;
    Object.entries(groups).forEach(([g, items], gi) => {
      b += t(844, y, g.toUpperCase(), "sv-trk " + (gi === 0 ? "sv-acc" : "sv-mute"));
      y += 24;
      items.forEach((n) => { b += t(844, y, n, "sv-b sv-ink"); y += 23; });
      y += 14;
    });
    return { cap: "Ordering platform roadmap", svg: frame({ trk: "PRODUCT · CELL & GENE THERAPY ORDERING", title: "Platform roadmap: ship order status and identity checks first; cold-chain tracking is the strategic bet", body: b, page: "4" }) };
  }

  function dedhamBench() {
    const rows = [["Brand A", "CAR-T", 1,0,1,1,"Direct"], ["Brand B", "CAR-T", 1,0,1,1,"Direct"], ["Brand C", "Gene therapy", 1,1,1,1,"Direct"], ["Brand D", "Gene therapy", 1,0,1,0,"Limited"],
      ["Brand E", "Bispecific", 1,1,1,1,"Limited"], ["Brand F", "Oral oncolytic", 1,1,0,1,"Limited"], ["Brand G", "IV oncology", 1,1,0,0,"Open"], ["Brand H", "Oral oncolytic", 1,1,0,0,"Limited"]];
    const cols = ["Copay support", "Bridge / free drug", "Travel & lodging", "Nurse navigator", "Distribution"];
    const travel = rows.filter((d) => d[4]).length, cgt = rows.filter((d) => /CAR-T|Gene/.test(d[1]));
    const cgtTravel = cgt.filter((d) => d[4]).length;
    let b = t(L, 232, "Analog", "sv-s sv-mute");
    cols.forEach((h, j) => { b += t(300 + j * 124 + 62, 232, h, "sv-s sv-mute", 'text-anchor="middle"'); });
    b += ln(L, 244, 920, 244, "sv-rule");
    rows.forEach((d, i) => {
      const y = 280 + i * 46;
      if (i % 2 === 0) b += r(L, y - 26, 864, 46, "sv-soft", 'opacity=".6"');
      b += t(L + 8, y + 2, d[0], "sv-b sv-ink", 'font-weight="600"') + t(L + 92, y + 2, d[1], "sv-s sv-mute");
      for (let j = 0; j < 4; j++) {
        const x = 300 + j * 124 + 62;
        b += d[2 + j] ? c(x, y - 3, 8, j === 2 ? "sv-acc" : "sv-ink") : c(x, y - 3, 7.5, "", 'style="fill:none;stroke:var(--s-clay);stroke-width:1.5"');
      }
      b += t(300 + 4 * 124 + 62, y + 2, d[6], "sv-s sv-ink", 'text-anchor="middle"');
    });
    b += c(L + 8, 646, 6, "sv-ink") + t(L + 20, 651, "Offered", "sv-xs sv-mute") + c(L + 92, 646, 5.5, "", 'style="fill:none;stroke:var(--s-clay);stroke-width:1.5"') + t(L + 104, 651, "Not offered", "sv-xs sv-mute");
    b += panel(950, 200, 274, 450) + t(972, 236, "Implications", "sv-h sv-ink");
    b += bullets(972, 274, [
      `Travel and lodging is table stakes for one-time cell and gene therapies (${cgtTravel} of ${cgt.length}).`,
      "Bridge programs cluster in oncolytics and bispecifics.",
      "Recommend a HUB with travel support, a nurse navigator, and direct-ship distribution.",
    ], 26, 21, 16);
    return { cap: "Analog benchmarking", svg: frame({ trk: "COMPETITIVE INTELLIGENCE · ANALOGS", title: `${travel} of ${rows.length} high-cost analogs fund patient travel and lodging; all offer copay support`, body: b, page: "5" }) };
  }

  /* ---------------- EY ---------------- */
  function eyProcess() {
    const steps = [["Planning", "Understand the business, set materiality and scope."], ["Risk assessment", "Identify accounts and assertions most likely to be misstated."],
      ["Controls testing", "Walk through processes; test design and operating effectiveness."], ["Substantive testing", "Transaction tests, reconciliations, and variance analysis."],
      ["Reporting", "Workpapers, findings, and materiality assessments for review."]];
    const w = (R - L) / 5;
    let b = t(L + 2 * w + w, 214, "WHERE I SPENT MOST OF MY TIME", "sv-trk sv-acc", 'text-anchor="middle"');
    b += ln(L + 2 * w + 10, 222, L + 4 * w - 10, 222, "sv-accl");
    steps.forEach(([h, d], i) => {
      const x = L + i * w, y = 240, hh = 72, hot = i === 2 || i === 3;
      const pts = i === 0 ? `${x},${y} ${x + w - 22},${y} ${x + w},${y + hh / 2} ${x + w - 22},${y + hh} ${x},${y + hh}`
        : `${x},${y} ${x + w - 22},${y} ${x + w},${y + hh / 2} ${x + w - 22},${y + hh} ${x},${y + hh} ${x + 22},${y + hh / 2}`;
      b += `<polygon points="${pts}" class="${hot ? "sv-acc" : "sv-ink"}" />`;
      b += t(x + (i ? 34 : 18), y + 43, h, "sv-b sv-white", 'font-weight="600"');
      b += tw(x + 8, y + 112, d, 24, 21, "sv-s sv-ink");
    });
    [["3", "client audits supported"], ["GAAP", "and regulatory compliance tested"], ["Materiality", "drives sample sizes and follow-up"]].forEach(([n, l], i) => {
      const x = L + i * ((R - L + 24) / 3), bw = (R - L + 24) / 3 - 24;
      b += panel(x, 476, bw, 140) + t(x + 24, 542, n, "sv-num sv-ink", 'style="font-size:44px"') + t(x + 24, 580, l, "sv-b sv-mute");
    });
    return { cap: "Audit approach", svg: frame({ trk: "AUDIT & ASSURANCE · APPROACH", title: "A risk-based audit approach: most hours go to controls and substantive testing", body: b, page: "1" }) };
  }

  function eyVariance() {
    const acc = [["Revenue", 4.2], ["Cost of goods sold", 6.8], ["Accounts receivable", 9.1], ["Inventory", 15.7], ["Prepaid expenses", -12.4], ["Accrued liabilities", 18.5], ["SG&A", 3.0]];
    const zero = 520, k = 15, th = 10;
    const flagged = acc.filter((a) => Math.abs(a[1]) > th);
    let b = t(L, 214, "Year-over-year change by account (%)", "sv-s sv-mute");
    b += ln(zero - th * k, 232, zero - th * k, 600, "sv-accl", 'stroke-dasharray="6 5"') + ln(zero + th * k, 232, zero + th * k, 600, "sv-accl", 'stroke-dasharray="6 5"');
    b += t(zero + th * k + 6, 244, "+10% threshold", "sv-xs sv-acc") + t(zero - th * k - 6, 244, "−10%", "sv-xs sv-acc", 'text-anchor="end"');
    acc.forEach(([n, v], i) => {
      const y = 262 + i * 46, hot = Math.abs(v) > th, w = Math.abs(v) * k;
      b += t(200, y + 20, n, "sv-b sv-ink", 'text-anchor="end"');
      b += r(v >= 0 ? zero : zero - w, y + 4, w, 24, hot ? "sv-acc" : "sv-clay", 'rx="2"');
      b += r(v >= 0 ? zero + w + 4 : zero - w - 60, y + 6, 56, 20, "sv-bg");
      b += t(v >= 0 ? zero + w + 8 : zero - w - 8, y + 21, (v > 0 ? "+" : "−") + Math.abs(v).toFixed(1) + "%", "sv-s sv-ink", v >= 0 ? "" : 'text-anchor="end"');
    });
    b += ln(zero, 252, zero, 600, "sv-line");
    [-20, -10, 0, 10, 20].forEach((v) => { b += t(zero + v * k, 626, (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v) + "%", "sv-xs sv-mute", 'text-anchor="middle"'); });
    const proc = { "Inventory": "Observe the count; test costing", "Prepaid expenses": "Vouch the amortization schedule", "Accrued liabilities": "Search for unrecorded liabilities" };
    b += panel(880, 200, 344, 450) + t(904, 236, "Follow-up procedures", "sv-h sv-ink");
    flagged.forEach(([n, v], i) => {
      const y = 286 + i * 92;
      b += t(904, y, n, "sv-b sv-ink", 'font-weight="600"') + t(1200, y, (v > 0 ? "+" : "−") + Math.abs(v).toFixed(1) + "%", "sv-b sv-acc", 'text-anchor="end"');
      b += tw(904, y + 24, proc[n] || "Expanded testing", 34, 20, "sv-s sv-mute");
      b += ln(904, y + 52, 1200, y + 52, "sv-rule");
    });
    return { cap: "Variance analysis", svg: frame({ trk: "AUDIT & ASSURANCE · ANALYTICS", title: `Variance analysis flags ${flagged.length} accounts above the 10% threshold for follow-up testing`, body: b, page: "2" }) };
  }

  /* ---------------- Mercer ---------------- */
  function mercerPipeline() {
    let b = t(L, 214, "Before: analysts hand-cleaned each file. After: one automated SQL pipeline.", "sv-s sv-mute");
    const src = ["Insurer claims files", "Provider rate files", "Enrollment & eligibility"];
    src.forEach((s, i) => { const y = 238 + i * 76; b += panel(L, y, 210, 60) + t(L + 16, y + 36, s, "sv-s sv-ink"); b += ln(L + 210, y + 30, 296, y + 30, "sv-line") + ln(296, y + 30, 296, 344, "sv-line"); });
    b += arrow(296, 344, 330);
    const st = [["SQL staging", "Parse raw files into tables"], ["Validate fields", "Type checks and reconciliations"], ["Pricing model", "Standardized inputs load in"], ["Client deliverable", "Pricing and plan options"]];
    st.forEach(([h, d], i) => {
      const x = 330 + i * 226, hot = i < 2;
      b += r(x, 300, 192, 88, hot ? "sv-ink" : "sv-soft", 'rx="6"') + t(x + 18, 340, h, "sv-b " + (hot ? "sv-white" : "sv-ink"), 'font-weight="600"');
      b += tw(x + 18, 364, d, 24, 17, "sv-xs " + (hot ? "sv-white" : "sv-mute"), hot ? 'opacity=".8"' : "");
      if (i < 3) b += arrow(x + 192, 344, x + 226);
    });
    b += t(330, 416, "AUTOMATED", "sv-trk sv-acc") + ln(330, 424, 748, 424, "sv-accl");
    b += t(L, 488, "Modeling turnaround (indexed)", "sv-h sv-ink");
    [["Before", 100], ["After", 80]].forEach(([l, v], i) => {
      const y = 512 + i * 54;
      b += t(L, y + 24, l, "sv-b sv-ink") + r(160, y, v * 7, 34, i ? "sv-acc" : "sv-clay", 'rx="2"') + t(160 + v * 7 + 12, y + 24, v, "sv-b sv-ink");
    });
    b += t(960, 580, "−20%", "sv-num sv-acc") + t(960, 612, "turnaround across 3+ engagements", "sv-s sv-mute");
    return { cap: "Automated data pipeline", svg: frame({ trk: "HEALTH & BENEFITS · DATA ENGINEERING", title: "An automated SQL pipeline feeds insurer and provider data straight into pricing models, cutting turnaround 20%", body: b, page: "1" }) };
  }

  function mercerPareto() {
    const d = [["Specialty Rx", 31], ["Outpatient hospital", 22], ["Inpatient", 16], ["Behavioral health", 11], ["Professional services", 9], ["Retail Rx", 7], ["Other", 4]];
    const x0 = 110, y0 = 226, y1 = 580, slot = 100, bw = 64, Yb = (v) => y1 - (v / 35) * (y1 - y0), Yc = (v) => y1 - (v / 100) * (y1 - y0);
    const top2 = d[0][1] + d[1][1];
    let b = ln(x0, y1, x0 + slot * d.length, y1, "sv-line");
    [0, 25, 50, 75, 100].forEach((v) => { b += t(x0 + slot * d.length + 12, Yc(v) + 4, v + "%", "sv-xs sv-mute") + ln(x0, Yc(v), x0 + slot * d.length, Yc(v), "sv-rule", 'opacity=".5"'); });
    b += t(x0 + slot * d.length + 12, y0 - 14, "Cumulative", "sv-xs sv-mute");
    let cum = 0, path = "";
    d.forEach(([n, v], i) => {
      const x = x0 + i * slot + (slot - bw) / 2;
      b += r(x, Yb(v), bw, y1 - Yb(v), i < 2 ? "sv-acc" : "sv-clay");
      b += t(x + bw / 2, Yb(v) - 8, v + "%", "sv-s sv-ink", 'text-anchor="middle"');
      b += tw(x + bw / 2, y1 + 22, n, 12, 16, "sv-xs sv-ink", 'text-anchor="middle"');
      cum += v; path += (i ? " L" : "M") + (x + bw / 2) + " " + Yc(cum);
    });
    b += `<path d="${path}" class="sv-line" />`;
    cum = 0; d.forEach(([, v], i) => { cum += v; b += c(x0 + i * slot + slot / 2, Yc(cum), 4, "sv-ink"); });
    b += t(L, 214, "Share of projected cost growth by category", "sv-s sv-mute");
    b += panel(900, 200, 324, 450) + t(924, 236, "So what", "sv-h sv-ink");
    b += bullets(924, 274, ["Specialty pharmacy management is the largest single lever.", "Site-of-care steerage targets outpatient hospital spend.", "Behavioral health growth reflects needed access; protect it in any redesign."], 30);
    return { cap: "Cost-driver Pareto", svg: frame({ trk: "HEALTH & BENEFITS · COST DRIVERS", title: `Specialty Rx and outpatient hospital care drive ${top2}% of projected cost growth`, body: b, page: "2" }) };
  }

  function mercerScenarios() {
    const s = [["A", "Copay & coinsurance redesign", 2.6, "Low", "Low"], ["B", "A + site-of-care steerage", 5.1, "Medium", "Low"], ["C", "B + specialty Rx management", 8.0, "Medium", "Moderate"]];
    const x0 = 420, k = 40;
    let b = t(L, 214, "Projected reduction in annual medical spend vs. current plan", "sv-s sv-mute");
    s.forEach(([id, n, v], i) => {
      const y = 244 + i * 74, hot = i === 2;
      b += t(L, y + 28, "Scenario " + id, "sv-b sv-ink", 'font-weight="600"') + t(L + 112, y + 28, n, "sv-s sv-mute");
      b += r(x0, y + 8, v * k, 32, hot ? "sv-acc" : "sv-clay", 'rx="2"') + t(x0 + v * k + 10, y + 30, "−" + v.toFixed(1) + "%", "sv-b sv-ink", 'font-weight="600"');
    });
    const cx = [L, 330, 520, 680];
    ["Scenario", "Member cost share", "Network disruption", ""].forEach((h, j) => { b += t(cx[j], 492, h, "sv-s sv-mute"); });
    b += ln(L, 504, 820, 504, "sv-rule");
    s.forEach(([id, n, , cs, nd], i) => {
      const y = 534 + i * 38;
      b += t(cx[0], y, "Scenario " + id, "sv-s sv-ink") + t(cx[1], y, cs, "sv-s sv-ink") + t(cx[2], y, nd, "sv-s sv-ink");
      if (i === 2) b += r(cx[3], y - 17, 112, 24, "sv-acc", 'rx="12"') + t(cx[3] + 56, y, "Recommended", "sv-xs sv-white", 'text-anchor="middle"');
    });
    b += panel(880, 200, 344, 450) + t(904, 236, "Recommendation", "sv-h sv-ink");
    b += t(904, 318, "~8%", "sv-num sv-acc") + tw(904, 350, "lower projected annual spend on employer portfolios above $100M", 34, 20, "sv-s sv-ink");
    b += bullets(904, 440, ["Year 1: specialty Rx management and plan redesign.", "Year 2: site-of-care steerage once networks are set."], 32);
    return { cap: "Benefit-design scenarios", svg: frame({ trk: "HEALTH & BENEFITS · PLAN DESIGN", title: "Scenario C lowers projected annual medical spend ~8% with moderate member disruption", body: b, page: "3" }) };
  }

  /* ---------------- ReRx ---------------- */
  function rerxLandscape() {
    const phases = ["Preclinical", "Phase 1", "Phase 2", "Phase 3"], mech = ["Targeted small molecule", "Antibody / ADC", "Cell therapy", "Other modalities"];
    const grid = [[2, 3, 2, 1], [1, 2, 2, 1], [2, 1, 0, 0], [1, 1, 1, 0]];
    const total = grid.flat().reduce((a, b) => a + b), byPhase = phases.map((_, j) => grid.reduce((a, row) => a + row[j], 0));
    const early = byPhase[0] + byPhase[1];
    const cx = 290, cw = 233, ry = 246, rh = 84;
    let b = "", letter = 65;
    phases.forEach((p, j) => { b += t(cx + j * cw + 14, 230, `${p} (${byPhase[j]})`, "sv-s sv-mute"); });
    mech.forEach((m, i) => {
      const y = ry + i * rh;
      b += r(L, y, R - L, rh - 6, i % 2 ? "sv-bg" : "sv-soft", 'rx="4"');
      b += tw(L + 14, y + 36, m, 20, 19, "sv-b sv-ink", 'font-weight="600"');
      grid[i].forEach((n, j) => {
        for (let q = 0; q < n; q++) {
          const x = cx + j * cw + 30 + q * 36, yy = y + 39;
          b += c(x, yy, 14, "sv-clay") + t(x, yy + 4.5, String.fromCharCode(letter++), "sv-xs sv-white", 'text-anchor="middle" font-weight="600"');
        }
      });
    });
    const ax = cx + cw + 30 + 3 * 36 + 8, ay = ry + 39;
    b += c(ax, ay, 16, "sv-acc") + t(ax, ay + 32, "Lead asset", "sv-xs sv-acc", 'text-anchor="middle" font-weight="600"');
    for (let j = 1; j < 4; j++) b += ln(cx + j * cw, 240, cx + j * cw, ry + 4 * rh - 6, "sv-rule", 'stroke-dasharray="4 5"');
    b += panel(L, 594, R - L, 58) + t(L + 20, 629, `${early} of ${total} competing programs are preclinical or Phase 1. Strong early data could set the asset apart before the field matures.`, "sv-b sv-ink");
    return { cap: "Competitive landscape", svg: frame({ trk: "BUSINESS DEVELOPMENT · LANDSCAPE", title: `${total} competing programs mapped: most sit in early phases, leaving room for differentiated data`, body: b, page: "1" }) };
  }

  function rerxStory() {
    const s = [["The problem", "Unmet need and why current options fall short"], ["Why this asset", "Mechanism and what makes it different"], ["Clinical evidence", "Data to date and the path to proof of concept"],
      ["Competitive landscape", "20 programs mapped by phase and modality"], ["Market & commercial path", "Patient population, pricing, and launch route"], ["Team & the raise", "Milestones the Series A funds"]];
    let b = "";
    s.forEach(([h, d], i) => {
      const y = 204 + i * 72;
      b += r(L, y, 740, 60, i === 3 ? "sv-soft" : "sv-bg", 'rx="6" style="stroke:var(--s-rule);stroke-width:1.5"');
      b += c(L + 34, y + 30, 16, i === 3 ? "sv-acc" : "sv-ink") + t(L + 34, y + 35, i + 1, "sv-s sv-white", 'text-anchor="middle" font-weight="600"');
      b += t(L + 66, y + 36, h, "sv-b sv-ink", 'font-weight="600"') + t(L + 320, y + 36, d, "sv-s sv-mute");
    });
    b += panel(840, 200, 384, 450);
    b += t(864, 270, "40+", "sv-num sv-ink") + tw(864, 300, "institutional and strategic investors reviewed the materials", 40, 20, "sv-s sv-mute");
    b += t(864, 380, "DATA ROOM", "sv-trk sv-mute");
    ["Clinical data summary", "Competitive landscape", "Market model", "Commercialization plan", "Diligence Q&A log"].forEach((x, i) => {
      const y = 414 + i * 44;
      b += r(864, y - 15, 18, 18, "sv-ink", 'rx="3"') + `<polyline points="868,${y - 6} 872,${y - 2} 879,${y - 10}" style="fill:none;stroke:#fff;stroke-width:2"/>` + t(894, y, x, "sv-b sv-ink");
    });
    return { cap: "Series A storyline", svg: frame({ trk: "BUSINESS DEVELOPMENT · FUNDRAISING", title: "Series A storyline: six questions every investor asks, answered in order", body: b, page: "2" }) };
  }

  window.SLIDES = {
    dedham: () => [dedhamTracker(), dedhamSegments(), dedhamLLM(), dedhamRoadmap(), dedhamBench()],
    ey: () => [eyProcess(), eyVariance()],
    mercer: () => [mercerPipeline(), mercerPareto(), mercerScenarios()],
    rerx: () => [rerxLandscape(), rerxStory()],
  };
})();
