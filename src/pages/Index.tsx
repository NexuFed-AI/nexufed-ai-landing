import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import Applications from "@/components/Applications";
import WhyNexuFed from "@/components/WhyNexuFed";
import Roadmap from "@/components/Roadmap";
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
        <Problem />
        <Approach />
        <Applications />
        <WhyNexuFed />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
