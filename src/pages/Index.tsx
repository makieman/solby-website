import HeroSection from "@/components/home/HeroSection";
import ProductGridSection from "@/components/home/ProductGridSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import PricingPreview from "@/components/home/PricingPreview";
import { CTASection } from "@/components/ui/cta-with-rectangle";
import SEO from "@/components/SEO";

const Index = () => (
  <>
    <SEO
      title="Business Software Built for Africa"
      description="Solby helps African businesses run operations, finance, analytics, and people in one platform. ERP, POS, Accounting, HR & Payroll."
      url="/"
    />
    <HeroSection />
    <ProductGridSection />
    <HowItWorksSection />
    <ClientLogosSection />
    <TestimonialSlider />
    <PricingPreview />
    <section className="relative bg-muted/50 overflow-hidden">
      <div className="container-custom relative z-10">
        <CTASection
          badge={{ text: "Ready to Scale?" }}
          title="Transform Your Business Today"
          description="Join 800+ businesses running leaner and growing faster with Solby's all-in-one ecosystem."
          action={{
            text: "Get Started Now",
            href: "/contact",
            variant: "glow"
          }}
        />
      </div>
    </section>
  </>
);

export default Index;
