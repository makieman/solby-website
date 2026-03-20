import { Zap, BarChart3, Users, GitBranch, Settings, Package } from "lucide-react";
import { HiDocumentText } from "react-icons/hi";
import ProductPage from "./ProductPage";

export default function ErpPage() {
  return (
    <ProductPage
      badge="Core Platform"
      tag="eTIMS Ready"
      name="Solby ERP"
      desc="Run your entire business from one place — procurement, inventory, sales, finance, and fulfilment, all in a single unified platform built for African enterprises."
      icon={<HiDocumentText className="h-7 w-7" />}
      color="#3b82f6"
      stats={[
        { value: "800+", label: "Businesses running" },
        { value: "99.9%", label: "Uptime SLA" },
        { value: "24h", label: "Onboarding time" },
      ]}
      featuresTitle="Everything integrated, nothing missing"
      features={[
        {
          title: "End-to-end workflow automation",
          desc: "Automate procurement, sales, and fulfilment in one connected flow — eliminating manual handoffs.",
          icon: <Zap className="w-5 h-5" />,
          color: "#3b82f6",
        },
        {
          title: "Real-time inventory tracking",
          desc: "Track stock levels, movements, and valuations across multiple warehouses and branches.",
          icon: <Package className="w-5 h-5" />,
          color: "#10b981",
        },
        {
          title: "Actionable business intelligence",
          desc: "Live dashboards and scheduled reports give you the numbers you need for smarter decisions.",
          icon: <BarChart3 className="w-5 h-5" />,
          color: "#8b5cf6",
        },
        {
          title: "Multi-branch management",
          desc: "Manage unlimited locations from a single platform. Consolidate reports and control permissions.",
          icon: <GitBranch className="w-5 h-5" />,
          color: "#f59e0b",
        },
        {
          title: "Role-based access control",
          desc: "Fine-grained permissions ensure every team member sees exactly what they need.",
          icon: <Users className="w-5 h-5" />,
          color: "#ef4444",
        },
        {
          title: "Fully configurable",
          desc: "Customize workflows, approval chains, and document templates to match exactly how you operate.",
          icon: <Settings className="w-5 h-5" />,
          color: "#06b6d4",
        },
      ]}
      idealFor={[
        "Manufacturing & distribution companies",
        "Retail chains & multi-branch stores",
        "Wholesale & trading businesses",
        "Import/export companies",
        "Any growing SME ready to scale operations",
      ]}
      ctaText="Join 800+ businesses already running leaner and growing faster with Solby ERP."
      pricingHref="/pricing"
    />
  );
}
