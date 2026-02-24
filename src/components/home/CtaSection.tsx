import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const CtaSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-solby-blue to-solby-blue-dark" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-solby-green/10 rounded-full blur-3xl" />
    
    {/* Geometric rings */}
    <div className="absolute left-10 top-10 w-32 h-32 border-2 border-white/10 rounded-full" />
    <div className="absolute right-10 bottom-10 w-40 h-40 border-2 border-white/10 rounded-full" />
    <div className="absolute right-20 top-20 w-20 h-20 border border-white/5 rounded-full" />

    <div className="container-custom relative z-10 text-center">
      <SectionWrapper>
        <h2 className="heading-lg text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
          Join over 800+ businesses that have streamlined operations and increased profitability with Solby.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-white text-solby-blue hover:bg-white/90 transition-colors group"
          >
            Get Started Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </SectionWrapper>
    </div>
  </section>
);

export default CtaSection;
