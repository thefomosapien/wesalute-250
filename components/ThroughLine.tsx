import Image from "next/image";
import { Eyebrow } from "./Eyebrow";
import { SectionTitle, Italic } from "./SectionTitle";

const featuredProducts = [
  {
    name: "1776 / 2026 Tee",
    handle: "america-250-1776-2026-tee",
    price: "30.00",
    image:
      "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/unisex-garment-dyed-heavyweight-t-shirt-white-front-6a1e1eec00a21.jpg?v=1780358905",
  },
  {
    name: "Liberty Bell Tee",
    handle: "america-250-liberty-bell-tee",
    price: "30.00",
    image:
      "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/unisex-garment-dyed-heavyweight-t-shirt-white-front-6a1e552a7a518.jpg?v=1780372794",
  },
  {
    name: "Corduroy Ballcap",
    handle: "vintage-corduroy-cap",
    price: "28.00",
    image:
      "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/vintage-corduroy-cap-navy-front-6a1e6492ec22f.jpg?v=1780376739",
  },
  {
    name: "American Since 1776 Snapback",
    handle: "5-panel-cap",
    price: "22.00",
    image:
      "https://cdn.shopify.com/s/files/1/0905/1045/9168/files/5-panel-mid-profile-baseball-cap-royal-natural-front-6a2064d21da6c.jpg?v=1780507870",
  },
] as const;

export function ThroughLine() {
  return (
    <section
      id="story"
      className="relative px-8 py-20 md:py-[140px]"
      style={{
        background: "linear-gradient(180deg, #000F1C 0%, #001E33 100%)",
        borderTop: "1px solid #163756",
      }}
    >
      <div className="max-w-[920px] mx-auto">
        <Eyebrow color="#FFC43E">The Through-Line</Eyebrow>
        <SectionTitle>
          Service is the connective <br className="hidden sm:block" /> tissue{" "}
          <Italic color="#FFC43E">of 250 years.</Italic>
        </SectionTitle>

        {/* Co-brand lockup */}
        <div
          className="mt-10 flex items-center justify-center py-10 px-8"
          style={{ background: "#000F1C", border: "1px solid #163756" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/wesalute-america250.svg"
            alt="WeSalute × America 250"
            width={560}
            height={68}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="grid gap-12 mt-12 hero-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <p
            className="font-display italic font-normal text-[1.4rem] leading-[1.5] text-cream pl-6"
            style={{ borderLeft: "2px solid #FFC43E", alignSelf: "start" }}
          >
            No country lasts 250 years by accident. Every chapter was held
            together by people who put service above self — in uniform, in
            scrubs, on engines, in classrooms, at every level of civil work.
          </p>

          <div className="text-cream text-[1.05rem] leading-[1.75]" style={{ opacity: 0.82 }}>
            <p className="mb-5">
              The American 250 is a once-in-a-generation moment. It&apos;s
              bipartisan — Bush and Obama as honorary co-chairs of the official
              America250 initiative — and built on a simple idea:{" "}
              <span className="underline-mint">350 million Americans, 250 years.</span>
            </p>
            <p>
              No one else honors every form of American service under one roof
              — and we&apos;ve been doing it for 27 of those 250 years.
            </p>
          </div>
        </div>

        {/* ─── Shop Strip ──────────────────────────────────────────── */}
        <div
          className="mt-16 pt-12"
          style={{ borderTop: "1px solid #163756" }}
        >
          {/* Strip header */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="font-mono text-[10px] tracking-[0.32em] text-gold uppercase mb-2">
                WeSalute × America 250 Merch
              </div>
              <p className="font-display italic text-cream text-[1.25rem] leading-[1.2]">
                Limited merch collection to mark the event.
              </p>
            </div>
            <button
              className="font-condensed font-bold text-[12px] tracking-[0.2em] uppercase text-gold shrink-0 ml-6"
              style={{
                background: "transparent",
                border: "1px solid rgba(255,196,62,0.35)",
                cursor: "pointer",
                padding: "10px 20px",
              }}
            >
              Shop All →
            </button>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <div key={product.handle} className="group cursor-pointer">
                {/* Image */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1/1", background: "#000F1C" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    sizes="(max-width: 640px) 50vw, (max-width: 920px) 25vw, 220px"
                    className="group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(0,15,28,0.65)" }}
                  >
                    <span
                      className="font-condensed font-bold text-[11px] tracking-[0.24em] uppercase text-gold px-4 py-2"
                      style={{ border: "1px solid rgba(255,196,62,0.7)" }}
                    >
                      Shop →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-3">
                  <div
                    className="font-condensed font-bold text-cream leading-tight tracking-[0.01em]"
                    style={{ fontSize: "0.88rem" }}
                  >
                    {product.name}
                  </div>
                  <div className="font-mono text-gold mt-1.5" style={{ fontSize: "10px" }}>
                    From ${product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
