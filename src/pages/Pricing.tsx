import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Plug, Smartphone, Wrench, HelpCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";

const cycles = [
  { key: "monthly", label: "Monthly", mult: 1, discount: 0 },
  { key: "quarterly", label: "Quarterly", mult: 3, discount: 0.1, badge: "Save 10%" },
  { key: "semi-annual", label: "Semi-Annual", mult: 6, discount: 0.15, badge: "Save 15%" },
  { key: "annual", label: "Annual", mult: 12, discount: 0.2, badge: "Save 20%" },
];

interface Plan {
  name: string;
  monthlyPrice: number;
  setupFee: number;
  features: string[];
  popular?: boolean;
  comingSoon?: boolean;
  disabled?: boolean;
}

interface Category {
  id: string;
  title: string;
  description: string;
  idealFor: string;
  plans: Plan[];
}

const categories: Category[] = [
  {
    id: "solby-lite",
    title: "Solby Lite",
    description: "A lightweight, affordable entry point for businesses transitioning from manual records to digital systems.",
    idealFor: "Retail kiosks & vibandas · Small shops & dukas · Market vendors · Online sellers · Side hustles",
    plans: [
      { name: "Solby Lite", monthlyPrice: 10, setupFee: 0, comingSoon: true, disabled: true, features: ["Sales & credit sales", "Quotations", "Inventory management", "Digital receipts & invoicing", "Basic customer management (CRM)", "Basic reports & sales summaries", "Cloud-based access (web & mobile)"] },
    ],
  },
  {
    id: "retail-service-pos",
    title: "Retail & Service POS",
    description: "Comprehensive point-of-sale solution for retail shops and service businesses.",
    idealFor: "Retail shops · Electronics shops · Salons · Pharmacies · Hardware stores · Car wash",
    plans: [
      { name: "Starter", monthlyPrice: 20, setupFee: 116, features: ["All Solby Lite features", "Full POS system", "Inventory with stock alerts", "Customer profiles", "Daily & monthly sales reports"] },
      { name: "Growth", monthlyPrice: 35, setupFee: 155, popular: true, features: ["Everything in Starter", "Credit management & debtors", "Supplier management", "Advanced inventory tracking", "Multiple users & role permissions"] },
      { name: "Pro", monthlyPrice: 50, setupFee: 193, features: ["Everything in Growth", "Multi-branch support", "Profit & margin analysis", "Advanced reporting & exports"] },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Built for restaurants, cafes, bars, and hospitality businesses.",
    idealFor: "Restaurants & cafes · Bars & lounges · Hotels & lodges · Fast food outlets",
    plans: [
      { name: "Starter", monthlyPrice: 30, setupFee: 50, features: ["POS for food & beverage", "Table & order management", "Kitchen order tickets (KOT)", "Inventory for ingredients", "Sales & staff performance reports"] },
      { name: "Growth", monthlyPrice: 45, setupFee: 77, popular: true, features: ["Everything in Starter", "Menu engineering & pricing control", "Multi-user access", "Shift & cashier tracking", "Expense tracking"] },
      { name: "Pro", monthlyPrice: 60, setupFee: 193, features: ["Everything in Growth", "Multi-outlet management", "Advanced analytics & profitability reports"] },
    ],
  },
  {
    id: "bookings",
    title: "Bookings",
    description: "Streamlined booking and property management for accommodation businesses.",
    idealFor: "Airbnbs · Guest houses · Apartments · Camps & holiday homes",
    plans: [
      { name: "Standard", monthlyPrice: 30, setupFee: 50, features: ["Online booking management", "Calendar & availability tracking", "Guest records", "Invoicing & payments tracking", "Basic reports"] },
      { name: "Pro", monthlyPrice: 50, setupFee: 77, popular: true, features: ["Everything in Standard", "Multi-property management", "Automated booking confirmations", "Advanced reporting"] },
    ],
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Professional financial management for growing businesses.",
    idealFor: "SMEs · Professional services firms · NGOs · Businesses with compliance needs",
    plans: [
      { name: "Starter", monthlyPrice: 45, setupFee: 50, features: ["Chart of accounts", "Income & expense tracking", "Debtors & creditors", "Basic financial reports"] },
      { name: "Growth", monthlyPrice: 60, setupFee: 77, popular: true, features: ["Everything in Starter", "Bank & cash reconciliation", "Tax-ready reports", "Advanced financial statements"] },
      { name: "Pro", monthlyPrice: 80, setupFee: 193, features: ["Everything in Growth", "Multi-entity accounting", "Advanced analytics"] },
    ],
  },
  {
    id: "hr-payroll",
    title: "HR & Payroll",
    description: "Complete HR and payroll management for structured teams.",
    idealFor: "SMEs · Hospitality & retail chains · NGOs & institutions",
    plans: [
      { name: "Standard", monthlyPrice: 50, setupFee: 193, features: ["Employee records", "Payroll processing", "Payslip generation", "Leave management", "Statutory deductions", "Up to 35 employees"] },
      { name: "Pro", monthlyPrice: 80, setupFee: 581, popular: true, features: ["Everything in Standard", "Advanced payroll rules", "Multi-branch payroll", "HR reports & analytics", "Up to 100 employees"] },
    ],
  },
  {
    id: "erp-full-suite",
    title: "ERP – Full Suite",
    description: "Enterprise resource planning for growing and large-scale businesses.",
    idealFor: "Growing enterprises · Multi-branch businesses · Corporations · High-volume operations",
    plans: [
      { name: "Starter", monthlyPrice: 95, setupFee: 348, features: ["Core POS & inventory", "Sales, procurement & CRM", "Accounting module", "HR basics"] },
      { name: "Growth", monthlyPrice: 125, setupFee: 581, popular: true, features: ["Everything in Starter", "Advanced accounting", "Payroll module", "Reporting & analytics"] },
      { name: "Enterprise", monthlyPrice: 160, setupFee: 1124, features: ["Full Solby ecosystem", "Multi-branch & multi-user", "Advanced permissions", "Priority support & onboarding"] },
    ],
  },
];

const faqs = [
  { q: "Can I switch between plans?", a: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle." },
  { q: "Is there a free trial?", a: "We offer a 14-day free trial for all plans. No credit card required to start your trial." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, M-Pesa, bank transfers, and PayPal." },
  { q: "Do you offer discounts for non-profits?", a: "Yes, we offer special pricing for non-profit organizations. Please contact our sales team for details." },
  { q: "Can I cancel my subscription?", a: "Yes, you can cancel at any time. You'll retain access until the end of your current billing period." },
  { q: "What is the onboarding/setup fee for?", a: "The one-time setup fee covers system configuration, data migration assistance, and onsite or remote onboarding by our team." },
];

const Pricing = () => {
  const [cycle, setCycle] = useState("monthly");
  const [activeCategory, setActiveCategory] = useState("retail-service-pos");
  const activeCycle = cycles.find((c) => c.key === cycle)!;

  const calcPrice = (monthly: number) => Math.round(monthly * activeCycle.mult * (1 - activeCycle.discount));

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[54vh] min-h-[400px] w-full items-center justify-center overflow-hidden bg-background">
        <WovenLightBackground />

        <div className="container-custom relative z-10 py-10 text-center">
          <SectionWrapper>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              Sell Your Dream.
            </span>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl lg:text-7xl">Flexible Pricing for Every Stage of Business</h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              From small kiosks to full-scale enterprises — choose the right Solby product for your business.
            </p>
          </SectionWrapper>
        </div>
      </section>

      {/* Billing toggle */}
      <section className="py-6">
        <div className="container-custom">
          <div className="mb-4 flex justify-center">
            <div className="inline-flex bg-muted rounded-xl p-1 gap-1 flex-wrap justify-center">
              {cycles.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCycle(c.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${cycle === c.key
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span>{c.label}</span>
                  {c.badge && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-accent text-accent-foreground leading-none">
                      {c.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="sticky top-[72px] z-20 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container-custom py-2.5">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${activeCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat.title}
              </button>
            ))}
            <button
              onClick={() => setActiveCategory("custom")}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all shrink-0 ${activeCategory === "custom" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
            >
              Custom Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Plans */}
      <section className="py-14 md:py-16">
        <div className="container-custom max-w-6xl">
          {activeCategory === "custom" ? (
            <SectionWrapper>
              <div className="mx-auto max-w-2xl rounded-2xl border-2 border-primary bg-card p-6 text-center md:p-8">
                <h3 className="heading-lg mb-4 text-foreground">Get a Quote</h3>
                <p className="mb-6 text-muted-foreground">Tailored enterprise solutions designed for unique business requirements.</p>
                <ul className="mb-7 grid gap-2 text-left sm:grid-cols-2">
                  {["Tailored feature set", "Industry-specific modifications", "Legacy system integration", "Custom API development", "Dedicated support team", "Personalized training", "Custom deployment options", "Compliance customization", "Bespoke reporting"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 btn-glow group">
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </SectionWrapper>
          ) : (
            <>
              <SectionWrapper className="mb-4 text-center">
                <h2 className="heading-lg text-foreground">{currentCategory.title}</h2>
                <p className="text-muted-foreground mt-2">{currentCategory.description}</p>
                <p className="text-xs text-muted-foreground mt-2">Ideal for: {currentCategory.idealFor}</p>
              </SectionWrapper>

              <div className={`mt-8 grid gap-5 ${currentCategory.plans.length >= 3 ? "md:grid-cols-3" : currentCategory.plans.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "max-w-md mx-auto"}`}>
                {currentCategory.plans.map((plan, i) => (
                  <SectionWrapper key={plan.name} delay={i * 0.1}>
                    <div className={`relative flex h-full flex-col rounded-2xl border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
                      }`}>
                      {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-full bg-primary text-primary-foreground">Most Popular</span>}
                      {plan.comingSoon && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-full bg-yellow-500 text-white">Coming Soon</span>}
                      <h3 className="font-heading font-bold text-lg text-foreground">{plan.name}</h3>
                      <div className="mt-3">
                        <span className="text-3xl font-heading font-black text-foreground">${calcPrice(plan.monthlyPrice)}</span>
                        <span className="text-sm text-muted-foreground">/{activeCycle.key === "monthly" ? "mo" : activeCycle.label.toLowerCase()}</span>
                      </div>
                      {plan.setupFee > 0 && <p className="text-xs text-muted-foreground mt-1">Setup fee: ${plan.setupFee}</p>}
                      <ul className="mt-5 flex-1 space-y-2.5">
                        {plan.features.slice(0, 5).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button
                        disabled={plan.disabled}
                        className={`mt-5 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${plan.disabled
                          ? "bg-muted text-muted-foreground cursor-not-allowed"
                          : plan.popular
                            ? "bg-primary text-primary-foreground hover:opacity-90"
                            : "border border-border text-foreground hover:bg-muted"
                          }`}
                      >
                        {plan.comingSoon ? "Coming Soon" : "Get Started"}
                      </button>
                    </div>
                  </SectionWrapper>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Add-ons */}
      <section className="bg-muted/50 py-14 md:py-16">
        <div className="container-custom max-w-6xl">
          <SectionWrapper className="mb-10 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Power-ups</span>
            <h2 className="heading-lg mt-3 text-foreground">Optional Add-ons</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Extend your plan with powerful integrations and bespoke customizations — only pay for what you need.
            </p>
          </SectionWrapper>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: "eTIMS Integration", tag: "Compliance", icon: Plug, color: "#2431FF", desc: "Stay KRA-compliant with seamless Kenya Revenue Authority eTIMS integration built right into your workflow.", price: "One-time setup: USD 100 OR Monthly add-on: USD 10/mo" },
              { name: "M-Pesa & STK Push", tag: "Payments", icon: Smartphone, color: "#10B981", desc: "Accept mobile money payments instantly. Customers get an STK push prompt — no manual reconciliation needed.", price: "One-time setup: USD 40" },
              { name: "Customization", tag: "Bespoke", icon: Wrench, color: "#7C3AED", desc: "Need something unique? We build custom features, workflows, and third-party integrations scoped to your business.", price: "One-time fee: From USD 100 (scope-dependent)" },
            ].map((addon, i) => (
              <SectionWrapper key={addon.name} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden h-full">
                  <div className="h-1 w-full" style={{ backgroundColor: addon.color }} />
                  <div className="p-5">
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: `${addon.color}15`, color: addon.color }}>{addon.tag}</span>
                    <div className="flex items-center gap-3 mt-4 mb-3">
                      <addon.icon className="w-5 h-5" style={{ color: addon.color }} />
                      <h3 className="font-heading font-bold text-foreground">{addon.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{addon.desc}</p>
                    <p className="text-xs font-semibold text-foreground">{addon.price}</p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">
            All add-ons are optional and can be added or removed at any time. <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for a custom quote.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-16">
        <div className="container-custom max-w-6xl">
          <SectionWrapper className="mb-10 text-center">
            <h2 className="heading-lg text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Have questions about our pricing? We've got answers.</p>
          </SectionWrapper>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <SectionWrapper key={i} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-muted-foreground">Not sure which plan fits your business?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 btn-glow group">
              Talk to an Expert
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
