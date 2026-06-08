import Image from "next/image";
import { StarField } from "./StarField";
import { Eyebrow } from "./Eyebrow";
import { SectionTitle, Italic } from "./SectionTitle";
import { Star } from "./Star";
import { communities } from "@/lib/content";

const servicePhotos = [
  { src: "/images/military-4.png", label: "Military & Veterans" },
  { src: "/images/medical-2.png", label: "Nurses & Medical Professionals" },
  { src: "/images/teacher-student-2.png", label: "Teachers" },
] as const;

export function SevenCommunities() {
  return (
    <section
      id="communities"
      className="relative px-8 py-20 md:py-[140px] bg-slate overflow-hidden"
    >
      <StarField count={50} opacity={0.14} />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="mb-[72px]">
          <Eyebrow color="#FFC43E">Service Through The Centuries</Eyebrow>
          <SectionTitle>
            Service unites us all.{" "}
            <Italic color="#FFC43E">250 years of showing up.</Italic>
          </SectionTitle>
          <p className="text-[1.1rem] leading-[1.65] text-cream mt-7 max-w-[640px]" style={{ opacity: 0.78 }}>
            Service is represented in many different uniforms. WeSalute honors
            them all with limited edition merch collections to show your pride
            and a FREE gift of $250 in WeSalute Travel Cash.
          </p>
        </div>

        {/* Service photos — editorial asymmetric grid */}
        <div className="photo-editorial-grid mb-14">
          {/* Left: large hero — military */}
          <div className="photo-editorial-left relative overflow-hidden">
            <Image
              src={servicePhotos[0].src}
              alt={servicePhotos[0].label}
              fill
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
              sizes="(max-width: 640px) 100vw, 60vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,15,28,0.5) 0%, transparent 50%)" }}
            />
          </div>

          {/* Top right: medical */}
          <div className="relative overflow-hidden">
            <Image
              src={servicePhotos[1].src}
              alt={servicePhotos[1].label}
              fill
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
              sizes="(max-width: 640px) 100vw, 40vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,15,28,0.5) 0%, transparent 50%)" }}
            />
          </div>

          {/* Bottom right: teachers */}
          <div className="relative overflow-hidden">
            <Image
              src={servicePhotos[2].src}
              alt={servicePhotos[2].label}
              fill
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
              sizes="(max-width: 640px) 100vw, 40vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(to top, rgba(0,15,28,0.5) 0%, transparent 50%)" }}
            />
          </div>
        </div>

        <div
          className="seven-grid border border-slateLine"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {communities.map((comm, i) => (
            <div
              key={comm.name}
              className="hover-lift relative min-h-[160px] md:min-h-[220px] p-6 md:p-9 px-6 md:px-8"
              style={{
                borderRight: i < communities.length - 1 ? "1px solid #163756" : "none",
                borderBottom: "1px solid #163756",
                background:
                  i === 0
                    ? "linear-gradient(135deg, #0B2842 0%, #001E33 100%)"
                    : "transparent",
              }}
            >
              <Star size={20} color="#FFC43E" style={{ marginBottom: "20px" }} />
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
            className="min-h-[160px] md:min-h-[220px] p-6 md:p-9 px-6 md:px-8 flex flex-col justify-center items-start"
            style={{
              background: "linear-gradient(135deg, rgba(255,196,62,0.13) 0%, rgba(255,196,62,0.03) 100%)",
              borderBottom: "1px solid #163756",
            }}
          >
            <div className="font-mono text-[11px] tracking-[0.28em] text-gold mb-3">
              ALL UNDER ONE BANNER
            </div>
            <h3 className="font-display italic font-medium text-[1.4rem] text-cream leading-[1.25]">
              The only one honoring all of them.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
