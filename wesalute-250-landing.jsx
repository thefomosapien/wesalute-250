import { useEffect, useState } from "react";

// ────────────────────────────────────────────────────────────────────
//  WeSalute 250 · Landing Page
//  250 Years of Service. One Real Thank You.
//  Companion artifact to DSGN-185 · v1
// ────────────────────────────────────────────────────────────────────

const c = {
  // WeSalute brand
  slate: "#001E33",        // brand anchor
  slateDeep: "#000F1C",
  slateMid: "#0B2842",
  slateLine: "#163756",
  gold: "#FFC43E",         // brand gold — WeSalute differentiator
  goldDeep: "#C9922A",
  goldPale: "#F5D98A",
  mint: "#B5DFD0",         // brand mint — WeSalute differentiator
  mintLight: "#DAEEE7",
  cream: "#F4F0E6",
  paper: "#F7F1DF",        // warmer cream for heritage moments
  // America 250 co-brand palette
  americaNavy: "#1B2A4E",  // patriotic navy from the official mark
  americaRed: "#B5152D",   // patriotic red from the official mark
  americaRedDeep: "#8E1023",
  // Utility
  gray: "#8A97A8",
  white: "#FFFFFF",
};

// ── Type styles ─────────────────────────────────────────────────────
const display = "'Fraunces', 'Playfair Display', Georgia, serif";
const condensed = "'Barlow Condensed', 'Oswald', sans-serif";
const body = "'Barlow', 'Helvetica Neue', sans-serif";
const mono = "'JetBrains Mono', 'Courier New', monospace";

// ── Reusable atoms ──────────────────────────────────────────────────
const Eyebrow = ({ children, color = c.gold, style = {} }) => (
  <div style={{
    fontFamily: mono,
    fontSize: "11px",
    letterSpacing: "0.32em",
    color,
    textTransform: "uppercase",
    fontWeight: 600,
    display: "inline-flex",
    alignItems: "center",
    gap: "12px",
    ...style,
  }}>
    <span style={{ display: "inline-block", width: "28px", height: "1px", background: color, opacity: 0.6 }} />
    {children}
  </div>
);

const SectionTitle = ({ children, color = c.cream, size = "clamp(2.6rem, 5vw, 4.5rem)" }) => (
  <h2 style={{
    fontFamily: display,
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: size,
    lineHeight: 1.02,
    letterSpacing: "-0.025em",
    color,
    margin: "16px 0 0",
  }}>{children}</h2>
);

const Italic = ({ children, color = c.gold }) => (
  <span style={{ fontStyle: "italic", fontWeight: 400, color }}>{children}</span>
);

// ── Decorative star (used sparingly) ────────────────────────────────
const Star = ({ size = 16, color = c.gold, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden>
    <path d="M12 2L14.39 8.26L21 9L16 13.74L17.18 20.5L12 17.27L6.82 20.5L8 13.74L3 9L9.61 8.26L12 2Z"
      fill={color} />
  </svg>
);

// ── 1776 / 2026 Crest ───────────────────────────────────────────────
const Crest = ({ size = 280 }) => (
  <svg width={size} height={size} viewBox="0 0 320 320" aria-label="1776 / 2026 Crest">
    {/* Outer ring */}
    <circle cx="160" cy="160" r="155" fill="none" stroke={c.gold} strokeWidth="1" opacity="0.5" />
    <circle cx="160" cy="160" r="140" fill="none" stroke={c.gold} strokeWidth="2" />
    <circle cx="160" cy="160" r="120" fill="none" stroke={c.gold} strokeWidth="0.5" opacity="0.4" />

    {/* Curved upper text */}
    <defs>
      <path id="topArc" d="M 40 160 A 120 120 0 0 1 280 160" />
      <path id="bottomArc" d="M 280 160 A 120 120 0 0 1 40 160" />
    </defs>
    <text fill={c.gold} style={{ fontFamily: condensed, fontSize: 14, letterSpacing: "0.42em", fontWeight: 700 }}>
      <textPath href="#topArc" startOffset="50%" textAnchor="middle">250 YEARS OF SERVICE</textPath>
    </text>
    <text fill={c.gold} style={{ fontFamily: condensed, fontSize: 12, letterSpacing: "0.4em", fontWeight: 600 }} opacity="0.85">
      <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">ONE REAL THANK YOU</textPath>
    </text>

    {/* Center — 1776 / 2026 lockup */}
    <text x="160" y="138" textAnchor="middle" fill={c.cream}
      style={{ fontFamily: display, fontSize: 42, fontWeight: 700, letterSpacing: "-0.01em" }}>
      1776
    </text>

    {/* Star divider */}
    <g transform="translate(160, 162)">
      <line x1="-38" y1="0" x2="-12" y2="0" stroke={c.gold} strokeWidth="1" />
      <line x1="38" y1="0" x2="12" y2="0" stroke={c.gold} strokeWidth="1" />
      <Star size={12} color={c.gold} style={{ transform: "translate(-6px, -6px)" }} />
    </g>
    <path d="M 154 156 L 160 150 L 166 156 L 162 162 L 158 162 Z" fill={c.gold} transform="translate(0, 4)" />

    <text x="160" y="200" textAnchor="middle" fill={c.cream}
      style={{ fontFamily: display, fontSize: 42, fontWeight: 700, letterSpacing: "-0.01em" }}>
      2026
    </text>

    {/* Bottom mint accent */}
    <line x1="120" y1="220" x2="200" y2="220" stroke={c.mint} strokeWidth="1.5" />
    <text x="160" y="240" textAnchor="middle" fill={c.mint}
      style={{ fontFamily: condensed, fontSize: 11, letterSpacing: "0.36em", fontWeight: 700 }}>
      WESALUTE
    </text>

    {/* 7 small stars representing the 7 service communities */}
    {[0, 1, 2, 3, 4, 5, 6].map(i => {
      const angle = (i / 7) * Math.PI * 2 - Math.PI / 2;
      const x = 160 + Math.cos(angle) * 105;
      const y = 160 + Math.sin(angle) * 105;
      return (
        <g key={i} transform={`translate(${x - 5}, ${y - 5})`}>
          <Star size={10} color={c.gold} />
        </g>
      );
    })}
  </svg>
);

// ── America 250 Logo Mark (faithful SVG recreation of the official mark) ──
// Swap in the actual PNG/SVG asset when deployed.
const America250Logo = ({ size = 420, bg = c.cream }) => {
  // Star path (24×24 → scaled)
  const starPath = (s) => {
    const k = s / 24;
    return `M ${12*k} ${2*k} L ${14.39*k} ${8.26*k} L ${21*k} ${9*k} L ${16*k} ${13.74*k} L ${17.18*k} ${20.5*k} L ${12*k} ${17.27*k} L ${6.82*k} ${20.5*k} L ${8*k} ${13.74*k} L ${3*k} ${9*k} L ${9.61*k} ${8.26*k} Z`;
  };

  // Arc of stars across the top — 9 stars, biggest in center
  const topStars = [
    { x: 130, y: 80, s: 14 },
    { x: 170, y: 55, s: 17 },
    { x: 215, y: 38, s: 20 },
    { x: 260, y: 28, s: 22 },
    { x: 305, y: 32, s: 22 },
    { x: 350, y: 42, s: 20 },
    { x: 395, y: 58, s: 17 },
    { x: 435, y: 80, s: 14 },
  ];

  return (
    <svg width={size} height={size * 0.96} viewBox="0 0 500 480" aria-label="America 250 — One Nation. 250 Years of Service.">
      {/* Subtle background panel for legibility on dark backgrounds */}
      <rect x="0" y="0" width="500" height="480" fill={bg} rx="2" />

      {/* Arc of stars */}
      {topStars.map((star, i) => (
        <path key={i}
          d={starPath(star.s)}
          fill={c.americaNavy}
          transform={`translate(${star.x - star.s/2}, ${star.y - star.s/2})`} />
      ))}

      {/* "AMERICA" wordmark */}
      <text x="250" y="180" textAnchor="middle"
        fill={c.americaNavy}
        style={{ fontFamily: display, fontSize: "78px", fontWeight: 700, letterSpacing: "0.04em" }}>
        AMERICA
      </text>

      {/* 1776 ★ 2026 row with red flanking bars */}
      <line x1="95" y1="218" x2="175" y2="218" stroke={c.americaRed} strokeWidth="2.5" />
      <text x="195" y="226" fill={c.americaRed}
        style={{ fontFamily: display, fontSize: "24px", fontWeight: 700, letterSpacing: "0.06em" }}>
        1776
      </text>
      <path d={starPath(14)} fill={c.americaNavy} transform="translate(243, 212)" />
      <text x="288" y="226" fill={c.americaRed}
        style={{ fontFamily: display, fontSize: "24px", fontWeight: 700, letterSpacing: "0.06em" }}>
        2026
      </text>
      <line x1="325" y1="218" x2="405" y2="218" stroke={c.americaRed} strokeWidth="2.5" />

      {/* THE BIG "250" — navy 2, red 5, navy 0 */}
      <text x="125" y="395" fill={c.americaNavy}
        style={{ fontFamily: display, fontSize: "220px", fontWeight: 800, letterSpacing: "-0.04em" }}>
        2
      </text>
      <text x="230" y="395" fill={c.americaRed}
        style={{ fontFamily: display, fontSize: "220px", fontWeight: 800, letterSpacing: "-0.04em" }}>
        5
      </text>
      <text x="335" y="395" fill={c.americaNavy}
        style={{ fontFamily: display, fontSize: "220px", fontWeight: 800, letterSpacing: "-0.04em" }}>
        0
      </text>

      {/* Flag ribbon under the 250 — sweeping red stripes */}
      <path
        d="M 90 410 Q 220 380 410 395 Q 350 425 90 420 Z"
        fill={c.americaRed} opacity="0.95" />
      <path
        d="M 130 420 Q 260 400 425 410 Q 380 430 130 430 Z"
        fill={c.americaRed} opacity="0.75" />

      {/* Navy field with stars (left side of ribbon) */}
      <path
        d="M 75 405 Q 130 412 175 408 L 165 432 Q 110 426 75 422 Z"
        fill={c.americaNavy} />
      <path d={starPath(8)} fill={c.cream} transform="translate(92, 412)" />
      <path d={starPath(8)} fill={c.cream} transform="translate(115, 414)" />
      <path d={starPath(8)} fill={c.cream} transform="translate(138, 415)" />

      {/* Bottom tagline with red dashes */}
      <line x1="40" y1="460" x2="120" y2="460" stroke={c.americaRed} strokeWidth="2" />
      <text x="250" y="466" textAnchor="middle" fill={c.americaNavy}
        style={{ fontFamily: condensed, fontSize: "15px", letterSpacing: "0.14em", fontWeight: 700 }}>
        ONE NATION. 250 YEARS OF SERVICE.
      </text>
      <line x1="380" y1="460" x2="460" y2="460" stroke={c.americaRed} strokeWidth="2" />
    </svg>
  );
};

// Compact horizontal lockup for nav/footer (250 mark + WESALUTE)
const CoBrandLockup = ({ height = 28, color = c.cream }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: "14px" }}>
    <svg width={height * 1.3} height={height} viewBox="0 0 60 46" aria-hidden>
      <text x="2" y="34" fill={c.americaNavy === "#1B2A4E" ? color : c.americaNavy}
        style={{ fontFamily: display, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.04em" }}>
        2
      </text>
      <text x="22" y="34" fill={c.americaRed}
        style={{ fontFamily: display, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.04em" }}>
        5
      </text>
      <text x="42" y="34" fill={c.americaNavy === "#1B2A4E" ? color : c.americaNavy}
        style={{ fontFamily: display, fontSize: "32px", fontWeight: 800, letterSpacing: "-0.04em" }}>
        0
      </text>
    </svg>
    <div style={{ width: "1px", height: `${height * 0.7}px`, background: color, opacity: 0.3 }} />
    <span style={{
      fontFamily: condensed, fontWeight: 900,
      fontSize: `${height * 0.45}px`, letterSpacing: "0.32em",
      color: c.gold,
    }}>WESALUTE</span>
  </div>
);
const StarField = ({ count = 60, opacity = 0.18 }) => (
  <div style={{
    position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none",
  }}>
    {Array.from({ length: count }).map((_, i) => {
      const size = Math.random() < 0.85 ? 1 : 2;
      return (
        <div key={i} style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          background: c.gold,
          borderRadius: "50%",
          opacity: opacity * (0.4 + Math.random() * 0.6),
          boxShadow: size === 2 ? `0 0 4px ${c.gold}` : "none",
        }} />
      );
    })}
  </div>
);

// ── Timeline Data ───────────────────────────────────────────────────
const timeline = [
  {
    year: "1775",
    nation: "The Shot Heard 'Round The World",
    nationBody: "Capt. John Parker assembles a militia on Lexington Green and fires the opening volley of the American Revolution. A country built on service begins.",
    weSalute: null,
  },
  {
    year: "1863",
    nation: "Gettysburg",
    nationBody: "Lincoln delivers 272 words that redefine what the nation is for: the unfinished work of the people who served and sacrificed to advance it.",
    weSalute: "Generations later, Scott and Lin Higgins would gift the Borough of Gettysburg its first statue of President Lincoln delivering the address — closing a personal loop with the country's founding.",
  },
  {
    year: "1967–68",
    nation: "Vietnam",
    nationBody: "A generation comes home to a country that wants to forget the war. The veterans of that era are met with no parades, no welcome, no thanks.",
    weSalute: "Scott Higgins serves as a 2nd Lieutenant, U.S. Army, II Field Force. He returns to American soil without ceremony. Direct descendant of Capt. John Parker — the through-line from Lexington to Saigon runs through one family.",
  },
  {
    year: "1981–85",
    nation: "\"It's Time.\"",
    nationBody: "New York City prepares its overdue welcome home. A 100-member commission is built to honor a generation the country had let down.",
    weSalute: "Mayor Ed Koch asks Scott Higgins to spearhead the NYC Vietnam Veterans Memorial Commission. He co-chairs for five years. The commission builds NYC's first Vietnam Veterans Memorial, organizes the largest parade in city history, establishes a jobs program, and publishes Dear America: Letters Home from Vietnam — later an Emmy-winning HBO film seen by 75 million people.",
  },
  {
    year: "1999",
    nation: "A New Mission Begins",
    nationBody: "On the eve of a new century, the question is reframed: how do we say thank you every day — not just on a holiday?",
    weSalute: "Scott and Lin Higgins found Veterans Advantage as a Public Benefit Corporation. The mission: a real thank you, every day, through partnerships with America's leading brands. The first program of its kind.",
  },
  {
    year: "2001",
    nation: "A Country After 9/11",
    nationBody: "A new generation enlists. A new era of service begins. So does a new era of risk — including identity theft for those whose service makes them targets.",
    weSalute: "Launch of the WeSalute+ ID Card — the first universal military identification card built to protect veterans' privacy. Over 2.5 million issued to date.",
  },
  {
    year: "2012",
    nation: "Veterans Week NYC",
    nationBody: "New York City establishes a dedicated week to honor those who served. The proclamation makes it official.",
    weSalute: "WeSalute founds Veterans Week NYC by mayoral proclamation. The WeSalute+ ID Card becomes its Official Card.",
  },
  {
    year: "2020s",
    nation: "Service, Redefined",
    nationBody: "Pandemic. Wildfires. Hurricanes. School shootings. The country sees, in real time, that service is not one uniform — it's seven.",
    weSalute: "WeSalute expands beyond military and veterans to honor all seven service communities: military and veterans, nurses, medical professionals, first responders, teachers, civil servants, and students.",
  },
  {
    year: "2026",
    nation: "America Turns 250",
    nationBody: "The Semiquincentennial. A bipartisan effort — Bush and Obama as honorary co-chairs — to engage all 350 million Americans in the meaning of 250 years.",
    weSalute: "WeSalute marks the moment the only way we know how: by honoring everyone whose service made it possible. Six weeks. One collection. 250 numbered shirts. One real thank you.",
  },
];

// ── Service Groups ──────────────────────────────────────────────────
const communities = [
  { name: "Military & Veterans", desc: "All six branches, plus the ones who served before, during, and after.", since: "Since 1775" },
  { name: "Nurses", desc: "ICU, ER, NICU, OR, PEDS — and every shift that ends at 0700.", since: "Every shift" },
  { name: "First Responders", desc: "Police, fire, EMS, dispatch. The first call, every time.", since: "Every call" },
  { name: "Medical Professionals", desc: "Doctors, PAs, NPs, techs. The decade-long credential.", since: "Every patient" },
  { name: "Teachers", desc: "K–12 and higher ed. The lesson plan that doesn't end at 3 PM.", since: "Every classroom" },
  { name: "Civil Servants", desc: "Federal, state, local, USPS, public works. The quiet work.", since: "Every day" },
  { name: "Students", desc: "JROTC, ROTC, military families. The next generation, already serving.", since: "The next 250" },
];

// ── Merch Collection ────────────────────────────────────────────────
const merchOpen = [
  {
    name: "1776 / 2026 Heritage Tee",
    type: "Hero piece",
    desc: "Heavyweight garment-dyed tee. Embossed crest with letterpress texture. 1776 left of the WeSalute mark. 2026 right. Built to last.",
    price: "$48",
    tag: "Open Collection",
  },
  {
    name: "Service Through The Centuries Tee",
    type: "Cross-community hero",
    desc: "Seven service marks arranged in a single medallion. The visual proof that service has been America's through-line for 250 years.",
    price: "$48",
    tag: "Open Collection",
  },
  {
    name: "Block Party Pack",
    type: "July 4 bundle",
    desc: "Heritage tee, embroidered 250 cap, koozie, four-sticker pack, kraft gift box. Hosting the block party — bring everything but the grill.",
    price: "$115",
    tag: "Bundle",
  },
];

const merch250 = {
  name: "The 250 Numbered Edition",
  type: "Limited to 250",
  desc: "Premium 14oz garment-dyed pullover hoodie. Embroidered front crest. Individually numbered hangtag, 1 of 250 through 250 of 250. When they're gone, they're gone — and they will be gone.",
  price: "$145",
};

const merchMember = {
  name: "WeSalute+ 250 Member Edition",
  type: "Members only",
  desc: "Hard-enamel pin and embroidered patch set. Antique gold, heritage navy, cream. Numbered tin packaging. Reserved for verified WeSalute+ members. Not sold to non-members.",
  price: "$45",
};

// ── Component ───────────────────────────────────────────────────────
export default function WeSalute250Landing() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      background: c.slate,
      color: c.cream,
      fontFamily: body,
      minHeight: "100vh",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500;1,9..144,600&family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${c.slate}; }
        ::-webkit-scrollbar-thumb { background: ${c.goldDeep}; }

        @keyframes float-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.85; }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .reveal { animation: float-in 1s ease-out backwards; }
        .reveal-1 { animation-delay: 0.1s; }
        .reveal-2 { animation-delay: 0.25s; }
        .reveal-3 { animation-delay: 0.4s; }
        .reveal-4 { animation-delay: 0.55s; }
        .glow { animation: glow-pulse 4s ease-in-out infinite; }

        .hover-lift { transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s; }
        .hover-lift:hover { transform: translateY(-4px); }

        .merch-card {
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .merch-card:hover {
          transform: translateY(-6px);
          border-color: ${c.gold}aa !important;
        }
        .merch-card:hover .merch-mark { transform: scale(1.08); }

        button.cta {
          font-family: ${condensed};
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 18px 36px;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }
        button.cta-gold {
          background: ${c.gold};
          color: ${c.slate};
        }
        button.cta-gold:hover {
          background: ${c.goldPale};
          transform: translateY(-1px);
          box-shadow: 0 8px 24px ${c.gold}44;
        }
        button.cta-ghost {
          background: transparent;
          color: ${c.cream};
          border: 1px solid ${c.cream}44;
        }
        button.cta-ghost:hover {
          border-color: ${c.gold};
          color: ${c.gold};
        }

        .heritage-paper {
          background:
            radial-gradient(ellipse at 30% 20%, rgba(255, 196, 62, 0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(181, 223, 208, 0.03) 0%, transparent 50%),
            ${c.slate};
        }

        .underline-mint {
          background-image: linear-gradient(${c.mint}, ${c.mint});
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 100% 2px;
          padding-bottom: 2px;
        }

        @media (max-width: 880px) {
          .timeline-row { grid-template-columns: 1fr !important; }
          .timeline-side-right { order: 2; }
          .timeline-side-left { order: 1; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .merch-grid-3 { grid-template-columns: 1fr !important; }
          .seven-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* TOP NAV — minimalist                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrollY > 80 ? `${c.slateDeep}ee` : "transparent",
        backdropFilter: scrollY > 80 ? "blur(12px)" : "none",
        borderBottom: scrollY > 80 ? `1px solid ${c.slateLine}` : "1px solid transparent",
        transition: "all 0.3s",
        padding: "16px 32px",
      }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <CoBrandLockup height={26} color={c.cream} />
            <span style={{ color: c.slateLine, fontSize: "14px", marginLeft: "4px" }}>|</span>
            <span style={{
              fontFamily: mono, fontSize: "11px", letterSpacing: "0.24em",
              color: c.mint, textTransform: "uppercase",
            }}>The Campaign</span>
          </div>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {["Story", "Communities", "Travel Cash", "Collection"].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, "-")}`} style={{
                color: c.cream, textDecoration: "none",
                fontFamily: condensed, fontSize: "13px",
                fontWeight: 600, letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.75,
                transition: "opacity 0.2s, color 0.2s",
              }}
                onMouseEnter={e => { e.target.style.opacity = "1"; e.target.style.color = c.gold; }}
                onMouseLeave={e => { e.target.style.opacity = "0.75"; e.target.style.color = c.cream; }}
              >
                {item}
              </a>
            ))}
            <button className="cta cta-gold" style={{ padding: "12px 24px", fontSize: "12px" }}>
              Shop The Collection
            </button>
          </div>
        </div>
      </nav>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* HERO                                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        padding: "140px 32px 100px",
        background: `
          radial-gradient(ellipse at 75% 30%, ${c.slateMid} 0%, ${c.slate} 50%, ${c.slateDeep} 100%)
        `,
        overflow: "hidden",
      }}>
        <StarField count={80} opacity={0.22} />

        {/* Decorative arc behind crest */}
        <div style={{
          position: "absolute",
          right: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          border: `1px solid ${c.gold}22`,
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          right: "-300px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "1100px",
          height: "1100px",
          borderRadius: "50%",
          border: `1px solid ${c.gold}11`,
          pointerEvents: "none",
        }} />

        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.3fr 1fr",
          gap: "80px", alignItems: "center",
          position: "relative", zIndex: 2,
        }} className="hero-grid">
          <div>
            <div className="reveal reveal-1">
              <Eyebrow color={c.mint}>WeSalute × America 250 · Exclusive Collaboration</Eyebrow>
            </div>

            <h1 className="reveal reveal-2" style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(3.2rem, 7vw, 6.2rem)",
              lineHeight: 0.96,
              letterSpacing: "-0.035em",
              color: c.cream,
              margin: "28px 0 24px",
            }}>
              250 Years <Italic color={c.mint}>of</Italic> Service.<br />
              One Real <Italic color={c.gold}>Thank You.</Italic>
            </h1>

            <p className="reveal reveal-3" style={{
              fontSize: "1.15rem",
              lineHeight: 1.65,
              color: c.cream,
              opacity: 0.82,
              maxWidth: "540px",
              margin: "0 0 40px",
            }}>
              Every other brand will print "250" on a tee. We earned it.
              For every one of America's first 250 years, this country has been built by
              people who serve. WeSalute has spent its history saying so.
            </p>

            <div className="reveal reveal-4" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button className="cta cta-gold">
                Shop The Collection
                <span style={{ fontFamily: display, fontSize: "16px" }}>→</span>
              </button>
              <button className="cta cta-ghost">
                Claim $250 Travel Cash
              </button>
            </div>

            {/* Stats strip */}
            <div className="reveal reveal-4" style={{
              marginTop: "72px",
              paddingTop: "32px",
              borderTop: `1px solid ${c.slateLine}`,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}>
              {[
                ["250", "Numbered shirts"],
                ["7", "Communities of service"],
                ["3M+", "WeSalute members"],
                ["1", "Real Thank You®"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div style={{
                    fontFamily: display, fontWeight: 700,
                    fontSize: "2.2rem", color: c.gold,
                    lineHeight: 1, marginBottom: "8px",
                  }}>{n}</div>
                  <div style={{
                    fontFamily: mono, fontSize: "10px",
                    letterSpacing: "0.2em", color: c.mint,
                    textTransform: "uppercase",
                  }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-2" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            gap: "28px",
          }}>
            <div className="glow" style={{
              position: "absolute",
              width: "440px", height: "440px",
              background: `radial-gradient(circle, ${c.gold}1f 0%, transparent 60%)`,
              filter: "blur(20px)",
              pointerEvents: "none",
            }} />

            {/* The official America 250 mark — anchored on a paper card with WeSalute lockup */}
            <div style={{
              padding: "24px 24px 20px",
              background: c.cream,
              boxShadow: `0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px ${c.gold}33`,
              position: "relative",
              zIndex: 2,
            }}>
              {/* Corner ornaments */}
              {[[0, 0], [1, 0], [0, 1], [1, 1]].map(([x, y], i) => (
                <div key={i} style={{
                  position: "absolute",
                  ...(x === 0 ? { left: "10px" } : { right: "10px" }),
                  ...(y === 0 ? { top: "10px" } : { bottom: "10px" }),
                  width: "14px", height: "14px",
                  borderTop: y === 0 ? `1.5px solid ${c.americaRed}` : "none",
                  borderBottom: y === 1 ? `1.5px solid ${c.americaRed}` : "none",
                  borderLeft: x === 0 ? `1.5px solid ${c.americaRed}` : "none",
                  borderRight: x === 1 ? `1.5px solid ${c.americaRed}` : "none",
                  zIndex: 2,
                }} />
              ))}
              <America250Logo size={360} bg={c.cream} />

              {/* WeSalute co-brand lockup beneath the mark */}
              <div style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: `1px solid ${c.americaRed}33`,
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: "6px",
              }}>
                <div style={{
                  fontFamily: mono, fontSize: "9px",
                  letterSpacing: "0.32em", color: c.americaRedDeep,
                  textTransform: "uppercase", fontWeight: 600,
                }}>Presented By</div>
                <div style={{
                  fontFamily: condensed, fontWeight: 900,
                  fontSize: "20px", letterSpacing: "0.32em",
                  color: c.americaNavy,
                }}>WESALUTE</div>
                <div style={{
                  fontFamily: display, fontStyle: "italic",
                  fontSize: "13px", color: c.americaRedDeep,
                  opacity: 0.85,
                }}>A Real Thank You.®</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{
          position: "absolute", bottom: "32px", left: "50%",
          transform: "translateX(-50%)",
          fontFamily: mono, fontSize: "10px",
          letterSpacing: "0.32em", color: c.mint,
          textTransform: "uppercase",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "8px",
          opacity: 0.6,
        }}>
          <span>The Story Below</span>
          <span style={{ fontSize: "18px" }}>↓</span>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* THE THROUGH-LINE — manifesto                                    */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="story" style={{
        padding: "140px 32px 120px",
        background: `linear-gradient(180deg, ${c.slateDeep} 0%, ${c.slate} 100%)`,
        borderTop: `1px solid ${c.slateLine}`,
        position: "relative",
      }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <Eyebrow color={c.gold}>The Through-Line</Eyebrow>
          <SectionTitle>
            Service is the connective <br /> tissue <Italic>of 250 years.</Italic>
          </SectionTitle>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            marginTop: "48px",
          }} className="hero-grid">
            <p style={{
              fontFamily: display, fontStyle: "italic",
              fontWeight: 400,
              fontSize: "1.4rem",
              lineHeight: 1.5,
              color: c.cream,
              borderLeft: `2px solid ${c.gold}`,
              paddingLeft: "24px",
            }}>
              No country lasts 250 years by accident. Every chapter was held
              together by people who put service above self — in uniform, in scrubs,
              on engines, in classrooms, at every level of civil work.
            </p>
            <div style={{ color: c.cream, opacity: 0.82, lineHeight: 1.75, fontSize: "1.05rem" }}>
              <p style={{ marginBottom: "20px" }}>
                The American 250 is a once-in-a-generation moment. It's bipartisan —
                Bush and Obama as honorary co-chairs of the official America250
                initiative — and built on a simple idea: <span className="underline-mint">350 million Americans, 250 years.</span>
              </p>
              <p>
                WeSalute is uniquely positioned to participate authentically.
                We are the only brand that honors every form of American service
                under one roof — and we've been doing it for 27 of those 250 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* A SHARED HISTORY — dual timeline                                */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        padding: "140px 32px 140px",
        position: "relative",
        background: c.paper,
        color: c.slate,
      }}>
        {/* Subtle paper texture overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(0, 30, 51, 0.04) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 80%, rgba(154, 42, 42, 0.05) 0%, transparent 40%),
            repeating-linear-gradient(45deg, transparent 0px, transparent 60px, rgba(0,30,51,0.015) 60px, rgba(0,30,51,0.015) 61px)
          `,
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <Eyebrow color={c.americaRedDeep}>A Shared History</Eyebrow>
            <h2 style={{
              fontFamily: display,
              fontWeight: 700,
              fontSize: "clamp(2.6rem, 5vw, 4.2rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: c.slate,
              margin: "16px 0 20px",
            }}>
              America's story. <Italic color={c.americaRedDeep}>WeSalute's</Italic> place in it.
            </h2>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: c.slate,
              opacity: 0.7,
              maxWidth: "640px",
              margin: "0 auto",
            }}>
              The right side of every row is where WeSalute showed up. Some of those moments
              start in 1775 — when a man named Capt. John Parker took a stand at Lexington.
              His direct descendant founded this company.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Center spine */}
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0, bottom: 0,
              width: "2px",
              background: `linear-gradient(${c.americaRedDeep}aa, ${c.slate}88, ${c.americaRedDeep}aa)`,
              transform: "translateX(-50%)",
            }} />

            {timeline.map((row, i) => {
              const isWeSalute = !!row.weSalute;
              return (
                <div key={row.year} className="timeline-row" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 60px 1fr",
                  gap: "32px",
                  marginBottom: "56px",
                  alignItems: "start",
                  position: "relative",
                }}>
                  {/* LEFT — America's history */}
                  <div className="timeline-side-left" style={{
                    textAlign: "right",
                    paddingRight: "20px",
                  }}>
                    <div style={{
                      fontFamily: mono, fontSize: "11px",
                      letterSpacing: "0.28em", color: c.americaRedDeep,
                      textTransform: "uppercase", fontWeight: 600,
                      marginBottom: "6px",
                    }}>The Nation</div>
                    <h3 style={{
                      fontFamily: display,
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      lineHeight: 1.15,
                      color: c.slate,
                      marginBottom: "10px",
                    }}>{row.nation}</h3>
                    <p style={{
                      fontSize: "0.92rem", lineHeight: 1.6,
                      color: c.slate, opacity: 0.7,
                    }}>{row.nationBody}</p>
                  </div>

                  {/* CENTER — year marker */}
                  <div style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "flex-start",
                    position: "relative", zIndex: 2,
                    paddingTop: "4px",
                  }}>
                    <div style={{
                      width: "56px", height: "56px",
                      borderRadius: "50%",
                      background: isWeSalute ? c.slate : c.paper,
                      border: `2px solid ${isWeSalute ? c.gold : c.americaRedDeep}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: display, fontWeight: 700,
                      fontSize: "0.78rem",
                      color: isWeSalute ? c.gold : c.americaRedDeep,
                      letterSpacing: "-0.01em",
                      boxShadow: isWeSalute ? `0 0 16px ${c.gold}44` : "none",
                    }}>
                      {row.year.split("–")[0]}
                    </div>
                  </div>

                  {/* RIGHT — WeSalute's place */}
                  <div className="timeline-side-right">
                    {row.weSalute ? (
                      <div style={{
                        background: c.slate,
                        color: c.cream,
                        padding: "24px 28px",
                        borderLeft: `3px solid ${c.gold}`,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                      }}>
                        <div style={{
                          fontFamily: mono, fontSize: "11px",
                          letterSpacing: "0.28em", color: c.gold,
                          textTransform: "uppercase", fontWeight: 600,
                          marginBottom: "10px",
                          display: "flex", alignItems: "center", gap: "8px",
                        }}>
                          <Star size={11} color={c.gold} />
                          WeSalute
                        </div>
                        <p style={{
                          fontSize: "0.95rem", lineHeight: 1.6,
                          color: c.cream, opacity: 0.95,
                        }}>{row.weSalute}</p>
                      </div>
                    ) : (
                      <div style={{
                        fontFamily: display, fontStyle: "italic",
                        fontSize: "0.9rem", color: c.slate, opacity: 0.35,
                        paddingLeft: "20px", paddingTop: "8px",
                      }}>
                        {/* before our time */}
                        ↞ before our time
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing line */}
          <div style={{
            marginTop: "40px",
            padding: "32px 40px",
            background: c.slate,
            color: c.cream,
            textAlign: "center",
            borderTop: `3px solid ${c.gold}`,
          }}>
            <p style={{
              fontFamily: display, fontStyle: "italic",
              fontSize: "1.4rem", lineHeight: 1.4,
              maxWidth: "720px", margin: "0 auto",
            }}>
              "It is for us, the living, to be dedicated here to the unfinished
              work which they who fought here have thus far so nobly advanced."
            </p>
            <div style={{
              marginTop: "12px",
              fontFamily: mono, fontSize: "11px",
              letterSpacing: "0.28em", color: c.gold,
              textTransform: "uppercase",
            }}>
              Lincoln · Gettysburg · 1863
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* SEVEN COMMUNITIES                                               */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="communities" style={{
        padding: "140px 32px",
        background: c.slate,
        position: "relative",
        overflow: "hidden",
      }}>
        <StarField count={50} opacity={0.14} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{ marginBottom: "72px" }}>
            <Eyebrow color={c.mint}>Service Through The Centuries</Eyebrow>
            <SectionTitle>
              Seven communities. <br />
              One country. <Italic color={c.mint}>250 years of showing up.</Italic>
            </SectionTitle>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: 1.65,
              color: c.cream, opacity: 0.78,
              maxWidth: "640px",
              marginTop: "28px",
            }}>
              Service has never been a single uniform. The first 250 years were built
              by people who served in seven different ways. This collection honors them all.
            </p>
          </div>

          <div className="seven-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            border: `1px solid ${c.slateLine}`,
          }}>
            {communities.map((comm, i) => (
              <div key={comm.name} className="hover-lift" style={{
                padding: "36px 32px",
                borderRight: i < communities.length - 1 ? `1px solid ${c.slateLine}` : "none",
                borderBottom: `1px solid ${c.slateLine}`,
                background: i === 0 ? `linear-gradient(135deg, ${c.slateMid} 0%, ${c.slate} 100%)` : "transparent",
                position: "relative",
                minHeight: "220px",
              }}>
                <div style={{
                  position: "absolute", top: "16px", right: "20px",
                  fontFamily: display, fontWeight: 700,
                  fontSize: "1.4rem", color: c.gold, opacity: 0.5,
                }}>
                  0{i + 1}
                </div>
                <Star size={20} color={c.mint} style={{ marginBottom: "20px" }} />
                <h3 style={{
                  fontFamily: display, fontWeight: 700,
                  fontSize: "1.4rem", color: c.cream,
                  marginBottom: "10px", lineHeight: 1.15,
                }}>{comm.name}</h3>
                <p style={{
                  fontSize: "0.92rem", lineHeight: 1.55,
                  color: c.cream, opacity: 0.7, marginBottom: "16px",
                }}>{comm.desc}</p>
                <div style={{
                  fontFamily: mono, fontSize: "10px",
                  letterSpacing: "0.24em", color: c.gold,
                  textTransform: "uppercase", fontWeight: 600,
                }}>{comm.since}</div>
              </div>
            ))}

            {/* 8th cell — closing statement */}
            <div style={{
              padding: "36px 32px",
              background: `linear-gradient(135deg, ${c.gold}22 0%, ${c.gold}08 100%)`,
              borderBottom: `1px solid ${c.slateLine}`,
              minHeight: "220px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              alignItems: "flex-start",
            }}>
              <div style={{ fontFamily: mono, fontSize: "11px", letterSpacing: "0.28em", color: c.gold, marginBottom: "12px" }}>
                ALL UNDER ONE BANNER
              </div>
              <h3 style={{
                fontFamily: display, fontStyle: "italic",
                fontWeight: 500, fontSize: "1.4rem",
                color: c.cream, lineHeight: 1.25,
              }}>
                The only brand that honors all of them.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* $250 TRAVEL CASH                                                */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="travel-cash" style={{
        padding: "140px 32px",
        background: `
          radial-gradient(ellipse at 30% 50%, ${c.slateMid} 0%, ${c.slate} 60%, ${c.slateDeep} 100%)
        `,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative side stripe */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: "6px",
          background: `linear-gradient(${c.gold}, ${c.mint}, ${c.gold})`,
        }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="hero-grid">
            {/* Left — copy */}
            <div>
              <Eyebrow color={c.gold}>Celebrating 250 Years</Eyebrow>
              <h2 style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: c.cream,
                margin: "20px 0 24px",
              }}>
                $250 in <Italic color={c.gold}>FREE</Italic> <br />
                Travel Cash.
              </h2>
              <p style={{
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: c.cream, opacity: 0.85,
                marginBottom: "32px",
              }}>
                A real thank you doesn't end at a tee. To mark 250 years,
                every WeSalute member gets <span className="underline-mint">$250 in Travel Cash</span> —
                on top of the up-to-$3,000 in Travel Cash already included with WeSalute Travel.
              </p>

              <ul style={{ listStyle: "none", marginBottom: "36px" }}>
                {[
                  ["Open to everyone", "Members and new sign-ups alike. Service-verified for full WeSalute+ access."],
                  ["1M+ hotels", "From budget to boutique to all-inclusive. Compare against any major travel site."],
                  ["30,000 cruises", "From a weekend at sea to an around-the-world bucket-list voyage."],
                  ["Car rentals & resorts", "Member rates from Budget, Avis, Hertz, Enterprise — all powered by your Travel Cash."],
                ].map(([title, body]) => (
                  <li key={title} style={{
                    display: "flex", gap: "16px",
                    padding: "14px 0",
                    borderTop: `1px solid ${c.slateLine}`,
                    alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: "24px", height: "24px",
                      background: c.gold, color: c.slate,
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "12px", fontWeight: 700,
                      flexShrink: 0, marginTop: "2px",
                    }}>✓</div>
                    <div>
                      <div style={{
                        fontFamily: condensed, fontWeight: 700,
                        fontSize: "1.05rem", color: c.cream,
                        letterSpacing: "0.02em",
                      }}>{title}</div>
                      <div style={{
                        fontSize: "0.9rem", color: c.cream, opacity: 0.7,
                        lineHeight: 1.5, marginTop: "2px",
                      }}>{body}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="cta cta-gold">
                Claim $250 Travel Cash
                <span style={{ fontFamily: display, fontSize: "16px" }}>→</span>
              </button>
              <div style={{
                marginTop: "12px",
                fontFamily: mono, fontSize: "10px",
                letterSpacing: "0.24em", color: c.cream, opacity: 0.4,
                textTransform: "uppercase",
              }}>
                Terms apply. Available through Nov 11, 2026.
              </div>
            </div>

            {/* Right — big "250" treatment echoing the official mark */}
            <div style={{
              position: "relative",
              padding: "60px 40px",
              background: c.cream,
              border: `1px solid ${c.americaRed}55`,
              textAlign: "center",
              overflow: "hidden",
              boxShadow: `0 30px 60px rgba(0,0,0,0.3)`,
            }}>
              {/* Corner ornaments — red to match logo */}
              {[[0, 0], [1, 0], [0, 1], [1, 1]].map(([x, y], i) => (
                <div key={i} style={{
                  position: "absolute",
                  ...(x === 0 ? { left: "-1px" } : { right: "-1px" }),
                  ...(y === 0 ? { top: "-1px" } : { bottom: "-1px" }),
                  width: "24px", height: "24px",
                  borderTop: y === 0 ? `2px solid ${c.americaRed}` : "none",
                  borderBottom: y === 1 ? `2px solid ${c.americaRed}` : "none",
                  borderLeft: x === 0 ? `2px solid ${c.americaRed}` : "none",
                  borderRight: x === 1 ? `2px solid ${c.americaRed}` : "none",
                }} />
              ))}

              {/* Top row: red bars + "TRAVEL CASH" */}
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: "12px",
                marginBottom: "16px",
              }}>
                <span style={{ width: "28px", height: "2px", background: c.americaRed }} />
                <span style={{
                  fontFamily: mono, fontSize: "11px",
                  letterSpacing: "0.32em", color: c.americaNavy,
                  textTransform: "uppercase", fontWeight: 700,
                }}>Travel Cash</span>
                <span style={{ width: "28px", height: "2px", background: c.americaRed }} />
              </div>

              {/* "$" indicator above */}
              <div style={{
                fontFamily: display, fontStyle: "italic",
                fontSize: "1.6rem", color: c.americaRed,
                marginBottom: "-12px", fontWeight: 600,
              }}>$</div>

              {/* Serif 250 — navy 2, red 5, navy 0 — matching the official mark */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", lineHeight: 0.85 }}>
                <span style={{
                  fontFamily: display, fontWeight: 800,
                  fontSize: "clamp(8rem, 16vw, 12rem)",
                  color: c.americaNavy,
                  letterSpacing: "-0.06em",
                }}>2</span>
                <span style={{
                  fontFamily: display, fontWeight: 800,
                  fontSize: "clamp(8rem, 16vw, 12rem)",
                  color: c.americaRed,
                  letterSpacing: "-0.06em",
                }}>5</span>
                <span style={{
                  fontFamily: display, fontWeight: 800,
                  fontSize: "clamp(8rem, 16vw, 12rem)",
                  color: c.americaNavy,
                  letterSpacing: "-0.06em",
                }}>0</span>
              </div>

              <div style={{
                fontFamily: condensed, fontWeight: 700,
                fontSize: "1.4rem", color: c.americaNavy,
                letterSpacing: "0.04em",
                marginTop: "8px",
              }}>FREE · ON US</div>

              {/* Red separator */}
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "center", gap: "8px",
                margin: "20px auto",
              }}>
                <span style={{ width: "20px", height: "1.5px", background: c.americaRed }} />
                <Star size={10} color={c.americaNavy} />
                <span style={{ width: "20px", height: "1.5px", background: c.americaRed }} />
              </div>

              <p style={{
                fontFamily: display, fontStyle: "italic",
                fontSize: "1.05rem", color: c.americaNavy, opacity: 0.85,
                lineHeight: 1.45,
              }}>
                Because 250 years is worth more <br /> than a holiday sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* WESALUTE+ MEMBERSHIP                                            */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        padding: "140px 32px",
        background: `linear-gradient(180deg, ${c.slateDeep} 0%, ${c.slate} 100%)`,
        position: "relative",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }} className="hero-grid">
            {/* Left — pitch */}
            <div>
              <Eyebrow color={c.gold}>Join WeSalute+</Eyebrow>
              <h2 style={{
                fontFamily: display, fontWeight: 700,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                lineHeight: 1.05, letterSpacing: "-0.025em",
                color: c.cream, margin: "20px 0 24px",
              }}>
                The brand says <br />
                thank you. <Italic color={c.mint}>The membership proves it.</Italic>
              </h2>
              <p style={{
                fontSize: "1.08rem", lineHeight: 1.65,
                color: c.cream, opacity: 0.82, marginBottom: "32px",
              }}>
                For 27 years, WeSalute+ has delivered a real thank you in the form of
                real savings — built with America's leading brands, available every day,
                for every one of seven service communities.
              </p>

              <div style={{ display: "grid", gap: "1px", background: c.slateLine, marginBottom: "32px" }}>
                {[
                  ["10% off", "the WeSalute merch store. Every order. No minimum."],
                  ["Up to $3,000 Travel Cash", "on hotels, cruises, and car rentals — yours, included."],
                  ["48-hour early access", "to the 250 Collection and every drop after it."],
                  ["WeSalute+ 250 Member Edition", "pin and patch set — not sold to non-members."],
                ].map(([title, body]) => (
                  <div key={title} style={{ background: c.slate, padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <Star size={14} color={c.gold} style={{ marginTop: "5px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: condensed, fontWeight: 700, fontSize: "1.05rem", color: c.cream, letterSpacing: "0.02em" }}>{title}</div>
                      <div style={{ fontSize: "0.9rem", color: c.cream, opacity: 0.7, marginTop: "2px" }}>{body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="cta cta-gold">
                Become A Member
                <span style={{ fontFamily: display, fontSize: "16px" }}>→</span>
              </button>
            </div>

            {/* Right — 3M+ stat card */}
            <div style={{
              padding: "56px 48px",
              background: `linear-gradient(145deg, ${c.gold}1a 0%, ${c.gold}04 100%)`,
              border: `1px solid ${c.gold}44`,
              position: "relative",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: mono, fontSize: "11px",
                letterSpacing: "0.32em", color: c.gold,
                textTransform: "uppercase", marginBottom: "20px",
              }}>The Community</div>

              <div style={{
                fontFamily: display, fontWeight: 800,
                fontSize: "clamp(6rem, 11vw, 9rem)",
                lineHeight: 0.9, color: c.cream,
                letterSpacing: "-0.04em",
              }}>
                3M<span style={{ color: c.gold, fontStyle: "italic", fontSize: "0.55em", verticalAlign: "top", position: "relative", top: "0.4em" }}>+</span>
              </div>
              <div style={{
                fontFamily: display, fontStyle: "italic",
                fontSize: "1.3rem", color: c.mint,
                marginTop: "4px",
              }}>members and counting.</div>

              <div style={{
                width: "80px", height: "1px",
                background: c.gold, margin: "28px auto",
              }} />

              <p style={{
                fontFamily: body, fontSize: "0.92rem",
                lineHeight: 1.6, color: c.cream, opacity: 0.78,
              }}>
                Verified service across military, veterans, nurses, first responders,
                medical professionals, teachers, civil servants, and students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* THE COLLECTION                                                  */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="collection" style={{
        padding: "140px 32px 80px",
        background: c.slate,
        borderTop: `1px solid ${c.slateLine}`,
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <Eyebrow color={c.gold} style={{ justifyContent: "center" }}>The Collection</Eyebrow>
            <SectionTitle>
              Built to be earned. <br /><Italic color={c.gold}>Made to be worn.</Italic>
            </SectionTitle>
            <p style={{
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: c.cream, opacity: 0.75,
              maxWidth: "640px", margin: "24px auto 0",
            }}>
              Three tiers. One campaign. Every piece anchored to A Real Thank You® —
              and to a country built by people who served.
            </p>
          </div>

          {/* TIER 1 — Open Collection */}
          <div style={{ marginBottom: "80px" }}>
            <div style={{
              display: "flex", alignItems: "baseline",
              justifyContent: "space-between", marginBottom: "32px",
              flexWrap: "wrap", gap: "12px",
            }}>
              <div>
                <div style={{
                  fontFamily: mono, fontSize: "11px",
                  letterSpacing: "0.3em", color: c.mint,
                  textTransform: "uppercase",
                }}>Open Collection · Tier 01</div>
                <h3 style={{
                  fontFamily: display, fontWeight: 700,
                  fontSize: "2rem", color: c.cream, marginTop: "6px",
                }}>For everyone. Forever.</h3>
              </div>
              <div style={{ color: c.cream, opacity: 0.6, fontSize: "0.9rem", maxWidth: "320px" }}>
                Available to all. The pieces that anchor the campaign and live on after it.
              </div>
            </div>

            <div className="merch-grid-3" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}>
              {merchOpen.map((m, i) => (
                <div key={m.name} className="merch-card" style={{
                  background: c.slateMid,
                  border: `1px solid ${c.slateLine}`,
                  padding: "0",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Product visual block */}
                  <div className="merch-mark" style={{
                    height: "260px",
                    background: i === 0
                      ? c.cream  // Heritage Tee shows the actual logo on a cream "tee" background
                      : `radial-gradient(ellipse at center, ${c.slateMid} 0%, ${c.slateDeep} 100%)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative",
                    transition: "transform 0.5s",
                    overflow: "hidden",
                  }}>
                    {i === 0 ? (
                      // Heritage Tee — show the actual America 250 mark
                      <div style={{ transform: "scale(0.45)" }}>
                        <America250Logo size={400} bg={c.cream} />
                      </div>
                    ) : i === 1 ? (
                      // Service Through The Centuries — seven-point medallion
                      <svg width="160" height="160" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="68" fill="none" stroke={c.gold} strokeWidth="1" opacity="0.5" />
                        <circle cx="80" cy="80" r="56" fill="none" stroke={c.gold} strokeWidth="0.5" opacity="0.3" />
                        {[0, 1, 2, 3, 4, 5, 6].map(j => {
                          const angle = (j / 7) * Math.PI * 2 - Math.PI / 2;
                          const x = 80 + Math.cos(angle) * 48;
                          const y = 80 + Math.sin(angle) * 48;
                          return (
                            <g key={j} transform={`translate(${x - 6}, ${y - 6})`}>
                              <Star size={12} color={c.gold} />
                            </g>
                          );
                        })}
                        <text x="80" y="76" textAnchor="middle" fill={c.cream}
                          style={{ fontFamily: display, fontSize: 16, fontWeight: 700 }}>SEVEN</text>
                        <text x="80" y="94" textAnchor="middle" fill={c.mint}
                          style={{ fontFamily: condensed, fontSize: 9, letterSpacing: "0.32em", fontWeight: 700 }}>COMMUNITIES</text>
                      </svg>
                    ) : (
                      // Block Party Pack — stylized bundle
                      <svg width="180" height="160" viewBox="0 0 180 160">
                        <rect x="30" y="40" width="60" height="80" fill={c.americaNavy} stroke={c.gold} strokeWidth="1.5" />
                        <rect x="90" y="50" width="60" height="80" fill={c.americaRed} stroke={c.gold} strokeWidth="1.5" />
                        <text x="60" y="86" textAnchor="middle" fill={c.cream}
                          style={{ fontFamily: display, fontSize: 22, fontWeight: 800 }}>250</text>
                        <text x="120" y="96" textAnchor="middle" fill={c.cream}
                          style={{ fontFamily: condensed, fontSize: 10, letterSpacing: "0.2em", fontWeight: 700 }}>JULY 4</text>
                      </svg>
                    )}
                    <div style={{
                      position: "absolute", top: "16px", left: "16px",
                      fontFamily: mono, fontSize: "10px",
                      letterSpacing: "0.24em",
                      color: i === 0 ? c.americaRedDeep : c.mint,
                      textTransform: "uppercase",
                      background: i === 0 ? "transparent" : "transparent",
                    }}>{m.tag}</div>
                    <div style={{
                      position: "absolute", top: "16px", right: "16px",
                      fontFamily: display, fontWeight: 700,
                      fontSize: "1rem",
                      color: i === 0 ? c.americaNavy : c.gold,
                    }}>{m.price}</div>
                  </div>

                  <div style={{ padding: "24px 24px 28px" }}>
                    <div style={{
                      fontFamily: mono, fontSize: "10px",
                      letterSpacing: "0.24em", color: c.gold,
                      textTransform: "uppercase", marginBottom: "6px",
                    }}>{m.type}</div>
                    <h4 style={{
                      fontFamily: display, fontWeight: 700,
                      fontSize: "1.25rem", color: c.cream,
                      marginBottom: "10px", lineHeight: 1.2,
                    }}>{m.name}</h4>
                    <p style={{
                      fontSize: "0.9rem", lineHeight: 1.55,
                      color: c.cream, opacity: 0.7,
                    }}>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIER 2 — 250 Numbered (HERO PIECE) */}
          <div style={{ marginBottom: "80px" }}>
            <div style={{ marginBottom: "32px" }}>
              <div style={{
                fontFamily: mono, fontSize: "11px",
                letterSpacing: "0.3em", color: c.gold,
                textTransform: "uppercase",
              }}>Numbered Edition · Tier 02</div>
              <h3 style={{
                fontFamily: display, fontWeight: 700,
                fontSize: "2rem", color: c.cream, marginTop: "6px",
              }}>Only 250 will ever exist.</h3>
            </div>

            <div className="merch-card" style={{
              background: `linear-gradient(145deg, ${c.slateMid} 0%, ${c.slateDeep} 100%)`,
              border: `2px solid ${c.gold}88`,
              padding: "0",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              position: "relative",
              overflow: "hidden",
              boxShadow: `0 20px 60px ${c.gold}11`,
            }}>
              {/* Corner ornaments */}
              {[[0, 0], [1, 0], [0, 1], [1, 1]].map(([x, y], i) => (
                <div key={i} style={{
                  position: "absolute",
                  ...(x === 0 ? { left: "12px" } : { right: "12px" }),
                  ...(y === 0 ? { top: "12px" } : { bottom: "12px" }),
                  width: "16px", height: "16px",
                  borderTop: y === 0 ? `1.5px solid ${c.gold}` : "none",
                  borderBottom: y === 1 ? `1.5px solid ${c.gold}` : "none",
                  borderLeft: x === 0 ? `1.5px solid ${c.gold}` : "none",
                  borderRight: x === 1 ? `1.5px solid ${c.gold}` : "none",
                  zIndex: 2,
                }} />
              ))}

              {/* Left — visual */}
              <div className="merch-mark" style={{
                padding: "60px 48px",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                position: "relative",
                background: `radial-gradient(ellipse at center, ${c.slateMid} 0%, ${c.slateDeep} 100%)`,
                transition: "transform 0.5s",
                minHeight: "440px",
              }}>
                <StarField count={30} opacity={0.2} />

                {/* Hangtag illustration */}
                <div style={{
                  position: "relative", zIndex: 2,
                  width: "180px", height: "260px",
                  background: c.paper,
                  borderRadius: "4px",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  color: c.slate,
                  transform: "rotate(-3deg)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  padding: "20px",
                  textAlign: "center",
                }}>
                  {/* Hole */}
                  <div style={{
                    position: "absolute", top: "16px", left: "50%",
                    transform: "translateX(-50%)",
                    width: "16px", height: "16px",
                    borderRadius: "50%",
                    background: c.slateDeep,
                    border: `2px solid ${c.gold}`,
                  }} />
                  <div style={{
                    fontFamily: mono, fontSize: "9px",
                    letterSpacing: "0.32em", color: c.americaRedDeep,
                    textTransform: "uppercase", marginTop: "32px", fontWeight: 600,
                  }}>Numbered Edition</div>
                  <div style={{
                    fontFamily: display, fontWeight: 800,
                    fontSize: "4.4rem", color: c.slate,
                    lineHeight: 1, margin: "16px 0",
                    letterSpacing: "-0.04em",
                  }}>001</div>
                  <div style={{
                    fontFamily: display, fontStyle: "italic",
                    fontSize: "0.95rem", color: c.slate, opacity: 0.7,
                  }}>of 250</div>
                  <div style={{
                    width: "60px", height: "1px",
                    background: c.slate, margin: "16px 0", opacity: 0.3,
                  }} />
                  <div style={{
                    fontFamily: mono, fontSize: "8px",
                    letterSpacing: "0.24em", color: c.slate, opacity: 0.6,
                    textTransform: "uppercase",
                  }}>WeSalute · 1776–2026</div>
                </div>

                {/* "Live counter" mock */}
                <div style={{
                  marginTop: "28px",
                  fontFamily: mono, fontSize: "11px",
                  letterSpacing: "0.28em", color: c.gold,
                  textTransform: "uppercase", textAlign: "center",
                  position: "relative", zIndex: 2,
                }}>
                  <span style={{
                    display: "inline-block",
                    width: "8px", height: "8px",
                    borderRadius: "50%",
                    background: c.gold,
                    marginRight: "8px",
                    boxShadow: `0 0 12px ${c.gold}`,
                    animation: "glow-pulse 2s infinite",
                  }} />
                  237 of 250 remaining
                </div>
              </div>

              {/* Right — copy */}
              <div style={{ padding: "60px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{
                  fontFamily: mono, fontSize: "10px",
                  letterSpacing: "0.3em", color: c.mint,
                  textTransform: "uppercase", marginBottom: "12px",
                }}>{merch250.type}</div>
                <h3 style={{
                  fontFamily: display, fontWeight: 700,
                  fontSize: "2.4rem", color: c.cream,
                  lineHeight: 1.05, letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}>{merch250.name}</h3>
                <p style={{
                  fontSize: "1.02rem", lineHeight: 1.65,
                  color: c.cream, opacity: 0.82,
                  marginBottom: "32px",
                }}>{merch250.desc}</p>

                <div style={{
                  display: "flex", gap: "32px",
                  paddingBottom: "24px",
                  borderBottom: `1px solid ${c.slateLine}`,
                  marginBottom: "32px",
                  flexWrap: "wrap",
                }}>
                  <div>
                    <div style={{ fontFamily: mono, fontSize: "10px", letterSpacing: "0.24em", color: c.cream, opacity: 0.5, marginBottom: "4px" }}>EDITION</div>
                    <div style={{ fontFamily: display, fontWeight: 700, fontSize: "1.3rem", color: c.gold }}>1 — 250</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: mono, fontSize: "10px", letterSpacing: "0.24em", color: c.cream, opacity: 0.5, marginBottom: "4px" }}>PRICE</div>
                    <div style={{ fontFamily: display, fontWeight: 700, fontSize: "1.3rem", color: c.gold }}>{merch250.price}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: mono, fontSize: "10px", letterSpacing: "0.24em", color: c.cream, opacity: 0.5, marginBottom: "4px" }}>FULFILLMENT</div>
                    <div style={{ fontFamily: display, fontWeight: 700, fontSize: "1.3rem", color: c.gold }}>Numbered</div>
                  </div>
                </div>

                <button className="cta cta-gold" style={{ alignSelf: "flex-start" }}>
                  Secure Your Number
                  <span style={{ fontFamily: display, fontSize: "16px" }}>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* TIER 3 — Member Edition */}
          <div>
            <div style={{ marginBottom: "32px" }}>
              <div style={{
                fontFamily: mono, fontSize: "11px",
                letterSpacing: "0.3em", color: c.mint,
                textTransform: "uppercase",
              }}>Members Only · Tier 03</div>
              <h3 style={{
                fontFamily: display, fontWeight: 700,
                fontSize: "2rem", color: c.cream, marginTop: "6px",
              }}>Reserved for the ones who already do the work.</h3>
            </div>

            <div className="merch-card" style={{
              background: c.slateMid,
              border: `1px solid ${c.mint}55`,
              padding: "48px",
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "48px",
              alignItems: "center",
            }}>
              {/* Left — pin/patch mock */}
              <div style={{ display: "flex", justifyContent: "center", gap: "32px", alignItems: "center" }}>
                {/* Pin */}
                <div style={{
                  width: "120px", height: "120px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 30% 30%, ${c.goldPale}, ${c.goldDeep})`,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  color: c.slate, fontFamily: display,
                  fontWeight: 700, fontSize: "0.85rem",
                  boxShadow: `0 12px 30px rgba(0,0,0,0.5), inset 0 -2px 8px rgba(0,0,0,0.2)`,
                  textAlign: "center",
                  position: "relative",
                }}>
                  <div style={{ fontSize: "0.65rem", letterSpacing: "0.16em", opacity: 0.7 }}>WESALUTE+</div>
                  <div style={{ fontSize: "1.5rem", margin: "2px 0" }}>250</div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", opacity: 0.7 }}>1776 · 2026</div>
                </div>
                {/* Patch */}
                <div style={{
                  width: "120px", height: "120px",
                  background: c.slateDeep,
                  border: `4px solid ${c.gold}`,
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  color: c.cream,
                  fontFamily: display, fontWeight: 700,
                  borderRadius: "12px",
                  boxShadow: `0 12px 30px rgba(0,0,0,0.5)`,
                  textAlign: "center",
                  padding: "8px",
                }}>
                  <Star size={20} color={c.gold} />
                  <div style={{ fontSize: "0.8rem", margin: "6px 0 2px" }}>MEMBER</div>
                  <div style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: c.mint }}>EDITION</div>
                </div>
              </div>

              {/* Right — copy */}
              <div>
                <div style={{
                  fontFamily: mono, fontSize: "10px",
                  letterSpacing: "0.3em", color: c.mint,
                  textTransform: "uppercase", marginBottom: "10px",
                }}>{merchMember.type}</div>
                <h3 style={{
                  fontFamily: display, fontWeight: 700,
                  fontSize: "1.7rem", color: c.cream,
                  marginBottom: "16px", lineHeight: 1.2,
                }}>{merchMember.name}</h3>
                <p style={{
                  fontSize: "0.98rem", lineHeight: 1.6,
                  color: c.cream, opacity: 0.78,
                  marginBottom: "20px",
                }}>{merchMember.desc}</p>
                <div style={{
                  display: "inline-flex", alignItems: "center",
                  gap: "12px", padding: "10px 18px",
                  background: `${c.mint}15`,
                  border: `1px solid ${c.mint}44`,
                  marginBottom: "20px",
                }}>
                  <Star size={11} color={c.mint} />
                  <span style={{
                    fontFamily: mono, fontSize: "11px",
                    letterSpacing: "0.24em", color: c.mint,
                    textTransform: "uppercase",
                  }}>{merchMember.price} · WeSalute+ verified only</span>
                </div>
                <div>
                  <button className="cta cta-ghost" style={{ borderColor: c.mint, color: c.mint }}>
                    Become A Member To Unlock
                    <span style={{ fontFamily: display, fontSize: "16px" }}>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FINAL SALUTE                                                    */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section style={{
        padding: "120px 32px",
        background: `linear-gradient(180deg, ${c.slate} 0%, ${c.slateDeep} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}>
        <StarField count={70} opacity={0.18} />
        <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <Eyebrow color={c.gold} style={{ justifyContent: "center" }}>The Final Salute · November 11, 2026</Eyebrow>
          <h2 style={{
            fontFamily: display, fontWeight: 700,
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            lineHeight: 1.05, letterSpacing: "-0.025em",
            color: c.cream, margin: "20px 0 24px",
          }}>
            The country turns 250 in July. <br />
            <Italic color={c.gold}>We close the chapter on Veterans Day.</Italic>
          </h2>
          <p style={{
            fontSize: "1.1rem", lineHeight: 1.65,
            color: c.cream, opacity: 0.82,
            maxWidth: "620px", margin: "0 auto 40px",
          }}>
            The campaign begins in June. It peaks on the Fourth.
            It closes with a Final 250 restock on November 11 — where it should close.
            That's the through-line. That's the year. That's the thank you.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "60px" }}>
            <button className="cta cta-gold">
              Shop The Collection
              <span style={{ fontFamily: display, fontSize: "16px" }}>→</span>
            </button>
            <button className="cta cta-ghost">
              Join WeSalute+
            </button>
          </div>

          {/* Email capture */}
          <div style={{
            padding: "32px",
            background: `linear-gradient(145deg, ${c.gold}11 0%, ${c.gold}03 100%)`,
            border: `1px solid ${c.gold}44`,
            maxWidth: "560px", margin: "0 auto",
          }}>
            <div style={{
              fontFamily: mono, fontSize: "11px",
              letterSpacing: "0.32em", color: c.gold,
              textTransform: "uppercase", marginBottom: "12px",
            }}>Early access</div>
            <p style={{
              fontFamily: display, fontWeight: 500, fontSize: "1.2rem",
              color: c.cream, marginBottom: "20px", lineHeight: 1.3,
            }}>
              Get notified when the 250 collection drops. Members get the first 48 hours.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  background: c.slateDeep,
                  border: `1px solid ${c.slateLine}`,
                  color: c.cream,
                  fontFamily: body, fontSize: "0.95rem",
                  outline: "none",
                }}
              />
              <button className="cta cta-gold" style={{ padding: "14px 24px", fontSize: "12px" }}>
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* FOOTER                                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer style={{
        padding: "48px 32px",
        background: c.slateDeep,
        borderTop: `1px solid ${c.slateLine}`,
      }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "20px",
        }}>
          <div>
            <CoBrandLockup height={24} color={c.cream} />
            <div style={{
              fontFamily: mono, fontSize: "10px",
              letterSpacing: "0.24em", color: c.cream, opacity: 0.5,
              textTransform: "uppercase", marginTop: "10px",
            }}>
              A Public Benefit Corporation · Since 1999
            </div>
          </div>
          <div style={{
            fontFamily: display, fontStyle: "italic",
            fontSize: "1.1rem", color: c.gold,
          }}>
            A Real Thank You.®
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            fontFamily: mono, fontSize: "10px",
            letterSpacing: "0.24em", color: c.cream, opacity: 0.5,
            textTransform: "uppercase",
          }}>
            <span>1776</span>
            <Star size={8} color={c.gold} />
            <span>2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
