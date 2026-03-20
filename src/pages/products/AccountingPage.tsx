import { Calculator, BarChart3, FileText, RefreshCw, Globe, TrendingUp } from "lucide-react";
import { AiFillDollarCircle } from "react-icons/ai";
import ProductPage from "./ProductPage";

export default function AccountingPage() {
  return (
    <ProductPage
      badge="Finance Module"
      tag="KRA eTIMS Ready"
      name="Solby Accounting"
      desc="Keep your books in perfect order with automated bookkeeping, real-time P&L, KRA-compliant invoicing, and one-click financial reports — all in one place."
      icon={<AiFillDollarCircle className="h-7 w-7" />}
      color="#10b981"
      stats={[
        { value: "100%", label: "KRA compliant" },
        { value: "<1min", label: "Invoice generation" },
        { value: "50+", label: "Report templates" },
      ]}
      featuresTitle="Professional accounting without the accountant"
      features={[
        {
          title: "Chart of accounts",
          desc: "Pre-built or fully customizable account structures suited to your business type and industry.",
          icon: <Calculator className="w-5 h-5" />,
          color: "#10b981",
        },
        {
          title: "Bank reconciliation",
          desc: "Automatically match bank transactions to your accounting entries and clear discrepancies in minutes.",
          icon: <RefreshCw className="w-5 h-5" />,
          color: "#3b82f6",
        },
        {
          title: "Tax-ready reports",
          desc: "Generate VAT returns, P9 forms, and eTIMS-compliant invoices with a single click, ready for KRA submission.",
          icon: <FileText className="w-5 h-5" />,
          color: "#8b5cf6",
        },
        {
          title: "Debtors & creditors",
          desc: "Manage who owes you and who you owe — with ageing reports, reminders, and payment tracking.",
          icon: <TrendingUp className="w-5 h-5" />,
          color: "#f59e0b",
        },
        {
          title: "Multi-entity accounting",
          desc: "Manage multiple companies or branches under one subscription with consolidated financial reporting.",
          icon: <Globe className="w-5 h-5" />,
          color: "#ef4444",
        },
        {
          title: "Advanced analytics",
          desc: "Drill into revenue, cost centres, and margins with interactive dashboards that update in real time.",
          icon: <BarChart3 className="w-5 h-5" />,
          color: "#06b6d4",
        },
      ]}
      idealFor={[
        "SMEs wanting to stay KRA-compliant effortlessly",
        "Professional services firms (law, consulting, agencies)",
        "NGOs and donor-funded organizations",
        "Compliance-heavy businesses like logistics and import/export",
        "Accountants managing multiple client books",
      ]}
      ctaText="Stop wrestling with spreadsheets. Solby Accounting keeps your finances clean, compliant, and always audit-ready."
      pricingHref="/pricing"
    />
  );
}
