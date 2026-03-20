import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users, ArrowRight, CheckCircle2, Calendar, ClipboardList,
  DollarSign, UserCircle, Award, BookOpen,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "One-Click Payroll Processing",
    description:
      "Process payroll for your entire workforce in seconds. Automatic PAYE, NSSF, NHIF, and HELB deductions — always compliant.",
  },
  {
    icon: Calendar,
    title: "Leave & Attendance Management",
    description:
      "Employees apply for leave via the self-service portal. Managers approve with one click. Balances update automatically.",
  },
  {
    icon: UserCircle,
    title: "Employee Self-Service Portal",
    description:
      "Payslips, leave balances, tax certificates, and personal details — accessible by employees anytime, from any device.",
  },
  {
    icon: ClipboardList,
    title: "Performance Management",
    description:
      "Set objectives, run appraisals, and track performance trends across teams and departments effortlessly.",
  },
  {
    icon: Award,
    title: "Benefits & Allowances",
    description:
      "Configure complex allowance structures, medical covers, and custom benefits per employee grade or department.",
  },
  {
    icon: BookOpen,
    title: "HR Compliance & Records",
    description:
      "Maintain digital employee files, contracts, and onboarding checklists with built-in audit trails for compliance.",
  },
];

const audiences = [
  "Companies with 10 to 10,000+ employees",
  "HR teams tired of manual payroll calculations",
  "Businesses needing statutory compliance automation",
  "Organisations managing remote or field teams",
  "Companies scaling headcount rapidly",
];

const ProductHR = () => (
  <div className="min-h-screen bg-background">
    {/* Hero */}
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 mesh-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[130px]" style={{ background: "rgba(124,58,237,0.1)" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "rgba(124,58,237,0.06)" }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6"
            style={{ background: "rgba(124,58,237,0.1)", color: "#7C3AED", borderColor: "rgba(124,58,237,0.2)" }}>
            Human Resources
          </span>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl" style={{ background: "rgba(124,58,237,0.1)", color: "#7C3AED" }}>
              <Users className="w-8 h-8" />
            </div>
            <h1 className="heading-xl text-foreground">HR & Payroll</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl">
            Your people, perfectly managed. Solby HR eliminates payroll errors, automates compliance, and empowers employees — all from a single modern platform.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-lg text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              style={{ background: "linear-gradient(135deg, #7C3AED, #6D28D9)" }}
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
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#7C3AED" }}>Key Features</span>
          <h2 className="heading-lg mt-3 text-foreground">Modern HR for a Modern Workforce</h2>
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
                <div className="flex items-center justify-center w-11 h-11 rounded-xl mb-4" style={{ background: "rgba(124,58,237,0.1)", color: "#7C3AED" }}>
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#7C3AED" }}>Ideal For</span>
            <h2 className="heading-lg mt-3 text-foreground mb-6">Who Is Solby HR For?</h2>
            <ul className="space-y-3">
              {audiences.map((a) => (
                <li key={a} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#7C3AED" }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-border p-8 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08), transparent)" }}>
            <div className="absolute inset-0 mesh-grid opacity-30" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-3">Ready to modernize your HR?</h3>
              <p className="text-muted-foreground mb-6">
                Say goodbye to payroll errors and compliance headaches. Solby HR has you covered.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-11 px-7 rounded-lg text-sm font-semibold text-white transition-colors group"
                style={{ background: "#7C3AED" }}
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
        <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: "#7C3AED" }}>
          View Pricing Plans <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default ProductHR;
