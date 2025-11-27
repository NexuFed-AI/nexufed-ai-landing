import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo-long.png";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

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

  const handleAboutClick = () => {
    if (location.pathname === "/about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/about");
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
    setIsOpen(false); // Close mobile menu
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
          <button onClick={handleHomeClick} className="flex items-center">
            <img src={logo} alt="NexuFed AI" className="h-8 md:h-10" />
          </button>
          
          <div className="hidden lg:flex items-center gap-8">
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
            <button 
              onClick={handleAboutClick}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              About
            </button>
            <Link 
              to="/careers"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Careers
            </Link>
            <Button 
              onClick={() => handleNavigateToSection("contact")}
              className="bg-accent hover:bg-accent/90"
            >
              Get in Touch
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-start py-6 border-b border-border">
                    <button onClick={() => {
                      handleHomeClick();
                      setIsOpen(false);
                    }}>
                      <img src={logo} alt="NexuFed AI" className="h-8" />
                    </button>
                  </div>
                  
                  <nav className="flex flex-col gap-4 py-8 flex-1">
                    <button 
                      onClick={() => {
                        handleHomeClick();
                        setIsOpen(false);
                      }}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left px-4 py-2 hover:bg-muted rounded-md"
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => handleNavigateToSection("technology")}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left px-4 py-2 hover:bg-muted rounded-md"
                    >
                      Technology
                    </button>
                    <button 
                      onClick={() => handleNavigateToSection("benefits")}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left px-4 py-2 hover:bg-muted rounded-md"
                    >
                      Benefits
                    </button>
                    <button 
                      onClick={() => {
                        handleAboutClick();
                        setIsOpen(false);
                      }}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left px-4 py-2 hover:bg-muted rounded-md"
                    >
                      About
                    </button>
                    <Link 
                      to="/careers"
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors text-left px-4 py-2 hover:bg-muted rounded-md"
                    >
                      Careers
                    </Link>
                    
                    <div className="mt-auto pt-6">
                      <Button 
                        onClick={() => handleNavigateToSection("contact")}
                        className="w-full bg-accent hover:bg-accent/90"
                      >
                        Get in Touch
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
