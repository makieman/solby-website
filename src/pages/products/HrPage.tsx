import { Users, DollarSign, FileText, Calendar, BarChart3, Shield } from "lucide-react";
import { BsClipboardDataFill } from "react-icons/bs";
import ProductPage from "./ProductPage";

export default function HrPage() {
  return (
    <ProductPage
      badge="HR & Payroll"
      tag="Statutory Compliant"
      name="Solby HR"
      desc="Manage your people from hire to retire — automate payroll, track leave, and handle statutory deductions all from one clean, easy-to-use platform."
      icon={<BsClipboardDataFill className="h-7 w-7" />}
      color="#8b5cf6"
      stats={[
        { value: "1-click", label: "Payroll processing" },
        { value: "100%", label: "Statutory compliant" },
        { value: "5 min", label: "Payslip generation" },
      ]}
      featuresTitle="Your people deserve better HR tools"
      features={[
        {
          title: "Employee records",
          desc: "Centralized, searchable employee profiles with contracts, documents, and full employment history.",
          icon: <Users className="w-5 h-5" />,
          color: "#8b5cf6",
        },
        {
          title: "Payroll processing",
          desc: "Run accurate, compliant payroll in minutes — including PAYE, NSSF, NHIF/SHIF, and housing levy.",
          icon: <DollarSign className="w-5 h-5" />,
          color: "#10b981",
        },
        {
          title: "Payslip generation",
          desc: "Auto-generate branded, itemized payslips and deliver them instantly via email or the employee portal.",
          icon: <FileText className="w-5 h-5" />,
          color: "#3b82f6",
        },
        {
          title: "Leave management",
          desc: "Configure leave policies, track balances, and run approval workflows — with automatic accruals.",
          icon: <Calendar className="w-5 h-5" />,
          color: "#f59e0b",
        },
        {
          title: "Statutory deductions",
          desc: "PAYE, NSSF, NHIF/SHIF, and housing levy calculated automatically and reconciled each payroll run.",
          icon: <Shield className="w-5 h-5" />,
          color: "#ef4444",
        },
        {
          title: "HR analytics",
          desc: "Headcount trends, payroll cost analysis, leave utilization, and turnover reports at a glance.",
          icon: <BarChart3 className="w-5 h-5" />,
          color: "#06b6d4",
        },
      ]}
      idealFor={[
        "SMEs with growing teams needing automated payroll",
        "Hospitality chains with high-volume shift workers",
        "NGOs and international organizations",
        "Schools, colleges, and educational institutions",
        "Any business tired of manual payroll spreadsheets",
      ]}
      ctaText="Stop running payroll manually. Solby HR keeps your team paid on time, your deductions accurate, and your compliance bulletproof."
      pricingHref="/pricing"
    />
  );
}
