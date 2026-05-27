import type { Metadata } from "next";
import {
  Fraunces,
  Barlow,
  Barlow_Condensed,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeSalute × America 250",
  description: "Celebrating 250 years of American service and sacrifice.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={[
          fraunces.variable,
          barlow.variable,
          barlowCondensed.variable,
          jetbrainsMono.variable,
          "font-sans bg-cream text-slate antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}
