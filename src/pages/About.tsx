import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Users, Lightbulb, Rocket, Handshake, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePageTracking } from "@/hooks/useAnalytics";
import founderReneImage from "@/assets/founder-rene.jpg";
import founderLucaImage from "@/assets/founder-luca.png";
const About = () => {
  usePageTracking();
  const values = [{
    icon: Shield,
    title: "Privacy by Design",
    description: "Data protection and confidentiality are built into every layer of our technology."
  }, {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "We use and advance state-of-the-art research & technology to provide clear value and always stay on top."
  }, {
    icon: Users,
    title: "Joint Success",
    description: "Only by thinking win-win we can achieve our goals together."
  }, {
    icon: Lightbulb,
    title: "Solution Oriented",
    description: "Constraints are just design parameters, not blockers."
  }, {
    icon: Rocket,
    title: "Bias to Action",
    description: "We move quickly from idea to execution, learning from real-world feedback instead of waiting for perfect conditions."
  }, {
    icon: Handshake,
    title: "Trust through Honesty",
    description: "We build trust through consistent honesty, clear communication, and we work hard to keep every commitment."
  }];
  const founders = [{
    name: "René Glitza",
    role: "CEO & CTO",
    bio: "Expert in applied AI, industrial analytics, and data-driven monitoring. René leads the technical vision and product development, bringing deep experience in machine learning strategy and real-world deployment of intelligent monitoring systems.",
    image: founderReneImage
  }, {
    name: "Luca Becker",
    role: "CAIO (Chief AI Officer)",
    bio: "Specialist in distributed AI, federated learning, and privacy-preserving machine learning. Luca drives the AI research and development, with extensive expertise in large-scale multi-modal systems and decentralized learning architectures.",
    image: founderLucaImage
  }];
  return <div className="min-h-screen bg-background">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">About</span>{" "}
              <span className="text-brand-blue-bright">NexuFed AI</span>
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
                    To revolutionize industrial condition monitoring by delivering trusted collaborative plug-and-play solutions that drive cost savings, preventing failures and improve resource efficiency without compromising sensitive data.
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
                    A world where everyone benefits from collective intelligence through private, collaborative federated learning—unlocking secure access to shared data-driven insights across all industries and fields, while maintaining complete data sovereignty and trust.
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
            <h2 className="text-4xl font-bold mb-8 text-center"><span className="text-foreground">Our</span> <span className="text-brand-blue-bright">Story</span></h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                NexuFed AI was born from years of research in privacy-preserving artificial intelligence and industrial condition monitoring. Our founders recognized a critical gap: while machine learning can dramatically improve predictive maintenance and operational efficiency, many companies are understandably reluctant to share sensitive operational data—even when collaboration could benefit everyone.
              </p>
              <p className="leading-relaxed mb-6">
                ​That is why we took the initiative to bring our research into the real world. Through extensive work in federated learning and distributed AI systems, we are building a solution that enables multiple facilities to collaboratively train powerful monitoring models without ever sharing raw sensor data. Each site keeps its data local and private, yet collectively benefits from insights learned across the entire network.
              </p>
              <p className="leading-relaxed">
                Today, NexuFed AI stands at the intersection of cutting-edge research and practical industrial application. We're focused on continuously improving our technology, making it accessible for real-world deployments, and partnering with teams who want to drive the next evolution of condition monitoring together with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center"><span className="text-foreground">Our</span> <span className="text-brand-blue-bright">Founders</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur hover:shadow-lg transition-shadow">
                  <CardHeader>
                    {/* Profile picture */}
                    <div className="w-32 h-32 rounded-full mb-4 mx-auto overflow-hidden border-2 border-primary/20">
                      <img src={founder.image} alt={`${founder.name} - ${founder.role}`} className="w-full h-full object-cover scale-110 object-[center_20%]" />
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
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center"><span className="text-foreground">Our</span> <span className="text-brand-blue-bright">Values</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
              const Icon = value.icon;
              return <Card key={index} className="border-primary/10 bg-card/50 backdrop-blur hover:border-primary/30 transition-colors">
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
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;