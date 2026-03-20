import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers, ArrowRight, CheckCircle2, BarChart3, Settings,
  Globe, ShieldCheck, Workflow, Package,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "End-to-End Workflow Automation",
    description:
      "Automate procurement, sales, fulfilment, and invoicing in a single connected flow — eliminating manual handoffs and data silos.",
  },
  {
    icon: Package,
    title: "Real-Time Inventory Tracking",
    description:
      "Track stock levels, movements, and valuations across multiple warehouses and branches in real time.",
  },
  {
    icon: BarChart3,
    title: "Actionable Business Intelligence",
    description:
      "Live dashboards and scheduled reports give you the numbers you need to make faster, smarter decisions every day.",
  },
  {
    icon: Globe,
    title: "Multi-Branch Management",
    description:
      "Manage unlimited locations from a single platform. Consolidate reports, control permissions, and unify operations effortlessly.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    description:
      "Fine-grained permissions ensure every team member sees exactly what they need — nothing more, nothing less.",
  },
  {
    icon: Settings,
    title: "Fully Configurable",
    description:
      "Customize workflows, approval chains, document templates, and reports to match exactly how your business operates.",
  },
];

const audiences = [
  "Manufacturing & distribution companies",
  "Retail chains & multi-branch stores",
  "Wholesale & trading businesses",
  "Import/export companies",
  "Any growing SME ready to scale operations",
];

const ProductERP = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 mesh-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
            Core Platform
          </span>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary">
              <Layers className="w-8 h-8" />
            </div>
            <h1 className="heading-xl text-foreground">Solby ERP</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
            Run your entire business from one place — procurement, inventory, sales, finance, and fulfilment, all in a single unified platform built for African enterprises.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#2431FF] to-[#1a24cc] text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
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
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Key Features</span>
          <h2 className="heading-lg mt-3 text-foreground">Everything Integrated, Nothing Missing</h2>
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
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
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
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Ideal For</span>
            <h2 className="heading-lg mt-3 text-foreground mb-6">Who Is Solby ERP For?</h2>
            <ul className="space-y-3">
              {audiences.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Card */}
          <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border border-border p-8 overflow-hidden">
            <div className="absolute inset-0 mesh-grid opacity-30" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-3">Ready to transform your operations?</h3>
              <p className="text-muted-foreground mb-6">
                Join 800+ businesses already running leaner and growing faster with Solby ERP.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-7 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
              >
                Talk to Sales
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="section-padding bg-muted/30">
      <div className="container-custom text-center">
        <p className="text-muted-foreground mb-4">Want to see pricing?</p>
        <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          View Pricing Plans <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default ProductERP;
