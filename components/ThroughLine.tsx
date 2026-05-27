import { Eyebrow } from "./Eyebrow";
import { SectionTitle, Italic } from "./SectionTitle";

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

        <div className="grid gap-12 mt-12 hero-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <p
            className="font-display italic font-normal text-[1.4rem] leading-[1.5] text-cream pl-6"
            style={{ borderLeft: "2px solid #FFC43E" }}
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
              WeSalute is uniquely positioned to participate authentically. We
              are the only brand that honors every form of American service
              under one roof — and we&apos;ve been doing it for 27 of those 250
              years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
