import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const testimonials = [
  {
    quote: "I had trouble managing my multiple stores, but with Solby ERP, I can now track inventory, sales and customer data all in one place. It's been a game changer for my business.",
    name: "Kimutai Kibiwott",
    role: "Founder, Kim's Photography",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    quote: "The accounting and expenses module has helped me track my finances like never before. I can now see where every shilling goes and optimize my spending.",
    name: "Dj Warship",
    role: "Founder & Owner, Forever Grateful Concepts",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    quote: "Implementation was smooth and the support team went above and beyond. The ROI we've seen in just 6 months has exceeded our expectations by 200%.",
    name: "Faith Kinuthia",
    role: "CEO, Afrostyled Crafts Center",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    quote: "Solby ERP has helped us manage all the various sections of our Development Center. From the conference center to the farm and the accounting department, everything is now streamlined and efficient.",
    name: "Felix Kandie",
    role: "IT Administrator, AIC Cheptebo RDC",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-muted/50 relative">
      <div className="container-custom">
        <SectionWrapper className="text-center section-heading-spacing">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Testimonials</span>
          <h2 className="heading-lg mt-3 text-foreground">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses that have transformed their operations with Solby.
          </p>
        </SectionWrapper>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-5 h-5 fill-solby-blue text-solby-blue" />
                      ))}
                    </div>
                    <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div className="text-left">
                        <p className="font-heading font-semibold text-foreground">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-border"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
