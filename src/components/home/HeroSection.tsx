import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { BarChart3, Zap, LifeBuoy, ArrowRight, TrendingUp, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import screenshot1 from "@/assets/screenshot1.png"
import screenshot2 from "@/assets/screenshot2.png"

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

// Browser chrome wrapper
const ScreenFrame = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f172a] ${className}`}>
    {/* traffic lights */}
    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1e293b] border-b border-white/10">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <div className="ml-3 flex-1 h-5 rounded bg-white/5 border border-white/10 px-2 flex items-center">
        <span className="text-[10px] text-white/30 truncate">app.solbyvision.com</span>
      </div>
    </div>
    <img src={src} alt={alt} className="w-full block" draggable={false} />
  </div>
);

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

          {/* ── Right col — stacked screenshots ── */}
          <div className="hidden lg:block relative h-[480px]">
            {/* ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-solby-blue/15 via-transparent to-solby-green/15 rounded-3xl blur-3xl" />

            {/* Back screen — slightly rotated & offset */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="absolute top-0 right-0 w-[88%]"
              style={{ transform: "perspective(900px) rotateX(4deg) rotateY(-6deg) translateZ(-20px)" }}
            >
              <ScreenFrame
                src={screenshot2}
                alt="Solby Vision Analytics"
                className="opacity-60 scale-[0.97] origin-top-right"
              />
            </motion.div>

            {/* Front / main screen */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="absolute bottom-0 left-0 w-[88%] z-10"
              style={{ transform: "perspective(800px) rotateX(4deg) rotateY(4deg)" }}
            >
              <ScreenFrame
                src={screenshot1}
                alt="Solby Vision Dashboard"
              />
            </motion.div>

            {/* Floating stat card — top-left */}
            {/*<motion.div
              initial={{ opacity: 0, x: -16, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-6 left-0 z-20"
            >
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow-xl">
                <span className="w-8 h-8 rounded-lg bg-solby-green/15 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-solby-green" />
                </span>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none">Revenue Growth</p>
                  <p className="text-sm font-bold text-solby-green leading-tight">+32%</p>
                  <p className="text-[10px] text-muted-foreground">this quarter</p>
                </div>
              </div>
            </motion.div> */}

            {/* Floating stat card — right-center */}
            {/*<motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute top-1/2 -translate-y-1/2 right-0 z-20"
            >
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow-xl">
                <span className="w-8 h-8 rounded-lg bg-solby-blue/15 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-solby-blue" />
                </span>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none">Active Users</p>
                  <p className="text-sm font-bold text-solby-blue leading-tight">1,240</p>
                  <p className="text-[10px] text-muted-foreground">all modules</p>
                </div>
              </div>
            </motion.div> */}

            {/* Floating stat card — bottom-right */}
            {/*<motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute bottom-4 right-2 z-20"
            >
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow-xl">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </span>
                <div>
                  <p className="text-[10px] text-muted-foreground leading-none">KRA Compliance</p>
                  <p className="text-sm font-bold text-primary leading-tight">100%</p>
                  <p className="text-[10px] text-muted-foreground">always up-to-date</p>
                </div>
              </div>
            </motion.div> */}
          </div>

        </div>

        {/* ── Mobile: single screen ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden mt-10"
        >
          <ScreenFrame src={screenshot1} alt="Solby Vision Dashboard" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; <motion.div
  initial={{ opacity: 0, x: 16 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.9 }}
  className="absolute top-1/2 -translate-y-1/2 right-0 z-20"
>
  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow-xl">
    <span className="w-8 h-8 rounded-lg bg-solby-blue/15 flex items-center justify-center flex-shrink-0">
      <Users className="w-4 h-4 text-solby-blue" />
    </span>
    <div>
      <p className="text-[10px] text-muted-foreground leading-none">Active Users</p>
      <p className="text-sm font-bold text-solby-blue leading-tight">1,240</p>
      <p className="text-[10px] text-muted-foreground">all modules</p>
    </div>
  </div>
</motion.div>
