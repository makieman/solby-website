import { useState, useEffect } from "react";
import { Search, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  {
    icon: Search,
    title: "Analyze Your Needs",
    description: "We start by understanding your business requirements and challenges to customize the perfect solution.",
    bullets: ["In-depth business analysis", "Identify operational bottlenecks", "Custom solution planning", "ROI projection and goals"],
  },
  {
    icon: Rocket,
    title: "Seamless Implementation",
    description: "Our expert team ensures smooth onboarding with minimal disruption to your business operations.",
    bullets: ["Data migration assistance", "Staff training and workshops", "Phased implementation approach", "Dedicated support throughout"],
  },
  {
    icon: TrendingUp,
    title: "Optimize & Scale",
    description: "Continuously improve operations with ongoing support and regular updates to scale with your business.",
    bullets: ["Regular performance reviews", "System optimization", "Access to new features", "Scalable infrastructure"],
  },
];

const HowItWorksSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % steps.length), 5000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="section-padding relative bg-[#f8fafc] dark:bg-[#0f172a] overflow-hidden">
      {/* Seamless grid pattern from previous section - fading in for smooth distinction */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4] dark:opacity-[0.15] [mask-image:linear-gradient(to_bottom,transparent,black_30%)]"></div>
      </div>
      <div className="container-custom">
        <SectionWrapper className="text-center section-heading-spacing">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Process</span>
          <h2 className="heading-lg mt-3 text-foreground">How Solby Works For You</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to transform your business operations and drive growth.
          </p>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${i === active
                  ? "border-primary bg-card shadow-lg scale-[1.02]"
                  : "border-border bg-card/50 hover:border-primary/30"
                  }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${i === active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{step.title}</h3>
                </div>
                {i === active && (
                  <div className="mt-3 pl-11">
                    <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                    <ul className="space-y-1.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Visual */}
          <SectionWrapper className="hidden lg:flex items-center justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-solby-blue/20 to-solby-green/20 blur-xl" />
              <div className="relative w-full h-full rounded-full bg-card border border-border flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl font-heading font-black gradient-text">{active + 1}</span>
                  <p className="mt-2 font-heading font-bold text-foreground text-lg">{steps[active].title}</p>
                </div>
              </div>
              {/* Orbiting dots */}
              {[0, 1, 2, 3].map((d) => (
                <div
                  key={d}
                  className="absolute w-3 h-3 rounded-full bg-primary/40"
                  style={{
                    top: `${50 + 48 * Math.sin((d * Math.PI) / 2 + active * 0.5)}%`,
                    left: `${50 + 48 * Math.cos((d * Math.PI) / 2 + active * 0.5)}%`,
                    transition: "all 0.5s ease",
                  }}
                />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
