import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layers, Calculator, Users, Truck, UtensilsCrossed, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const products = [
  {
    name: "Solby ERP",
    tagline: "Run your entire business from one place",
    description:
      "A complete enterprise resource planning suite built for growing African businesses — from procurement to fulfilment, all unified.",
    icon: Layers,
    color: "#2431FF",
    bg: "rgba(36,49,255,0.08)",
    slug: "erp",
    badge: "Core Platform",
  },
  {
    name: "Accounting",
    tagline: "Smart financials, zero complexity",
    description:
      "Real-time bookkeeping, automated bank reconciliation, e-Tims KRA compliance, and multi-currency support out of the box.",
    icon: Calculator,
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    slug: "accounting",
    badge: "Finance",
  },
  {
    name: "HR & Payroll",
    tagline: "Your people, perfectly managed",
    description:
      "One-click payroll processing, leave & attendance tracking, employee self-service portal, and NSSF/NHIF compliance.",
    icon: Users,
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    slug: "hr",
    badge: "Human Resources",
  },
  {
    name: "Supply Chain",
    tagline: "Seamless flow from source to shelf",
    description:
      "End-to-end supply chain visibility with real-time inventory tracking, supplier management, and demand forecasting.",
    icon: Truck,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    slug: "supply-chain",
    badge: "Logistics",
  },
  {
    name: "Bar & Restaurant",
    tagline: "Serve faster, profit smarter",
    description:
      "A powerful POS & management system for hospitality — table management, kitchen display, stock control and daily reports.",
    icon: UtensilsCrossed,
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    slug: "bar-restaurant",
    badge: "Hospitality",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => (
  <section className="section-padding relative bg-background overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 mesh-grid opacity-50" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
    </div>

    <div className="container-custom relative z-10">
      {/* Section header */}
      <SectionWrapper className="text-center section-heading-spacing max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
          Our Products
        </span>
        <h2 className="heading-lg mt-3 text-foreground">
          Everything Your Business Needs,{" "}
          <span className="gradient-text">In One Ecosystem</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Pick only what you need. Every Solby product works standalone or as part of the unified platform.
        </p>
      </SectionWrapper>

      {/* Cards grid — 5 cards, last one centered on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, i) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              /* Center the 5th card on lg: occupies col 2 of 3 */
              className={i === 4 ? "lg:col-start-2" : ""}
            >
              <Link
                to={`/products/${product.slug}`}
                className="group relative flex flex-col h-full rounded-2xl border border-border bg-white/90 dark:bg-slate-800/70 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ background: `linear-gradient(to right, ${product.color}80, ${product.color})` }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge + icon row */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon */}
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: product.bg, color: product.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Badge */}
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: product.bg, color: product.color }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p
                    className="text-[13px] font-semibold mb-3"
                    style={{ color: product.color }}
                  >
                    {product.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* CTA */}
                  <div
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-colors group/link"
                    style={{ color: product.color }}
                  >
                    Explore {product.name}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;
