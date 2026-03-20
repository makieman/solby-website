import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calculator, ArrowRight, CheckCircle2, RefreshCw, FileText,
  TrendingUp, Globe, ShieldCheck, Banknote,
} from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Automated Bank Reconciliation",
    description:
      "Connect your bank feeds and let Solby match transactions automatically — reducing month-end closing time by up to 80%.",
  },
  {
    icon: ShieldCheck,
    title: "e-Tims & KRA Compliance",
    description:
      "Built-in KRA e-Tims integration ensures every invoice is compliant. Forget manual filing — we handle it automatically.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description:
      "Transact in any currency with live exchange rate updates. Perfect for businesses dealing with international clients and suppliers.",
  },
  {
    icon: FileText,
    title: "Professional Invoicing",
    description:
      "Generate branded, compliant invoices, receipts, and credit notes in seconds. Automate payment reminders with ease.",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Financial Reports",
    description:
      "P&L, balance sheets, cash flow statements, and aging reports — available on demand, always up to date.",
  },
  {
    icon: Banknote,
    title: "Expense & Budget Management",
    description:
      "Track spending, set department budgets, and get instant alerts when limits are approached or exceeded.",
  },
];

const audiences = [
  "SMEs needing KRA-compliant accounting",
  "Businesses with cross-border transactions",
  "Companies managing multiple cost centres",
  "Accountants & finance teams wanting automation",
  "Any business replacing manual spreadsheet accounting",
];

const ProductAccounting = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 mesh-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6"
            style={{ background: "rgba(16,185,129,0.1)", color: "#10B981", borderColor: "rgba(16,185,129,0.2)" }}>
            Finance
          </span>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
              <Calculator className="w-8 h-8" />
            </div>
            <h1 className="heading-xl text-foreground">Accounting</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
            Smart financials, zero complexity. Solby Accounting automates the tedious parts so your finance team can focus on what matters — growing the business.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features Grid */}
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#10B981" }}>Key Features</span>
          <h2 className="heading-lg mt-3 text-foreground">Built for Modern Finance Teams</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white/90 dark:bg-slate-800/70 rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Who is this for */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#10B981" }}>Ideal For</span>
            <h2 className="heading-lg mt-3 text-foreground mb-6">Who Is Solby Accounting For?</h2>
            <ul className="space-y-3">
              {audiences.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-border p-8 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.08), transparent)" }}>
            <div className="absolute inset-0 mesh-grid opacity-30" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-3">Ditch the spreadsheets today</h3>
              <p className="text-muted-foreground mb-6">
                Close your books faster, stay KRA-compliant, and gain real financial clarity with Solby Accounting.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-7 rounded-lg text-sm font-semibold text-white transition-colors group"
                style={{ background: "#10B981" }}
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/30">
      <div className="container-custom text-center">
        <p className="text-muted-foreground mb-4">Want to see pricing?</p>
        <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: "#10B981" }}>
          View Pricing Plans <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default ProductAccounting;
