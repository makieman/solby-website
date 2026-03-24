"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiDocumentText, HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiMiniDocumentArrowUp } from "react-icons/hi2";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const products = [
  {
    text: "Solby ERP",
    desc: "Run your entire business in one place",
    icon: <HiDocumentText className="h-6 w-6" />,
    href: "/products/erp",
    color: "#3b82f6",
    bg: "#3b82f615",
  },
  {
    text: "Solby Accounting",
    desc: "Invoices, reports & tax compliance",
    icon: <AiFillDollarCircle className="h-6 w-6" />,
    href: "/products/accounting",
    color: "#10b981",
    bg: "#10b98115",
  },
  {
    text: "Solby HR",
    desc: "Payroll, staff & leave management",
    icon: <BsClipboardDataFill className="h-6 w-6" />,
    href: "/products/hr",
    color: "#8b5cf6",
    bg: "#8b5cf615",
  },
  {
    text: "Solby Supply Chain",
    desc: "Stock, suppliers & procurement",
    icon: <HiMiniDocumentArrowUp className="h-6 w-6" />,
    href: "/products/supply-chain",
    color: "#f59e0b",
    bg: "#f59e0b15",
  },
  {
    text: "Solby Bar & Restaurant",
    desc: "Orders, tables & kitchen workflows",
    icon: <BiSolidReport className="h-6 w-6" />,
    href: "/products/bar-restaurant",
    color: "#ef4444",
    bg: "#ef444415",
  },

  {
    text: "Solby POS",
    desc: "Fast, reliable point of sale system",
    icon: <HiDocumentText className="h-6 w-6" />,
    href: "/features",
    color: "#ec4899",
    bg: "#ec489915",
  },
  {
    text: "Solby CRM",
    desc: "Track leads, customers & sales pipeline",
    icon: <BsClipboardDataFill className="h-6 w-6" />,
    href: "/features",
    color: "#14b8a6",
    bg: "#14b8a615",
  },
  {
    text: "Solby Analytics",
    desc: "Real-time insights & business reports",
    icon: <AiFillDollarCircle className="h-6 w-6" />,
    href: "/features",
    color: "#f97316",
    bg: "#f9731615",
  },
  {
    text: "Solby Bookings",
    desc: "Reservations, calendar & guest management",
    icon: <HiOutlineOfficeBuilding className="h-6 w-6" />,
    href: "/features",
    color: "#6366f1",
    bg: "#6366f115",
  },
  {
    text: "Solby Payroll",
    desc: "Automated statutory payroll for Kenya",
    icon: <HiMiniDocumentArrowUp className="h-6 w-6" />,
    href: "/products/hr",
    color: "#84cc16",
    bg: "#84cc1615",
  },
];

export default function ProductGridSection() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full py-16 bg-background overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.4] dark:opacity-[0.15]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.06)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section heading */}
        <SectionWrapper className="text-center mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full 
            text-xs font-semibold tracking-widest uppercase bg-primary/10 
            text-primary border border-primary/20 mb-4">
            Ecosystem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Integrated <span className="gradient-text">Product Suite</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Every tool your business needs, seamlessly connected.
          </p>
        </SectionWrapper>

        {/* Product card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {products.map((product, i) => (
            <SectionWrapper key={product.text} delay={i * 0.05}>
              <motion.button
                onClick={() => navigate(product.href)}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full text-left group relative bg-card border 
                  border-border rounded-2xl p-4 hover:border-primary/30 
                  hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Hover color wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${product.color}10, transparent 70%)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ backgroundColor: product.color }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: product.bg }}
                >
                  <span style={{ color: product.color }}>{product.icon}</span>
                </div>

                {/* Text */}
                <p
                  className="text-sm font-semibold text-foreground mb-1 
                    group-hover:text-primary transition-colors leading-tight"
                >
                  {product.text}
                </p>
                <p className="text-xs text-muted-foreground leading-snug">
                  {product.desc}
                </p>

                {/* Arrow — appears on hover */}
                <ArrowRight
                  className="absolute bottom-3 right-3 w-3.5 h-3.5 
                    opacity-0 group-hover:opacity-100 transition-all 
                    duration-200 translate-x-1 group-hover:translate-x-0"
                  style={{ color: product.color }}
                />
              </motion.button>
            </SectionWrapper>
          ))}
        </div>

        {/* Bottom CTA */}
        <SectionWrapper className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            All products work together seamlessly.{" "}
            <button
              onClick={() => navigate("/features")}
              className="text-primary font-semibold hover:underline 
                inline-flex items-center gap-1"
            >
              Explore all features
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
}
