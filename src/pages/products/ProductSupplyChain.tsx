import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Truck, ArrowRight, CheckCircle2, BarChart2, PackageSearch,
  AlertCircle, RefreshCw, GitBranch, Boxes,
} from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Real-Time Inventory Visibility",
    description:
      "Track every item across multiple warehouses with live stock levels, valuations, and movement histories at your fingertips.",
  },
  {
    icon: PackageSearch,
    title: "Supplier & Purchase Management",
    description:
      "Manage supplier catalogues, raise LPOs, track deliveries, and reconcile GRNs against invoices — all in one place.",
  },
  {
    icon: BarChart2,
    title: "Demand Forecasting",
    description:
      "AI-powered demand forecasting reduces overstock and stockouts by predicting what you need before you run out.",
  },
  {
    icon: AlertCircle,
    title: "Low-Stock Alerts",
    description:
      "Automatic reorder alerts notify purchasing teams the moment inventory falls below configurable safety thresholds.",
  },
  {
    icon: RefreshCw,
    title: "Stock Transfers & Adjustments",
    description:
      "Move stock between locations, record wastage, and perform stocktakes — with full reconciliation and audit trails.",
  },
  {
    icon: GitBranch,
    title: "Multi-Location Management",
    description:
      "From a single dashboard, manage stock across your head office, branches, and field stores without duplicating data.",
  },
];

const audiences = [
  "Distributors and wholesale businesses",
  "Retailers managing multi-branch inventory",
  "Manufacturers tracking raw materials & finished goods",
  "Logistics companies needing real-time fleet & cargo visibility",
  "Any business struggling with stock discrepancies",
];

const ProductSupplyChain = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 mesh-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[130px]" style={{ background: "rgba(245,158,11,0.1)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "rgba(245,158,11,0.06)" }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6"
            style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B", borderColor: "rgba(245,158,11,0.2)" }}>
            Logistics
          </span>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl" style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
              <Truck className="w-8 h-8" />
            </div>
            <h1 className="heading-xl text-foreground">Supply Chain</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
            Seamless flow from source to shelf. Solby Supply Chain gives you end-to-end visibility, smarter purchasing, and inventory precision across every location.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)" }}
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
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F59E0B" }}>Key Features</span>
          <h2 className="heading-lg mt-3 text-foreground">Control Every Link in Your Chain</h2>
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
                <div className="flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F59E0B" }}>Ideal For</span>
            <h2 className="heading-lg mt-3 text-foreground mb-6">Who Is Solby Supply Chain For?</h2>
            <ul className="space-y-3">
              {audiences.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-border p-8 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.08), transparent)" }}>
            <div className="absolute inset-0 mesh-grid opacity-30" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-3">Stop losing money to poor inventory</h3>
              <p className="text-muted-foreground mb-6">
                Solby Supply Chain pays for itself in the first month by eliminating overstock, stockouts, and manual errors.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-7 rounded-lg text-sm font-semibold text-white transition-colors group"
                style={{ background: "#F59E0B" }}
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
        <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: "#F59E0B" }}>
          View Pricing Plans <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default ProductSupplyChain;
