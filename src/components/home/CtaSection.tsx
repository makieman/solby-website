import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="relative mt-8 md:mt-16 bg-gradient-to-br from-[#1a3ee8] via-[#254bec] to-[#3b5bf5] overflow-hidden">
    {/* Animated Waves Background */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="wave-container">
        <div className="wave-shape wave-1 animate-wave-slow"></div>
      </div>
      <div className="wave-container top-[20px]">
        <div className="wave-shape wave-2 animate-wave-slow-reverse"></div>
      </div>
      <div className="wave-container top-[40px]">
        <div className="wave-shape wave-3 animate-wave-slow [animation-duration:25s]"></div>
      </div>
    </div>

    {/* Pulsing Circles */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div className="circle-pattern w-96 h-96 -top-20 -left-20 animate-pulse [animation-duration:4s]"></div>
      <div className="circle-pattern w-64 h-64 top-40 right-10 animate-pulse [animation-duration:5s] [animation-delay:1s]"></div>
      <div className="circle-pattern w-80 h-80 bottom-10 -right-20 animate-pulse [animation-duration:6s] [animation-delay:2s]"></div>
    </div>

    {/* Content */}
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-sm">
        Ready to Transform Your Business?
      </h2>
      <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
        Join over 800+ businesses that have streamlined operations and increased profitability with Solby.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/contact"
          className="w-full sm:w-auto px-8 py-4 bg-white text-[#1a3ee8] rounded-full font-semibold text-base shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group ring-2 ring-white/30 btn-pulse-glow"
        >
          Get Started Today
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/contact"
          className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white rounded-full font-semibold text-base hover:bg-white/20 transition-all focus:ring-4 focus:ring-white/30 backdrop-blur-md"
        >
          Request Demo
        </Link>
      </div>
    </div>

    {/* Breathing SVG Bottom transition */}
    <div className="absolute bottom-[-1px] left-0 w-full leading-none z-20 origin-bottom animate-breathing">
      <svg className="block w-full h-16 md:h-24 lg:h-32 text-[#0a1120] fill-current" preserveAspectRatio="none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V160Z"></path>
      </svg>
    </div>
  </section>
);

export default CtaSection;
