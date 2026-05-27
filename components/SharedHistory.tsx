import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";
import { Star } from "./Star";
import { timeline } from "@/lib/content";

export function SharedHistory() {
  return (
    <section
      className="relative px-8 py-[140px] text-slate"
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
            America&apos;s story. <Italic color="#8E1023">WeSalute&apos;s</Italic> place in it.
          </h2>
          <p
            className="text-[1.05rem] leading-[1.65] text-slate max-w-[640px] mx-auto"
            style={{ opacity: 0.7 }}
          >
            The right side of every row is where WeSalute showed up. Some of
            those moments start in 1775 — when a man named Capt. John Parker
            took a stand at Lexington. His direct descendant founded this
            company.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center spine */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
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
                      className="bg-slate text-cream p-6 pr-7"
                      style={{ borderLeft: "3px solid #FFC43E", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
                    >
                      <div className="font-mono text-[11px] tracking-[0.28em] text-gold uppercase font-semibold mb-2.5 flex items-center gap-2">
                        <Star size={11} color="#FFC43E" />
                        WeSalute
                      </div>
                      <p className="text-[0.95rem] leading-[1.6] text-cream" style={{ opacity: 0.95 }}>
                        {row.weSalute}
                      </p>
                    </div>
                  ) : (
                    <div
                      className="font-display italic text-[0.9rem] text-slate pl-5 pt-2"
                      style={{ opacity: 0.35 }}
                    >
                      ↞ before our time
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing quote */}
        <div
          className="mt-10 px-10 py-8 bg-slate text-cream text-center"
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
    </section>
  );
}
