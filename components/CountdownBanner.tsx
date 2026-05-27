"use client";

import { useEffect, useState } from "react";
import { Eyebrow } from "./Eyebrow";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-07-04T00:00:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const units: { label: string; key: keyof TimeLeft }[] = [
  { label: "Days", key: "days" },
  { label: "Hours", key: "hours" },
  { label: "Mins", key: "minutes" },
  { label: "Secs", key: "seconds" },
];

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative px-8 py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000F1C 0%, #001E33 100%)",
        borderTop: "1px solid rgba(255,196,62,0.2)",
        borderBottom: "1px solid rgba(255,196,62,0.2)",
      }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,196,62,0.07) 0%, transparent 65%)",
          filter: "blur(24px)",
        }}
      />

      <div
        className="max-w-[1200px] mx-auto relative hero-grid grid gap-12 md:gap-20 items-center"
        style={{ gridTemplateColumns: "1.2fr 1fr" }}
      >
        {/* Left — copy */}
        <div>
          <Eyebrow color="#FFC43E">250 Years · A Real Thank You</Eyebrow>

          <h2
            className="font-display font-bold leading-[1.02] tracking-[-0.03em] text-cream mt-5 mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            <span style={{ color: "#FFC43E" }}>$250</span> in Free
            <br className="hidden sm:block" /> Travel Cash.
          </h2>

          <p
            className="text-[1.05rem] leading-[1.65] text-cream max-w-[480px] mb-8"
            style={{ opacity: 0.75 }}
          >
            To mark 250 years of service, WeSalute is giving verified service
            members, veterans, and all seven communities{" "}
            <strong className="text-cream font-semibold" style={{ opacity: 1 }}>
              $250 in travel cash
            </strong>
            . One offer. America&apos;s birthday. Claim it before July 4th.
          </p>

          <button className="cta cta-gold">
            Claim Your $250
            <span className="font-display text-[16px]">→</span>
          </button>
        </div>

        {/* Right — countdown */}
        <div
          className="p-7 md:p-9"
          style={{
            border: "1px solid rgba(255,196,62,0.28)",
            background: "rgba(0,30,51,0.6)",
          }}
        >
          <div className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-6 text-center">
            Counting Down to July 4, 2026
          </div>

          <div className="grid grid-cols-4 gap-3">
            {units.map(({ label, key }) => (
              <div
                key={key}
                className="flex flex-col items-center py-4 px-1"
                style={{
                  background: "#001E33",
                  border: "1px solid #163756",
                }}
              >
                <span
                  className="font-display font-bold text-gold leading-none"
                  style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}
                >
                  {pad(timeLeft[key])}
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.22em] text-cream uppercase mt-2"
                  style={{ opacity: 0.55 }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p
            className="font-display italic text-[0.95rem] text-cream text-center mt-6 leading-[1.45]"
            style={{ opacity: 0.6 }}
          >
            One real thank you. 250 years in the making.
          </p>
        </div>
      </div>
    </section>
  );
}
