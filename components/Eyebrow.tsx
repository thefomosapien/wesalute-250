import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

export function Eyebrow({
  children,
  color = "#FFC43E",
  className,
}: EyebrowProps) {
  return (
    <div
      className={`inline-flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.32em] ${className ?? ""}`}
      style={{ color }}
    >
      <span
        className="inline-block w-7 h-px opacity-60 shrink-0"
        style={{ background: color }}
      />
      {children}
    </div>
  );
}
