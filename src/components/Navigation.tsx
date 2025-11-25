import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "@/assets/logo-long.png";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleHomeClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateToSection = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Handle initial hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="NexuFed AI" className="h-8 md:h-10" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={handleHomeClick}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigateToSection("technology")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Technology
            </button>
            <button 
              onClick={() => handleNavigateToSection("benefits")}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Benefits
            </button>
            <Link 
              to="/about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Button 
              onClick={() => handleNavigateToSection("contact")}
              className="bg-accent hover:bg-accent/90"
            >
              Get in Touch
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              onClick={() => handleNavigateToSection("contact")}
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
