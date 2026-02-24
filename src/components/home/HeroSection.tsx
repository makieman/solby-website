import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BarChart3, Zap, LifeBuoy, ArrowRight } from "lucide-react";

const slides = [
  {
    line1: "Transform Your",
    line2: "Business Operations",
    description: "Streamline your entire business with our comprehensive ERP solution designed for African enterprises.",
  },
  {
    line1: "Revolutionize Your",
    line2: "Financial Management",
    description: "Advanced accounting tools with real-time financial insights and KRA compliance built in.",
  },
  {
    line1: "Supercharge Your",
    line2: "AI Analytics & Automation",
    description: "Smart automation and predictive analytics for data-driven decisions.",
  },
  {
    line1: "Modernize Your",
    line2: "HR & Payroll",
    description: "Complete human resource management with automated payroll processing.",
  },
];

const pills = [
  { icon: BarChart3, label: "Real-time Analytics" },
  { icon: Zap, label: "99.9% Uptime" },
  { icon: LifeBuoy, label: "24/7 Support" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-grid" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-solby-blue/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-solby-green/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
                ⚡ Introducing our next-gen Enterprise Software
              </span>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? {} : { opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="heading-xl mb-4">
                  <span className="text-foreground">{slide.line1}</span>
                  <br />
                  <span className="gradient-text">{slide.line2}</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg mb-8">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap gap-3 mb-8">
              {pills.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground btn-pulse-glow hover:opacity-90 transition-opacity group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-muted transition-colors"
              >
                Try Demo
              </Link>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — abstract visual */}
          <div className="hidden lg:flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-lg aspect-square"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-solby-blue/20 to-solby-green/20 blur-2xl" />
                <div className="relative w-full h-full rounded-3xl bg-card border border-border overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-solby-blue to-solby-green flex items-center justify-center">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-2xl font-heading font-bold gradient-text">{slide.line2}</p>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-20 rounded-lg bg-muted animate-pulse" />
                      ))}
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="h-16 rounded-lg bg-muted animate-pulse" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
