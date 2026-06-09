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
    paragraphs: [
      "In less than six months, my family has saved over $1,100 through WeSalute+! We saved several hundred dollars with JetBlue alone.",
      "Between the 5% off and free checked bags, we are now pretty devoted to using our WeSalute+ membership to fly JetBlue wherever we go.",
    ],
    name: "Amber Cooper",
    since: "WeSalute+ Member since 2022",
  },
  {
    paragraphs: [
      "I joined WeSalute+ in 2016. I looked at the WeSalute website and saw all of the retail and travel partners, I immediately enrolled in the annual plan. I've enjoyed tracking all my savings with the WeSalute+ ID Card. In just a few transactions, my card has paid for itself!",
    ],
    name: "Holly Landau",
    since: "WeSalute+ Member since 2016",
  },
  {
    paragraphs: [
      "Thank you very much. WeSalute+ has been extremely rewarding to me. I am very elated to be a member. The services and benefits are spectacular.",
    ],
    name: "Charles F. Harris",
    since: "WeSalute Member since 2019",
  },
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
                  {t.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="font-display italic text-[0.95rem] leading-[1.55] text-cream"
                      style={{ opacity: 0.78, marginBottom: pi < t.paragraphs.length - 1 ? "0.65em" : 0 }}
                    >
                      {pi === 0 && <>&ldquo;</>}{p}{pi === t.paragraphs.length - 1 && <>&rdquo;</>}
                    </p>
                  ))}
                  <div className="mt-2.5">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
