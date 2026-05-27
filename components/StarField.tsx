"use client";

import { useEffect, useState } from "react";

interface StarDot {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
}

interface StarFieldProps {
  count?: number;
  opacity?: number;
}

export function StarField({ count = 60, opacity = 0.18 }: StarFieldProps) {
  const [stars, setStars] = useState<StarDot[]>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => {
        const size = Math.random() < 0.85 ? 1 : 2;
        return {
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size,
          opacity: opacity * (0.4 + Math.random() * 0.6),
        };
      })
    );
  }, [count, opacity]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-gold"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size === 2 ? "0 0 4px #FFC43E" : "none",
          }}
        />
      ))}
    </div>
  );
}
