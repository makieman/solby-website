import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";

const posts: Record<string, { title: string; category: string; author: string; date: string; readTime: string; image: string; content: string }> = {
  "5-ways-erp-can-transform-your-small-business": {
    title: "5 Ways ERP Software Can Transform Your Small Business",
    category: "Business Tips",
    author: "Solby Team",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: `Enterprise Resource Planning (ERP) software has long been associated with large corporations, but today's cloud-based solutions make it accessible and affordable for small businesses too.\n\n## 1. Centralized Data Management\n\nGone are the days of scattered spreadsheets and disconnected systems. An ERP system brings all your business data into one unified platform, giving you a single source of truth for every decision.\n\n## 2. Automated Financial Management\n\nFrom invoicing to bank reconciliation, ERP automates your financial workflows. This means fewer errors, faster reporting, and compliance with local tax regulations like KRA's eTIMS.\n\n## 3. Improved Inventory Control\n\nReal-time inventory tracking prevents stockouts and overstocking. Smart reorder alerts ensure you always have the right products at the right time.\n\n## 4. Better Customer Relationships\n\nWith integrated CRM capabilities, you can track customer interactions, manage credit sales, and build loyalty programs that keep customers coming back.\n\n## 5. Data-Driven Decision Making\n\nComprehensive dashboards and reports give you insights into sales trends, profit margins, and operational efficiency — helping you make informed decisions for growth.`,
  },
  "understanding-kra-etims-guide": {
    title: "Understanding KRA eTIMS: A Complete Guide for Kenyan Businesses",
    category: "Compliance",
    author: "Solby Team",
    date: "February 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    content: `The Kenya Revenue Authority (KRA) has mandated the use of the electronic Tax Invoice Management System (eTIMS) for all VAT-registered businesses.\n\n## What is eTIMS?\n\neTIMS is a digital system that enables businesses to generate and transmit tax invoices in real-time to KRA. It replaces the older ETR system and provides better transparency and compliance.\n\n## Who Needs to Comply?\n\nAll VAT-registered businesses in Kenya are required to use eTIMS. This includes retailers, service providers, manufacturers, and wholesalers.\n\n## How Solby Helps\n\nSolby's eTIMS integration makes compliance seamless. Our system automatically generates compliant invoices, syncs data with KRA in real-time, and handles VAT calculations accurately.\n\n## Getting Started\n\nTransitioning to eTIMS doesn't have to be complicated. With Solby, you can be fully compliant in as little as 24 hours with our guided setup process.`,
  },
  "how-to-choose-the-right-pos-system": {
    title: "How to Choose the Right POS System for Your Retail Store",
    category: "Retail",
    author: "Solby Team",
    date: "February 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
    content: `Choosing the right Point of Sale system is one of the most important technology decisions a retail business can make.\n\n## Key Features to Look For\n\nA good POS system should handle sales processing, inventory management, customer tracking, and reporting — all from a single interface.\n\n## Cloud vs. Traditional POS\n\nCloud-based POS systems like Solby offer significant advantages: automatic updates, remote access, real-time data sync, and lower upfront costs.\n\n## Integration Capabilities\n\nYour POS should integrate with payment processors (M-Pesa, cards), accounting software, and inventory management tools.\n\n## Scalability\n\nChoose a system that grows with your business. Multi-branch support, multiple user accounts, and advanced reporting become essential as you scale.`,
  },
  "automating-payroll-save-time": {
    title: "Automating Payroll: Save Time and Reduce Errors",
    category: "HR",
    author: "Solby Team",
    date: "January 22, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
    content: `Manual payroll processing is not only time-consuming but also prone to costly errors. Here's how automation can transform your HR operations.\n\n## The Cost of Manual Payroll\n\nBusinesses that process payroll manually spend an average of 5 hours per pay period on calculations, compliance checks, and payslip generation.\n\n## Benefits of Automation\n\nAutomated payroll systems calculate salaries, deductions, and statutory contributions instantly. They generate payslips, handle leave accruals, and ensure compliance with labor laws.\n\n## Statutory Compliance\n\nIn Kenya, payroll must account for PAYE, NHIF, NSSF, and Housing Levy. Automated systems keep up with changing rates and regulations.\n\n## Employee Self-Service\n\nModern payroll systems include employee portals where staff can view payslips, request leave, and update personal information — reducing HR workload significantly.`,
  },
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <WovenLightBackground className="absolute inset-0 opacity-75" overlayClassName="absolute top-0 right-0 h-full w-1/2 opacity-15 pointer-events-none" />
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-solby-black/75 via-solby-black/80 to-background" />
        </div>
        <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
          <SectionWrapper>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary">{post.category}</span>
            <h1 className="heading-xl text-white mt-4 mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
          </SectionWrapper>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <article className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("## ")) {
                return <h2 key={i} className="text-xl font-heading font-bold text-foreground mt-8 mb-4">{para.replace("## ", "")}</h2>;
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>;
            })}
          </article>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <Share2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Share this article</span>
              <div className="flex gap-2">
                {["Twitter", "LinkedIn", "Facebook"].map((platform) => (
                  <button key={platform} className="px-3 py-1.5 text-xs font-medium rounded-lg border border-border text-muted-foreground hover:bg-muted transition-colors">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
