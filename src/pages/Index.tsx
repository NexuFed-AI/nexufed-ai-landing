import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { usePageTracking } from "@/hooks/useAnalytics";

const Index = () => {
  usePageTracking();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Technology />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
