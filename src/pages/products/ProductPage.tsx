import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { WovenLightBackground } from "@/components/ui/woven-light-hero";

interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export interface ProductPageProps {
  badge: string;
  tag?: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  stats: { value: string; label: string }[];
  featuresTitle: string;
  features: Feature[];
  idealFor: string[];
  ctaText: string;
  pricingHref: string;
}

const ProductPage = (props: ProductPageProps) => {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* backgrounds */}
        <div className="absolute inset-0 z-0">
          <WovenLightBackground className="absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ backgroundColor: props.color }}
          />
        </div>

        <div className="container-custom relative z-10">
          <SectionWrapper>
            {/* badges */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border"
                style={{
                  backgroundColor: `${props.color}15`,
                  color: props.color,
                  borderColor: `${props.color}30`,
                }}
              >
                {props.badge}
              </span>
              {props.tag && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent-foreground border border-accent/30">
                  {props.tag}
                </span>
              )}
            </div>

            {/* icon + name */}
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border"
                style={{
                  backgroundColor: `${props.color}15`,
                  borderColor: `${props.color}30`,
                }}
              >
                <span style={{ color: props.color }}>{props.icon}</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                  {props.name}
                </h1>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {props.desc}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
                style={{ backgroundColor: props.color }}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-muted transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────── */}
      <section className="py-8 border-y border-border bg-muted/20">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            {props.stats.map((stat, i) => (
              <SectionWrapper key={stat.label} delay={i * 0.08}>
                <div className="text-3xl font-black text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features grid ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-custom">
          <SectionWrapper className="mb-10">
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: props.color }}
            >
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
              {props.featuresTitle}
            </h2>
          </SectionWrapper>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {props.features.map((feature, i) => (
              <SectionWrapper key={feature.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-5 h-full hover:border-primary/30 transition-colors group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <span style={{ color: feature.color }}>{feature.icon}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ideal For + CTA card ─────────────────────────────────────── */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
            {/* ideal for */}
            <SectionWrapper>
              <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                Ideal For
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mt-2 mb-6">
                Who is {props.name} for?
              </h2>
              <ul className="space-y-3">
                {props.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${props.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: props.color }} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </SectionWrapper>

            {/* CTA card */}
            <SectionWrapper delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Ready to transform your operations?
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {props.ctaText}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: props.color }}
                >
                  Talk to Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* ── Pricing link ─────────────────────────────────────────────── */}
      <section className="py-12 text-center">
        <p className="text-muted-foreground mb-2 text-sm">Want to see pricing?</p>
        <Link
          to={props.pricingHref}
          className="inline-flex items-center gap-1 text-sm font-semibold hover:underline"
          style={{ color: props.color }}
        >
          View Pricing Plans
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </>
  );
};

export default ProductPage;
