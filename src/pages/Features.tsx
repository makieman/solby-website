import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Calculator, CreditCard, ReceiptText, ShoppingCart, Package, Truck,
  BarChart3, Brain, FileBarChart, Users, Briefcase, UserCog, Check,
  ArrowRight, Wallet, TrendingUp, Building2, QrCode, Receipt,
  LineChart, Sparkles, Zap, Shield, Clock, Globe, HeadphonesIcon
} from "lucide-react";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";
import SectionWrapper from "@/components/SectionWrapper";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";

// Simple animated counter component with ease-in
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        // Apply ease-in: t^2 curve
        const progress = current / value;
        const easedProgress = progress * progress;
        setCount(Math.floor(value * easedProgress));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// Feature categories with icons and colors
const featureCategories = [
  { id: "finance", label: "Finance", icon: Wallet, color: "#10b981" },
  { id: "operations", label: "Operations", icon: Package, color: "#3b82f6" },
  { id: "intelligence", label: "Analytics", icon: Brain, color: "#8b5cf6" },
  { id: "people", label: "People", icon: Users, color: "#f59e0b" },
  { id: "hospitality", label: "Hospitality", icon: Receipt, color: "#06b6d4" },
  { id: "integrations", label: "Integrations", icon: Zap, color: "#ec4899" },
];

// Features data organized by category
const featuresData: Record<string, Array<{
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  bullets?: string[];
}>> = {
  finance: [
    {
      title: "Accounting & Bookkeeping",
      icon: Calculator,
      description: "Automated bookkeeping, real-time P&L, and compliance tools that keep your finances crystal clear. Stay on top of your business with accurate financial records.",
      bullets: ["General ledger & bookkeeping", "Bank reconciliation", "Balance Sheet & P&L", "Tax-ready reports", "Multi-currency support"]
    },
    { title: "Payment Integration", icon: CreditCard, description: "Accept M-Pesa, Visa, and Mastercard with automatic reconciliation — your customers pay the way they want.", bullets: ["M-Pesa & card support", "Secure processing", "Auto-reconciliation", "Faster settlements"] },
    { title: "eTIMS & Tax Compliance", icon: ReceiptText, description: "Full KRA compliance with eTIMS e-invoicing, real-time data sync, and accurate VAT calculations.", bullets: ["eTIMS e-invoicing", "KRA data sync", "VAT calculations", "Compliance alerts"] },
    { title: "Expense Management", icon: Wallet, description: "Track and categorize business expenses with smart receipt scanning and approval workflows.", bullets: ["Receipt scanning", "Expense categorization", "Approval workflows", "Budget tracking"] },
    { title: "Financial Reporting", icon: LineChart, description: "Generate comprehensive financial reports with drill-down capabilities and customizable dashboards.", bullets: ["Custom reports", "Real-time analytics", "Export to Excel/PDF", "Scheduled reports"] },
  ],
  operations: [
    {
      title: "Sales Management",
      icon: ShoppingCart,
      description: "From the first quote to the final invoice — manage your entire sales cycle in one unified platform designed for growing businesses.",
      bullets: ["Quote generation", "Order processing", "Pipeline tracking", "Commission management", "Sales forecasting"]
    },
    { title: "Inventory Control", icon: Package, description: "Real-time tracking with smart reorder automation, multi-location support, and expiry management.", bullets: ["Multi-location tracking", "Auto reorder alerts", "Barcode scanning", "Expiry management"] },
    { title: "Procurement", icon: Truck, description: "End-to-end supplier management with automated POs, approval workflows, and contract tracking.", bullets: ["Supplier scoring", "Auto PO generation", "3-way matching", "Contract renewals"] },
    { title: "Purchase Orders", icon: Receipt, description: "Create, send, and track purchase orders with automated approval chains and delivery tracking.", bullets: ["PO creation", "Approval workflows", "Delivery tracking", "Vendor communication"] },
    { title: "Warehouse Management", icon: Building2, description: "Optimize warehouse operations with bin locations, picking lists, and stock movement tracking.", bullets: ["Bin locations", "Picking optimization", "Stock transfers", "Cycle counting"] },
  ],
  intelligence: [
    {
      title: "AI-Powered Analytics",
      icon: Brain,
      description: "Predictive insights and smart automation that do the heavy lifting so your team can focus on what matters. Turn data into decisions.",
      bullets: ["Demand forecasting", "Anomaly detection", "Smart workflows", "Customer insights", "Predictive alerts"]
    },
    { title: "Dashboard & BI", icon: BarChart3, description: "Interactive analytics and KPI tracking that turn raw data into clear, actionable stories.", bullets: ["Visual KPI reports", "Custom dashboards", "Real-time data", "Multi-format export"] },
    { title: "Advanced Reporting", icon: FileBarChart, description: "Scheduled, customizable reports with drill-down analysis — the right data for the right people.", bullets: ["Custom templates", "Scheduled delivery", "Drill-down analysis", "PDF / Excel / CSV"] },
    { title: "Performance Metrics", icon: TrendingUp, description: "Track business performance with customizable scorecards and benchmarking tools.", bullets: ["Scorecards", "Benchmarking", "Trend analysis", "Goal tracking"] },
    { title: "Data Visualization", icon: Sparkles, description: "Beautiful charts and graphs that make complex data easy to understand and share.", bullets: ["Interactive charts", "Custom views", "Export options", "Presentation mode"] },
  ],
  people: [
    {
      title: "HR & Payroll",
      icon: Briefcase,
      description: "From onboarding to payroll — time tracking, leave management, and performance reviews, all automated in one place.",
      bullets: ["One-click payroll", "Leave workflows", "Time tracking", "Performance reviews", "Employee portal"]
    },
    { title: "Customer Management", icon: Users, description: "Build real relationships — full profiles, interaction history, lead pipeline, and satisfaction tracking.", bullets: ["360° profiles", "Interaction history", "Lead pipeline", "Segmentation"] },
    { title: "User Management", icon: UserCog, description: "Role-based access, MFA, and full audit trails — your data stays secure and accountable.", bullets: ["RBAC system", "MFA support", "Audit trails", "Password policies"] },
    { title: "Employee Self-Service", icon: Globe, description: "Empower employees with self-service portals for leave requests, payslips, and profile updates.", bullets: ["Leave requests", "Payslip access", "Profile management", "Document uploads"] },
    { title: "Recruitment", icon: Users, description: "Streamline hiring with applicant tracking, interview scheduling, and onboarding workflows.", bullets: ["Applicant tracking", "Interview scheduling", "Onboarding", "Job postings"] },
  ],
  hospitality: [
    {
      title: "Restaurant POS",
      icon: Receipt,
      description: "Purpose-built for restaurants and cafes — table management, KOT, and split billing handled seamlessly.",
      bullets: ["Table management", "Kitchen order tickets", "Split billing", "Menu engineering", "Tip handling"]
    },
    { title: "Table Reservations", icon: Clock, description: "Manage reservations with online booking, waitlists, and table optimization.", bullets: ["Online booking", "Waitlist management", "Table optimization", "Guest preferences"] },
    { title: "Menu Management", icon: QrCode, description: "Dynamic menus with pricing control, modifiers, and dietary information tracking.", bullets: ["Dynamic pricing", "Modifiers & addons", "Dietary tags", "QR code menus"] },
    { title: "Kitchen Display", icon: Zap, description: "Digital kitchen display system for order routing, prep times, and course management.", bullets: ["Order routing", "Prep time tracking", "Course firing", "Item highlighting"] },
    { title: "Guest Management", icon: Users, description: "Build guest profiles with preferences, visit history, and loyalty tracking.", bullets: ["Guest profiles", "Visit history", "Loyalty tracking", "Special occasions"] },
  ],
  integrations: [
    {
      title: "eTIMS Integration",
      icon: Shield,
      description: "Stay KRA-compliant with seamless Kenya Revenue Authority eTIMS integration built right into your workflow.",
      bullets: ["Automatic invoicing", "Real-time sync", "VAT compliance", "Audit ready"]
    },
    { title: "M-Pesa & STK Push", icon: Zap, description: "Accept mobile money payments instantly. Customers get an STK push prompt — no manual reconciliation needed.", bullets: ["STK push", "Instant confirmation", "Auto reconciliation", "Transaction history"] },
    { title: "SMS Notifications", icon: HeadphonesIcon, description: "Keep customers informed with automated SMS for orders, payments, and appointments.", bullets: ["Order updates", "Payment confirmations", "Appointment reminders", "Marketing campaigns"] },
    { title: "Email Integration", icon: Globe, description: "Send professional invoices, quotes, and reports directly from the system.", bullets: ["Email templates", "Bulk sending", "Delivery tracking", "Auto follow-ups"] },
    { title: "API Access", icon: Sparkles, description: "Build custom integrations with our RESTful API for developers who need more flexibility.", bullets: ["RESTful API", "Webhooks", "Documentation", "SDK support"] },
  ],
};

const Features = () => {
  const [active, setActive] = useState("finance");
  const activeCategory = featureCategories.find(c => c.id === active)!;
  const activeFeatures = featuresData[active] || [];

  const [featuredFeature, ...remainingFeatures] = activeFeatures;

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Features — Everything Your Business Needs"
        description="Explore Solby's complete feature set: POS, inventory, accounting, HR & payroll, CRM, hospitality management, and real-time analytics for African businesses."
        keywords="ERP features Kenya, POS features Africa, inventory management, HR software Kenya"
        url="/features"
      />
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <WovenLightBackground className="absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
          {/* Ambient glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[80px] pointer-events-none" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <SectionWrapper>
            {/* Pill badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Everything your business needs
            </span>

            <h1 className="heading-xl text-foreground mb-4">
              Powerful Features,<br />
              <span className="gradient-text">Built for Africa</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              From POS to payroll, every tool works together seamlessly so you can focus on growing your business.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
              {[
                { value: 100, label: "Businesses powered", suffix: "+" },
                { value: 15, label: "Core modules", suffix: "+" },
                { value: 99, label: "Uptime SLA", suffix: ".9%" },
                { value: 24, label: "Avg. onboarding", suffix: "h" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-heading font-black text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <div className="sticky top-[72px] z-20 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container-custom py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {featureCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium",
                  "whitespace-nowrap shrink-0 transition-all duration-200 border",
                  active === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                    : "bg-muted/50 text-muted-foreground border-transparent hover:text-foreground hover:bg-muted"
                )}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Featured card — first item */}
              {featuredFeature && (
                <SectionWrapper>
                  <div className="relative rounded-3xl border border-border bg-card overflow-hidden p-8 md:p-10 hover:border-primary/30 transition-all duration-300 group">
                    {/* Background accent */}
                    <div
                      className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 pointer-events-none"
                      style={{ backgroundColor: activeCategory.color }}
                    />

                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                      style={{ backgroundColor: activeCategory.color }}
                    />

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-1">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${activeCategory.color}20` }}
                        >
                          <featuredFeature.icon className="w-6 h-6" style={{ color: activeCategory.color }} />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                          {featuredFeature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-lg">
                          {featuredFeature.description}
                        </p>
                        {/* Sub-bullets */}
                        {featuredFeature.bullets && (
                          <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                            {featuredFeature.bullets.map((b) => (
                              <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Check className="w-4 h-4 shrink-0" style={{ color: activeCategory.color }} />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </SectionWrapper>
              )}

              {/* Remaining cards — 3-column grid */}
              {remainingFeatures.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  {remainingFeatures.map((feature, i) => (
                    <SectionWrapper key={feature.title} delay={i * 0.07}>
                      <div className="relative bg-card border border-border rounded-2xl p-5 h-full hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group overflow-hidden">
                        {/* Hover glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at top left, ${activeCategory.color}08, transparent 60%)`
                          }}
                        />

                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0 relative z-10"
                          style={{ backgroundColor: `${activeCategory.color}15` }}
                        >
                          <feature.icon className="w-5 h-5" style={{ color: activeCategory.color }} />
                        </div>
                        <h3 className="font-heading font-semibold text-foreground mb-2 relative z-10">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                          {feature.description}
                        </p>
                      </div>
                    </SectionWrapper>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="container-custom text-center">
          <SectionWrapper>
            <h2 className="heading-lg text-foreground mb-4">
              Ready to see it in action?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a free demo and we&apos;ll walk you through the features most relevant to your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 btn-glow group"
              >
                Book a Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </main>
  );
};

export default Features;
