import { Star } from "./Star";

interface CrestProps {
  size?: number;
}

export function Crest({ size = 280 }: CrestProps) {
  const gold = "#FFC43E";
  const cream = "#F4F0E6";
  const mint = "#B5DFD0";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      aria-label="1776 / 2026 Crest"
    >
      {/* Outer rings */}
      <circle cx="160" cy="160" r="155" fill="none" stroke={gold} strokeWidth="1" opacity="0.5" />
      <circle cx="160" cy="160" r="140" fill="none" stroke={gold} strokeWidth="2" />
      <circle cx="160" cy="160" r="120" fill="none" stroke={gold} strokeWidth="0.5" opacity="0.4" />

      {/* Arc text paths */}
      <defs>
        <path id="crestTopArc" d="M 40 160 A 120 120 0 0 1 280 160" />
        <path id="crestBottomArc" d="M 280 160 A 120 120 0 0 1 40 160" />
      </defs>
      <text
        fill={gold}
        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: 14, letterSpacing: "0.42em", fontWeight: 700 }}
      >
        <textPath href="#crestTopArc" startOffset="50%" textAnchor="middle">
          250 YEARS OF SERVICE
        </textPath>
      </text>
      <text
        fill={gold}
        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: 12, letterSpacing: "0.4em", fontWeight: 600 }}
        opacity="0.85"
      >
        <textPath href="#crestBottomArc" startOffset="50%" textAnchor="middle">
          ONE REAL THANK YOU
        </textPath>
      </text>

      {/* 1776 */}
      <text
        x="160" y="138"
        textAnchor="middle"
        fill={cream}
        style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 42, fontWeight: 700, letterSpacing: "-0.01em" }}
      >
        1776
      </text>

      {/* Star divider */}
      <g transform="translate(160, 162)">
        <line x1="-38" y1="0" x2="-12" y2="0" stroke={gold} strokeWidth="1" />
        <line x1="38" y1="0" x2="12" y2="0" stroke={gold} strokeWidth="1" />
      </g>
      <path d="M 154 156 L 160 150 L 166 156 L 162 162 L 158 162 Z" fill={gold} transform="translate(0, 4)" />

      {/* 2026 */}
      <text
        x="160" y="200"
        textAnchor="middle"
        fill={cream}
        style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 42, fontWeight: 700, letterSpacing: "-0.01em" }}
      >
        2026
      </text>

      {/* Mint accent */}
      <line x1="120" y1="220" x2="200" y2="220" stroke={mint} strokeWidth="1.5" />
      <text
        x="160" y="240"
        textAnchor="middle"
        fill={mint}
        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: 11, letterSpacing: "0.36em", fontWeight: 700 }}
      >
        WESALUTE
      </text>

      {/* 7 stars for 7 service communities */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const angle = (i / 7) * Math.PI * 2 - Math.PI / 2;
        const x = 160 + Math.cos(angle) * 105;
        const y = 160 + Math.sin(angle) * 105;
        return (
          <g key={i} transform={`translate(${x - 5}, ${y - 5})`}>
            <Star size={10} color={gold} />
          </g>
        );
      })}
    </svg>
  );
}
