import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BarChart3, Zap, LifeBuoy, ArrowRight, TrendingUp, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import heroDashboard from "@/assets/hero_dashboard.png"

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

// Browser chrome wrapper removed since we're using a full photo

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
      {/* Background */}
      <div className="absolute inset-0 mesh-grid" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-solby-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-solby-green/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14 items-center">

          {/* ── Left col ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
                <p className="text-lg text-muted-foreground max-w-lg mb-8">{slide.description}</p>
              </motion.div>
            </AnimatePresence>

            {/* feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {pills.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-primary text-primary-foreground btn-pulse-glow hover:opacity-90 transition-opacity group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-muted transition-colors">
                Try Demo
              </Link>
            </div>

            {/* trust row */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              {["No credit card required", "Free 14-day trial", "Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-solby-green" />
                  {t}
                </span>
              ))}
            </div>

            {/* slide dots */}
            <div className="flex gap-2 mt-8">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-border w-2"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Right col — hero photo ── */}
          <div className="hidden lg:flex relative h-[600px] group items-start justify-end self-start mt-12">
            {/* ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-solby-blue/15 via-transparent to-solby-green/15 rounded-3xl blur-3xl z-0" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative z-10 w-[90%] mr-4 lg:mr-8 select-none pointer-events-none"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-border/50">
                <img
                  src={heroDashboard}
                  alt="Professional using Solby Vision"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  draggable={false}
                />

                {/* Subtle overlay gradient to blend with background if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* ── Mobile: single screen ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden mt-10 rounded-2xl overflow-hidden"
        >
          <img src={heroDashboard} alt="Professional using Solby Vision" className="w-full" draggable={false} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
