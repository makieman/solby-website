import { Calculator, CreditCard, ReceiptText, ShoppingCart, Package, Truck, BarChart3, Brain, FileBarChart, Users, Briefcase, UserCog, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { WovenLightHero } from "@/components/ui/woven-light-hero";
import financeImg from "@/assets/features/finance.jpg";
import operationsImg from "@/assets/features/operations.jpg";
import biImg from "@/assets/features/business-intelligence.png";
import peopleImg from "@/assets/features/people.png";

const groups = [
  {
    title: "Finance & Accounting",
    subtitle: "Smart Financial Management",
    description: "Stay on top of your finances with powerful, compliance-ready accounting tools designed for modern scaling enterprises.",
    image: financeImg,
    cards: [
      { name: "Accounting", icon: Calculator, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-t-emerald-500", desc: "Automated bookkeeping, real-time P&L, and compliance tools that keep your finances crystal clear.", benefits: ["General ledger & bookkeeping", "Bank reconciliation", "Balance Sheet & P&L", "Tax-ready reports"] },
      { name: "Payment Integration", icon: CreditCard, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-t-blue-500", desc: "Accept M-Pesa, Visa, and Mastercard with automatic reconciliation — your customers pay the way they want.", benefits: ["M-Pesa & card support", "Secure processing", "Auto-reconciliation", "Faster settlements"] },
      { name: "eTIMS & Tax", icon: ReceiptText, color: "text-purple-500", bg: "bg-purple-500/10", border: "border-t-purple-500", desc: "Full KRA compliance with eTIMS e-invoicing, real-time data sync, and accurate VAT calculations.", benefits: ["eTIMS e-invoicing", "KRA data sync", "VAT calculations", "Compliance alerts"] },
    ],
  },
  {
    title: "Operations",
    subtitle: "Operational Excellence",
    description: "Streamline every part of your business operations with smart, integrated tools.",
    image: operationsImg,
    cards: [
      { name: "Sales Management", icon: ShoppingCart, color: "text-green-500", bg: "bg-green-500/10", border: "border-t-green-500", desc: "From the first quote to the final invoice — manage your entire sales cycle in one unified platform.", benefits: ["Quote generation", "Order processing", "Pipeline tracking", "Commission management"] },
      { name: "Inventory Control", icon: Package, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-t-indigo-500", desc: "Real-time tracking with smart reorder automation, multi-location support, and expiry management.", benefits: ["Multi-location tracking", "Auto reorder alerts", "Barcode scanning", "Expiry management"] },
      { name: "Procurement", icon: Truck, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-t-amber-500", desc: "End-to-end supplier management with automated POs, approval workflows, and contract tracking.", benefits: ["Supplier scoring", "Auto PO generation", "3-way matching", "Contract renewals"] },
    ],
  },
  {
    title: "Business Intelligence",
    subtitle: "Data-Driven Decisions",
    description: "Turn data into actionable insights with powerful analytics and AI tools.",
    image: biImg,
    cards: [
      { name: "Dashboard & BI", icon: BarChart3, color: "text-blue-600", bg: "bg-blue-600/10", border: "border-t-blue-600", desc: "Interactive analytics and KPI tracking that turn raw data into clear, actionable stories.", benefits: ["Visual KPI reports", "Custom dashboards", "Real-time data", "Multi-format export"] },
      { name: "AI Analytics", icon: Brain, color: "text-violet-500", bg: "bg-violet-500/10", border: "border-t-violet-500", desc: "Predictive insights and smart automation that do the heavy lifting so your team can focus on what matters.", benefits: ["Demand forecasting", "Anomaly detection", "Smart workflows", "Customer insights"] },
      { name: "Advanced Reporting", icon: FileBarChart, color: "text-fuchsia-500", bg: "bg-fuchsia-500/10", border: "border-t-fuchsia-500", desc: "Scheduled, customizable reports with drill-down analysis — the right data for the right people.", benefits: ["Custom templates", "Scheduled delivery", "Drill-down analysis", "PDF / Excel / CSV"] },
    ],
  },
  {
    title: "People & Customers",
    subtitle: "People-First Management",
    description: "Build stronger teams and deeper customer relationships.",
    image: peopleImg,
    cards: [
      { name: "Customer Management", icon: Users, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-t-rose-500", desc: "Build real relationships — full profiles, interaction history, lead pipeline, and satisfaction tracking.", benefits: ["360° profiles", "Interaction history", "Lead pipeline", "Segmentation"] },
      { name: "HR & Payroll", icon: Briefcase, color: "text-orange-500", bg: "bg-orange-500/10", border: "border-t-orange-500", desc: "From onboarding to payroll — time tracking, leave management, and performance reviews, all automated.", benefits: ["One-click payroll", "Leave workflows", "Time tracking", "Performance reviews"] },
      { name: "User Management", icon: UserCog, color: "text-slate-500", bg: "bg-slate-500/10", border: "border-t-slate-500", desc: "Role-based access, MFA, and full audit trails — your data stays secure and accountable.", benefits: ["RBAC system", "MFA support", "Audit trails", "Password policies"] },
    ],
  },
];

const Features = () => (
  <main className="min-h-screen bg-background">
    {/* Animated Hero using Three.js */}
    <WovenLightHero />

    {/* Feature groups styled with Glassmorphism / Stitch inspiration */}
    {groups.map((group, index) => (
      <section key={group.title} className={`py-24 relative overflow-hidden ${index % 2 !== 0 ? 'bg-muted/30' : ''}`}>
        <div className="container-custom relative z-10">

          <div className={`flex flex-col lg:flex-row items-center gap-16 mb-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{group.title}</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">{group.subtitle}</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0">
                {group.description}
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-20 animate-subtle-float">
                <img
                  alt={group.title}
                  className="rounded-3xl shadow-2xl border border-white/10 dark:border-white/5 object-cover aspect-[4/3] w-full"
                  src={group.image}
                />
              </div>
              {/* Glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/20 rounded-full blur-[80px] -z-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {group.cards.map((card) => (
              <div
                key={card.name}
                className={`group relative bg-card p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden`}
              >
                {/* Top colored border effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${card.color}`} />
                <div className={`absolute top-0 left-0 w-full h-[2px] ${card.bg.replace('/10', '')}`} />

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300 ${card.bg}`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">{card.name}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {card.desc}
                </p>

                <ul className="space-y-4">
                  {card.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <Check className={`w-5 h-5 ${card.color}`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
    ))}

  </main>
);

export default Features;
