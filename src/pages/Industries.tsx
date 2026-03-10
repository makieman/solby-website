import { Briefcase, Store, Utensils, Construction, Heart, Truck, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";

const coreSolutions = [
  {
    title: "Solby ERP",
    color: "from-solby-blue to-solby-blue-dark",
    desc: "Unlock unprecedented growth on the platform that keeps enterprises ahead. Operate your B2C, B2B, and retail markets with software built for customization, productivity, and revenue growth.",
    features: ["Integrated POS for in-store and online selling", "Credit sales management and CRM", "HR & payroll, inventory and store management", "Requisitions and dispatches, multi-store management", "Comprehensive reports and analytics", "Invoicing and quotations with digital signature support", "Full accounting suite"],
  },
  {
    title: "Solby HR",
    color: "from-solby-green to-emerald-700",
    desc: "Empower your workforce with Solby's advanced HR solutions — designed for talent acquisition, smooth onboarding, efficient payroll, and more.",
    features: ["Talent Acquisition and Applicant Tracking", "Seamless Onboarding Workflows", "Leave and Time-off Management", "Payroll & Compensation Automation", "Employee Records and Self-service Hub", "Compliance and Documentation Management"],
  },
  {
    title: "Solby Supply Chain",
    color: "from-purple-600 to-purple-800",
    desc: "Optimize your supply chain operations with comprehensive management tools.",
    features: ["Inventory tracking and warehouse management", "Order processing and fulfillment", "Supplier relationship management", "Distribution and logistics coordination", "Demand forecasting and production planning"],
  },
];

const industries = [
  {
    id: "service-industry",
    title: "Service Industry",
    icon: Briefcase,
    color: "#2431FF",
    desc: "Streamline operations and enhance client management with Solby's dedicated service industry solutions.",
    features: ["Client scheduling and appointment management", "Automated invoicing and payment tracking", "Resource allocation and staff management", "Digital document management and e-signatures", "Detailed performance analytics and reporting"],
    types: ["Audit & Certification", "Bike Leasing", "Billboard Rental", "Environmental Agency", "Hair Salon", "Handyman", "IT Hardware and Support", "Law Firm", "Photography", "Property Owner Association", "Real Estate", "Software Reseller", "Talent Acquisition"],
  },
  {
    id: "retail",
    title: "Enterprise",
    icon: Store,
    color: "#16A34A",
    desc: "Transform your Enterprise with Solby ERP, designed to integrate all aspects of your retail operations.",
    features: ["Omnichannel point of sale system", "Inventory management across multiple locations", "Customer relationship management and loyalty programs", "Seamless online and in-store integration", "Advanced sales analytics and forecasting"],
    types: ["Agriculture Store", "Arts & Crafts", "Bakery", "Book Store", "Clothing Store", "Electronics Store", "Furniture Store", "Grocery Store", "Hardware Store", "Toy Store"],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: Utensils,
    color: "#EA580C",
    desc: "Elevate guest experiences and streamline operations with Solby Bar & Restaurant management solution.",
    features: ["Table reservation and guest management", "Menu management and kitchen display systems", "Inventory and recipe cost control", "Staff scheduling and time tracking", "Integrated accounting and financial reporting"],
    types: ["Bar and Pub", "Fast Food", "Fine Dining Restaurant"],
  },
  {
    id: "construction",
    title: "Construction",
    icon: Construction,
    color: "#D97706",
    desc: "Build with confidence using Solby's construction management tools designed for project efficiency.",
    features: ["Project management and scheduling", "Material inventory and procurement", "Equipment tracking and maintenance", "Job costing and budget management", "Subcontractor management and payment processing"],
    types: ["Architecture Firm", "Construction", "Gardening", "Solar Energy"],
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    icon: Heart,
    color: "#E11D48",
    desc: "Enhance patient care and optimize facility management with Solby's health and wellness solutions.",
    features: ["Appointment scheduling and client records", "Treatment and service tracking", "Inventory management for medical supplies", "Staff scheduling and certification tracking", "Billing and insurance claim processing"],
    types: ["Eyewear Store", "Fitness Center", "Pharmacy", "Sports Club", "Wellness Practitioners"],
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    icon: Truck,
    color: "#7C3AED",
    desc: "Optimize your supply chain operations with Solby's comprehensive management tools.",
    features: ["Inventory tracking and warehouse management", "Order processing and fulfillment", "Supplier relationship management", "Distribution and logistics coordination", "Demand forecasting and production planning"],
    types: ["Beverage Distributor", "Corporate Gifts", "Custom Furniture Production", "Fossil Fuel Trading", "Micro Brewery"],
  },
];

const Industries = () => (
  <>
    {/* Hero - Match Features page woven treatment */}
    <section className="relative flex h-[54vh] min-h-[400px] w-full items-center justify-center overflow-hidden bg-background">
      <WovenLightBackground />

      <div className="container-custom relative z-10 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            Trusted by businesses across Africa
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Industries We Serve
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Solby powers businesses across every industry with purpose-built solutions.
        </motion.p>
      </div>
    </section>

    <section className="sticky top-[72px] z-30 border-y border-border/60 bg-background/88 py-3 supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="container-custom max-w-6xl">
        <div className="flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <a
              key={industry.id}
              href={`#${industry.id}`}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
            >
              {industry.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Core Solutions */}
    <section className="py-14 md:py-16">
      <div className="container-custom max-w-6xl">
        <SectionWrapper className="mb-8 text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our Products</span>
          <h2 className="heading-lg mt-3 text-foreground">Solby's Core Solutions</h2>
        </SectionWrapper>

        <div className="grid gap-5 md:grid-cols-3">
          {coreSolutions.map((s, i) => (
            <SectionWrapper key={s.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col">
                <div className={`bg-gradient-to-r p-5 ${s.color}`}>
                  <h3 className="text-xl font-heading font-bold text-white">{s.title}</h3>
                </div>
                <div className="flex-1 p-5">
                  <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Sections */}
    {industries.map((ind, i) => (
      <section key={ind.id} id={ind.id} className={`${i % 2 === 0 ? "bg-muted/50" : "bg-background"} scroll-mt-36 py-12 md:py-14`}>
        <div className="container-custom max-w-6xl">
          <SectionWrapper>
            <div className="grid gap-7 lg:grid-cols-2 lg:gap-9">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ind.color}15` }}>
                    <ind.icon className="w-6 h-6" style={{ color: ind.color }} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">{ind.title}</h2>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">{ind.desc}</p>
                <ul className="space-y-2.5">
                  {ind.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ind.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Business Types</h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {ind.types.map((t) => (
                    <span key={t} className="rounded-xl border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: ind.color }}>
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    ))}
  </>
);

export default Industries;
