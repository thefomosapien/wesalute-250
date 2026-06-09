"use client";

import { useState } from "react";
import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";
import { Star } from "./Star";

const STAR_INDICES = [0, 1, 2, 3, 4];

const memberBenefits = [
  ["Early Access & Exclusive Merch", "You'll be the first to know!"],
  ["$3,000 in Travel Cash EVERY YEAR", "Book hotels, cruises, car rentals and more — yours, included."],
  ["WeSalute+ ID Card", "Get access to your savings & benefits everywhere you go!"],
  ["Over a Thousand Offers & Benefits", "Exclusive to WeSalute+ Members, save every single day."],
] as const;

const testimonials = [
  {
    quote: "In less than six months, my family saved over $1,100 with WeSalute+. Between the 5% off and free checked bags on JetBlue, it pays for itself fast.",
    name: "Amber Cooper",
    since: "WeSalute+ Member since 2022",
  },
  {
    quote: "I enrolled in 2016 after seeing all the travel and retail partners. In just a few transactions, my WeSalute+ card had already paid for itself!",
    name: "Holly Landau",
    since: "WeSalute+ Member since 2016",
  },
  {
    quote: "WeSalute+ has been extremely rewarding — the services and benefits are spectacular.",
    name: "Charles F. Harris",
    since: "WeSalute Member since 2019",
  },
];

export function Membership() {
  const [activeIdx, setActiveIdx] = useState(0);
  const t = testimonials[activeIdx];

  return (
    <section
      className="relative px-8 py-20 md:py-[140px]"
      style={{
        background: "linear-gradient(180deg, #000F1C 0%, #001E33 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className="grid gap-[72px] items-start hero-grid"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left — pitch */}
          <div>
            <Eyebrow color="#FFC43E">Join WeSalute+</Eyebrow>
            <h2
              className="font-display font-bold leading-[1.05] tracking-[-0.025em] text-cream mt-5 mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
            >
              Get{" "}
              <Italic color="#FFC43E">A Real Thank You<sup>&reg;</sup></Italic>
              {" "}with WeSalute+
            </h2>
            <p
              className="text-[1.08rem] leading-[1.65] text-cream mb-8"
              style={{ opacity: 0.82 }}
            >
              With WeSalute+ you&apos;ll get a{" "}
              <span className="font-bold" style={{ color: "#FFC43E" }}>$3,250</span>{" "}
              WeSalute Travel Cash gift. Plus, a personalized WeSalute+ ID Card,
              and over a thousand offers &amp; benefits.
            </p>

            <div className="grid gap-px bg-slateLine mb-8">
              {memberBenefits.map(([title, body]) => (
                <div key={title} className="bg-slate px-6 py-5 flex gap-4 items-start">
                  <Star size={14} color="#FFC43E" style={{ marginTop: "5px", flexShrink: 0 }} />
                  <div>
                    <div className="font-condensed font-bold text-[1.05rem] text-cream tracking-[0.02em]">
                      {title}
                    </div>
                    <div className="text-[0.9rem] text-cream mt-0.5" style={{ opacity: 0.7 }}>
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="cta cta-gold">
              Get $3,250 Travel Cash with WeSalute+
              <span className="font-display text-[16px]">→</span>
            </button>
          </div>

          {/* Right — promo card + testimonial carousel */}
          <div className="flex flex-col gap-5">

            {/* Travel Cash promo placeholder */}
            <div
              className="relative overflow-hidden flex flex-col items-center justify-center"
              style={{
                minHeight: "260px",
                background: "linear-gradient(135deg, #0B2842 0%, #001428 60%, #060D1A 100%)",
                border: "1px solid rgba(255,196,62,0.22)",
              }}
            >
              {/* Decorative arc rings */}
              <div className="absolute pointer-events-none" style={{ width: "420px", height: "420px", borderRadius: "50%", border: "1px solid rgba(255,196,62,0.07)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <div className="absolute pointer-events-none" style={{ width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(255,196,62,0.1)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

              {/* Placeholder badge */}
              <div
                className="absolute top-3 right-3 font-mono text-[8px] tracking-[0.18em] uppercase px-2 py-1"
                style={{ background: "rgba(255,196,62,0.1)", color: "rgba(255,196,62,0.6)", border: "1px solid rgba(255,196,62,0.2)" }}
              >
                Image Placeholder
              </div>

              {/* Content */}
              <div className="relative text-center px-8 py-10">
                <div className="font-mono text-[9px] tracking-[0.32em] uppercase text-gold mb-3" style={{ opacity: 0.6 }}>
                  WeSalute+ Travel Cash
                </div>
                <div
                  className="font-display font-bold text-gold leading-none"
                  style={{ fontSize: "clamp(4.5rem, 10vw, 6.5rem)" }}
                >
                  $3,000
                </div>
                <div className="font-condensed font-bold text-[0.9rem] tracking-[0.14em] uppercase text-cream mt-2" style={{ opacity: 0.7 }}>
                  Every Year
                </div>
                <div
                  className="mx-auto mt-4 mb-4"
                  style={{ width: "40px", height: "1px", background: "rgba(255,196,62,0.4)" }}
                />
                <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-cream" style={{ opacity: 0.45 }}>
                  Included with WeSalute+
                </div>
              </div>
            </div>

            {/* Testimonial carousel */}
            <div
              className="px-7 pt-6 pb-5"
              style={{
                background: "linear-gradient(145deg, rgba(255,196,62,0.07) 0%, rgba(255,196,62,0.02) 100%)",
                border: "1px solid rgba(255,196,62,0.27)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex gap-0.5">
                  {STAR_INDICES.map((i) => (
                    <Star key={i} size={13} color="#FFC43E" />
                  ))}
                </div>
                <div className="font-mono text-[9px] tracking-[0.24em] text-gold uppercase">
                  5.0 · WeSalute+ Members
                </div>
              </div>

              {/* Active slide */}
              <p
                className="font-display italic text-[0.93rem] leading-[1.55] text-cream mb-3"
                style={{ opacity: 0.82, minHeight: "3.5em" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mb-5">
                <div
                  className="font-condensed font-semibold text-[0.88rem] text-cream tracking-[0.04em]"
                  style={{ opacity: 0.9 }}
                >
                  {t.name}
                </div>
                <div
                  className="font-mono text-[9px] tracking-[0.22em] text-gold uppercase mt-0.5"
                  style={{ opacity: 0.55 }}
                >
                  {t.since}
                </div>
              </div>

              {/* Dot navigation */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    style={{
                      width: i === activeIdx ? "22px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: i === activeIdx ? "#FFC43E" : "rgba(255,196,62,0.28)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
