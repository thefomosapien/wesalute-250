import { CoBrandLockup } from "./CoBrandLockup";
import { Star } from "./Star";

export function Footer() {
  return (
    <footer
      className="px-8 py-12 bg-slateDeep"
      style={{ borderTop: "1px solid #163756" }}
    >
      <div className="max-w-[1280px] mx-auto flex justify-center md:justify-between items-center flex-wrap gap-6 md:gap-5">
        <div>
          <CoBrandLockup height={24} color="#F4F0E6" />
          <div
            className="font-mono text-[10px] tracking-[0.24em] text-cream uppercase mt-2.5"
            style={{ opacity: 0.5 }}
          >
            A Public Benefit Corporation · Since 1999
          </div>
        </div>

        <div className="font-display italic text-[1.1rem] text-gold">
          A Real Thank You.®
        </div>

        <div
          className="flex items-center gap-2.5 font-mono text-[10px] tracking-[0.24em] text-cream uppercase"
          style={{ opacity: 0.5 }}
        >
          <span>1776</span>
          <Star size={8} color="#FFC43E" />
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
