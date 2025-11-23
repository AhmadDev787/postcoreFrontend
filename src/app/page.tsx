import AdvancedBenefits from "@/components/MyComponents/Benefits";
import LuxuryCTA from "@/components/MyComponents/CTA";
import Footer from "@/components/MyComponents/Footer";
import { Header } from "@/components/MyComponents/Header";
import Hero from "@/components/MyComponents/Hero";
import PricingCTA from "@/components/MyComponents/Pricing";
import PricingPreview from "@/components/MyComponents/PricingPreview";
import UltraFeatures from "@/components/MyComponents/UltraFeatures";

export default function Home() {
  return (
    <>
      <main className="bg-lux-dark overflow-x-hidden">
        <Header />
        <Hero />
        {/* i will convert ultra features into Use Cases Section */}
        <UltraFeatures />
        <AdvancedBenefits />
        <PricingPreview />
        <LuxuryCTA />
        <PricingCTA />
        <Footer />
      </main>
    </>
  );
}
