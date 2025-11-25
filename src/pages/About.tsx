import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Zap, Users, Award, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Privacy by Design",
      description: "Data protection and confidentiality are built into every layer of our technology."
    },
    {
      icon: Zap,
      title: "Industrial Reliability",
      description: "Robust, proven solutions designed for the demanding requirements of industrial environments."
    },
    {
      icon: Target,
      title: "Transparency",
      description: "Clear, explainable AI models that engineers and operators can trust and understand."
    },
    {
      icon: Award,
      title: "Cutting-Edge Research",
      description: "Grounded in academic research and continuously advancing the state of the art."
    },
    {
      icon: Users,
      title: "Human-Centered AI",
      description: "Technology that empowers people, respects privacy, and enhances decision-making."
    },
    {
      icon: Lock,
      title: "Security & Trust",
      description: "Enterprise-grade security with federated learning that keeps sensitive data local."
    }
  ];

  const founders = [
    {
      name: "René Glitza",
      role: "CEO & CTO",
      bio: "Expert in applied AI, industrial analytics, and data-driven monitoring. René leads the technical vision and product development, bringing deep experience in machine learning strategy and real-world deployment of intelligent monitoring systems."
    },
    {
      name: "Luca Becker",
      role: "CAIO (Chief AI Officer)",
      bio: "Specialist in distributed AI, federated learning, and privacy-preserving machine learning. Luca drives the AI research and development, with extensive expertise in large-scale audio-visual systems and decentralized learning architectures."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About NexuFed AI
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building the future of industrial intelligence through privacy-preserving, 
              federated-learning-driven condition monitoring for valves and machines.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To revolutionize industrial condition monitoring by delivering AI-powered insights 
                    that respect data privacy, maintain security, and enable collaboration across 
                    distributed facilities without compromising sensitive operational data.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Zap className="h-6 w-6 text-accent" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where industrial facilities benefit from collective intelligence through 
                    federated learning, achieving superior predictive maintenance and operational 
                    excellence while maintaining complete data sovereignty and trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                NexuFed AI was born from years of research experience in privacy-preserving artificial 
                intelligence and industrial condition monitoring. Our founders recognized a critical gap 
                in the industry: while machine learning could dramatically improve predictive maintenance 
                and operational efficiency, companies were reluctant to share their sensitive operational 
                data—even when collaboration could benefit everyone.
              </p>
              <p className="leading-relaxed mb-6">
                Through extensive work in federated learning and distributed AI systems, we developed 
                a solution that enables multiple facilities to collaboratively train powerful monitoring 
                models without ever sharing raw sensor data. Each site keeps its data local and private, 
                yet collectively benefits from insights derived across the entire network.
              </p>
              <p className="leading-relaxed">
                Today, NexuFed AI stands at the intersection of cutting-edge AI research and practical 
                industrial applications, delivering trustworthy, transparent, and highly effective 
                condition monitoring solutions for valves, pumps, and critical machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                  <CardHeader>
                    {/* Profile picture placeholder */}
                    <div className="w-32 h-32 rounded-full bg-muted/50 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                      <div className="text-center">
                        <Users className="h-12 w-12 text-muted-foreground/40 mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground/60">Photo</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-center">{founder.name}</CardTitle>
                    <CardDescription className="text-center text-accent font-semibold">
                      {founder.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {founder.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <p className="text-muted-foreground leading-relaxed text-sm">
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

      <Footer />
    </div>
  );
};

export default About;
