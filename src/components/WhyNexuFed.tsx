import { Card } from "@/components/ui/card";
import { Lock, Network, Tag, TrendingUp } from "lucide-react";

const WhyNexuFed = () => {
  const principles = [
    {
      icon: Lock,
      title: "Privacy by design",
      description: "Raw sensor data stays on-site. Only encrypted or aggregated model updates leave the plant.",
    },
    {
      icon: Network,
      title: "Joint learning, individual performance",
      description: "Global models learn from many machines and sites. Each machine can receive a personalized variant tuned to its behavior.",
    },
    {
      icon: Tag,
      title: "Less labeling effort",
      description: "Self-supervised and active learning reduce the need for manual labels. Operators focus on confirming or annotating only the most important events.",
    },
    {
      icon: TrendingUp,
      title: "Continuous adaptation",
      description: "Models update over time as machines age, processes change, and new conditions appear. The goal is a continuously improving condition monitoring system, not a static one-off model.",
    },
  ];

  return (
    <section id="why-nexufed" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-accent">NexuFed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are designing NexuFed around a set of clear principles to address the realities of industrial AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {principles.map((principle, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <principle.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            These principles guide our research and engineering decisions as we move from lab to real-world deployments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNexuFed;
