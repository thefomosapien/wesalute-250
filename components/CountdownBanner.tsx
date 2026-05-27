"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-07-04T00:00:00").getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const units = [
  { key: "days" as const, label: "DAYS" },
  { key: "hours" as const, label: "HRS" },
  { key: "minutes" as const, label: "MIN" },
  { key: "seconds" as const, label: "SEC" },
];

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [secPop, setSecPop] = useState(false);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft());
      setSecPop(true);
      setTimeout(() => setSecPop(false), 200);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(100deg, #1C0208 0%, #200A14 30%, #0D1526 65%, #001428 100%)",
        borderTop: "1px solid rgba(142,16,35,0.5)",
        borderBottom: "1px solid rgba(255,196,62,0.25)",
      }}
    >
      {/* Left crimson accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: "linear-gradient(#B91C1C, #8E1023)" }}
      />

      {/* Sweeping shimmer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "30%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,196,62,0.045) 50%, transparent 100%)",
            animation: "banner-sweep 5s ease-in-out infinite",
          }}
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-10 py-4 flex flex-wrap md:flex-nowrap items-center gap-x-6 gap-y-3 relative">

        {/* Live badge + label */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span
            className="pulse-dot inline-block w-2 h-2 rounded-full shrink-0"
            style={{ background: "#B91C1C" }}
          />
          <div className="flex flex-col leading-none">
            <span className="font-condensed font-bold text-[1.05rem] tracking-[0.1em] text-cream uppercase">
              $250 Travel Cash
            </span>
            <span
              className="font-mono text-[9px] tracking-[0.26em] uppercase mt-0.5"
              style={{ color: "#B91C1C" }}
            >
              Offer ends Jul 4, 2026
            </span>
          </div>
        </div>

        {/* Separator */}
        <div
          className="hidden md:block self-stretch w-px shrink-0"
          style={{ background: "rgba(255,196,62,0.18)" }}
        />

        {/* Countdown */}
        <div className="flex items-center gap-1 shrink-0">
          {units.map(({ key, label }, i) => (
            <div key={key} className="flex items-center gap-1">
              {i > 0 && (
                <span
                  className="font-display font-bold text-gold text-[1.1rem] leading-none select-none"
                  style={{ opacity: 0.45, marginTop: "-4px" }}
                >
                  :
                </span>
              )}
              <div
                className="flex flex-col items-center"
                style={{
                  minWidth: "44px",
                  background: "rgba(0,30,51,0.7)",
                  border: "1px solid rgba(255,196,62,0.18)",
                  padding: "5px 4px 4px",
                }}
              >
                <span
                  className="font-display font-bold text-gold leading-none tabular-nums"
                  style={{
                    fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
                    animation:
                      key === "seconds" && secPop
                        ? "tick-pop 0.2s ease-out"
                        : "none",
                  }}
                >
                  {pad(timeLeft[key])}
                </span>
                <span
                  className="font-mono text-[7px] tracking-[0.2em] text-cream uppercase mt-0.5"
                  style={{ opacity: 0.45 }}
                >
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div
          className="hidden md:block self-stretch w-px shrink-0"
          style={{ background: "rgba(255,196,62,0.18)" }}
        />

        {/* CTA */}
        <div className="shrink-0 md:ml-auto">
          <button
            className="cta cta-gold"
            style={{ fontSize: "12px", padding: "12px 24px", letterSpacing: "0.2em" }}
          >
            Claim Your $250
            <span className="font-display text-[14px]">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
