import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";
import { Star } from "./Star";

const STAR_INDICES = [0, 1, 2, 3, 4];

const testimonials = [
  { quote: "Your testimonial will appear here.", attr: "WeSalute+ Member" },
  { quote: "Your testimonial will appear here.", attr: "WeSalute+ Member" },
  { quote: "Your testimonial will appear here.", attr: "WeSalute+ Member" },
];

export function Membership() {
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
              Get even MORE with WeSalute+.{" "}
              <br className="hidden sm:block" />
              <Italic color="#FFC43E">Get A Real Thank You&reg;.</Italic>
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

            <button className="cta cta-gold">
              Get $3,250 Travel Cash with WeSalute+
              <span className="font-display text-[16px]">→</span>
            </button>
          </div>

          {/* Right — Testimonials */}
          <div
            className="relative px-8 py-10 md:px-10 md:py-12 flex flex-col"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,196,62,0.08) 0%, rgba(255,196,62,0.02) 100%)",
              border: "1px solid rgba(255,196,62,0.27)",
            }}
          >
            {/* Rating header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                {STAR_INDICES.map((i) => (
                  <Star key={i} size={17} color="#FFC43E" />
                ))}
              </div>
              <div className="font-mono text-[10px] tracking-[0.24em] text-gold uppercase">
                5.0 · WeSalute+ Members
              </div>
            </div>

            {/* Testimonials */}
            <div className="flex flex-col">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="py-5"
                  style={{ borderTop: "1px solid #163756" }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {STAR_INDICES.map((j) => (
                      <Star key={j} size={11} color="#FFC43E" />
                    ))}
                  </div>
                  <p
                    className="font-display italic text-[0.95rem] leading-[1.55] text-cream"
                    style={{ opacity: 0.78 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    className="font-mono text-[10px] tracking-[0.22em] text-gold uppercase mt-2"
                    style={{ opacity: 0.55 }}
                  >
                    — {t.attr}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
