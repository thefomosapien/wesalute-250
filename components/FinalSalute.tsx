import { StarField } from "./StarField";
import { Eyebrow } from "./Eyebrow";

export function FinalSalute() {
  return (
    <section
      className="relative px-8 py-16 md:py-[120px] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #001E33 0%, #000F1C 100%)",
      }}
    >
      <StarField count={70} opacity={0.18} />

      <div className="max-w-[780px] mx-auto text-center relative">
        <Eyebrow color="#FFC43E" className="justify-center">
          Celebrate with us
        </Eyebrow>

        <h2
          className="font-display font-bold leading-[1.05] tracking-[-0.025em] text-cream mt-5 mb-6"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
        >
          WeSalute is celebrating America 250 all year long. But the limited edition merch may not last!
        </h2>

        <p
          className="text-[1.1rem] leading-[1.65] text-cream max-w-[620px] mx-auto mb-10"
          style={{ opacity: 0.82 }}
        >
          We will continue to release new merch, deals, and offers throughout
          the year. Some merch will be limited to 250 products sold to
          commemorate the event. Don&apos;t miss out!
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-[60px]">
          <button className="cta cta-gold">
            Shop The Collection
            <span className="font-display text-[16px]">→</span>
          </button>
          <button className="cta cta-ghost">Join WeSalute+</button>
        </div>

        {/* Email capture */}
        <div
          className="px-8 py-8 max-w-[560px] mx-auto"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,196,62,0.07) 0%, rgba(255,196,62,0.02) 100%)",
            border: "1px solid rgba(255,196,62,0.27)",
          }}
        >
          <div className="font-mono text-[11px] tracking-[0.32em] text-gold uppercase mb-3">
            DON&apos;T MISS OUT
          </div>
          <p className="font-display font-medium text-[1.2rem] text-cream mb-5 leading-[1.3]">
            Get notified when we drop new merch and deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-[18px] py-3.5 font-sans text-[0.95rem] text-cream outline-none"
              style={{
                background: "#000F1C",
                border: "1px solid #163756",
              }}
            />
            <button className="cta cta-gold" style={{ padding: "14px 24px", fontSize: "12px" }}>
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
