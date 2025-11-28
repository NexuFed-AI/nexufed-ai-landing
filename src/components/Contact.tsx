import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Linkedin, Github } from "lucide-react";
import { trackEvent } from "@/hooks/useAnalytics";
const Contact = () => {
  return <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your condition monitoring with federated learning? Get in touch to discuss your project.
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
                      <a className="text-foreground hover:text-accent transition-colors font-medium" href="mailto:info@nexufed.ai">
                        info@nexufed.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Phone</div>
                      <a href="tel:+492343218591" className="text-foreground hover:text-accent transition-colors font-medium">
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
                        Zentrum für das Engineering Smarter Produkt-Service Systeme (ZESS)
                        <br />
                        Hans-Dobbertin-Str. 8<br />
                        44803 Bochum, Germany
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="outline" size="icon" asChild className="border-2">
                    
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-2">
                    
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-brand-blue rounded-xl p-8 text-primary-foreground flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Contact the NexuFed Team</h3>
                  <p className="text-lg opacity-90">We're here to answer your questions.</p>
                </div>

                <div className="flex justify-center my-6">
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8" asChild>
                    <a onClick={() => trackEvent('click', 'Contact', 'Send Email')} href="mailto:info@nexufed.ai">
                      <Mail className="mr-2 w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button variant="outline" size="icon" asChild className="border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                    <a href="https://linkedin.com/company/nexufed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={() => trackEvent('click', 'Contact', 'LinkedIn')}>
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                    <a href="https://github.com/NexuFed-AI" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => trackEvent('click', 'Contact', 'GitHub')}>
                      <Github className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;