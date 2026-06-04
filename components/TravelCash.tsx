import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";

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
              To mark 250 years, every WeSalute Member gets{" "}
              <span className="underline-mint">$250 in Travel Cash</span> —
              on top of the Travel Cash already included with WeSalute Travel.
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
              Terms apply. Travel Cash can be redeemed as Savings Credits on the WeSalute Travel platform.
            </div>
          </div>

          {/* Right — $250 travel cash image */}
          <div className="relative w-full" style={{ aspectRatio: "1 / 1", minHeight: "320px" }}>
            <Image
              src="/images/250-travel-cash.png"
              alt="$250 in Free Travel Cash"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              sizes="(max-width: 880px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
