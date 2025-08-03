import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { FeatureSection } from "@/components/FeatureSection";
import { ZeroSection } from "@/components/ZeroSection";
import UseCaseSection from "@/components/UseCaseSection";
import TechStackSection from "@/components/TechStackSection";
import SupportSection from "@/components/SupportSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <UseCaseSection />
      <ZeroSection />
      <SupportSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}
