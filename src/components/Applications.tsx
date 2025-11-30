import { Card } from "@/components/ui/card";
import { Cog, Building2, Shield, Sparkles } from "lucide-react";

const Applications = () => {
  const useCases = [
    {
      icon: Cog,
      title: "Rotating machinery in process industries",
      description: "Pumps, motors, fans and compressors where downtime is costly and failures are rare. Continuous monitoring with privacy-preserving learning across many similar assets.",
    },
    {
      icon: Building2,
      title: "OEM-level condition monitoring offerings",
      description: "Machine builders who want to offer smart monitoring to their customers. Federated models let OEMs learn from fleets without centralizing raw data.",
    },
    {
      icon: Shield,
      title: "Privacy- and compliance-sensitive environments",
      description: "Sites where raw data cannot leave the plant (IP, regulation, critical infrastructure). Federated learning keeps data on-premise while still improving models.",
    },
    {
      icon: Sparkles,
      title: "Future domains",
      description: "Long term: quality assurance, robotics, and other industrial AI applications where data is distributed and sensitive.",
    },
  ];

  return (
    <section id="applications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Target applications <span className="text-accent">we're exploring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are currently validating NexuFed's approach together with industry partners in the following areas:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            If you see your use case here—or close to it—we'd love to explore it with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Applications;
