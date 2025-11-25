import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your condition monitoring with federated learning? 
            Get in touch to discuss your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email</div>
                      <a 
                        href="mailto:rene.glitza@nexufed.ai" 
                        className="text-foreground hover:text-accent transition-colors font-medium"
                      >
                        rene.glitza@nexufed.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Phone</div>
                      <a 
                        href="tel:+492343218591" 
                        className="text-foreground hover:text-accent transition-colors font-medium"
                      >
                        +49 234 32 18591
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Location</div>
                      <div className="text-foreground font-medium">
                        E2/12, ZESS<br />
                        Hans-Dobbertin-Str. 8<br />
                        44803 Bochum, Germany
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button 
                    variant="outline" 
                    size="icon"
                    asChild
                    className="border-2"
                  >
                    <a 
                      href="https://linkedin.com/company/nexufed" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    asChild
                    className="border-2"
                  >
                    <a 
                      href="https://github.com/NexuFed" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">René Glitza</h3>
                <p className="text-lg mb-6 opacity-90">
                  Founder & CTO — NexuFed AI
                </p>
                <p className="mb-6 opacity-90">
                  Applied Data Science & Federated Learning
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    asChild
                  >
                    <a href="mailto:rene.glitza@nexufed.ai">
                      <Mail className="mr-2 w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href="https://linkedin.com/company/nexufed" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 w-4 h-4" />
                      Schedule Meeting
                    </a>
                  </Button>
                </div>

                <p className="text-sm mt-6 opacity-75">
                  Note: NexuFed AI is a research/startup project (not an incorporated company).
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
