import { Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="NexuFed AI" className="h-12 mb-4" />
            <p className="text-sm opacity-90">
              Privacy-preserving condition monitoring with federated learning.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Benefits
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/nexufed"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/NexuFed"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-90 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm mt-4 opacity-90">
              E2/12, ZESS<br />
              Hans-Dobbertin-Str. 8<br />
              44803 Bochum, Germany
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© 2025 NexuFed AI. Research/startup project (not an incorporated company).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
