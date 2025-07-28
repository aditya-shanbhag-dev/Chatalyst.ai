import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { FeatureSection } from "@/components/FeatureSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </main>
  );
}
