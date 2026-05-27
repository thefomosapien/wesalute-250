interface CoBrandLockupProps {
  height?: number;
  color?: string;
}

export function CoBrandLockup({ height = 28, color = "#F4F0E6" }: CoBrandLockupProps) {
  return (
    <div className="inline-flex items-center gap-3">
      {/* Compact "250" numeral in Fraunces */}
      <svg
        width={height * 1.3}
        height={height}
        viewBox="0 0 60 46"
        aria-hidden
      >
        <text
          x="2" y="34"
          fill={color}
          style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "32px", fontWeight: 800, letterSpacing: "-0.04em" }}
        >
          2
        </text>
        <text
          x="22" y="34"
          fill="#B5152D"
          style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "32px", fontWeight: 800, letterSpacing: "-0.04em" }}
        >
          5
        </text>
        <text
          x="42" y="34"
          fill={color}
          style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "32px", fontWeight: 800, letterSpacing: "-0.04em" }}
        >
          0
        </text>
      </svg>

      {/* Divider */}
      <div
        className="shrink-0"
        style={{ width: "1px", height: `${height * 0.7}px`, background: color, opacity: 0.3 }}
      />

      {/* WESALUTE wordmark */}
      <span
        className="font-condensed font-black tracking-[0.32em] text-gold"
        style={{ fontSize: `${height * 0.45}px` }}
      >
        WESALUTE
      </span>
    </div>
  );
}
