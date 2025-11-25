import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Zap, Globe, CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Full compliance with data protection regulations. No data transfers, no compliance headaches.",
    },
    {
      icon: TrendingUp,
      title: "Better Models",
      description: "Learn from diverse data sources without compromising privacy. More data, better predictions.",
    },
    {
      icon: Zap,
      title: "Reduced Downtime",
      description: "Predict equipment failures before they occur. Optimize maintenance schedules and reduce costs.",
    },
    {
      icon: Globe,
      title: "Scalable Solution",
      description: "From single sites to global operations. Our federated approach scales with your business.",
    },
  ];

  const useCases = [
    "Manufacturing equipment monitoring",
    "Energy infrastructure management",
    "Transportation fleet optimization",
    "Industrial IoT sensor networks",
    "Quality control systems",
    "Predictive maintenance programs",
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-accent">NexuFed AI?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your condition monitoring with privacy-preserving AI that delivers real business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent"
            >
              <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Use Cases</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our federated learning platform adapts to your industry's unique challenges, 
              delivering actionable insights while keeping your data secure.
            </p>
            <div className="space-y-3">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <h3 className="text-2xl font-bold mb-6">Key Advantages</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Data Privacy</span>
                  <span className="text-accent font-bold">100%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-full rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Model Accuracy</span>
                  <span className="text-accent font-bold">95%+</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[95%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Cost Reduction</span>
                  <span className="text-accent font-bold">40%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[40%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Deployment Speed</span>
                  <span className="text-accent font-bold">3x Faster</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[75%] rounded-full"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
