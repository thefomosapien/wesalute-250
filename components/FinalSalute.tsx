import { StarField } from "./StarField";
import { Eyebrow } from "./Eyebrow";
import { JOIN_URL, COLLECTION_LIMITED_URL } from "@/lib/links";

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
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
        >
          WeSalute is celebrating America 250 all year long but the limited edition merch will not last!
        </h2>

        <p
          className="text-[1.1rem] leading-[1.65] text-cream max-w-[620px] mx-auto mb-10"
          style={{ opacity: 0.82 }}
        >
          We will continue to release new merch, deals, and offers throughout
          the year. Some merch will be limited to 250 products sold to
          commemorate the event. Don&apos;t miss out!
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={JOIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta cta-gold"
            style={{ textDecoration: "none" }}
          >
            JOIN WESALUTE
            <span className="font-display text-[16px]">→</span>
          </a>
          <a
            href={COLLECTION_LIMITED_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta cta-ghost"
            style={{ textDecoration: "none" }}
          >
            SHOP THE COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
}
