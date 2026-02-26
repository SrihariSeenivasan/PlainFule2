import Hero from "@/components/Hero";
import StorySections from "@/components/StorySections";
import Navbar from "@/components/Navbar";
import PremiumFooter from "@/components/PremiumFooter";
import CommunitySection from "@/components/CommunitySection";
import PeopleLoveSection from "@/components/PeopleLoveSection";
import TransparencyLabSection from "@/components/TransparencyLabSection";

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)]">
      <Navbar />
      <Hero />
      <StorySections />
      <TransparencyLabSection />
      <PeopleLoveSection />
      <CommunitySection />
      <PremiumFooter />
    </main>
  );
}
