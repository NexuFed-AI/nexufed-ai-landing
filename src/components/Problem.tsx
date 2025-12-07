import { Card } from "@/components/ui/card";
import { AlertTriangle, Database, Tag, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Unplanned downtime is expensive",
      description: "Machine failures cause costly production stops and emergency service. Fixed-interval preventive maintenance is inefficient and often overkill.",
    },
    {
      icon: Database,
      title: "OEMs lack real-world data",
      description: "Condition monitoring algorithms need diverse field data. Many customers can't or won't share raw sensor data (IT constraints, bandwidth, IP, privacy).",
    },
    {
      icon: Tag,
      title: "Data is rare, labels are even rarer",
      description: "Each project sees only a few pilot customers → poor generalization. Faults are rare, normal operation dominates. Labeling incidents is time-consuming and expensive.",
    },
    {
      icon: TrendingDown,
      title: "Industry is years behind AI research",
      description: "Research runs state-of-the-art self-supervised and federated models. Many manufacturers are only starting with basic CNNs on spectrograms.",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The problem: <span className="text-brand-blue-bright">data is scarce, sensitive and fragmented</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
