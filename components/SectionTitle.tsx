import type { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  color?: string;
  size?: string;
}

export function SectionTitle({
  children,
  color = "#F4F0E6",
  size = "clamp(2.6rem, 5vw, 4.5rem)",
}: SectionTitleProps) {
  return (
    <h2
      className="font-display font-bold leading-[1.02] tracking-[-0.025em] mt-4"
      style={{ fontSize: size, color }}
    >
      {children}
    </h2>
  );
}

export function Italic({
  children,
  color = "#FFC43E",
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span className="italic font-normal" style={{ color }}>
      {children}
    </span>
  );
}
