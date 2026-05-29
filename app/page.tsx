import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CountdownBanner } from "@/components/CountdownBanner";
import { ThroughLine } from "@/components/ThroughLine";
import { SharedHistory } from "@/components/SharedHistory";
import { SevenCommunities } from "@/components/SevenCommunities";
import { TravelCash } from "@/components/TravelCash";
import { Membership } from "@/components/Membership";
import { Collection } from "@/components/Collection";
import { FinalSalute } from "@/components/FinalSalute";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";

export default function HomePage() {
  return (
    <div className="bg-slate text-cream font-sans min-h-screen">
      <Nav />
      <Hero />
      <CountdownBanner />
      <ThroughLine />
      <SevenCommunities />
      <SharedHistory />
      <TravelCash />
      <Membership />
      <Collection />
      <FinalSalute />
      {/* Spacer so sticky bar doesn't cover footer on mobile */}
      <div className="md:hidden h-16" />
      <Footer />
      <MobileCTABar />
    </div>
  );
}
