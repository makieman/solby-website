import { UtensilsCrossed, ClipboardList, ChefHat, Clock, BarChart3, DollarSign } from "lucide-react";
import { BiSolidReport } from "react-icons/bi";
import ProductPage from "./ProductPage";

export default function BarRestaurantPage() {
  return (
    <ProductPage
      badge="Hospitality"
      tag="Multi-outlet"
      name="Solby Bar & Restaurant"
      desc="Power your hospitality business with fast order management, kitchen coordination, table tracking, and real-time sales visibility — built for speed and accuracy."
      icon={<BiSolidReport className="h-7 w-7" />}
      color="#ef4444"
      stats={[
        { value: "Fast", label: "Order-to-kitchen" },
        { value: "Live", label: "Table tracking" },
        { value: "Multi", label: "Outlet support" },
      ]}
      featuresTitle="From the menu to the kitchen to the till"
      features={[
        {
          title: "Table & order management",
          desc: "Visual floor plan, real-time table status, split bills, and order modifications — all from any device.",
          icon: <UtensilsCrossed className="w-5 h-5" />,
          color: "#ef4444",
        },
        {
          title: "Kitchen order tickets (KOT)",
          desc: "Orders go straight from the server's device to the kitchen display — no paper, no errors, no delays.",
          icon: <ChefHat className="w-5 h-5" />,
          color: "#f59e0b",
        },
        {
          title: "Menu engineering",
          desc: "Build and price your menu with modifiers, combos, and category controls. Update it live without downtime.",
          icon: <ClipboardList className="w-5 h-5" />,
          color: "#10b981",
        },
        {
          title: "Shift tracking",
          desc: "Clock-in/out, track covers per shift, reconcile cash drawers, and review server performance reports.",
          icon: <Clock className="w-5 h-5" />,
          color: "#8b5cf6",
        },
        {
          title: "Multi-outlet management",
          desc: "Manage all your outlets from one dashboard — consolidated reports, shared menus, central stock control.",
          icon: <BarChart3 className="w-5 h-5" />,
          color: "#3b82f6",
        },
        {
          title: "Expense tracking",
          desc: "Log daily expenses, stock wastage, and supplier payments against your outlet's budget — in real time.",
          icon: <DollarSign className="w-5 h-5" />,
          color: "#06b6d4",
        },
      ]}
      idealFor={[
        "Restaurants and cafes of all sizes",
        "Bars and nightlife venues",
        "Hotels with Food & Beverage operations",
        "Fast food and QSR outlets",
        "Multi-outlet hospitality groups",
      ]}
      ctaText="Reduce order errors, speed up service, and get real-time visibility into your most important metrics — all from one platform."
      pricingHref="/pricing"
    />
  );
}
