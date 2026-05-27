import { Eyebrow } from "./Eyebrow";
import { Italic } from "./SectionTitle";
import { Star } from "./Star";

const memberBenefits = [
  ["10% off", "the WeSalute merch store. Every order. No minimum."],
  ["Up to $3,000 Travel Cash", "on hotels, cruises, and car rentals — yours, included."],
  ["48-hour early access", "to the 250 Collection and every drop after it."],
  ["WeSalute+ 250 Member Edition", "pin and patch set — not sold to non-members."],
] as const;

export function Membership() {
  return (
    <section
      className="relative px-8 py-[140px]"
      style={{
        background: "linear-gradient(180deg, #000F1C 0%, #001E33 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div
          className="grid gap-[72px] items-center hero-grid"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left — pitch */}
          <div>
            <Eyebrow color="#FFC43E">Join WeSalute+</Eyebrow>
            <h2
              className="font-display font-bold leading-[1.05] tracking-[-0.025em] text-cream mt-5 mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
            >
              The brand says <br />
              thank you.{" "}
              <Italic color="#B5DFD0">The membership proves it.</Italic>
            </h2>
            <p
              className="text-[1.08rem] leading-[1.65] text-cream mb-8"
              style={{ opacity: 0.82 }}
            >
              For 27 years, WeSalute+ has delivered a real thank you in the
              form of real savings — built with America&apos;s leading brands,
              available every day, for every one of seven service communities.
            </p>

            <div className="grid gap-px bg-slateLine mb-8">
              {memberBenefits.map(([title, body]) => (
                <div
                  key={title}
                  className="bg-slate px-6 py-5 flex gap-4 items-start"
                >
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
              Become A Member
              <span className="font-display text-[16px]">→</span>
            </button>
          </div>

          {/* Right — 3M+ stat card */}
          <div
            className="relative text-center px-12 py-14"
            style={{
              background: "linear-gradient(145deg, rgba(255,196,62,0.1) 0%, rgba(255,196,62,0.02) 100%)",
              border: "1px solid rgba(255,196,62,0.27)",
            }}
          >
            <div className="font-mono text-[11px] tracking-[0.32em] text-gold uppercase mb-5">
              The Community
            </div>

            <div
              className="font-display font-extrabold text-cream leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(6rem, 11vw, 9rem)" }}
            >
              3M
              <span
                className="font-display italic text-gold"
                style={{ fontSize: "0.55em", verticalAlign: "top", position: "relative", top: "0.4em" }}
              >
                +
              </span>
            </div>
            <div className="font-display italic text-[1.3rem] text-mint mt-1">
              members and counting.
            </div>

            <div className="w-20 h-px bg-gold mx-auto my-7" />

            <p className="font-sans text-[0.92rem] leading-[1.6] text-cream" style={{ opacity: 0.78 }}>
              Verified service across military, veterans, nurses, first
              responders, medical professionals, teachers, civil servants, and
              students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
