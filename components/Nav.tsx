"use client";

import { useEffect, useState } from "react";

const navLinks = ["Story", "Communities", "Travel Cash", "Collection"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
      style={{
        background:
          scrolled || menuOpen ? "rgba(0,15,28,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom:
          scrolled && !menuOpen
            ? "1px solid #163756"
            : "1px solid transparent",
      }}
    >
      {/* Header row */}
      <div className="px-8 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          {/* Co-brand lockup logo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/wesalute-america250.svg"
            alt="WeSalute × America 250"
            width={216}
            height={26}
            style={{ maxWidth: "100%", height: "auto" }}
          />

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="font-condensed text-[13px] font-semibold tracking-[0.18em] uppercase text-cream opacity-75 hover:opacity-100 hover:text-gold transition-all duration-200 no-underline"
              >
                {item}
              </a>
            ))}
            <button
              className="cta cta-gold"
              style={{ padding: "12px 24px", fontSize: "12px" }}
            >
              Shop The Collection
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden w-6 h-5 flex flex-col justify-between shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            <span
              className="block w-full h-0.5 bg-cream origin-center transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "translateY(9px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block w-full h-0.5 bg-cream transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-full h-0.5 bg-cream origin-center transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "translateY(-9px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden"
        style={{
          maxHeight: menuOpen ? "360px" : "0",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <div
          className="px-8 py-6 flex flex-col gap-5"
          style={{ borderTop: "1px solid #163756" }}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="font-condensed text-[16px] font-semibold tracking-[0.18em] uppercase text-cream opacity-80 hover:opacity-100 hover:text-gold transition-all duration-200 no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            className="cta cta-gold"
            onClick={() => setMenuOpen(false)}
            style={{ fontSize: "13px", justifyContent: "center" }}
          >
            Shop The Collection
          </button>
        </div>
      </div>
    </nav>
  );
}
