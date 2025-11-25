import { Card } from "@/components/ui/card";
import { Database, Lock, Network, Cpu } from "lucide-react";

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What is <span className="text-accent">Federated Learning?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A revolutionary approach to machine learning that keeps your data where it belongs — on your devices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Privacy by Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your sensitive industrial data never leaves your premises. Models are trained locally, 
                  and only encrypted model updates are shared — never the raw data itself.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Network className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Collaborative Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Benefit from collective knowledge across multiple sites and organizations while maintaining 
                  data sovereignty and competitive advantages.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Distributed Computing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage the computational power distributed across your infrastructure. 
                  No need for centralized data centers or expensive data migrations.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Real-Time Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Detect anomalies and predict failures before they happen with continuous, 
                  AI-powered condition monitoring across your entire asset portfolio.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">The Future of Industrial AI</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            NexuFed AI combines cutting-edge federated learning with advanced condition monitoring 
            to deliver unprecedented insights while respecting data privacy and regulatory requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
