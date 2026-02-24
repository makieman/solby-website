import { Briefcase, Store, Utensils, Construction, Heart, Truck, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";

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
    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solby-black to-solby-blue-dark" />
      <div className="absolute inset-0 bg-solby-blue/20" />
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-4">Industries We Serve</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Solby powers businesses across every industry with purpose-built solutions.
          </p>
        </SectionWrapper>
      </div>
    </section>

    {/* Core Solutions */}
    <section className="section-padding">
      <div className="container-custom">
        <SectionWrapper className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Our Products</span>
          <h2 className="heading-lg mt-3 text-foreground">Solby's Core Solutions</h2>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {coreSolutions.map((s, i) => (
            <SectionWrapper key={s.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full flex flex-col">
                <div className={`p-6 bg-gradient-to-r ${s.color}`}>
                  <h3 className="text-xl font-heading font-bold text-white">{s.title}</h3>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
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
      <section key={ind.id} id={ind.id} className={`section-padding ${i % 2 === 0 ? "bg-muted/50" : ""}`}>
        <div className="container-custom">
          <SectionWrapper>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${ind.color}15` }}>
                    <ind.icon className="w-6 h-6" style={{ color: ind.color }} />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">{ind.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6">{ind.desc}</p>
                <ul className="space-y-3">
                  {ind.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ind.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Business Types</h3>
                <div className="flex flex-wrap gap-2">
                  {ind.types.map((t) => (
                    <span key={t} className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold group" style={{ color: ind.color }}>
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
