import { StarField } from "./StarField";
import { Eyebrow } from "./Eyebrow";
import { SectionTitle, Italic } from "./SectionTitle";
import { Star } from "./Star";
import { communities } from "@/lib/content";

export function SevenCommunities() {
  return (
    <section
      id="communities"
      className="relative px-8 py-20 md:py-[140px] bg-slate overflow-hidden"
    >
      <StarField count={50} opacity={0.14} />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="mb-[72px]">
          <Eyebrow color="#B5DFD0">Service Through The Centuries</Eyebrow>
          <SectionTitle>
            Seven communities. <br className="hidden sm:block" />
            One country.{" "}
            <Italic color="#B5DFD0">250 years of showing up.</Italic>
          </SectionTitle>
          <p className="text-[1.1rem] leading-[1.65] text-cream mt-7 max-w-[640px]" style={{ opacity: 0.78 }}>
            Service has never been a single uniform. The first 250 years were
            built by people who served in seven different ways. This collection
            honors them all.
          </p>
        </div>

        <div
          className="seven-grid border border-slateLine"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {communities.map((comm, i) => (
            <div
              key={comm.name}
              className="hover-lift relative min-h-[220px] p-9 px-8"
              style={{
                borderRight: i < communities.length - 1 ? "1px solid #163756" : "none",
                borderBottom: "1px solid #163756",
                background:
                  i === 0
                    ? "linear-gradient(135deg, #0B2842 0%, #001E33 100%)"
                    : "transparent",
              }}
            >
              <div className="absolute top-4 right-5 font-display font-bold text-[1.4rem] text-gold" style={{ opacity: 0.5 }}>
                0{i + 1}
              </div>
              <Star size={20} color="#B5DFD0" style={{ marginBottom: "20px" }} />
              <h3 className="font-display font-bold text-[1.4rem] text-cream mb-2.5 leading-[1.15]">
                {comm.name}
              </h3>
              <p className="text-[0.92rem] leading-[1.55] text-cream mb-4" style={{ opacity: 0.7 }}>
                {comm.desc}
              </p>
              <div className="font-mono text-[10px] tracking-[0.24em] text-gold uppercase font-semibold">
                {comm.since}
              </div>
            </div>
          ))}

          {/* 8th cell — closing statement */}
          <div
            className="min-h-[220px] p-9 px-8 flex flex-col justify-center items-start"
            style={{
              background: "linear-gradient(135deg, rgba(255,196,62,0.13) 0%, rgba(255,196,62,0.03) 100%)",
              borderBottom: "1px solid #163756",
            }}
          >
            <div className="font-mono text-[11px] tracking-[0.28em] text-gold mb-3">
              ALL UNDER ONE BANNER
            </div>
            <h3 className="font-display italic font-medium text-[1.4rem] text-cream leading-[1.25]">
              The only brand that honors all of them.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
