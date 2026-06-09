import Image from "next/image";

interface America250LogoProps {
  size?: number;
  bg?: string;
  useAsset?: boolean;
}

export function America250Logo({
  size = 420,
  bg = "#F4F0E6",
  useAsset = true,
}: America250LogoProps) {
  const height = Math.round(size * 0.96);

  if (useAsset) {
    return (
      <Image
        src="/america-250-mark-new.png"
        alt="America 250 — One Nation. 250 Years of Service."
        width={size}
        height={height}
        style={{ display: "block", maxWidth: "100%", height: "auto" }}
        priority
      />
    );
  }

  // Inline SVG fallback — faithful recreation of the official mark
  const americaNavy = "#1B2A4E";
  const americaRed = "#B5152D";
  const cream = "#F4F0E6";

  const starPath = (s: number) => {
    const k = s / 24;
    return `M ${12 * k} ${2 * k} L ${14.39 * k} ${8.26 * k} L ${21 * k} ${9 * k} L ${16 * k} ${13.74 * k} L ${17.18 * k} ${20.5 * k} L ${12 * k} ${17.27 * k} L ${6.82 * k} ${20.5 * k} L ${8 * k} ${13.74 * k} L ${3 * k} ${9 * k} L ${9.61 * k} ${8.26 * k} Z`;
  };

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
    <svg
      width={size}
      height={height}
      viewBox="0 0 500 480"
      aria-label="America 250 — One Nation. 250 Years of Service."
    >
      <rect x="0" y="0" width="500" height="480" fill={bg} rx="2" />

      {topStars.map((star, i) => (
        <path
          key={i}
          d={starPath(star.s)}
          fill={americaNavy}
          transform={`translate(${star.x - star.s / 2}, ${star.y - star.s / 2})`}
        />
      ))}

      <text
        x="250" y="180"
        textAnchor="middle"
        fill={americaNavy}
        style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "78px", fontWeight: 700, letterSpacing: "0.04em" }}
      >
        AMERICA
      </text>

      <line x1="95" y1="218" x2="175" y2="218" stroke={americaRed} strokeWidth="2.5" />
      <text x="195" y="226" fill={americaRed} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "24px", fontWeight: 700, letterSpacing: "0.06em" }}>1776</text>
      <path d={starPath(14)} fill={americaNavy} transform="translate(243, 212)" />
      <text x="288" y="226" fill={americaRed} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "24px", fontWeight: 700, letterSpacing: "0.06em" }}>2026</text>
      <line x1="325" y1="218" x2="405" y2="218" stroke={americaRed} strokeWidth="2.5" />

      <text x="125" y="395" fill={americaNavy} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "220px", fontWeight: 800, letterSpacing: "-0.04em" }}>2</text>
      <text x="230" y="395" fill={americaRed} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "220px", fontWeight: 800, letterSpacing: "-0.04em" }}>5</text>
      <text x="335" y="395" fill={americaNavy} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "220px", fontWeight: 800, letterSpacing: "-0.04em" }}>0</text>

      <path d="M 90 410 Q 220 380 410 395 Q 350 425 90 420 Z" fill={americaRed} opacity="0.95" />
      <path d="M 130 420 Q 260 400 425 410 Q 380 430 130 430 Z" fill={americaRed} opacity="0.75" />

      <path d="M 75 405 Q 130 412 175 408 L 165 432 Q 110 426 75 422 Z" fill={americaNavy} />
      <path d={starPath(8)} fill={cream} transform="translate(92, 412)" />
      <path d={starPath(8)} fill={cream} transform="translate(115, 414)" />
      <path d={starPath(8)} fill={cream} transform="translate(138, 415)" />

      <line x1="40" y1="460" x2="120" y2="460" stroke={americaRed} strokeWidth="2" />
      <text
        x="250" y="466"
        textAnchor="middle"
        fill={americaNavy}
        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: "15px", letterSpacing: "0.14em", fontWeight: 700 }}
      >
        ONE NATION. 250 YEARS OF SERVICE.
      </text>
      <line x1="380" y1="460" x2="460" y2="460" stroke={americaRed} strokeWidth="2" />
    </svg>
  );
}
