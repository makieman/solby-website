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
    color: "#059669",
    description: "Advanced accounting tools with real-time financial insights, automated reconciliation, and tax compliance built in.",
    bullets: ["Automated bank reconciliation", "E-Tims / KRA compliance", "Multi-currency support"],
  },
  {
    title: "AI Analytics & Automation",
    subtitle: "Supercharge Your",
    icon: Brain,
    color: "#7C3AED",
    description: "Smart automation and predictive analytics that surface actionable insights and eliminate repetitive manual work.",
    bullets: ["Predictive demand forecasting", "Automated report generation", "Anomaly detection alerts"],
  },
  {
    title: "HR & Payroll",
    subtitle: "Modernize Your",
    icon: Users,
    color: "#EA580C",
    description: "Complete human resource management with automated payroll processing, leave tracking, and employee self-service.",
    bullets: ["One-click payroll processing", "Leave & attendance management", "Employee self-service portal"],
  },
];

const FeaturesSection = () => (
  <section className="section-padding relative">
    <div className="container-custom">
      <SectionWrapper className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">Powerful Features</span>
        <h2 className="heading-lg mt-3 text-foreground">Everything Your Business Needs</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          From operations to finance — Solby gives you the tools to run a smarter business.
        </p>
      </SectionWrapper>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <SectionWrapper key={f.title} delay={i * 0.1}>
            <div className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl h-full">
              <div className="h-1 w-full" style={{ backgroundColor: f.color }} />
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${f.color}15` }}>
                    <f.icon className="w-6 h-6" style={{ color: f.color }} />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: f.color }}>
                    {f.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{f.description}</p>
                <hr className="border-border mb-4" />
                <ul className="space-y-2 mb-4">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="/features" className="inline-flex items-center gap-1 text-sm font-semibold group/link" style={{ color: f.color }}>
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
