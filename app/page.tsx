import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ThroughLine } from "@/components/ThroughLine";
import { SharedHistory } from "@/components/SharedHistory";
import { SevenCommunities } from "@/components/SevenCommunities";
import { TravelCash } from "@/components/TravelCash";
import { Membership } from "@/components/Membership";
import { Collection } from "@/components/Collection";
import { FinalSalute } from "@/components/FinalSalute";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-slate text-cream font-sans min-h-screen">
      <Nav />
      <Hero />
      <ThroughLine />
      <SharedHistory />
      <SevenCommunities />
      <TravelCash />
      <Membership />
      <Collection />
      <FinalSalute />
      <Footer />
    </div>
  );
}
