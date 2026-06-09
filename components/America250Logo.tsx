import Image from "next/image";

interface America250LogoProps {
  size?: number;
}

export function America250Logo({ size = 420 }: America250LogoProps) {
  return (
    <Image
      src="/america-250-mark-new.png"
      alt="America 250 — One Nation. 250 Years of Service."
      width={size}
      height={Math.round(size * 0.96)}
      style={{ display: "block", maxWidth: "100%", height: "auto" }}
      priority
    />
  );
}
