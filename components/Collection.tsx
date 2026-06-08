import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { SectionTitle, Italic } from "./SectionTitle";
import { Star } from "./Star";

const collections = [
  {
    title: "WeSalute 250 — Limited Edition",
    handle: "wesalute-250-limited-edition",
    desc: "Designs honoring every community that has answered the call — military, veterans, first responders, nurses, educators, and civil servants. Each design limited to 250 orders.",
    image:
      "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/vintage-corduroy-cap-navy-front-6a220a204e463.jpg?v=1780615722",
    tag: "Limited Edition",
    tagColor: "#FFC43E",
  },
  {
    title: "America 250 — WeSalute+ Exclusive Merch",
    handle: "wesalute-250-member-edition",
    desc: "Exclusive merch for WeSalute+ Members — not available anywhere else in the WeSalute 250 collection. Our way of recognizing the people who made this community what it is.",
    image: null,
    tag: "Members Only",
    tagColor: "#B5DFD0",
  },
  {
    title: "Gifts & Bundles",
    handle: "gifts-bundles",
    desc: "Curated gift sets for the moments that matter — military retirements, Nurses Week, Veterans Day, and every occasion when someone just deserves to be acknowledged.",
    image: null,
    tag: "Gift Sets",
    tagColor: "#FFC43E",
  },
] as const;

const STARS = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export function Collection() {
  return (
    <section
      id="limited-merch"
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

        {/* Collection grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {collections.map((col) => (
            <div
              key={col.handle}
              className="group flex flex-col"
              style={{ background: "#0B2842", border: "1px solid #163756" }}
            >
              {/* Visual area */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                {col.image ? (
                  <>
                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.5s ease",
                      }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,15,28,0.65) 0%, transparent 55%)",
                      }}
                    />
                  </>
                ) : col.tag === "Members Only" ? (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                    style={{
                      background:
                        "radial-gradient(ellipse at 40% 40%, #0B2842 0%, #000F1C 100%)",
                    }}
                  >
                    <div
                      className="w-24 h-24 rounded-full flex flex-col items-center justify-center font-display font-bold"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, #F5D98A, #C9922A)",
                        color: "#001E33",
                        boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                      }}
                    >
                      <div style={{ fontSize: "0.6rem", letterSpacing: "0.14em", opacity: 0.7 }}>
                        WESALUTE+
                      </div>
                      <div style={{ fontSize: "1.6rem", lineHeight: 1 }}>250</div>
                      <div style={{ fontSize: "0.5rem", letterSpacing: "0.18em", opacity: 0.7 }}>
                        1776 · 2026
                      </div>
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.28em] text-gold uppercase" style={{ opacity: 0.55 }}>
                      WeSalute+ Verified Only
                    </div>
                  </div>
                ) : (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                    style={{
                      background:
                        "radial-gradient(ellipse at 60% 40%, #0B2842 0%, #000F1C 100%)",
                    }}
                  >
                    <div className="grid grid-cols-3 gap-3" style={{ opacity: 0.35 }}>
                      {STARS.map((i) => (
                        <Star key={i} size={16} color="#FFC43E" />
                      ))}
                    </div>
                    <div className="font-display italic text-cream text-[1.15rem] text-center px-6 leading-[1.3]" style={{ opacity: 0.55 }}>
                      For every moment<br />worth marking.
                    </div>
                  </div>
                )}

                {/* Tag badge */}
                <div
                  className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.22em] uppercase font-semibold px-3 py-1.5"
                  style={{
                    background: "rgba(0,15,28,0.82)",
                    color: col.tagColor,
                    border: `1px solid ${col.tagColor}55`,
                  }}
                >
                  {col.tag}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 pb-7">
                <h3 className="font-display font-bold text-[1.25rem] text-cream leading-[1.2] mb-3">
                  {col.title}
                </h3>
                <p
                  className="text-[0.9rem] leading-[1.6] text-cream mb-5 flex-1"
                  style={{ opacity: 0.7 }}
                >
                  {col.desc}
                </p>
                <button
                  className="font-condensed font-bold text-[12px] tracking-[0.2em] uppercase self-start px-5 py-3 transition-colors"
                  style={{
                    color: col.tagColor,
                    border: `1px solid ${col.tagColor}50`,
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Shop Collection →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
