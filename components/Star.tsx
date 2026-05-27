import type { CSSProperties } from "react";

interface StarProps {
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export function Star({ size = 16, color = "#FFC43E", className, style }: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        d="M12 2L14.39 8.26L21 9L16 13.74L17.18 20.5L12 17.27L6.82 20.5L8 13.74L3 9L9.61 8.26L12 2Z"
        fill={color}
      />
    </svg>
  );
}
