import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";
import { Star } from "./Star";

const benefits = [
  [
    "Open to everyone",
    "Members and new sign-ups alike. Service-verified for full WeSalute+ access.",
  ],
  [
    "1M+ hotels",
    "From budget to boutique to all-inclusive. Compare against any major travel site.",
  ],
  [
    "30,000 cruises",
    "From a weekend at sea to an around-the-world bucket-list voyage.",
  ],
  [
    "Car rentals & resorts",
    "Member rates from Budget, Avis, Hertz, Enterprise — all powered by your Travel Cash.",
  ],
] as const;

export function TravelCash() {
  return (
    <section
      id="travel-cash"
      className="relative px-8 py-20 md:py-[140px] overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, #0B2842 0%, #001E33 60%, #000F1C 100%)",
      }}
    >
      {/* Gold/mint accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: "linear-gradient(#FFC43E, #C9922A, #FFC43E)" }}
      />

      <div className="max-w-[1200px] mx-auto">
        <div
          className="grid gap-20 items-center hero-grid"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left — copy */}
          <div>
            <Eyebrow color="#FFC43E">Celebrating 250 Years</Eyebrow>
            <h2
              className="font-display font-bold leading-[1.0] tracking-[-0.03em] text-cream mt-5 mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              $250 in <Italic color="#FFC43E">FREE</Italic> <br className="hidden sm:block" />
              Travel Cash.
            </h2>
            <p
              className="text-[1.15rem] leading-[1.6] text-cream mb-8"
              style={{ opacity: 0.85 }}
            >
              A real thank you doesn&apos;t end at a tee. To mark 250 years,
              every WeSalute member gets{" "}
              <span className="underline-mint">$250 in Travel Cash</span> — on
              top of the up-to-$3,000 in Travel Cash already included with
              WeSalute Travel.
            </p>

            <ul className="list-none mb-9">
              {benefits.map(([title, body]) => (
                <li
                  key={title}
                  className="flex gap-4 py-3.5 items-start"
                  style={{ borderTop: "1px solid #163756" }}
                >
                  <div
                    className="w-6 h-6 bg-gold text-slate rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  >
                    ✓
                  </div>
                  <div>
                    <div className="font-condensed font-bold text-[1.05rem] text-cream tracking-[0.02em]">
                      {title}
                    </div>
                    <div className="text-[0.9rem] text-cream leading-[1.5] mt-0.5" style={{ opacity: 0.7 }}>
                      {body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button className="cta cta-gold">
              Claim $250 Travel Cash
              <span className="font-display text-[16px]">→</span>
            </button>
            <div className="mt-3 font-mono text-[10px] tracking-[0.24em] text-cream uppercase" style={{ opacity: 0.4 }}>
              Terms apply. Available through Nov 11, 2026.
            </div>
          </div>

          {/* Right — $250 hero card */}
          <div
            className="relative text-center overflow-hidden px-5 py-10 md:px-10 md:py-[60px]"
            style={{
              background: "#F4F0E6",
              border: "1px solid rgba(181,21,45,0.33)",
              boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
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
                className="absolute w-6 h-6"
                style={{
                  ...(x === 0 ? { left: "-1px" } : { right: "-1px" }),
                  ...(y === 0 ? { top: "-1px" } : { bottom: "-1px" }),
                  borderTop: y === 0 ? "2px solid #B5152D" : "none",
                  borderBottom: y === 1 ? "2px solid #B5152D" : "none",
                  borderLeft: x === 0 ? "2px solid #B5152D" : "none",
                  borderRight: x === 1 ? "2px solid #B5152D" : "none",
                }}
              />
            ))}

            {/* "TRAVEL CASH" header row */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-block w-7 h-0.5 bg-americaRed" />
              <span className="font-mono text-[11px] tracking-[0.32em] text-americaNavy uppercase font-bold">
                Travel Cash
              </span>
              <span className="inline-block w-7 h-0.5 bg-americaRed" />
            </div>

            <div className="font-display italic text-[1.6rem] text-americaRed font-semibold -mb-3">
              $
            </div>

            {/* Big 250 */}
            <div className="flex justify-center items-end leading-[0.85]">
              {(
                [
                  ["2", "#1B2A4E"],
                  ["5", "#B5152D"],
                  ["0", "#1B2A4E"],
                ] as [string, string][]
              ).map(([digit, color]) => (
                <span
                  key={digit + color}
                  className="font-display font-extrabold tracking-[-0.06em] travel-cash-numeral"
                  style={{ color }}
                >
                  {digit}
                </span>
              ))}
            </div>

            <div className="font-condensed font-bold text-[1.4rem] text-americaNavy tracking-[0.04em] mt-2">
              FREE · ON US
            </div>

            <div className="flex items-center justify-center gap-2 my-5">
              <span className="inline-block w-5 h-[1.5px] bg-americaRed" />
              <Star size={10} color="#1B2A4E" />
              <span className="inline-block w-5 h-[1.5px] bg-americaRed" />
            </div>

            <p
              className="font-display italic text-[1.05rem] text-americaNavy leading-[1.45]"
              style={{ opacity: 0.85 }}
            >
              Because 250 years is worth more <br className="hidden sm:block" /> than a holiday sale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
