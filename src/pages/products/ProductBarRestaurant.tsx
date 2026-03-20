import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UtensilsCrossed, ArrowRight, CheckCircle2, LayoutGrid, Printer,
  Beef, BarChart2, Smartphone, ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Table & Floor Management",
    description:
      "Manage your floor plan visually. Assign tables, track occupancy, and handle reservations with a drag-and-drop interface.",
  },
  {
    icon: Printer,
    title: "Kitchen Display & Printing",
    description:
      "Orders sent from the POS appear instantly on kitchen displays or receipt printers — reducing errors and wait times.",
  },
  {
    icon: Beef,
    title: "Ingredient-Level Stock Control",
    description:
      "Track consumption at the ingredient level. Every dish reduces stock automatically, preventing variance and theft.",
  },
  {
    icon: BarChart2,
    title: "Daily Sales Reports",
    description:
      "End-of-day Z-reports, shift summaries, best-sellers, and revenue by category — ready in one click every evening.",
  },
  {
    icon: Smartphone,
    title: "Mobile POS",
    description:
      "Waitstaff take orders tableside on tablets. Orders sync to the kitchen instantly, speeding up service and improving accuracy.",
  },
  {
    icon: ShieldCheck,
    title: "Cashier & Shift Management",
    description:
      "Open/close shifts with cash-up reconciliation. Spot discrepancies immediately and maintain a clear audit trail.",
  },
];

const audiences = [
  "Restaurants, cafes, and bistros",
  "Bars, lounges, and nightclubs",
  "Fast-food and quick-service restaurants",
  "Hotels with F&B outlets",
  "Multi-branch hospitality chains",
];

const ProductBarRestaurant = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 mesh-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[130px]" style={{ background: "rgba(239,68,68,0.1)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "rgba(239,68,68,0.06)" }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6"
            style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444", borderColor: "rgba(239,68,68,0.2)" }}>
            Hospitality
          </span>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
              <UtensilsCrossed className="w-8 h-8" />
            </div>
            <h1 className="heading-xl text-foreground">Bar & Restaurant</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
            Serve faster, profit smarter. Solby Bar & Restaurant is a complete hospitality management system — from tableside ordering to kitchen, stock, and daily reporting.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ background: "linear-gradient(135deg, #EF4444, #DC2626)" }}
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
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#EF4444" }}>Key Features</span>
          <h2 className="heading-lg mt-3 text-foreground">Built for the Hospitality Industry</h2>
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
                <div className="flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ background: "rgba(239,68,68,0.1)", color: "#EF4444" }}>
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#EF4444" }}>Ideal For</span>
            <h2 className="heading-lg mt-3 text-foreground mb-6">Who Is Solby Bar & Restaurant For?</h2>
            <ul className="space-y-3">
              {audiences.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#EF4444" }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-border p-8 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.08), transparent)" }}>
            <div className="absolute inset-0 mesh-grid opacity-30" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-3">Upgrade your hospitality operations</h3>
              <p className="text-muted-foreground mb-6">
                Faster service, fewer errors, precise stock control — Solby Bar & Restaurant helps you run a tighter, more profitable outlet.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-7 rounded-lg text-sm font-semibold text-white transition-colors group"
                style={{ background: "#EF4444" }}
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
        <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: "#EF4444" }}>
          View Pricing Plans <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default ProductBarRestaurant;
