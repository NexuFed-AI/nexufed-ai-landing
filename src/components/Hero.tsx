import { Button } from "@/components/ui/button";
import { ArrowRight, Network } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Network mesh background - representing federated learning nodes */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* SVG for connection lines between nodes */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Connection lines - subtle mesh network */}
          <line x1="15%" y1="20%" x2="35%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" />
          <line x1="35%" y1="30%" x2="60%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "1s" }} />
          <line x1="60%" y1="25%" x2="80%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "2s" }} />
          <line x1="15%" y1="20%" x2="20%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "0.5s" }} />
          <line x1="20%" y1="50%" x2="45%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "1.5s" }} />
          <line x1="45%" y1="60%" x2="70%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "2.5s" }} />
          <line x1="70%" y1="55%" x2="85%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "3s" }} />
          <line x1="35%" y1="30%" x2="45%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "0.8s" }} />
          <line x1="60%" y1="25%" x2="70%" y2="55%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "1.8s" }} />
          <line x1="20%" y1="50%" x2="35%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "2.2s" }} />
          <line x1="35%" y1="75%" x2="65%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "2.8s" }} />
          <line x1="65%" y1="80%" x2="85%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "1.2s" }} />
          <line x1="45%" y1="60%" x2="65%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse-line" style={{ animationDelay: "3.5s" }} />
        </svg>
        
        {/* Network nodes - distributed sensor points */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-primary rounded-full animate-pulse-node shadow-[0_0_10px_hsl(var(--primary))]" />
        <div className="absolute top-[30%] left-[35%] w-2.5 h-2.5 bg-primary rounded-full animate-pulse-node shadow-[0_0_12px_hsl(var(--primary))]" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[25%] left-[60%] w-2 h-2 bg-primary rounded-full animate-pulse-node shadow-[0_0_10px_hsl(var(--primary))]" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[35%] left-[80%] w-2 h-2 bg-primary rounded-full animate-pulse-node shadow-[0_0_10px_hsl(var(--primary))]" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[50%] left-[20%] w-2.5 h-2.5 bg-primary rounded-full animate-pulse-node shadow-[0_0_12px_hsl(var(--primary))]" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[60%] left-[45%] w-3 h-3 bg-primary rounded-full animate-pulse-node shadow-[0_0_15px_hsl(var(--primary))]" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[55%] left-[70%] w-2 h-2 bg-primary rounded-full animate-pulse-node shadow-[0_0_10px_hsl(var(--primary))]" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[65%] left-[85%] w-2 h-2 bg-primary rounded-full animate-pulse-node shadow-[0_0_10px_hsl(var(--primary))]" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-[75%] left-[35%] w-2 h-2 bg-primary rounded-full animate-pulse-node shadow-[0_0_10px_hsl(var(--primary))]" style={{ animationDelay: "2.2s" }} />
        <div className="absolute top-[80%] left-[65%] w-2.5 h-2.5 bg-primary rounded-full animate-pulse-node shadow-[0_0_12px_hsl(var(--primary))]" style={{ animationDelay: "1.8s" }} />
        
        {/* Subtle ambient glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-8">
            <Network className="w-4 h-4" />
            <span className="text-sm font-medium">Privacy-Preserving AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Condition Monitoring with Federated Learning
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing industrial condition monitoring through privacy-preserving collaborative AI. 
            Train powerful models without centralizing sensitive data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-lg group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("technology")}
              className="text-lg border-2"
            >
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Data Privacy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">0</div>
              <div className="text-sm text-muted-foreground">Data Transfers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">AI</div>
              <div className="text-sm text-muted-foreground">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
