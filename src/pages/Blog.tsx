import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const posts = [
  {
    slug: "5-ways-erp-can-transform-your-small-business",
    title: "5 Ways ERP Software Can Transform Your Small Business",
    category: "Business Tips",
    excerpt: "Discover how implementing an ERP system can streamline your operations, reduce costs, and position your business for sustainable growth...",
    author: "Solby Team",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    slug: "understanding-kra-etims-guide",
    title: "Understanding KRA eTIMS: A Complete Guide for Kenyan Businesses",
    category: "Compliance",
    excerpt: "The Kenya Revenue Authority's eTIMS system is now mandatory for many businesses. Here's everything you need to know to stay compliant...",
    author: "Solby Team",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    slug: "how-to-choose-the-right-pos-system",
    title: "How to Choose the Right POS System for Your Retail Store",
    category: "Retail",
    excerpt: "With so many POS options on the market, choosing the right one can feel overwhelming. We break down exactly what to look for...",
    author: "Solby Team",
    date: "February 10, 2025",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    slug: "automating-payroll-save-time",
    title: "Automating Payroll: Save Time and Reduce Errors",
    category: "HR",
    excerpt: "Manual payroll processing is error-prone and time-consuming. Learn how automation can transform your HR operations...",
    author: "Solby Team",
    date: "January 22, 2025",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
];

const Blog = () => (
  <>
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-solby-black to-solby-blue-dark" />
      <div className="absolute inset-0 bg-solby-blue/20" />
      <div className="container-custom relative z-10 text-center">
        <SectionWrapper>
          <h1 className="heading-xl text-white mb-4">Insights & Updates</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Tips, guides, and company news to help you grow your business.
          </p>
        </SectionWrapper>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <SectionWrapper key={post.slug} delay={i * 0.1}>
              <Link to={`/blog/${post.slug}`} className="group block bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full">
                <div className="aspect-video overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">{post.category}</span>
                  <h2 className="mt-3 text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
