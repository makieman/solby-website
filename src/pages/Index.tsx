import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ClientLogosSection from "@/components/home/ClientLogosSection";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import PricingPreview from "@/components/home/PricingPreview";
import { CtaCard } from "@/components/ui/cta-card";

const Index = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <ClientLogosSection />
    <TestimonialSlider />
    <PricingPreview />
    <section className="relative py-2 md:py-4 pb-12 md:pb-16 bg-muted/50 overflow-hidden">
      <div className="relative z-10">
        <CtaCard />
      </div>

      {/* Breathing SVG Bottom transition to footer */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-none z-20 origin-bottom animate-breathing pointer-events-none">
        <svg className="block w-full h-8 md:h-12 lg:h-16 text-[#0a1120] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V160Z"></path>
        </svg>
      </div>
    </section>
  </>
);

export default Index;
