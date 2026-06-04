import { Eyebrow } from "./Eyebrow";
import { SectionTitle, Italic } from "./SectionTitle";
import { Star } from "./Star";
import { StarField } from "./StarField";
import { America250Logo } from "./America250Logo";
import { merchOpen, merch250, merchMember } from "@/lib/content";

function CornerOrnaments({ color = "#FFC43E", size = 16 }: { color?: string; size?: number }) {
  return (
    <>
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
          className="absolute z-[2]"
          style={{
            ...(x === 0 ? { left: "12px" } : { right: "12px" }),
            ...(y === 0 ? { top: "12px" } : { bottom: "12px" }),
            width: `${size}px`,
            height: `${size}px`,
            borderTop: y === 0 ? `1.5px solid ${color}` : "none",
            borderBottom: y === 1 ? `1.5px solid ${color}` : "none",
            borderLeft: x === 0 ? `1.5px solid ${color}` : "none",
            borderRight: x === 1 ? `1.5px solid ${color}` : "none",
          }}
        />
      ))}
    </>
  );
}

export function Collection() {
  return (
    <section
      id="collection"
      className="px-8 pt-20 md:pt-[140px] pb-20 bg-slate"
      style={{ borderTop: "1px solid #163756" }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[72px]">
          <Eyebrow color="#FFC43E" className="justify-center">
            The Collection
          </Eyebrow>
          <SectionTitle>
            Made with gratitude. <br className="hidden sm:block" />
            <Italic color="#FFC43E">Worn with pride.</Italic>
          </SectionTitle>
          <p
            className="text-[1.05rem] leading-[1.6] text-cream max-w-[640px] mx-auto mt-6"
            style={{ opacity: 0.75 }}
          >
            Merch that really means something. Every piece anchored to a nation built by people who serve.
          </p>
        </div>

        {/* ── TIER 1 — Open Collection ── */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8 flex-wrap gap-3">
            <div>
              <div className="font-mono text-[11px] tracking-[0.3em] text-gold uppercase">
                Open Collection · Tier 01
              </div>
              <h3 className="font-display font-bold text-[2rem] text-cream mt-1.5">
                For everyone. Forever.
              </h3>
            </div>
            <div className="text-cream text-[0.9rem] max-w-[320px]" style={{ opacity: 0.6 }}>
              Available to all. The pieces that anchor the campaign and live on after it.
            </div>
          </div>

          <div className="merch-grid-3 grid gap-5" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {merchOpen.map((m, i) => (
              <div
                key={m.name}
                className="merch-card relative overflow-hidden"
                style={{
                  background: "#0B2842",
                  border: "1px solid #163756",
                }}
              >
                {/* Product visual */}
                <div
                  className="merch-mark relative overflow-hidden flex items-center justify-center"
                  style={{
                    height: "260px",
                    background:
                      i === 0
                        ? "#F4F0E6"
                        : "radial-gradient(ellipse at center, #0B2842 0%, #000F1C 100%)",
                    transition: "transform 0.5s",
                  }}
                >
                  {i === 0 ? (
                    <div style={{ transform: "scale(0.45)" }}>
                      <America250Logo size={400} bg="#F4F0E6" />
                    </div>
                  ) : i === 1 ? (
                    <svg width="160" height="160" viewBox="0 0 160 160">
                      <circle cx="80" cy="80" r="68" fill="none" stroke="#FFC43E" strokeWidth="1" opacity="0.5" />
                      <circle cx="80" cy="80" r="56" fill="none" stroke="#FFC43E" strokeWidth="0.5" opacity="0.3" />
                      {[0, 1, 2, 3, 4, 5, 6].map((j) => {
                        const angle = (j / 7) * Math.PI * 2 - Math.PI / 2;
                        const x = 80 + Math.cos(angle) * 48;
                        const y = 80 + Math.sin(angle) * 48;
                        return (
                          <g key={j} transform={`translate(${x - 6}, ${y - 6})`}>
                            <Star size={12} color="#FFC43E" />
                          </g>
                        );
                      })}
                      <text x="80" y="76" textAnchor="middle" fill="#F4F0E6"
                        style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 16, fontWeight: 700 }}>
                        SEVEN
                      </text>
                      <text x="80" y="94" textAnchor="middle" fill="#FFC43E"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: 9, letterSpacing: "0.32em", fontWeight: 700 }}>
                        COMMUNITIES
                      </text>
                    </svg>
                  ) : (
                    <svg width="180" height="160" viewBox="0 0 180 160">
                      <rect x="30" y="40" width="60" height="80" fill="#1B2A4E" stroke="#FFC43E" strokeWidth="1.5" />
                      <rect x="90" y="50" width="60" height="80" fill="#B5152D" stroke="#FFC43E" strokeWidth="1.5" />
                      <text x="60" y="86" textAnchor="middle" fill="#F4F0E6"
                        style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 22, fontWeight: 800 }}>
                        250
                      </text>
                      <text x="120" y="96" textAnchor="middle" fill="#F4F0E6"
                        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif", fontSize: 10, letterSpacing: "0.2em", fontWeight: 700 }}>
                        JULY 4
                      </text>
                    </svg>
                  )}
                  <div
                    className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.24em] uppercase"
                    style={{ color: i === 0 ? "#8E1023" : "#FFC43E" }}
                  >
                    {m.tag}
                  </div>
                  <div
                    className="absolute top-4 right-4 font-display font-bold text-[1rem]"
                    style={{ color: i === 0 ? "#1B2A4E" : "#FFC43E" }}
                  >
                    {m.price}
                  </div>
                </div>

                <div className="p-6 pb-7">
                  <div className="font-mono text-[10px] tracking-[0.24em] text-gold uppercase mb-1.5">
                    {m.type}
                  </div>
                  <h4 className="font-display font-bold text-[1.25rem] text-cream mb-2.5 leading-[1.2]">
                    {m.name}
                  </h4>
                  <p className="text-[0.9rem] leading-[1.55] text-cream" style={{ opacity: 0.7 }}>
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TIER 2 — 250 Numbered Edition ── */}
        <div className="mb-20">
          <div className="mb-8">
            <div className="font-mono text-[11px] tracking-[0.3em] text-gold uppercase">
              Numbered Edition · Tier 02
            </div>
            <h3 className="font-display font-bold text-[2rem] text-cream mt-1.5">
              Only 250 will ever exist.
            </h3>
          </div>

          <div
            className="merch-card numbered-grid relative grid overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0B2842 0%, #000F1C 100%)",
              border: "2px solid rgba(255,196,62,0.53)",
              gridTemplateColumns: "1fr 1fr",
              boxShadow: "0 20px 60px rgba(255,196,62,0.07)",
            }}
          >
            <CornerOrnaments color="#FFC43E" size={16} />

            {/* Left — visual + hangtag */}
            <div
              className="merch-mark relative flex flex-col items-center justify-center min-h-[320px] md:min-h-[440px] px-6 py-10 md:px-12 md:py-[60px]"
              style={{
                background: "radial-gradient(ellipse at center, #0B2842 0%, #000F1C 100%)",
                transition: "transform 0.5s",
              }}
            >
              <StarField count={30} opacity={0.2} />

              {/* Hangtag */}
              <div
                className="relative z-[2] flex flex-col items-center justify-center text-slate text-center"
                style={{
                  width: "180px",
                  height: "260px",
                  background: "#F7F1DF",
                  borderRadius: "4px",
                  transform: "rotate(-3deg)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  padding: "20px",
                }}
              >
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full"
                  style={{ background: "#000F1C", border: "2px solid #FFC43E" }}
                />
                <div className="font-mono text-[9px] tracking-[0.32em] text-americaRedDeep uppercase font-semibold mt-8">
                  Numbered Edition
                </div>
                <div
                  className="font-display font-extrabold text-slate leading-none my-4 tracking-[-0.04em]"
                  style={{ fontSize: "4.4rem" }}
                >
                  001
                </div>
                <div className="font-display italic text-[0.95rem] text-slate" style={{ opacity: 0.7 }}>
                  of 250
                </div>
                <div className="w-[60px] h-px bg-slate mx-auto my-4" style={{ opacity: 0.3 }} />
                <div className="font-mono text-[8px] tracking-[0.24em] text-slate uppercase" style={{ opacity: 0.6 }}>
                  WeSalute · 1776–2026
                </div>
              </div>

              {/* Live counter mock */}
              <div
                className="relative z-[2] mt-7 font-mono text-[11px] tracking-[0.28em] text-gold uppercase text-center"
              >
                <span
                  className="inline-block w-2 h-2 rounded-full bg-gold mr-2"
                  style={{ boxShadow: "0 0 12px #FFC43E", animation: "glow-pulse 2s infinite" }}
                />
                237 of 250 remaining
              </div>
            </div>

            {/* Right — copy */}
            <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-[60px]">
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase mb-3">
                {merch250.type}
              </div>
              <h3 className="font-display font-bold text-[2.4rem] text-cream leading-[1.05] tracking-[-0.02em] mb-5">
                {merch250.name}
              </h3>
              <p className="text-[1.02rem] leading-[1.65] text-cream mb-8" style={{ opacity: 0.82 }}>
                {merch250.desc}
              </p>

              <div
                className="flex gap-8 pb-6 mb-8 flex-wrap"
                style={{ borderBottom: "1px solid #163756" }}
              >
                {[
                  ["EDITION", "1 — 250"],
                  ["PRICE", merch250.price],
                  ["FULFILLMENT", "Numbered"],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div className="font-mono text-[10px] tracking-[0.24em] text-cream mb-1" style={{ opacity: 0.5 }}>
                      {label}
                    </div>
                    <div className="font-display font-bold text-[1.3rem] text-gold">{val}</div>
                  </div>
                ))}
              </div>

              <button className="cta cta-gold self-start">
                Secure Your Number
                <span className="font-display text-[16px]">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── TIER 3 — Member Edition ── */}
        <div>
          <div className="mb-8">
            <div className="font-mono text-[11px] tracking-[0.3em] text-gold uppercase">
              Members Only · Tier 03
            </div>
            <h3 className="font-display font-bold text-[2rem] text-cream mt-1.5">
              Reserved for the ones who already do the work.
            </h3>
          </div>

          <div
            className="merch-card member-grid grid gap-8 md:gap-12 items-center px-6 py-8 md:px-12 md:py-12"
            style={{
              background: "#0B2842",
              border: "1px solid rgba(181,223,208,0.33)",
              gridTemplateColumns: "1fr 1.4fr",
            }}
          >
            {/* Left — pin + patch mock */}
            <div className="flex justify-center gap-8 items-center">
              {/* Pin */}
              <div
                className="w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center text-center font-display font-bold"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #F5D98A, #C9922A)",
                  color: "#001E33",
                  boxShadow:
                    "0 12px 30px rgba(0,0,0,0.5), inset 0 -2px 8px rgba(0,0,0,0.2)",
                }}
              >
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.16em", opacity: 0.7 }}>
                  WESALUTE+
                </div>
                <div style={{ fontSize: "1.5rem", margin: "2px 0" }}>250</div>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.2em", opacity: 0.7 }}>
                  1776 · 2026
                </div>
              </div>

              {/* Patch */}
              <div
                className="w-[120px] h-[120px] flex flex-col items-center justify-center text-center font-display font-bold text-cream rounded-xl p-2"
                style={{
                  background: "#000F1C",
                  border: "4px solid #FFC43E",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
                }}
              >
                <Star size={20} color="#FFC43E" />
                <div style={{ fontSize: "0.8rem", margin: "6px 0 2px" }}>MEMBER</div>
                <div style={{ fontSize: "0.55rem", letterSpacing: "0.18em", color: "#FFC43E" }}>
                  EDITION
                </div>
              </div>
            </div>

            {/* Right — copy */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase mb-2.5">
                {merchMember.type}
              </div>
              <h3 className="font-display font-bold text-[1.7rem] text-cream mb-4 leading-[1.2]">
                {merchMember.name}
              </h3>
              <p className="text-[0.98rem] leading-[1.6] text-cream mb-5" style={{ opacity: 0.78 }}>
                {merchMember.desc}
              </p>

              <div
                className="inline-flex items-center gap-3 px-[18px] py-2.5 mb-5"
                style={{
                  background: "rgba(181,223,208,0.08)",
                  border: "1px solid rgba(181,223,208,0.27)",
                }}
              >
                <Star size={11} color="#FFC43E" />
                <span className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
                  {merchMember.price} · WeSalute+ verified only
                </span>
              </div>

              <div>
                <button
                  className="cta cta-ghost"
                  style={{ borderColor: "#FFC43E", color: "#FFC43E" }}
                >
                  Become A Member To Unlock
                  <span className="font-display text-[16px]">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
