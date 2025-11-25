import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        // Initialize analytics if user accepted
        if (savedPreferences.analytics) {
          initializeAnalytics();
        }
      } catch (e) {
        console.error("Error parsing cookie consent:", e);
      }
    }
  }, []);

  const initializeAnalytics = () => {
    // Initialize Google Analytics 4
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-S8T8X439TL`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-S8T8X439TL', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
    
    console.log("Google Analytics initialized");
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
    initializeAnalytics();
  };

  const handleDeclineAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowSettings(false);
    setShowBanner(false);
    if (preferences.analytics) {
      initializeAnalytics();
    }
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur-sm border-t border-primary/20 shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Cookie-Einstellungen
              </h3>
              <p className="text-sm text-muted-foreground">
                Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und unsere Website zu optimieren. 
                Sie können Ihre Präferenzen jederzeit anpassen. Weitere Informationen finden Sie in unserer{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleDeclineAll}
                className="w-full sm:w-auto"
              >
                Nur notwendige
              </Button>
              <Button
                variant="outline"
                onClick={handleOpenSettings}
                className="w-full sm:w-auto"
              >
                Einstellungen
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Cookie-Einstellungen</DialogTitle>
            <DialogDescription>
              Wählen Sie, welche Arten von Cookies Sie akzeptieren möchten. Sie können Ihre Einstellungen jederzeit ändern.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="necessary" className="text-base font-semibold">
                    Notwendige Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>
                <Switch
                  id="necessary"
                  checked={preferences.necessary}
                  disabled
                  className="ml-4"
                />
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="analytics" className="text-base font-semibold cursor-pointer">
                    Analyse-Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                    indem sie Informationen anonym sammeln und melden. Wir verwenden diese Daten, 
                    um unsere Website zu verbessern.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Dienste: Google Analytics
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, analytics: checked })
                  }
                  className="ml-4"
                />
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Label htmlFor="marketing" className="text-base font-semibold cursor-pointer">
                    Marketing-Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen und 
                    relevante Werbung anzuzeigen. Wir verwenden derzeit keine Marketing-Cookies, 
                    aber diese Option steht für zukünftige Funktionen zur Verfügung.
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, marketing: checked })
                  }
                  className="ml-4"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setShowSettings(false)}
              className="flex-1"
            >
              Abbrechen
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Einstellungen speichern
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
