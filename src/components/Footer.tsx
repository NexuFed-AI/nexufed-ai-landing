import { Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.png";
const Footer = () => {
  return <footer className="bg-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img alt="NexuFed AI" className="h-12 mb-4" src="/lovable-uploads/7025a1c1-ca50-4929-af21-c5cc852a3286.png" />
            <p className="text-sm text-muted-foreground">
              Privacy-preserving condition monitoring with federated learning.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById("technology")?.scrollIntoView({
                behavior: "smooth"
              })} className="text-foreground hover:text-primary transition-colors">
                  Technology
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("benefits")?.scrollIntoView({
                behavior: "smooth"
              })} className="text-foreground hover:text-primary transition-colors">
                  Benefits
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth"
              })} className="text-foreground hover:text-primary transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Connect</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/nexufed" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/NexuFed" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm mt-4 text-muted-foreground">
              E2/12, ZESS<br />
              Hans-Dobbertin-Str. 8<br />
              44803 Bochum, Germany
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Nexus Federated     </p>
        </div>
      </div>
    </footer>;
};
export default Footer;