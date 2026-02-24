import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const cycles = [
  { key: "monthly", label: "Monthly", mult: 1, discount: 0 },
  { key: "quarterly", label: "Quarterly", mult: 3, discount: 0.1, badge: "Save 10%" },
  { key: "semi-annual", label: "Semi-Annual", mult: 6, discount: 0.15, badge: "Save 15%" },
  { key: "annual", label: "Annual", mult: 12, discount: 0.2, badge: "Save 20%" },
];

const plans = [
  {
    name: "Starter",
    monthlyPrice: 20,
    setupFee: 116,
    features: ["All Solby Lite features", "Full POS system", "Inventory with stock alerts", "Customer profiles", "Daily & monthly sales reports"],
    popular: false,
  },
  {
    name: "Growth",
    monthlyPrice: 35,
    setupFee: 155,
    features: ["Everything in Starter", "Credit management & debtors", "Supplier management", "Advanced inventory tracking", "Multiple users & role permissions"],
    popular: true,
  },
  {
    name: "Pro",
    monthlyPrice: 50,
    setupFee: 193,
    features: ["Everything in Growth", "Multi-branch support", "Profit & margin analysis", "Advanced reporting & exports"],
    popular: false,
  },
];

const PricingPreview = () => {
  const [cycle, setCycle] = useState("monthly");
  const activeCycle = cycles.find((c) => c.key === cycle)!;

  const calcPrice = (monthly: number) => {
    return Math.round(monthly * activeCycle.mult * (1 - activeCycle.discount));
  };

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <SectionWrapper className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Pricing</span>
          <h2 className="heading-lg mt-3 text-foreground">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business — scale anytime.
          </p>
        </SectionWrapper>

        {/* Cycle toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted rounded-xl p-1 gap-1">
            {cycles.map((c) => (
              <button
                key={c.key}
                onClick={() => setCycle(c.key)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  cycle === c.key
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
                {c.badge && (
                  <span className="absolute -top-2 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-accent text-accent-foreground">
                    {c.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <SectionWrapper key={plan.name} delay={i * 0.1}>
              <div className={`relative bg-card border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col ${
                plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
              }`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-lg text-foreground">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-3xl font-heading font-black text-foreground">${calcPrice(plan.monthlyPrice)}</span>
                  <span className="text-sm text-muted-foreground">/{activeCycle.key === "monthly" ? "mo" : activeCycle.label.toLowerCase()}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Setup fee: ${plan.setupFee}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/pricing"
                  className={`mt-6 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all group ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/pricing" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline group">
            See all plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
