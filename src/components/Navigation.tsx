import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-long.png";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="NexuFed AI" className="h-8 md:h-10" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              <>
                <button 
                  onClick={() => scrollToSection("technology")}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Technology
                </button>
                <button 
                  onClick={() => scrollToSection("benefits")}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Benefits
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/#technology"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Technology
                </Link>
                <Link 
                  to="/#benefits"
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  Benefits
                </Link>
              </>
            )}
            <Link 
              to="/about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Button 
              onClick={() => isHomePage ? scrollToSection("contact") : window.location.href = "/#contact"}
              className="bg-accent hover:bg-accent/90"
            >
              Get in Touch
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              onClick={() => isHomePage ? scrollToSection("contact") : window.location.href = "/#contact"}
              size="sm"
              className="bg-accent hover:bg-accent/90"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
