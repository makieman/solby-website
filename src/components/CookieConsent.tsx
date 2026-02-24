import { useState, useEffect } from "react";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("solby-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("solby-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("solby-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container-custom">
        <div className="bg-card border border-border rounded-xl shadow-2xl p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
            <a href="/cookies" className="text-primary underline">Learn more</a>.
          </p>
          <div className="flex gap-2 shrink-0">
            <button onClick={decline} className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:bg-muted transition-colors">
              Decline
            </button>
            <button onClick={accept} className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Accept
            </button>
          </div>
          <button onClick={decline} className="absolute top-2 right-2 sm:hidden p-1 text-muted-foreground" aria-label="Close">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
