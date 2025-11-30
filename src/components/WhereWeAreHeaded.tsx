import { Card } from "@/components/ui/card";
import { Cog, Building2, Shield, Sparkles, Lock, Network, Tag, TrendingUp } from "lucide-react";

const WhereWeAreHeaded = () => {
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

  const goals = [
    {
      icon: Lock,
      title: "Privacy by design",
      target: "Target: 100% raw data retention on-site",
      description: "Raw sensor data always stays on-site. Only encrypted or aggregated model updates leave the plant.",
    },
    {
      icon: Network,
      title: "Joint learning, individual performance",
      target: "Target: 90%+ accuracy on relevant detection tasks",
      description: "Global models learn from many machines and sites. Each machine can receive a personalized variant tuned to its behavior. This is a design ambition and depends on the specific machine, data quality, and use case.",
    },
    {
      icon: Tag,
      title: "Less labeling effort",
      target: "Target: 70–90% reduction in manual labels",
      description: "Self-supervised and active learning reduce the need for manual labels. Operators focus on confirming or annotating only the most important events. Real-world results will vary by project.",
    },
    {
      icon: TrendingUp,
      title: "Continuous adaptation",
      target: "Target: up to 3× faster iteration from first data to deployed model",
      description: "Models update over time as machines age, processes change, and new conditions appear. The goal is to speed up deployment and iteration compared to building bespoke ML pipelines from scratch.",
    },
  ];

  return (
    <section id="where-headed" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where we're <span className="text-accent">headed</span>
          </h2>
        </div>

        {/* Use Cases Subsection */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Use cases we're focusing on</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
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
                    <h4 className="text-2xl font-bold mb-3">{useCase.title}</h4>
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

        {/* Goals Subsection */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-center">Our goals</h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12 text-center">
            We are designing NexuFed around a set of goals to address the realities of industrial AI. These are the capabilities we are working towards as we move from research to real-world deployments. The numbers below are design targets, not guaranteed results, and will depend on the specific use case.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {goals.map((goal, index) => (
              <Card 
                key={index}
                className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                    <goal.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">{goal.title}</h4>
                    <div className="inline-block px-3 py-1 bg-accent/10 rounded-md mb-3">
                      <span className="text-sm font-semibold text-accent">{goal.target}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground italic">
              All targets are indicative design goals and will be validated and refined with real-world data and pilot projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAreHeaded;
