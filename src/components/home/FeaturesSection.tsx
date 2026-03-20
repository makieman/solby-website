import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers, Calculator, Users, Truck, UtensilsCrossed,
  BarChart2, Brain, ShoppingCart, FileText, Boxes,
  DollarSign, Workflow, Globe, HeadphonesIcon, ShieldCheck,
} from "lucide-react";
import { Radar, IconContainer } from "@/components/ui/radar-effect";
import SectionWrapper from "@/components/SectionWrapper";

/* ── Module definitions ──────────────────────────────────────────── */
const modules = [
  /* Row 1 — Core products (link to dedicated pages) */
  { label: "ERP",            icon: <Layers className="w-6 h-6" />,          color: "#2431FF", href: "/products/erp" },
  { label: "Accounting",     icon: <Calculator className="w-6 h-6" />,      color: "#10B981", href: "/products/accounting" },
  { label: "HR & Payroll",   icon: <Users className="w-6 h-6" />,           color: "#7C3AED", href: "/products/hr" },
  { label: "Supply Chain",   icon: <Truck className="w-6 h-6" />,           color: "#F59E0B", href: "/products/supply-chain" },
  { label: "Bar & Restaurant", icon: <UtensilsCrossed className="w-6 h-6" />, color: "#EF4444", href: "/products/bar-restaurant" },

  /* Row 2 — Module features */
  { label: "AI Analytics",   icon: <Brain className="w-6 h-6" />,           color: "#06B6D4", href: "/features" },
  { label: "Point of Sale",  icon: <ShoppingCart className="w-6 h-6" />,    color: "#8B5CF6", href: "/features" },
  { label: "Reports",        icon: <BarChart2 className="w-6 h-6" />,       color: "#F97316", href: "/features" },
  { label: "Inventory",      icon: <Boxes className="w-6 h-6" />,           color: "#0EA5E9", href: "/features" },
  { label: "Payroll",        icon: <DollarSign className="w-6 h-6" />,      color: "#22C55E", href: "/features" },

  /* Row 3 — Platform capabilities */
  { label: "Automation",     icon: <Workflow className="w-6 h-6" />,        color: "#A855F7", href: "/features" },
  { label: "Documents",      icon: <FileText className="w-6 h-6" />,        color: "#64748B", href: "/features" },
  { label: "Multi-Branch",   icon: <Globe className="w-6 h-6" />,           color: "#2DD4BF", href: "/features" },
  { label: "Security",       icon: <ShieldCheck className="w-6 h-6" />,     color: "#3B82F6", href: "/features" },
  { label: "Support 24/7",   icon: <HeadphonesIcon className="w-6 h-6" />,  color: "#EC4899", href: "/contact" },
];

/* ── Section ─────────────────────────────────────────────────────── */
const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding relative bg-[#050d1a] overflow-hidden">
      {/* ── Background grid ───────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(100,116,139,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">

        {/* ── Section header ──────────────────────────────────── */}
        <SectionWrapper className="text-center section-heading-spacing max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Platform Modules
          </span>
          <h2 className="heading-lg mt-3 text-white">
            One Platform.{" "}
            <span className="gradient-text">Every Tool You Need.</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            Solby's integrated modules work independently or together — pick what
            your business needs, scale as you grow.
          </p>
        </SectionWrapper>

        {/* ── Central Radar ───────────────────────────────────── */}
        <div className="flex justify-center mb-8 mt-4">
          <div className="relative">
            {/* Glow ring behind radar */}
            <div className="absolute inset-0 rounded-full blur-2xl opacity-30 bg-primary/40 scale-110" />
            <Radar size={260} className="relative z-10" />
            {/* Floating centre label */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="mt-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[11px] font-bold tracking-widest uppercase text-primary">
                  Solby Platform
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Icon grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 mt-6">
          {modules.map((mod, i) => (
            <IconContainer
              key={mod.label}
              icon={mod.icon}
              label={mod.label}
              color={mod.color}
              delay={i * 0.07}
              onClick={() => navigate(mod.href)}
            />
          ))}
        </div>

        {/* ── Bottom call-to-action ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 mb-4">
            All modules share one database — no integrations needed.
          </p>
          <button
            onClick={() => navigate("/features")}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors backdrop-blur-sm"
          >
            Explore all features →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
