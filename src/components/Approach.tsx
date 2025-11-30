import { Card } from "@/components/ui/card";
import { Eye, Network, Cpu } from "lucide-react";

const Approach = () => {
  const features = [
    {
      icon: Eye,
      title: "Self-supervised anomaly detection",
      points: [
        "Learns normal behavior from unlabeled sensor data (audio, vibration, current, etc.)",
        "Detects deviations even if no historical fault data exists",
        "Active / semi-supervised loop: operators label only relevant events, reducing labeling effort",
      ],
    },
    {
      icon: Network,
      title: "Federated learning across fleets",
      points: [
        "Models train locally at the machine or site",
        "Only model updates are shared, not raw data",
        "A global model benefits from many participants, while each asset can be personalized for its specific behavior",
      ],
    },
    {
      icon: Cpu,
      title: "Edge- and integration-ready by design",
      points: [
        "Built to run on industrial edge devices",
        "Connects to existing sensors and systems (e.g. OPC UA, REST APIs)",
        "Optional dashboards for events, labeling, and fleet-wide model management",
      ],
    },
  ];

  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our approach: <span className="text-accent">federated, self-supervised condition monitoring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are designing NexuFed as a privacy-preserving AI layer for industrial assets—combining self-supervised anomaly detection with federated learning across fleets of machines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col items-start">
                <div className="p-3 bg-accent/10 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground italic">
            These capabilities are under active development and currently being validated in research and prototype environments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;
