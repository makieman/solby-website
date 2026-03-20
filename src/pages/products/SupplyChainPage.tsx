import { Truck, Package, Bell, FileCheck, DollarSign, RefreshCw } from "lucide-react";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import ProductPage from "./ProductPage";

export default function SupplyChainPage() {
  return (
    <ProductPage
      badge="Supply Chain"
      tag="Multi-warehouse"
      name="Solby Supply Chain"
      desc="Take full control of your stock, suppliers, and procurement cycles — from purchase orders to goods received, with real-time visibility at every step."
      icon={<HiMiniDocumentArrowUp className="h-7 w-7" />}
      color="#f59e0b"
      stats={[
        { value: "Real-time", label: "Stock visibility" },
        { value: "Auto", label: "Reorder triggers" },
        { value: "3-way", label: "PO matching" },
      ]}
      featuresTitle="Never run out, never overstock"
      features={[
        {
          title: "Supplier management",
          desc: "Build a scorecarded supplier database with pricing history, performance ratings, and contact management.",
          icon: <Truck className="w-5 h-5" />,
          color: "#f59e0b",
        },
        {
          title: "Purchase orders",
          desc: "Generate, approve, and send POs directly to suppliers — with multi-level approval workflows.",
          icon: <FileCheck className="w-5 h-5" />,
          color: "#3b82f6",
        },
        {
          title: "Stock reorder alerts",
          desc: "Set minimum stock thresholds and get automatic reorder triggers before you ever run out of stock.",
          icon: <Bell className="w-5 h-5" />,
          color: "#ef4444",
        },
        {
          title: "Goods received notes",
          desc: "Record deliveries against POs, identify shortages, and automatically update stock on receipt.",
          icon: <Package className="w-5 h-5" />,
          color: "#10b981",
        },
        {
          title: "Landed cost tracking",
          desc: "Allocate freight, duty, and clearance costs to stock items and get a true cost of inventory.",
          icon: <DollarSign className="w-5 h-5" />,
          color: "#8b5cf6",
        },
        {
          title: "Reorder automation",
          desc: "Automatically raise purchase orders when stock dips below reorder points — hands-free replenishment.",
          icon: <RefreshCw className="w-5 h-5" />,
          color: "#06b6d4",
        },
      ]}
      idealFor={[
        "Distributors managing large product catalogues",
        "Import businesses tracking multiple shipments",
        "Wholesalers needing real-time stock control",
        "Manufacturers managing raw materials and finished goods",
        "Any business with a complex or high-volume supply chain",
      ]}
      ctaText="Eliminate stockouts and excess inventory. Solby Supply Chain gives you the control to run a lean, efficient operation."
      pricingHref="/pricing"
    />
  );
}
