(function () {
  const S = window.SITE;
  const $ = (q, el = document) => el.querySelector(q);
  const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const arrowR = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 7h11M8 3l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
  const arrowUR = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M3 11L11 3M5 3h6v6" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
  const mail = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M2 4.5l6 4.5 6-4.5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
  const liIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="1.5" width="13" height="13" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M5 7v4.5M5 4.6v.1M8 11.5V7m0 2c0-1.2.8-2 1.8-2s1.7.7 1.7 2v2.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
  const ghIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 13.5c-3 .9-3-1.5-4.2-1.8M10 15v-2.3c0-.7 0-1.2-.4-1.6 2-.2 4-1 4-4.4 0-.9-.3-1.7-.9-2.4.1-.4.3-1.3-.1-2.4 0 0-.8-.2-2.5.9a8.6 8.6 0 0 0-4.4 0C4 1.7 3.3 1.9 3.3 1.9c-.4 1.1-.2 2-.1 2.4-.6.7-.9 1.5-.9 2.4 0 3.4 2 4.2 4 4.4-.4.4-.4.9-.4 1.6V15" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const arrowL = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M13 7H2M6 3L2 7l4 4" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';

  /* ---------- small builders ---------- */
  const ICONS = {
    sparkle: '<path d="M8 1.5c.5 3 1.5 4 4.5 4.5-3 .5-4 1.5-4.5 4.5-.5-3-1.5-4-4.5-4.5 3-.5 4-1.5 4.5-4.5Z"/><path d="M13 10.5c.2 1.2.6 1.6 1.8 1.8-1.2.2-1.6.6-1.8 1.8-.2-1.2-.6-1.6-1.8-1.8 1.2-.2 1.6-.6 1.8-1.8Z"/>',
    pulse: '<path d="M8 14S1.5 10.2 1.5 5.8A3.3 3.3 0 0 1 8 4.3a3.3 3.3 0 0 1 6.5 1.5C14.5 10.2 8 14 8 14Z"/><path d="M3.5 8h2l1-1.8 1.5 3.3L9.3 7h3.2"/>',
    target: '<circle cx="8" cy="8" r="6.3"/><circle cx="8" cy="8" r="3.3"/><circle cx="8" cy="8" r=".6"/>',
    db: '<ellipse cx="8" cy="3.6" rx="5.3" ry="2"/><path d="M2.7 3.6v8.8c0 1.1 2.4 2 5.3 2s5.3-.9 5.3-2V3.6M2.7 8c0 1.1 2.4 2 5.3 2s5.3-.9 5.3-2"/>',
    music: '<circle cx="4.3" cy="12.3" r="1.9"/><circle cx="11.8" cy="10.8" r="1.9"/><path d="M6.2 12.3V3.6l7.5-1.6v8.8"/>',
    bottle: '<rect x="3.5" y="6.5" width="9" height="8" rx="2"/><path d="M6 6.5V4.5h4v2M6.8 4.5V2.5h2.4v2M12 2.2l1.3-.6M12.2 3.6h1.4"/>',
    plane: '<path d="M14.5 8.2c0-.7-.6-1.1-1.3-1.1H9.6L6.4 2H5l1.5 5.1H3.6L2.4 5.5H1.5l.8 2.7-.8 2.7h.9l1.2-1.6h2.9L5 14h1.4l3.2-5.1h3.6c.7 0 1.3-.4 1.3-.7Z"/>',
    ghost: '<path d="M3 14.2V7a5 5 0 0 1 10 0v7.2l-1.7-1.3-1.6 1.3L8 13l-1.7 1.2-1.6-1.3Z"/><circle cx="6.2" cy="7" r=".7"/><circle cx="9.8" cy="7" r=".7"/>',
    search: '<circle cx="7" cy="7" r="4.6"/><path d="M10.4 10.4l3.8 3.8"/>',
    flag: '<path d="M3 15V1.8M3 2.5h10l-2 3 2 3H3"/><path d="M6.3 2.5v6M9.6 2.5v6M3 5.5h8.8"/>',
    paddle: '<rect x="2.2" y="1.8" width="8" height="9" rx="4" transform="rotate(-35 6.2 6.3)"/><path d="M8.6 10.3l3.2 3.6"/><circle cx="13.3" cy="4" r="1.3"/>',
    golf: '<path d="M7 13V1.8l5 2.3-5 2.3"/><ellipse cx="7.5" cy="13.4" rx="5.5" ry="1.4"/>',
    heart: '<path d="M8 14S1.5 10.2 1.5 5.8A3.3 3.3 0 0 1 8 4.3a3.3 3.3 0 0 1 6.5 1.5C14.5 10.2 8 14 8 14Z"/>',
  };
  const ic = (n) => ICONS[n] ? `<svg class="ic" viewBox="0 0 16 16" aria-hidden="true">${ICONS[n]}</svg>` : "";
  const ichips = (arr) => `<div class="chips">${arr.map((x) => `<span class="chip ichip">${ic(x.i)}${esc(x.t)}</span>`).join("")}</div>`;
  const chips = (arr) => `<div class="chips">${arr.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>`;
  const logoTile = (o, size = "") => o.logo
    ? `<div class="logo-tile has-img ${size}"><img src="${esc(encodeURI(o.logo))}" alt="${esc(o.school || o.name || o.company)} logo" style="transform:scale(${+o.logoScale || 1})" onerror="this.parentNode.classList.remove('has-img');this.parentNode.innerHTML='<span>${esc(o.short)}</span>'"></div>`
    : `<div class="logo-tile ${size}" aria-hidden="true"><span>${esc(o.short)}</span></div>`;

  function cover(kind, label) {
    const k = {
      pedestal: `<div class="obj ped" style="left:25cqw;bottom:15cqw;width:50cqw;height:13cqw"></div>
                 <div class="obj sph" style="left:39cqw;bottom:25cqw;width:22cqw"></div>
                 <div class="obj ball" style="left:72cqw;bottom:12cqw;width:5cqw"></div>`,
      discs: `<div class="obj shd" style="left:24cqw;bottom:9cqw;width:52cqw;height:10cqw"></div>
              <div class="obj disc" style="left:30cqw;bottom:14cqw;width:40cqw;height:9cqw"></div>
              <div class="obj disc" style="left:31cqw;bottom:21.5cqw;width:38cqw;height:9cqw"></div>
              <div class="obj disc" style="left:32cqw;bottom:29cqw;width:36cqw;height:9cqw"></div>
              <div class="obj ball" style="left:47.5cqw;bottom:36cqw;width:5cqw"></div>`,
      bars: `<div class="obj shd" style="left:22cqw;bottom:9cqw;width:58cqw;height:9cqw"></div>
             <div class="obj cyl" style="left:28cqw;bottom:13cqw;width:13cqw;height:16cqw"></div>
             <div class="obj cyl" style="left:44cqw;bottom:13cqw;width:13cqw;height:26cqw"></div>
             <div class="obj cyl hot" style="left:60cqw;bottom:13cqw;width:13cqw;height:37cqw"></div>`,
      hello: `<div class="obj ped" style="left:22cqw;bottom:13cqw;width:56cqw;height:15cqw"></div>
               <div class="obj sph" style="left:35cqw;bottom:25cqw;width:30cqw"></div>
               <div class="obj ball" style="left:70cqw;bottom:11cqw;width:6cqw"></div>`,
      capsule: `<div class="obj shd" style="left:24cqw;bottom:10cqw;width:54cqw;height:10cqw"></div>
                <div class="obj cap" style="left:27cqw;bottom:20cqw;width:46cqw;height:17cqw;transform:rotate(-16deg)"><span></span><span></span></div>
                <div class="obj sph" style="left:70cqw;bottom:13cqw;width:11cqw"></div>`,
    }[kind] || "";
    return `<div class="cover" aria-hidden="true">${label ? `<span class="lbl">${esc(label)}</span>` : ""}${k}</div>`;
  }

  function emblem(uid) {
    const d = (id) => `${id}${uid}`;
    return `<div class="emblem" aria-hidden="true"><svg viewBox="0 0 400 328" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="${d("bf")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--clay-hi)"/><stop offset=".6" style="stop-color:var(--clay-mid)"/><stop offset="1" style="stop-color:var(--clay-lo)"/></linearGradient>
        <linearGradient id="${d("bt")}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--clay-mid)"/><stop offset=".5" style="stop-color:var(--clay-hi)"/><stop offset="1" style="stop-color:var(--clay-mid)"/></linearGradient>
        <linearGradient id="${d("bs")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--clay-mid)"/><stop offset="1" style="stop-color:var(--clay-lo)"/></linearGradient>
        <linearGradient id="${d("ba")}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf7d"/><stop offset=".55" style="stop-color:var(--accent)"/><stop offset="1" stop-color="#a63f17"/></linearGradient>
        <linearGradient id="${d("bh")}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--clay-lo)"/><stop offset=".5" style="stop-color:var(--clay-hi)"/><stop offset="1" style="stop-color:var(--clay-lo)"/></linearGradient>
        <radialGradient id="${d("gs")}"><stop offset="0" style="stop-color:var(--shadow)"/><stop offset="1" stop-color="transparent" stop-opacity="0"/></radialGradient>
        <radialGradient id="${d("gl")}" cx=".3" cy=".2" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        <radialGradient id="${d("sp")}" cx=".35" cy=".3" r=".75"><stop offset="0" style="stop-color:var(--clay-hi)"/><stop offset=".55" style="stop-color:var(--clay-mid)"/><stop offset="1" style="stop-color:var(--clay-lo)"/></radialGradient>
        <radialGradient id="${d("ob")}" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="#ffe7a3"/><stop offset=".45" style="stop-color:var(--accent)"/><stop offset="1" stop-color="#a63f17"/></radialGradient>
      </defs>
      <ellipse cx="208" cy="276" rx="158" ry="16" fill="url(#${d("gs")})"/>
      <path d="M168,98 v-22 a18,18 0 0 1 18,-18 h52 a18,18 0 0 1 18,18 v22" fill="none" stroke="url(#${d("bh")})" stroke-width="15" stroke-linecap="round"/>
      <polygon points="96,104 304,104 330,86 122,86" fill="url(#${d("bt")})"/>
      <polygon points="304,104 330,86 330,246 304,266" fill="url(#${d("bs")})"/>
      <rect x="96" y="104" width="208" height="162" rx="10" fill="url(#${d("bf")})"/>
      <rect x="96" y="104" width="208" height="162" rx="10" fill="url(#${d("gl")})"/>
      <rect x="96" y="160" width="208" height="16" fill="url(#${d("ba")})"/>
      <polygon points="304,160 330,142 330,158 304,176" fill="#b9541f"/>
      <rect x="182" y="150" width="36" height="34" rx="7" style="fill:var(--clay-hi);stroke:var(--clay-lo)" stroke-width="2"/>
      <circle cx="200" cy="167" r="4" style="fill:var(--clay-lo)"/>
      <circle cx="62" cy="248" r="24" fill="url(#${d("sp")})"/>
      <circle cx="352" cy="262" r="13" fill="url(#${d("ob")})"/>
    </svg></div>`;
  }

  function projIcon(kind) {
    const g = `<defs>
      <linearGradient id="pc-${kind}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--clay-hi)"/><stop offset=".6" style="stop-color:var(--clay-mid)"/><stop offset="1" style="stop-color:var(--clay-lo)"/></linearGradient>
      <linearGradient id="ph-${kind}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--clay-lo)"/><stop offset=".3" style="stop-color:var(--clay-mid)"/><stop offset=".55" style="stop-color:var(--clay-hi)"/><stop offset=".8" style="stop-color:var(--clay-mid)"/><stop offset="1" style="stop-color:var(--clay-lo)"/></linearGradient>
      <linearGradient id="pa-${kind}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd88a"/><stop offset=".5" style="stop-color:var(--accent)"/><stop offset="1" stop-color="#a63f17"/></linearGradient>
      <linearGradient id="pah-${kind}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a63f17"/><stop offset=".35" style="stop-color:var(--accent)"/><stop offset=".55" stop-color="#ffc970"/><stop offset=".8" style="stop-color:var(--accent)"/><stop offset="1" stop-color="#a63f17"/></linearGradient>
      <radialGradient id="ps-${kind}"><stop offset="0" style="stop-color:var(--shadow)"/><stop offset="1" stop-color="transparent" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="200" cy="222" rx="110" ry="12" fill="url(#ps-${kind})"/>`;
    const star = (x, y, k) => `<path transform="translate(${x} ${y}) scale(${k})" d="M0,-30 C4,-6 6,-4 30,0 C6,4 4,6 0,30 C-4,6 -6,4 -30,0 C-6,-4 -4,-6 0,-30Z" fill="url(#pa-${kind})"/>`;
    let body = "";
    if (kind === "paper") {
      body = `<rect x="150" y="38" width="120" height="164" rx="10" transform="rotate(-9 210 120)" style="fill:var(--clay-lo)" opacity=".55"/>
        <path d="M140,46 h86 l34,34 v118 a10,10 0 0 1 -10,10 h-110 a10,10 0 0 1 -10,-10 v-142 a10,10 0 0 1 10,-10z" fill="url(#pc-${kind})"/>
        <path d="M226,46 v24 a10,10 0 0 0 10,10 h24z" style="fill:var(--clay-lo)" opacity=".55"/>
        <rect x="152" y="70" width="56" height="9" rx="4" style="fill:var(--ink)" opacity=".7"/>
        ${[92, 76, 92, 60, 84, 70].map((w, i) => `<rect x="152" y="${96 + i * 16}" width="${w}" height="6" rx="3" style="fill:var(--clay-lo)" opacity=".75"/>`).join("")}
        ${star(276, 66, 1.05)}${star(306, 112, .45)}${star(112, 150, .3)}`;
    } else if (kind === "health") {
      body = `<rect x="104" y="92" width="104" height="34" rx="11" fill="url(#pc-${kind})"/><rect x="139" y="57" width="34" height="104" rx="11" fill="url(#pc-${kind})"/>
        <polyline points="80,196 150,196 166,174 182,214 198,164 214,196 320,196" fill="none" style="stroke:var(--clay-lo)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M246,44 C268,80 292,104 292,138 A46,46 0 0 1 200,138 C200,104 224,80 246,44Z" fill="url(#pa-${kind})"/>
        <ellipse cx="228" cy="132" rx="8" ry="17" fill="#fff" opacity=".45"/>`;
    } else {
      const cyl = (top, hot) => `<rect x="125" y="${top}" width="150" height="40" fill="url(#${hot ? "pah" : "ph"}-${kind})"/>
        <ellipse cx="200" cy="${top + 40}" rx="75" ry="17" fill="url(#${hot ? "pah" : "ph"}-${kind})"/>
        <ellipse cx="200" cy="${top}" rx="75" ry="17" ${hot ? 'fill="#ffd79a"' : `fill="url(#pc-${kind})"`}/>
        <circle cx="250" cy="${top + 28}" r="4.5" style="fill:${hot ? "#fff" : "var(--accent)"}"/><rect x="146" y="${top + 25}" width="44" height="5" rx="2.5" style="fill:${hot ? "#fff" : "var(--clay-lo)"}" opacity=".7"/>`;
      body = cyl(156, false) + cyl(108, false) + cyl(60, true);
    }
    const label = { paper: "Research papers and a language model", health: "Blood drop and medical cross for health data", database: "Stacked databases for data engineering" }[kind] || "";
    return `<svg viewBox="0 0 400 250" role="img" aria-label="${label}">${g}${body}</svg>`;
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    const m = S.marquee.map((w, i) => (i === S.marquee.length - 1 ? `<i>${esc(w)}</i>` : esc(w))).join(" ");
    const xp = S.experience;
    const years = (s) => s.match(/\d{4}/g) || [];
    const span = (arr) => { const ys = arr.flatMap((x) => years(x.when)).map(Number); return `${Math.min(...ys)} — ${Math.max(...ys)}`; };
    const portrait = getPortrait();

    $("#view-home").innerHTML = `
      <div class="marquee bleed" aria-hidden="true"><div class="marquee-track"><span>${m}&nbsp;</span><span>${m}&nbsp;</span></div></div>
      <div class="meta-row">${S.meta.map((x) => `<div><span class="mono">${esc(x.k)}</span><span>${esc(x.v)}</span></div>`).join("")}</div>

      <div class="stage" id="home">
        <div class="intro">
          <h1>${esc(S.intro.hello)}</h1>
          <p>${esc(S.intro.lead)}</p>
          <p>${esc(S.intro.sub)}</p>
          <div class="ctas">
            <a class="btn solid" href="#experience">See my experience ${arrowR}</a>
            <a class="btn" href="${esc(S.github)}" target="_blank" rel="noopener">GitHub ${arrowUR}</a>
          </div>
        </div>
        <div class="studio">
          
          <div class="obj ped"></div>
          <div class="arch" id="portrait">${portrait
            ? `<img src="${esc(portrait)}" alt="Portrait of ${esc(S.name)}" style="object-position:${esc(getPos())}">`
            : `<div class="portrait-empty"><div><div class="head"></div><span class="mono">Portrait</span></div></div>`}</div>
          <div class="obj sph"></div>
          <div class="obj ball"></div>
        </div>
      </div>

      <section class="block" id="about" aria-labelledby="h-about">
        <div class="sec-head"><div class="mono"><span>About</span><span>${esc(S.location)}</span></div><h2 id="h-about">${esc(S.about.heading)}</h2></div>
        <div class="split">
          <div class="skills-head story-head"><svg class="skills-icon" viewBox="0 0 120 110" aria-hidden="true">
            <defs>
              <linearGradient id="bk-l" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--clay-mid)"/><stop offset=".85" style="stop-color:var(--clay-hi)"/><stop offset="1" style="stop-color:var(--clay-mid)"/></linearGradient>
              <linearGradient id="bk-r" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--clay-mid)"/><stop offset=".15" style="stop-color:var(--clay-hi)"/><stop offset="1" style="stop-color:var(--clay-mid)"/></linearGradient>
              <linearGradient id="bk-c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf7d"/><stop offset=".5" style="stop-color:var(--accent)"/><stop offset="1" stop-color="#a63f17"/></linearGradient>
              <radialGradient id="bk-s"><stop offset="0" style="stop-color:var(--shadow)"/><stop offset="1" stop-color="transparent" stop-opacity="0"/></radialGradient>
            </defs>
            <ellipse cx="60" cy="98" rx="50" ry="7" fill="url(#bk-s)"/>
            <path d="M8,72 Q34,64 60,78 Q86,64 112,72 L112,82 Q86,74 60,88 Q34,74 8,82Z" fill="url(#bk-c)"/>
            <path d="M12,40 Q36,30 60,44 L60,82 Q36,68 12,76Z" style="fill:var(--clay-lo)"/>
            <path d="M108,40 Q84,30 60,44 L60,82 Q84,68 108,76Z" style="fill:var(--clay-lo)"/>
            <path d="M14,36 Q37,26 60,40 L60,78 Q37,64 14,72Z" fill="url(#bk-l)"/>
            <path d="M106,36 Q83,26 60,40 L60,78 Q83,64 106,72Z" fill="url(#bk-r)"/>
            <g fill="none" style="stroke:var(--clay-lo)" stroke-width="2.2" stroke-linecap="round" opacity=".8">
              <path d="M22,42 Q36,37 52,44"/><path d="M22,50 Q36,45 52,52"/><path d="M22,58 Q34,54 46,59"/>
              <path d="M68,44 Q84,37 98,42"/><path d="M68,52 Q84,45 98,50"/><path d="M68,60 Q80,55 92,58"/>
            </g>
            <path d="M74,41 v34 l4,-4 l4,4 v-36Z" fill="url(#bk-c)"/>
            <path transform="translate(100 16) scale(.38)" d="M0,-30 C4,-6 6,-4 30,0 C6,4 4,6 0,30 C-4,6 -6,4 -30,0 C-6,-4 -4,-6 0,-30Z" fill="url(#bk-c)"/>
          </svg><h3>My story</h3><span class="mono muted">${esc(S.about.hello)} · <span class="clock num"></span></span></div>
          <div class="about-body">
            <div><p class="lead">${esc(S.about.lead)}</p>${S.about.body.map((b) => `<p>${esc(b)}</p>`).join("")}</div>
            <div class="facts">
              <div><h3>Currently exploring</h3><ul class="iconlist">${S.about.exploring.map((x) => `<li>${ic(x.i)}<span>${esc(x.t)}</span></li>`).join("")}</ul></div>
              <div><h3>Off the clock</h3>${ichips(S.about.interests)}</div>
              <div><h3>Languages</h3><ul>${S.about.languages.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
            </div>
          </div>
        </div>
        <div class="split skills"><div class="skills-head"><svg class="skills-icon" viewBox="0 0 120 110" aria-hidden="true">
            <defs>
              <linearGradient id="sk-a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffd88a"/><stop offset=".5" style="stop-color:var(--accent)"/><stop offset="1" stop-color="#a63f17"/></linearGradient>
              <linearGradient id="sk-c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--clay-hi)"/><stop offset=".6" style="stop-color:var(--clay-mid)"/><stop offset="1" style="stop-color:var(--clay-lo)"/></linearGradient>
              <radialGradient id="sk-s"><stop offset="0" style="stop-color:var(--shadow)"/><stop offset="1" stop-color="transparent" stop-opacity="0"/></radialGradient>
            </defs>
            <ellipse cx="60" cy="98" rx="46" ry="7" fill="url(#sk-s)"/>
            <path d="M60,62 L104,80 L60,98 L16,80Z" fill="url(#sk-c)" opacity=".75"/>
            <path d="M60,44 L104,62 L60,80 L16,62Z" fill="url(#sk-c)"/>
            <path d="M16,62 v5 L60,85 v-5Z" style="fill:var(--clay-lo)"/><path d="M104,62 v5 L60,85 v-5Z" style="fill:var(--clay-mid)"/>
            <path d="M60,22 L104,40 L60,58 L16,40Z" fill="url(#sk-a)"/>
            <path d="M16,40 v5 L60,63 v-5Z" fill="#a63f17"/><path d="M104,40 v5 L60,63 v-5Z" fill="#c9601f"/>
          </svg><h3>Skills</h3><span class="mono muted">What I work with</span></div><div class="toolkit">${S.about.toolkit.map((g) => `<div><span class="mono">${esc(g.k)}</span>${chips(g.v)}</div>`).join("")}</div></div>
      </section>

      <section class="block" id="education" aria-labelledby="h-edu">
        <div class="sec-head"><div class="mono"><span>Education</span><span>${span(S.education)}</span></div><h2 id="h-edu">From Berkeley to NYU</h2></div>
        ${S.education.map((e) => `
          <div class="edu-row">
            <div class="edu-side">${logoTile(e)}<span class="mono edu-when"><b>${esc(e.level)}</b><span class="num">${esc(e.years)}</span></span></div>
            <div class="edu-main">
              <div><span class="mono muted">${esc(e.level)} degree · ${esc(e.when)}</span><h3 style="margin-top:6px">${esc(e.school)}</h3><div class="deg">${e.degrees.map((d) => `<span>${esc(d)}</span>`).join("")}${e.unit ? `<span>${esc(e.unit)}</span>` : ""}</div></div>
              <dl>
                <div><dt>Status</dt><dd>${esc(e.status)}</dd></div>
                <div><dt>Coursework</dt><dd>${esc(e.coursework)}</dd></div>
                ${e.honors ? `<div><dt>Honors</dt><dd>${esc(e.honors)}</dd></div>` : ""}
              </dl>
            </div>
          </div>`).join("")}
      </section>

      <section class="block" id="experience" aria-labelledby="h-xp">
        <div class="sec-head"><div class="mono"><span>Experience</span><span>${xp.length} roles · ${span(xp)}</span></div><h2 id="h-xp">Professional experience</h2></div>
        ${xp.map((x) => `
          <a class="xp" href="#${x.id}" aria-label="${esc(x.company)}: view the full breakdown">
            <div class="xp-logo">${logoTile(x, "lg")}<span class="mono muted">${esc(x.type)}</span></div>
            <div>
              <div class="xp-meta">
                <span class="co">${esc(x.company)}</span>
                <span class="muted">${esc(x.role)}</span>
                <span class="dates num">${esc(x.when)}</span>
              </div>
              <div class="xp-body"><p>${esc(x.summary)}</p><span class="xp-go">Explore further here ${arrowR}</span></div>
            </div>
          </a>`).join("")}
      </section>

      <section class="block" id="client-work" aria-labelledby="h-cw">
        <div class="sec-head"><div class="mono"><span>Consulting</span><span>${S.clients.length} engagements · ${span(S.clients)}</span></div><h2 id="h-cw">Consulting Projects @ Cal</h2></div>
        <div class="cw">
          ${emblem("h")}
          <div>
            <p class="lead" style="font-size:clamp(19px,1.8vw,24px);line-height:1.45;letter-spacing:-.01em">${esc(S.clientIntro)}</p>
            <ul class="cw-list">${S.clients.map((c) => `<li><span>${esc(c.name)}</span><span>${esc(c.sector)}</span><span class="num">${esc(c.year)}</span></li>`).join("")}</ul>
            <div class="ctas"><a class="btn solid" href="#clients">See all consulting projects ${arrowR}</a></div>
          </div>
        </div>
      </section>

      <section class="block" id="projects" aria-labelledby="h-pr">
        <div class="sec-head"><div class="mono"><span>Projects</span><span>Selected from GitHub</span></div><h2 id="h-pr">Just a few technical projects</h2></div>
        <div class="projects">${S.projects.map((p) => `
          <article class="proj">
            <div class="viz icon">${projIcon(p.icon)}</div>
            <div><h3>${esc(p.title)}</h3><span class="muted">${esc(p.sub)}</span></div>
            <span class="stack mono">${esc(p.stack)}</span>
            <p>${esc(p.text)}</p>
            <div class="metrics">${p.metrics.map((m) => `<span class="chip num">${esc(m)}</span>`).join("")}</div>
            <a class="btn gh" href="${esc(p.url)}" target="_blank" rel="noopener">View on GitHub ${arrowUR}</a>
          </article>`).join("")}
        </div>
        <div class="gh-all"><span class="muted">Code, notebooks, and write-ups live on GitHub.</span><a class="btn" href="${esc(S.github)}" target="_blank" rel="noopener">github.com/jamesjxlin-git ${arrowUR}</a></div>
      </section>

      <section class="contact" id="contact" aria-labelledby="h-ct">
        <span class="mono contact-kicker">Thanks for stopping by</span><h2 id="h-ct">Feel free to connect with me!</h2>
        <div class="contact-row">
          <div><span class="mono muted">Email</span><span class="val" id="email-val">${esc(S.contact.email)}</span><button class="copy" type="button" data-copy="${esc(S.contact.email)}" data-label="Copy email">Copy email</button></div>
          <div><span class="mono muted">LinkedIn</span><span class="val"><a href="${esc(S.contact.linkedin)}" target="_blank" rel="noopener">in/jamesjxlin</a></span></div>
          <div><span class="mono muted">GitHub</span><span class="val"><a href="${esc(S.contact.github)}" target="_blank" rel="noopener">jamesjxlin-git</a></span></div>
        </div>
      </section>`;
  }

  /* ---------- DETAIL ---------- */
  function renderDetail(id) {
    const list = S.experience, i = list.findIndex((x) => x.id === id), x = list[i];
    const prev = list[(i - 1 + list.length) % list.length], next = list[(i + 1) % list.length];
    const slides = (window.SLIDES[id] ? window.SLIDES[id]() : []);
    $("#view-detail").innerHTML = `
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#experience">${arrowL} Overview</a><span>/</span><span>Experience</span><span>/</span><span>${esc(x.company)}</span></nav>
      <div class="d-head"><h1 class="d-title">${esc(x.company)}</h1></div>
      <div class="meta-row">
        <div><span class="mono">Role</span><span>${esc(x.role)}</span></div>
        <div><span class="mono">Dates</span><span class="num">${esc(x.when)}</span></div>
        <div><span class="mono">Location</span><span>${esc(x.where)}</span></div>
        <div><span class="mono">Type</span><span>${esc(x.type)} · ${esc(x.sector)}</span></div>
      </div>
      <div class="d-intro">
        <div>${logoTile(x, "xl")}</div>
        <div>
          <p class="lead">${esc(x.lead)}</p>
          <div class="kpis">${x.kpis.map(([n, l]) => `<div><b>${esc(n)}</b><span>${esc(l)}</span></div>`).join("")}</div>
        </div>
      </div>
      <section class="d-sec" aria-labelledby="h-did">
        <div class="split"><span class="mono muted">Breakdown</span><h2 id="h-did">What I did</h2></div>
        <div class="themes">${x.themes.map((th) => `<div class="theme"><h3>${esc(th.t)}</h3><p>${esc(th.d)}</p><ul>${th.b.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div>`).join("")}</div>
        <div class="tools">${x.tools.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      </section>
      <section class="d-sec" aria-labelledby="h-ws">
        <div class="split"><span class="mono muted">${slides.length} slides</span><div><h2 id="h-ws">Work samples</h2></div></div>
        <p class="note" style="padding-top:16px">Concept mock-ups I recreated to show the kind of analysis I did. Much of this work is under NDA, so every name and number on these slides is illustrative and none of it is client material. Select a slide to enlarge it.</p>
        <div class="slides">${slides.map((s, k) => `
          <figure class="sl"><button type="button" data-slide="${k}" aria-label="Enlarge slide ${k + 1}: ${esc(s.cap)}">${s.svg}</button>
          <figcaption><span class="mono">Fig. ${k + 1}</span><span>${esc(s.cap)}</span></figcaption></figure>`).join("")}</div>
      </section>
      <nav class="pager" aria-label="More roles">
        <a href="#${prev.id}"><span class="mono">← Previous role</span><b>${esc(prev.company)}</b></a>
        <a href="#${next.id}"><span class="mono">Next role →</span><b>${esc(next.company)}</b></a>
      </nav>`;
    currentSlides = slides;
  }

  /* ---------- CLIENT WORK ---------- */
  function renderClients() {
    $("#view-clients").innerHTML = `
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#client-work">${arrowL} Overview</a><span>/</span><span>Consulting Projects @ Cal</span></nav>
      <div class="d-head"><h1 class="d-title">Consulting Projects @ Cal</h1></div>
      <div class="d-intro">
        ${emblem("c")}
        <div><p class="lead">${esc(S.clientIntro)}</p>
          <div class="kpis">
            <div><b>${S.clients.length}</b><span>client engagements</span></div>
            <div><b>2023 — 24</b><span>while studying at Berkeley</span></div>
          </div></div>
      </div>
      ${S.clients.map((c) => `
        <article class="cl-row">
          <div class="cl-left">${logoTile(c)}<span class="mono"><span class="num">${esc(c.when)}</span><span>${esc(c.sector)}</span></span></div>
          <div class="cl-main">
            <div><h3>${esc(c.name)}</h3><div class="role">${esc(c.role)}</div></div>
            <p>${esc(c.text)}</p>
          </div>
        </article>`).join("")}
      <section class="d-sec" aria-labelledby="h-lead">
        <div class="split"><span class="mono muted">On campus</span><h2 id="h-lead">Leadership</h2></div>
        ${S.leadership.map((l) => `
          <article class="cl-row">
            <div class="cl-left"><span class="mono"><span class="num">${esc(l.when)}</span></span></div>
            <div class="cl-main"><div><h3>${esc(l.org)}</h3><div class="role">${esc(l.role)}</div></div><p>${esc(l.text)}</p></div>
          </article>`).join("")}
      </section>
      <nav class="pager" aria-label="Continue">
        <a href="#experience"><span class="mono">← Back to</span><b>Professional experience</b></a>
        <a href="#projects"><span class="mono">Next →</span><b>Technical projects</b></a>
      </nav>`;
  }

  /* ---------- portrait (editable) ---------- */
  const LS = "jl-portrait-v1";
  function store() { try { return JSON.parse(localStorage.getItem(LS) || "null") || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(LS, JSON.stringify(o)); } catch (e) {} }
  function getPortrait() {
    const o = store();
    if (o.src) return o.src;
    return S.portrait && S.portrait !== "__PORTRAIT__" ? S.portrait : "";
  }
  function getPos() { return store().pos || S.portraitPosition || "50% 30%"; }
  function editor() {
    if ($(".editor")) return;
    const p = getPos().split(" ").map((v) => parseFloat(v));
    const el = document.createElement("div");
    el.className = "editor";
    el.innerHTML = `<strong>Edit portrait</strong>
      <label for="ed-file">Choose a photo<input id="ed-file" type="file" accept="image/*"></label>
      <label for="ed-x">Horizontal focus <input id="ed-x" type="range" min="0" max="100" value="${p[0] || 50}"></label>
      <label for="ed-y">Vertical focus <input id="ed-y" type="range" min="0" max="100" value="${p[1] || 30}"></label>
      <span class="muted">Saved in this browser only. To change it for everyone, replace <code>assets/portrait.jpg</code> and set <code>portraitPosition</code> in <code>content.js</code> to <code id="ed-pos">"${esc(getPos())}"</code>.</span>
      <div style="display:flex;gap:8px"><button class="btn" type="button" id="ed-reset">Reset</button><a class="btn" href="#home">Done</a></div>`;
    document.body.appendChild(el);
    const apply = () => {
      const pos = `${$("#ed-x").value}% ${$("#ed-y").value}%`;
      const o = store(); o.pos = pos; save(o);
      $("#ed-pos").textContent = `"${pos}"`;
      const img = $("#portrait img"); if (img) img.style.objectPosition = pos;
    };
    $("#ed-x").addEventListener("input", apply); $("#ed-y").addEventListener("input", apply);
    $("#ed-file").addEventListener("change", (e) => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        const im = new Image();
        im.onload = () => { // downscale so it fits in browser storage
          const k = Math.min(1, 1100 / Math.max(im.width, im.height)), cv = document.createElement("canvas");
          cv.width = im.width * k; cv.height = im.height * k; cv.getContext("2d").drawImage(im, 0, 0, cv.width, cv.height);
          const o = store(); o.src = cv.toDataURL("image/jpeg", .86); save(o); renderHome(); clock();
        };
        im.src = rd.result;
      };
      rd.readAsDataURL(f);
    });
    $("#ed-reset").addEventListener("click", () => { try { localStorage.removeItem(LS); } catch (e) {} renderHome(); clock(); location.hash = "edit"; el.remove(); editor(); });
  }

  /* ---------- routing ---------- */
  const ids = S.experience.map((x) => x.id);
  function show(which) { ["home", "detail", "clients"].forEach((v) => { $("#view-" + v).hidden = v !== which; }); }
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    if (h !== "edit") { const ed = $(".editor"); if (ed) ed.remove(); }
    if (ids.includes(h)) { renderDetail(h); show("detail"); window.scrollTo(0, 0); document.title = `${S.experience.find((x) => x.id === h).company} · James Lin`; return; }
    document.title = "James Lin";
    if (h === "clients") { renderClients(); show("clients"); window.scrollTo(0, 0); document.title = "Consulting Projects @ Cal · James Lin"; return; }
    const wasHidden = $("#view-home").hidden;
    show("home");
    if (h === "edit") editor();
    const target = h && h !== "home" && h !== "edit" ? document.getElementById(h) : null;
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: wasHidden ? "auto" : "smooth" }));
    else if (h === "home" || wasHidden) window.scrollTo(0, 0);
    closeMenu();
  }

  /* ---------- lightbox ---------- */
  let currentSlides = [], cur = 0;
  const lb = $("#lightbox");
  function openSlide(k) {
    cur = (k + currentSlides.length) % currentSlides.length;
    $(".lb-svg", lb).innerHTML = currentSlides[cur].svg;
    $(".lb-cap", lb).textContent = `Fig. ${cur + 1} · ${currentSlides[cur].cap}`;
    if (!lb.open) { try { lb.showModal(); } catch (e) { lb.setAttribute("open", ""); } }
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-slide]"); if (b) openSlide(+b.dataset.slide);
    const a = e.target.closest("[data-lb]");
    if (a) { const v = a.dataset.lb; if (v === "close") lb.close(); else openSlide(cur + (v === "next" ? 1 : -1)); }
    if (e.target === lb) lb.close();
    const cp = e.target.closest("[data-copy]");
    if (cp) {
      const tgt = cp.querySelector("[data-tip]") || cp, label = cp.dataset.label || "Copy";
      const done = () => { tgt.textContent = "Copied"; setTimeout(() => (tgt.textContent = label), 1600); };
      const fallback = () => { const r = document.createRange(); r.selectNodeContents($("#email-val")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); tgt.textContent = "Press ⌘C"; };
      try { navigator.clipboard.writeText(cp.dataset.copy).then(done, fallback); } catch (err) { fallback(); }
    }
  });
  document.addEventListener("keydown", (e) => { if (lb.open && (e.key === "ArrowRight" || e.key === "ArrowLeft")) openSlide(cur + (e.key === "ArrowRight" ? 1 : -1)); });

  /* ---------- menu + clock ---------- */
  const btn = $(".menu-btn"), nav = $("#site-nav");
  function closeMenu() { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
  btn.addEventListener("click", () => { const o = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", String(o)); });
  nav.addEventListener("click", closeMenu);
  const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: S.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
  function clock() { const s = "NYC " + fmt.format(new Date()); document.querySelectorAll(".clock").forEach((c) => (c.textContent = s)); }

  $('[data-js="tagline"]').textContent = S.tagline;
  $('[data-js="loc"]').textContent = S.location;
  renderHome(); clock(); setInterval(clock, 1000);
  window.addEventListener("hashchange", route);
  route();
})();
