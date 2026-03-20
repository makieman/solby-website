import { LayoutDashboard, GitBranch, BarChart3, ArrowLeftRight, Users, RefreshCw } from "lucide-react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import ProductPage from "./ProductPage";

export default function MultibranchPage() {
  return (
    <ProductPage
      badge="Enterprise"
      tag="Centralized Control"
      name="Solby Multibranch"
      desc="Run every location like a single, well-oiled machine — centralized dashboards, branch-level reporting, and real-time sync across all your outlets."
      icon={<HiOutlineOfficeBuilding className="h-7 w-7" />}
      color="#06b6d4"
      stats={[
        { value: "Unlimited", label: "Branch locations" },
        { value: "Real-time", label: "Data sync" },
        { value: "1 view", label: "All locations" },
      ]}
      featuresTitle="One platform. Every location."
      features={[
        {
          title: "Centralized dashboard",
          desc: "See every branch's performance — sales, stock, staff — in a single, unified view from HQ.",
          icon: <LayoutDashboard className="w-5 h-5" />,
          color: "#06b6d4",
        },
        {
          title: "Branch-level reporting",
          desc: "Drill down into any branch's P&L, stock position, and sales data without leaving your desk.",
          icon: <BarChart3 className="w-5 h-5" />,
          color: "#3b82f6",
        },
        {
          title: "Inter-branch transfers",
          desc: "Move stock between branches with full traceability, approval workflows, and automatic ledger entries.",
          icon: <ArrowLeftRight className="w-5 h-5" />,
          color: "#f59e0b",
        },
        {
          title: "Consolidated P&L",
          desc: "Roll up financials across all branches instantly — group-level accounting with branch-level detail.",
          icon: <GitBranch className="w-5 h-5" />,
          color: "#10b981",
        },
        {
          title: "User access per branch",
          desc: "Role-based permissions scoped to each branch — staff only see and do what they're authorized for.",
          icon: <Users className="w-5 h-5" />,
          color: "#8b5cf6",
        },
        {
          title: "Real-time sync",
          desc: "All branches sync instantly — no nightly imports, no stale data, no reconciliation headaches.",
          icon: <RefreshCw className="w-5 h-5" />,
          color: "#ef4444",
        },
      ]}
      idealFor={[
        "Retail chains with multiple store locations",
        "Restaurant and hospitality groups",
        "Franchise businesses needing central control",
        "Supermarkets and grocery chains",
        "Any business operating more than one location",
      ]}
      ctaText="Stop managing branches with spreadsheets and WhatsApp groups. Solby Multibranch gives you real control across every location."
      pricingHref="/pricing"
    />
  );
}
