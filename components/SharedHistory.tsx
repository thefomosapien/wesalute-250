"use client";

import { useState, useRef } from "react";
import { Camera } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";
import { Star } from "./Star";
import { ImageModal } from "./ImageModal";
import { timeline, TimelineEntry } from "@/lib/content";
import { TRAVEL_CASH_250_URL, COLLECTION_LIMITED_URL } from "@/lib/links";

export function SharedHistory() {
  const [activePhoto, setActivePhoto] = useState<{
    photo: NonNullable<TimelineEntry["photo"]>;
    year: string;
  } | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openPhoto(
    e: React.MouseEvent<HTMLButtonElement>,
    photo: NonNullable<TimelineEntry["photo"]>,
    year: string
  ) {
    triggerRef.current = e.currentTarget;
    setActivePhoto({ photo, year });
  }

  function closeModal() {
    setActivePhoto(null);
    triggerRef.current?.focus();
  }

  return (
    <section
      className="relative px-8 py-20 md:py-[140px] text-slate"
      style={{ background: "#F7F1DF" }}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, rgba(0,30,51,0.04) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 80%, rgba(154,42,42,0.05) 0%, transparent 40%),
            repeating-linear-gradient(45deg, transparent 0px, transparent 60px, rgba(0,30,51,0.015) 60px, rgba(0,30,51,0.015) 61px)
          `,
        }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Eyebrow color="#8E1023">A Shared History</Eyebrow>
          <h2
            className="font-display font-bold leading-[1.05] tracking-[-0.025em] text-slate mt-4 mb-5"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            WeSalute has a special place in <Italic color="#8E1023">America&apos;s story.</Italic>
          </h2>
          <p
            className="text-[1.05rem] leading-[1.65] text-slate max-w-[640px] mx-auto"
            style={{ opacity: 0.7 }}
          >
            See how the nation&apos;s timeline aligns with WeSalute.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center spine */}
          <div
            className="timeline-spine absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background:
                "linear-gradient(rgba(142,16,35,0.67), rgba(0,30,51,0.53), rgba(142,16,35,0.67))",
            }}
          />

          {timeline.map((row) => {
            const hasWeSalute = !!row.weSalute;
            return (
              <div
                key={row.year}
                className="timeline-row grid mb-14 items-start relative"
                style={{ gridTemplateColumns: "1fr 60px 1fr", gap: "32px" }}
              >
                {/* LEFT — America's history */}
                <div className="timeline-side-left text-right pr-5">
                  <div className="font-mono text-[11px] tracking-[0.28em] text-americaRedDeep uppercase font-semibold mb-1.5">
                    The Nation
                  </div>
                  <h3 className="font-display font-bold text-[1.5rem] leading-[1.15] text-slate mb-2.5">
                    {row.nation}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.6] text-slate" style={{ opacity: 0.7 }}>
                    {row.nationBody}
                  </p>
                </div>

                {/* CENTER — year marker */}
                <div className="flex flex-col items-center justify-start relative z-[2] pt-1">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-[0.78rem] tracking-[-0.01em]"
                    style={{
                      background: hasWeSalute ? "#001E33" : "#F7F1DF",
                      border: `2px solid ${hasWeSalute ? "#FFC43E" : "#8E1023"}`,
                      color: hasWeSalute ? "#FFC43E" : "#8E1023",
                      boxShadow: hasWeSalute ? "0 0 16px rgba(255,196,62,0.27)" : "none",
                    }}
                  >
                    {row.year.split("–")[0]}
                  </div>
                </div>

                {/* RIGHT — WeSalute's place */}
                <div className="timeline-side-right">
                  {row.weSalute ? (
                    <div
                      className="relative bg-slate text-cream p-6 pr-7"
                      style={{
                        borderLeft: "3px solid #FFC43E",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        paddingBottom: row.photo ? "48px" : undefined,
                      }}
                    >
                      <div className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase font-semibold mb-2.5 flex items-center gap-2">
                        <Star size={11} color="#FFC43E" />
                        WeSalute
                      </div>
                      <p className="text-[0.95rem] leading-[1.6] text-cream" style={{ opacity: 0.95 }}>
                        {row.weSalute}
                      </p>
                      {row.photo && (
                        <button
                          className="camera-btn absolute bottom-3 right-3 flex items-center justify-center rounded-full transition-colors duration-200"
                          style={{
                            width: "28px",
                            height: "28px",
                            background: "transparent",
                            border: "1px solid rgba(255,196,62,0.4)",
                            cursor: "pointer",
                            color: "rgba(255,196,62,0.6)",
                          }}
                          aria-label={`View archival photo — ${row.year}`}
                          onClick={(e) => openPhoto(e, row.photo!, row.year)}
                        >
                          <Camera size={14} />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div
                      className="relative bg-slate text-cream p-6 pr-7"
                      style={{
                        borderLeft: "3px solid #FFC43E",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        paddingBottom: row.photo ? "48px" : undefined,
                      }}
                    >
                      <div className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase font-semibold mb-2.5 flex items-center gap-2">
                        <Star size={11} color="#FFC43E" />
                        WeSalute
                      </div>
                      <p className="text-[0.95rem] leading-[1.6] text-cream" style={{ opacity: 0.95 }}>
                        Scott Higgins, co-founder of WeSalute, is a direct
                        descendant of Captain John Parker — the man who
                        assembled the Lexington militia and gave the order on
                        that green in 1775.
                      </p>
                      {row.photo && (
                        <button
                          className="camera-btn absolute bottom-3 right-3 flex items-center justify-center rounded-full transition-colors duration-200"
                          style={{
                            width: "28px",
                            height: "28px",
                            background: "transparent",
                            border: "1px solid rgba(255,196,62,0.4)",
                            cursor: "pointer",
                            color: "rgba(255,196,62,0.6)",
                          }}
                          aria-label={`View archival photo — ${row.year}`}
                          onClick={(e) => openPhoto(e, row.photo!, row.year)}
                        >
                          <Camera size={14} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA interstitial — appears after the history section lands */}
        <div
          className="md:hidden mt-2 mb-12 px-1 py-8 flex flex-col items-center gap-4 text-center"
          style={{ borderTop: "1px solid rgba(0,30,51,0.15)" }}
        >
          <p
            className="font-display italic text-slate text-[1.05rem] leading-[1.45] max-w-[320px]"
            style={{ opacity: 0.7 }}
          >
            27 years of A Real Thank You. Shop the collection that marks the moment.
          </p>
          <div className="flex flex-col w-full gap-2">
            <a
              href={COLLECTION_LIMITED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta cta-gold w-full justify-center"
              style={{ padding: "14px 20px", fontSize: "13px", textDecoration: "none" }}
            >
              Shop The 250 Collection
              <span className="font-display text-[15px]">→</span>
            </a>
            <a
              href={TRAVEL_CASH_250_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-condensed font-bold text-[12px] tracking-[0.2em] uppercase text-americaRedDeep"
              style={{ textDecoration: "none", padding: "8px" }}
            >
              Claim $250 in Free Travel Cash →
            </a>
          </div>
        </div>

        {/* Closing quote */}
        <div
          className="mt-10 px-5 py-6 md:px-10 md:py-8 bg-slate text-cream text-center"
          style={{ borderTop: "3px solid #FFC43E" }}
        >
          <p className="font-display italic font-normal text-[1.4rem] leading-[1.4] max-w-[720px] mx-auto">
            &ldquo;It is for us, the living, to be dedicated here to the
            unfinished work which they who fought here have thus far so nobly
            advanced.&rdquo;
          </p>
          <div className="mt-3 font-mono text-[11px] tracking-[0.28em] text-gold uppercase">
            Lincoln · Gettysburg · 1863
          </div>
        </div>
      </div>

      {/* Photo modal */}
      {activePhoto && (
        <ImageModal
          photo={activePhoto.photo}
          year={activePhoto.year}
          isOpen={true}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
