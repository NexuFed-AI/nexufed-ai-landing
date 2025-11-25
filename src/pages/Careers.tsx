import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Lightbulb, Globe, Shield, Zap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Careers = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Cutting-Edge Research",
      description: "Work on state-of-the-art federated learning and privacy-preserving AI technologies."
    },
    {
      icon: Shield,
      title: "Privacy-First Innovation",
      description: "Build systems that respect data sovereignty and push the boundaries of secure AI."
    },
    {
      icon: Zap,
      title: "Real-World Impact",
      description: "Shape the future of industrial condition monitoring with technology that matters."
    },
    {
      icon: Globe,
      title: "Hybrid & Flexible",
      description: "Enjoy a research-friendly culture with flexible work arrangements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Help us revolutionize industrial intelligence through privacy-preserving federated learning. 
              Join a team of researchers and engineers building the future of condition monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Culture</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed text-center mb-6">
                At NexuFed AI, we're driven by a mission to make industrial AI both powerful and privacy-preserving. 
                Our team thrives on technical challenges, values rigorous research, and believes in building 
                technology that respects data sovereignty while delivering exceptional results.
              </p>
              <p className="leading-relaxed text-center">
                We combine academic excellence with practical engineering, fostering an environment where 
                innovation meets real-world impact. If you're passionate about federated learning, industrial 
                IoT, and privacy-preserving AI, you'll find a home here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Join NexuFed AI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-card/50 backdrop-blur relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              
              <CardHeader className="relative z-10 text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0A66C2]/10 mb-4 mx-auto">
                  <Users className="h-8 w-8 text-[#0A66C2]" />
                </div>
                <CardTitle className="text-3xl mb-3">Open Positions</CardTitle>
                <CardDescription className="text-base">
                  All current opportunities are published on our LinkedIn company page. 
                  Click below to view open positions and apply directly.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10 text-center pb-8">
                <Button 
                  size="lg"
                  className="bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold px-8 py-6 text-lg"
                  onClick={() => window.open('https://www.linkedin.com/company/nexufed-ai', '_blank')}
                >
                  View Jobs on LinkedIn
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Don't see the right role? Connect with us on LinkedIn and stay updated on new opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Abstract Visual Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative h-64 flex items-center justify-center">
              {/* Minimal geometric network visualization */}
              <svg className="w-full h-full opacity-20" viewBox="0 0 800 300">
                {/* Network nodes */}
                <circle cx="150" cy="150" r="8" fill="hsl(var(--primary))" className="animate-pulse-node" />
                <circle cx="400" cy="100" r="8" fill="hsl(var(--primary))" className="animate-pulse-node" style={{animationDelay: '1s'}} />
                <circle cx="650" cy="150" r="8" fill="hsl(var(--primary))" className="animate-pulse-node" style={{animationDelay: '2s'}} />
                <circle cx="300" cy="220" r="8" fill="hsl(var(--primary))" className="animate-pulse-node" style={{animationDelay: '1.5s'}} />
                <circle cx="550" cy="220" r="8" fill="hsl(var(--primary))" className="animate-pulse-node" style={{animationDelay: '0.5s'}} />
                
                {/* Connecting lines */}
                <line x1="150" y1="150" x2="400" y2="100" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse-line" />
                <line x1="400" y1="100" x2="650" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse-line" style={{animationDelay: '1s'}} />
                <line x1="150" y1="150" x2="300" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse-line" style={{animationDelay: '2s'}} />
                <line x1="300" y1="220" x2="550" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse-line" style={{animationDelay: '0.5s'}} />
                <line x1="550" y1="220" x2="650" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" className="animate-pulse-line" style={{animationDelay: '1.5s'}} />
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Join us in building the distributed intelligence infrastructure for tomorrow's industrial systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
