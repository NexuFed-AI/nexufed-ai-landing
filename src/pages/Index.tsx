import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import WhereWeAreHeaded from "@/components/WhereWeAreHeaded";
import RoadmapAndContact from "@/components/RoadmapAndContact";
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
        <WhereWeAreHeaded />
        <RoadmapAndContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
