/* ================================================================
   SITE CONTENT — edit this file to change text, photo, and logos.
   Everything on the page is rendered from this object.
   ================================================================ */
window.SITE = {
  name: "James Lin",
  tagline: "Product · Data Science",
  location: "New York, NY",
  timezone: "America/New_York",

  // Your photo. Replace assets/portrait.jpg with your own image (portrait orientation works best),
  // or point this at another file. Set to "" to show the placeholder.
  portrait: "assets/portrait.jpg",
  // Which part of the photo stays in frame: "50% 30%" = centered horizontally, upper third vertically.
  portraitPosition: "50% 18%",

  marquee: ["Bridging data,", "product innovation,", "& customers."],

  meta: [
    { k: "Now", v: "MS Data Science student, NYU" },
    { k: "Program", v: "2026 — 2028" },
    { k: "Focus", v: "Product · Data Science · ML" },
    { k: "Previously", v: "The Dedham Group" },
  ],

  intro: {
    hello: "Hi, I'm James.",
    lead: "I'm a data science master's student at NYU who builds products with data: user research and roadmaps on one side, models, pipelines, and retrieval systems on the other.",
    sub: "Before NYU, I was on The Dedham Group's Commercial Strategy & Market Access team, shaping launch strategy for oncology and cell and gene therapies and leading my team's rollout of an internal LLM.",
  },

  about: {
    heading: "Get to know me more!",
    lead: "At Berkeley I studied business and data science side by side, and I've never really picked one. My favorite problems sit right between them: what should we build, who is it for, and how will we know it works?",
    body: [
      "What I bring is translation. I can take a model, a pipeline, or a policy change and explain what it means to the person who has to act on it, so engineers, executives, and customers end up on the same page.",
      "Healthcare is where I've spent most of my time, and it started at home: my dad is a doctor, so I grew up around medicine long before my first job. Since then I've sat across from the clinicians, payers, and distributors who decide whether a therapy gets to patients, and I've built the models and pipelines behind those calls.",
      "My work isn't limited to healthcare, though. I've built Gen Z brand and influencer strategies for consumer brands like Garnier and Bubble, and the skills underneath it all, from user research and market sizing to modeling and clear storytelling, carry across industries.",
      "At NYU I'm going deeper on machine learning and data systems, and on the side I'm building Atlas, an AI research assistant designed so you can check every answer it gives.",
      "When I'm not working, I'm probably listening to the newest album, discovering new artists, mixing a new fragrance, reading up on airlines and aircraft models, or watching a horror movie (I'm a fanatic).",
    ],
    hello: "Hello from New York",
    exploring: [
      { t: "Retrieval and evaluation for trustworthy AI", i: "sparkle" },
      { t: "Causal inference on health data", i: "pulse" },
      { t: "Product strategy for specialty therapeutics", i: "target" },
      { t: "Data systems at scale", i: "db" },
    ],
    interests: [
      { t: "New music & artists", i: "music" }, { t: "Fragrance-making", i: "bottle" }, { t: "Airlines & aircraft", i: "plane" },
      { t: "Horror movies", i: "ghost" }, { t: "Forensics", i: "search" }, { t: "Formula 1", i: "flag" },
      { t: "Pickleball", i: "paddle" }, { t: "Golf", i: "golf" }, { t: "Community volunteering", i: "heart" },
    ],
    languages: ["English", "Mandarin (fluent)", "French (business proficient)"],
    toolkit: [
      { k: "Product", v: ["User & stakeholder interviews", "Market sizing", "Go-to-market strategy", "Product requirements", "Metrics design"] },
      { k: "Data & ML", v: ["Python", "SQL", "R", "C++", "pandas", "scikit-learn", "statsmodels", "PyTorch", "Hugging Face"] },
      { k: "Data systems", v: ["PostgreSQL", "MongoDB", "ETL", "Query optimization", "Git", "Linux"] },
      { k: "Business tools", v: ["Excel", "PowerPoint", "Financial modeling", "Capital IQ", "Tableau", "Power BI"] },
    ],
  },

  // Logos: put the file in assets/logos/ and set `logo: "assets/logos/<file name>"` on the entry.
  // `logoScale` (optional, e.g. 1.3) enlarges logos that have extra white space. Leave logo null to show the monogram.
  education: [
    {
      school: "New York University", short: "NYU", logo: "assets/logos/NYU-Logo.png", logoScale: 1.35, level: "Master's", years: "2026 — 2028", when: "Sep 2026 — May 2028", status: "In progress",
      degrees: ["MS in Data Science"], unit: "Courant Institute School of Mathematics, Computing, and Data Science",
      coursework: "Database Systems; Probability and Statistics; Machine Learning; Big Data; Cloud and Machine Learning",
    },
    {
      school: "University of California, Berkeley", short: "Cal", logo: "assets/logos/Seal_of_University_of_California,_Berkeley.svg", level: "Bachelor's", years: "2021 — 2025", when: "Aug 2021 — May 2025", status: "Graduated · GPA 3.9 / 4.0",
      degrees: ["BS in Business Administration, Haas School of Business", "BA in Data Science, College of Computing, Data Science, and Society", "Minor in Global Public Health"],
      coursework: "Data, Inference & Decision-Making; Econometrics; Financial Modeling; Linear Algebra; Data Engineering; Statistics",
      honors: "Dean's List (4×) · Amazon × Consult Your Community × Paragon Case Competition, 2nd of 20 teams (2022) · Berkeley SkyDeck ACE Program (2024)",
    },
  ],

  experience: [
    {
      id: "dedham", company: "The Dedham Group", short: "TDG", logo: "assets/logos/TDG Logo.png", role: "Consulting Analyst, Commercial Strategy & Market Access",
      when: "Jul 2025 — Feb 2026", where: "New York, NY", type: "Full-time", sector: "Life-sciences consulting", cover: "pedestal",
      summary: "Commercial strategy and market access for oncology and cell and gene therapies. I helped launch a Fortune 50 distributor's ordering and cold-chain platform, ran 100+ stakeholder interviews to find adoption barriers, built policy-tracking models across 13 states, and led my team's rollout of an internal LLM that cut deliverable time in half.",
      lead: "On the Commercial Strategy & Market Access team, I worked on launch strategy for some of the most expensive therapies in medicine, from oncology agents above $150K a year to CAR-T treatments above $410K. The work sat between manufacturers, payers, treatment centers, and distributors: figuring out who decides, what slows adoption, and how policy shifts change the outlook.",
      kpis: [["100+", "stakeholder interviews"], ["15+", "products tracked, 13 states"], ["50%", "faster deliverables with LLM rollout"], ["95%", "partner satisfaction at platform launch"]],
      themes: [
        { t: "Platform launch", d: "Helped launch a Fortune 50 pharma distributor's end-to-end ordering and cold-chain platform for cell and gene therapies.",
          b: ["Ran user research and feature tests with partner health systems", "Prioritized the roadmap by partner impact and build effort", "Partner health systems rated the launch 95% satisfied"] },
        { t: "Stakeholder research", d: "Designed and ran 100+ interviews with providers, payers, distributors, and HUBs for 7 therapies and one digital platform.",
          b: ["Segmented stakeholders by need and decision power", "Turned findings into adoption barriers that shaped launch strategy", "Covered four stakeholder groups end to end"] },
        { t: "Market access & policy models", d: "Built and maintained policy-tracking models covering 15+ oncology and cell-therapy products across 13 states.",
          b: ["Integrated payer, policy, regulatory, and competitive data into product-level variables", "Reviewed 10+ legislative and payer policy changes per engagement", "Helped clients forecast coverage, reimbursement, and launch readiness"] },
        { t: "Competitive benchmarking", d: "Developed analog benchmarking frameworks across 30+ branded products, 10+ specialty distributors, and 20+ manufacturers.",
          b: ["Compared pricing, access, and service models", "Informed patient support, HUB design, and distribution models", "Shaped how clients allocate multi-million-dollar commercialization budgets"] },
        { t: "AI enablement", d: "Led the rollout of a newly introduced internal LLM to a 10-person team.",
          b: ["Scoped high-value use cases", "Designed analyst-review workflows so output stayed checkable", "Iterated on user feedback; cut completion time 50% across 7+ deliverables"] },
      ],
      tools: ["Primary research", "Stakeholder segmentation", "Policy tracking", "Analog benchmarking", "Excel modeling", "PowerPoint", "Internal LLM"],
    },
    {
      id: "ey", company: "Ernst & Young", short: "EY", logo: "assets/logos/EY_logo_2019.svg.webp", role: "Audit / Assurance Intern",
      when: "Aug 2024 — Dec 2024", where: "San Francisco, CA", type: "Internship", sector: "Audit & assurance", cover: "discs",
      summary: "Supported financial statement audits for three clients: evaluating internal controls, running transaction tests, reconciliations, and variance analyses, and documenting risks, findings, and materiality in audit workpapers.",
      lead: "At EY I worked on audit engagements for three clients, checking that their financial statements held up: testing the controls behind the numbers, tracing transactions, and explaining what moved and why.",
      kpis: [["3", "client audits supported"], ["GAAP", "and regulatory compliance checks"]],
      themes: [
        { t: "Internal controls", d: "Evaluated internal controls and checked GAAP and regulatory compliance across 3 client audits.", b: ["Walked through key processes with client teams", "Assessed control design and operating effectiveness"] },
        { t: "Substantive testing", d: "Ran transaction testing, reconciliations, and variance analyses to validate reporting accuracy.", b: ["Traced samples to source documents", "Flagged variances above threshold for follow-up"] },
        { t: "Documentation", d: "Prepared audit documentation and workpapers summarizing financial risks, findings, and materiality assessments.", b: ["Wrote findings reviewers could follow end to end"] },
        { t: "Client collaboration", d: "Worked with cross-functional client teams to gather financial data and resolve reporting discrepancies.", b: ["Coordinated requests across finance and operations"] },
      ],
      tools: ["Controls testing", "Reconciliations", "Variance analysis", "Audit workpapers", "Excel"],
    },
    {
      id: "mercer", company: "Mercer", short: "Mercer", logo: "assets/logos/Mercer-Logo.jpg", logoScale: 1.3, role: "Health Consulting Financial Data Intern",
      when: "Jun 2024 — Aug 2024", where: "San Francisco, CA", type: "Internship", sector: "Health & benefits consulting", cover: "bars",
      summary: "On the Health & Benefits team, I built an automated SQL pipeline that fed insurer and provider data straight into pricing models, cutting turnaround 20%, and found a benefit-design scenario projected to lower medical spend about 8% for employer portfolios above $100M.",
      lead: "Mercer's Health & Benefits team helps large employers price and design their healthcare plans. I worked on the data and modeling side for Fortune 500 and high-growth tech clients: getting messy insurer and provider files into the models faster, and finding where plan design could bend the cost curve.",
      kpis: [["20%", "faster modeling turnaround"], ["~8%", "projected cut in annual medical spend"], ["$100M+", "employer healthcare portfolios"], ["3+", "client engagements"]],
      themes: [
        { t: "Automated data pipeline", d: "Built a SQL pipeline that parsed unstructured insurer and provider data, validated structured fields, and loaded them into standardized pricing models.",
          b: ["Cut financial-modeling turnaround 20% across 3+ client engagements", "Standardized inputs so models could be compared across clients"] },
        { t: "Benefit design", d: "Analyzed member-level utilization, claims, and pricing data to find cost-optimization strategies.",
          b: ["Identified a scenario projected to cut annual medical spend ~8%", "Presented recommendations to clients"] },
        { t: "Cost drivers", d: "Analyzed healthcare utilization and cost drivers for Fortune 500 and high-growth technology clients.",
          b: ["Supported pricing, valuation, and benefit-design decisions across industries"] },
      ],
      tools: ["SQL", "Data pipelines", "Financial modeling", "Claims analysis", "Excel"],
    },
    {
      id: "rerx", company: "ReRx Therapeutics", short: "ReRx", logo: "assets/logos/rerx_therapeutics.png", logoScale: 1.6, role: "Business Development Intern",
      when: "Dec 2023 — May 2024", where: "Berkeley, CA", type: "Startup internship", sector: "Oncology biotech", cover: "capsule",
      summary: "At an oncology startup preparing its Series A, I mapped 20 FDA clinical programs and competitors to position the lead asset, and built investor and diligence materials reviewed by 40+ institutional and strategic investors.",
      lead: "ReRx was preparing to raise a Series A for a novel oncology asset. My job was to make the case legible to investors: where the asset sits against the competition, and what the clinical and commercial story looks like.",
      kpis: [["20", "clinical programs analyzed"], ["40+", "investors reviewed materials"]],
      themes: [
        { t: "Competitive positioning", d: "Analyzed 20 FDA clinical programs and competitors to position the asset for fundraising.", b: ["Mapped programs by phase and mechanism", "Identified where the asset could differentiate"] },
        { t: "Investor materials", d: "Built investor, market, and diligence materials reviewed by 40+ institutional and strategic investors.", b: ["Synthesized clinical data, competitive positioning, and commercialization strategy", "Supported the Series A process"] },
      ],
      tools: ["Competitive intelligence", "Clinical trial research", "Pitch & diligence materials", "Market analysis"],
    },
  ],

  clientIntro: "Before and during my internships I took on client engagements at Berkeley, mostly in healthcare and medtech, with a few consumer brands. Several were under NDA, so the descriptions stay at the level I can share.",
  clients: [
    { name: "Abbott Laboratories", short: "Ab", logo: "assets/logos/Abbott_Laboratories_logo.svg", role: "GTM Consultant, Project Manager", when: "Jan — May 2024", year: "2024", sector: "Digital health",
      text: "Led go-to-market work for an over-the-counter continuous glucose monitoring app. I segmented four B2B customer types, sized the U.S. market-entry funnel, and mapped 15+ partnership and channel pathways. A Python opportunity-scoring model with sensitivity analysis on market potential, adoption friction, sales-cycle length, and margin pointed to a 12.5% modeled revenue upside and drove the launch recommendation." },
    { name: "Resmonics", short: "Rs", logo: "assets/logos/resmonics logo.png", logoScale: 1.2, role: "Contracted Consultant", when: "Aug — Dec 2023", year: "2023", sector: "Medtech",
      text: "Analyzed the U.S. respiratory-health device market for an AI-based sensor system. I identified 2–3 high-potential target markets and evaluated addressable market size and regulatory requirements to shape the U.S. go-to-market strategy." },
    { name: "Garnier", short: "Gr", logo: "assets/logos/garnier logo.jpeg", logoScale: 1.1, role: "Contracted Consultant", when: "Aug — Dec 2023", year: "2023", sector: "Consumer beauty",
      text: "Built a sustainability-focused brand strategy aimed at Gen Z that improved environmental impact metrics 22%. Consumer research raised media awareness and consumption 15.2%. I designed the influencer program, managing 8 micro and macro influencers, and organized a 216-person campus event to gather insights for future sustainability messaging." },
    { name: "Bubble", short: "Bb", logo: "assets/logos/bubble-skincare-logo-png_seeklogo-563634.png", logoScale: 1.35, role: "Contracted Consultant", when: "Aug — Dec 2023", year: "2023", sector: "Consumer skincare",
      text: "Surveyed 355+ college students on Gen Z purchasing and media habits for the Bubble On-Campus program, designed its influencer marketing strategy, and assessed campus expansion opportunities. Our recommendations improved Gen Z awareness and perception of the program 21.5%." },
    { name: "Global Lives Project", short: "GL", logo: "assets/logos/Logo_of_Global_Lives_Project.jpg", role: "Business Development Researcher", when: "Aug — Dec 2023", year: "2023", sector: "Nonprofit media",
      text: "Used Salesforce and Google Analytics to build short- and long-term growth recommendations, and produced weekly metric reports that helped lift subscriptions 5% over one quarter." },
    { name: "Coagulant Therapeutics", short: "Co", logo: "assets/logos/Coagulant+Therapeutics+Logo_RGB.webp", role: "Contracted Consultant", when: "May — Aug 2023", year: "2023", sector: "Biotech",
      text: "Sized a 1.56M–2.4M target population for a trauma-focused pharmaceutical asset, designed a go-to-market strategy backed by KOL interviews and competitive analysis, and prepared investor-ready diligence materials for the Series B raise." },
    { name: "Moon Surgical", short: "MS", logo: "assets/logos/Moon-Surgical-Logo.webp", role: "Contracted Consultant", when: "Jan — May 2023", year: "2023", sector: "Surgical robotics",
      text: "Built a return-on-investment analysis of market risk and hospital integration for a new robotic surgical device, using a discounted cash flow model to evaluate long-term investment performance and inform capital decisions." },
  ],
  leadership: [
    { org: "Healthcare Consulting Group at Berkeley", role: "Vice President of Finance & Project Lead", when: "Jan 2023 — May 2025",
      text: "Led 5-person project teams delivering go-to-market, pricing, and competitive-positioning strategy to 6+ healthcare clients, and owned forecasting, revenue tracking, and billing for a $20K+ operating budget." },
    { org: "Business Careers in Entertainment Club", role: "Project Manager", when: "Jan 2023 — Dec 2024",
      text: "Led a 10-member team on a Gen Z growth campaign for a Fortune 500 consumer brand, driving a 31% lift in brand recognition and a 25% increase in digital engagement." },
  ],

  github: "https://github.com/jamesjxlin-git",
  projects: [
    { id: "atlas", title: "Atlas", sub: "Evaluation-driven RAG research assistant", url: "https://github.com/jamesjxlin-git/atlas",
      stack: "Python · PyTorch · Hugging Face · SentenceTransformers", viz: "atlas",
      icon: "paper",
      text: "Built for professionals, physicians especially, who can't keep pace with fast-moving literature. Atlas runs discovery, paper selection, evidence-backed Q&A, and verification, using MiniLM embeddings with cross-encoder reranking, explicit answerability checks, and citation safeguards.",
      metrics: ["0.80 MRR", "0.938 NDCG@3", "5/5 perfect top-3 evidence", "~26 ms retrieval", "68 tests"] },
    { id: "diabetes", title: "Diabetes risk", sub: "Predictive and causal analysis", url: "https://github.com/jamesjxlin-git/diabetes-predictive-causal-analysis",
      stack: "Python · R · scikit-learn · statsmodels", viz: "diabetes",
      icon: "health",
      text: "An end-to-end pipeline over 253,680 records and 21 features using logistic regression, random forests, IPW, and propensity-score matching. A 10-feature model keeps over 99% of full-model ROC-AUC; IPW across five confounders links smoking to ~15% higher diabetes odds.",
      metrics: ["AUC 0.821 vs 0.822", "OR 1.15", "+1.68 pp prevalence"] },
    { id: "yelp", title: "Postgres vs. Mongo", sub: "Large-scale Yelp data engineering", url: "https://github.com/jamesjxlin-git/postgresql-mongodb-benchmark",
      stack: "Python · PostgreSQL · MongoDB · psycopg2", viz: "yelp",
      icon: "database",
      text: "Modeled an unsampled 8GB, 12M+ document Yelp dataset in relational and document schemas across five entities, then benchmarked equivalent workloads. PostgreSQL ran up to 11× faster; the gap traces to indexing, query planning, and collection scans.",
      metrics: ["8 GB", "12M+ documents", "up to 11× faster"] },
  ],

  contact: {
    email: "jameslin516@gmail.com",
    linkedin: "https://www.linkedin.com/in/jamesjxlin/",
    github: "https://github.com/jamesjxlin-git",
  },
};
