"use client";

import { useEffect, useState } from "react";
import { CoBrandLockup } from "./CoBrandLockup";

const navLinks = ["Story", "Communities", "Travel Cash", "Collection"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-8 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,15,28,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #163756" : "1px solid transparent",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CoBrandLockup height={26} color="#F4F0E6" />
          <span className="text-slateLine text-sm mx-1">|</span>
          <span className="font-mono text-[11px] tracking-[0.24em] text-mint uppercase">
            The Campaign
          </span>
        </div>

        <div className="flex gap-8 items-center">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="font-condensed text-[13px] font-semibold tracking-[0.18em] uppercase text-cream opacity-75 hover:opacity-100 hover:text-gold transition-all duration-200 no-underline"
            >
              {item}
            </a>
          ))}
          <button className="cta cta-gold" style={{ padding: "12px 24px", fontSize: "12px" }}>
            Shop The Collection
          </button>
        </div>
      </div>
    </nav>
  );
}
