import { Calculator, CreditCard, ReceiptText, ShoppingCart, Package, Truck, BarChart3, Brain, FileBarChart, Users, Briefcase, UserCog, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";

const groups = [
  {
    title: "Finance & Accounting",
    subtitle: "Smart Financial Management",
    description: "Stay on top of your finances with powerful, compliance-ready accounting tools.",
    cards: [
      { name: "Accounting", icon: Calculator, color: "#059669", desc: "Automated bookkeeping, real-time P&L, and compliance tools that keep your finances crystal clear.", benefits: ["General ledger & bookkeeping", "Bank reconciliation", "Balance Sheet & P&L", "Tax-ready reports"] },
      { name: "Payment Integration", icon: CreditCard, color: "#0D9488", desc: "Accept M-Pesa, Visa, and Mastercard with automatic reconciliation — your customers pay the way they want.", benefits: ["M-Pesa & card support", "Secure processing", "Auto-reconciliation", "Faster settlements"] },
      { name: "eTIMS & Tax", icon: ReceiptText, color: "#0284C7", desc: "Full KRA compliance with eTIMS e-invoicing, real-time data sync, and accurate VAT calculations.", benefits: ["eTIMS e-invoicing", "KRA data sync", "VAT calculations", "Compliance alerts"] },
    ],
  },
  {
    title: "Operations",
    subtitle: "Operational Excellence",
    description: "Streamline every part of your business operations with smart, integrated tools.",
    cards: [
      { name: "Sales Management", icon: ShoppingCart, color: "#16A34A", desc: "From the first quote to the final invoice — manage your entire sales cycle in one unified platform.", benefits: ["Quote generation", "Order processing", "Pipeline tracking", "Commission management"] },
      { name: "Inventory Control", icon: Package, color: "#4F46E5", desc: "Real-time tracking with smart reorder automation, multi-location support, and expiry management.", benefits: ["Multi-location tracking", "Auto reorder alerts", "Barcode scanning", "Expiry management"] },
      { name: "Procurement", icon: Truck, color: "#D97706", desc: "End-to-end supplier management with automated POs, approval workflows, and contract tracking.", benefits: ["Supplier scoring", "Auto PO generation", "3-way matching", "Contract renewals"] },
    ],
  },
  {
    title: "Business Intelligence",
    subtitle: "Data-Driven Decisions",
    description: "Turn data into actionable insights with powerful analytics and AI tools.",
    cards: [
      { name: "Dashboard & BI", icon: BarChart3, color: "#2431FF", desc: "Interactive analytics and KPI tracking that turn raw data into clear, actionable stories.", benefits: ["Visual KPI reports", "Custom dashboards", "Real-time data", "Multi-format export"] },
      { name: "AI Analytics", icon: Brain, color: "#7C3AED", desc: "Predictive insights and smart automation that do the heavy lifting so your team can focus on what matters.", benefits: ["Demand forecasting", "Anomaly detection", "Smart workflows", "Customer insights"] },
      { name: "Advanced Reporting", icon: FileBarChart, color: "#9333EA", desc: "Scheduled, customizable reports with drill-down analysis — the right data for the right people.", benefits: ["Custom templates", "Scheduled delivery", "Drill-down analysis", "PDF / Excel / CSV"] },
    ],
  },
  {
    title: "People & Customers",
    subtitle: "People-First Management",
    description: "Build stronger teams and deeper customer relationships.",
    cards: [
      { name: "Customer Management", icon: Users, color: "#E11D48", desc: "Build real relationships — full profiles, interaction history, lead pipeline, and satisfaction tracking.", benefits: ["360° profiles", "Interaction history", "Lead pipeline", "Segmentation"] },
      { name: "HR & Payroll", icon: Briefcase, color: "#EA580C", desc: "From onboarding to payroll — time tracking, leave management, and performance reviews, all automated.", benefits: ["One-click payroll", "Leave workflows", "Time tracking", "Performance reviews"] },
      { name: "User Management", icon: UserCog, color: "#475569", desc: "Role-based access, MFA, and full audit trails — your data stays secure and accountable.", benefits: ["RBAC system", "MFA support", "Audit trails", "Password policies"] },
    ],
  },
];

const Features = () => (
  <>
    {/* Hero */}
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solby-black to-solby-blue-dark" />
      <div className="absolute inset-0 bg-solby-blue/20" />
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-4">Powerful Features for Every Business</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover how Solby's comprehensive suite transforms your business operations.
          </p>
        </SectionWrapper>
      </div>
    </section>

    {/* Feature groups */}
    {groups.map((group) => (
      <section key={group.title} className="section-padding even:bg-muted/50">
        <div className="container-custom">
          <SectionWrapper className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">{group.title}</span>
            <h2 className="heading-lg mt-3 text-foreground">{group.subtitle}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{group.description}</p>
          </SectionWrapper>

          <div className="grid md:grid-cols-3 gap-6">
            {group.cards.map((card, i) => (
              <SectionWrapper key={card.name} delay={i * 0.1}>
                <div className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl h-full">
                  <div className="h-1 w-full" style={{ backgroundColor: card.color }} />
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${card.color}15` }}>
                      <card.icon className="w-6 h-6" style={{ color: card.color }} />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{card.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                    <ul className="space-y-2">
                      {card.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-3.5 h-3.5 shrink-0" style={{ color: card.color }} />
                          {b}
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
    ))}

    {/* CTA */}
    <section className="section-padding">
      <div className="container-custom text-center">
        <SectionWrapper>
          <h2 className="heading-lg text-foreground mb-4">Ready to See It in Action?</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 btn-glow transition-all group">
              Schedule a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors">
              View Pricing
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </section>
  </>
);

export default Features;
