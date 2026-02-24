import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown, Briefcase, Store, Utensils, Construction, Heart, Truck } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const industryItems = [
  { name: "Service Industry", icon: Briefcase, href: "/industries#service-industry" },
  { name: "Retail / Enterprise", icon: Store, href: "/industries#retail" },
  { name: "Hospitality", icon: Utensils, href: "/industries#hospitality" },
  { name: "Construction", icon: Construction, href: "/industries#construction" },
  { name: "Health & Wellness", icon: Heart, href: "/industries#health-wellness" },
  { name: "Supply Chain", icon: Truck, href: "/industries#supply-chain" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Industries", href: "/industries", hasDropdown: true },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="https://res.cloudinary.com/dzorbbb7s/image/upload/v1760597632/Solby_Logo_rzhueo.png"
            alt="Solby Logo"
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative"
              onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
            >
              <Link
                to={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              {link.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-card border border-border rounded-xl shadow-xl p-2"
                    >
                      {industryItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity btn-glow"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-lg text-muted-foreground" aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg text-foreground" aria-label="Menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.href}
                    className="block px-4 py-3 text-base font-medium rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-6 space-y-1">
                      {industryItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                        >
                          <item.icon className="w-4 h-4 text-primary" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block mx-4 mt-3 px-5 py-2.5 text-center text-sm font-semibold rounded-lg bg-primary text-primary-foreground"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
