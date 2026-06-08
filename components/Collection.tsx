import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { SectionTitle, Italic } from "./SectionTitle";

const collections = [
  {
    title: "WeSalute 250 — Limited Edition",
    handle: "wesalute-250-limited-edition",
    desc: "Designs honoring every community that has answered the call — military, veterans, first responders, nurses, educators, and civil servants. Each design limited to 250 orders.",
    tag: "Limited Edition",
    tagColor: "#FFC43E",
    products: [
      {
        title: "America 250 — Corduroy Ballcap",
        handle: "america-250-corduroy-ballcap",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/vintage-corduroy-cap-navy-front-6a220a204e463.jpg?v=1780615722",
      },
      {
        title: "Block Party Bundle",
        handle: "block-party-bundle",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/block_party.png?v=1780954275",
      },
      {
        title: "America 250 — Eagle 250 Playing Cards",
        handle: "america-250-eagle-250-playing-cards",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/poker-playing-cards-white-2.5x3.5-front-6a226ca99a27b.jpg?v=1780640954",
      },
      {
        title: "America 250 — Insulated Tumbler with Straw",
        handle: "america-250-insulated-tumbler-with-straw",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/insulated-tumbler-with-a-straw-navy-20-oz-front-6a2264b62722d.jpg?v=1780638913",
      },
    ],
  },
  {
    title: "America 250 — WeSalute+ Exclusive Merch",
    handle: "wesalute-250-member-edition",
    desc: "Exclusive merch for WeSalute+ Members — not available anywhere else in the WeSalute 250 collection. Our way of recognizing the people who made this community what it is.",
    tag: "Members Only",
    tagColor: "#B5DFD0",
    products: [
      {
        title: "Medical Professional — Service Through Centuries Tee",
        handle: "medical-professional-service-through-centuries-tee",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/unisex-garment-dyed-heavyweight-t-shirt-ivory-front-6a272f50c36fd.jpg?v=1780952950",
      },
      {
        title: "First Responder — Service Through Centuries Tee",
        handle: "first-responder-service-through-centuries-tee",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/unisex-garment-dyed-heavyweight-t-shirt-white-left-front-6a22685ca940c.jpg?v=1780639860",
      },
      {
        title: "Nurse — Service Through Centuries Tee",
        handle: "nurse-service-through-centuries-tee",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/unisex-garment-dyed-heavyweight-t-shirt-white-left-front-6a22661d6b32c.jpg?v=1780639280",
      },
      {
        title: "America 250 — Eagle Ringer Tee",
        handle: "america-250-eagle-ringer-tee",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/unisex-ringer-t-shirt-natural-midnight-navy-left-front-6a272c2150960.png?v=1780952969",
      },
    ],
  },
  {
    title: "Gifts & Bundles",
    handle: "gifts-bundles",
    desc: "Curated gift sets for the moments that matter — military retirements, Nurses Week, Veterans Day, and every occasion when someone just deserves to be acknowledged.",
    tag: "Gift Sets",
    tagColor: "#FFC43E",
    products: [
      {
        title: "Block Party Bundle",
        handle: "block-party-bundle",
        image:
          "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/block_party.png?v=1780954275",
      },
    ],
  },
];

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
                {col.products.length >= 4 ? (
                  <div
                    className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px"
                    style={{ background: "#163756" }}
                  >
                    {col.products.slice(0, 4).map((p) => (
                      <div key={p.handle} className="relative overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 50vw, 18vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <Image
                    src={col.products[0].image}
                    alt={col.products[0].title}
                    fill
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="group-hover:scale-105"
                  />
                )}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,15,28,0.6) 0%, transparent 50%)",
                  }}
                />

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
