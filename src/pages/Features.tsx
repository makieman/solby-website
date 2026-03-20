import { Calculator, CreditCard, ReceiptText, ShoppingCart, Package, Truck, BarChart3, Brain, FileBarChart, Users, Briefcase, UserCog, Check } from "lucide-react";
import { WovenLightHero } from "@/components/ui/woven-light-hero";
import financeImg from "@/assets/features/finance.png";
import operationsImg from "@/assets/features/operations.jpg";
import biImg from "@/assets/features/business-intelligence.png";
import peopleImg from "@/assets/features/people.png";
import { motion } from "framer-motion";

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
      <section 
        key={group.title} 
        className={`relative overflow-hidden py-24 ${index % 2 !== 0 ? 'bg-slate-50 dark:bg-[#0b1222]' : 'bg-white dark:bg-[#0f172a]'}`}
      >
        {/* Background Gradients for Depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/4' : 'right-1/4'} -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.04)_0%,transparent_70%)] blur-[80px]`} />
          <div className={`absolute top-1/3 ${index % 2 === 0 ? 'right-1/4' : 'left-1/4'} translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(16,185,129,0.03)_0%,transparent_70%)] blur-[60px]`} />
        </div>

        <div className="container-custom relative z-10">

          <div className={`mb-16 flex flex-col items-center gap-10 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-5/12 text-center lg:text-left">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{group.title}</span>
              <h2 className="mb-5 text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">{group.subtitle}</h2>
              <p className="max-w-xl mx-auto text-base text-muted-foreground lg:mx-0 lg:text-lg">
                {group.description}
              </p>
            </div>
            <div className="relative flex justify-center lg:w-7/12">
              <div className="relative z-20 w-full max-w-[380px] lg:max-w-[430px]">
                <img
                  alt={group.title}
                  className="aspect-[4/3] w-full h-auto rounded-3xl border border-white/10 object-cover shadow-md dark:border-white/5"
                  src={group.image}
                />
              </div>
              <div className="absolute left-1/2 top-1/2 -z-10 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 opacity-25 blur-[34px]" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {group.cards.map((card) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/50 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:bg-white dark:hover:bg-slate-900 hover:border-primary/30"
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                {/* Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 transition-opacity group-hover:opacity-100 ${card.color}`} />
                
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner ${card.bg}`}>
                  <card.icon className={`w-7 h-7 ${card.color}`} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-primary">{card.name}</h3>
                <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {card.desc}
                </p>

                <ul className="space-y-4">
                  {card.benefits.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <div className={`flex h-5 w-5 items-center justify-center rounded-full bg-current opacity-10 ${card.color}`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtle Glow on Hover */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-current opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]" 
                     style={{ color: card.color.split('-')[1] }} />
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    ))}

  </main>
);

export default Features;
