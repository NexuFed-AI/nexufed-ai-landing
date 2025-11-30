import { Card } from "@/components/ui/card";
import { FlaskConical, Rocket, Users } from "lucide-react";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From research to <span className="text-accent">real-world deployments</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 border-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <FlaskConical className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Where we are today<br /><span className="text-lg font-normal text-muted-foreground">(research & prototype phase)</span></h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground">Active research on federated learning and anomaly detection for industrial audio and vibration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground">Laboratory proof-of-concepts on rotating machinery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground">Building relationships with machine builders and industrial partners for future pilots</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Rocket className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">What comes next</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground">Develop robust prototype implementations on industrial edge hardware and servers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground">Pilot projects with selected OEM and industrial partners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                <span className="text-muted-foreground">Towards a scalable privacy-preserving condition monitoring platform</span>
              </li>
            </ul>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 border-2 bg-gradient-to-r from-primary/5 to-accent/5">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-accent flex-shrink-0" />
              <p className="text-muted-foreground">
                We are also in conversation with the broader startup ecosystem to prepare for future funding and scaling.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
