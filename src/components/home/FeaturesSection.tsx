import { Settings, Calculator, Brain, Users, ArrowRight, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const features = [
  {
    title: "Business Operations",
    subtitle: "Transform Your",
    icon: Settings,
    color: "#2431FF",
    description: "Streamline your entire business with our comprehensive ERP — from procurement to fulfilment, all in one place.",
    bullets: ["End-to-end workflow automation", "Real-time inventory tracking", "Multi-branch management"],
  },
  {
    title: "Financial Management",
    subtitle: "Revolutionize Your",
    icon: Calculator,
    color: "#10B981",
    description: "Advanced accounting tools with real-time financial insights, automated reconciliation, and tax compliance built in.",
    bullets: ["Automated bank reconciliation", "E-Tims / KRA compliance", "Multi-currency support"],
  },
  {
    title: "AI Analytics & Automation",
    subtitle: "Supercharge Your",
    icon: Brain,
    color: "#2431FF",
    description: "Smart automation and predictive analytics that surface actionable insights and eliminate repetitive manual work.",
    bullets: ["Predictive demand forecasting", "Automated report generation", "Anomaly detection alerts"],
  },
  {
    title: "HR & Payroll",
    subtitle: "Modernize Your",
    icon: Users,
    color: "#10B981",
    description: "Complete human resource management with automated payroll processing, leave tracking, and employee self-service.",
    bullets: ["One-click payroll processing", "Leave & attendance management", "Employee self-service portal"],
  },
];

const FeaturesSection = () => (
  <section className="section-padding relative bg-[#f8fafc] dark:bg-[#0f172a] overflow-hidden">
    {/* Grid pattern and ambient lights */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4] dark:opacity-[0.15]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-400/20 dark:bg-emerald-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
    </div>

    <div className="container-custom relative z-10">
      <div className="mx-auto w-full max-w-6xl">
        <SectionWrapper className="text-center section-heading-spacing max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Powerful Features</span>
          <h2 className="heading-lg mt-3 text-foreground">Everything Your Business Needs</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From operations to finance — Solby gives you the tools to run a smarter business.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {features.map((f, i) => (
            <SectionWrapper key={f.title} delay={i * 0.1} className="h-full">
            <div className="group relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl p-6 border border-white/50 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(to right, ${f.color}80, ${f.color})` }}></div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: `${f.color}15`, color: f.color }}>
                  <f.icon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase mt-1" style={{ color: `${f.color}CC` }}>
                  {f.subtitle}
                </span>
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 mb-4 leading-relaxed flex-1">
                {f.description}
              </p>
              <ul className="space-y-2 mb-4">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center text-[13px] text-slate-600 dark:text-slate-300">
                    <Sparkles className="w-3.5 h-3.5 mr-2 shrink-0" style={{ color: f.color }} />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="/features" className="inline-flex items-center text-[13px] font-semibold transition-colors group/link mt-auto" style={{ color: f.color }}>
                Learn more
                <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
