import { Check } from "lucide-react";

const WhereWeAreHeaded = () => {
  const useCases = [
    { title: "Rotating machinery in process industries", description: "pumps, motors, fans and compressors where downtime is costly" },
    { title: "OEM-level condition monitoring", description: "machine builders offering smart monitoring to customers" },
    { title: "Privacy-sensitive environments", description: "sites where raw data cannot leave the plant" },
    { title: "Future domains", description: "quality assurance, robotics, and other industrial AI applications" },
  ];

  const goals = [
    {
      title: "Privacy by design",
      target: "100%",
      barWidth: "100%",
      description: "Raw data retention on-site",
    },
    {
      title: "Joint learning, individual performance",
      target: "90%+",
      barWidth: "90%",
      description: "Accuracy on relevant detection tasks",
    },
    {
      title: "Less labeling effort",
      target: "70–90%",
      barWidth: "80%",
      description: "Reduction in manual labels",
    },
    {
      title: "Continuous adaptation",
      target: "3×",
      barWidth: "75%",
      description: "Faster iteration to deployed model",
    },
  ];

  return (
    <section id="where-headed" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Where we're <span className="text-brand-blue-bright">headed</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Use Cases */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Use cases we're focusing on</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our federated learning platform adapts to your industry's unique challenges, delivering actionable insights while keeping your data secure.
            </p>
            <ul className="space-y-4">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-5 h-5 rounded-sm bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <span className="text-foreground leading-relaxed">
                    <span className="font-semibold">{useCase.title}</span> – {useCase.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 italic">
              If you see your use case here—or close to it—we'd love to explore it with you.
            </p>
          </div>

          {/* Goals */}
          <div>
            <div className="border-2 border-border rounded-xl p-8 bg-card/50">
              <h3 className="text-3xl font-bold mb-4">Our goals</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                We are designing NexuFed around a set of goals to address the realities of industrial AI. These are design targets we are working towards as we move from research to real-world deployments.
              </p>
              
              <div className="space-y-6">
                {goals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex items-baseline justify-between mb-2">
                      <h4 className="font-bold text-foreground">{goal.title}</h4>
                      <span className="text-accent font-bold text-lg">{goal.target}</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2 mb-1">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: goal.barWidth }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">{goal.description}</p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-6 italic">
                All targets are indicative design goals and will be validated and refined with real-world data and pilot projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAreHeaded;
