import { StarField } from "./StarField";
import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";
import { America250Logo } from "./America250Logo";

const stats = [
  ["250", "Numbered shirts"],
  ["7", "Communities of service"],
  ["3M+", "WeSalute members"],
  ["1", "Real Thank You®"],
] as const;

export function Hero() {
  return (
    <section
      className="relative min-h-screen px-8 pt-24 md:pt-[140px] pb-16 md:pb-[100px] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 75% 30%, #0B2842 0%, #001E33 50%, #000F1C 100%)",
      }}
    >
      <StarField count={80} opacity={0.22} />

      {/* Decorative arc rings behind crest card */}
      <div
        className="absolute top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          right: "-200px",
          width: "900px",
          height: "900px",
          border: "1px solid rgba(255,196,62,0.13)",
        }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          right: "-300px",
          width: "1100px",
          height: "1100px",
          border: "1px solid rgba(255,196,62,0.07)",
        }}
      />

      <div
        className="max-w-[1280px] mx-auto relative z-[2] grid gap-20 items-center hero-grid"
        style={{ gridTemplateColumns: "1.3fr 1fr" }}
      >
        {/* Left — copy */}
        <div>
          <div className="reveal reveal-1">
            <Eyebrow color="#B5DFD0">
              WeSalute × America 250 · Exclusive Collaboration
            </Eyebrow>
          </div>

          <h1
            className="reveal reveal-2 font-display font-bold leading-[0.96] tracking-[-0.035em] text-cream my-7"
            style={{ fontSize: "clamp(3.2rem, 7vw, 6.2rem)" }}
          >
            250 Years <Italic color="#B5DFD0">of</Italic> Service.
            <br className="hidden sm:block" />
            One Real <Italic color="#FFC43E">Thank You.</Italic>
          </h1>

          <p
            className="reveal reveal-3 text-[1.15rem] leading-[1.65] text-cream max-w-[540px] mb-10"
            style={{ opacity: 0.82 }}
          >
            Every other brand will print "250" on a tee. We earned it. For
            every one of America&apos;s first 250 years, this country has been
            built by people who serve. WeSalute has spent its history saying so.
          </p>

          <div className="reveal reveal-4 flex gap-4 flex-wrap">
            <button className="cta cta-gold">
              Shop The Collection
              <span className="font-display text-[16px]">→</span>
            </button>
            <button className="cta cta-ghost">Claim $250 Travel Cash</button>
          </div>

          {/* Stats strip */}
          <div
            className="reveal reveal-4 mt-[72px] pt-8 grid gap-6 stats-grid"
            style={{ borderTop: "1px solid #163756" }}
          >
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-display font-bold text-[2.2rem] text-gold leading-none mb-2">
                  {n}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-mint uppercase">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — America 250 mark card */}
        <div className="reveal reveal-2 flex flex-col items-center justify-center relative gap-7">
          {/* Glow halo */}
          <div
            className="glow absolute pointer-events-none"
            style={{
              width: "440px",
              height: "440px",
              background:
                "radial-gradient(circle, rgba(255,196,62,0.12) 0%, transparent 60%)",
              filter: "blur(20px)",
            }}
          />

          {/* Card with corner ornaments */}
          <div
            className="relative z-[2] max-w-full"
            style={{
              padding: "24px 24px 20px",
              background: "#F4F0E6",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,196,62,0.2)",
            }}
          >
            {/* Corner ornaments */}
            {(
              [
                [0, 0],
                [1, 0],
                [0, 1],
                [1, 1],
              ] as [0 | 1, 0 | 1][]
            ).map(([x, y], i) => (
              <div
                key={i}
                className="absolute w-3.5 h-3.5 z-[2]"
                style={{
                  ...(x === 0 ? { left: "10px" } : { right: "10px" }),
                  ...(y === 0 ? { top: "10px" } : { bottom: "10px" }),
                  borderTop: y === 0 ? "1.5px solid #B5152D" : "none",
                  borderBottom: y === 1 ? "1.5px solid #B5152D" : "none",
                  borderLeft: x === 0 ? "1.5px solid #B5152D" : "none",
                  borderRight: x === 1 ? "1.5px solid #B5152D" : "none",
                }}
              />
            ))}

            <America250Logo size={360} bg="#F4F0E6" />

            {/* Co-brand lockup beneath the mark */}
            <div
              className="mt-4 pt-4 flex flex-col items-center gap-1.5"
              style={{ borderTop: "1px solid rgba(181,21,45,0.2)" }}
            >
              <div className="font-mono text-[9px] tracking-[0.32em] uppercase font-semibold text-americaRedDeep">
                Presented By
              </div>
              <div className="font-condensed font-black text-[20px] tracking-[0.32em] text-americaNavy">
                WESALUTE
              </div>
              <div className="font-display italic text-[13px] text-americaRedDeep" style={{ opacity: 0.85 }}>
                A Real Thank You.®
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.32em] text-mint uppercase opacity-60">
        <span>The Story Below</span>
        <span className="text-[18px]">↓</span>
      </div>
    </section>
  );
}
